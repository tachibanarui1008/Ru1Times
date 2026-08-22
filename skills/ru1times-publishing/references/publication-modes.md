# GitHub save and publication modes

Use this reference only after the author explicitly asks to push or publish. For GitHub operations, also follow the available GitHub skill.

## Meaning of each command

### 推送留档

Save an approved snapshot to GitHub without publishing it as the current website:

1. Identify the exact issue and inspect the complete diff and worktree.
2. Keep `draft: true` for Weekly, Commentary, and Finance. Do not change the publication status merely for archival push.
3. Create or reuse a clearly named feature branch, such as `issue/commentary-2026-08-22`.
4. Stage only the named issue file, its registry when changed, and other files the author explicitly approved for that issue. Never stage `out/`, unrelated edits, or all files at once.
5. Commit and push the feature branch. Do not merge to `main`, deploy, or say the live website updated.

### 推送发布 / 确认发布

This is explicit authorization to publish the named approved issue to GitHub Pages:

1. Resolve the exact issue, repository, remote, and current branch. Inspect staged and unstaged changes before modifying Git state. If the issue is ambiguous or its files overlap unrelated unfinished work, stop and ask.
2. Finalize publication status: Weekly, Commentary, and Finance use `draft: false`; a formal Daily uses `demo: false`. Confirm timestamps, edition number, sources, and author-provided `ai_credit`.
3. Run `pnpm test` and `pnpm run export:static`. If either fails, do not push. `out/` is generated evidence and remains uncommitted unless the repository policy changes.
4. Review the final diff. Stage only files required for this issue and its registration; never use broad staging commands. Do not include unrelated README, design, finance, export, or workspace changes.
5. If currently on the default branch, create a feature branch before committing. Commit and push that branch, then use the repository's normal pull-request path to merge the approved issue into `main`. The author's `推送发布` instruction authorizes this issue-specific merge, but not unrelated changes.
6. The repository's GitHub Pages workflow builds source on pushes to `main`, runs tests, creates `out/`, and deploys it. Wait for the relevant workflow to finish.
7. Verify all three layers separately: the commit reached `main`; the Pages workflow succeeded; the public page or archive contains the new issue identifier/title. A successful push alone is not a successful publication.
8. Report the branch/commit, workflow result, and live URL. If the push succeeds but Actions or the live page fails, say publication is incomplete and stop after collecting the failure evidence.

## Hosting boundary

GitHub Pages and OpenAI Sites are separate targets. `推送发布` means GitHub Pages in this repository. It does not update a `chatgpt.site` deployment. Only an explicit `发布到 OpenAI Sites` request authorizes that second deployment path.

## User-authored issues

The site is source-driven, not hand-authored-HTML-driven. A user may author an issue directly by creating the correct typed issue file and registering it in the channel registry. Pushing those source files to `main` lets GitHub Actions generate and deploy HTML. A standalone HTML file is not automatically added to the latest route or Archive.
