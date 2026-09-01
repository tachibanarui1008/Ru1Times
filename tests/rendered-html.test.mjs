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

test("server-renders the Ru1Times homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /<title>Ru1Times · 小橘时代<\/title>/i);
  assert.match(html, /觀世相，愛憎離合。/);
  assert.match(html, /自分を綴る。/);
  assert.match(html, /personal gazette—not a final verdict on the world/);
  assert.match(html, /接住世界/);
  assert.match(html, /向内生长/);
  assert.match(html, /留下声音/);
  assert.doesNotMatch(html, /接收信息，|获得进步，|表达观点。|一份刊物，三件事情|读世界，|也写自己。|書己見。|世界を知る。|世の相を読み、/);
  assert.match(html, /橘瑠衣是谁/);
  assert.match(html, /1403143456@qq\.com/);
  assert.match(html, /tachibanarui1008@gmail\.com/);
  assert.match(html, /tachibana-rui-avatar\.png/);
  assert.match(html, /tachibana-rui-character-sheet\.png/);
  assert.match(html, /href="\/daily"/);
  assert.match(html, /href="\/weekly"/);
  assert.match(html, /Ru1Commentary/);
  assert.match(html, /Ru1Finance/);
  assert.match(html, /洪水之后，搜救与重建都在检验公共系统/);
  assert.match(html, /供给冲击：为什么能源上涨会同时推高物价、压低增长/);
  assert.match(html, /最新一期由内容索引自动更新/);
  assert.doesNotMatch(html, /进入 Ru1Daily|浏览全部刊物/);
});

test("server-renders Ru1Daily at its own route", async () => {
  const response = await render("/daily");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /publication-masthead/);
  assert.match(html, /第 011 期/);
  assert.match(html, /洪水之后，搜救与重建都在检验公共系统/);
  assert.match(html, /<h1>Ru1Daily<\/h1>/);
  assert.match(html, /以不同语言转述今日新闻，在阅读与鉴赏中提升多语言能力。/);
  assert.ok(html.indexOf("<h1>Ru1Daily</h1>") < html.indexOf('class="big-story"'));
  assert.doesNotMatch(html, /edition-meta|publication-map|Hot Words<\/span>|Briefings<\/span>/);
  assert.doesNotMatch(html, /Start Morning Brief|primary-action/);
  assert.doesNotMatch(html, /Save to Words|Today’s Challenge|Complete Today|连续学习天数/);
});

test("server-renders the editorial archive", async () => {
  const response = await render("/archive");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /ARCHIVE/);
  assert.match(html, />Archive<\/h1>/);
  assert.match(html, /六个月的战争/);
  assert.match(html, /当清算开始有了形状/);
  assert.match(html, /海上来的人，是我们/);
  assert.match(html, /来煎人寿/);
  assert.match(html, /当银行开始学着持有股权/);
  assert.match(html, /channel-filter/);
  assert.match(html, /daily-2026-08-26/);
  assert.match(html, /daily-2026-09-01/);
  assert.match(html, /finance-2026-09-01/);
});

test("server-renders the Ru1Weekly issue without editorial prompts", async () => {
  const response = await render("/weekly");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /When progress meets the stress test/);
  assert.match(html, /世界在同一张压力测试表上/);
  assert.match(html, /从算力账单到家庭预算/);
  assert.match(html, /数字给出边界，也制造错觉/);
  assert.match(html, /可信度如何被生产出来/);
  assert.match(html, /几项尚未完成的判断/);
  assert.match(html, /下一个验证窗口/);
  assert.match(html, /纪录说明机器跑到了哪里；压力测试说明这项进步还能走多远。/);
  assert.match(html, /AI 可以把未来收入写进愿景，但今天的芯片、电力和利息必须用今天的现金支付。/);
  assert.match(html, /信任不是省略核查，而是核查可以抵达的结果。/);
  assert.match(html, /publication-masthead/);
  assert.match(html, />第 002 期</);
  assert.doesNotMatch(html, /样刊 · 第 001 期/);
  assert.match(html, /<h1>Ru1Weekly<\/h1>/);
  assert.match(html, /以混合语言重组一周信息，在跨语境阅读中理解事件之间的联系。/);
  assert.match(html, /issue-lead/);
  assert.ok(html.indexOf("<h1>Ru1Weekly</h1>") < html.indexOf('class="issue-lead"'));
  assert.match(html, /検証（日本语 kenshō \/けんしょう，验证）/);
  assert.match(html, /대가（韩语 daega \/대가，代价）/);
  assert.match(html, /écart（法语 \/e\.kaʁ\/，差距）/);
  assert.doesNotMatch(html, /Hot Words|Today’s Challenge|Complete Today/);
  assert.doesNotMatch(html, /Ru1 Concord Edition|约 55% 中文|Confirmed、inference|prediction list|日报回答今天发生了什么/);
});

test("server-renders the Ru1Commentary edition", async () => {
  const response = await render("/commentary");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /奉献必须有回报吗？/);
  assert.match(html, /回报不一定是工资，但不能被当作零。/);
  assert.match(html, /各尽所能，按需分配/);
  assert.match(html, /读懂这篇时评/);
  assert.match(html, /The stages of distribution in the Critique of the Gotha Programme/);
  assert.match(html, /Contribution \/ dedication/);
  assert.match(html, /publication-masthead/);
  assert.match(html, /第 003 期/);
  assert.match(html, /<h1>Ru1Commentary<\/h1>/);
  assert.match(html, /记录橘瑠衣的所思所想，在个人经验与公共议题之间保留真实判断。/);
  assert.match(html, /issue-lead/);
  assert.ok(html.indexOf("<h1>Ru1Commentary</h1>") < html.indexOf('class="issue-lead"'));
  assert.doesNotMatch(html, /English Version|日本語版/);
});

test("server-renders the Ru1Finance edition", async () => {
  const response = await render("/finance");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Supply shocks: when higher energy costs lift inflation and weaken growth/);
  assert.match(html, /publication-masthead/);
  assert.match(html, /第 008 期/);
  assert.match(html, /<h1>Ru1Finance<\/h1>/);
  assert.match(html, /为金融学生准备的快速日报：学习一个概念，读懂今日市场。/);
  assert.match(html, /issue-lead/);
  assert.ok(html.indexOf("<h1>Ru1Finance</h1>") < html.indexOf('class="issue-lead"'));
  assert.match(html, /供给冲击：为什么能源上涨会同时推高物价、压低增长/);
  assert.match(html, /今日总览/);
  assert.match(html, /3,981\.74/);
  assert.match(html, /66,215\.34/);
  assert.match(html, /6,835\.80/);
  assert.match(html, /53,185\.90/);
  assert.match(html, /26,370\.89/);
  assert.match(html, /quote-change (up|down)/);
  assert.match(html, /2026-09-01 收盘/);
  assert.match(html, /2026-08-31 收盘/);
  assert.match(html, /布伦特原油站上 91 美元/);
  assert.doesNotMatch(html, /即将上线/);
});
