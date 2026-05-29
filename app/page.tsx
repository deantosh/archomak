"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { CloudRain, ShoppingBag, ArrowRight } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { fadeUp, fadeIn, scaleIn, stagger, viewportOnce } from "@/lib/motion";
import { getProductDetailsHref, getProductWebsiteHref } from "@/lib/products";

const products = [
  {
    id: "7",
    tag: "Climate Tech",
    name: "Kunanyesha",
    description:
      "Real-time county-level weather data and automated reporting for all 47 counties in Kenya.",
    price: "From KES 999/mo",
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
    price: "Commission-based",
    icon: ShoppingBag,
    detailsHref: getProductDetailsHref("8"),
    websiteHref: getProductWebsiteHref("8", "home-card"),
  },
];

const principles = [
  {
    label: "Solve real problems",
    body: "We build for the operational realities of modern businesses — unreliable infrastructure, fragmented payments, low connectivity.",
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

export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.35, 1], [0, -20, -50]);

  return (
    <div className="bg-[#080808] text-[#f2f2f2] min-h-screen overflow-x-hidden">
      <Navigation />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative flex flex-col justify-center min-h-[90vh] lg:min-h-screen pt-40 pb-24">
        <motion.div
          className="absolute inset-0"
          style={{
            y: heroY,
            backgroundImage: "url('/hero-bg.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.45,
          }}
        />
        <div className="absolute inset-0 bg-[#080808]/80" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 100% 80% at 50% 20%, rgba(6,182,212,0.12) 0%, transparent 65%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-12"
          ></motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight mb-8 leading-[1.1] max-w-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The product
            <br />
            <span className="font-medium">you have been</span>
            <br />
            waiting for.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="text-lg text-[#999] max-w-2xl mb-12 leading-relaxed font-light"
          >
            We design and ship digital products that solve real problems for
            businesses. Built for resilience. Designed for scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center"
          >
            <Link
              href="/products"
              className="px-8 py-4 rounded-md bg-[#06b6d4] text-[#080808] font-medium text-sm hover:bg-[#22d3ee] transition-colors duration-200"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Explore Products
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-md border border-white/[0.15] text-white font-medium text-sm hover:bg-white/[0.04] transition-colors duration-200"
            >
              Get in Touch
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            className="mt-20 h-px w-32 bg-gradient-to-r from-transparent via-[#06b6d4]/30 to-transparent"
          />
        </div>
      </section>

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
            Focused products.
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
