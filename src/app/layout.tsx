import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { siteContent } from "@/content/site";
import "./globals.css";

const bodyFont = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const displayFont = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteContent.brand.name,
  description:
    "Handcrafted custom fabrication studio in Central Florida creating personalized gifts, signage, awards, decor, and heirloom-quality pieces.",
  areaServed: ["Central Florida", "United States"],
  address: {
    "@type": "PostalAddress",
    addressRegion: "FL",
    addressCountry: "US",
  },
  url: siteContent.seo.siteUrl,
  email: siteContent.brand.email,
  telephone: siteContent.brand.phone,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteContent.seo.siteUrl),
  title: {
    default: siteContent.seo.defaultTitle,
    template: `%s | ${siteContent.brand.name}`,
  },
  description: siteContent.seo.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteContent.seo.defaultTitle,
    description: siteContent.seo.description,
    url: siteContent.seo.siteUrl,
    siteName: siteContent.brand.name,
    images: [
      {
        url: "/images/mcgraw-made/hero/mcgraw-made-hero-wedding-guestbook-tree-01.jpg",
        width: 1200,
        height: 900,
        alt: "McGraw Made Studio personalized wedding guestbook tree",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.seo.defaultTitle,
    description: siteContent.seo.description,
    images: [
      "/images/mcgraw-made/hero/mcgraw-made-hero-wedding-guestbook-tree-01.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${displayFont.variable} h-full`}
    >
      <body className="min-h-full bg-cream text-walnut antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
