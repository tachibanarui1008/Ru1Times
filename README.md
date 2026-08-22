# Ru1Times

小橘时代（TACHIBANA）是橘瑠衣的个人电子报纸项目。当前包含每日版面 `Ru1Daily` 与每周长读 `Ru1Weekly`，未来还会扩展 `Ru1Commentary` 和 `Ru1Finance`。

本项目主要由 AI agent 负责资料整理、新闻核查、日报写作和代码维护。任何 agent 接手前，都应先阅读本文件。

## 品牌与栏目

- 总品牌：`Ru1Times`
- 每日版：`Ru1Daily`，每日新闻、语言和全球观察
- 每周版：`Ru1Weekly`，每周精选、主题回顾和长期趋势
- 时评版：`Ru1Commentary`，小橘时评、个人判断和短评
- 财经版：`Ru1Finance`，市场、经济、公司和制度观察
- 历史入口：`Archive`

左上角统一显示：

```text
Ru1Times
小橘时代 · TACHIBANA
```

`Ru1Daily` 是一个版面名称，不是整个网站的总品牌。不要把网站标题、页脚或 Open Graph 标题重新写回 RuiDaily 或小橘日报旧品牌。

## 项目结构

- `app/components/Today.tsx`：日报阅读版面和交互
- `app/components/SiteChrome.tsx`：总导航、品牌、页脚和主题切换
- `app/components/LibraryPages.tsx`：Archive 页面
- `app/reports/YYYY-MM-DD.ts`：正式日报数据
- `app/reports/demo.ts`：样刊数据，不作为正式日报
- `app/report-types.ts`：日报数据类型
- `app/data.ts`：注册正式日报并决定最新一期
- `app/components/Weekly.tsx`：周报长文本阅读版面
- `app/weekly-reports/YYYY-Www.ts`：正式周报或周报样刊数据
- `app/weekly-types.ts`：周报章节与类协和语段落类型
- `app/weekly-data.ts`：注册周报并决定最新一期
- `app/weekly/page.tsx`：Ru1Weekly 最新一期入口
- `app/globals.css`：全站版式和响应式样式
- `scripts/export-report.mjs`：单期静态 HTML 导出脚本
- `scripts/export-static.mjs`：导出首页、周报、Archive 和各期静态归档到 `out/`
- `tests/rendered-html.test.mjs`：首页、Ru1Weekly 和 Archive 渲染验收

## AI agent 的日报编写要求

### 1. 开始前检查

1. 读取本 README、`app/report-types.ts`、最近一期日报和 `app/data.ts`。
2. 确认当前日期、时区和最新一期编号。
3. 检查工作区是否有未提交修改；保留用户已有修改，不覆盖无关文件。
4. 新闻型内容必须联网检索，不得凭记忆编造“今天的新闻”。

### 2. 新闻和事实标准

- 优先使用 Reuters、AP、BBC、Financial Times、官方政府/央行/统计机构、NASA 等可追溯来源。
- 每个重要事实至少记录一个来源 URL、来源名称和发布日期。
- 区分“来源明确说了什么”和 agent 的解释；推断必须用“可能、意味着、值得关注的是”等措辞。
- 不把搜索摘要当作完整证据；打开原文或权威页面确认标题、日期、数字和上下文。
- 对战争、灾害、政治、市场、医疗和安全新闻保持克制，不夸张，不制造确定性。
- 数字、日期、比例、机构名称和人名必须逐项核对。

### 3. 每期内容结构

正式日报应尽量保持以下结构：

1. `big_story`：一个主线事件，给出中文标题、英文标题、中文摘要、阅读时间和来源。
2. `hot_words`：8 个左右与当天主题直接相关的词；每个词要有中文、日语、韩语、罗马字、Why today 和英文例句。
3. `expressions`：英语、日语、韩语各 1 条自然表达，包含语境、语气、对话和使用提醒。
4. `briefings`：4 条全球新闻速递；每条提供中文、英文、日文、韩文，并补充日语/韩语分词信息。
5. `deep_read`：围绕主线事件的中英双语深读，不要只是重复摘要。
6. `context`：3 条帮助读者理解背景的解释。
7. `history_lens`：只有确实有历史比较价值时才使用；没有合适内容可以设为 `null`。

当前 Ru1Times 是展示型电子报纸，不是学习打卡工具。不要新增收藏、答题、完成记录、连续阅读、Progress 或用户账户功能。不要把内容写入 `localStorage`。

### 4. 语言和风格

