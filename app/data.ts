import { realReport20260824 } from "./reports/2026-08-24";
import { realReport20260823 } from "./reports/2026-08-23";
import { realReport20260822 } from "./reports/2026-08-22";
import { draftReport } from "./reports/2026-08-21";
import type { DailyReport } from "./report-types";

export type { DailyReport, Language, LearnerSegment, SourceReference } from "./report-types";
export { draftReport } from "./reports/2026-08-21";

export const reports: DailyReport[] = [realReport20260824, realReport20260823, realReport20260822, draftReport];
export const latestReport = reports.find(report => !report.draft) ?? reports[0];
export const getReportById = (id: string) => reports.find(report => report.id === id);
export const getReportByDate = (date: string) => reports.find(report => report.date === date && !report.draft);
export const archiveReports = reports.map(report => ({
  id: report.id,
  date: report.date,
  draft: report.draft,
  title: report.big_story.title_zh,
  fields: report.big_story.category.split(" · "),
  status: report.draft ? "Draft" : "Sourced",
}));
