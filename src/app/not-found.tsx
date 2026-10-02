import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "페이지를 찾을 수 없어요 | 꿈또",
  description: "요청한 스타터즈 기록이나 페이지를 찾을 수 없습니다.",
});

export default function NotFound() { return <main className="grid min-h-screen place-items-center bg-paper px-5 text-center"><div><p className="font-mono text-xs font-bold tracking-[0.18em] text-coral sm:text-sm">404 / LOST RECORD</p><h1 className="mt-5 break-keep font-display text-[clamp(3rem,14vw,5rem)] font-black leading-[.96] tracking-[-0.08em]">아직 이 기록은<br /><span className="text-coral">찾지 못했어요.</span></h1><p className="mx-auto mt-5 max-w-md break-keep text-sm leading-7 text-muted sm:text-base">기수와 이름을 다시 확인하거나, 꿈또의 첫 화면으로 돌아가주세요.</p><Button href="/enter" className="mt-8"><ArrowLeft className="size-4" /> 기록 찾으러 가기</Button><br /><Link href="/" className="mt-5 inline-block min-h-10 pt-2 text-sm font-semibold text-muted underline underline-offset-4">홈으로 돌아가기</Link></div></main>; }
