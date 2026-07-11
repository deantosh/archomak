"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Twitter, Linkedin } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ContactForm from "@/components/contact-form";
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
    value: "Global · Building for the world",
    href: null,
  },
];

const socials = [
  { icon: Twitter, label: "X", href: "https://x.com/archomak" },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/company/archomak",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-white text-[#202124] min-h-screen">
      <Navigation />

      <section className="pt-36 pb-8 border-b border-[#e8eaed]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.p
            className="text-sm font-medium text-[#1a73e8] mb-5"
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
            <span className="text-[#1a73e8]">conversation.</span>
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
            <p className="text-sm text-[#5f6368] leading-relaxed mb-10 max-w-sm">
              Share the problem you&apos;re solving and your goals. We&apos;ll
              help you choose the right product path, rollout approach, or next
              implementation step.
            </p>
            <div className="flex flex-col gap-6 mb-10">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-full bg-[#e8f0fe] flex items-center justify-center text-[#1a73e8] flex-shrink-0">
                      <Icon size={16} />
                    </div>
                    <div>
                      <p className="text-xs text-[#80868b] uppercase tracking-wider mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm text-[#202124] hover:text-[#1a73e8] transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-[#5f6368]">{item.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            <div>
              <p className="text-xs text-[#80868b] uppercase tracking-wider mb-4">
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
                    className="flex items-center justify-center w-9 h-9 rounded-full border border-[#dadce0] text-[#5f6368] hover:bg-[#e8f0fe] hover:text-[#1a73e8] transition-all"
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-8">
              <p className="text-xs text-[#80868b] leading-relaxed">
                We respond within one business day.
              </p>
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
