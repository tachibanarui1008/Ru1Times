import type { AiCredit, SourceReference } from "./report-types";

export type HybridParagraph = { language: "concord"; text: string };

export type WeeklyChapter = {
  id: string;
  eyebrow: string;
  title_zh: string;
  title_en: string;
  standfirst: string;
  paragraphs: HybridParagraph[];
  pullquote?: string;
};

export type WeeklyReport = {
  id: string;
  week_label: string;
  period_start: string;
  period_end: string;
  published_at: string;
  updated_at: string;
  edition_number: number;
  draft: boolean;
  estimated_minutes: number;
  ai_credit: AiCredit;
  title_zh: string;
  title_en: string;
  dek: string;
  editorial_note: string;
  cover_story: HybridParagraph[];
  chapters: WeeklyChapter[];
  closing_note: HybridParagraph[];
  sources: SourceReference[];
};
