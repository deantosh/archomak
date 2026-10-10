import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { products } from "@/lib/products";
import { JsonLd, breadcrumbJsonLd, organizationId, siteUrl } from "@/lib/seo";

const description =
  "Archomak is a software company that builds products for businesses in Africa. Our mission is to simplify everyday business operations through software and technology.";

export const metadata: Metadata = {
  title: "About Archomak: mission, vision and facts",
  description,
  alternates: { canonical: "/company" },
  openGraph: {
    title: "About Archomak",
    description,
    url: `${siteUrl}/company`,
    type: "website",
    images: [{ url: "/products/sikakoraa.jpg", width: 1440, height: 900 }],
  },
};

const sections = [
  { id: "about", label: "About" },
  { id: "mission", label: "Mission" },
  { id: "vision", label: "Vision" },
  { id: "facts", label: "Facts" },
];

const facts: { label: string; value: string; href?: string; products?: boolean }[] = [
  { label: "Products", value: "", products: true },
  { label: "Serving", value: "Businesses in Africa" },
  { label: "Registered in", value: "Kenya" },
  { label: "Contact", value: "hello@archomak.com", href: "mailto:hello@archomak.com" },
];

export default function CompanyPage() {
  return (
    <div className="bg-white text-[var(--ink)] min-h-screen">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          url: `${siteUrl}/company`,
          name: "About Archomak",
          description,
          mainEntity: { "@id": organizationId },
        }}
      />
      <JsonLd data={breadcrumbJsonLd([{ name: "Company", path: "/company" }])} />
      <Navigation />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-24 sm:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-[200px_minmax(0,680px)] gap-10 lg:gap-16">
          <nav
            aria-label="On this page"
            className="hidden lg:grid content-start gap-3.5 sticky top-32 self-start text-[15px] text-[var(--ink-3)]"
          >
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="hover:text-[var(--ink)]">
                {s.label}
              </a>
            ))}
          </nav>

          <div>
            <section id="about" className="scroll-mt-28">
              <h1 className="text-h1">About Archomak</h1>
              <p className="text-lede mt-6">
                Archomak is a software company that builds products for
                businesses in Africa. Each product has its own name, its own
                website and one clear job. Archomak builds them, runs them and
                keeps improving them.
              </p>
            </section>

            <section id="mission" className="scroll-mt-28 mt-14">
              <h2 className="text-[15px] font-semibold text-[var(--ink-3)] mb-3">
                Mission
              </h2>
              <p className="text-[clamp(1.5rem,3vw,1.875rem)] leading-[1.3] font-medium tracking-[-0.02em]">
                To simplify everyday business operations through software and
                technology.
              </p>
            </section>

            <section id="vision" className="scroll-mt-28 mt-14">
              <h2 className="text-[15px] font-semibold text-[var(--ink-3)] mb-3">
                Vision
              </h2>
              <p className="text-[clamp(1.5rem,3vw,1.875rem)] leading-[1.3] font-medium tracking-[-0.02em]">
                Businesses across Africa spend less time on routine work and
                more time serving their customers.
              </p>
            </section>

            <section id="facts" className="scroll-mt-28 mt-14">
              <h2 className="text-[15px] font-semibold text-[var(--ink-3)] mb-3">
                Facts
              </h2>
              <dl className="grid grid-cols-1 sm:grid-cols-2 border-t border-[var(--line)]">
                {facts.map((f) => (
                  <div
                    key={f.label}
                    className="grid gap-0.5 py-4 border-b border-[var(--line)]"
                  >
                    <dt className="text-sm text-[var(--ink-3)]">{f.label}</dt>
                    <dd className="font-semibold">
                      {f.products ? (
                        products.map((p, i) => (
                          <span key={p.slug}>
                            {i > 0 && ", "}
                            <Link href={`/products/${p.slug}`} className="text-link">
                              {p.name}
                            </Link>
                          </span>
                        ))
                      ) : f.href ? (
                        <a href={f.href} className="text-link">
                          {f.value}
                        </a>
                      ) : (
                        f.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-10">
                <Link href="/products" className="text-link">
                  See our products →
                </Link>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
