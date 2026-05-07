import type { Metadata } from "next";
import { siteContent } from "@/content/site";

const defaultImage =
  "/images/mcgraw-made/hero/mcgraw-made-hero-wedding-guestbook-tree-01.jpg";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

export function buildPageMetadata({
  title,
  description,
  path,
  image = defaultImage,
}: PageMetadataInput): Metadata {
  const url = new URL(path, siteContent.seo.siteUrl);
  const imageUrl = new URL(image, siteContent.seo.siteUrl);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteContent.brand.name,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 900,
          alt: `${siteContent.brand.name} custom work`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}
