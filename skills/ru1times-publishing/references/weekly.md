# Ru1Weekly

Its fixed founding statement is `以混合语言重组一周信息，在跨语境阅读中理解事件之间的联系。` The channel identity and this statement appear before the current issue headline.

## Coverage window

Publish on the weekend. Cover the same week's Monday 00:00 through Friday 23:59 in Asia/Shanghai. Saturday and Sunday news belongs to the next issue. Read all five formal weekday Ru1Daily issues and all their sources; disclose missing days instead of pretending the set is complete.

Additional sources must also fall within the Monday-Friday window. Reopen original sources to verify dates, people, numbers, and context.

## Long-form structure

The weekly is synthesis, not seven daily summaries or a card dashboard. Use the current `WeeklyReport` schema and long connected chapters: opening thesis, events at one table, crosscurrents/transmission, numbers and limits, shared mechanism, provisional conclusions, evidence to watch, and marginalia. Sections may flex, but the argument must distinguish confirmed facts, inference, unknowns, and what evidence could change the judgment.

## Ru1 Concord

Target roughly 55% Chinese, 35% English, and 10% other languages across the full issue. Chinese carries syntax and reasoning. English appears as complete phrases, clauses, collocations, or technical terms—not isolated word sprinkling or separate translated blocks. Other languages add real nuance and always include language, pronunciation/romanization, and Chinese meaning each time they appear.

## File workflow

Create `app/weekly-reports/YYYY-Www.ts`; ensure ISO week, Monday-Friday dates, weekend `published_at`, variable name, and edition agree. Keep `draft: true` until approval, then set it to `false`. The build-time index discovers and sorts it automatically; do not edit `app/weekly-data.ts`. Run `pnpm test` and `pnpm run export:static`. Verify `/weekly`, Archive, and the dated weekly archive output.
