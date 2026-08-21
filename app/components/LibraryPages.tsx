"use client";

import { useEffect, useMemo, useState } from "react";
import { archiveReports, deepReadArchive, demoReport } from "../data";
import { SectionIntro, SiteChrome } from "./SiteChrome";

function LibraryHero({ kicker, title, text }: { kicker:string; title:string; text:string }) {
  return <section className="library-hero"><p>{kicker}</p><h1>{title}</h1><h2>{text}</h2></section>;
}

export function ArchivePage() {
  const [filter,setFilter]=useState("All"); const [query,setQuery]=useState("");
  const fields=["All","Technology","Politics","Economy","Finance","Science","History","AI"];
  const reports=archiveReports.filter(r=>(filter==="All"||r.fields.includes(filter))&&r.title.toLowerCase().includes(query.toLowerCase()));
  return <SiteChrome active="Archive"><main className="library-main"><LibraryHero kicker="YOUR MORNING HISTORY" title="Archive" text="把每一个早晨，连成自己的世界认知时间线。"/><div className="library-tools"><div className="filter-row">{fields.map(x=><button className={filter===x?"active":""} onClick={()=>setFilter(x)} key={x}>{x}</button>)}</div><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search past editions…" aria-label="Search archive"/></div><div className="archive-layout"><aside className="calendar-card"><div><button>←</button><strong>August 2026</strong><button>→</button></div><div className="calendar-grid">{["M","T","W","T","F","S","S"].map((d,i)=><b key={`${d}-${i}`}>{d}</b>)}{Array.from({length:31},(_,i)=><span className={i+1===21?"active":i+1>17&&i+1<22?"has-report":""} key={i}>{i+1}</span>)}</div><small>4 editions · 3 completed</small></aside><div className="archive-timeline">{reports.map((r,i)=><a href={i===0?"/":"#"} key={r.date}><time>{r.date.slice(5).replace("-",".")}</time><i/><div><span>{r.status}</span><h3>{r.title}</h3><p>{r.fields.join(" · ")}</p></div><b>→</b></a>)}{reports.length===0&&<p className="empty-state">No editions match this filter.</p>}</div></div></main></SiteChrome>;
}

export function WordsPage() {
  const [query,setQuery]=useState(""); const [topic,setTopic]=useState("All"); const [mastered,setMastered]=useState<string[]>([]); const [saved,setSaved]=useState<string[]>([]);
  const topics=["All",...Array.from(new Set(demoReport.hot_words.map(w=>w.topic)))];
  const words=demoReport.hot_words.filter(w=>(topic==="All"||w.topic===topic)&&`${w.en}${w.zh}${w.ja}${w.ko}`.toLowerCase().includes(query.toLowerCase()));
  return <SiteChrome active="Words"><main className="library-main"><LibraryHero kicker="A LIVING VOCABULARY" title="Hot Words Library" text="不是背单词表，而是记住词语出现时的真实世界。"/><div className="library-tools"><div className="filter-row">{topics.map(x=><button className={topic===x?"active":""} onClick={()=>setTopic(x)} key={x}>{x}</button>)}</div><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search four languages…"/></div><div className="word-library-grid">{words.map((w,i)=><article key={w.en}><div><span>{w.topic}</span><button onClick={()=>setSaved(saved.includes(w.en)?saved.filter(x=>x!==w.en):[...saved,w.en])}>{saved.includes(w.en)?"♥":"♡"}</button></div><h3>{w.en}</h3><h4>{w.zh}</h4><dl><div><dt>日本語</dt><dd>{w.ja}</dd></div><div><dt>한국어</dt><dd>{w.ko}</dd></div></dl><p>{w.why_today}</p><footer><small>First seen · Aug 21</small><button className={mastered.includes(w.en)?"mastered":""} onClick={()=>setMastered(mastered.includes(w.en)?mastered.filter(x=>x!==w.en):[...mastered,w.en])}>{mastered.includes(w.en)?"Mastered ✓":"Mark mastered"}</button></footer></article>)}</div></main></SiteChrome>;
}

