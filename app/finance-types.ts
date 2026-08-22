import type { AiCredit, SourceReference } from "./report-types";

export type LearningBlock = { heading: string; text: string };

export type FinanceLearning = {
  category: string;
  category_en: string;
  title_zh: string;
  title_en: string;
  standfirst: string;
  minutes: number;
  blocks: LearningBlock[];
  case_study: { event: string; period: string; text: string };
  pros: { label: string; items: string[] };
  cons: { label: string; items: string[] };
  takeaways: string[];
};

export type IndexQuote = { name: string; close: number; change_pct: number; extra?: string };

export type MarketBlock = {
  id: string;
  region_zh: string;
  region_en: string;
  as_of: string;
  indices: IndexQuote[];
  commentary: string;
};

export type MarketMover = {
  id: number;
  kind: string;
  kind_en: string;
  market: string;
  title: string;
  text: string;
  source_label?: string;
  source_url?: string;
};

export type CompanyFile = {
  name: string;
  ticker: string;
  market: string;
  event: string;
  metrics: Array<{ label: string; value: string }>;
  note: string;
  source_label?: string;
  source_url?: string;
};

export type FinanceReport = {
  id: string;
  date: string;
  published_at: string;
  updated_at: string;
  edition_number: number;
  draft: boolean;
  estimated_minutes: number;
  ai_credit: AiCredit;
  market_as_of: string;
  title_zh: string;
  title_en: string;
  dek: string;
  learning: FinanceLearning;
  markets: MarketBlock[];
  movers: MarketMover[];
  companies: CompanyFile[];
  sources: SourceReference[];
};
