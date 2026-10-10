import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ProductChip from "@/components/product-chip";
import { news, getNewsItem, formatNewsDate } from "@/lib/news";
import { getProduct } from "@/lib/products";
import { JsonLd, breadcrumbJsonLd, organizationId, siteUrl } from "@/lib/seo";

export function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getNewsItem(slug);
  if (!item) return {};
  const product = getProduct(item.product);
  const images = product
    ? [{ url: product.screenshot, width: 1440, height: 900, alt: product.screenshotAlt }]
    : undefined;

  return {
    title: item.title.length > 55 ? { absolute: item.title } : item.title,
    description: item.summary,
    alternates: { canonical: `/news/${item.slug}` },
    openGraph: {
      type: "article",
      url: `${siteUrl}/news/${item.slug}`,
      title: item.title,
      description: item.summary,
      publishedTime: item.date,
      section: item.product,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: item.title,
      description: item.summary,
      images: product ? [product.screenshot] : undefined,
    },
  };
}

// Renders **bold** spans inside a paragraph.
function Inline({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*\*[^*]+\*\*)/).map((part, i) =>
        part.startsWith("**") ? (
          <strong key={i} className="font-semibold">
            {part.slice(2, -2)}
          </strong>
        ) : (
          part
        ),
      )}
    </>
  );
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getNewsItem(slug);
  if (!item) notFound();
  const product = getProduct(item.product);
  const url = `${siteUrl}/news/${item.slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: item.title,
    description: item.summary,
    datePublished: item.date,
    dateModified: item.date,
    url,
    mainEntityOfPage: url,
    image: product ? [`${siteUrl}${product.screenshot}`] : undefined,
    author: { "@id": organizationId },
    publisher: { "@id": organizationId },
    about: product
      ? { "@type": "SoftwareApplication", name: product.name, url: product.website }
      : undefined,
  };

  return (
    <div className="bg-white text-[var(--ink)] min-h-screen">
      <JsonLd data={articleJsonLd} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "News", path: "/news" },
          { name: item.title, path: `/news/${item.slug}` },
        ])}
      />
      <Navigation />

      <main className="px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-24 sm:pb-32">
        <article className="max-w-[680px] mx-auto">
          <Link
            href="/news"
            className="text-[15px] text-[var(--ink-3)] hover:text-[var(--ink)]"
          >
            ← News
          </Link>
          <div className="flex flex-wrap items-center gap-3 mt-8 text-[15px] text-[var(--ink-3)]">
            <time dateTime={item.date}>{formatNewsDate(item.date)}</time>
            <span aria-hidden>·</span>
            <ProductChip name={item.product} />
          </div>
          <h1 className="text-[clamp(2.125rem,5vw,3rem)] font-semibold leading-[1.1] tracking-[-0.03em] mt-4">
            {item.title}
          </h1>
          <p className="text-lede mt-4 mb-9">{item.summary}</p>

          <div className="prose-article">
            {item.body.map((para, i) =>
              para.startsWith("## ") ? (
                <h2 key={i}>{para.slice(3)}</h2>
              ) : (
                <p key={i}>
                  <Inline text={para} />
                </p>
              ),
            )}
          </div>

          {product && (
            <aside className="mt-12 pt-6 border-t border-[var(--line)] flex flex-wrap gap-x-6 gap-y-2">
              <Link href={`/products/${product.slug}`} className="text-link">
                About {product.name} →
              </Link>
              <a href={product.website} target="_blank" rel="noopener" className="text-link">
                Visit {product.displayUrl} ↗
              </a>
              <Link href="/news" className="text-link">
                All news →
              </Link>
            </aside>
          )}
        </article>
      </main>

      <Footer />
    </div>
  );
}