export function ExpressionsPage() {
  const [tab,setTab]=useState("English"); const [query,setQuery]=useState("");
  const extras={ English:[demoReport.expressions[0],{...demoReport.expressions[0],phrase:"I’m leaning toward…",meaning:"我比较倾向于……",scene:"表达尚未完全确定的偏好",nuance:"比 I want 更保留空间。"}], 日本語:[demoReport.expressions[1],{...demoReport.expressions[1],phrase:"ちょっと考えます。",meaning:"我考虑一下。",scene:"礼貌地暂不答应",nuance:"可是真考虑，也可委婉保留。"}], 한국어:[demoReport.expressions[2],{...demoReport.expressions[2],phrase:"괜찮은 것 같아요.",meaning:"好像还不错。",scene:"温和地表达正面评价",nuance:"语气比 아주 좋아요 更克制。"}] };
  const list=extras[tab as keyof typeof extras].filter(x=>`${x.phrase}${x.meaning}`.toLowerCase().includes(query.toLowerCase()));
  return <SiteChrome active="Expressions"><main className="library-main"><LibraryHero kicker="SOUND MORE NATURAL" title="Expressions Library" text="收藏真正会在聊天、工作和日常生活里听见的表达。"/><div className="expression-tabs">{["English","日本語","한국어"].map(x=><button className={tab===x?"active":""} onClick={()=>setTab(x)} key={x}>{x}</button>)}</div><div className="library-tools single"><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search expressions…"/></div><div className="expression-library">{list.map((exp,i)=><article key={`${exp.phrase}-${i}`}><span>{exp.register} · {exp.frequency}</span><h3>{exp.phrase}</h3><h4>{exp.meaning}</h4><div><p><b>语感</b>{exp.nuance}</p><p><b>场景</b>{exp.scene}</p></div><pre>{exp.dialogue}</pre><footer><small>Learned · Aug 21</small><button>♡ Save</button></footer></article>)}</div></main></SiteChrome>;
}

export function DeepReadsPage() {
  const [filter,setFilter]=useState("All"); const cats=["All","AI","Technology","Politics","Economy","Finance","Science","History"];
  return <SiteChrome active="Deep Reads"><main className="library-main"><LibraryHero kicker="YOUR KNOWLEDGE MAGAZINE" title="Deep Reads" text="值得花十二分钟真正理解的事，会留在这里。"/><div className="filter-row editorial-filters">{cats.map(x=><button className={filter===x?"active":""} onClick={()=>setFilter(x)} key={x}>{x}</button>)}</div><div className="deep-library">{deepReadArchive.filter(x=>filter==="All"||x.category===filter||filter==="AI"&&x.category==="Technology").map((item,i)=><a href={i===0?"/#deep-read":"#"} className={`deep-card ${item.tone}`} key={item.title}><div className="deep-card-art"><span>{item.category}</span><i/><b>0{i+1}</b></div><div><span>{item.date} · {item.minutes} min · {item.status}</span><h3>{item.title}</h3><p>{item.zh}</p><b>Read article →</b></div></a>)}</div></main></SiteChrome>;
}

export function ProgressPage() {
  const [complete,setComplete]=useState(false); const [savedCount,setSavedCount]=useState(0);
  useEffect(()=>{ const s=localStorage.getItem("pmb-state"); if(s){const p=JSON.parse(s);setComplete(Boolean(p.completed));setSavedCount((p.savedWords??[]).length)}},[]);
  const stats=[["3","Day rhythm"],[complete?"4":"3","Briefs completed"],[complete?"2h 42m":"2h 02m","Total reading"],[String(24+savedCount),"Hot Words"],["9","Expressions"],[complete?"3":"2","Deep Reads"]];
  const languages=[{name:"English",level:"B2 → C1",focus:["Vocabulary","Reading","Natural Expressions"],value:68},{name:"日本語",level:"N5 → N4",focus:["Vocabulary","Basic Grammar","Reading"],value:32},{name:"한국어",level:"Beginner",focus:["Vocabulary","Basic Grammar","Reading"],value:27}];
  return <SiteChrome active="Progress"><main className="library-main"><LibraryHero kicker="QUIET CONSISTENCY" title="Learning Overview" text="不追逐积分，只看见长期阅读留下的真实轨迹。"/><div className="overview-grid">{stats.map(([n,label])=><article key={label}><strong>{n}</strong><span>{label}</span></article>)}</div><section className="rhythm-card"><div><span>Last 7 mornings</span><h2>Your reading rhythm</h2><p>稳定比完美更重要。你在过去七天中完成了四次晨读。</p></div><div className="rhythm-bars">{[45,78,0,64,86,0,58].map((h,i)=><div key={i}><i style={{height:`${Math.max(h,5)}%`}} className={h===0?"empty":""}/><span>{["M","T","W","T","F","S","S"][i]}</span></div>)}</div></section><SectionIntro eyebrow="LANGUAGE PATHS" title="Three languages, one habit" subtitle="当前重点会随着你的阅读积累逐渐变化。"/><div className="language-progress-grid">{languages.map(l=><article key={l.name}><div><h3>{l.name}</h3><span>{l.level}</span></div><div className="progress-track"><i style={{width:`${l.value}%`}}/></div><b>{l.value}% foundation</b><ul>{l.focus.map((x,i)=><li key={x}><span>{i===0?"Now":"Next"}</span>{x}</li>)}</ul></article>)}</div></main></SiteChrome>;
}
