'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      quote: 'Archomak transformed our entire operation. Their team understood our needs and delivered beyond expectations.',
      author: 'Sarah Chen',
      role: 'CEO, TechCorp',
      stars: 5,
    },
    {
      quote: 'The level of innovation and attention to detail is remarkable. We saw immediate ROI within weeks.',
      author: 'Marcus Rodriguez',
      role: 'CTO, Enterprise Solutions Inc',
      stars: 5,
    },
    {
      quote: 'Reliable, scalable, and a true partner. Archomak is now integral to our business success.',
      author: 'Emily Watson',
      role: 'Founder, StartupHub',
      stars: 5,
    },
  ]

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background via-accent/5 to-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Trusted by Industry Leaders</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our clients have to say about partnering with Archomak.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.stars }).map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.quote}"</p>

              {/* Author */}
              <div>
                <p className="font-bold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
