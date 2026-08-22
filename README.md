# Ru1Times

小橘时代（TACHIBANA）是橘瑠衣的个人电子报纸项目。`Ru1Daily` 是每日版面，未来还会扩展 `Ru1Weekly`、`Ru1Commentary` 和 `Ru1Finance`。

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
- `app/globals.css`：全站版式和响应式样式
- `scripts/export-report.mjs`：单期静态 HTML 导出脚本
- `tests/rendered-html.test.mjs`：首页和 Archive 渲染验收

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

## 本地开发与验收

项目要求 Node.js `>=22.13.0`。常用命令：

```bash
pnpm install
pnpm dev
pnpm test
pnpm run build
```

本地预览通常为 `http://localhost:3000/`，Archive 为 `http://localhost:3000/archive`。

构建通过只说明代码和服务端渲染成功；如果要发布到 GitHub Pages 或其他托管平台，还要另外确认静态导出、资源路径、子路径和部署配置。
