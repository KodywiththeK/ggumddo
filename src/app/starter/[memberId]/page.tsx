import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { StarterProfile } from "@/components/starter/starter-profile";
import { BookReader } from "@/components/starter/book-reader";
import { getRecordById, starterRecords } from "@/lib/records";
import { createPageMetadata, startersOgImagePath } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ memberId: string }> }) {
  const { memberId } = await params;
  const record = getRecordById(memberId);

  if (!record) {
    return createPageMetadata({
      title: "스타터즈 기록을 찾을 수 없어요 | 꿈또",
      description: "입력한 스타터즈 기록을 찾을 수 없습니다.",
      path: `/starter/${memberId}`,
      imagePath: startersOgImagePath,
      imageAlt: "꿈또 스타터즈 기록 보관소",
    });
  }

  return createPageMetadata({
    title: `${record.name}의 스타터즈 기록 | 꿈또`,
    description: `${record.name}님이 5주 동안 발견한 것과 앞으로의 30일 도전을 담은 스타터즈 기록입니다.`,
    path: `/starter/${record.id}`,
    imagePath: startersOgImagePath,
    imageAlt: "꿈또 스타터즈 기록 보관소",
  });
}

export function generateStaticParams() {
  return starterRecords.map((record) => ({ memberId: record.id }));
}

export default async function StarterPage({ params }: { params: Promise<{ memberId: string }> }) {
  const { memberId } = await params;
  const record = getRecordById(memberId);
  if (!record) notFound();
  return <main className="noise min-h-screen pb-24"><SiteHeader /><div className="mx-auto max-w-5xl px-5 sm:px-8"><StarterProfile record={record} /><BookReader record={record} /></div></main>;
}
