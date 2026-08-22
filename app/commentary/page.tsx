import type { Metadata } from "next";
import { Commentary } from "../components/Commentary";

export const metadata: Metadata = {
  title: "海上来的人，是我们 · Ru1Commentary",
  description: "当木马成为礼物——从诺兰《奥德赛》谈礼崩乐坏、信任与我们的时代。",
  openGraph: { title: "海上来的人，是我们 · Ru1Commentary", description: "当木马成为礼物——从诺兰《奥德赛》谈礼崩乐坏、信任与我们的时代。", images: [] },
  twitter: { card: "summary", title: "海上来的人，是我们 · Ru1Commentary", description: "当木马成为礼物——从诺兰《奥德赛》谈礼崩乐坏、信任与我们的时代。", images: [] },
};

export default function Page() { return <Commentary />; }
