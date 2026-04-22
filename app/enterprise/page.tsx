"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Truck, Landmark, HeartPulse, ShoppingCart, GitMerge, Settings, BarChart3, Lock } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { fadeUp, slideLeft, slideRight, scaleIn, stagger, viewportOnce } from "@/lib/motion";
import ContactForm from "./contact-form";

const industries = [
  { icon: Truck, name: "Logistics & Supply Chain", description: "Automate document processing, digitise manifests, and integrate weather data into route planning." },
  { icon: Landmark, name: "Finance & Banking", description: "Accelerate KYC, automate form extraction, and reduce manual processing of financial documents." },
  { icon: HeartPulse, name: "Healthcare", description: "Digitise patient records, automate intake forms, and extract structured data from lab reports." },
  { icon: ShoppingCart, name: "Retail & Commerce", description: "Streamline supplier invoices, automate inventory documents, and integrate payments at scale." },
];

const capabilities = [
  { icon: GitMerge, title: "Custom integrations", description: "We connect our products to your existing ERP, CRM, or workflow systems via API or dedicated connectors." },
  { icon: Settings, title: "Tailored deployments", description: "On-premise, hybrid, or fully managed cloud deployments with configuration specific to your environment." },
  { icon: BarChart3, title: "Analytics & reporting", description: "Custom dashboards and automated reports built around your KPIs and operational metrics." },
  { icon: Lock, title: "Enterprise security", description: "Role-based access, audit logging, encryption at rest and in transit, and compliance documentation." },
];

const steps = [
  { step: "01", title: "Discovery call", description: "We map your operational pain points and identify where our products create value in your workflows." },
  { step: "02", title: "Solution design", description: "We propose a tailored integration plan — products, architecture, timeline, and pricing." },
  { step: "03", title: "Pilot deployment", description: "We deploy a scoped pilot so your team can validate results before a full rollout." },
  { step: "04", title: "Full rollout & support", description: "We handle onboarding, training, and provide dedicated support through your go-live and beyond." },
];

export default function EnterprisePage() {
  return (
    <div className="bg-[#080808] text-[#f2f2f2] min-h-screen">
      <Navigation />

      <section className="relative pt-36 pb-24 border-b border-white/[0.06]">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(6,182,212,0.07) 0%, transparent 70%)" }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div variants={stagger} initial="hidden" animate="visible">
            <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-[0.15em] text-[#444] mb-5">Enterprise</motion.p>
            <motion.h1 variants={fadeUp} className="text-h1 max-w-3xl mb-5">
              Enterprise-grade software for{" "}
              <span className="gradient-text">real-world operations.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-body-lg max-w-xl mb-10">
              We work directly with enterprise teams to deploy, integrate, and customise our products for your specific operational environment — at any scale.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
              <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#06b6d4] text-[#080808] text-sm font-semibold hover:bg-[#22d3ee] transition-colors" style={{ fontFamily: "var(--font-display)" }}>
                Book a consultation <ArrowRight size={16} />
              </a>
              <Link href="/products" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/[0.12] text-[#888] text-sm font-medium hover:text-white hover:border-white/25 transition-colors">
                View products
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewportOnce}>
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-[0.15em] text-[#444] mb-4">Industries we serve</motion.p>
          <motion.h2 variants={fadeUp} className="text-h2 mb-14 max-w-xl">Built for teams that operate at scale.</motion.h2>
        </motion.div>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-5" variants={stagger} initial="hidden" whileInView="visible" viewport={viewportOnce}>
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <motion.div key={industry.name} variants={scaleIn} className="card-base p-7">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#06b6d4]/10 flex items-center justify-center text-[#06b6d4] flex-shrink-0"><Icon size={18} /></div>
                  <div>
                    <h3 className="text-[15px] font-semibold text-white mb-2" style={{ fontFamily: "var(--font-display)" }}>{industry.name}</h3>
                    <p className="text-sm text-[#666] leading-relaxed">{industry.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      <section className="border-t border-white/[0.06] bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-[0.15em] text-[#444] mb-4">How we work</motion.p>
            <motion.h2 variants={fadeUp} className="text-h2 mb-14 max-w-xl">From first call to full deployment.</motion.h2>
          </motion.div>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5" variants={stagger} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            {steps.map((step, i) => (
              <motion.div key={step.step} variants={fadeUp} transition={{ delay: i * 0.08 }}>
                <div className="card-base p-6 h-full">
                  <p className="text-4xl font-bold text-white/[0.06] mb-4 leading-none" style={{ fontFamily: "var(--font-display)" }}>{step.step}</p>
                  <h3 className="text-[15px] font-semibold text-white mb-2" style={{ fontFamily: "var(--font-display)" }}>{step.title}</h3>
                  <p className="text-sm text-[#666] leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div variants={slideLeft} initial="hidden" whileInView="visible" viewport={viewportOnce}>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#444] mb-5">What we deliver</p>
              <h2 className="text-h2 mb-5">More than software. <span className="gradient-text">A delivery partner.</span></h2>
              <p className="text-sm text-[#666] leading-relaxed max-w-md">We don&apos;t just hand you a product and leave. We work alongside your team to ensure the deployment succeeds, the integration is solid, and the outcomes are real.</p>
            </motion.div>
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-5" variants={stagger} initial="hidden" whileInView="visible" viewport={viewportOnce}>
              {capabilities.map((cap) => {
                const Icon = cap.icon;
                return (
                  <motion.div key={cap.title} variants={slideRight} className="card-base p-5">
                    <div className="w-8 h-8 rounded-md bg-[#06b6d4]/10 flex items-center justify-center text-[#06b6d4] mb-3"><Icon size={15} /></div>
                    <h4 className="text-[14px] font-semibold text-white mb-1.5" style={{ fontFamily: "var(--font-display)" }}>{cap.title}</h4>
                    <p className="text-xs text-[#666] leading-relaxed">{cap.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-white/[0.06] bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div variants={slideLeft} initial="hidden" whileInView="visible" viewport={viewportOnce}>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#444] mb-5">Book a consultation</p>
              <h2 className="text-h2 mb-5">Let&apos;s find the right fit <span className="gradient-text">for your team.</span></h2>
              <p className="text-sm text-[#666] leading-relaxed max-w-sm">Tell us about your operations and we&apos;ll propose how Archomak products can integrate into your workflows. No obligation.</p>
            </motion.div>
            <motion.div variants={slideRight} initial="hidden" whileInView="visible" viewport={viewportOnce}>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
