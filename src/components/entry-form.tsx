"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { findRecords, starterCohorts } from "@/lib/records";

export function EntryForm() {
  const router = useRouter();
  const [cohortId, setCohortId] = useState(starterCohorts[0]?.id ?? "");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const matches = findRecords(cohortId, name);
    if (matches.length === 1) return router.push(`/starter/${matches[0].id}`);
    setError(matches.length > 1 ? "같은 이름의 스타터가 있어요. 운영자에게 알려주세요." : "입력한 기수와 이름에 해당하는 스타터를 찾지 못했어요.");
  }
  return <form onSubmit={handleSubmit} className="space-y-5"><label className="block"><span className="mb-2 block text-sm font-bold text-ink">스타터즈 기수</span><select value={cohortId} onChange={(event) => setCohortId(event.target.value)} className="h-14 w-full rounded-2xl border border-ink/15 bg-white/80 px-4 font-semibold text-ink outline-none transition focus:border-coral focus:ring-2 focus:ring-coral/20">{starterCohorts.map((cohort) => <option key={cohort.id} value={cohort.id}>{cohort.label}</option>)}</select></label><label className="block"><span className="mb-2 block text-sm font-bold text-ink">이름</span><input value={name} onChange={(event) => { setName(event.target.value); setError(""); }} placeholder="예: 현지혜" className="h-14 w-full rounded-2xl border border-ink/15 bg-white/80 px-4 font-semibold text-ink outline-none transition placeholder:text-muted/60 focus:border-coral focus:ring-2 focus:ring-coral/20" /></label>{error && <p role="alert" className="rounded-xl bg-coral/10 px-4 py-3 text-sm font-semibold leading-6 text-coral">{error}</p>}<Button type="submit" className="w-full">나의 기록 열기 <ArrowRight className="size-5" /></Button><p className="flex items-center justify-center gap-2 text-center text-xs leading-5 text-muted"><Search className="size-3.5" /> 기수와 이름으로 기록을 찾아요.</p></form>;
}
