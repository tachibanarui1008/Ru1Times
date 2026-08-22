import { latestCommentary } from "../commentary-data";
import type { CommentaryReport } from "../commentary-types";
import { SiteChrome } from "./SiteChrome";

export function Commentary({ reportData = latestCommentary, archiveMode = false }: { reportData?: CommentaryReport; archiveMode?: boolean }) {
  const report = reportData;
  return <SiteChrome active={archiveMode ? "Archive" : "Ru1Commentary"} demo={report.draft} edition={report.edition_number}>
    <main className="commentary-main">
      {archiveMode && <div className="archive-reader-bar"><a href="/archive">← Back to Archive</a><span>Ru1Commentary · {report.id}</span></div>}
      <header className="commentary-cover" id="top">
        <div className="commentary-cover-copy">
          <p>RU1COMMENTARY · {report.category} {report.draft && <span>样刊</span>}</p>
          <h1>{report.title}</h1>
          <h2>{report.subtitle}</h2>
          <p className="commentary-dek">{report.dek}</p>
          <div className="commentary-meta"><span>{report.date}</span><span>{report.byline}</span><span>{report.estimated_minutes} min read</span><span>Issue {String(report.edition_number).padStart(3,"0")}</span></div>
        </div>
      </header>

      <div className="commentary-editor-note"><span>EDITOR’S NOTE</span><p>{report.editor_note}</p></div>

      <nav className="commentary-contents" aria-label="本文目录">
        <span>CONTENTS</span>
        {report.sections.map((section,index)=><a href={`#${section.id}`} key={section.id}><b>{String(index+1).padStart(2,"0")}</b><strong>{section.title}</strong></a>)}
      </nav>

      <article className="commentary-article">
        {report.sections.map((section,index)=><section className="commentary-section" id={section.id} key={section.id}>
          <header><span>{section.eyebrow}</span><h2>{section.title}</h2></header>
          <div className="commentary-prose">{section.paragraphs.map((paragraph,paragraphIndex)=><p className={index===0&&paragraphIndex===0?"opening-paragraph":""} key={paragraphIndex}>{paragraph}</p>)}</div>
          {section.pullquote&&<blockquote>{section.pullquote}</blockquote>}
        </section>)}
      </article>

      <section className="commentary-reference" aria-labelledby="background-title">
        <header><span>BACKGROUND · 背景知识</span><h2 id="background-title">读懂这篇时评</h2><p>正文保持中文单语；必要的历史背景在此以中英双语补充。</p></header>
        <div className="background-list">{report.backgrounds.map((item,index)=><article key={item.title_zh}><span>{String(index+1).padStart(2,"0")}</span><h3>{item.title_zh}</h3><h4>{item.title_en}</h4><div><p>{item.zh}</p><p lang="en">{item.en}</p></div></article>)}</div>
      </section>

      <section className="commentary-glossary" aria-labelledby="glossary-title">
        <header><span>GLOSSARY · 名词解释</span><h2 id="glossary-title">四个关键词</h2></header>
        <div>{report.glossary.map((item,index)=><article key={item.term}><span>{String(index+1).padStart(2,"0")}</span><h3>{item.term}</h3><h4>{item.term_en}</h4><p>{item.zh}</p><p lang="en">{item.en}</p></article>)}</div>
      </section>

      <aside className="source-ledger commentary-sources"><div><span>SOURCE NOTES</span><h2>资料与延伸阅读</h2><p>背景事实经过核对；正文判断与历史类比属于作者评论。</p></div><ol>{report.sources.map(source=><li key={source.url}><a href={source.url} target="_blank" rel="noreferrer"><span>{source.label}</span><strong>{source.title}</strong><small>{source.published} ↗</small></a></li>)}</ol></aside>
    </main>
  </SiteChrome>;
}
