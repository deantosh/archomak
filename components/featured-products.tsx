"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedProducts() {
  const products = [
    {
      title: "Kunanyesha",
      description:
        "Automated weekly county weather reporting with geospatial data, real-time monitoring, and report distribution for all 47 Kenyan counties.",
      tags: ["Weather", "Geospatial", "Reporting", "Automation"],
      color: "from-accent/20 to-primary/20",
      image: "/kunanyesha.png",
      href: "/products/7",
    },
  ];

  return (
    <section className="py-24 px-4 bg-linear-to-b from-background via-primary/5 to-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Featured Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our suite of innovative solutions designed to empower businesses and
            consumers alike.
          </p>
        </motion.div>

        {/* Product Cards (Always Centers) */}
        <div className="flex flex-wrap justify-center gap-6">
          {products.map((product, index) => {
            return (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group w-full max-w-md"
              >
                <div
                  className={`relative p-8 rounded-2xl bg-linear-to-br ${product.color} border border-border hover:border-accent/50 transition-all duration-300 h-full`}
                >
                  <div className="flex flex-col h-full">
                    {/* Product Image */}
                    <div className="mb-6 rounded-xl border border-border/60 bg-background/80 p-4">
                      <Image
                        src={product.image}
                        alt={product.title}
                        width={240}
                        height={120}
                        className="h-16 w-auto object-contain"
                      />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {product.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 grow">
                      {product.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {product.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 rounded-full bg-background/50 text-foreground border border-border/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link
                      href={product.href}
                      className="text-sm font-medium text-primary hover:text-accent transition-colors flex items-center gap-2 group/link"
                    >
                      Learn More
                      <span className="group-hover/link:translate-x-1 transition-transform">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
