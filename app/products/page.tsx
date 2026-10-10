import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import {
  products,
  isLive,
  formatLaunchDate,
  getProductWebsiteHref,
} from "@/lib/products";
import { JsonLd, breadcrumbJsonLd, siteUrl } from "@/lib/seo";

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Archomak products",
  itemListElement: products.map((product, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `${siteUrl}/products/${product.slug}`,
    name: product.name,
  })),
};

// Re-render hourly so a product's badge switches to "Live" on its launch day.
export const revalidate = 3600;

export default function ProductsPage() {
  const now = new Date();

  return (
    <div className="bg-white text-[var(--ink)] min-h-screen">
      <JsonLd data={itemListJsonLd} />
      <JsonLd data={breadcrumbJsonLd([{ name: "Products", path: "/products" }])} />
      <Navigation />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-24 sm:pb-32">
        <h1 className="text-h1">Products</h1>
        <p className="text-lede mt-4">
          Each product does one job and has its own website.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {products.map((product) => {
            const live = isLive(product, now);
            return (
              <article
                key={product.id}
                className="card-base overflow-hidden flex flex-col"
              >
                <Link
                  href={`/products/${product.slug}`}
                  tabIndex={-1}
                  aria-hidden
                  className="block bg-[var(--surface-alt)] px-6 pt-6 sm:px-7 sm:pt-7"
                >
                  <Image
                    src={product.screenshot}
                    alt={product.screenshotAlt}
                    width={1440}
                    height={900}
                    className="block w-full aspect-[16/10] object-cover object-top rounded-t-lg ring-1 ring-[var(--line)]"
                  />
                </Link>
                <div className="flex flex-col gap-2 p-6 sm:p-7">
                  <div className="flex items-center gap-2.5 text-sm text-[var(--ink-3)]">
                    <i
                      aria-hidden
                      className="inline-block h-2.5 w-2.5 rounded-[3px]"
                      style={{ background: product.color }}
                    />
                    {product.category}
                    <span
                      className="rounded-full px-2 py-0.5 text-xs font-semibold"
                      style={{
                        background: product.tint,
                        color: "var(--ink)",
                      }}
                    >
                      {live
                        ? "Live"
                        : `Launches ${formatLaunchDate(product)}`}
                    </span>
                  </div>
                  <h2 className="text-[28px] font-semibold tracking-[-0.02em]">
                    <Link
                      href={`/products/${product.slug}`}
                      className="hover:underline underline-offset-4"
                    >
                      {product.name}
                    </Link>
                  </h2>
                  <p className="text-[var(--ink-2)]">{product.description}</p>
                  <div className="flex flex-wrap gap-x-6 gap-y-2 mt-2">
                    <Link href={`/products/${product.slug}`} className="text-link">
                      About {product.name} →
                    </Link>
                    <a
                      href={getProductWebsiteHref(product, "products-card")}
                      target="_blank"
                      rel="noopener"
                      className="text-link"
                    >
                      Visit {product.displayUrl} ↗
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}
