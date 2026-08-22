---
name: ru1times-publishing
description: Create, edit, review, archive, or prepare publication of Ru1Times issues in the RuiDaily site, routing among Ru1Daily, Ru1Weekly, Ru1Commentary, and Ru1Finance while preserving their shared editorial style and issue-specific rules. Use for requests to produce or revise one of these four publications; do not use for unrelated website features.
---

# Ru1Times Publishing

Produce a complete issue with the smallest relevant context load. The working application is normally `F:\RuiDaily\site`, but confirm the actual checkout before editing.

## Route the request

Always read [references/shared.md](references/shared.md), then read exactly one publication guide unless the request genuinely spans several:

- Daily news and language edition: [references/daily.md](references/daily.md)
- Weekend review: [references/weekly.md](references/weekly.md)
- Author-led commentary: [references/commentary.md](references/commentary.md)
- Finance learning and market edition: [references/finance.md](references/finance.md)

Read [references/publication-modes.md](references/publication-modes.md) only when the author asks to save, push, or publish through GitHub.

Do not load the other publication guides merely for background. Read the repository README only when the selected guide identifies a gap, the local schema has drifted, or the request explicitly asks to update editorial policy.

## Required inputs

Infer publication type, issue date, and edition number from the request and repository when safe. The author must explicitly provide the AI provider and model for every issue. If either is absent, ask before finalizing the issue; never infer it from the running agent, UI, alias, or previous issue.

Commentary additionally requires author-supplied thoughts. Daily and weekly require a precise publication or coverage window. Finance requires a market snapshot time. Do not invent missing author positions or market dates.

## Compact workflow

1. Run `scripts/inspect_ru1times.ps1` for a concise checkout snapshot. Inspect the selected type definition, registry, and latest issue; preserve unrelated or unfinished changes.
2. Research only what the selected guide requires. Open original sources and record publication dates. Separate confirmed facts, editorial inference, and uncertainty.
3. Create a new dated issue file rather than overwriting history. Fill the typed object, including `ai_credit`, and register the issue first in its channel array.
4. Keep the current components, typography, colors, spacing system, and archive conventions unless the author explicitly requests a design change.
5. Run `pnpm test`. For weekly and commentary, and whenever archive/export behavior changes, also run `pnpm run export:static`. Treat a successful build as code evidence, not proof that a public deployment updated.
6. Report the issue created, editorial choices, source limitations, model credit, and validation result. Keep drafts as drafts until the author approves them.

## Author commands

Treat these phrases as distinct workflow states:

- `制作` or `起草`: create the issue locally, validate it, and stop for review. Do not commit, push, merge, or deploy.
- `修改`: revise the named local issue, validate it again, and stop for review.
- `推送留档`: commit only the approved issue-related files to a feature branch and push that branch. Do not merge it or claim the website changed.
- `推送发布` or `确认发布`: explicit authorization to finalize the named issue and execute the GitHub Pages publication workflow in [references/publication-modes.md](references/publication-modes.md), including verification.
- `发布到 OpenAI Sites`: a separate deployment request. Do not infer it from `推送发布`, which means GitHub Pages for this repository.

When the wording is merely `制作`, never treat anticipated later approval as present authorization. When the author gives `推送发布` for a clearly identified issue, do not ask for a redundant confirmation unless the target issue is ambiguous, tests fail, or unrelated/overlapping changes make the publication scope unsafe.

## Authorization boundary

Creating or revising an issue does not authorize committing, pushing, emailing, uploading, or deploying it. `推送留档`, `推送发布`, and `发布到 OpenAI Sites` authorize only their respective scopes. If `.openai/hosting.json` exists, follow the available Sites build/hosting instructions for an explicit OpenAI Sites deployment and obtain any required public/shared-access approval.
