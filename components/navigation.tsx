"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { stagger, fadeIn } from "@/lib/motion";

const navItems = [
  { name: "Products", href: "/products" },
  { name: "Stories", href: "/stories" },
  { name: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  useEffect(() => {
    let rafId = 0;
    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 12);
        rafId = 0;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed w-full top-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled
            ? "shadow-[0_1px_2px_rgba(60,64,67,0.3),0_1px_3px_1px_rgba(60,64,67,0.15)]"
            : "border-b border-[#e8eaed]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href="/" className="flex items-center gap-2.5 group">
                <Image
                  src="/logo/wordmark.png"
                  alt="Archomak"
                  width={413}
                  height={51}
                  priority
                  className="h-7 w-auto object-contain group-hover:opacity-80 transition-opacity"
                />
              </Link>
            </motion.div>

            {/* Links + CTA desktop, grouped right */}
            <motion.div
              className="hidden md:flex items-center gap-7"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link text-sm font-medium ${
                    isActive(item.href) ? "active" : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="btn-pill btn-primary px-6 py-2.5 text-sm"
              >
                Talk to us
              </Link>
            </motion.div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen((v) => !v)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full text-[#5f6368] hover:bg-[#f1f3f4] transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-white flex flex-col pt-16"
          >
            <div className="flex-1 flex flex-col px-6 pt-8">
              <motion.nav
                variants={stagger}
                initial="hidden"
                animate="visible"
                className="w-full flex flex-col gap-1"
              >
                {navItems.map((item) => (
                  <motion.div key={item.href} variants={fadeIn}>
                    <Link
                      href={item.href}
                      className={`block py-4 px-4 text-2xl font-medium tracking-tight rounded-2xl transition-colors ${
                        isActive(item.href)
                          ? "text-[#1a73e8] bg-[#e8f0fe]"
                          : "text-[#202124] hover:bg-[#f1f3f4]"
                      }`}
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div variants={fadeIn} className="pt-6 px-4">
                  <Link
                    href="/contact"
                    className="btn-pill btn-primary w-full px-6 py-3.5 text-base"
                  >
                    Talk to us
                  </Link>
                </motion.div>
              </motion.nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
