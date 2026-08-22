# Shared Ru1Times contract

## Project map

| Channel | Issue files | Type | Registry | Latest route |
|---|---|---|---|---|
| Ru1Daily | `app/reports/YYYY-MM-DD.ts` | `app/report-types.ts` | `app/data.ts` | `/` |
| Ru1Weekly | `app/weekly-reports/YYYY-Www.ts` | `app/weekly-types.ts` | `app/weekly-data.ts` | `/weekly` |
| Ru1Commentary | `app/commentary-reports/YYYY-MM-DD.ts` | `app/commentary-types.ts` | `app/commentary-data.ts` | `/commentary` |
| Ru1Finance | `app/finance-reports/YYYY-MM-DD.ts` | `app/finance-types.ts` | `app/finance-data.ts` | `/finance` |

Archive rendering is driven by these registries. A file that is not imported and placed in the relevant array is not published in the site experience.

## Shared editorial voice

- Brand: `Ru1Times / 小橘时代 · TACHIBANA`. Channel names are not the site-wide brand.
- Chinese is the principal editorial language. Prefer specific facts, restrained judgment, and clear causal reasoning.
- Avoid clickbait, manufactured quotations, decorative jargon, excessive slogans, and claims stronger than the evidence.
- Preserve the existing rational, simple, restrained visual system. Do not add gradients, poster effects, ornamental illustrations, new fonts, or animation without an explicit design request.
- All four channels use the same opening sequence. `PublicationMasthead` contains the dark issue-number badge, publication date, fixed channel name, and fixed founding statement. Only after that masthead may the current issue title, subtitle, dek, and body begin. Never replace the channel name with the current issue headline. Do not add reading-time/content-count statistics to the masthead, and do not place a four-channel switcher below it; the global navigation already handles channel switching.
- Render the founding statement as small supporting copy, clearly subordinate to the channel name and issue headline. Keep exactly one divider between the masthead and the issue lead; do not stack borders from adjacent sections.
- Keep these founding statements exact unless the author explicitly revises them:
  - `Ru1Daily`: `以不同语言转述今日新闻，在阅读与鉴赏中提升多语言能力。`
  - `Ru1Weekly`: `以混合语言重组一周信息，在跨语境阅读中理解事件之间的联系。`
  - `Ru1Commentary`: `记录橘瑠衣的所思所想，在个人经验与公共议题之间保留真实判断。`
  - `Ru1Finance`: `为金融学生准备的快速日报：学习一个概念，读懂今日市场。`
- Preserve dated history. New issues are new files; do not replace prior issues.

## AI credit

Every issue must contain:

```ts
ai_credit: {
  provider: "AUTHOR-PROVIDED PROVIDER",
  model: "AUTHOR-PROVIDED MODEL",
  role: "Concise description of actual assistance",
},
```

Copy `provider` and `model` exactly from the author. Never reuse the previous issue by default. Suitable role phrases include `资料研究、事实核查与编辑协作` and `事实核查、结构重写与文字编辑`.

## Completion checks

- Filename, ID, date/week, edition number, timestamps, draft status, and export variable agree.
- Important facts have traceable original sources; dates and numbers were checked in the opened source.
- The new issue is first in the correct registry and old issues remain present.
- `ai_credit` is present and matches the author's explicit model statement.
- `/`, the channel route, `/archive`, and the issue archive route render as applicable.
- `pnpm test` passes. Static export is refreshed when required.
- Do not claim GitHub or the public website updated unless the corresponding push/deployment was separately completed and verified.
- `制作` ends with a local, reviewable draft. Only `推送发布` changes the issue to formal status and starts the GitHub Pages publication path.
