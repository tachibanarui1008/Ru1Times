import { financeReport20260822 } from "./finance-reports/2026-08-22";
import type { FinanceReport } from "./finance-types";

export const financeReports: FinanceReport[] = [financeReport20260822];
export const latestFinanceReport = financeReports[0];
export const getFinanceReportById = (id: string) => financeReports.find(report => report.id === id || `finance-${report.id}` === id);
export const financeArchiveReports = financeReports.map(report => ({
  id: `finance-${report.id}`,
  date: report.date,
  draft: report.draft,
  title: report.title_zh,
  fields: ["Ru1Finance", report.learning.category],
  status: report.draft ? "Draft" : "Sourced",
  summary: `${report.learning.title_zh} · 六市场速览 · ${report.movers.length} 个特殊点`,
}));
