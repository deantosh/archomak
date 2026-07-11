"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { CloudRain, ShoppingBag, ArrowRight } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { fadeUp, scaleIn, stagger, viewportOnce } from "@/lib/motion";
import { getProductDetailsHref, getProductWebsiteHref } from "@/lib/products";
import { stories } from "@/lib/stories";

const latestStories = stories.slice(0, 3);

const products = [
  {
    id: "7",
    tag: "Climate Tech",
    tagClass: "tag-pill",
    name: "Kunanyesha",
    description:
      "Real-time county-level weather data and automated reporting for all 47 counties in Kenya.",
    price: "From KES 999/mo",
    icon: CloudRain,
    iconBg: "#e8f0fe",
    iconColor: "#1a73e8",
    illustration: "/photos/kunanyesha.jpg",
    illustrationAlt:
      "A farmer inspecting crops in the field, the setting Kunanyesha serves",
    detailsHref: getProductDetailsHref("7"),
    websiteHref: getProductWebsiteHref("7", "home-card"),
  },
  {
    id: "8",
    tag: "Commerce",
    tagClass: "tag-pill",
    name: "Book & Pay",
    description:
      "Unified bookings, mobile money, and card payment platform for service businesses in Ghana.",
    price: "Commission-based",
    icon: ShoppingBag,
    iconBg: "#e8f0fe",
    iconColor: "#1a73e8",
    illustration: "/photos/bookandpay.jpg",
    illustrationAlt:
      "A service-business owner attending to a customer who is on their phone",
    detailsHref: getProductDetailsHref("8"),
    websiteHref: getProductWebsiteHref("8", "home-card"),
  },
];

