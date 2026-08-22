import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the Ru1Daily homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /<title>Ru1Times · 小橘时代<\/title>/i);
  assert.match(html, /Ru1Times/);
  assert.match(html, /Ru1Commentary/);
  assert.match(html, /Ru1Finance/);
  assert.match(html, /六个月的战争/);
  assert.doesNotMatch(html, /Save to Words|Today’s Challenge|Complete Today|连续学习天数/);
});

test("server-renders the editorial archive", async () => {
  const response = await render("/archive");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /ARCHIVE/);
  assert.match(html, />Archive<\/h1>/);
  assert.match(html, /六个月的战争/);
});
