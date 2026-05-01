"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Database, CloudRain, ShoppingBag } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { fadeUp, scaleIn, stagger, viewportOnce } from "@/lib/motion";
import { getProductDetailsHref, getProductWebsiteHref } from "@/lib/products";

const products = [
  {
    id: "1",
    tag: "Data Capture",
    status: "Limited",
    name: "LuDa Lens",
    tagline: "Mobile document intelligence for field teams",
    description:
      "Capture documents from your phone and turn invoices, IDs, forms, and receipts into structured data in seconds.",
    features: [
      "OCR + ML extraction",
      "Batch processing",
      "API-first",
      "Structured JSON output",
      "Validation rules",
      "Audit trail",
    ],
    price: "From $7/mo",
    icon: Database,
    detailsHref: getProductDetailsHref("1"),
    websiteHref: getProductWebsiteHref("1", "products-card"),
  },
  {
    id: "7",
    tag: "Climate Tech",
    status: "Live",
    name: "Kunanyesha",
    tagline: "Weather intelligence for African operations",
    description:
      "Real-time county-level weather data for all 47 counties in Kenya with automated weekly reports and geospatial analysis.",
    features: [
      "47-county coverage",
      "Automated reports",
      "Geospatial maps",
      "Custom alerts",
      "Historical data",
      "API access",
    ],
    price: "From KES 1,294/mo",
    icon: CloudRain,
    detailsHref: getProductDetailsHref("7"),
    websiteHref: getProductWebsiteHref("7", "products-card"),
  },
  {
    id: "8",
    tag: "Commerce",
    status: "Beta",
    name: "Book & Pay",
    tagline: "Bookings and payments for African service businesses",
    description:
      "One platform for appointment scheduling, mobile money, and card payments — built for service businesses in Ghana.",
    features: [
      "MTN Mobile Money",
      "Card payments",
      "Scheduling",
      "SMS reminders",
      "Analytics",
      "Multi-staff",
    ],
    price: "From GHS 90/mo",
    icon: ShoppingBag,
    detailsHref: getProductDetailsHref("8"),
    websiteHref: getProductWebsiteHref("8", "products-card"),
  },
];

export default function ProductsPage() {
  return (
    <div className="bg-[#080808] text-[#f2f2f2] min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="relative pt-36 pb-16 border-b border-white/[0.06]">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(6,182,212,0.07) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div variants={stagger} initial="hidden" animate="visible">
            <motion.p
              variants={fadeUp}
              className="text-xs font-semibold uppercase tracking-[0.15em] text-[#444] mb-5"
            >
              Products
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="text-h1 max-w-2xl mb-5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Three products.
              <br />
              <span className="gradient-text">Built for real operations.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-body-lg max-w-md">
              Each product solves a specific problem for businesses in Africa —
              with AI where it makes the work better.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Products list */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <motion.div
          className="flex flex-col gap-5"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {products.map((product) => {
            const Icon = product.icon;
            const primaryHref = product.websiteHref ?? product.detailsHref;
            return (
              <motion.div key={product.id} variants={scaleIn}>
                <div className="card-base group flex flex-col lg:flex-row gap-6 p-7 lg:p-8">
                  {/* Left metadata */}
                  <div className="flex-shrink-0 lg:w-52 flex flex-row lg:flex-col gap-4 lg:gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#06b6d4]/10 flex items-center justify-center text-[#06b6d4] group-hover:bg-[#06b6d4]/20 transition-colors">
                      <Icon size={18} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="tag-pill text-[10px]">
                          {product.tag}
                        </span>
                        <span
                          className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
                            product.status === "Live"
                              ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                              : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                          }`}
                        >
                          {product.status}
                        </span>
                      </div>
                      <h3
                        className="text-lg font-semibold text-white"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {product.name}
                      </h3>
                      <p className="text-xs text-[#555] mt-0.5">
                        {product.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Middle */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-[#666] leading-relaxed mb-5">
                      {product.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((f) => (
                        <span
                          key={f}
                          className="text-xs px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-[#555]"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right */}
                  <div className="flex-shrink-0 flex flex-col items-start lg:items-end justify-between gap-4 lg:min-w-[140px]">
                    <p className="text-sm font-semibold text-white">
                      {product.price}
                    </p>
                    <div className="flex items-center gap-4">
                      <Link
                        href={product.detailsHref}
                        className="text-sm text-[#666] hover:text-white transition-colors"
                      >
                        Details
                      </Link>
                      <Link
                        href={primaryHref}
                        target={product.websiteHref ? "_self" : undefined}
                        rel={
                          product.websiteHref
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="text-sm font-medium text-[#06b6d4] flex items-center gap-1.5 group-hover:gap-2.5 transition-all"
                      >
                        {product.websiteHref ? "View product" : "Get started"}{" "}
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Enterprise CTA */}
      <section className="border-t border-white/[0.06] bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3
              className="text-xl font-bold text-white mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Planning a multi-team rollout?
            </h3>
            <p className="text-sm text-[#666]">
              Work with our enterprise team on integration, security, and
              deployment plans built for scale.
            </p>
          </div>
          <Link
            href="/enterprise#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#06b6d4] text-[#080808] text-sm font-semibold hover:bg-[#22d3ee] transition-colors flex-shrink-0"
          >
            Book enterprise consultation <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
