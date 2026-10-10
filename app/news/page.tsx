import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ProductChip from "@/components/product-chip";
import { news, formatNewsDate } from "@/lib/news";
import { JsonLd, breadcrumbJsonLd, siteUrl } from "@/lib/seo";

const description = "Announcements from Archomak and our products.";
const metaDescription =
  "Launches and announcements from Archomak and its products, Kunanyesha (weekly county weather reports for Kenya) and Sikakoraa (book and pay local professionals).";

export const metadata: Metadata = {
  title: "News: Kunanyesha and Sikakoraa announcements",
  description: metaDescription,
  alternates: {
    canonical: "/news",
    types: { "application/rss+xml": "/news/rss.xml" },
  },
  openGraph: {
    title: "News | Archomak",
    description: metaDescription,
    url: `${siteUrl}/news`,
    type: "website",
    images: [{ url: "/products/sikakoraa.jpg", width: 1440, height: 900 }],
  },
};

export default function NewsPage() {
  return (
    <div className="bg-white text-[var(--ink)] min-h-screen">
      <JsonLd data={breadcrumbJsonLd([{ name: "News", path: "/news" }])} />
      <Navigation />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-24 sm:pb-32">
        <h1 className="text-h1">News</h1>
        <p className="text-lede mt-4">{description}</p>

        <ol className="mt-12 border-t border-[var(--line)]">
          {news.map((item) => (
            <li key={item.slug} className="border-b border-[var(--line)]">
              <Link
                href={`/news/${item.slug}`}
                className="group grid grid-cols-1 md:grid-cols-[160px_1fr_170px] gap-2 md:gap-6 items-baseline py-6 md:py-7"
              >
                <time dateTime={item.date} className="text-[15px] text-[var(--ink-3)]">
                  {formatNewsDate(item.date, "short")}
                </time>
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold tracking-[-0.015em] leading-tight group-hover:underline underline-offset-4">
                    {item.title}
                  </h2>
                  <p className="text-[var(--ink-2)] mt-1.5">{item.summary}</p>
                </div>
                <span className="md:justify-self-end">
                  <ProductChip name={item.product} />
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </main>

      <Footer />
    </div>
  );
}