- 中文是编辑主语言，清楚、克制、有信息密度。
- 英文要自然、适合真实新闻阅读，不要逐字翻译中文。
- 日语和韩语以短句为主，确保翻译准确、语气自然，并保持分词、读音和中文解释一致。
- 主标题尽量具体，避免“世界发生了什么”这类空泛标题。
- 摘要先说事实，再说为什么值得关注，最后指出不确定性或观察点。
- 不使用煽动性标题、未经证实的阴谋论或 AI 自创引语。

## 新增一期日报的标准流程

1. 以 `app/reports/2026-08-22.ts` 为结构参考，新建当天的 `app/reports/YYYY-MM-DD.ts`。
2. 导出名称必须与文件日期和导出变量一致，例如：

```ts
export const realReport20260823: DailyReport = {
  id: "2026-08-23",
  date: "2026-08-23",
  // ...
};
```

3. 在 `app/data.ts` 引入并加入 `reports` 数组，把最新正式日报放在第一位。
4. 检查 `edition_number`、`published_at`、`updated_at`、来源 URL 和所有数组数量。
5. 运行构建和测试：

```bash
pnpm test
```

6. 如果需要单期离线 HTML，再运行：

```bash
node scripts/export-report.mjs YYYY-MM-DD
```

7. 最后检查首页、`/archive`、对应归档详情和移动端版式。构建失败时不得宣称已完成。

## 给日报 agent 的推荐提示词

下面的提示词可以直接交给负责写日报的 agent：

```text
你是 Ru1Times 的日报编辑 agent。请为 {DATE} 编写 Ru1Daily 第 {EDITION} 期。

品牌规则：
- 总品牌是 Ru1Times，小橘时代 · TACHIBANA。
- 本期版面是 Ru1Daily；不要把 RuiDaily 当作总品牌。
- 这是展示型个人电子报纸，不要加入收藏、答题、Progress、完成记录、用户账户或 localStorage。

工作要求：
1. 先联网检索 {DATE} 前后最重要的国际、经济、科技、社会或气候新闻。
2. 优先使用 Reuters、AP、BBC、Financial Times、官方机构和原始数据页面。
3. 打开来源核对日期、数字、人物、机构和上下文；不要只依据搜索摘要。
4. 选择一个能串起当天信息的主线，写出事实清楚、克制而有观点的中文摘要。
5. 完整填充 DailyReport：big_story、hot_words、expressions、briefings、deep_read、context、history_lens、sources。
6. 保持中文、English、日本語、한국어四语内容自然且互相对应；日语和韩语必须提供分词/读音信息。
7. 每个重要事实写入 sources，包含 label、title、url、published。
8. 不编造来源、数字、引语或未来事件；无法确认的内容明确标注不确定性。
9. 直接修改 app/reports/YYYY-MM-DD.ts 和 app/data.ts，不要改动无关页面。
10. 完成后运行 pnpm test，并报告构建结果、测试结果和仍存在的风险。

输出前自检：
- 日期、期号和文件名一致；
- 没有残留旧日期或旧主标题；
- 没有 Rui/RuiDaily 作为总品牌的旧文案；
- 没有收藏、答题、Progress 或 localStorage 逻辑；
- 所有来源 URL 可追溯；
- 首页和 Archive 能渲染。
```

## AI agent 的周报编写要求

### 1. Ru1Weekly 的定位

- `Ru1Daily` 侧重每日新闻与语言学习；`Ru1Weekly` 侧重一周信息的筛选、连接、解释和判断。
- 周报不是七份日报的拼接，也不是由大量短卡片组成的信息面板。
- 正文应以连续长文本为主，每章围绕一个完整论点展开，并把时政、金融、科技、产业和社会新闻放进同一套因果关系。
- 每一期必须区分已确认事实、编辑推断与仍然未知的部分，并说明什么新证据可能改变本期判断。

### 2. 固定长刊结构

周报采用以下长文本结构；标题可以随主题调整，但不要退回“几条新闻、几个数字、三条趋势”一类报告式命名：

1. `OPENING ESSAY / 本周主线`：提出贯穿全周的中心问题。
2. `THE WORLD AT ONE TABLE / 世界在同一张桌上`：连接时政、经济与产业事实。
3. `CROSSCURRENTS AND ECHOES / 潜流与回声`：解释跨市场、跨制度的传导。
4. `BEYOND THE FIGURES / 数字之后`：把重要数字写进论证，并说明数字不能证明什么。
5. `THE PRICE OF CREDIBILITY / 关系的价格`：寻找表面无关事件之间的共同机制。
6. `PROVISIONAL CONCLUSIONS / 未完成的结论`：分别写 confirmed、inference 与 unknown。
7. `BEFORE NEXT SUNDAY / 下周之前`：写可能改写本期判断的事件和观察信号，不做无依据预测。
8. `MARGINALIA / 余白`：以一段较个人化的编辑札记收束。

