import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { StarterRecord } from "@/lib/record-types";

export function MemberCard({ record }: { record: StarterRecord }) {
  const completed = record.weeks.filter((week) => week.status === "complete").length;
  return <Link href={`/starter/${record.id}`} className="group flex min-h-[240px] flex-col rounded-[1.25rem] border border-ink/10 bg-white/65 p-5 transition-all hover:-translate-y-1 hover:border-coral/50 hover:bg-white hover:shadow-[5px_5px_0_#f6d26d] sm:rounded-[1.4rem]"><div className="flex items-start justify-between gap-4"><div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[#dfe9d8] font-display text-xl font-black text-green">{record.name.slice(0, 1)}</div><ArrowUpRight className="size-5 text-muted transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-coral" /></div><h3 className="mt-5 font-display text-2xl font-black tracking-[-0.05em]">{record.name}</h3><p className="mt-2 min-h-12 break-keep text-sm leading-6 text-muted">{record.bio}</p><div className="mt-4 flex flex-wrap gap-2">{record.keywords.map((keyword) => <span key={keyword} className="rounded-full bg-paper px-3 py-1 text-xs font-semibold text-muted">#{keyword}</span>)}</div><p className="mt-auto pt-5 font-mono text-xs text-coral">{completed}/5 CHAPTERS COLLECTED</p></Link>;
}
