import { generatedCommentaryReports } from "./generated/content-index";
import type { CommentaryReport } from "./commentary-types";

export const commentaryReports: CommentaryReport[] = generatedCommentaryReports;
export const latestCommentary = commentaryReports[0];
export const getCommentaryById = (id: string) => commentaryReports.find(report => report.id === id);
