import { commentary20260822 } from "./commentary-reports/2026-08-22";
import { commentary20260822Contribution } from "./commentary-reports/2026-08-22-contribution";
import type { CommentaryReport } from "./commentary-types";

export const commentaryReports: CommentaryReport[] = [commentary20260822Contribution, commentary20260822];
export const latestCommentary = commentaryReports[0];
export const getCommentaryById = (id: string) => commentaryReports.find(report => report.id === id);
