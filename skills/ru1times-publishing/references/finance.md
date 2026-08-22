# Ru1Finance

## Purpose

Ru1Finance is a quick finance report for finance students, produced when the author requests it rather than on a fixed schedule. Its fixed founding statement is `为金融学生准备的快速日报：学习一个概念，读懂今日市场。` It combines one durable learning topic with a timestamped market snapshot. It is explanatory journalism, not personalized investment advice.

## Learning section

Use the current `FinanceReport` schema. `learning` covers one concept, financial disaster, or economics event through explanatory blocks, a concrete case, benefits and boundaries, and concise takeaways. Define the mechanism before judging it. Give legal, institutional, accounting, or historical claims reliable sources and dates.

## Market section

Cover mainland China, Hong Kong, Japan, Korea, the United States, and Europe using the latest complete trading-session perspective. Record `market_as_of` and each market's `as_of`; do not combine live, intraday, and prior-close figures as if simultaneous. Cross-check price moves and key company metrics. Mark rumours explicitly, explain the measurement basis, and omit figures that cannot be confirmed.

Use the stable visible heading `今日总览 / Today at a glance`. Do not name this section by the number of markets, such as `六市场总览`, and do not add explanatory copy about close-to-close calculation, green/red direction, or “international convention” below the heading. Show only the data timestamp there; the cards and figures should carry the detail.

`movers` selects genuinely unusual moves, financing/listing events, sector reversals, or shareholder-return news. `companies` provides only the key figures needed to understand those events. Keep market description separate from causal inference.

## File workflow

Create `app/finance-reports/YYYY-MM-DD.ts`, use a date-matching export name, and fill author-provided `ai_credit`. Register first in `financeReports`. Archive IDs use `finance-YYYY-MM-DD` to avoid collision with Ru1Daily. Run `pnpm test`; refresh `pnpm run export:static` when producing an archival/publication-ready issue. Verify `/finance`, Archive, and the finance detail page.
