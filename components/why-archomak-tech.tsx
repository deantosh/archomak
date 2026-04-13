'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

export default function WhyArchomakTech() {
  const reasons = [
    {
      title: 'Innovation-Driven',
      description:
        'We leverage advanced technologies and modern engineering practices to deliver forward-thinking digital solutions.',
    },
    {
      title: 'Enterprise Reliability',
      description:
        'Our products are built with robust architecture, rigorous testing, and performance optimization to ensure continuous availability.',
    },
    {
      title: 'User-Focused Design',
      description:
        'Every solution is crafted with a deep understanding of user needs, creating intuitive, seamless, and efficient experiences.',
    },
    {
      title: 'Scalable Architecture',
      description:
        'From early-stage startups to global enterprises, our systems are designed to scale with evolving business demands.',
    },
  ]

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Why Choose Archomak?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Delivering dependable, scalable, and future-ready technology solutions.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-accent/20">
                  <CheckCircle2 size={20} className="text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
