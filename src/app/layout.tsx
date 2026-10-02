import type { Metadata } from "next";
import { QueryProvider } from "@/providers/query-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "꿈또 — 꿈꾸는 또라이가 세상을 이긴다",
  description: "스타터즈의 5주 기록과 다음 30일의 도전을 보관하는 공간",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body><QueryProvider>{children}</QueryProvider></body></html>;
}
