"use client";

import { useEffect, useState } from "react";
import { archiveReports, getReportByDate } from "../data";
import { SectionIntro, SiteChrome } from "./SiteChrome";
import { Today } from "./Today";

function LibraryHero({ kicker, title, text }: { kicker:string; title:string; text:string }) {
  return <section className="library-hero"><p>{kicker}</p><h1>{title}</h1><h2>{text}</h2></section>;
}

export function ArchivePage() {
  const [query,setQuery]=useState("");
  const [selectedDate,setSelectedDate]=useState<string|null>(null);

  useEffect(()=>{ setSelectedDate(new URLSearchParams(location.search).get("date")); },[]);
  const selectedReport = selectedDate ? getReportByDate(selectedDate) : undefined;
  if(selectedReport) return <Today archiveMode reportData={selectedReport}/>;

  const reports=archiveReports.filter(r=>`${r.title}${r.fields.join(" ")}${r.date}`.toLowerCase().includes(query.toLowerCase()));
  return <SiteChrome active="Archive"><main className="library-main">
    <LibraryHero kicker="PAST EDITIONS" title="Archive" text="按日期打开往期晨报，重新阅读当时的新闻、词汇、表达、深读与挑战。"/>
    <div className="archive-search"><label><span>Search editions</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="搜索日期、主题或标题……"/></label><p>{reports.length} complete Demo edition</p></div>
    <section className="archive-index"><div className="archive-year"><strong>2026</strong><span>August</span></div><div className="archive-list">{reports.map(r=><a href={`/archive?date=${r.date}`} key={r.date}><time>{r.date.slice(5).replace("-",".")}</time><div><span>{r.fields.join(" · ")}</span><h2>{r.title}</h2><p>完整日报 · Hot Words · Expressions · 4 Briefings · Deep Read · Challenge</p></div><b>Read edition →</b></a>)}{reports.length===0&&<p className="empty-state">没有找到相符的往期晨报。</p>}</div></section>
    <aside className="archive-note"><span>How Archive works</span><p>每日更新生成一份独立 DailyReport。Today 始终显示最新一期，旧日报会自动保留在这里，并可以完整打开，不会只剩标题摘要。</p></aside>
  </main></SiteChrome>;
}

export function ProgressPage() {
  const [complete,setComplete]=useState(false); const [savedCount,setSavedCount]=useState(0);
  useEffect(()=>{ const s=localStorage.getItem("pmb-state"); if(s){const p=JSON.parse(s);setComplete(Boolean(p.completed));setSavedCount((p.savedWords??[]).length)}},[]);
  const stats=[["3","连续学习天数"],[complete?"4":"3","已完成日报"],[complete?"2h 42m":"2h 02m","总阅读时间"],[String(24+savedCount),"已学热点词"],["9","已学表达"],[complete?"3":"2","完成深读"]];
  const languages=[{name:"English",level:"B2 → C1",focus:["Vocabulary","Reading","Natural Expressions"]},{name:"日本語",level:"N5 → N4",focus:["Vocabulary","Basic Grammar","Reading"]},{name:"한국어",level:"Beginner",focus:["Vocabulary","Basic Grammar","Reading"]}];
  return <SiteChrome active="Progress"><main className="library-main">
    <LibraryHero kicker="LEARNING RECORD" title="Progress" text="只记录长期阅读留下的轨迹，不设置等级、积分或没有依据的语言百分比。"/>
    <div className="progress-summary">{stats.map(([n,label])=><article key={label}><strong>{n}</strong><span>{label}</span></article>)}</div>
    <section className="rhythm-card text-rhythm"><div><span>最近 7 天</span><h2>阅读节奏</h2><p>你在过去七天中完成了四次晨读。稳定比完美更重要。</p></div><div className="rhythm-bars">{[45,78,0,64,86,0,58].map((h,i)=><div key={i}><i style={{height:`${Math.max(h,5)}%`}} className={h===0?"empty":""}/><span>{["M","T","W","T","F","S","S"][i]}</span></div>)}</div></section>
    <SectionIntro eyebrow="CURRENT FOCUS" title="Language paths" subtitle="三个语言目前的学习重点"/>
    <div className="focus-list">{languages.map(l=><article key={l.name}><div><h3>{l.name}</h3><span>{l.level}</span></div><ol>{l.focus.map((x,i)=><li key={x}><span>{String(i+1).padStart(2,"0")}</span>{x}</li>)}</ol></article>)}</div>
  </main></SiteChrome>;
}
