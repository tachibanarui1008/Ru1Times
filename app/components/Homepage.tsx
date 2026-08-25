/* eslint-disable @next/next/no-img-element -- These local editorial images are exported with the static site. */

import { latestCommentary } from "../commentary-data";
import { latestReport } from "../data";
import { latestFinanceReport } from "../finance-data";
import { latestWeeklyReport } from "../weekly-data";
import { SiteChrome } from "./SiteChrome";

const publications = [
  {
    number: "01",
    name: "Ru1Daily",
    label: "日报",
    href: "/daily",
    date: latestReport.date,
    title: latestReport.big_story.title_zh,
    description: "从多语新闻开始，在一天的事实中保持对世界的触觉。",
  },
  {
    number: "02",
    name: "Ru1Weekly",
    label: "周报",
    href: "/weekly",
    date: latestWeeklyReport.period_end,
    title: latestWeeklyReport.title_zh,
    description: "拉长观察周期，整理一周里彼此牵动的事件与回声。",
  },
  {
    number: "03",
    name: "Ru1Commentary",
    label: "时评",
    href: "/commentary",
    date: latestCommentary.date,
    title: latestCommentary.title,
    description: "记录个人经验与公共议题之间的判断，保留真实观点。",
  },
  {
    number: "04",
    name: "Ru1Finance",
    label: "财经",
    href: "/finance",
    date: latestFinanceReport.date,
    title: latestFinanceReport.title_zh,
    description: "学习一个概念、追踪当日市场，在数字背后理解制度与行为。",
  },
] as const;

function formatDate(date: string) {
  return date.replaceAll("-", ".");
}

export function Homepage() {
  return <SiteChrome active="Home">
    <main className="home-main">
      <section className="home-hero">
        <p className="home-kicker">RU1TIMES · 小橘时代</p>
        <div className="home-hero-title">
          <div className="home-hero-heading">
            <h1><span>觀世相，愛憎離合。</span><strong lang="ja">自分を綴る。</strong></h1>
          </div>
          <p lang="en">Ru1Times is Tachibana Rui’s personal gazette—not a final verdict on the world, but an attempt to gather each day’s arrivals into coherent form, and to leave among them a quiet trace of the self.</p>
        </div>
        <div className="home-hero-notes">
          <article><span>01 · RECEIVE</span><h2>接住世界</h2><p>让正在发生的事，不只从眼前经过。</p></article>
          <article><span>02 · GROW</span><h2>向内生长</h2><p>把阅读与整理，变成缓慢而确定的进步。</p></article>
          <article><span>03 · EXPRESS</span><h2>留下声音</h2><p>为尚未完成的判断，保留一处可以长久停驻的地方。</p></article>
        </div>
      </section>

      <section className="home-publications" aria-labelledby="publications-title">
        <header>
          <p>FOUR PUBLICATIONS</p>
          <h2 id="publications-title">四份子刊，四种观看尺度</h2>
          <span>最新一期由内容索引自动更新</span>
        </header>
        <div className="publication-cards">
          {publications.map(publication => <a href={publication.href} className="publication-card" key={publication.name}>
            <div className="publication-card-top"><span>{publication.number}</span><b>{publication.label}</b></div>
            <h3>{publication.name}</h3>
            <p>{publication.description}</p>
            <div className="publication-latest">
              <span>LATEST · {formatDate(publication.date)}</span>
              <strong>{publication.title}</strong>
            </div>
            <i aria-hidden="true">↗</i>
          </a>)}
        </div>
      </section>

      <section className="home-about" aria-labelledby="about-title">
        <div className="about-copy">
          <header>
            <img src="/tachibana-rui-avatar.png" alt="橘瑠衣头像" width="400" height="400" />
            <div><p>ABOUT THE EDITOR</p><h2 id="about-title">橘瑠衣是谁</h2></div>
          </header>
          <div className="about-prose">
            <p>我是一个普通的学生，主要关注科技、金融、互联网、AI、政治与历史。我也喜欢运动、棋类和电子游戏，并始终热衷于文学。</p>
            <p>创办 Ru1Times，是因为我希望拥有一个真正属于自己的信息接收与观点表达平台。在这里，阅读不是被动地经过新闻，表达也不是为了给每件事立刻下结论；它更像一份持续更新的个人记录，让我知道自己看过什么、学到了什么，又如何一步步形成判断。</p>
            <p>“橘瑠衣”是我为这份刊物选择的身份。她是我早年观看动漫时始终意难平的角色。这个名字保留了那份未完成的情感，也逐渐成为我在这里接收信息、思考和表达时使用的署名。</p>
          </div>
          <address>
            <span>CONTACT</span>
            <a href="mailto:1403143456@qq.com">1403143456@qq.com</a>
            <a href="mailto:tachibanarui1008@gmail.com">tachibanarui1008@gmail.com</a>
          </address>
        </div>
        <figure className="about-figure">
          <img src="/tachibana-rui-character-sheet.png" alt="橘瑠衣人物设定图" width="857" height="931" />
          <figcaption>人物设定图仅用于个人身份说明；角色版权归原权利人所有。</figcaption>
        </figure>
      </section>
    </main>
  </SiteChrome>;
}
