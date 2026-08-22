"use client";

import { latestWeeklyReport } from "../weekly-data";
import type { HybridParagraph, WeeklyReport } from "../weekly-types";
import { AiCredit } from "./AiCredit";
import { IssueLead } from "./IssueLead";
import { PublicationMasthead } from "./PublicationMasthead";
import { SiteChrome } from "./SiteChrome";

export function Weekly({ reportData = latestWeeklyReport, archiveMode = false }: { reportData?: WeeklyReport; archiveMode?: boolean }) {
  const report = reportData;
  return <SiteChrome active={archiveMode ? "Archive" : "Ru1Weekly"} edition={report.edition_number}>
    <main className="weekly-main weekly-longform">
      {archiveMode && <div className="archive-reader-bar"><a href="/archive">← Back to Archive</a><span>Ru1Weekly · {report.id}</span></div>}
      <PublicationMasthead
        edition={report.edition_number}
        publishedAt={report.published_at}
        draft={report.draft}
        title="Ru1Weekly"
        subtitle="以混合语言重组一周信息，在跨语境阅读中理解事件之间的联系。"
      />

      <IssueLead
        eyebrow={`RU1WEEKLY · ${report.week_label} · ${report.period_start}—${report.period_end}`}
        title={report.title_en}
        subtitle={report.title_zh}
        dek={report.dek}
      />

      <article className="weekly-cover-story concord-story">
        <div><p>OPENING ESSAY</p><h2>本周主线</h2><small>{report.editorial_note}</small></div>
        <HybridProse paragraphs={report.cover_story}/>
      </article>

      <nav className="weekly-contents" aria-label="本期目录"><span>IN THIS ISSUE</span>{report.chapters.map((chapter,index)=><a href={`#${chapter.id}`} key={chapter.id}><b>{String(index+1).padStart(2,"0")}</b><div><strong>{chapter.title_zh}</strong><small>{chapter.title_en}</small></div></a>)}</nav>

      {report.chapters.map((chapter,index)=><article className={`weekly-chapter chapter-${(index%3)+1}`} id={chapter.id} key={chapter.id}>
        <header className="chapter-header"><div><span>{String(index+1).padStart(2,"0")} · {chapter.eyebrow}</span><h2>{chapter.title_zh}</h2><h3>{chapter.title_en}</h3></div><p>{chapter.standfirst}</p></header>
        <HybridProse paragraphs={chapter.paragraphs}/>
        {chapter.pullquote && <blockquote>{chapter.pullquote}</blockquote>}
      </article>)}

      <section className="weekly-closing concord-closing"><span>MARGINALIA · 余白</span><h2>一周之后，留下什么</h2><HybridProse paragraphs={report.closing_note}/></section>
      <aside className="source-ledger weekly-sources"><div><span>SOURCE LEDGER</span><h2>来源与延伸阅读</h2><p>事实来自可追溯报道与官方资料；interpretation 与 unknown 在正文中明确区分。</p></div><ol>{report.sources.map(source=><li key={source.url}><a href={source.url} target="_blank" rel="noreferrer"><span>{source.label}</span><strong>{source.title}</strong><small>{source.published} ↗</small></a></li>)}</ol></aside>
      <AiCredit credit={report.ai_credit}/>
    </main>
  </SiteChrome>;
}

function HybridProse({ paragraphs }: { paragraphs: HybridParagraph[] }) {
  return <div className="concord-prose">{paragraphs.map((paragraph,index)=><p className="weekly-concord" key={index}>{paragraph.text}</p>)}</div>;
}
