"use client";

import { useParams } from "next/navigation";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const PRODUCTS = [
  {
    id: 1,
    title: "LuDa Lens",
    description:
      "Capture and transform handwritten or printed documents instantly with AI-powered OCR.",
    longDescription:
      "LuDa Lens lets you snap any handwritten or printed document and transform it into clean, structured digital data in seconds. From notes and invoices to receipts, forms, and contracts, the app intelligently reads and processes every detail using advanced AI-powered OCR.Simply capture a page, and LuDa Lens automatically extracts text, detects key fields, and organizes everything into ready-to-use formats like Excel, PDF, or structured text.",
    category: "Data Capture",
    tags: ["Web", "AI", "Automation"],
    // image: "/ludalens.png",
    features: [
      "AI-powered automation",
      "Multi-platform integration",
      "Real-time analytics",
      "Custom workflows",
    ],
    pricing: "Starting at $5/month",
    fullFeatures: [
      "AI-powered OCR optimized for mobile camera capture",
      "Instant text extraction from handwritten and printed documents",
      "Smart field detection with customizable fields you define",
      "Automatic formatting into Excel, PDF, and clean text outputs",
      "Table, layout, and pattern recognition built for mobile scans",
      "On-device preprocessing for sharper, cleaner document captures",
      "Batch scanning and quick multi-page processing",
      "Offline mode for capturing and preparing documents without internet",
      "Secure cloud sync for storing and retrieving processed documents",
      "Developer API for integrating mobile document capture into other apps",
    ],
  },
  {
    id: 7,
    title: "Kunanyesha",
    description:
      "Automated weekly county weather reporting with geospatial analysis and distribution workflows for Kenya's 47 counties.",
    longDescription:
      "Kunanyesha streamlines weekly county weather reporting by combining GRIB processing, integrated observations, geospatial visualization, automation, and distribution into one operational platform. Teams can generate comprehensive reports with a single click, manage county and ward-level data views, monitor pipelines in real time, configure schedules and delivery settings, and review archived outputs from a centralized dashboard built for Kenyan weather reporting operations.",
    category: "Climate Tech",
    tags: ["Web", "Weather", "Geospatial", "Automation"],
    // image: "/kunanyesha.png",
    features: [
      "Automated weekly and on-demand report generation",
      "County-level and ward-level geospatial views",
      "Monitoring, logs, and pipeline visibility",
      "Archive access with operational configuration tools",
    ],
    pricing: "Starting at KES 1,294/month",
    fullFeatures: [
      "Single-click generation of comprehensive weekly county weather reports",
      "GRIB data processing with integrated real-time observations",
      "Interactive county-level and ward-level geospatial visualizations",
      "System health monitoring, pipeline status tracking, and anomaly alerts",
      "Manual report generation with flexible scheduling controls",
      "Historical archive access with filtering for previous reports",
      "Configuration tools for GRIB storage, scheduling, and email distribution",
      "Data management for shapefiles, observations, and validation workflows",
      "Detailed operational logs and diagnostics for troubleshooting",
      "Coverage designed for all 47 Kenyan counties",
    ],
  },
  {
    id: 8,
    title: "Book & Pay",
    description:
      "Booking and payment software for Ghanaian service businesses, combining online scheduling with instant mobile money and card payments.",
    longDescription:
      "Book & Pay Ghana gives service businesses a professional online presence where customers can book appointments and pay instantly through mobile money or card. The product reduces manual coordination by letting businesses share a single booking link while handling scheduling and payments from one simple dashboard tailored to local service workflows.",
    category: "Commerce",
    tags: ["Web", "Bookings", "Payments", "Mobile Money"],
    // image: "/bookandpay.png",
    features: [
      "Shareable booking page for customers",
      "Instant mobile money and card payments",
      "Central dashboard for bookings and payments",
      "Built for service businesses in Ghana",
    ],
    pricing: "Private beta",
    fullFeatures: [
      "Public booking page businesses can share with customers",
      "Appointment booking flow designed for service-based businesses",
      "Instant checkout with mobile money support",
      "Card payment support for broader payment coverage",
      "Unified dashboard for managing appointments and payments",
      "Cleaner digital presence for solo operators and growing teams",
      "Reduced back-and-forth scheduling through self-service booking",
      "Early-access rollout through a private beta onboarding process",
    ],
  },
];

export default function ProductDetailPage() {
  const params = useParams();
  const productId = parseInt(params.id as string);
  const product = PRODUCTS.find((p) => p.id === productId);

  if (!product) {
    return (
      <main>
        <Navigation />
        <div className="pt-32 pb-16 px-4 text-center">
          <h1 className="text-3xl font-bold text-foreground">
            Product not found
          </h1>
          <Link
            href="/products"
            className="mt-4 inline-block text-primary hover:text-accent"
          >
            Back to products
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="overflow-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-linear-to-b from-primary/10 to-background">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent mb-4">
              {product.category}
            </span>
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 text-balance">
              {product.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              {product.longDescription}
            </p>
          </motion.div>

          {/* Product Image */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl overflow-hidden bg-muted border border-border p-6"
          >
            <div className="relative w-full bg-background rounded-xl flex items-center justify-center">
              <div className="relative w-full max-w-3xl">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  width={1600} // Ensures high-resolution
                  height={1200}
                  quality={100} // Prevent compression blur
                  className="w-full h-auto object-contain mx-auto"
                  priority
                />
              </div>
            </div>
          </motion.div> */}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Key Features
            </h2>
            <div className="w-12 h-1 bg-linear-to-r from-primary to-accent rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.fullFeatures.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex gap-4"
              >
                <div className="shrink-0">
                  <CheckCircle2 size={24} className="text-accent mt-0.5" />
                </div>
                <div>
                  <p className="text-lg text-foreground font-medium">
                    {feature}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & CTA */}
      <section className="py-24 px-4 bg-linear-to-b from-background via-primary/5 to-background">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-2xl font-bold text-foreground mb-6">
              {product.pricing}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-medium flex items-center justify-center gap-2 group"
              >
                Get Started
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 rounded-lg border border-border bg-background hover:bg-muted text-foreground transition-colors font-medium"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
