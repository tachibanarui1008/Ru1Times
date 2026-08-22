import { commentary20260822Contribution } from "./commentary-reports/2026-08-22-contribution";
import { commentaryOdyssey20260822 } from "./commentary-reports/2026-08-22-odyssey";
import { commentaryStudentLife20260822 } from "./commentary-reports/2026-08-22";
import type { CommentaryReport } from "./commentary-types";

export const commentaryReports: CommentaryReport[] = [commentary20260822Contribution, commentaryOdyssey20260822, commentaryStudentLife20260822];
export const latestCommentary = commentaryReports[0];
export const getCommentaryById = (id: string) => commentaryReports.find(report => report.id === id);
