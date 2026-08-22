import type { AiCredit, SourceReference } from "./report-types";

export type CommentarySection = {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  pullquote?: string;
};

export type CommentaryBackground = {
  title_zh: string;
  title_en: string;
  zh: string;
  en: string;
};

export type CommentaryTerm = {
  term: string;
  term_en: string;
  zh: string;
  en: string;
};

export type CommentaryReport = {
  id: string;
  date: string;
  published_at: string;
  updated_at: string;
  edition_number: number;
  draft: boolean;
  estimated_minutes: number;
  ai_credit: AiCredit;
  category: string;
  title: string;
  subtitle: string;
  dek: string;
  byline: string;
  editor_note: string;
  sections: CommentarySection[];
  backgrounds: CommentaryBackground[];
  glossary: CommentaryTerm[];
  sources: SourceReference[];
};