### 3. Ru1 Concord 类协和语规范

周报正文使用 Ru1 Concord 类协和语。目标是让多种语言共同完成同一句思想，而不是逐词替换或中英文分段翻译。

- 全篇总体语言比例约为：55% 中文、35% English、10% 日语、韩语、西班牙语、法语、俄语等其他语言。比例按整篇文章和语义单元衡量，不要求每句话机械达到比例。
- 中文负责主要句法、时间关系和论证衔接；English 必须以完整 phrase、clause、固定搭配或专业术语组集中出现。
- 不要在一个中文短句中把单个英文名词、动词、形容词逐词撒开。能写成完整英文短语时，不要写成半个中文词组加一个英文词尾。
- 英文可以连续出现数个词或一个短从句，但不要恢复为大段纯英文与大段中文交替。
- 日语、韩语、西班牙语、法语、俄语等用于提供难以被中英文完全替代的 nuance，可以用 `or` 引出同义表达。
- 每一次出现其他语言，都必须同时提供读音和中文释义：
  - 日语：`見通し（日语 みとおし / mitōshi，前景判断）`
  - 韩语：`눈치（韩语 nunchi / nun.tɕʰi，察言观色的能力）`
  - 西班牙语：`seguridad（西班牙语 /se.ɣu.ɾiˈðað/，安全）`
  - 法语：`durée（法语 /dy.ʁe/，持续时间）`
  - 俄语：`доверие（俄语 /dɐˈvʲerʲɪje/，信任）`
- 同一个小语种词再次出现时，仍应保留标音和中文释义，或改用中英文表达，不留下无注释的词。

不推荐：

```text
哪一个 yield 仍可 accepted，也决定 model 能在怎样的 environment 里继续 training。
这里的 wait 不是消极，而是一种 search for visibility。見通し（日语 みとおし / mitōshi，前景判断）正好描述这种需要。
```

推荐：

```text
它决定 which yield 仍然可以接受，也决定 which models 可以在怎样的 environments 继续训练。
这里的 wait 不是消极，而是一种 search for visibility or 見通し（日语 みとおし / mitōshi，前景判断）。
```

### 4. 周报事实与写作标准

- 覆盖周期、截稿时间和发布日期必须明确；周六样刊不得假装已经覆盖尚未发生的周日新闻。
- 打开原始报道或官方页面核对日期、数字、人物、机构和上下文，不使用搜索摘要代替来源。
- 中心论点必须由多个可追溯事实支持；不要为了制造“万事相连”的效果强行建立因果关系。
- 数字必须写清统计口径、比较基准及局限，不把不同口径的数字直接相减或比较。
- `sources` 必须覆盖正文重要事实，并包含来源、标题、URL 和发布日期。
- 不编造引语、统计、外语表达、读音、IPA 或未来事件。

## 新增一期周报的标准流程

以下流程适用于每周末新增一期 Ru1Weekly。新 agent 不得跳过读取、注册、归档和验收步骤。

### 1. 接手前确认

1. 读取本 README、`app/weekly-types.ts`、最近一期 `app/weekly-reports/YYYY-Www.ts`、`app/weekly-data.ts` 和 `scripts/export-static.mjs`。
2. 检查工作区已有修改并保留用户内容，不覆盖其他 agent 或用户尚未提交的文件。
3. 按 Asia/Shanghai 时区确认报道截止时间、覆盖周期、ISO 周编号、发布日期和下一期 `edition_number`。
4. 查看最近一期是否仍为 `draft: true`。样刊或待审稿不得擅自改成正式刊，也不得在未获用户认可时推送或发布。

### 2. 建立新一期文件

1. 复制最近一期作为结构参考，但不要覆盖旧刊；新建 `app/weekly-reports/YYYY-Www.ts`。
2. 文件名、`id`、导出变量、覆盖周期必须一致。例如：

```ts
import type { WeeklyReport } from "../weekly-types";

export const weeklyReport2026W35: WeeklyReport = {
  id: "2026-W35",
  week_label: "2026 · WEEK 35",
  period_start: "2026-08-23",
  period_end: "2026-08-29",
  published_at: "2026-08-29T18:00:00+08:00",
  updated_at: "2026-08-29T18:00:00+08:00",
  edition_number: 2,
  draft: true,
  // 继续填写其余字段
};
```

