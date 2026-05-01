"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Database, CloudRain, ShoppingBag } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { fadeUp, fadeIn, scaleIn, stagger, viewportOnce } from "@/lib/motion";
import { getProductDetailsHref, getProductWebsiteHref } from "@/lib/products";

const products = [
  {
    id: "1",
    tag: "Data Capture",
    name: "LuDa Lens",
    description:
      "Mobile document intelligence for fast capture, extraction, and structured data on the go.",
    price: "From $7/mo",
    icon: Database,
    detailsHref: getProductDetailsHref("1"),
    websiteHref: getProductWebsiteHref("1", "home-card"),
  },
  {
    id: "7",
    tag: "Climate Tech",
    name: "Kunanyesha",
    description:
      "Real-time county-level weather data and automated reporting for all 47 counties in Kenya.",
    price: "From KES 1,294/mo",
    icon: CloudRain,
    detailsHref: getProductDetailsHref("7"),
    websiteHref: getProductWebsiteHref("7", "home-card"),
  },
  {
    id: "8",
    tag: "Commerce",
    name: "Book & Pay",
    description:
      "Unified bookings, mobile money, and card payment platform for service businesses in Ghana.",
    price: "From GHS 90/mo",
    icon: ShoppingBag,
    detailsHref: getProductDetailsHref("8"),
    websiteHref: getProductWebsiteHref("8", "home-card"),
  },
];

const principles = [
  {
    label: "Solve real problems",
    body: "We build for the operational realities of African businesses — unreliable infrastructure, fragmented payments, low connectivity.",
  },
  {
    label: "AI when it works",
    body: "We apply AI and automation where they improve speed, accuracy, and cost efficiency for teams on the ground.",
  },
  {
    label: "Shipped, not pitched",
    body: "Our products are live, used, and evolving based on real feedback from real users.",
  },
];

const ticker = [
  "3 Products Live",
  "2 Continents",
  "AI-Powered",
  "Enterprise-Ready",
  "Africa-First",
  "Built to Scale",
];

