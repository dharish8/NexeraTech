"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight, MapPin } from "lucide-react";
import { services } from "@/lib/services-data";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", mega: true },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* ─── Announcement / Delivery Center Bar ──────────────────────── */}
      <div
        className="fixed top-0 left-0 right-0 z-[60] overflow-hidden"
        style={{ backgroundColor: "#0A1628", borderBottom: "1px solid rgba(232,93,4,0.18)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-8">
          {/* Left: locations */}
          <div className="hidden md:flex items-center gap-4 text-[11px] text-white/40 font-medium">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-[#E85D04]" />
              <span className="text-white/60">Delivery Centers:</span>
            </span>
            {[
              { flag: "🇮🇳", city: "Hyderabad" },
              { flag: "🇺🇸", city: "US" },
              { flag: "🇬🇧", city: "UK" },
            ].map(({ flag, city }) => (
              <span key={city} className="flex items-center gap-1">
                <span>{flag}</span>
                <span>{city}</span>
              </span>
            ))}
          </div>
          {/* Center: scrolling marquee on mobile, static on desktop */}
          <div className="flex md:hidden text-[11px] text-white/40 overflow-hidden w-full">
            <span className="animate-marquee whitespace-nowrap">
              🇮🇳 Hyderabad &nbsp;·&nbsp; 🇺🇸 US Markets &nbsp;·&nbsp; 🇬🇧 UK Delivery &nbsp;·&nbsp; 12 Service Lines &nbsp;·&nbsp; AI-Ready Stack
            </span>
          </div>
          {/* Right: quick trust badge */}
          <div className="hidden md:flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-flicker" />
            <span className="text-[11px] text-white/40 font-medium">Active Delivery Team</span>
          </div>
        </div>
      </div>

      {/* ─── Top accent bar ──────────────────────────────────────────── */}
      <div
        className="fixed top-8 left-0 right-0 z-[51] h-[2px] transition-opacity duration-500"
        style={{
          background: "linear-gradient(90deg, #E85D04, #FF802B, #E85D04)",
          backgroundSize: "200% auto",
          animation: "gradient-shift 4s linear infinite",
          opacity: scrolled ? 1 : 0,
        }}
      />

      <header
        className={`fixed top-8 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? "shadow-[0_4px_24px_rgba(0,0,0,0.18)] border-b border-white/[0.06]"
            : "bg-transparent"
        }`}
        style={
          scrolled
            ? {
                backgroundColor: "rgba(10,18,34,0.94)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
              }
            : undefined
        }
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">

            {/* Logo */}
            <Link href="/" className="flex items-center group flex-shrink-0">
              <img
                src="/company-logo/NexeraTech-Solutions_logo.webp"
                alt="NexeraTech Solutions"
                className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-0">
              {navLinks.map((link) => {
                if (link.mega) {
                  return (
                    <div
                      key={link.label}
                      className="relative"
                      onMouseEnter={() => setMegaOpen(true)}
                      onMouseLeave={() => setMegaOpen(false)}
                    >
                      <button
                        className={`relative flex items-center gap-1 px-3 py-2 rounded-lg text-[13px] font-semibold transition-colors duration-200 group ${
                          isActive(link.href)
                            ? "text-[#E85D04]"
                            : "text-white/70 hover:text-white"
                        }`}
                      >
                        {link.label}
                        <ChevronDown
                          className={`w-3 h-3 transition-transform duration-200 ${
                            megaOpen ? "rotate-180" : ""
                          }`}
                        />
                        {/* Active underline */}
                        {isActive(link.href) && (
                          <span className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-[#E85D04]" />
                        )}
                      </button>
                      <AnimatePresence>
                        {megaOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.98 }}
                            transition={{ duration: 0.18, ease: "easeOut" }}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[760px] rounded-2xl p-6 overflow-hidden"
                            style={{
                              background: "rgba(10,18,34,0.97)",
                              backdropFilter: "blur(24px)",
                              border: "1px solid rgba(232,93,4,0.20)",
                              boxShadow: "0 28px 64px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.06)",
                            }}
                          >
                            {/* Gradient border top */}
                            <div className="absolute inset-x-0 top-0 h-[1px]" style={{ background: "linear-gradient(90deg, transparent, rgba(232,93,4,0.6), transparent)" }} />
                            {/* Top glow inside dropdown */}
                            <div
                              aria-hidden
                              className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[350px] h-[60px] blur-[40px] opacity-25"
                              style={{ background: "#E85D04" }}
                            />
                            <div className="relative z-10">
                              <div className="flex gap-6 mb-5 pb-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                                <div>
                                  <p className="text-xs font-bold text-[#E85D04] uppercase tracking-[0.18em] mb-1">
                                    Our Services
                                  </p>
                                  <p className="text-[11px] text-white/40">
                                    12 service lines across 5 practice areas
                                  </p>
                                </div>
                                <Link
                                  href="/services"
                                  className="ml-auto flex items-center gap-1.5 text-sm text-[#E85D04] font-bold hover:gap-2.5 transition-all duration-200 self-center"
                                >
                                  View all <ArrowRight className="w-4 h-4" />
                                </Link>
                              </div>
                              <div className="grid grid-cols-3 gap-1.5">
                                {services.map((s) => (
                                  <Link
                                    key={s.slug}
                                    href={`/services/${s.slug}`}
                                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl group/item transition-all duration-150 hover:bg-white/[0.06]"
                                  >
                                    <div
                                      className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover/item:scale-110"
                                      style={{ backgroundColor: s.color + "22" }}
                                    >
                                      <div className="w-2 h-2 rounded-full" style={{ background: s.color }} />
                                    </div>
                                    <span className="text-[12px] font-medium text-white/60 group-hover/item:text-white transition-colors leading-tight">
                                      {s.shortTitle}
                                    </span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`relative px-3 py-2 rounded-lg text-[13px] font-semibold transition-colors duration-200 ${
                      isActive(link.href)
                        ? "text-[#E85D04]"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    {link.label}
                    {isActive(link.href) && (
                      <span className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-[#E85D04]" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="hidden lg:flex glow-btn text-[13px]"
                style={{ padding: "0.55rem 1.25rem", borderRadius: "9999px" }}
              >
                Get in Touch
              </Link>
              <button
                id="mobile-menu-toggle"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/08 transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.28, ease: "easeInOut" }}
            className="fixed inset-0 z-40 lg:hidden"
            style={{
              background: "rgba(10,18,34,0.98)",
              backdropFilter: "blur(24px)",
            }}
          >
            {/* Ambient glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute top-0 right-0 w-[300px] h-[300px] rounded-full blur-[100px] opacity-15"
              style={{ background: "#E85D04" }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute bottom-0 left-0 w-[250px] h-[250px] rounded-full blur-[100px] opacity-08"
              style={{ background: "#FF802B" }}
            />
            {/* Top orange stripe */}
            <div className="absolute inset-x-0 top-0 h-[2px]" style={{ background: "linear-gradient(90deg, #E85D04, #FF802B, #E85D04)" }} />

            <div className="flex flex-col h-full pt-20 pb-8 px-6 overflow-y-auto relative z-10">
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`px-4 py-3.5 rounded-xl text-base font-semibold transition-all duration-200 ${
                      isActive(link.href)
                        ? "bg-[#E85D04]/15 text-[#E85D04] border border-[#E85D04]/25 shadow-[inset_0_1px_0_rgba(232,93,4,0.15)]"
                        : "text-white/65 hover:bg-white/[0.06] hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto pt-8 space-y-4">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full glow-btn"
                >
                  Get in Touch <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="flex items-center gap-3 justify-center">
                  <a href="mailto:info@nexeratechsolutions.com" className="text-sm text-white/30 hover:text-[#E85D04] transition-colors">
                    info@nexeratechsolutions.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
