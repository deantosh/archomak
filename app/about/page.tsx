"use client";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { Users, Lightbulb, Target, Heart, Shield } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We embrace emerging technologies and creative thinking to solve real-world challenges.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "We achieve more by working together — across teams, clients, and communities.",
    },
    {
      icon: Target,
      title: "Excellence",
      description:
        "We set the highest standards in software, design, and client experience.",
    },
    {
      icon: Heart,
      title: "Impact",
      description:
        "We create products that deliver tangible benefits and improve workflows for our users.",
    },
    {
      icon: Shield,
      title: "Integrity",
      description:
        "We operate transparently, responsibly, and ethically in everything we build and deliver.",
    },
  ];

  const team = [
    {
      name: "Deantosh Daiddoh",
      role: "Co-Founder",
      bio: "Experienced engineer with a broad technical and operational background, driving strategic digital initiatives that create measurable impact.",
      image: "/team/deantosh.png",
      imagePosition: "object-center",
    },
    {
      name: "Lucky Archibong",
      role: "Co-Founder",
      bio: "Creating applications that simplify work and elevate everyday life.",
      image: "/team/luckySmooth.png",
      imagePosition: "object-top",
    },
  ];

  const milestones = [
    {
      year: "2025",
      event: "Archomak founded with vision to create AI-driven digital tools",
    },
    {
      year: "2025",
      event: "Launched LuDa Lens, our AI-powered form data extraction tool",
    },
    {
      year: "2026+",
      event: "Expanding our product suite to solve diverse workflow challenges",
    },
  ];

  return (
    <main className="overflow-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-8"
          >
            <span className="w-2 h-2 bg-accent rounded-full mt-1" />
            <span className="text-sm text-accent">Our Story</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight text-balance"
          >
            Building AI-Powered Tools That{" "}
            <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              Transform Workflows
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-balance leading-relaxed"
          >
            At Archomak, we design and develop intelligent solutions like{" "}
            <strong>LuDa Lens</strong> to extract data, automate processes, and
            unlock actionable insights. Our focus is creating versatile products
            that make work smarter and more efficient.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-4 bg-linear-to-b from-background via-primary/5 to-background">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-2xl bg-card border border-border"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To build intelligent digital tools that solve real-world
                challenges, empower businesses to work smarter, and unlock new
                possibilities through practical and accessible innovation.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-2xl bg-card border border-border"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Our Vision
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To shape a future where advanced technology enhances everyday
                life, enabling people and organizations across the world to
                achieve more with simplicity, clarity, and confidence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and shape our company
              culture.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="flex flex-wrap justify-center gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all w-full sm:w-80"
                >
                  <div className="w-12 h-12 rounded-lg bg-linear-to-br from-primary to-accent flex items-center justify-center mb-4">
                    <Icon size={24} className="text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-4 bg-linear-to-b from-background via-accent/5 to-background">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experienced leaders driving innovation and excellence at Archomak.
            </p>
          </motion.div>

          {/* Team Cards */}
          <div className="flex flex-wrap justify-center gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center w-full sm:w-80"
              >
                <div className="relative rounded-2xl overflow-hidden mb-4 bg-muted group aspect-4/5">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className={`w-full h-full object-cover ${member.imagePosition} group-hover:scale-105 transition-transform duration-300`}
                  />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  {member.name}
                </h3>
                <p className="text-sm text-accent font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our growth and evolution.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-primary to-accent -translate-x-1/2" />

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? "md:[&>:nth-child(1)]:order-2" : ""
                  }`}
                >
                  {/* Content */}
                  <div className={index % 2 === 1 ? "md:text-right" : ""}>
                    <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all">
                      <p className="text-2xl font-bold text-primary mb-2">
                        {milestone.year}
                      </p>
                      <p className="text-foreground font-medium">
                        {milestone.event}
                      </p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="hidden md:flex justify-center">
                    <div className="w-4 h-4 rounded-full bg-accent ring-4 ring-background" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
