import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import {
  products,
  getProductBySlug,
  getProductWebsiteHref,
  isLive,
  formatLaunchDate,
} from "@/lib/products";
import { news, formatNewsDate } from "@/lib/news";
import { JsonLd, breadcrumbJsonLd, organizationId, siteUrl } from "@/lib/seo";

// Re-render hourly so the badge switches to "Live" on launch day.
export const revalidate = 3600;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  const image = { url: product.screenshot, width: 1440, height: 900, alt: product.screenshotAlt };
  return {
    title: { absolute: `${product.seoTitle} | Archomak` },
    description: product.seoDescription,
    keywords: [product.name, "Archomak", ...product.keywords],
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      type: "website",
      url: `${siteUrl}/products/${product.slug}`,
      title: product.seoTitle,
      description: product.seoDescription,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: product.seoTitle,
      description: product.seoDescription,
      images: [product.screenshot],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const live = isLive(product);
  const related = news.filter((n) => n.product === product.name);
  const others = products.filter((p) => p.slug !== product.slug);
  const websiteHref = getProductWebsiteHref(product, "product-page");

  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    description: product.seoDescription,
    url: product.website,
    image: `${siteUrl}${product.screenshot}`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    areaServed: { "@type": "Country", name: "Kenya" },
    datePublished: product.launchDate,
    publisher: { "@id": organizationId },
    ...(product.pricing.offer && {
      offers: {
        "@type": "Offer",
        price: product.pricing.offer.price,
        priceCurrency: product.pricing.offer.currency,
        url: product.website,
      },
    }),
  };

  return (
    <div className="bg-white text-[var(--ink)] min-h-screen">
      <JsonLd data={softwareJsonLd} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Products", path: "/products" },
          { name: product.name, path: `/products/${product.slug}` },
        ])}
      />
      <Navigation />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-24 sm:pb-32">
        <nav aria-label="Breadcrumb" className="text-[15px] text-[var(--ink-3)]">
          <Link href="/products" className="hover:text-[var(--ink)]">
            Products
          </Link>
          <span aria-hidden> / </span>
          <span aria-current="page">{product.name}</span>
        </nav>

        <div className="mt-8 flex flex-wrap items-center gap-2.5 text-sm text-[var(--ink-3)]">
          <i
            aria-hidden
            className="inline-block h-2.5 w-2.5 rounded-[3px]"
            style={{ background: product.color }}
          />
          {product.category}
          <span
            className="rounded-full px-2 py-0.5 text-xs font-semibold text-[var(--ink)]"
            style={{ background: product.tint }}
          >
            {live ? "Live" : `Launches ${formatLaunchDate(product)}`}
          </span>
        </div>
        <h1 className="text-h1 mt-4">{product.name}</h1>
        <p className="text-lede mt-4 max-w-[46ch]">{product.description}</p>
        <a
          href={websiteHref}
          target="_blank"
          rel="noopener"
          className="btn-pill btn-primary px-5 py-3 text-[15px] mt-8"
        >
          Visit {product.displayUrl} ↗
        </a>

        <div className="mt-14 rounded-2xl border border-[var(--line)] bg-[var(--surface-alt)] px-5 pt-5 sm:px-10 sm:pt-10">
          <Image
            src={product.screenshot}
            alt={product.screenshotAlt}
            width={1440}
            height={900}
            priority
            className="block w-full aspect-[16/10] object-cover object-top rounded-t-lg ring-1 ring-[var(--line)]"
          />
        </div>

        <div className="mt-16 sm:mt-20 grid grid-cols-1 lg:grid-cols-[minmax(0,680px)_1fr] gap-12 lg:gap-16">
          <div>
            <section>
              <h2 className="text-h2">What {product.name} does</h2>
              <div className="prose-article mt-5">
                {product.intro.map((p, i) => (
                  <p key={i} className="text-[var(--ink-2)]">
                    {p}
                  </p>
                ))}
              </div>
              <dl className="mt-8 border-t border-[var(--line)]">
                {product.features.map((f) => (
                  <div
                    key={f.title}
                    className="grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-1 sm:gap-6 py-5 border-b border-[var(--line)]"
                  >
                    <dt className="font-semibold">{f.title}</dt>
                    <dd className="text-[var(--ink-2)]">{f.body}</dd>
                  </div>
                ))}
              </dl>
            </section>

            <section className="mt-14">
              <h2 className="text-h3">Who it is for</h2>
              <p className="text-[var(--ink-2)] mt-3 text-lg leading-relaxed">
                {product.audience}
              </p>
            </section>

            <section className="mt-14">
              <h2 className="text-h3">Pricing</h2>
              <p className="mt-3 text-lg font-medium">{product.pricing.summary}</p>
              <ul className="mt-2 grid gap-1.5 text-[var(--ink-2)] text-lg leading-relaxed">
                {product.pricing.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
              <p className="mt-6">
                <a href={websiteHref} target="_blank" rel="noopener" className="text-link">
                  Full details on {product.displayUrl} ↗
                </a>
              </p>
            </section>
          </div>

          <aside className="grid content-start gap-10">
            {related.length > 0 && (
              <section>
                <h2 className="text-[15px] font-semibold text-[var(--ink-3)]">
                  News about {product.name}
                </h2>
                <ul className="mt-3 border-t border-[var(--line)]">
                  {related.map((n) => (
                    <li key={n.slug} className="border-b border-[var(--line)] py-4">
                      <Link href={`/news/${n.slug}`} className="group grid gap-1">
                        <span className="font-semibold leading-snug group-hover:underline underline-offset-4">
                          {n.title}
                        </span>
                        <time dateTime={n.date} className="text-sm text-[var(--ink-3)]">
                          {formatNewsDate(n.date, "short")}
                        </time>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}
            <section>
              <h2 className="text-[15px] font-semibold text-[var(--ink-3)]">
                Other products
              </h2>
              <ul className="mt-3 border-t border-[var(--line)]">
                {others.map((p) => (
                  <li key={p.slug} className="border-b border-[var(--line)] py-4">
                    <Link href={`/products/${p.slug}`} className="group grid gap-1">
                      <span className="inline-flex items-center gap-2 font-semibold group-hover:underline underline-offset-4">
                        <i
                          aria-hidden
                          className="inline-block h-2.5 w-2.5 rounded-[3px]"
                          style={{ background: p.color }}
                        />
                        {p.name}
                      </span>
                      <span className="text-sm text-[var(--ink-2)]">{p.description}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
