import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "一站式 Podcast 製作服務｜企劃、講稿、錄製、上架一次完成",
  description:
    "想做 Podcast 但不想自己錄音剪輯？我們協助完成企劃、講稿、聲音製作、SoundOn 上架與發布。可使用自己的聲音，也可選擇專業音色代錄。",
  openGraph: {
    title: "聲音內容製作所｜一站式 Podcast 製作服務",
    description:
      "企劃、講稿、錄製、剪輯、SoundOn 上架到發布，一次完成。",
    images: ["/home-cover.png"],
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
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
