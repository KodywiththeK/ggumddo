import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { StarterProfile } from "@/components/starter/starter-profile";
import { BookReader } from "@/components/starter/book-reader";
import { getRecordById, starterRecords } from "@/lib/records";

export function generateStaticParams() {
  return starterRecords.map((record) => ({ memberId: record.id }));
}

export default async function StarterPage({ params }: { params: Promise<{ memberId: string }> }) {
  const { memberId } = await params;
  const record = getRecordById(memberId);
  if (!record) notFound();
  return <main className="noise min-h-screen pb-24"><SiteHeader /><div className="mx-auto max-w-5xl px-5 sm:px-8"><StarterProfile record={record} /><BookReader record={record} /></div></main>;
}
