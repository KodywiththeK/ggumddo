import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { EntryForm } from "@/components/entry-form";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "나의 스타터즈 기록 찾기 | 꿈또",
  description: "스타터즈 기수와 이름을 입력하고 5주 동안의 나의 기록을 펼쳐보세요.",
  path: "/enter",
});

export default function EnterPage() {
  return <main className="noise min-h-screen"><SiteHeader /><div className="mx-auto grid max-w-5xl gap-10 px-4 pb-20 pt-8 sm:gap-12 sm:px-8 sm:pb-24 sm:pt-20 lg:grid-cols-[.85fr_1.15fr] lg:items-center"><div><Link href="/" className="inline-flex min-h-10 items-center gap-2 rounded-full text-sm font-semibold text-muted hover:text-ink"><ArrowLeft className="size-4" /> 처음으로</Link><p className="mt-12 inline-flex items-center gap-2 text-[10px] font-black tracking-[0.16em] text-coral sm:mt-16 sm:text-xs"><Sparkles className="size-4" /> FIND YOUR RECORD</p><h1 className="mt-4 break-keep font-display text-[clamp(3rem,14vw,5rem)] font-black leading-[.96] tracking-[-0.08em]">당신은<br /><span className="text-coral">몇 기</span><br />스타터인가요?</h1><p className="mt-5 max-w-sm break-keep text-base leading-7 text-muted sm:mt-6 sm:text-lg sm:leading-8">기수와 이름을 입력하면 지난 5주 동안의 기록과 앞으로의 도전을 만날 수 있어요.</p></div><div className="rounded-[1.5rem] border border-ink/10 bg-white/70 p-5 shadow-[6px_6px_0_#a8c7a0] sm:rounded-[2rem] sm:p-10 sm:shadow-[8px_8px_0_#a8c7a0]"><div className="mb-7 sm:mb-8"><p className="font-display text-2xl font-black tracking-[-0.04em]">나의 기록 찾기</p><p className="mt-2 text-sm leading-6 text-muted">스타터즈는 이름을 기억하고 있어요.</p></div><EntryForm /></div></div></main>;
}
