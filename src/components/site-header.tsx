import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function SiteHeader() {
  return <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-8 sm:py-6"><Link href="/" className="group flex items-center gap-2.5" aria-label="꿈또 홈"><span className="grid size-9 rotate-[-5deg] place-items-center rounded-xl bg-coral text-lg font-black text-paper transition-transform group-hover:rotate-3 sm:size-10 sm:text-xl">ㄲ</span><span className="font-display text-lg font-black tracking-[-0.04em] sm:text-xl">꿈또</span></Link><Link href="/enter" className="inline-flex min-h-10 items-center gap-1 rounded-full px-3 text-sm font-semibold text-muted transition-colors hover:bg-[#f8eedc] hover:text-ink sm:px-4">기록 찾기 <ArrowUpRight className="size-4" /></Link></header>;
}
