"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Globe,
  Code2,
  Brain,
  Shield,
  Banknote,
  Users,
  CheckCircle,
  Star,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Linkedin,
  Twitter,
  Facebook,
  Youtube,
  Zap,
  TrendingUp,
  Award,
  Instagram,
} from "lucide-react";
import { services } from "@/lib/services-data";
import { caseStudies } from "@/lib/case-studies-data";
import { testimonials } from "@/lib/testimonials-data";

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Code2,
  Brain,
  Shield,
  Banknote,
  Users,
};

function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
}: {
  value: number;
  suffix?: string;
  prefix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView || !ref.current) return;
    let start = 0;
    const duration = 1800;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      if (ref.current) {
        ref.current.textContent = prefix + Math.floor(ease * value) + suffix;
      }
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value, suffix, prefix]);

  return (
    <span ref={ref}>
      {prefix}0{suffix}
    </span>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const displayFont = { fontFamily: "var(--font-display, 'Plus Jakarta Sans', sans-serif)" };

export default function HomePage() {
  const featuredServices = services.slice(0, 6);
  const featuredCases = caseStudies.slice(0, 3);
  const [showAllTestimonials, setShowAllTestimonials] = useState(false);
  const visibleTestimonials = showAllTestimonials ? testimonials : testimonials.slice(0, 3);

  const heroImages = [
    "/landing-page/image1.webp",
    "/landing-page/image2.webp",
    "/landing-page/image3.webp",
  ];
  const [activeHeroImg, setActiveHeroImg] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActiveHeroImg((p) => (p + 1) % heroImages.length), 4500);
    return () => clearInterval(t);
  }, []);

  const ease: any = [0.22, 1, 0.36, 1];

  return (
    <div className="overflow-hidden bg-white text-white">

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ backgroundColor: "#0B1120" }}
      >
        {/* Animated background grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* RIGHT PANEL: Diagonal clipped image carousel */}
        <motion.div
          className="absolute top-0 right-0 bottom-0 hidden lg:block"
          style={{ width: "52%" }}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, ease, delay: 0.2 }}
        >
          {/* Image layer */}
          <div
            className="absolute inset-0"
            style={{ clipPath: "polygon(12% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
          >
            {heroImages.map((src, idx) => (
              <Image
                key={src}
                src={src}
                alt={`NexeraTech hero ${idx + 1}`}
                fill
                priority={idx === 0}
                className="object-cover object-center absolute inset-0 transition-opacity duration-1000"
                style={{ opacity: activeHeroImg === idx ? 0.82 : 0 }}
                sizes="52vw"
              />
            ))}
            {/* Left-to-right fade overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, rgba(11,17,32,0.95) 0%, rgba(11,17,32,0.42) 38%, rgba(11,17,32,0.08) 100%)",
              }}
            />
            {/* Bottom fade */}
            <div
              className="absolute bottom-0 left-0 right-0 h-36"
              style={{ background: "linear-gradient(to top, rgba(11,17,32,0.85), transparent)" }}
            />
          </div>

          {/* Floating stat chips */}
          <div
            className="absolute inset-0"
            style={{ clipPath: "polygon(12% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
          >
            {[
              { label: "Enterprise Clients", val: "40+", top: "20%", right: "10%" },
              { label: "Cloud Partners", val: "AWS / Azure / GCP", top: "50%", right: "6%" },
              { label: "Delivery Hub", val: "Hyderabad", top: "74%", right: "14%" },
            ].map((chip, i) => (
              <motion.div
                key={chip.label}
                className="absolute rounded-2xl px-5 py-3"
                style={{
                  top: chip.top,
                  right: chip.right,
                  background: "rgba(11,17,32,0.72)",
                  border: "1px solid rgba(232,93,4,0.38)",
                  backdropFilter: "blur(12px)",
                }}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease, delay: 1.1 + i * 0.18 }}
              >
                <div className="text-xl font-extrabold text-white leading-none">{chip.val}</div>
                <div
                  className="text-[10px] mt-1 font-semibold uppercase tracking-wider"
                  style={{ color: "rgba(232,93,4,0.85)" }}
                >
                  {chip.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Image indicator dots */}
          <div className="absolute bottom-8 right-8 flex items-center gap-2 z-20" style={{ clipPath: "polygon(12% 0%, 100% 0%, 100% 100%, 0% 100%)" }}>
            {heroImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveHeroImg(i)}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: activeHeroImg === i ? "24px" : "6px",
                  height: "6px",
                  background: activeHeroImg === i ? "#E85D04" : "rgba(255,255,255,0.3)",
                }}
                aria-label={`Hero image ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Glow orb */}
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-0 w-[600px] h-[500px] blur-[140px]"
          style={{ background: "rgba(232,93,4,0.09)" }}
        />

        {/* LEFT: Content */}
        <div className="relative z-10 mx-auto max-w-[1280px] w-full px-6 sm:px-8 lg:px-12 py-24 lg:py-0 min-h-screen flex items-center">
          <div className="max-w-[680px] pt-24 lg:pt-28">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease }}
              className="flex items-center gap-3 mb-7"
            >
              <span
                style={{
                  width: "32px",
                  height: "2px",
                  background: "#E85D04",
                  borderRadius: "2px",
                  display: "inline-block",
                  flexShrink: 0,
                }}
              />
              <span
                className="text-xs font-bold uppercase tracking-[0.24em]"
                style={{ color: "#E85D04" }}
              >
                B2B Technology Partner · Hyderabad
              </span>
            </motion.div>

            {/* ── MAIN HEADING ── the star of the show */}
            <h1
              className="font-black tracking-tight mb-6"
              style={{
                fontSize: "clamp(2.6rem, 5vw, 4.4rem)",
                lineHeight: 1.06,
                ...displayFont,
              }}
            >
              <motion.span
                initial={{ opacity: 0, y: 56 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease, delay: 0.18 }}
                style={{ display: "block", color: "#FFFFFF" }}
              >
                We Are a Technology
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 56 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease, delay: 0.36 }}
                style={{
                  display: "block",
                  background: "linear-gradient(135deg, #E85D04 0%, #FF9449 60%, #FFB577 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Solutions Partner
              </motion.span>
            </h1>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.85, ease, delay: 0.62 }}
              style={{
                height: "1.5px",
                background: "linear-gradient(90deg, #E85D04, rgba(232,93,4,0.15))",
                maxWidth: "480px",
                marginBottom: "1.6rem",
              }}
            />

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease, delay: 0.78 }}
              className="text-lg leading-[1.8] mb-8"
              style={{ color: "rgba(255,255,255,0.68)", maxWidth: "560px" }}
            >
              Next-generation IT services from Hyderabad — offshore engineering,
              AI/ML integration, Identity security (IAM), and payroll operations
              for US, UK, and India markets.
            </motion.p>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease, delay: 0.9 }}
              className="flex flex-wrap items-center gap-3 mb-10"
            >
              {[
                { emoji: "🏆", label: "Accredited Firm" },
                { emoji: "🌐", label: "3 Global Markets" },
                { emoji: "⚡", label: "AI-Ready Stack" },
              ].map(({ emoji, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold"
                  style={{
                    background: "rgba(232,93,4,0.10)",
                    border: "1px solid rgba(232,93,4,0.28)",
                    color: "rgba(255,255,255,0.75)",
                  }}
                >
                  <span>{emoji}</span>
                  {label}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease, delay: 1.05 }}
              className="flex flex-wrap items-center gap-5 mb-14"
            >
              <Link
                href="/services"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "#E85D04",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "15px",
                  padding: "14px 30px",
                  borderRadius: "50px",
                  textDecoration: "none",
                  boxShadow: "0 10px 36px rgba(232,93,4,0.45)",
                  letterSpacing: "0.01em",
                }}
              >
                Explore Services
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link
                href="/contact"
                style={{
                  color: "rgba(255,255,255,0.72)",
                  fontWeight: 600,
                  fontSize: "15px",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "14px 24px",
                  borderRadius: "50px",
                  border: "1px solid rgba(255,255,255,0.16)",
                  letterSpacing: "0.01em",
                }}
              >
                Start a Conversation
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="flex items-center gap-3"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                style={{
                  width: "1px",
                  height: "44px",
                  background: "linear-gradient(to bottom, rgba(232,93,4,0.9), transparent)",
                }}
              />
              <span
                className="text-[11px] uppercase tracking-[0.24em]"
                style={{ color: "rgba(255,255,255,0.28)" }}
              >
                Scroll to explore
              </span>
            </motion.div>

            {/* Social links - mobile only */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.6 }}
              className="mt-8 flex items-center gap-4 lg:hidden"
            >
              <span className="text-[10px] text-white/25 uppercase tracking-widest">Follow us</span>
              {[
                { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/nexeratech-solutions/" },
                { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/nexeratechsolutions/" },
                { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/NexeraTechSolutions" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-white/30 hover:text-[#E85D04] transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div
          className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
          style={{ background: "linear-gradient(to top, rgba(11,17,32,0.6), transparent)" }}
        />
      </section>

      {/* ─── STATS BAR ──────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden border-b border-gray-100/80"
        style={{
          backgroundColor: "#0A1628",
        }}
      >
        {/* subtle dot grid */}
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, rgba(232,93,4,0.14) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        {/* Orange glow center */}
        <div aria-hidden className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[180px] blur-[80px]" style={{ background: "rgba(232,93,4,0.10)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-white/[0.06]">
            {[
              { value: 40, suffix: "+", label: "Enterprise Clients", sub: "Across US, UK & India", icon: "🌐" },
              { value: 95, suffix: "%", label: "Client Retention", sub: "Long-term partnerships", icon: "🤝" },
              { value: 25, suffix: "+", label: "Tech Professionals", sub: "Senior-level engineers", icon: "👨‍💻" },
              { value: 12, suffix: "", label: "Service Lines", sub: "Full-spectrum delivery", icon: "⚡" },
            ].map((stat, i) => {
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex flex-col items-center justify-center py-10 px-4 text-center relative overflow-hidden"
                >
                  <span className="text-2xl mb-3 block">{stat.icon}</span>
                  <p className="text-4xl lg:text-5xl font-black text-white mb-1" style={displayFont}>
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-sm font-bold text-[#E85D04] mb-1">{stat.label}</p>
                  <p className="text-[11px] text-white/30">{stat.sub}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ───────────────────────────────────────────────── */}
      <section
        className="relative section-py overflow-hidden"
        style={{
          backgroundColor: "#ffffff",
          backgroundImage: "radial-gradient(circle, rgba(232,93,4,0.06) 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
      >
        {/* Top glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] blur-[90px]"
          style={{ background: "rgba(232,93,4,0.035)" }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Column — Composite Cards with real images */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {/* Tall block — Offshore IT Delivery */}
                <div className="h-[380px] rounded-3xl border border-[#E85D04]/18 shadow-[0_24px_48px_rgba(10,22,40,0.25)] row-span-2 relative overflow-hidden group animate-float-slow">
                  <Image
                    src="/Why-Choose-Us/Offshore-IT-Delivery.webp"
                    alt="Offshore IT Delivery"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/60 to-transparent" />
                  <span className="absolute inset-x-0 top-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "linear-gradient(90deg, transparent, #E85D04, transparent)" }} />
                  <div className="absolute bottom-0 left-0 right-0 p-7 z-10">
                    <div className="w-12 h-12 rounded-2xl bg-[#E85D04]/15 border border-[#E85D04]/25 flex items-center justify-center text-white mb-5 group-hover:bg-[#E85D04]/25 transition-colors">
                      <span className="text-xl">💼</span>
                    </div>
                    <h4 className="text-white font-bold text-lg leading-tight mb-3" style={displayFont}>Offshore IT Delivery</h4>
                    <p className="text-sm text-white/70 leading-relaxed">Scalable engineering support out of our Hyderabad delivery center. Aligned to US, UK & India time zones.</p>
                    {/* Bottom badge */}
                    <div className="flex items-center gap-2 p-3 rounded-xl mt-4" style={{ background: "rgba(232,93,4,0.15)", border: "1px solid rgba(232,93,4,0.30)" }}>
                      <div className="w-2 h-2 rounded-full bg-[#E85D04] animate-flicker" />
                      <span className="text-[10px] text-[#E85D04] font-bold uppercase tracking-wider">25+ Active Engineers</span>
                    </div>
                  </div>
                </div>

                {/* AI block */}
                <div className="h-[178px] rounded-3xl border border-[#E85D04]/18 shadow-sm relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                  <Image
                    src="/Why-Choose-Us/AI-ML-labs.webp"
                    alt="AI ML Labs"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/90 via-[#0A1628]/40 to-transparent" />
                  <span className="absolute inset-x-0 top-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "linear-gradient(90deg, transparent, #E85D04, transparent)" }} />
                  <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                    <h4 className="text-white font-bold text-sm leading-tight mb-1" style={displayFont}>AI/ML Labs</h4>
                    <p className="text-[11px] text-white/70">LLM, RAG integration, custom models.</p>
                  </div>
                </div>

                {/* IAM block */}
                <div className="h-[178px] rounded-3xl border border-[#E85D04]/22 shadow-lg relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                  <Image
                    src="/Why-Choose-Us/IAM-Security.webp"
                    alt="IAM Security"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/90 via-[#0A1628]/40 to-transparent" />
                  <span className="absolute inset-x-0 top-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "linear-gradient(90deg, transparent, #E85D04, transparent)" }} />
                  <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                    <h4 className="text-white font-bold text-sm leading-tight mb-1" style={displayFont}>IAM & Security</h4>
                    <p className="text-[11px] text-white/70">Zero-Trust systems setup.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="mb-5">
                <span className="eyebrow-tag">
                  <span className="dot" />
                  Why Choose Us
                </span>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="text-4xl lg:text-5xl font-black text-[#0A1628] mb-8 leading-[1.05] tracking-tight"
                style={displayFont}
              >
                Your Trusted B2B<br />
                <span className="gradient-text">Tech Partner</span>
              </motion.h2>

              <motion.div variants={stagger} className="space-y-5">
                {[
                  { title: "Expert Tech Engineers", desc: "Professional squads with deep expertise in offshore development, cloud architecture, and compliance standards.", icon: Globe },
                  { title: "Fast & Reliable Time-to-Market", desc: "Time zone alignment, agile communication, and established delivery frameworks to build software quickly.", icon: Brain },
                  { title: "Quality Delivery Standards", desc: "Comprehensive quality assurance, test automation, and security-first coding practices in every sprint.", icon: Shield },
                  { title: "Cost Transparency & Flexibility", desc: "Fixed-price, T&M, or dedicated team options with no hidden fees or legal complications.", icon: CheckCircle },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div key={index} variants={fadeUp} className="flex items-start gap-4 group">
                      <div
                        className="w-12 h-12 rounded-2xl border border-[#E85D04]/15 flex items-center justify-center flex-shrink-0 bg-white transition-all duration-300 group-hover:bg-[#FFF4EC] group-hover:border-[#E85D04]/35 group-hover:shadow-[0_4px_16px_rgba(232,93,4,0.12)]"
                        style={{ boxShadow: "0 2px 8px rgba(15,23,42,0.06)" }}
                      >
                        <Icon className="w-5 h-5 text-[#E85D04]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#0A1628] text-base mb-1 group-hover:text-[#E85D04] transition-colors" style={displayFont}>{item.title}</h4>
                        <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>

              <motion.div variants={fadeUp} className="mt-8">
                <Link href="/about" className="inline-flex items-center gap-2 text-[#E85D04] font-bold text-sm hover:gap-3 transition-all duration-200">
                  Learn more about us <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── SPECIALTY SECTION ───────────────────────────────────────────── */}
      <section
        className="relative section-py overflow-hidden"
        style={{
          backgroundColor: "#F8FAFC",
          backgroundImage: "radial-gradient(circle, rgba(15,23,42,0.08) 1.5px, transparent 1.5px)",
          backgroundSize: "26px 26px",
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] blur-[100px]"
          style={{ background: "rgba(232,93,4,0.04)" }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16"
          >
            <span className="eyebrow-tag mb-5">
              <span className="dot" />
              Our Specialty
            </span>
            <h2
              className="text-4xl lg:text-5xl font-black text-[#0A1628] leading-[1.05] tracking-tight"
              style={displayFont}
            >
              Enterprise Tech<br />
              <span className="gradient-text">Competencies</span>
            </h2>
            <p className="mt-4 text-base text-gray-500 leading-relaxed max-w-2xl">
              Four key practice areas designed to accelerate modern business digital systems.
            </p>
          </motion.div>

          {/* Specialty Grid */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { title: "Offshore IT Services", desc: "Strategic engineering squads headquartered out of Hyderabad to augment global capacity.", slug: "offshore-it-services", icon: Globe, image: "/Our-Specialty/Offshore-IT-Delivery.webp" },
              { title: "Software Development", desc: "End-to-end custom application development, architecture consulting, and product builds.", slug: "software-development", icon: Code2, image: "/Our-Specialty/Software-Development.webp" },
              { title: "AI / ML Integration", desc: "Implementing custom machine learning pipelines, LLM fine-tuning, and document AI.", slug: "ai-ml-services", icon: Brain, image: "/Our-Specialty/AI-ML-Integration.webp" },
              { title: "IAM & Cybersecurity", desc: "Okta integration, directory configuration, Zero Trust policies, and compliance implementation.", slug: "iam-cybersecurity", icon: Shield, image: "/Our-Specialty/IAM-Cybersecurity.webp" },
            ].map((spec) => {
              const Icon = spec.icon;
              return (
                <motion.div key={spec.slug} variants={fadeUp}>
                  <div
                    className="group relative flex flex-col bg-white rounded-2xl overflow-hidden h-full transition-all duration-350 hover:-translate-y-2 hover:shadow-[0_24px_56px_rgba(15,23,42,0.14),_0_4px_16px_rgba(232,93,4,0.06)]"
                    style={{ border: "1px solid rgba(15,23,42,0.08)", boxShadow: "0 2px 12px rgba(15,23,42,0.06)" }}
                  >
                    {/* Top accent line */}
                    <span
                      className="absolute inset-x-0 top-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                      style={{ background: "linear-gradient(90deg, transparent, #E85D04, transparent)" }}
                    />
                    {/* Image banner */}
                    <div className="h-36 relative overflow-hidden flex-shrink-0">
                      <Image
                        src={spec.image}
                        alt={spec.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>
                    {/* Content */}
                    <div className="p-6 pt-0 relative flex-1 flex flex-col">
                      <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mx-auto -translate-y-1/2 flex-shrink-0 shadow-[0_4px_20px_rgba(15,23,42,0.12)]" style={{ border: "1px solid rgba(15,23,42,0.07)" }}>
                        <Icon className="w-6 h-6 text-[#E85D04]" />
                      </div>
                      <div className="text-center flex-1 flex flex-col justify-between -mt-4">
                        <div>
                          <h3 className="font-bold text-[#0A1628] text-base mb-2 group-hover:text-[#E85D04] transition-colors leading-tight" style={displayFont}>
                            {spec.title}
                          </h3>
                          <p className="text-xs text-gray-500 leading-relaxed mb-5">{spec.desc}</p>
                        </div>
                        <Link
                          href={`/services/${spec.slug}`}
                          className="inline-flex items-center justify-center gap-1.5 py-2.5 px-5 rounded-full text-[#E85D04] font-bold text-xs hover:bg-[#FFF4EC] hover:shadow-[0_2px_8px_rgba(232,93,4,0.12)] transition-all duration-200"
                          style={{ border: "1px solid rgba(232,93,4,0.25)" }}
                        >
                          Explore specialty →
                        </Link>
                      </div>
                    </div>
                    {/* Bottom accent */}
                    <span className="absolute inset-x-0 bottom-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "#E85D04" }} />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <div className="text-center mt-12">
            <Link href="/services" className="glow-btn">
              View All 12 Service Lines <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── HOW WE WORK ──────────────────────────────────────────── */}
      <section
        className="relative section-py overflow-hidden"
        style={{ backgroundColor: "#0A1628" }}
      >
        {/* Dot grid */}
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, rgba(232,93,4,0.12) 1.5px, transparent 1.5px)", backgroundSize: "30px 30px" }} />
        {/* Center glow */}
        <div aria-hidden className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full blur-[100px] opacity-15" style={{ background: "radial-gradient(circle, rgba(232,93,4,0.35) 0%, transparent 70%)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-14"
          >
            <span className="eyebrow-tag eyebrow-tag-dark mb-5 inline-flex">
              <span className="dot" />
              Our Process
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-white leading-[1.05] tracking-tight mt-4" style={displayFont}>
              How We <span className="gradient-text">Engage</span>
            </h2>
            <p className="text-white/45 mt-4 max-w-2xl mx-auto text-base">A clear, structured process from first conversation to delivery — so you always know what to expect.</p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative"
          >
            {/* Connector line desktop */}
            <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(232,93,4,0.3) 20%, rgba(232,93,4,0.3) 80%, transparent)" }} />
            {[
              {
                step: "01",
                title: "Discovery Call",
                desc: "We understand your challenge, team structure, and delivery timeline in a 30-minute no-obligation call.",
                icon: "🔍",
              },
              {
                step: "02",
                title: "Solution Design",
                desc: "Our team architects the right engagement model — Fixed Price, T&M, or Dedicated Squad — and shares a detailed proposal.",
                icon: "📐",
              },
              {
                step: "03",
                title: "Team Onboarding",
                desc: "Engineers are onboarded in 2 weeks or less. We plug directly into your Jira, Slack, and GitHub workflows.",
                icon: "🚀",
              },
              {
                step: "04",
                title: "Delivery & Growth",
                desc: "Transparent sprint delivery with monthly reporting. Scale up, down, or pivot based on your evolving needs.",
                icon: "📈",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group relative rounded-2xl p-7 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(232,93,4,0.35)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                }}
              >
                <span className="absolute inset-x-0 top-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "linear-gradient(90deg, transparent, #E85D04, transparent)" }} />
                {/* Step number badge */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-black text-white flex-shrink-0" style={{ background: "linear-gradient(135deg, #E85D04, #FF802B)", boxShadow: "0 4px 12px rgba(232,93,4,0.35)" }}>
                    {item.step}
                  </div>
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3 className="font-bold text-white text-lg" style={displayFont}>{item.title}</h3>
                <p className="text-sm text-white/45 leading-relaxed flex-1">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <Link href="/contact" className="glow-btn">
              Start a Conversation <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── INDUSTRIES ─────────────────────────────────────────── */}
      <section
        className="relative section-py overflow-hidden"
        style={{
          backgroundColor: "#0A1628",
        }}
      >
        {/* Dot grid */}
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, rgba(232,93,4,0.12) 1.5px, transparent 1.5px)", backgroundSize: "28px 28px" }} />
        {/* Center glow */}
        <div aria-hidden className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] blur-[100px] opacity-20" style={{ background: "rgba(232,93,4,0.35)" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-14"
          >
            <div>
              <span className="eyebrow-tag eyebrow-tag-dark mb-5 inline-flex">
                <span className="dot" />
                Industries We Serve
              </span>
              <h2
                className="text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mt-4"
                style={displayFont}
              >
                Built for Your{" "}
                <span className="gradient-text">Industry</span>
              </h2>
              <p className="text-white/45 mt-3 text-base max-w-xl">
                Sector-specific expertise across 6 regulated, competitive, and complex markets.
              </p>
            </div>
            <Link href="/industries" className="flex items-center gap-2 px-5 py-2.5 rounded-full text-[#E85D04] font-bold text-sm border border-[#E85D04]/30 hover:bg-[#E85D04]/10 hover:gap-3 transition-all duration-200 whitespace-nowrap flex-shrink-0">
              All industries <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          >
            {[
              { name: "BFSI / Fintech", icon: "🏦", desc: "Compliance-first engineering", stat: "40+ clients", image: "/industries/BFSI-Fintech.webp" },
              { name: "Healthcare", icon: "🏥", desc: "HIPAA-ready systems", stat: "HIPAA aligned", image: "/industries/Healthcare.webp" },
              { name: "Technology / SaaS", icon: "💻", desc: "Product engineering", stat: "AI-ready", image: "/industries/Technology-SaaS.webp" },
              { name: "Retail", icon: "🛒", desc: "Commerce platforms", stat: "Cloud-native", image: "/industries/Retail-E-Commerce.webp" },
              { name: "Legal", icon: "⚖️", desc: "Document AI & automation", stat: "AI-powered", image: "/industries/Legal.webp" },
              { name: "Manufacturing", icon: "🏭", desc: "ERP integration & ops", stat: "ERP experts", image: "/industries/Manufacturing.webp" },
            ].map((ind, i) => (
              <motion.div key={i} variants={fadeUp}>
                <Link
                  href="/industries"
                  className="group relative flex flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(0,0,0,0.40)]"
                  style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  {/* Image */}
                  <div className="relative h-28 overflow-hidden flex-shrink-0">
                    <Image
                      src={ind.image}
                      alt={ind.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 50vw, 16vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/40 to-transparent" />
                    {/* Top accent on hover */}
                    <span className="absolute inset-x-0 top-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "linear-gradient(90deg, transparent, #E85D04, transparent)" }} />
                  </div>
                  {/* Content */}
                  <div className="p-4 pt-3 flex flex-col" style={{ background: "rgba(255,255,255,0.04)" }}>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-xl group-hover:scale-110 transition-transform duration-300">{ind.icon}</span>
                      <span className="font-bold text-white group-hover:text-[#E85D04] transition-colors text-xs leading-tight">{ind.name}</span>
                    </div>
                    <span className="text-[10px] text-white/40 leading-snug mb-2">{ind.desc}</span>
                    <span className="inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full w-fit" style={{ background: "rgba(232,93,4,0.15)", color: "#E85D04" }}>
                      <span className="w-1 h-1 rounded-full bg-[#E85D04]" />
                      {ind.stat}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── TRUST SIGNAL STRIP ────────────────────────────────────── */}
      <section className="relative overflow-hidden py-10 border-t border-gray-100">
        <div aria-hidden className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[100px] blur-[60px]" style={{ background: "rgba(232,93,4,0.03)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold uppercase tracking-[0.20em] text-gray-300 mb-8">Trusted by teams across</p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
            {[
              { flag: "🇺🇸", label: "United States" },
              { flag: "🇬🇧", label: "United Kingdom" },
              { flag: "🇮🇳", label: "India" },
            ].map(({ flag, label }) => (
              <div key={label} className="flex items-center gap-2.5">
                <span className="text-2xl">{flag}</span>
                <span className="text-sm font-semibold text-gray-500">{label}</span>
              </div>
            ))}
            <div className="w-px h-6 bg-gray-200 hidden md:block" />
            {[
              { icon: "🔒", label: "HIPAA Aware" },
              { icon: "☁️", label: "Cloud-Native" },
              { icon: "🤖", label: "AI-Powered" },
              { icon: "⚡", label: "Agile Delivery" },
            ].map(({ icon, label }) => (
              <div key={label} className="flex items-center gap-1.5">
                <span>{icon}</span>
                <span className="text-sm font-semibold text-gray-400">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CASE STUDIES ────────────────────────────────────────────────── */}
      <section
        className="relative section-py overflow-hidden"
        style={{
          backgroundColor: "#F8FAFC",
          backgroundImage: "radial-gradient(circle, rgba(15,23,42,0.08) 1.5px, transparent 1.5px)",
          backgroundSize: "26px 26px",
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[250px] blur-[100px]"
          style={{ background: "rgba(232,93,4,0.035)" }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12"
          >
            <div>
              <span className="eyebrow-tag mb-4 inline-flex">
                <span className="dot" />
                Case Studies
              </span>
              <h2
                className="text-4xl font-black text-[#0A1628] mt-2 tracking-tight"
                style={displayFont}
              >
                Real Customer Outcomes
              </h2>
            </div>
            <Link
              href="/case-studies"
              className="flex items-center gap-2 text-[#E85D04] font-bold whitespace-nowrap hover:gap-3 transition-all duration-200 text-sm"
            >
              All case studies <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {featuredCases.map((cs) => (
              <motion.div key={cs.slug} variants={fadeUp}>
                <Link
                  href={`/case-studies/${cs.slug}`}
                  className="group relative flex flex-col bg-white rounded-2xl overflow-hidden h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_56px_rgba(15,23,42,0.14)]"
                  style={{ border: "1px solid rgba(15,23,42,0.08)", boxShadow: "0 2px 12px rgba(15,23,42,0.06)" }}
                >
                  {/* Top accent line */}
                  <span
                    className="absolute inset-x-0 top-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(90deg, transparent, ${cs.color}, transparent)` }}
                  />
                  {/* Color bar with outcome badge overlay */}
                  <div className="relative h-2 w-full" style={{ background: `linear-gradient(90deg, ${cs.color}, ${cs.color}aa)` }}>
                    {/* Outcome badge */}
                    {cs.stats[0] && (
                      <div
                        className="absolute -bottom-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-black shadow-md"
                        style={{ background: cs.color, color: "#fff", boxShadow: `0 4px 12px ${cs.color}55` }}
                      >
                        <TrendingUp className="w-3 h-3" />
                        {cs.stats[0].value} {cs.stats[0].label}
                      </div>
                    )}
                  </div>
                  <div className="p-7 pt-8 flex flex-col flex-1">
                    {/* Meta */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-lg">{cs.flag}</span>
                      <span className="px-2.5 py-1 rounded-full text-xs font-bold" style={{ background: cs.color + "18", color: cs.color }}>
                        {cs.industry}
                      </span>
                    </div>
                    {/* Stats row */}
                    <div className="flex gap-5 mb-4 pb-4 border-b border-gray-100">
                      {cs.stats.slice(0, 2).map((stat, i) => (
                        <div key={i}>
                          <p className="text-2xl font-black" style={{ color: cs.color, ...displayFont }}>{stat.value}</p>
                          <p className="text-[11px] text-gray-400 mt-0.5">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                    <h3 className="font-bold text-[#0A1628] text-lg leading-tight mb-2 group-hover:text-[#E85D04] transition-colors" style={displayFont}>
                      {cs.headline}
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-2 flex-1">{cs.subheadline}</p>
                    <div className="flex items-center gap-1 mt-5 text-sm font-bold group-hover:gap-2 transition-all duration-200" style={{ color: cs.color }}>
                      Read case study <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                  {/* Bottom accent */}
                  <span className="absolute inset-x-0 bottom-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: cs.color }} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ────────────────────────────────────────────────── */}
      <section className="relative section-py overflow-hidden section-line-dark border-t border-white/5">
        {/* Ambient orbs */}
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 w-[500px] h-[350px] rounded-full blur-[120px] opacity-20"
            style={{ background: "radial-gradient(circle, rgba(232,93,4,0.25) 0%, transparent 70%)", top: "50%", transform: "translateY(-50%)" }}
          />
          <div
            className="absolute inset-y-0 right-0 w-[500px] h-[350px] rounded-full blur-[120px] opacity-15"
            style={{ background: "radial-gradient(circle, rgba(255,128,43,0.20) 0%, transparent 70%)", top: "50%", transform: "translateY(-50%)" }}
          />
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] blur-[100px] opacity-08"
            style={{ background: "rgba(232,93,4,0.3)" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14"
          >
            <span className="eyebrow-tag eyebrow-tag-dark mb-5">
              <span className="dot" />
              Testimonials
            </span>
            <h2
              className="text-4xl sm:text-5xl font-black text-white leading-[1.05] tracking-tight"
              style={displayFont}
            >
              What Clients Say<br />
              <span className="gradient-text">About Us</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {visibleTestimonials.map((t) => (
              <motion.div
                key={t.id}
                variants={fadeUp}
                className="group relative flex flex-col bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_56px_rgba(0,0,0,0.30)]"
                style={{ border: "1px solid rgba(255,255,255,0.10)", boxShadow: "0 2px 20px rgba(0,0,0,0.20)" }}
              >
                <span
                  className="absolute inset-x-0 top-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(90deg, transparent, #E85D04, transparent)" }}
                />
                <div className="p-7 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#E85D04] text-[#E85D04]" />
                      ))}
                    </div>
                    <span className="text-5xl text-[#E85D04] font-serif leading-none opacity-20 block mb-2">"</span>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {t.quote}
                    </p>
                  </div>
                  <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-auto">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-black text-white flex-shrink-0 shadow-md"
                        style={{ background: t.color }}
                      >
                        {t.client[0]}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[#0A1628]">{t.client}</p>
                        <p className="text-[11px] text-gray-500 font-medium">{t.role}</p>
                        <p className="text-[10px] text-gray-400">{t.flag} {t.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <span className="absolute inset-x-0 bottom-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "#E85D04" }} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center mt-10"
          >
            <Link
              href="/testimonials"
              className="glow-btn flex items-center gap-2 group/btn"
            >
              See More Reviews
              <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── ISHARA FOUNDATION INTRO ───────────────────────────────────────── */}
      <section
        className="relative section-py overflow-hidden border-t border-gray-100/50"
        style={{
          backgroundColor: "#F4F9F2",
          backgroundImage: "radial-gradient(circle, rgba(78,153,68,0.06) 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] blur-[100px]"
          style={{ background: "rgba(125,196,110,0.15)" }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="mb-5">
                <span
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
                  style={{ background: "rgba(125,196,110,0.18)", color: "#2D5A27", border: "1px solid rgba(125,196,110,0.35)" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4E9944] animate-pulse" />
                  Social Impact
                </span>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="text-4xl lg:text-5xl font-black text-[#1A3A1A] mb-6 leading-[1.1] tracking-tight"
                style={displayFont}
              >
                Technology for{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #2D5A27 0%, #7DC46E 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Meaningful
                </span>{" "}
                Social Change
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-gray-600 text-base leading-relaxed mb-8 max-w-xl animate-fade-up"
              >
                At NexeraTech Solutions, social impact is a core value, not an afterthought. We partner with <strong>IShara Foundation</strong> to bring technology resources, volunteer hours, and digital education to underserved communities.
              </motion.p>

              {/* Highlight list */}
              <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { title: "Digital Inclusion", desc: "Providing technology and internet access", icon: "🌐" },
                  { title: "Skills & Education", desc: "Digital literacy workshops for youth", icon: "📚" },
                  { title: "Infrastructure", desc: "Donating hardware to community hubs", icon: "💻" },
                  { title: "Volunteering", desc: "Hands-on team support and mentoring", icon: "🤝" },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <h4 className="font-bold text-[#1A3A1A] text-sm leading-tight mb-1" style={displayFont}>{item.title}</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={fadeUp}>
                <Link
                  href="/csr-foundation"
                  className="glow-btn"
                  style={{
                    background: "linear-gradient(135deg, #2D5A27 0%, #4E9944 60%, #2D5A27 100%)",
                    boxShadow: "0 8px 24px rgba(45,90,39,0.22)",
                  }}
                >
                  Explore IShara Foundation <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Right: Premium visual block */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="relative"
            >
              <div
                className="relative rounded-3xl p-10 overflow-hidden"
                style={{
                  background: "linear-gradient(145deg, #2D5A27 0%, #1A3A1A 100%)",
                  boxShadow: "0 24px 60px rgba(45,90,39,0.25)",
                }}
              >
                {/* Background dot pattern */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: "radial-gradient(circle, #7DC46E 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />
                
                <div className="relative z-10 text-center flex flex-col items-center">
                  <div
                    className="inline-flex items-center justify-center mb-8 rounded-2xl bg-white px-6 py-4 shadow-md"
                  >
                    <Image
                      src="/IShara-Foundation/ISHARA_ FOUNDATION_LOGO.webp"
                      alt="IShara Foundation"
                      width={200}
                      height={65}
                      className="object-contain"
                    />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2" style={displayFont}>IShara Foundation</h3>
                  <p className="text-[#7DC46E] text-xs uppercase tracking-widest font-bold mb-4">Our Primary CSR Partner</p>
                  <p className="text-white/70 text-sm leading-relaxed max-w-sm">
                    Empowering local communities by enabling computer literacy, distributing basic technology infrastructure, and creating career opportunities in technology.
                  </p>
                  
                  <div className="flex gap-2 justify-center mt-6 flex-wrap">
                    {["Digital Inclusion", "Statutory CSR Partner", "Grassroots Empowerment"].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-[10px] font-bold"
                        style={{ background: "rgba(125,196,110,0.25)", color: "#7DC46E", border: "1px solid rgba(125,196,110,0.3)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ──────────────────────────────────────────────────── */}
      <section
        className="relative py-20 overflow-hidden border-t border-white/5"
        style={{ backgroundColor: "#070D19" }}
      >
        {/* Line grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Left orange orb */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-[500px] h-[300px] rounded-full blur-[120px] opacity-25"
          style={{ background: "radial-gradient(circle, rgba(232,93,4,0.25) 0%, transparent 70%)", top: "50%", transform: "translateY(-50%)" }}
        />
        {/* Right subtle orb */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-[500px] h-[300px] rounded-full blur-[120px] opacity-15"
          style={{ background: "radial-gradient(circle, rgba(255,128,43,0.20) 0%, transparent 70%)", top: "50%", transform: "translateY(-50%)" }}
        />
        {/* Top gradient border line */}
        <div className="absolute inset-x-0 top-0 h-[1px]" style={{ background: "linear-gradient(90deg, transparent, rgba(232,93,4,0.4), transparent)" }} />

        <div className="relative z-10 mx-auto max-w-[1280px] px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-xl">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/40 block mb-3">
                Technology Solutions, Anytime
              </span>
              <h3
                className="text-3xl md:text-4xl font-black text-white leading-[1.08] tracking-tight"
                style={displayFont}
              >
                Get Premium IT Services &amp; Offshore Engineering.
              </h3>
            </div>
            <div className="flex items-center gap-4 flex-shrink-0">
              <Link href="/contact" className="glow-btn">
                Request a Proposal
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/case-studies" className="glow-btn glow-btn-ghost">
                See Results
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
