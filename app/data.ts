import { generatedDailyReports } from "./generated/content-index";
import type { DailyReport } from "./report-types";

export type { DailyReport, Language, LearnerSegment, SourceReference } from "./report-types";

export const reports: DailyReport[] = generatedDailyReports;
export const latestReport = reports[0];
export const getReportById = (id: string) => reports.find(report => report.id === id || `daily-${report.id}` === id);
export const getReportByDate = (date: string) => reports.find(report => report.date === date);
export const archiveReports = reports.map(report => ({
  id: `daily-${report.id}`,
  date: report.date,
  draft: report.draft,
  title: report.big_story.title_zh,
  fields: report.big_story.category.split(" · "),
  status: report.draft ? "Draft" : "Sourced",
}));
