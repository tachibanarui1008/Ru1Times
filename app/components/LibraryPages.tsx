"use client";

import { useEffect, useState } from "react";
import { archiveReports, getReportByDate, getReportById } from "../data";
import { SiteChrome } from "./SiteChrome";
import { Today } from "./Today";

function LibraryHero({ kicker, title, text }: { kicker:string; title:string; text:string }) {
  return <section className="library-hero"><p>{kicker}</p><h1>{title}</h1><h2>{text}</h2></section>;
}

export function ArchivePage() {
  const [query,setQuery]=useState("");
  const [selectedId,setSelectedId]=useState<string|null>(null);

  useEffect(()=>{ const params=new URLSearchParams(location.search); setSelectedId(params.get("edition")??params.get("date")); },[]);
  const selectedReport = selectedId ? getReportById(selectedId) ?? getReportByDate(selectedId) : undefined;
  if(selectedReport) return <Today archiveMode reportData={selectedReport}/>;

  const reports=archiveReports.filter(r=>`${r.title}${r.fields.join(" ")}${r.date}${r.status}`.toLowerCase().includes(query.toLowerCase()));
  return <SiteChrome active="Archive"><main className="library-main">
    <LibraryHero kicker="ARCHIVE" title="Archive" text="小橘日报的每一期，都记录一个值得回望的世界切片。"/>
    <div className="archive-search"><label><span>查找往期</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="搜索日期、主题或标题……"/></label><p>共 {reports.length} 期</p></div>
    <section className="archive-index"><div className="archive-year"><strong>2026</strong><span>August</span></div><div className="archive-list">{reports.map(r=><a href={`/archive?edition=${encodeURIComponent(r.id)}`} key={r.id}><time>{r.date.slice(5).replace("-",".")}</time><div><span>{r.fields.join(" · ")} {r.demo&&<i className="archive-status demo">样刊</i>}</span><h2>{r.title}</h2><p>热点词 · 地道表达 · 四语简报 · 深度阅读</p></div><b>打开阅读 →</b></a>)}{reports.length===0&&<p className="empty-state">没有找到相符的往期日报。</p>}</div></section>
  </main></SiteChrome>;
}
