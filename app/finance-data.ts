import { generatedFinanceReports } from "./generated/content-index";
import type { FinanceReport } from "./finance-types";

export const financeReports: FinanceReport[] = generatedFinanceReports;
export const latestFinanceReport = financeReports[0];
export const getFinanceReportById = (id: string) => financeReports.find(report => report.id === id || `finance-${report.id}` === id);
export const financeArchiveReports = financeReports.map(report => ({
  id: `finance-${report.id}`,
  date: report.date,
  draft: report.draft,
  title: report.title_zh,
  fields: ["Ru1Finance", report.learning.category],
  status: report.draft ? "Draft" : "Sourced",
  summary: `${report.learning.title_zh} · 今日市场总览 · ${report.movers.length} 个特殊点`,
}));
