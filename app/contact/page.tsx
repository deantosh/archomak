"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, MapPin, Twitter, Linkedin, Github } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ContactForm from "@/app/enterprise/contact-form";
import { slideLeft, slideRight, viewportOnce } from "@/lib/motion";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@archomak.com",
    href: "mailto:hello@archomak.com",
  },
  {
    icon: MapPin,
    label: "Headquarters",
    value: "Africa · Building for the world",
    href: null,
  },
];

const socials = [
  { icon: Twitter, label: "Twitter", href: "https://twitter.com/archomak" },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/company/archomak",
  },
  { icon: Github, label: "GitHub", href: "https://github.com/archomak" },
];

export default function ContactPage() {
  return (
    <div className="bg-[#080808] text-[#f2f2f2] min-h-screen">
      <Navigation />

      <section className="relative pt-36 pb-8 border-b border-white/[0.06]">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 40% at 50% 0%, rgba(6,182,212,0.06) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.p
            className="text-xs font-semibold uppercase tracking-[0.15em] text-[#444] mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Contact
          </motion.p>
          <motion.h1
            className="text-h1 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Let&apos;s start a{" "}
            <span className="gradient-text">conversation.</span>
          </motion.h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <p className="text-sm text-[#666] leading-relaxed mb-10 max-w-sm">
              Whether you have a product question, want to explore an enterprise
              deployment, or just want to say hello — we&apos;re happy to hear
              from you.
            </p>
            <div className="flex flex-col gap-6 mb-10">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-[#06b6d4]/10 flex items-center justify-center text-[#06b6d4] flex-shrink-0">
                      <Icon size={16} />
                    </div>
                    <div>
                      <p className="text-xs text-[#444] uppercase tracking-wider mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm text-white hover:text-[#06b6d4] transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-[#888]">{item.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            <div>
              <p className="text-xs text-[#444] uppercase tracking-wider mb-4">
                Follow us
              </p>
              <div className="flex items-center gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex items-center justify-center w-9 h-9 rounded-lg border border-white/[0.08] text-[#555] hover:text-white hover:border-white/20 transition-all"
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-8">
              <p className="text-xs text-[#555] leading-relaxed">
                You&apos;ll hear back directly from Lucky or Deantosh.
              </p>
            </div>
            <div className="mt-12 pt-8 border-t border-white/[0.06]">
              <p className="text-xs text-[#444] mb-3">
                Looking for enterprise options?
              </p>
              <Link
                href="/enterprise"
                className="text-sm text-[#06b6d4] hover:text-[#22d3ee] transition-colors"
              >
                Visit our Enterprise page →
              </Link>
            </div>
          </motion.div>

          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <div className="card-base p-8">
              <ContactForm subjectPlaceholder="What would you like to discuss?" />
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