export default function HomePage() {
  return (
    <div className="bg-[#080808] text-[#f2f2f2] min-h-screen overflow-x-hidden">
      <Navigation />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative flex flex-col justify-center min-h-screen pt-24 pb-16">
        <div className="grid-overlay absolute inset-0 pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(6,182,212,0.12) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.div variants={fadeUp} className="mb-8">
              <span className="tag-pill">Product Company · Africa</span>
            </motion.div>

            <motion.h1
              variants={stagger}
              className="text-display mb-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {[
                "We",
                "turn",
                "hard",
                "problems",
                "into",
                "elegant",
                "products.",
              ].map((word) => (
                <motion.span
                  key={word}
                  variants={fadeUp}
                  className="inline-block mr-[0.3em]"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p variants={fadeUp} className="text-body-lg max-w-lg mb-10">
              Archomak ships practical digital products for African businesses —
              powered by AI where it matters, built to scale where it counts.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#06b6d4] text-[#080808] font-semibold text-sm hover:bg-[#22d3ee] transition-colors"
                style={{ fontFamily: "var(--font-display)" }}
              >
                View Products <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/[0.12] text-[#888] text-sm font-medium hover:text-white hover:border-white/25 transition-colors"
              >
                Contact Product Team
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
            className="mt-20 h-px w-full max-w-2xl bg-gradient-to-r from-[#06b6d4]/30 via-white/10 to-transparent"
            style={{ transformOrigin: "left" }}
          />
        </div>
      </section>

      {/* ── TICKER ──────────────────────────────────────────────────────── */}
      <div className="border-y border-white/[0.06] py-4 overflow-hidden">
        <div
          className="flex gap-12 whitespace-nowrap"
          style={{ animation: "marquee-loop 28s linear infinite" }}
        >
          {[...ticker, ...ticker].map((item, i) => (
            <span
              key={i}
              className="text-xs font-semibold uppercase tracking-[0.15em] text-[#333] flex-shrink-0"
            >
              {item}
              <span className="ml-12 text-[#222]">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── PRODUCTS ──────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-28">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-semibold uppercase tracking-[0.15em] text-[#444] mb-4"
          >
            Products
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-h2 mb-14 max-w-lg">
            Three focused products.
            <br />
            One clear mission.
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
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
                <div className="card-base group flex flex-col p-7 h-full">
                  <div className="flex items-start justify-between mb-6">
                    <span className="tag-pill">{product.tag}</span>
                    <div className="w-9 h-9 rounded-lg bg-[#06b6d4]/10 flex items-center justify-center text-[#06b6d4] group-hover:bg-[#06b6d4]/20 transition-colors">
                      <Icon size={16} />
                    </div>
                  </div>
                  <h3
                    className="text-lg font-semibold text-white mb-3"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {product.name}
                  </h3>
                  <p className="text-sm text-[#666] leading-relaxed flex-1">
                    {product.description}
                  </p>
                  <div className="mt-6 pt-5 border-t border-white/[0.06] flex items-center justify-between">
                    <span className="text-xs text-[#555]">{product.price}</span>
                    <div className="flex items-center gap-4">
                      <Link
                        href={product.detailsHref}
                        className="text-xs text-[#666] hover:text-white transition-colors"
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
                        className="text-xs font-medium text-[#06b6d4] flex items-center gap-1.5 group-hover:gap-2.5 transition-all"
                      >
                        {product.websiteHref ? "View product" : "Get started"}{" "}
                        <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* ── PHILOSOPHY ──────────────────────────────────────────────────── */}
      <section className="border-t border-white/[0.06] bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              className="lg:sticky lg:top-32"
              initial={{ opacity: 0, x: -48 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#444] mb-8">
                Philosophy
              </p>
              <blockquote
                className="text-2xl md:text-3xl font-semibold leading-tight text-white mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                "We build for outcomes first.{" "}
                <span className="gradient-text">
                  Technology follows the problem.
                </span>
                "
              </blockquote>
              <p className="text-sm text-[#555]">
                — Lucky Archibong, Founder · Archomak
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col gap-6"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              {principles.map((p, i) => (
                <motion.div
                  key={p.label}
                  variants={fadeUp}
                  transition={{ delay: i * 0.1 }}
                  className="card-base p-6"
                >
                  <h4
                    className="text-[15px] font-semibold text-white mb-2"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {p.label}
                  </h4>
                  <p className="text-sm text-[#666] leading-relaxed">
                    {p.body}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── ENTERPRISE TEASER ────────────────────────────────────────── */}
      <section className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <motion.div
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6 }}
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#444] mb-3">
                Enterprise
              </p>
              <h2 className="text-h2 max-w-sm">
                Built for organisations that operate at scale.
              </h2>
            </div>
            <Link
              href="/enterprise"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/[0.12] text-[#888] text-sm font-medium hover:text-white hover:border-white/25 transition-colors flex-shrink-0"
            >
              Explore Enterprise Deployment <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── FINAL CTA ──────────────────────────────────────────────────── */}
      <section className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32 flex flex-col items-center text-center relative">
          <div
            className="absolute pointer-events-none"
            style={{
              width: 400,
              height: 400,
              background:
                "radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)",
              transform: "translateY(40px)",
            }}
          />
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-xs font-semibold uppercase tracking-[0.15em] text-[#444] mb-6"
          >
            Let's work together
          </motion.p>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-h1 max-w-2xl mb-10"
          >
            Ready to solve a{" "}
            <span className="gradient-text">real problem?</span>
          </motion.h2>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <Link
              href="/enterprise#contact"
              className="relative inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#06b6d4] text-[#080808] font-semibold text-base hover:bg-[#22d3ee] transition-colors glow-cyan"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Book Enterprise Consultation
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
