import type { MetadataRoute } from "next";
import { news } from "@/lib/news";
import { products } from "@/lib/products";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const latestNews = news[0]?.date;
  const page = (
    path: string,
    lastModified: string | undefined,
    priority: number,
    changeFrequency: "weekly" | "monthly" | "yearly" = "monthly",
  ) => ({
    url: `${siteUrl}${path}`,
    lastModified: lastModified ? new Date(lastModified) : undefined,
    changeFrequency,
    priority,
  });

  return [
    page("/", latestNews, 1, "weekly"),
    page("/products", latestNews, 0.9),
    ...products.map((p) => page(`/products/${p.slug}`, p.launchDate, 0.9)),
    page("/company", undefined, 0.7),
    page("/news", latestNews, 0.8, "weekly"),
    ...news.map((n) => page(`/news/${n.slug}`, n.date, 0.7)),
    page("/contact", undefined, 0.5),
    page("/privacy", undefined, 0.2, "yearly"),
    page("/terms", undefined, 0.2, "yearly"),
  ];
}
