import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

type SeoParams = {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
};

export function generateMetadata({
  title,
  description,
  path = "/",
  ogImage,
  noIndex,
}: SeoParams = {}): Metadata {
  const url = `${siteConfig.url}${path}`;
  const image = ogImage || siteConfig.ogImage;

  return {
    title: title
      ? `${title} | ${siteConfig.shortName}`
      : siteConfig.name,
    description: description || siteConfig.description,
    alternates: { canonical: url },
    openGraph: {
      title: title || siteConfig.name,
      description: description || siteConfig.description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: image ? [{ url: image, width: 1200, height: 630 }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: title || siteConfig.name,
      description: description || siteConfig.description,
      images: image ? [image] : [],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
