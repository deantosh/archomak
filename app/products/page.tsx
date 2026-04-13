"use client";

import { useState } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import ProductCard from "@/components/product-card";
import { Filter } from "lucide-react";

const PRODUCTS = [
  {
    id: 1,
    title: "LuDa Lens",
    description:
      "Capture and transform handwritten or printed documents instantly with AI-powered OCR.",
    longDescription:
      "LuDa Lens lets you snap any handwritten or printed document and transform it into clean, structured digital data in seconds. From notes and invoices to receipts, forms, and contracts, the app intelligently reads and processes every detail using advanced AI-powered OCR.Simply capture a page, and LuDa Lens automatically extracts text, detects key fields, and organizes everything into ready-to-use formats like Excel, PDF, or structured text. You can even define custom fields—such as dates, names, totals, line items, or signatures—and LuDa Lens will accurately locate and extract them for you. Whether you're digitizing paperwork, streamlining business workflows, or converting messy documents into actionable data, LuDa Lens delivers fast, precise, and automated document processing that brings clarity to every page.",
    category: "Data Capture",
    tags: ["Web", "AI", "Automation"],
    image: "/ludalens.png",
    features: [
      "AI-powered document automation",
      "Smart OCR processing for handwritten and printed text",
      "Custom field extraction",
      "Export to Excel, PDF, and structured formats",
    ],
    pricing: "Starting at $5/month",
  },
  {
    id: 7,
    title: "Kunanyesha",
    description:
      "Automated weekly county weather reporting with geospatial analysis and distribution workflows for Kenya's 47 counties.",
    longDescription:
      "Kunanyesha helps weather operations teams generate comprehensive weekly county reports faster by combining GRIB processing, real-time observations, geospatial visualization, and automated distribution in one workflow. Built for Kenyan reporting operations, it supports all 47 counties with county-level and ward-level analysis, on-demand reporting, monitoring, archives, and operational configuration from a centralized interface.",
    category: "Climate Tech",
    tags: ["Web", "Weather", "Geospatial", "Automation"],
    image: "/kunanyesha.png",
    features: [
      "Automated weekly and on-demand report generation",
      "County-level and ward-level geospatial views",
      "Monitoring, logs, and pipeline visibility",
      "Archive access with operational configuration tools",
    ],
    pricing: "Starting at KES 1,294/month",
  },
  {
    id: 8,
    title: "Book & Pay",
    description:
      "Booking and payment software for Ghanaian service businesses, combining online scheduling with instant mobile money and card payments.",
    longDescription:
      "Book & Pay Ghana gives service businesses a professional online presence where customers can discover availability, book appointments, and pay instantly through mobile money or card. The platform is designed to reduce back-and-forth scheduling while giving operators one simple dashboard to manage bookings, payments, and customer flow from a single place.",
    category: "Commerce",
    tags: ["Web", "Bookings", "Payments", "Mobile Money"],
    image: "/bookandpay.png",
    features: [
      "Shareable booking page for customers",
      "Instant mobile money and card payments",
      "Central dashboard for bookings and payments",
      "Built for service businesses in Ghana",
    ],
    pricing: "Private beta",
  },
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(PRODUCTS.map((p) => p.category))];
  const filteredProducts =
    selectedCategory === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <main className="overflow-hidden">
      <Navigation />

      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-4 text-balance">
              Our Product Suite
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the complete range of Archomak solutions designed to
              power your business.
            </p>
          </motion.div>

          {/* Filter Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap gap-3 justify-center mb-16"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted hover:bg-muted text-foreground border border-border"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
