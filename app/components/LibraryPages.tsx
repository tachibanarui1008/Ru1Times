"use client";

import { useEffect, useState } from "react";
import { archiveReports, getReportByDate, getReportById } from "../data";
import { getWeeklyReportById, weeklyReports } from "../weekly-data";
import { SiteChrome } from "./SiteChrome";
import { Today } from "./Today";
import { Weekly } from "./Weekly";

function LibraryHero({ kicker, title, text }: { kicker:string; title:string; text:string }) {
  return <section className="library-hero"><p>{kicker}</p><h1>{title}</h1><h2>{text}</h2></section>;
}

export function ArchivePage() {
  const [query,setQuery]=useState("");
  const [selectedId,setSelectedId]=useState<string|null>(null);

  useEffect(()=>{ const params=new URLSearchParams(location.search); setSelectedId(params.get("edition")??params.get("date")); },[]);
  const selectedReport = selectedId ? getReportById(selectedId) ?? getReportByDate(selectedId) : undefined;
  const selectedWeekly = selectedId ? getWeeklyReportById(selectedId) : undefined;
  if(selectedReport) return <Today archiveMode reportData={selectedReport}/>;
  if(selectedWeekly) return <Weekly archiveMode reportData={selectedWeekly}/>;

  const publications = [
    ...weeklyReports.map(report=>({ id:report.id, date:report.period_end, demo:report.draft, title:report.title_zh, fields:["Ru1Weekly","Concord Long Read"], status:report.draft?"Draft":"Sourced", summary:"世界在同一张桌上 · 潜流与回声 · 数字之后 · 未完成的结论" })),
    ...archiveReports.map(report=>({ ...report, fields:["Ru1Daily",...report.fields], summary:"热点词 · 地道表达 · 四语简报 · 深度阅读" })),
  ];
  const reports=publications.filter(r=>`${r.title}${r.fields.join(" ")}${r.date}${r.status}`.toLowerCase().includes(query.toLowerCase()));
  return <SiteChrome active="Archive"><main className="library-main">
    <LibraryHero kicker="RU1TIMES · ARCHIVE" title="Archive" text="日报记录当天的世界，周报整理一周的结构。所有刊物都在这里保留。"/>
    <div className="archive-search"><label><span>查找往期</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="搜索日期、刊型、主题或标题……"/></label><p>共 {reports.length} 期</p></div>
    <section className="archive-index"><div className="archive-year"><strong>2026</strong><span>August</span></div><div className="archive-list">{reports.map(r=><a href={`/archive?edition=${encodeURIComponent(r.id)}`} key={r.id}><time>{r.date.slice(5).replace("-",".")}</time><div><span>{r.fields.join(" · ")} {r.demo&&<i className="archive-status demo">样刊</i>}</span><h2>{r.title}</h2><p>{r.summary}</p></div><b>打开阅读 →</b></a>)}{reports.length===0&&<p className="empty-state">没有找到相符的往期刊物。</p>}</div></section>
  </main></SiteChrome>;
}
