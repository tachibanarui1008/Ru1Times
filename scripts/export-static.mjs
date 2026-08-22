import { cp, mkdir, readdir, readFile, writeFile } from "node:fs/promises";
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

await cp(client, output, { recursive: true });
await writePage("/", "index.html");
await writePage("/weekly", "weekly/index.html");
await writePage("/commentary", "commentary/index.html");
await writePage("/archive", "archive/index.html");

const reportFiles = (await readdir(path.join(root, "app", "reports")))
  .filter(file => /^\d{4}-\d{2}-\d{2}\.ts$/.test(file))
  .sort();
for (const file of reportFiles) {
  const date = file.slice(0, 10);
  await writePage(`/archive?edition=${date}`, `archive/${date}/index.html`);
}

const weeklyFiles = (await readdir(path.join(root, "app", "weekly-reports")))
  .filter(file => /^\d{4}-W\d{2}\.ts$/.test(file))
  .sort();
for (const file of weeklyFiles) {
  const id = file.slice(0, -3);
  await writePage(`/archive?edition=${id}`, `archive/${id}/index.html`);
}

const commentaryFiles = (await readdir(path.join(root, "app", "commentary-reports")))
  .filter(file => /^\d{4}-\d{2}-\d{2}\.ts$/.test(file))
  .sort();
for (const file of commentaryFiles) {
  const date = file.slice(0, 10);
  await writePage(`/archive?edition=commentary-${date}`, `archive/commentary-${date}/index.html`);
}


await writeFile(path.join(output, ".nojekyll"), "", "utf8");
await writeFile(path.join(output, "404.html"), await readFile(path.join(output, "index.html")), "utf8");
console.log(`Static site exported to ${output}`);
