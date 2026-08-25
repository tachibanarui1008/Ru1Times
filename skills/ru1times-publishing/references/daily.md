# Ru1Daily

## Purpose and shape

Daily news plus language learning. Its fixed founding statement is `以不同语言转述今日新闻，在阅读与鉴赏中提升多语言能力。` Fill the current `DailyReport` schema rather than recreating the page: one `big_story`, about eight `hot_words`, English/Japanese/Korean `expressions`, four multilingual `briefings`, one bilingual `deep_read`, three `context` items, optional `history_lens`, `sources`, and `ai_credit`.

## Hard source window

Every factual source must have been published within the 72 hours immediately before `published_at` and not after it. This applies to every factual section, not only `sources`.

Use the original first-publication time. A substantive update counts only when the used information came from that update. Do not substitute search, crawl, or republication time. If only a date is available, accept only the issue date and the two preceding calendar dates. If an essential old fact lacks a fresh authoritative confirmation, remove it or change the topic.

## Writing

- Choose one main story that organizes the edition without forcing unrelated facts into a false causal chain.
- Chinese leads. English should sound like real news prose. Japanese and Korean should be natural and keep readings, romanization, segmentation, and Chinese glosses consistent.
- State facts first, significance second, then uncertainty or the next signal to watch.
- `history_lens` may be `null`; do not manufacture a historical analogy.
- The main-story lead has no `Start Morning Brief` button. Let the article flow directly from its summary to the reading-time and source line.

## File workflow

Create `app/reports/YYYY-MM-DD.ts` with a date-matching internal ID and export. Keep `draft: true` until approval, then set `draft: false`; the build-time index discovers and sorts it automatically, so do not edit `app/data.ts`. The latest issue appears at `/daily`, the Ru1Times homepage card updates automatically, and the public archive ID is `daily-YYYY-MM-DD`. Run `pnpm test`; run `pnpm run export:report -- YYYY-MM-DD` only when a single offline HTML is requested, and `pnpm run export:static` when the site archive must be refreshed.
