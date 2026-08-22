export type Language = "zh" | "en" | "ja" | "ko" | "all";
export type LearnerSegment = { text: string; reading?: string; romanization: string; zh: string };
export type SourceReference = { label: string; title: string; url: string; published: string };
export type AiCredit = { provider: string; model: string; role: string };

export type DailyReport = {
  id: string;
  date: string;
  published_at: string;
  updated_at: string;
  edition_number: number;
  demo: boolean;
  estimated_minutes: number;
  ai_credit: AiCredit;
  sources: SourceReference[];
  big_story: { category: string; title_zh: string; title_en: string; summary: string; minutes: number; source_label?: string; source_url?: string };
  hot_words: Array<{ en: string; zh: string; ja: string; ja_romaji: string; ko: string; ko_romaja: string; why_today: string; example: string; topic: string }>;
  expressions: Array<{ language: "English" | "日本語" | "한국어"; flag: string; phrase: string; romanization?: string; meaning: string; nuance: string; scene: string; dialogue: string; register: string; frequency: string; note: string }>;
  briefings: Array<{ id: number; category: string; title_zh: string; title_en: string; source: string; source_url?: string; minutes: number; zh: string; en: string; ja: string; ko: string; ja_segments: LearnerSegment[]; ko_segments: LearnerSegment[] }>;
  deep_read: { category: string; title_en: string; title_zh: string; minutes: number; standfirst: string; paragraphs: Array<{ en: string; zh: string }> };
  context: Array<{ title: string; text: string }>;
  history_lens: { then: string; now: string; title: string; text: string; similarities: string; differences: string } | null;
  challenge: Array<{ id: number; kind: string; question: string; options: string[]; answer: number; explanation: string }>;
  completion: boolean;
  difficulty_feedback: "Easy" | "Just Right" | "Challenging" | null;
};
