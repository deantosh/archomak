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
  { name: "Enterprise", href: "/enterprise" },
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
        setScrolled(window.scrollY > 40);
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
        className={`fixed w-full top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled
            ? "bg-[rgba(8,8,8,0.82)] backdrop-blur-[24px] border-b border-white/[0.07]"
            : "bg-transparent border-b border-transparent"
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
                  src="/logo/logo.png"
                  alt="Archomak"
                  width={120}
                  height={120}
                  className="rounded-md object-contain group-hover:opacity-80 transition-opacity"
                />
                {/* <span
                  className="text-[15px] font-semibold tracking-tight text-white group-hover:text-white/80 transition-colors"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Archomak
                </span> */}
              </Link>
            </motion.div>

            {/* Center links desktop */}
            <motion.div
              className="hidden md:flex items-center gap-8"
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
                  className={`nav-link text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-white active"
                      : "text-[#888] hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </motion.div>

            {/* CTA desktop */}
            <motion.div
              className="hidden md:flex items-center"
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Link
                href="/enterprise#contact"
                className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg bg-[#06b6d4] text-[#080808] hover:bg-[#22d3ee] transition-colors"
              >
                Book Enterprise Consultation
              </Link>
            </motion.div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen((v) => !v)}
              className="md:hidden flex items-center justify-center w-9 h-9 text-[#888] hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
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
            className="fixed inset-0 z-40 bg-[#080808]/96 backdrop-blur-xl flex flex-col"
          >
            <div className="flex-1 flex flex-col items-center justify-center px-8">
              <motion.nav
                variants={stagger}
                initial="hidden"
                animate="visible"
                className="w-full max-w-xs flex flex-col gap-1"
              >
                {navItems.map((item) => (
                  <motion.div key={item.href} variants={fadeIn}>
                    <Link
                      href={item.href}
                      className={`block py-4 text-3xl font-bold tracking-tight border-b border-white/[0.07] transition-colors ${
                        isActive(item.href)
                          ? "text-[#06b6d4]"
                          : "text-white hover:text-[#06b6d4]"
                      }`}
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div variants={fadeIn} className="pt-6">
                  <Link
                    href="/enterprise#contact"
                    className="w-full flex items-center justify-center px-6 py-3.5 text-base font-semibold rounded-xl bg-[#06b6d4] text-[#080808] hover:bg-[#22d3ee] transition-colors"
                  >
                    Book Enterprise Consultation
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