3. `WeeklyReport` 的字段不得遗漏：
   - 基本信息：`id`、`week_label`、`period_start`、`period_end`、`published_at`、`updated_at`、`edition_number`、`draft`、`estimated_minutes`；
   - 标题信息：`title_zh`、`title_en`、`dek`、`editorial_note`；
   - 正文：`cover_story`、`chapters`、`closing_note`；
   - 来源账本：`sources`。
4. 每个 `chapters` 项必须包含唯一的 `id`、`eyebrow`、`title_zh`、`title_en`、`standfirst` 和 `paragraphs`；`pullquote` 可按需要添加。
5. 每个正文段落使用 `{ language: "concord", text: "..." }`。不得新增大段独立英文段落，也不得把长文重新拆成短新闻卡片。

### 3. 研究、写作与核查

1. 先确定一个可以连接多个领域的中心问题，再选择支持它的新闻；不要先收集一堆新闻后强行寻找共同点。
2. 打开原始报道、官方公告或数据页面，逐项核对日期、人物、数字、统计口径和上下文。
3. 按“本周主线—跨领域连接—传导机制—数字解释—共同机制—暂定结论—下周证据—余白”完成长文本。
4. 全篇按约 55% 中文、35% English、10% 其他语言控制；比例按完整文章判断，不逐句计数。
5. 对所有日语、韩语、西班牙语、法语和俄语使用 `词语（语言 /读音/，中文释义）` 的统一结构；日语和韩语的假名、罗马字及音标写法遵循上文示例。
6. 将 confirmed facts、editorial inference 和 unknowns 分开，并明确写出什么证据会改变本期判断。
7. 正文每个重要事实都要能在 `sources` 中找到对应来源；没有核实的内容应删除或明确标注不确定性。

### 4. 注册、归档与验收

1. 在 `app/weekly-data.ts` 中引入新文件，并把新一期放在 `weeklyReports` 数组第一位；`latestWeeklyReport` 使用数组第一项作为 `/weekly` 最新一期。
2. 注册后，Archive 会从 `weeklyReports` 读取该期。检查 `/archive?edition=YYYY-Www` 能打开完整周报，而不是只在 Archive 列表中出现标题。
3. 运行完整渲染验收：

```bash
pnpm test
```

4. 生成网站静态归档：

```bash
pnpm run export:static
```

5. 确认 `out/weekly/index.html`、`out/archive/index.html` 和 `out/archive/YYYY-Www/index.html` 已生成。
6. 最后检查 `/weekly`、`/archive`、对应归档详情和移动端长文版式；构建或归档失败时不得宣称完成。
7. 只有在用户明确认可本期内容后，才将 `draft` 改为 `false`，重新执行测试与静态导出，并按用户授权提交、推送或发布。

### 5. 完成前自检

- 文件名、`id`、ISO 周编号、覆盖周期、期号和发布时间一致；
- 新一期已置于 `weeklyReports` 第一位，旧刊没有被覆盖或删除；
- 正文是连贯长文本，八个章节功能完整，没有退回短卡片模式；
- English 以完整 phrase 或 clause 集中出现，没有逐词拼贴或大段对照翻译；
- 每个小语种表达都有语言名称、正确读音和中文释义；
- confirmed、inference、unknown 与证伪条件均已写明；
- 重要事实、数字和未来日程均有可追溯来源；
- `/weekly`、Archive 列表、归档详情和静态文件均能正常打开；
- 未经用户认可，不把样刊标为正式刊，也不擅自推送或发布。

## 给周报 agent 的推荐提示词

