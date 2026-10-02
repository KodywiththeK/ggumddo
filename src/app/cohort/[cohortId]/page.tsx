import { notFound } from "next/navigation";
import { ArrowLeft, Users } from "lucide-react";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { MemberCard } from "@/components/starter/member-card";
import { getRecordsByCohort, starterCohorts } from "@/lib/records";

export function generateStaticParams() { return starterCohorts.map((cohort) => ({ cohortId: cohort.id })); }

export default async function CohortPage({ params }: { params: Promise<{ cohortId: string }> }) {
  const { cohortId } = await params;
  const cohort = starterCohorts.find((item) => item.id === cohortId);
  if (!cohort) notFound();
  const records = getRecordsByCohort(cohortId);
  return <main className="noise min-h-screen pb-20 sm:pb-24"><SiteHeader /><div className="mx-auto max-w-5xl px-4 sm:px-8"><Link href="/enter" className="inline-flex min-h-10 items-center gap-2 rounded-full text-sm font-semibold text-muted hover:text-ink"><ArrowLeft className="size-4" /> 나의 기록 찾기</Link><section className="mt-12 max-w-2xl sm:mt-16"><p className="inline-flex items-center gap-2 text-[10px] font-black tracking-[0.16em] text-coral sm:text-xs sm:tracking-[0.18em]"><Users className="size-4" /> {cohort.label.toUpperCase()}</p><h1 className="mt-4 break-keep font-display text-[clamp(3rem,14vw,5rem)] font-black leading-[.96] tracking-[-0.08em]">같은 기수,<br /><span className="text-coral">다른 방향</span></h1><p className="mt-5 break-keep text-base leading-7 text-muted sm:mt-6 sm:text-lg sm:leading-8">각자의 기록을 한 권씩 펼쳐보며 우리가 어디에서 시작했는지 기억해요.</p></section><section className="mt-10 sm:mt-14"><div className="mb-4 flex flex-col gap-3 sm:mb-5 sm:flex-row sm:items-center sm:justify-between"><p className="font-display text-2xl font-black tracking-[-0.04em]">함께한 스타터즈 <span className="text-coral">{records.length}</span>명</p><span className="w-fit rounded-full bg-yellow px-3 py-1 text-xs font-bold">{cohort.label}</span></div><div className="grid gap-4 sm:grid-cols-2">{records.map((record) => <MemberCard key={record.id} record={record} />)}</div></section></div></main>;
}
