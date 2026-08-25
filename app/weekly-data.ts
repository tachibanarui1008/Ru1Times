import { generatedWeeklyReports } from "./generated/content-index";
import type { WeeklyReport } from "./weekly-types";

export const weeklyReports: WeeklyReport[] = generatedWeeklyReports;
export const latestWeeklyReport = weeklyReports[0];
export const getWeeklyReportById = (id: string) => weeklyReports.find(report => report.id === id);