```text
你是 Ru1Times 的周报编辑 agent。请为 {PERIOD_START} 至 {PERIOD_END} 编写 Ru1Weekly 第 {EDITION} 期。

定位：
- Ru1Daily 负责每日新闻与语言学习；Ru1Weekly 负责一周信息的筛选、连接、解释和判断。
- 不要把七天新闻按日期拼接，不要写成短卡片、排行榜或“几条趋势、几个数字”的报告。
- 以数篇彼此衔接的长文本组成一份完整 weekend review。

资料要求：
1. 联网检索本周最重要的时政、金融、科技、产业、社会和气候新闻。
2. 优先使用 Reuters、AP、BBC、Financial Times、政府、央行、统计机构、公司原始公告和研究机构资料。
3. 打开原文核对事实；每个重要数字、人名、日期和机构都必须可追溯。
4. 选择一个能够连接多个领域的中心问题，但不要强行建立没有证据的因果关系。
5. 明确区分 confirmed facts、editorial inference 和 unknowns，并说明 what evidence would change the judgment。

长刊结构：
- Opening Essay / 本周主线
- The World at One Table / 世界在同一张桌上
- Crosscurrents and Echoes / 潜流与回声
- Beyond the Figures / 数字之后
- The Price of Credibility / 关系的价格
- Provisional Conclusions / 未完成的结论
- Before Next Sunday / 下周之前
- Marginalia / 余白

Ru1 Concord 语言规则：
1. 全篇总体约 55% 中文、35% English、10% 日语、韩语、西班牙语、法语、俄语等其他语言；按整篇衡量，不逐句机械配额。
2. 中文维持句法主干；English 以完整 phrase、clause、固定搭配或专业术语组集中出现。
3. 禁止逐词撒入英文。不要写“哪一个 yield 仍可 accepted”；应写“which yield 仍然可以接受”。
4. 可以写“这里的 wait 不是消极，而是一种 search for visibility or 見通し（日语 みとおし / mitōshi，前景判断）”。
5. 不要出现大段纯英文与大段中文的对照翻译。
6. 每个非中英词都必须附读音和中文释义；日语给假名与罗马字，韩语给罗马字与音标，西/法/俄语给 IPA。
7. 小语种表达必须真正补充 nuance，不能作为装饰或随机替词。

执行步骤：
1. 先读取 README、app/weekly-types.ts、最近一期周报、app/weekly-data.ts 和 scripts/export-static.mjs，并检查工作区已有修改。
2. 新建 app/weekly-reports/YYYY-Www.ts，不覆盖历史刊物；完整填写 WeeklyReport 的元数据、标题、cover_story、chapters、closing_note 和 sources。
3. 在 app/weekly-data.ts 引入新刊并放到 weeklyReports 第一位。
4. 先保持 draft: true；只有得到用户明确认可后才能改为 false、推送或发布。
5. 运行 pnpm test 和 pnpm run export:static，检查 /weekly、/archive、/archive?edition=YYYY-Www 及 out/archive/YYYY-Www/index.html。

输出前自检：
- 全文以长段落为主，没有退回短卡片模式；
- English 以短语和从句集中出现，没有逐词拼贴；
- 没有大段独立英文；
- 所有小语种均有正确读音和中文释义；
- confirmed、inference、unknown 没有混写；
- 日期、期号、覆盖周期和来源一致；
- /weekly 与 Archive 均能渲染。
```

## 本地开发与验收

项目要求 Node.js `>=22.13.0`。常用命令：

```bash
pnpm install
pnpm dev
pnpm test
pnpm run build
```

本地预览通常为 `http://localhost:3000/`，Ru1Weekly 为 `http://localhost:3000/weekly`，Archive 为 `http://localhost:3000/archive`。

构建通过只说明代码和服务端渲染成功；如果要发布到 GitHub Pages 或其他托管平台，还要另外确认静态导出、资源路径、子路径和部署配置。

## 项目日志

### 2026-08-22 · Ru1Weekly 样刊与工作流建立

- 新增 Ru1Weekly 长文本版面、`/weekly` 入口和 Archive 周报归档读取。
- 当前样刊为 `2026-W34`、第 1 期，仍保持 `draft: true`；它是后续周刊的结构参考，不应被新一期覆盖。
- 周刊定位确定为一周信息的筛选、连接、解释和判断，与侧重语言学习的 Ru1Daily 区分。
- 正文确定采用 Ru1 Concord 类协和语：约 55% 中文、35% English、10% 其他语言；English 以完整短语或从句集中出现。
- 小语种统一采用 `词语（语言 /读音/，中文释义）` 的结构，例如 `desfase（西班牙语 /desˈfa.se/，不同步或错位）`；日语和韩语按规范补充假名、罗马字或音标。
- 固定长刊结构、事实与推论边界、来源要求、新一期注册流程和静态归档验收已记录在本 README。
- 静态导出会保留 `out/weekly/index.html`、`out/archive/index.html` 以及 `out/archive/YYYY-Www/index.html`；新增周刊必须同时写入文件并注册到 `weeklyReports`。
- 用户已授权将当前样刊版本推送至 GitHub 留档；样刊仍保持 `draft: true`，这次版本推送不等于正式刊发布。
