import { realReport20260822 } from "./reports/2026-08-22";
import { demoReport } from "./reports/demo";
import type { DailyReport } from "./report-types";

export type { DailyReport, Language, LearnerSegment, SourceReference } from "./report-types";
export { demoReport } from "./reports/demo";

export const reports: DailyReport[] = [realReport20260822, demoReport];
export const latestReport = reports.find(report => !report.demo) ?? reports[0];
export const getReportById = (id: string) => reports.find(report => report.id === id);
export const getReportByDate = (date: string) => reports.find(report => report.date === date && !report.demo);
export const archiveReports = reports.map(report => ({
  id: report.id,
  date: report.date,
  demo: report.demo,
  title: report.big_story.title_zh,
  fields: report.big_story.category.split(" · "),
  status: report.demo ? "Demo" : "Sourced",
}));
