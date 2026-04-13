'use client'

import { useState } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { motion } from 'framer-motion'
import { Zap, Users, TrendingUp, Heart, MapPin, Briefcase } from 'lucide-react'
import Link from 'next/link'

export default function CareersPage() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null)

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Growth & Learning',
      description: 'Continuous learning opportunities, mentorship, and career development programs.',
    },
    {
      icon: Heart,
      title: 'Well-being',
      description: 'Comprehensive health insurance, wellness programs, and flexible work arrangements.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Inclusive, collaborative culture where your voice matters and ideas are valued.',
    },
    {
      icon: Zap,
      title: 'Impact',
      description: 'Work on products that transform lives and make a real difference in the world.',
    },
  ]

  const roles = [
    {
      id: 1,
      title: 'Senior Full-Stack Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'We\'re seeking an experienced full-stack engineer to lead our product development efforts.',
      responsibilities: [
        'Design and implement scalable backend systems',
        'Develop responsive frontend interfaces',
        'Lead technical discussions and mentor junior engineers',
        'Contribute to architectural decisions',
      ],
      requirements: [
        '5+ years of full-stack development experience',
        'Expertise in React, Node.js, and databases',
        'Strong system design knowledge',
        'Experience with cloud platforms (AWS/GCP)',
      ],
    },
    {
      id: 2,
      title: 'Product Designer',
      department: 'Design',
      location: 'Austin, TX',
      type: 'Full-time',
      description: 'Join our design team to create beautiful, intuitive products used by millions.',
      responsibilities: [
        'Design user experiences for web and mobile products',
        'Conduct user research and usability testing',
        'Collaborate with engineering and product teams',
        'Maintain design systems and brand guidelines',
      ],
      requirements: [
        '4+ years of UX/UI design experience',
        'Proficiency in Figma and design tools',
        'Strong portfolio demonstrating design thinking',
        'Experience with design systems',
      ],
    },
    {
      id: 3,
      title: 'Product Manager',
      department: 'Product',
      location: 'Remote',
      type: 'Full-time',
      description: 'Drive product strategy and vision for our platform.',
      responsibilities: [
        'Define product roadmap and prioritize features',
        'Conduct market research and competitive analysis',
        'Collaborate with engineering and design teams',
        'Analyze metrics and drive data-informed decisions',
      ],
      requirements: [
        '3+ years of product management experience',
        'Strong analytical and communication skills',
        'Experience in B2B or enterprise software',
        'Track record of launching successful products',
      ],
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Seattle, WA',
      type: 'Full-time',
      description: 'Build and maintain infrastructure that powers our platform at scale.',
      responsibilities: [
        'Design and implement CI/CD pipelines',
        'Manage cloud infrastructure and deployments',
        'Implement monitoring and alerting systems',
        'Optimize system performance and reliability',
      ],
      requirements: [
        '4+ years of DevOps or SRE experience',
        'Expertise in Kubernetes and containerization',
        'Experience with AWS or GCP',
        'Strong scripting and automation skills',
      ],
    },
    {
      id: 5,
      title: 'Sales Engineer',
      department: 'Sales',
      location: 'New York, NY',
      type: 'Full-time',
      description: 'Bridge the gap between technical and sales teams to drive enterprise deals.',
      responsibilities: [
        'Conduct technical demonstrations and proof-of-concepts',
        'Support sales team with technical expertise',
        'Build relationships with enterprise clients',
        'Contribute to product feedback and improvement',
      ],
      requirements: [
        '3+ years of sales engineering or technical support',
        'Strong communication and presentation skills',
        'Understanding of enterprise software requirements',
        'Ability to learn new technologies quickly',
      ],
    },
    {
      id: 6,
      title: 'Customer Success Manager',
      department: 'Support',
      location: 'Remote',
      type: 'Full-time',
      description: 'Ensure our customers achieve their goals and realize value from our products.',
      responsibilities: [
        'Manage customer relationships and success metrics',
        'Identify and drive upsell opportunities',
        'Conduct training and onboarding sessions',
        'Gather customer feedback for product improvement',
      ],
      requirements: [
        '2+ years of customer success or account management',
        'Excellent interpersonal and communication skills',
        'Problem-solving mindset and empathy for customers',
        'Experience with SaaS products',
      ],
    },
  ]

  return (
    <main className="overflow-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
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
            <span className="text-sm text-primary font-medium">Join Our Team</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight text-balance"
          >
            Build the <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">Future</span> With Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-balance leading-relaxed"
          >
            We're looking for talented people who are passionate about innovation, quality, and making an impact. Join a team of engineers, designers, and strategists building products that matter.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <a href="#open-positions" className="inline-flex px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-medium gap-2 group">
              View Open Positions
              <span className="group-hover:translate-y-1 transition-transform">↓</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4 bg-linear-to-b from-background via-primary/5 to-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Why Join Archomak?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We invest in our people and create an environment where great work happens.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-linear-to-br from-primary to-accent flex items-center justify-center mb-4">
                    <Icon size={24} className="text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Open Positions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {/* {roles.length} exciting opportunities waiting for passionate team members. */}
              No roles available at the moment. Please check back later.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-24 px-4 bg-linear-to-b from-background via-accent/5 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
              Our Culture
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              At Archomak, we believe diverse perspectives lead to better solutions. We foster an environment where innovation thrives, ideas are valued, and everyone has the opportunity to grow. Our team members are the heart of our company, and we're committed to supporting their professional development and well-being.
            </p>
            <div className="inline-block p-6 rounded-xl bg-card border border-border">
              <p className="text-foreground font-medium mb-2">We offer competitive compensation, equity packages, and comprehensive benefits.</p>
              <p className="text-sm text-muted-foreground">Equal opportunity employer committed to building a diverse and inclusive team.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