const principles = [
  {
    label: "Solve real problems",
    body: "We build for the operational realities of modern businesses: unreliable infrastructure, fragmented payments, and low connectivity.",
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
  return (
    <div className="bg-white text-[#202124] min-h-screen overflow-x-hidden">
      <Navigation />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text: left */}
          <div className="text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.05 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight mb-6 leading-[1.15]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Our mission is to build practical products that{" "}
              <span className="text-[#1a73e8]">solve real problems</span> for
              businesses everywhere.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
              className="text-lg sm:text-xl text-[#5f6368] max-w-xl mx-auto lg:mx-0 mb-9 leading-relaxed"
            >
              We design and ship digital products for businesses. Built for
              resilience. Designed for scale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
              className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4"
            >
              <Link
                href="/products"
                className="btn-pill btn-primary px-8 py-3.5 text-sm"
              >
                Explore Products
              </Link>
              <Link
                href="/contact"
                className="btn-pill btn-secondary px-8 py-3.5 text-sm"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>

          {/* Image: right */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
            className="rounded-3xl overflow-hidden"
          >
            <Image
              src="/photos/hero-3d.jpg"
              alt="A 3D illustration of business growth: a rising results chart surrounded by product, launch, and partnership icons"
              width={1200}
              height={1040}
              priority
              className="w-full h-[300px] sm:h-[420px] lg:h-[520px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* ── PRODUCTS ──────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-14"
        >
          <motion.h2 variants={fadeUp} className="text-h2 mb-4">
            Focused products. One clear mission.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-body-lg max-w-xl mx-auto">
            Each product solves a specific problem. We use AI where it makes the
            work better.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
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
                <div className="card-base group flex flex-col h-full overflow-hidden">
                  <Image
                    src={product.illustration}
                    alt={product.illustrationAlt}
                    width={800}
                    height={520}
                    className="w-full h-44 object-cover"
                  />
                  <div className="flex flex-col flex-1 p-8">
                    <div className="flex items-start justify-between mb-6">
                      <span className={product.tagClass}>{product.tag}</span>
                      <div
                        className="w-11 h-11 rounded-full flex items-center justify-center"
                        style={{
                          backgroundColor: product.iconBg,
                          color: product.iconColor,
                        }}
                      >
                        <Icon size={18} />
                      </div>
                    </div>
                    <h3
                      className="text-xl font-medium text-[#202124] mb-3"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {product.name}
                    </h3>
                    <p className="text-sm text-[#5f6368] leading-relaxed flex-1">
                      {product.description}
                    </p>
                    <div className="mt-6 pt-5 border-t border-[#e8eaed] flex items-center justify-between">
                      <span className="text-xs text-[#80868b]">
                        {product.price}
                      </span>
                      <div className="flex items-center gap-4">
                        <Link
                          href={product.detailsHref}
                          className="text-sm text-[#5f6368] hover:text-[#202124] transition-colors"
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
                          className="text-sm font-medium text-[#1a73e8] flex items-center gap-1.5 group-hover:gap-2.5 transition-all"
                        >
                          {product.websiteHref ? "View product" : "Get started"}{" "}
                          <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* ── PHILOSOPHY ──────────────────────────────────────────────────── */}
      <section className="bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              className="lg:sticky lg:top-32"
              initial={{ opacity: 0, x: -48 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-sm font-medium text-[#1a73e8] mb-6">
                Philosophy
              </p>
              <blockquote
                className="text-2xl md:text-3xl font-medium leading-snug text-[#202124] mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                “We build for outcomes first.{" "}
                <span className="text-[#1a73e8]">
                  Technology follows the problem.
                </span>
                ”
              </blockquote>
              <p className="text-sm text-[#5f6368]">
                Lucky Archibong, Founder, Archomak
              </p>
              <div className="mt-10 rounded-2xl bg-white border border-[#e8eaed] p-6">
                <Image
                  src="/illustrations/philosophy.svg"
                  alt="Illustration of a person presenting rising business results"
                  width={960}
                  height={960}
                  className="w-full h-64 object-contain"
                />
              </div>
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
                  className="bg-white rounded-2xl p-6 border border-[#e8eaed]"
                >
                  <h4
                    className="text-base font-medium text-[#202124] mb-2"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {p.label}
                  </h4>
                  <p className="text-sm text-[#5f6368] leading-relaxed">
                    {p.body}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── LATEST STORIES ──────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="flex items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-sm font-medium text-[#1a73e8] mb-3">Stories</p>
            <h2 className="text-h2 max-w-lg">Notes from the work.</h2>
          </div>
          <Link
            href="/stories"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-[#1a73e8] hover:gap-2.5 transition-all flex-shrink-0"
          >
            All stories <ArrowRight size={15} />
          </Link>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {latestStories.map((story) => (
            <motion.div key={story.slug} variants={fadeUp}>
              <Link
                href={`/stories/${story.slug}`}
                className="card-base group flex flex-col h-full overflow-hidden"
              >
                <div className="overflow-hidden">
                  <Image
                    src={story.cover}
                    alt={story.coverAlt}
                    width={1600}
                    height={1067}
                    className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <div className="flex items-center gap-3 mb-3 text-xs text-[#5f6368]">
                    <span className="tag-pill">{story.category}</span>
                    <span>{story.readingTime}</span>
                  </div>
                  <h3
                    className="text-lg font-medium text-[#202124] mb-2 leading-snug"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {story.title}
                  </h3>
                  <p className="text-sm text-[#5f6368] leading-relaxed flex-1">
                    {story.excerpt}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <Link
          href="/stories"
          className="sm:hidden mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-[#1a73e8]"
        >
          All stories <ArrowRight size={15} />
        </Link>
      </section>

      {/* ── FINAL CTA ──────────────────────────────────────────────────── */}
      <section className="px-6 lg:px-8 py-24">
        <div className="max-w-7xl mx-auto bg-[#e8f0fe] rounded-3xl py-24 px-6 flex flex-col items-center text-center">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-sm font-medium text-[#1a73e8] mb-5"
          >
            Let&apos;s work together
          </motion.p>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-h1 max-w-2xl mb-10"
          >
            Ready to solve a{" "}
            <span className="text-[#1a73e8]">real problem?</span>
          </motion.h2>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col items-center gap-4"
          >
            <Link
              href="/contact"
              className="btn-pill btn-primary px-8 py-4 text-base"
            >
              Tell us what you&apos;re working on
              <ArrowRight size={18} />
            </Link>
            <p className="text-sm text-[#5f6368]">
              We respond within one business day.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
