import { weeklyReport2026W34 } from "./weekly-reports/2026-W34";
import type { WeeklyReport } from "./weekly-types";

export const weeklyReports: WeeklyReport[] = [weeklyReport2026W34];
export const latestWeeklyReport = weeklyReports[0];
export const getWeeklyReportById = (id: string) => weeklyReports.find(report => report.id === id);
