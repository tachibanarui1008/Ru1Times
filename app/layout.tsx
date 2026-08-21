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
  title: "小橘日报 · 四语全球晨报",
  description: "每天四十分钟，用四种语言理解同一个世界。A calm daily magazine for language learning and global knowledge.",
  openGraph: {
    title: "小橘日报 · 四语全球晨报",
    description: "One world. Four languages. One morning at a time.",
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
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
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
