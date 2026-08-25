"use client";

/* eslint-disable @next/next/no-html-link-for-pages -- GitHub Pages needs full-page navigation between static routes. */

import { useEffect, useState, type ReactNode } from "react";

const links = [
  ["Home", "/"], ["Archive", "/archive"],
] as const;

export function SiteChrome({ active, children, edition }: { active: string; children: ReactNode; edition?: number }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [menu, setMenu] = useState(false);
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const initial = matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      setTheme(initial);
      document.documentElement.dataset.theme = initial;
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  function toggleTheme() {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next); document.documentElement.dataset.theme = next;
  }

  return (
    <>
      <header className="site-header">
        <a className="brand" href="/" aria-label="Ru1Times 小橘时代首页"><strong>Ru1Times</strong><span>小橘时代 · TACHIBANA</span></a>
        <nav aria-label="Primary navigation">
          {links.map(([label, href]) => <a className={active === label ? "active" : ""} href={href} key={href}>{label}</a>)}
        </nav>
        <div className="header-actions">
          <button className="icon-button search-button" onClick={() => setSearching(!searching)} aria-label="Search">⌕</button>
          <button className="icon-button" onClick={toggleTheme} aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}>{theme === "light" ? "◐" : "☼"}</button>
          <button className="menu-button" onClick={() => setMenu(!menu)} aria-expanded={menu} aria-label="Open menu"><span /><span /></button>
        </div>
      </header>
      {searching && <div className="search-panel"><label><span>搜索 Ru1Times</span><input placeholder="输入日期、刊物、主题或标题……" /></label><button onClick={() => setSearching(false)}>关闭</button></div>}
      {menu && <nav className="mobile-menu" aria-label="Mobile navigation">{links.map(([label,href]) => <a className={active === label ? "active" : ""} href={href} key={href}>{label}<span>{href.startsWith("#") ? "Soon" : "↗"}</span></a>)}</nav>}
      {children}
      <footer className="site-footer"><div><strong>Ru1Times</strong><p>小橘时代 · One world, many points of view.</p></div><div><span>Ru1Daily · Ru1Weekly · Ru1Commentary · Ru1Finance</span><span>{edition === undefined ? "Archive" : `第 ${String(edition).padStart(3,"0")} 期`}</span></div></footer>
    </>
  );
}

export function SectionIntro({ eyebrow, title, subtitle, meta }: { eyebrow: string; title: string; subtitle: string; meta?: string }) {
  return <div className="section-intro"><div><p className="section-number">{eyebrow}</p><h2>{title}</h2><p>{subtitle}</p></div>{meta && <span className="time-pill">{meta}</span>}</div>;
}
