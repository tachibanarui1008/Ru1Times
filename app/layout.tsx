import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ru1Times · 小橘时代",
  description: "Ru1Times 是橘瑠衣的个人电子报纸，记录每日新闻、语言、时评与财经观察。",
  openGraph: {
    title: "Ru1Times · 小橘时代",
    description: "News, language, commentary and finance from Tachibana.",
    type: "website",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "小橘日报" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "小橘日报 · 四语全球晨报",
    description: "One world. Four languages. One morning at a time.",
    images: ["/og.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/ru1times-favicon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
