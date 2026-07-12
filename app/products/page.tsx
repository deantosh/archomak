"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { fadeUp, stagger } from "@/lib/motion";
import { getProductWebsiteHref } from "@/lib/products";

type Product = {
  id: string;
  category: string;
  status: "Live" | "Coming soon";
  name: string;
  tagline: string;
  cover: string;
  coverAlt: string;
  href: string;
  external: boolean;
};

const products: Product[] = [
  {
    id: "7",
    category: "Climate Tech",
    status: "Live",
    name: "Kunanyesha",
    tagline:
      "Plan around the weather instead of reacting to it. County-level forecasts and automated weekly reports for all 47 counties in Kenya.",
    cover: "/photos/kunanyesha.png",
    coverAlt:
      "Illustration of people and businesses staying ahead of the weather with Kunanyesha",
    href: getProductWebsiteHref("7", "products-card") ?? "/contact",
    external: Boolean(getProductWebsiteHref("7", "products-card")),
  },
  {
    id: "8",
    category: "Commerce",
    status: "Coming soon",
    name: "Book & Pay",
    tagline:
      "Get booked and get paid in one place. Scheduling, mobile money, and card payments for service businesses in Ghana, with reminders that cut no-shows.",
    cover: "/photos/sikakoraa.png",
    coverAlt:
      "Illustration of a service business taking bookings and payments with Book & Pay",
    href: "/contact",
    external: false,
  },
];

function ProductCard({ product }: { product: Product }) {
  const actionLabel =
    product.status === "Coming soon"
      ? "Join the waitlist"
      : product.external
        ? "Visit site"
        : "Learn more";

  return (
    <Link
      href={product.href}
      target={product.external ? "_blank" : undefined}
      rel={product.external ? "noopener noreferrer" : undefined}
      className="card-base group flex flex-col h-full overflow-hidden"
    >
      <div className="relative overflow-hidden">
        <Image
          src={product.cover}
          alt={product.coverAlt}
          width={1200}
          height={800}
          className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span
          className={`absolute top-3 left-3 text-xs font-medium px-2.5 py-0.5 rounded-full ${
            product.status === "Live"
              ? "bg-[#e6f4ea] text-[#188038]"
              : "bg-[#fef7e0] text-[#b06000]"
          }`}
        >
          {product.status}
        </span>
      </div>
      <div className="flex flex-col flex-1 p-6">
        <p className="text-xs font-medium text-[#1a73e8] mb-2">
          {product.category}
        </p>
        <h3
          className="text-lg font-medium text-[#202124] mb-2"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {product.name}
        </h3>
        <p className="text-sm text-[#5f6368] leading-relaxed flex-1">
          {product.tagline}
        </p>
        <span className="mt-5 text-sm font-medium text-[#1a73e8] inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
          {actionLabel}
          {product.external ? (
            <ArrowUpRight size={15} />
          ) : (
            <ArrowRight size={15} />
          )}
        </span>
      </div>
    </Link>
  );
}

export default function ProductsPage() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(products.map((p) => p.category)))],
    [],
  );
  const [active, setActive] = useState("All");

  const visible =
    active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <div className="bg-white text-[#202124] min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="pt-36 pb-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div variants={stagger} initial="hidden" animate="visible">
            <motion.p
              variants={fadeUp}
              className="text-sm font-medium text-[#1a73e8] mb-5"
            >
              Products
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="text-h1 max-w-3xl mx-auto mb-5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Products for operations teams.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-body-lg max-w-2xl mx-auto"
            >
              Pick one to see how it works.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filter + grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-16">
        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {categories.map((cat) => {
            const isActive = cat === active;
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                aria-pressed={isActive}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-[#1a73e8] text-white"
                    : "bg-[#f1f3f4] text-[#5f6368] hover:bg-[#e8eaed]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <motion.div
          key={active}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {visible.map((product) => (
            <motion.div key={product.id} variants={fadeUp}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </section>


      {/* Closing CTA */}
      <section className="px-6 lg:px-8 py-14 pb-24">
        <div className="max-w-7xl mx-auto bg-[#e8f0fe] rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1 text-center lg:text-left">
            <h3
              className="text-3xl lg:text-4xl font-medium text-[#202124] mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Not sure which one fits?
            </h3>
            <p className="text-lg text-[#5f6368] max-w-2xl mx-auto lg:mx-0">
              Tell us about your operations and we will recommend the right
              product and a rollout plan that fits your team.
            </p>
          </div>

          <div className="flex flex-col items-center lg:items-end gap-3">
            <Link
              href="/contact"
              className="btn-pill btn-primary px-6 py-3 text-sm"
            >
              Talk to us <ArrowRight size={16} />
            </Link>
            <p className="text-xs text-[#80868b]">
              We respond within one business day.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
