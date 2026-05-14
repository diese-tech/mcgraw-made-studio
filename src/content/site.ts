import type { SiteContent } from "@/content/types";

export const siteContent: SiteContent = {
  brand: {
    name: "McGraw Made Studio",
    tagline: "Custom fabrication and personalized gifts, made to order in Central Florida.",
    location: "Based in Central Florida",
    email: "mcgrawdesignco@gmail.com",
    phone: "863-320-0820",
  },
  announcement:
    "Custom fabrication and personalized gifts, made to order. Central Florida.",
  navigation: [
    { label: "Custom Projects", href: "/custom-projects" },
    { label: "Ready-Made", href: "/ready-made" },
    { label: "Gallery", href: "/gallery" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  legalNavigation: [
    { label: "Terms", href: "/terms" },
    { label: "Refund & Custom Order Policy", href: "/refund-custom-order-policy" },
    { label: "Privacy", href: "/privacy" },
    { label: "Shipping & Pickup", href: "/shipping-pickup" },
  ],
  socialLinks: [
    { label: "Instagram", href: "https://www.instagram.com/mcgrawdesignco" },
    { label: "Facebook", href: "https://www.facebook.com/McGrawWoodCrafts" },
    { label: "TikTok", href: "https://www.tiktok.com/@mcgrawdesignco" },
  ],
  seo: {
    siteUrl: "https://mcgrawmade.com",
    defaultTitle: "McGraw Made Studio",
    description:
      "Warm premium custom fabrication, personalized gifts, awards, signs, and ready-made pieces.",
  },
};
