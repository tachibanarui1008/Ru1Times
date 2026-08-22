"use client";

import { useEffect, useState } from "react";
import { archiveReports, getReportByDate, getReportById } from "../data";
import { commentaryReports, getCommentaryById } from "../commentary-data";
import { financeArchiveReports, getFinanceReportById } from "../finance-data";
import { getWeeklyReportById, weeklyReports } from "../weekly-data";
import { Commentary } from "./Commentary";
import { Finance } from "./Finance";
import { SiteChrome } from "./SiteChrome";
import { Today } from "./Today";
import { Weekly } from "./Weekly";

function LibraryHero({ kicker, title, text }: { kicker:string; title:string; text:string }) {
  return <section className="library-hero"><p>{kicker}</p><h1>{title}</h1><h2>{text}</h2></section>;
}

export function ArchivePage() {
  const [query,setQuery]=useState("");
  const [channel,setChannel]=useState<string>("All");
  const [selectedId,setSelectedId]=useState<string|null>(null);

  useEffect(()=>{
    const frame=requestAnimationFrame(()=>{
      const params=new URLSearchParams(location.search);
      const pathEdition=location.pathname.match(/\/archive\/([^/]+)\/?$/)?.[1];
      setSelectedId(params.get("edition")??params.get("date")??(pathEdition?decodeURIComponent(pathEdition):null));
    });
    return ()=>cancelAnimationFrame(frame);
  },[]);
  const selectedReport = selectedId ? getReportById(selectedId) ?? getReportByDate(selectedId) : undefined;
  const selectedWeekly = selectedId ? getWeeklyReportById(selectedId) : undefined;
  const selectedCommentary = selectedId ? getCommentaryById(selectedId) : undefined;
  const selectedFinance = selectedId ? getFinanceReportById(selectedId) : undefined;
  if(selectedReport) return <Today archiveMode reportData={selectedReport}/>;
  if(selectedWeekly) return <Weekly archiveMode reportData={selectedWeekly}/>;
  if(selectedCommentary) return <Commentary archiveMode reportData={selectedCommentary}/>;
  if(selectedFinance) return <Finance archiveMode reportData={selectedFinance}/>;

  const publications = [
    ...commentaryReports.map(report=>({ id:report.id, date:report.date, demo:report.draft, title:report.title, fields:["Ru1Commentary",report.category], status:report.draft?"Draft":"Sourced", summary:report.subtitle })),
    ...weeklyReports.map(report=>({ id:report.id, date:report.period_end, demo:report.draft, title:report.title_zh, fields:["Ru1Weekly","Concord Long Read"], status:report.draft?"Draft":"Sourced", summary:"世界在同一张桌上 · 潜流与回声 · 数字之后 · 未完成的结论" })),
    ...financeArchiveReports,
    ...archiveReports.map(report=>({ ...report, fields:["Ru1Daily",...report.fields], summary:"热点词 · 地道表达 · 四语简报 · 深度阅读" })),
  ].sort((a,b)=>b.date.localeCompare(a.date));
  const channels = ["All","Ru1Daily","Ru1Weekly","Ru1Commentary","Ru1Finance"];
  const reports=publications.filter(r=>(channel==="All"||r.fields[0]===channel)&&`${r.title}${r.fields.join(" ")}${r.date}${r.status}`.toLowerCase().includes(query.toLowerCase()));
  return <SiteChrome active="Archive"><main className="library-main">
    <LibraryHero kicker="RU1TIMES · ARCHIVE" title="Archive" text="日报记录当天，周报整理一周，时评保存个人判断，财经追踪市场与概念。所有刊物都在这里保留。"/>
    <div className="archive-search"><label><span>查找往期</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="搜索日期、刊型、主题或标题……"/></label><p>共 {reports.length} 期</p></div>
    <div className="channel-filter" role="tablist" aria-label="按刊型筛选">
      {channels.map(name=><button key={name} role="tab" aria-selected={channel===name} className={channel===name?"active":""} onClick={()=>setChannel(name)}>{name}<small>{name==="All"?publications.length:publications.filter(r=>r.fields[0]===name).length}</small></button>)}
    </div>
    <section className="archive-index"><div className="archive-year"><strong>2026</strong><span>August</span></div><div className="archive-list">{reports.map(r=><a href={`/archive?edition=${encodeURIComponent(r.id)}`} key={r.id}><time>{r.date.slice(5).replace("-",".")}</time><div><span>{r.fields.join(" · ")} {r.demo&&<i className="archive-status demo">样刊</i>}</span><h2>{r.title}</h2><p>{r.summary}</p></div><b>打开阅读 →</b></a>)}{reports.length===0&&<p className="empty-state">没有找到相符的往期刊物。</p>}</div></section>
  </main></SiteChrome>;
}
