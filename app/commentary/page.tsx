import type { Metadata } from "next";
import { latestCommentary } from "../commentary-data";
import { Commentary } from "../components/Commentary";

export const metadata: Metadata = {
  title: `${latestCommentary.title} · Ru1Commentary`,
  description: latestCommentary.subtitle,
  openGraph: { title: `${latestCommentary.title} · Ru1Commentary`, description: latestCommentary.subtitle, images: [] },
  twitter: { card: "summary", title: `${latestCommentary.title} · Ru1Commentary`, description: latestCommentary.subtitle, images: [] },
};

export default function Page() { return <Commentary />; }
