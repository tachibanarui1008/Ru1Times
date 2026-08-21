"use client";

import { useEffect, useMemo, useState } from "react";
import { latestReport, type DailyReport, type Language, type LearnerSegment } from "../data";
import { SectionIntro, SiteChrome } from "./SiteChrome";

const languageLabels: Array<[Language,string]> = [["all","四语对照"],["zh","中文"],["en","English"],["ja","日本語"],["ko","한국어"]];
const vocab: Record<string,{zh:string; phonetic:string; collocation:string; context:string}> = {
  constraints:{zh:"约束；限制条件",phonetic:"/kənˈstreɪnts/",collocation:"physical constraints",context:"指限制 AI 扩张速度的物理条件。"},
  infrastructure:{zh:"基础设施",phonetic:"/ˈɪnfrəstrʌktʃə/",collocation:"digital infrastructure",context:"指电网、建筑、网络等底层系统。"},
  depreciation:{zh:"折旧",phonetic:"/dɪˌpriːʃiˈeɪʃən/",collocation:"annual depreciation",context:"资产成本分多年计入费用的会计过程。"},
};

function LearnerLine({ label, segments }: { label: string; segments: LearnerSegment[] }) {
  return <div className="learner-language"><span>{label}</span><div className="learner-sentence">{segments.map((segment,i)=><div className="learner-token" key={`${segment.text}-${i}`}><strong>{segment.reading?<ruby>{segment.text}<rt>{segment.reading}</rt></ruby>:segment.text}</strong><small><span>{segment.romanization}</span><b>·</b><em>{segment.zh}</em></small></div>)}</div></div>;
}

