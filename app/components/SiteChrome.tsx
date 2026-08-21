"use client";

import { useEffect, useState, type ReactNode } from "react";

const links = [
  ["Today", "/"], ["Archive", "/archive"], ["Progress", "/progress"],
] as const;

function dateKey(date: Date) {
  return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,"0")}-${String(date.getDate()).padStart(2,"0")}`;
}

function readStreak() {
  let history: Record<string,unknown> = {};
  try { history = JSON.parse(localStorage.getItem("pmb-history") ?? "{}"); } catch { return 0; }
  const completed = new Set(Object.keys(history));
  const cursor = new Date();
  if (!completed.has(dateKey(cursor))) cursor.setDate(cursor.getDate()-1);
  let streak = 0;
  while (completed.has(dateKey(cursor))) { streak++; cursor.setDate(cursor.getDate()-1); }
  return streak;
}

export function SiteChrome({ active, children, demo = false, sourced = false, edition }: { active: string; children: ReactNode; demo?: boolean; sourced?: boolean; edition?: number }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [menu, setMenu] = useState(false);
  const [searching, setSearching] = useState(false);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem("pmb-theme") as "light" | "dark" | null;
    const initial = saved ?? (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(initial);
    document.documentElement.dataset.theme = initial;
    const refreshStreak = () => setStreak(readStreak());
    refreshStreak();
    addEventListener("storage", refreshStreak);
    addEventListener("pmb-history-update", refreshStreak);
    return () => { removeEventListener("storage", refreshStreak); removeEventListener("pmb-history-update", refreshStreak); };
  }, []);

  function toggleTheme() {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next); document.documentElement.dataset.theme = next; localStorage.setItem("pmb-theme", next);
  }

  return (
    <>
      <div className="demo-ribbon">
        {demo ? <><span>Demo Content</span><span>示例内容 · 非实时新闻</span></> : sourced ? <><span>Sourced Edition</span><span>已核验来源 · 独立学习摘要</span></> : <><span>小橘日报</span><span>独立四语学习刊物</span></>}
      </div>
      <header className="site-header">
        <a className="brand" href="/" aria-label="小橘日报首页">小橘日报<span>四语全球晨报</span></a>
        <nav aria-label="Primary navigation">
          {links.map(([label, href]) => <a className={active === label ? "active" : ""} href={href} key={href}>{label}</a>)}
        </nav>
        <div className="header-actions">
          <button className="icon-button search-button" onClick={() => setSearching(!searching)} aria-label="Search">⌕</button>
          <button className="icon-button" onClick={toggleTheme} aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}>{theme === "light" ? "◐" : "☼"}</button>
          <span className="learning-status" title="Learning status"><i /> {streak ? `${streak} day rhythm` : "Start today"}</span>
          <button className="menu-button" onClick={() => setMenu(!menu)} aria-expanded={menu} aria-label="Open menu"><span /><span /></button>
        </div>
      </header>
      {searching && <div className="search-panel"><label><span>Search the morning library</span><input autoFocus placeholder="Try “semiconductor” or “AI”…" /></label><button onClick={() => setSearching(false)}>Close</button></div>}
      {menu && <nav className="mobile-menu" aria-label="Mobile navigation">{links.map(([label,href]) => <a className={active === label ? "active" : ""} href={href} key={href}>{label}<span>↗</span></a>)}</nav>}
      {children}
      <footer className="site-footer"><div><strong>小橘日报</strong><p>One world. Four languages. One morning at a time.</p></div><div><span>English · 日本語 · 한국어 · 中文</span><span>{demo ? "Demo Edition" : edition ? `Edition ${String(edition).padStart(3,"0")}` : "Learning Archive"}</span></div></footer>
    </>
  );
}

export function SectionIntro({ eyebrow, title, subtitle, meta }: { eyebrow: string; title: string; subtitle: string; meta?: string }) {
  return <div className="section-intro"><div><p className="section-number">{eyebrow}</p><h2>{title}</h2><p>{subtitle}</p></div>{meta && <span className="time-pill">{meta}</span>}</div>;
}
