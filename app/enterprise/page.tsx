'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Zap, Shield, Lightbulb } from 'lucide-react'
import Link from 'next/link'

export default function EnterprisePage() {
  const solutions = [
    {
      icon: Zap,
      title: 'AI-Powered Data Extraction',
      description:
        'LuDa Lens automates the extraction of data from scanned or photographed forms, eliminating manual entry and reducing errors for enterprise teams.',
      benefits: [
        'High-accuracy OCR + AI parsing',
        'PDF/Excel export',
        'Integration with existing company databases',
      ],
    },
    {
      icon: Shield,
      title: 'Workflow Automation (Expanding Soon)',
      description:
        'We are building tools that simplify repetitive processes, enhance efficiency, and support smarter decision-making for modern businesses.',
      benefits: [
        'Custom workflow design',
        'End-to-end automation',
        'Seamless integration capabilities',
      ],
    },
    {
      icon: Lightbulb,
      title: 'Future Digital Solutions',
      description:
        'As we grow, Archomak aims to deliver a range of intelligent products — spanning agriculture, finance, retail, and more — all powered by applied AI.',
      benefits: [
        'Industry-focused innovation',
        'Early access to beta tools',
        'Designed for scalability',
      ],
    },
  ]

  const industries = [
    { name: 'Logistics', icon: '💼' },
    { name: 'Healthcare', icon: '🏥' },
    { name: 'Retail', icon: '🛍️' },
    { name: 'Finance', icon: '🏭' },
    { name: 'Energy', icon: '⚡' },
    { name: 'Government', icon: '🏛️' },
  ]

  const process = [
    {
      step: '01',
      title: 'Understanding Your Needs',
      description: 'We analyze your workflows, pain points, and data processes to uncover opportunities where automation or AI can deliver measurable value.',
    },
    {
      step: '02',
      title: 'Solution Design',
      description: 'We craft a tailored plan — optimizing LuDa Lens for your use case or outlining new tools that align with your operational goals.',
    },
    {
      step: '03',
      title: 'Deployment & Integration',
      description: 'We deploy the solution, integrate it into your existing systems, and ensure your team is fully supported during the transition.',
    },
    {
      step: '04',
      title: 'Continuous Support',
      description: 'We provide ongoing enhancements, maintenance, and optional feature expansions as your business evolves.',
    },
  ]

  return (
    <main className="overflow-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8"
          >
            <span className="w-2 h-2 bg-primary rounded-full mt-1" />
            <span className="text-sm text-primary font-medium">Enterprise Solutions</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight text-balance"
          >
            Engineering Scalable Tools for <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Modern Enterprises</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-balance leading-relaxed"
          >
            At Archomak, we’re developing a suite of intelligent tools that help organizations streamline processes, improve accuracy, and unlock new efficiencies—starting with real AI-powered products already in testing and rollout.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="#contact"
              className="inline-flex px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-medium gap-2 group"
            >
              Book a Consultation
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Our Enterprise Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive offerings to address your most complex business challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon
              return (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all"
                >
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
                    <Icon size={28} className="text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{solution.title}</h3>
                  <p className="text-muted-foreground mb-6">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 size={16} className="text-accent flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Industries We Serve</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Proven expertise across key sectors with deep industry knowledge.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="p-6 rounded-xl bg-card border border-border hover:border-accent/50 transition-all text-center group cursor-pointer"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{industry.icon}</div>
                <p className="font-medium text-foreground">{industry.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-background via-accent/5 to-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Our Engagement Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven methodology to deliver enterprise solutions on time and on budget.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent -translate-x-1/2" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {process.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`${index % 2 === 1 ? 'lg:translate-y-12' : ''}`}
                >
                  <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                        <span className="text-primary-foreground font-bold">{item.step}</span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              Let's discuss how Archomak can help you achieve your business objectives with innovative solutions tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-medium flex items-center justify-center gap-2 group"
              >
                Schedule Consultation
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 rounded-lg border border-border bg-background hover:bg-muted text-foreground transition-colors font-medium"
              >
                Download Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
