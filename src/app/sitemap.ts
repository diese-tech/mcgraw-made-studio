import type { MetadataRoute } from "next";
import { siteContent } from "@/content/site";

const routes = [
  "",
  "/custom-projects",
  "/ready-made",
  "/gallery",
  "/about",
  "/contact",
  "/terms",
  "/refund-custom-order-policy",
  "/privacy",
  "/shipping-pickup",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.map((route) => ({
    url: new URL(route, siteContent.seo.siteUrl).toString(),
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.includes("custom-projects") ? 0.9 : 0.7,
  }));
}
