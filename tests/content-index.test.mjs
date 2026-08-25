import assert from "node:assert/strict";
import { mkdtemp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { generateContentIndex } from "../scripts/generate-content-index.mjs";

const definitions = {
  daily: { directory: "reports", type: "DailyReport", stem: "2026-08-25", id: "2026-08-25", dateField: 'date: "2026-08-25",' },
  weekly: { directory: "weekly-reports", type: "WeeklyReport", stem: "2026-W35", id: "2026-W35", dateField: 'period_end: "2026-08-28",' },
  commentary: { directory: "commentary-reports", type: "CommentaryReport", stem: "2026-08-25-note", id: "commentary-2026-08-25-note", dateField: 'date: "2026-08-25",' },
  finance: { directory: "finance-reports", type: "FinanceReport", stem: "2026-08-25", id: "2026-08-25", dateField: 'date: "2026-08-25",' },
};

function issueSource(definition, { draft = false, edition = 1, exportName = "issue" } = {}) {
  return `export const ${exportName}: ${definition.type} = {
  id: "${definition.id}",
  ${definition.dateField}
  published_at: "2026-08-25T08:00:00+08:00",
  updated_at: "2026-08-25T08:00:00+08:00",
  edition_number: ${edition},
  draft: ${draft},
  ai_credit: { provider: "OpenAI", model: "Test Model", role: "validation" },
};\n`;
}

async function createFixture() {
  const root = await mkdtemp(path.join(os.tmpdir(), "ru1times-index-"));
  for (const [key, definition] of Object.entries(definitions)) {
    const directory = path.join(root, "app", definition.directory);
    await mkdir(directory, { recursive: true });
    await writeFile(path.join(directory, `${definition.stem}.ts`), issueSource(definition, { exportName: `${key}Issue` }), "utf8");
  }
  return root;
}

test("auto-index discovers formal issues and keeps drafts out of the public index", async t => {
  const root = await createFixture();
  t.after(() => rm(root, { recursive: true, force: true }));
  const draftDefinition = { ...definitions.daily, stem: "2026-08-24", id: "2026-08-24", dateField: 'date: "2026-08-24",' };
  await writeFile(
    path.join(root, "app", "reports", "2026-08-24.ts"),
    issueSource(draftDefinition, { draft: true, edition: 0, exportName: "draftDaily" }),
    "utf8",
  );

  const { manifest } = await generateContentIndex(root);
  const index = await readFile(path.join(root, "app", "generated", "content-index.ts"), "utf8");
  assert.equal(manifest.daily.length, 1);
  assert.equal(manifest.daily[0].id, "daily-2026-08-25");
  assert.match(index, /dailyIssue/);
  assert.doesNotMatch(index, /draftDaily/);
});

test("auto-index rejects duplicate edition numbers within a channel", async t => {
  const root = await createFixture();
  t.after(() => rm(root, { recursive: true, force: true }));
  const duplicate = { ...definitions.finance, stem: "2026-08-24", id: "2026-08-24", dateField: 'date: "2026-08-24",' };
  await writeFile(
    path.join(root, "app", "finance-reports", "2026-08-24.ts"),
    issueSource(duplicate, { edition: 1, exportName: "duplicateFinance" }),
    "utf8",
  );
  await assert.rejects(() => generateContentIndex(root), /duplicate finance edition_number 1/);
});
