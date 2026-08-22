"use client";

import { latestFinanceReport } from "../finance-data";
import type { FinanceReport, IndexQuote } from "../finance-types";
import { AiCredit } from "./AiCredit";
import { IssueLead } from "./IssueLead";
import { PublicationMasthead } from "./PublicationMasthead";
import { SiteChrome } from "./SiteChrome";

function Quote({ index }: { index: IndexQuote }) {
  const up = index.change_pct >= 0;
  return (
    <div className="finance-quote">
      <span className="quote-name">{index.name}</span>
      <strong className="quote-close">{index.close.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong>
      <b className={`quote-change ${up ? "up" : "down"}`}>{up ? "▲ +" : "▼ "}{index.change_pct.toFixed(2)}%</b>
      {index.extra && <small>{index.extra}</small>}
    </div>
  );
}

export function Finance({ reportData = latestFinanceReport, archiveMode = false }: { reportData?: FinanceReport; archiveMode?: boolean }) {
  const report = reportData;
  return <SiteChrome active={archiveMode ? "Archive" : "Ru1Finance"} demo={report.draft} edition={report.edition_number}>
    <main className="finance-main">
      {archiveMode && <div className="archive-reader-bar"><a href="/archive">← Back to Archive</a><span>Ru1Finance · {report.date}</span></div>}

      <PublicationMasthead
        edition={report.edition_number}
        publishedAt={report.published_at}
        draft={report.draft}
        title="Ru1Finance"
        subtitle="为金融学生准备的快速日报：学习一个概念，读懂今日市场。"
      />

      <IssueLead
        eyebrow={`RU1FINANCE · 小橘财经 · ${report.market_as_of}`}
        title={report.title_en}
        subtitle={report.title_zh}
        dek={report.dek}
      />

      <section className="finance-learning" aria-label="金融学习">
        <header className="finance-heading">
          <p>01 · FINANCE LEARNING · {report.learning.category_en.toUpperCase()}</p>
          <h2>{report.learning.title_zh}</h2>
          <h3>{report.learning.title_en}</h3>
          <p className="finance-standfirst">{report.learning.standfirst}</p>
        </header>
        <div className="learning-blocks">
          {report.learning.blocks.map((block, index) => <article key={block.heading}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div><h3>{block.heading}</h3><p>{block.text}</p></div>
          </article>)}
        </div>
        <aside className="learning-case">
          <div><p>CASE STUDY · 结合事件</p><h3>{report.learning.case_study.event}</h3><small>{report.learning.case_study.period}</small></div>
          <p>{report.learning.case_study.text}</p>
        </aside>
        <div className="learning-sides">
          <article><h3>{report.learning.pros.label}</h3><ul>{report.learning.pros.items.map(item => <li key={item}>{item}</li>)}</ul></article>
          <article><h3>{report.learning.cons.label}</h3><ul>{report.learning.cons.items.map(item => <li key={item}>{item}</li>)}</ul></article>
        </div>
        <div className="learning-takeaways"><span>TAKEAWAYS</span><ol>{report.learning.takeaways.map(item => <li key={item}>{item}</li>)}</ol></div>
      </section>

      <section className="finance-markets" aria-label="今日金融市场总览">
        <header className="finance-heading">
          <p>02 · TODAY&apos;S FINANCE · MARKET SNAPSHOT</p>
          <h2>今日总览</h2>
          <h3>Today at a glance</h3>
          <p className="finance-standfirst">数据截至 {report.market_as_of}。</p>
        </header>
        <div className="markets-grid">
          {report.markets.map(market => <article className="market-card" key={market.id}>
            <header><div><strong>{market.region_zh}</strong><small>{market.region_en} · {market.as_of}</small></div><span className="market-glyph">{market.id.toUpperCase()}</span></header>
            <div className="market-quotes">{market.indices.map(index => <Quote index={index} key={index.name} />)}</div>
            <p className="market-commentary">{market.commentary}</p>
          </article>)}
        </div>
      </section>

      <section className="finance-watchlist" aria-label="特殊点与动向">
        <header className="finance-heading">
          <p>03 · WATCHLIST · 特殊点与动向</p>
          <h2>值得多看一眼的事</h2>
          <h3>Surges, plunges, deals and returns</h3>
        </header>
        <div className="watchlist-grid">
          {report.movers.map(mover => <article key={mover.id}>
            <header><span className="mover-kind">{mover.kind}</span><span className="mover-market">{mover.market}</span></header>
            <h3>{mover.title}</h3>
            <p>{mover.text}</p>
            {mover.source_url && <a className="source-link" href={mover.source_url} target="_blank" rel="noreferrer">{mover.source_label} ↗</a>}
          </article>)}
        </div>
      </section>

      <section className="finance-companies" aria-label="公司档案">
        <header className="finance-heading">
          <p>04 · COMPANY FILE · 公司档案</p>
          <h2>本期特殊点背后的公司</h2>
          <h3>Key numbers behind the headlines</h3>
        </header>
        <div className="company-grid">
          {report.companies.map(company => <article key={company.ticker}>
            <header><div><h3>{company.name}</h3><small>{company.ticker} · {company.market}</small></div><span className="mover-kind">{company.event}</span></header>
            <dl>{company.metrics.map(metric => <div key={metric.label}><dt>{metric.label}</dt><dd>{metric.value}</dd></div>)}</dl>
            <p className="company-note">{company.note}</p>
            {company.source_url && <a className="source-link" href={company.source_url} target="_blank" rel="noreferrer">{company.source_label} ↗</a>}
          </article>)}
        </div>
      </section>

      {!report.draft && <aside className="source-ledger">
        <div><span>SOURCE LEDGER</span><h2>来源与延伸阅读</h2><p>行情与新闻均来自可追溯来源；传闻类信息在正文中明确标注。数据为发布时点快照。</p></div>
        <ol>{report.sources.map(source => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer"><span>{source.label}</span><strong>{source.title}</strong><small>{source.published} ↗</small></a></li>)}</ol>
      </aside>}
      <AiCredit credit={report.ai_credit}/>
    </main>
  </SiteChrome>;
}
