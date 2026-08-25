import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const scriptRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const channels = [
  {
    key: "daily",
    directory: "reports",
    typeName: "DailyReport",
    generatedName: "generatedDailyReports",
    filename: /^\d{4}-\d{2}-\d{2}$/,
    publicId: record => `daily-${record.id}`,
    archiveDateField: "date",
  },
  {
    key: "weekly",
    directory: "weekly-reports",
    typeName: "WeeklyReport",
    generatedName: "generatedWeeklyReports",
    filename: /^\d{4}-W\d{2}$/,
    publicId: record => record.id,
    archiveDateField: "period_end",
  },
  {
    key: "commentary",
    directory: "commentary-reports",
    typeName: "CommentaryReport",
    generatedName: "generatedCommentaryReports",
    filename: /^\d{4}-\d{2}-\d{2}(?:-[a-z0-9-]+)?$/,
    publicId: record => record.id,
    archiveDateField: "date",
  },
  {
    key: "finance",
    directory: "finance-reports",
    typeName: "FinanceReport",
    generatedName: "generatedFinanceReports",
    filename: /^\d{4}-\d{2}-\d{2}$/,
    publicId: record => `finance-${record.id}`,
    archiveDateField: "date",
  },
];

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function readString(source, field, file) {
  const match = source.match(new RegExp(`\\b${escapeRegExp(field)}\\s*:\\s*(["'])(.*?)\\1`));
  if (!match || !match[2].trim()) throw new Error(`${file}: missing non-empty ${field}`);
  return match[2].trim();
}

function readInteger(source, field, file) {
  const match = source.match(new RegExp(`\\b${escapeRegExp(field)}\\s*:\\s*(\\d+)`));
  if (!match) throw new Error(`${file}: missing integer ${field}`);
  return Number(match[1]);
}

function readBoolean(source, field, file) {
  const match = source.match(new RegExp(`\\b${escapeRegExp(field)}\\s*:\\s*(true|false)`));
  if (!match) throw new Error(`${file}: missing boolean ${field}`);
  return match[1] === "true";
}

function validateDate(value, field, file) {
  if (Number.isNaN(Date.parse(value))) throw new Error(`${file}: invalid ${field} ${value}`);
}

function validateIdentity(channel, record) {
  const { file, stem, id } = record;
  if (channel.key === "daily" || channel.key === "finance") {
    if (id !== stem || record.date !== stem) {
      throw new Error(`${file}: filename, id, and date must all equal ${stem}`);
    }
  }
  if (channel.key === "weekly" && id !== stem) {
    throw new Error(`${file}: filename and id must both equal ${stem}`);
  }
  if (channel.key === "commentary") {
    if (id !== `commentary-${stem}` || record.date !== stem.slice(0, 10)) {
      throw new Error(`${file}: expected id commentary-${stem} and date ${stem.slice(0, 10)}`);
    }
  }
}

