import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { getProductWebsiteHref } from "@/lib/products";

type ProductData = {
  id: string;
  tag: string;
  status: string;
  name: string;
  tagline: string;
  longDescription: string;
  features: { title: string; description: string }[];
  pricing: {
    label: string;
    price: string;
    period: string;
    description: string;
    highlighted: boolean;
    items: string[];
  }[];
  cta: {
    primary: string;
    primaryHref: string;
    secondary: string;
    secondaryHref: string;
  };
};

const productData: Record<string, ProductData> = {
  "7": {
    id: "7",
    tag: "Climate Tech",
    status: "Live",
    name: "Kunanyesha",
    tagline: "Weather intelligence for African operations",
    longDescription:
      "Kunanyesha delivers hyperlocal weather intelligence for all 47 counties in Kenya. Automated weekly reports with geospatial analysis help agricultural teams, logistics operators, and government agencies make weather-informed decisions.",
    features: [
      {
        title: "47-county coverage",
        description:
          "Real-time and forecast data at the county level, granular enough for field operations and planning.",
      },
      {
        title: "Automated weekly reports",
        description:
          "Scheduled PDF and email reports delivered to your inbox every Monday morning. No manual work required.",
      },
      {
        title: "Geospatial analysis",
        description:
          "Interactive maps overlaying weather data with your operational zones, routes, and crop areas.",
      },
      {
        title: "Custom alerts",
        description:
          "Set threshold-based SMS or email alerts for rainfall, temperature, humidity, or wind events.",
      },
      {
        title: "Historical data",
        description:
          "Access up to 10 years of historical weather records for trend analysis and planning.",
      },
      {
        title: "API access",
        description:
          "Integrate county-level weather data into your own dashboards, apps, or ERP systems.",
      },
    ],
    pricing: [
      {
        label: "Pro",
        price: "KES 999",
        period: "/ month",
        description:
          "Automated weather reporting for all 47 counties in Kenya with weekly reports and geospatial analysis.",
        highlighted: true,
        items: [
          "All 47 counties",
          "Automated weekly reports",
          "Geospatial maps",
          "Custom alerts",
          "Historical data access",
          "API access",
        ],
      },
    ],
    cta: {
      primary: "Start free trial",
      primaryHref: "/contact",
      secondary: "Explore enterprise deployment",
      secondaryHref: "/enterprise",
    },
  },
  "8": {
    id: "8",
    tag: "Commerce",
    status: "Coming soon",
    name: "Book & Pay",
    tagline: "Bookings and payments for African service businesses",
    longDescription:
      "Book & Pay gives service businesses in Ghana a single platform to manage appointments, accept mobile money and card payments, and automate customer reminders — without needing a developer or multiple subscriptions.",
    features: [
      {
        title: "Mobile money support",
        description:
          "Accept MTN Mobile Money and Vodafone Cash natively. No third-party redirects or extra setup.",
      },
      {
        title: "Card payments",
        description:
          "Visa and Mastercard processing via Paystack, fully PCI-DSS compliant.",
      },
      {
        title: "Appointment scheduling",
        description:
          "Customers book online via your shareable link. You set your availability, buffer times, and capacity.",
      },
      {
        title: "Automated reminders",
        description:
          "SMS and WhatsApp reminders reduce no-shows by up to 40% — sent automatically 24h and 1h before.",
      },
      {
        title: "Business dashboard",
        description:
          "Real-time view of bookings, revenue, and customer history. Export reports in one click.",
      },
      {
        title: "Multi-staff support",
        description:
          "Manage multiple staff members, each with their own schedule and service offerings.",
      },
    ],
    pricing: [],
    cta: {
      primary: "Join beta waitlist",
      primaryHref: "/contact",
      secondary: "Explore enterprise deployment",
      secondaryHref: "/enterprise",
    },
  },
};

export async function generateStaticParams() {
  return Object.keys(productData).map((id) => ({ id }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = productData[id];
  if (!product) notFound();

  const websiteHref = getProductWebsiteHref(product.id, "product-detail");
  const primaryHref = websiteHref ?? product.cta.primaryHref;
  const primaryLabel = websiteHref ? "View product" : product.cta.primary;
  const pricingCtaLabel = websiteHref ? "View product" : "Get started";

  return (
    <div className="bg-[#080808] text-[#f2f2f2] min-h-screen">
      <Navigation />

      <section className="relative pt-36 pb-20 border-b border-white/[0.06]">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(6,182,212,0.06) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs text-[#555] hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={12} /> All products
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <span className="tag-pill">{product.tag}</span>
            <span
              className={`text-xs font-medium px-2 py-0.5 rounded-full ${product.status === "Live" ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" : "bg-amber-500/10 text-amber-400 border border-amber-500/20"}`}
            >
              {product.status}
            </span>
          </div>
          <h1
            className="text-h1 max-w-2xl mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {product.name}
          </h1>
          <p className="text-body-lg max-w-lg">{product.longDescription}</p>
          <div className="flex flex-wrap items-center gap-4 mt-10">
            <Link
              href={primaryHref}
              target={websiteHref ? "_self" : undefined}
              rel={websiteHref ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#06b6d4] text-[#080808] text-sm font-semibold hover:bg-[#22d3ee] transition-colors"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {primaryLabel} <ArrowRight size={16} />
            </Link>
            <Link
              href={product.cta.secondaryHref}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/[0.12] text-[#888] text-sm font-medium hover:text-white hover:border-white/25 transition-colors"
            >
              {product.cta.secondary}
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#444] mb-10">
          Features
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {product.features.map((feature) => (
            <div key={feature.title} className="card-base p-6">
              <h3
                className="text-[15px] font-semibold text-white mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {feature.title}
              </h3>
              <p className="text-sm text-[#666] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {product.pricing.length > 0 && (
        <section className="border-t border-white/[0.06] bg-[#0d0d0d]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#444] mb-4">
              Pricing
            </p>
            <h2 className="text-h2 mb-12">Simple, transparent plans.</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {product.pricing.map((tier) => (
                <div
                  key={tier.label}
                  className={`relative flex flex-col rounded-xl p-7 border transition-all ${tier.highlighted ? "bg-[#111] border-[#06b6d4]/40 shadow-[0_0_40px_rgba(6,182,212,0.1)]" : "bg-[#111] border-white/[0.08]"}`}
                >
                  {tier.highlighted && (
                    <div className="absolute -top-3 left-6">
                      <span className="px-3 py-1 text-xs font-semibold bg-[#06b6d4] text-[#080808] rounded-full">
                        Most popular
                      </span>
                    </div>
                  )}
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#555] mb-4">
                    {tier.label}
                  </p>
                  <div className="mb-3">
                    <span
                      className="text-3xl font-bold text-white"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {tier.price}
                    </span>
                    {tier.period && (
                      <span className="text-sm text-[#555] ml-1">
                        {tier.period}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-[#666] mb-6">{tier.description}</p>
                  <ul className="flex flex-col gap-2.5 flex-1">
                    {tier.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <Check
                          size={14}
                          className="text-[#06b6d4] mt-0.5 flex-shrink-0"
                        />
                        <span className="text-sm text-[#888]">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={primaryHref}
                    target={websiteHref ? "_self" : undefined}
                    rel={websiteHref ? "noopener noreferrer" : undefined}
                    className={`mt-8 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-colors ${tier.highlighted ? "bg-[#06b6d4] text-[#080808] hover:bg-[#22d3ee]" : "border border-white/[0.1] text-[#888] hover:text-white hover:border-white/25"}`}
                  >
                    {pricingCtaLabel}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
