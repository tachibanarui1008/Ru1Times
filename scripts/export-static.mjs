import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const output = path.join(root, "out");
const client = path.join(root, "dist", "client");
const serverUrl = pathToFileURL(path.join(root, "dist", "server", "index.js"));
const { default: worker } = await import(serverUrl.href);

const mime = new Map([
  [".css", "text/css"], [".js", "text/javascript"], [".json", "application/json"],
  [".svg", "image/svg+xml"], [".png", "image/png"], [".jpg", "image/jpeg"],
  [".webp", "image/webp"], [".woff2", "font/woff2"], [".ico", "image/x-icon"],
]);

async function assetFetch(request) {
  const url = new URL(request.url);
  const relative = decodeURIComponent(url.pathname).replace(/^\//, "");
  const file = path.resolve(client, relative);
  if (!file.startsWith(`${client}${path.sep}`)) return new Response("Forbidden", { status: 403 });
  try {
    const body = await readFile(file);
    return new Response(body, { headers: { "content-type": mime.get(path.extname(file)) ?? "application/octet-stream" } });
  } catch {
    return new Response("Not found", { status: 404 });
  }
}

async function render(route) {
  const response = await worker.fetch(
    new Request(`http://static.local${route}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: assetFetch } },
    { waitUntil() {}, passThroughOnException() {} },
  );
  if (!response.ok) throw new Error(`Failed to render ${route}: ${response.status}`);
  return response.text();
}

function relativize(html, depth) {
  const prefix = "../".repeat(depth) || "./";
  return html
    .replace(/url\([^)]*[/\\]\.vinext[/\\]fonts[/\\]([^/\\]+)[/\\]([^)]+)\)/g, `url(${prefix}_next/static/_vinext_fonts/$1/$2)`)
    .replace(/(href|src|action)=(['"])\/(?!\/)/g, `$1=$2${prefix}`);
}

async function writePage(route, relativeOutput) {
  const destination = path.join(output, relativeOutput);
  await mkdir(path.dirname(destination), { recursive: true });
  const depth = relativeOutput.split(/[\\/]/).length - 1;
  await writeFile(destination, relativize(await render(route), depth), "utf8");
}

await rm(output, { recursive: true, force: true });
await cp(client, output, { recursive: true });
await writePage("/", "index.html");
await writePage("/weekly", "weekly/index.html");
await writePage("/commentary", "commentary/index.html");
await writePage("/finance", "finance/index.html");
await writePage("/archive", "archive/index.html");

const manifest = JSON.parse(await readFile(path.join(root, "app", "generated", "content-manifest.json"), "utf8"));
for (const issues of Object.values(manifest)) {
  for (const issue of issues) {
    await writePage(`/archive?edition=${encodeURIComponent(issue.id)}`, `archive/${issue.id}/index.html`);
  }
}

await writeFile(path.join(output, ".nojekyll"), "", "utf8");
await writeFile(path.join(output, "404.html"), await readFile(path.join(output, "index.html")), "utf8");
console.log(`Static site exported to ${output}`);
