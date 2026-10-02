import type { Metadata } from "next";
import { QueryProvider } from "@/providers/query-provider";
import { defaultMetadata } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body><QueryProvider>{children}</QueryProvider></body></html>;
}
