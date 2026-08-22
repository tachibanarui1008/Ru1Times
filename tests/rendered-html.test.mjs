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
  assert.match(html, /当安全开始为一切定价/);
});

test("server-renders the Ru1Weekly draft", async () => {
  const response = await render("/weekly");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /When security starts pricing everything/);
  assert.match(html, /世界在同一张桌上/);
  assert.match(html, /潜流与回声/);
  assert.match(html, /数字之后/);
  assert.match(html, /未完成的结论/);
  assert.match(html, /Ru1 Concord Edition/);
  assert.match(html, /which yield 仍然可以接受/);
  assert.match(html, /search for visibility or 見通し/);
  assert.match(html, /見通し（日语 みとおし \/ mitōshi，前景判断）/);
  assert.match(html, /눈치（韩语 nunchi \/ nun\.tɕʰi，察言观色的能力）/);
  assert.match(html, /seguridad（西班牙语 \/se\.ɣu\.ɾiˈðað\/，安全）/);
  assert.match(html, /desfase（西班牙语 \/desˈfa\.se\/，不同步或错位）/);
  assert.doesNotMatch(html, /Hot Words|Today’s Challenge|Complete Today/);
});
