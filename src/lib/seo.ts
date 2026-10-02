import type { Metadata } from "next";

export const ogImagePath = "/og-image.png";
export const startersOgImagePath = "/og-starters.png";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const metadataBase = siteUrl ? new URL(siteUrl) : undefined;

type PageSeo = {
  title: string;
  description: string;
  path?: string;
  imagePath?: string;
  imageAlt?: string;
};

export function createPageMetadata({
  title,
  description,
  path = "/",
  imagePath = ogImagePath,
  imageAlt = "꿈또 로고",
}: PageSeo): Metadata {
  const isStartersImage = imagePath === startersOgImagePath;

  return {
    metadataBase,
    title,
    description,
    icons: {
      icon: "/icon.png",
      shortcut: "/icon.png",
      apple: "/icon.png",
    },
    keywords: ["꿈또", "꿈꾸는 또라이", "스타터즈", "스타터즈 기록", "자기이해"],
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "ko_KR",
      siteName: "꿈또",
      url: path,
      title,
      description,
      images: [
        {
          url: imagePath,
          width: isStartersImage ? 1536 : 286,
          height: isStartersImage ? 1024 : 132,
          alt: imageAlt,
        },
      ],
    },
    twitter: { card: "summary_large_image", title, description, images: [imagePath] },
  };
}

export const defaultMetadata = createPageMetadata({
  title: "꿈또 — 꿈꾸는 또라이가 세상을 이긴다",
  description: "스타터즈의 5주 기록과 다음 30일의 도전을 보관하는 공간",
});
