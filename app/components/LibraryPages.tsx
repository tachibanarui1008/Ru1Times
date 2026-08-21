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
  const [history,setHistory]=useState<Record<string,{minutes?:number}>>({}); const [savedCount,setSavedCount]=useState(0);
  useEffect(()=>{ const refresh=()=>{ try{setHistory(JSON.parse(localStorage.getItem("pmb-history")??"{}"))}catch{setHistory({})} try{const p=JSON.parse(localStorage.getItem("pmb-state")??"{}");setSavedCount((p.savedWords??[]).length)}catch{setSavedCount(0)}}; refresh(); addEventListener("storage",refresh); addEventListener("pmb-history-update",refresh); return()=>{removeEventListener("storage",refresh);removeEventListener("pmb-history-update",refresh)}},[]);
  const dateKey=(date:Date)=>`${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,"0")}-${String(date.getDate()).padStart(2,"0")}`;
  const completedDates=new Set(Object.keys(history));
  const cursor=new Date(); if(!completedDates.has(dateKey(cursor)))cursor.setDate(cursor.getDate()-1);
  let streak=0; while(completedDates.has(dateKey(cursor))){streak++;cursor.setDate(cursor.getDate()-1)}
  const totalMinutes=Object.values(history).reduce((sum,item)=>sum+(item.minutes??0),0);
  const formattedTime=totalMinutes>=60?`${Math.floor(totalMinutes/60)}h ${totalMinutes%60}m`:`${totalMinutes}m`;
  const stats=[[String(streak),"连续学习天数"],[String(completedDates.size),"已完成日报"],[formattedTime,"总阅读时间"],[String(savedCount),"已收藏热点词"],[String(completedDates.size),"完成深读"]];
  const recentDays=Array.from({length:7},(_,i)=>{const d=new Date();d.setDate(d.getDate()-(6-i));return{key:dateKey(d),label:["日","一","二","三","四","五","六"][d.getDay()]}});
  const recentCount=recentDays.filter(day=>completedDates.has(day.key)).length;
  const languages=[{name:"English",level:"B2 → C1",focus:["Vocabulary","Reading","Natural Expressions"]},{name:"日本語",level:"N5 → N4",focus:["Vocabulary","Basic Grammar","Reading"]},{name:"한국어",level:"Beginner",focus:["Vocabulary","Basic Grammar","Reading"]}];
  return <SiteChrome active="Progress"><main className="library-main">
    <LibraryHero kicker="LEARNING RECORD" title="Progress" text="数据从零开始，只记录你在这台设备上的实际完成与收藏。"/>
    <div className="progress-summary">{stats.map(([n,label])=><article key={label}><strong>{n}</strong><span>{label}</span></article>)}</div>
    <section className="rhythm-card text-rhythm"><div><span>最近 7 天</span><h2>阅读节奏</h2><p>你在过去七天中完成了 {recentCount} 次晨读。只有点击“完成今日晨报”才会计入。</p></div><div className="rhythm-bars">{recentDays.map(day=>{const done=completedDates.has(day.key);return <div key={day.key}><i style={{height:done?"82%":"5%"}} className={done?"":"empty"}/><span>{day.label}</span></div>})}</div></section>
    <p className="progress-data-note">Demo 新闻内容不会自动增加进度；所有记录仅保存在当前浏览器中。</p>
    <SectionIntro eyebrow="CURRENT FOCUS" title="Language paths" subtitle="三个语言目前的学习重点"/>
    <div className="focus-list">{languages.map(l=><article key={l.name}><div><h3>{l.name}</h3><span>{l.level}</span></div><ol>{l.focus.map((x,i)=><li key={x}><span>{String(i+1).padStart(2,"0")}</span>{x}</li>)}</ol></article>)}</div>
  </main></SiteChrome>;
}