async function readChannel(root, channel) {
  const directory = path.join(root, "app", channel.directory);
  const files = (await readdir(directory)).filter(file => file.endsWith(".ts")).sort();
  const records = [];

  for (const filename of files) {
    const stem = filename.slice(0, -3);
    const relativeFile = `app/${channel.directory}/${filename}`;
    if (!channel.filename.test(stem)) throw new Error(`${relativeFile}: unsupported issue filename`);

    const source = await readFile(path.join(directory, filename), "utf8");
    const exports = [...source.matchAll(/export\s+const\s+([A-Za-z_$][\w$]*)\s*:\s*([A-Za-z_$][\w$]*)\s*=/g)];
    const matchingExports = exports.filter(match => match[2] === channel.typeName);
    if (matchingExports.length !== 1) {
      throw new Error(`${relativeFile}: expected exactly one exported ${channel.typeName} object`);
    }

    const creditMatch = source.match(/\bai_credit\s*:\s*\{([\s\S]*?)\}/);
    if (!creditMatch) throw new Error(`${relativeFile}: missing ai_credit`);
    for (const field of ["provider", "model", "role"]) readString(creditMatch[1], field, relativeFile);

    const record = {
      channel: channel.key,
      file: relativeFile,
      filename,
      stem,
      exportName: matchingExports[0][1],
      id: readString(source, "id", relativeFile),
      editionNumber: readInteger(source, "edition_number", relativeFile),
      draft: readBoolean(source, "draft", relativeFile),
      publishedAt: readString(source, "published_at", relativeFile),
      updatedAt: readString(source, "updated_at", relativeFile),
    };
    record.date = readString(source, channel.archiveDateField, relativeFile);
    if (channel.key !== "weekly") record.sourceDate = readString(source, "date", relativeFile);

    validateDate(record.publishedAt, "published_at", relativeFile);
    validateDate(record.updatedAt, "updated_at", relativeFile);
    validateDate(record.date, channel.archiveDateField, relativeFile);
    validateIdentity(channel, { ...record, date: record.sourceDate ?? record.date });
    records.push(record);
  }

  const ids = new Set();
  const editions = new Set();
  for (const record of records) {
    if (ids.has(record.id)) throw new Error(`${record.file}: duplicate ${channel.key} id ${record.id}`);
    if (editions.has(record.editionNumber)) {
      throw new Error(`${record.file}: duplicate ${channel.key} edition_number ${record.editionNumber}`);
    }
    ids.add(record.id);
    editions.add(record.editionNumber);
  }

  records.sort((left, right) =>
    right.publishedAt.localeCompare(left.publishedAt) ||
    right.editionNumber - left.editionNumber ||
    right.id.localeCompare(left.id),
  );
  if (!records.some(record => !record.draft)) throw new Error(`${channel.key}: no formal issue found`);
  return records;
}

function renderIndex(allRecords) {
  const lines = [
    "// Generated by scripts/generate-content-index.mjs. Do not edit.",
    'import type { DailyReport } from "../report-types";',
    'import type { WeeklyReport } from "../weekly-types";',
    'import type { CommentaryReport } from "../commentary-types";',
    'import type { FinanceReport } from "../finance-types";',
    "",
  ];

  for (const channel of channels) {
    const publicRecords = allRecords[channel.key].filter(record => !record.draft);
    publicRecords.forEach((record, index) => {
      lines.push(`import { ${record.exportName} as ${channel.key}Issue${index} } from "../${channel.directory}/${record.stem}";`);
    });
  }
  lines.push("");

  for (const channel of channels) {
    const publicRecords = allRecords[channel.key].filter(record => !record.draft);
    const items = publicRecords.map((_, index) => `${channel.key}Issue${index}`).join(", ");
    lines.push(`export const ${channel.generatedName}: ${channel.typeName}[] = [${items}];`);
  }
  lines.push("");
  return lines.join("\n");
}

export async function generateContentIndex(root = scriptRoot) {
  const allRecords = {};
  for (const channel of channels) allRecords[channel.key] = await readChannel(root, channel);

  const generatedDirectory = path.join(root, "app", "generated");
  await mkdir(generatedDirectory, { recursive: true });
  await writeFile(path.join(generatedDirectory, "content-index.ts"), renderIndex(allRecords), "utf8");

  const manifest = Object.fromEntries(channels.map(channel => [
    channel.key,
    allRecords[channel.key]
      .filter(record => !record.draft)
      .map(record => ({ id: channel.publicId(record), date: record.date, file: record.file })),
  ]));
  await writeFile(path.join(generatedDirectory, "content-manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
  return { allRecords, manifest };
}

const invokedPath = process.argv[1] ? pathToFileURL(path.resolve(process.argv[1])).href : "";
if (invokedPath === import.meta.url) {
  try {
    const { allRecords, manifest } = await generateContentIndex();
    const summary = channels.map(channel =>
      `${channel.key}=${manifest[channel.key].length}/${allRecords[channel.key].length}`,
    ).join(" ");
    console.log(`Content index generated (${summary}; formal/total)`);
  } catch (error) {
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  }
}
