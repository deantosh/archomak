"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { stories, formatStoryDate } from "@/lib/stories";

const [featured, ...rest] = stories;

export default function StoriesPage() {
  return (
    <div className="bg-white text-[#202124] min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="pt-36 pb-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div variants={stagger} initial="hidden" animate="visible">
            <motion.p
              variants={fadeUp}
              className="text-sm font-medium text-[#1a73e8] mb-5"
            >
              Stories
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="text-h1 max-w-2xl mb-5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Notes from the work.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-body-lg max-w-xl">
              How we think about the products we build, the problems we choose
              to solve, and the decisions behind them.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Featured */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <Link
            href={`/stories/${featured.slug}`}
            className="card-base group grid grid-cols-1 lg:grid-cols-2 overflow-hidden"
          >
            <div className="overflow-hidden">
              <Image
                src={featured.cover}
                alt={featured.coverAlt}
                width={1600}
                height={1067}
                priority
                className="w-full h-64 lg:h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4 text-xs text-[#5f6368]">
                <span className="tag-pill">{featured.category}</span>
                <span>{formatStoryDate(featured.date)}</span>
                <span aria-hidden>·</span>
                <span>{featured.readingTime}</span>
              </div>
              <h2
                className="text-2xl lg:text-3xl font-medium text-[#202124] mb-4 leading-snug"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {featured.title}
              </h2>
              <p className="text-base text-[#5f6368] leading-relaxed mb-6">
                {featured.excerpt}
              </p>
              <span className="text-sm font-medium text-[#1a73e8] inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                Read story <ArrowRight size={15} />
              </span>
            </div>
          </Link>
        </motion.div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-10 pb-24">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {rest.map((story) => (
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
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-[1.03]"
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
                  <span className="mt-5 text-sm font-medium text-[#1a73e8] inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                    Read story <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