export function Today({ archiveMode = false, reportData }: { archiveMode?: boolean; reportData?: DailyReport }) {
  const report = reportData ?? latestReport;
  const displayDate = new Intl.DateTimeFormat("en-GB", { weekday:"long", day:"numeric", month:"long" }).format(new Date(`${report.date}T00:00:00`));
  const [langByBrief, setLangByBrief] = useState<Record<number,Language>>({1:"all",2:"all",3:"all",4:"all"});
  const [savedWords, setSavedWords] = useState<number[]>([]);
  const [deepMode, setDeepMode] = useState<"bilingual"|"english">("bilingual");
  const [popover, setPopover] = useState<string|null>(null);
  const [answers, setAnswers] = useState<Record<number,number>>({});
  const [feedback, setFeedback] = useState<string|null>(null);
  const [completed, setCompleted] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem("pmb-state");
    if (stored) { const parsed = JSON.parse(stored); setSavedWords(parsed.savedWords ?? []); setFeedback(parsed.feedback ?? null); }
    try { const history = JSON.parse(localStorage.getItem("pmb-history") ?? "{}"); setCompleted(Boolean(history[report.date])); } catch { setCompleted(false); }
    const lastY = Number(localStorage.getItem("pmb-scroll") ?? 0);
    if (lastY > 100) setTimeout(() => scrollTo({top:lastY,behavior:"smooth"}), 250);
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - innerHeight;
      setProgress(total ? Math.min(100, Math.round(scrollY / total * 100)) : 0);
      localStorage.setItem("pmb-scroll", String(scrollY));
    };
    addEventListener("scroll", onScroll, {passive:true}); onScroll();
    return () => removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { localStorage.setItem("pmb-state", JSON.stringify({savedWords,feedback,completed,answers})); }, [savedWords,feedback,completed,answers]);

  const score = useMemo(() => Object.entries(answers).filter(([id,answer]) => report.challenge.find(q => q.id === Number(id))?.answer === answer).length, [answers,report.challenge]);

  function toggleCompletion() {
    const next = !completed;
    setCompleted(next);
    let history: Record<string,{date:string;minutes:number;completedAt:string}> = {};
    try { history = JSON.parse(localStorage.getItem("pmb-history") ?? "{}"); } catch { history = {}; }
    if (next) history[report.date] = {date:report.date,minutes:report.estimated_minutes,completedAt:new Date().toISOString()};
    else delete history[report.date];
    localStorage.setItem("pmb-history", JSON.stringify(history));
    dispatchEvent(new Event("pmb-history-update"));
  }

  function renderEnglish(text:string) {
    const parts = text.split(/\b(constraints|infrastructure|depreciation)\b/gi);
    return parts.map((part,i) => {
      const key = part.toLowerCase();
      return vocab[key] ? <button key={`${part}-${i}`} className="vocab-word" onClick={() => setPopover(popover === key ? null : key)}>{part}</button> : part;
    });
  }

  return <SiteChrome active={archiveMode ? "Archive" : "Today"}>
    <div className="reading-progress" style={{width:`${progress}%`}} />
    <main>
      {archiveMode && <div className="archive-reader-bar"><a href="/archive">← Back to Archive</a><span>Archived edition · {report.date}</span></div>}
      <section className="hero text-hero" id="top">
        <div className="eyebrow"><span>{report.demo ? "Demo Content" : "Today’s Edition"}</span> {displayDate} · Edition {String(report.edition_number).padStart(3,"0")}</div>
        <h1>小橘日报</h1>
        <p>每天四十分钟，用四种语言理解同一个世界。</p>
        <div className="edition-meta"><span><strong>40</strong> min</span><span><strong>8</strong> Hot Words</span><span><strong>3</strong> Expressions</span><span><strong>4</strong> Briefings</span><span><strong>1</strong> Deep Read</span><span><strong>5</strong> Challenges</span></div>
      </section>

      <section className="big-story" id="morning-brief">
        <div className="story-copy"><p className="kicker">TODAY’S BIG STORY · {report.big_story.category}</p><h2>{report.big_story.title_en}</h2><h3>{report.big_story.title_zh}</h3><p className="summary">{report.big_story.summary}</p><a className="primary-action" href="#hot-words">Start Morning Brief <span>↓</span></a><small>{report.big_story.minutes} min deep read · Illustrative editorial synthesis</small></div>
      </section>

      <section className="content-section" id="hot-words">
        <SectionIntro eyebrow="01" title="Hot Words" subtitle="今日热点词" meta="约 5 min" />
        <div className="words-grid">{report.hot_words.map((word,i) => <article className="word-card" key={word.en}>
          <div className="word-main"><span className="word-index">{String(i+1).padStart(2,"0")}</span><h3>{word.en}</h3><p>{word.zh}</p></div>
          <div className="word-detail"><dl><div><dt>日本語</dt><dd>{word.ja}<small>{word.ja_romaji}</small></dd></div><div><dt>한국어</dt><dd>{word.ko}<small>{word.ko_romaja}</small></dd></div></dl><h4>Why today?</h4><p>{word.why_today}</p><blockquote>{word.example}</blockquote><button className={savedWords.includes(i) ? "saved" : ""} onClick={() => setSavedWords(savedWords.includes(i) ? savedWords.filter(x => x!==i) : [...savedWords,i])}>{savedWords.includes(i) ? "Saved ✓" : "Save to Words"}</button></div>
        </article>)}</div>
      </section>

      <section className="content-section expressions-section" id="daily-expressions">
        <SectionIntro eyebrow="02" title="Expressions" subtitle="今日地道表达" meta="约 4 min" />
        <div className="expression-row">{report.expressions.map(exp => <article className="expression-card" key={exp.language}><span className="language-chip">{exp.flag} · {exp.language}</span><h3>{exp.phrase}</h3>{exp.romanization&&<p className="expression-romanization">{exp.romanization}</p>}<p className="meaning">{exp.meaning}</p><p>{exp.nuance}</p><dl><div><dt>Scene</dt><dd>{exp.scene}</dd></div><div><dt>Register</dt><dd>{exp.register}</dd></div><div><dt>Frequency</dt><dd>{exp.frequency}</dd></div></dl><pre>{exp.dialogue}</pre><small>{exp.note}</small></article>)}</div>
      </section>

      <section className="content-section briefing-section" id="briefings">
        <SectionIntro eyebrow="03" title="Global Briefings" subtitle="全球新闻速递" meta="约 12 min" />
        <div className="briefings-list">{report.briefings.map(item => { const selected = langByBrief[item.id]; return <article className="briefing" key={item.id}>
          <div className="briefing-heading"><span>{String(item.id).padStart(2,"0")} · {item.category}</span><div><h3>{item.title_zh}</h3><h4>{item.title_en}</h4></div><p>{item.source}<br/>{report.date} · {item.minutes} min</p></div>
          <div className="language-tabs" role="tablist" aria-label={`Languages for briefing ${item.id}`}>{languageLabels.map(([code,label]) => <button role="tab" aria-selected={selected===code} className={selected===code?"active":""} onClick={() => setLangByBrief({...langByBrief,[item.id]:code})} key={code}>{label}</button>)}</div>
          <div className={`language-content mode-${selected}`}>
            {(selected==="all"||selected==="zh")&&<div><span>中文</span><p>{item.zh}</p></div>}
            {(selected==="all"||selected==="en")&&<div><span>English</span><p>{item.en}</p></div>}
            {(selected==="all"||selected==="ja")&&<LearnerLine label="日本語 · 每个词下方对应罗马音与中文" segments={item.ja_segments}/>}
            {(selected==="all"||selected==="ko")&&<LearnerLine label="한국어 · 每个词下方对应罗马音与中文" segments={item.ko_segments}/>}
          </div>
        </article>})}</div>
      </section>

      <section className="deep-read" id="deep-read">
        <div className="deep-header"><p>04 · DEEP READ · {report.deep_read.category}</p><h2>{report.deep_read.title_en}</h2><h3>{report.deep_read.title_zh}</h3><div><span>{report.deep_read.minutes} min</span><button className={deepMode==="bilingual"?"active":""} onClick={()=>setDeepMode("bilingual")}>中英对照</button><button className={deepMode==="english"?"active":""} onClick={()=>setDeepMode("english")}>English Only</button></div></div>
        <article className="article-body"><p className="standfirst">{report.deep_read.standfirst}</p>{report.deep_read.paragraphs.map((para,i)=><div className="bilingual-pair" key={i}><div><span>English · {String(i+1).padStart(2,"0")}</span><p>{renderEnglish(para.en)}</p></div>{deepMode==="bilingual"&&<div className="zh-paragraph"><span>中文</span><p>{para.zh}</p></div>}</div>)}</article>
        {popover&&<aside className="vocab-popover"><button onClick={()=>setPopover(null)}>×</button><strong>{popover}</strong><span>{vocab[popover].phonetic}</span><h4>{vocab[popover].zh}</h4><p><b>Collocation</b> {vocab[popover].collocation}</p><p><b>In context</b> {vocab[popover].context}</p><button className="save-vocab">＋ Save to Words</button></aside>}
      </section>

      <section className="content-section context-section"><SectionIntro eyebrow="05" title="Context" subtitle="看懂这件事" meta="约 3 min"/><div className="context-grid">{report.context.map((item,i)=><article key={item.title}><span>{String(i+1).padStart(2,"0")}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section>

      {report.history_lens&&<section className="history-lens"><div><span>06 · HISTORY LENS</span><h2>{report.history_lens.title}</h2><p>{report.history_lens.text}</p></div><div className="timeline"><div><strong>{report.history_lens.then}</strong><p>{report.history_lens.similarities}</p></div><i/><div><strong>{report.history_lens.now}</strong><p>{report.history_lens.differences}</p></div></div></section>}

      <section className="content-section challenge-section"><SectionIntro eyebrow="07" title="Today’s Challenge" subtitle="今日挑战" meta="约 3 min"/><div className="challenge-list">{report.challenge.map(q=><article key={q.id}><span>{String(q.id).padStart(2,"0")} · {q.kind}</span><h3>{q.question}</h3><div>{q.options.map((option,i)=><button className={answers[q.id]===i ? (i===q.answer?"correct":"wrong") : ""} disabled={answers[q.id]!==undefined} onClick={()=>setAnswers({...answers,[q.id]:i})} key={option}>{option}</button>)}</div>{answers[q.id]!==undefined&&<p className="answer-note"><strong>{answers[q.id]===q.answer?"Correct":"Not quite"}</strong>{q.explanation}</p>}</article>)}</div><p className="score-line">Answered {Object.keys(answers).length} / 5 · Correct {score}</p></section>

      {!archiveMode && <section className={`complete-card ${completed?"is-complete":""}`}><p>HOW WAS TODAY’S BRIEF?</p><h2>{completed?"Morning brief complete.":"Make it yours, one morning at a time."}</h2><div>{["Easy","Just Right","Challenging"].map(level=><button className={feedback===level?"active":""} onClick={()=>setFeedback(level)} key={level}>{level}</button>)}</div><button className="complete-button" onClick={toggleCompletion}>{completed?"Completed ✓":"Complete Today’s Brief"}</button><small>{completed?"Saved to your learning history.":"完成后才会计入 Progress；记录仅保存在这台设备。"}</small></section>}
    </main>
    <div className="mobile-progress"><span style={{width:`${progress}%`}}/><b>{progress}% read</b><a href="#top">↑</a></div>
  </SiteChrome>;
}
