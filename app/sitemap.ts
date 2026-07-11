import type { MetadataRoute } from "next";
import { stories } from "@/lib/stories";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://archomak.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes = [
    "/",
    "/products",
    "/stories",
    "/contact",
    ...stories.map((s) => `/stories/${s.slug}`),
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
