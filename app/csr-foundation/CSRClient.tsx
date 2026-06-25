"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Leaf, Users, Globe, BookOpen, CheckCircle, Heart, Sprout, TreePine, Star, Shield, Handshake } from "lucide-react";

/* ─── IShara green palette ────────────────────────────────────────────────── */
const G = {
  dark:    "#1A3A1A",  // deepest forest
  deep:    "#2D5A27",  // primary brand green
  mid:     "#3D7A35",  // mid green
  fresh:   "#4E9944",  // fresh green
  light:   "#7DC46E",  // light green
  pale:    "#D4EDCC",  // very pale green tint
  cream:   "#F4F9F2",  // off-white cream
  gold:    "#C9A84C",  // warm gold accent
};

/* ─── Animation variants ─────────────────────────────────────────────────── */
const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" as const } },
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };
const scaleIn = {
  hidden:  { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: "easeOut" as const } },
};

function LeafDot({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-block w-1.5 h-1.5 rounded-full animate-pulse ${className}`}
      style={{ background: G.fresh }}
    />
  );
}

/* ─── Floating particle ──────────────────────────────────────────────────── */
function FloatingLeaf({ x, y, delay, size = 24 }: { x: string; y: string; delay: number; size?: number }) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left: x, top: y }}
      animate={{ y: [-8, 8, -8], rotate: [-5, 5, -5], opacity: [0.12, 0.25, 0.12] }}
      transition={{ duration: 5 + delay, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <Leaf style={{ width: size, height: size, color: G.light }} />
    </motion.div>
  );
}

export default function CSRClient() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <div className="overflow-hidden" style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}>

      {/* ══════════════════════════ HERO ════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: `linear-gradient(165deg, #0A1F0A 0%, ${G.dark} 30%, ${G.deep} 65%, #1E4A20 100%)` }}
      >
        {/* Parallax background texture */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ y: bgY }}
        >
          {/* Organic radial glows */}
          <div
            className="absolute -top-40 -right-40 w-[900px] h-[900px] rounded-full"
            style={{ background: `radial-gradient(circle at 40% 40%, ${G.light}22 0%, transparent 65%)` }}
          />
          <div
            className="absolute -bottom-60 -left-40 w-[700px] h-[700px] rounded-full"
            style={{ background: `radial-gradient(circle at 60% 60%, ${G.mid}18 0%, transparent 65%)` }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] rounded-full"
            style={{ background: `radial-gradient(ellipse, ${G.fresh}08 0%, transparent 70%)`, filter: "blur(60px)" }}
          />

          {/* Dot grid */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(125,196,110,0.12) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />

          {/* Dashed ring decorations */}
          <svg className="absolute right-[-60px] top-[-60px] w-[640px] h-[640px] opacity-8" viewBox="0 0 640 640" fill="none">
            <circle cx="320" cy="320" r="280" stroke={G.light} strokeWidth="1" strokeDasharray="10 16" />
            <circle cx="320" cy="320" r="210" stroke={G.light} strokeWidth="0.6" strokeDasharray="5 10" />
            <circle cx="320" cy="320" r="140" stroke={G.light} strokeWidth="0.4" />
          </svg>
          <svg className="absolute left-[-80px] bottom-[-80px] w-[440px] h-[440px] opacity-5" viewBox="0 0 440 440" fill="none">
            <circle cx="220" cy="220" r="200" stroke={G.light} strokeWidth="1" strokeDasharray="8 12" />
            <circle cx="220" cy="220" r="150" stroke={G.light} strokeWidth="0.5" strokeDasharray="4 8" />
          </svg>
        </motion.div>

        {/* Floating leaf particles */}
        <FloatingLeaf x="8%" y="20%" delay={0} size={20} />
        <FloatingLeaf x="92%" y="15%" delay={1.5} size={16} />
        <FloatingLeaf x="5%" y="70%" delay={2.8} size={24} />
        <FloatingLeaf x="88%" y="65%" delay={0.7} size={18} />
        <FloatingLeaf x="50%" y="8%" delay={3.2} size={14} />
        <FloatingLeaf x="75%" y="82%" delay={1.9} size={20} />

        {/* Main hero content */}
        <motion.div
          className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24"
          style={{ y: textY }}
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* ── LEFT COLUMN ────────────────────────────────────────────── */}
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              {/* Breadcrumb */}
              <motion.div variants={fadeUp} className="flex items-center gap-2 mb-10 text-sm">
                <Link href="/" className="text-white/35 hover:text-white transition-colors">Home</Link>
                <span className="text-white/20">/</span>
                <span className="font-medium" style={{ color: G.light }}>IShara Foundation</span>
              </motion.div>

              {/* Eyebrow pill */}
              <motion.span
                variants={fadeUp}
                className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.18em] mb-8"
                style={{
                  background: "rgba(125,196,110,0.12)",
                  border: `1px solid rgba(125,196,110,0.35)`,
                  color: G.light,
                  backdropFilter: "blur(8px)",
                }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ background: G.fresh }} />
                  <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: G.fresh }} />
                </span>
                NexeraTech&apos;s CSR Initiative
              </motion.span>

              {/* Heading */}
              <motion.h1
                variants={fadeUp}
                className="text-6xl lg:text-7xl xl:text-[5rem] font-extrabold text-white leading-[1.03] tracking-tight mb-6"
              >
                Technology{" "}
                <br />
                for{" "}
                <span
                  style={{
                    background: `linear-gradient(120deg, ${G.light} 0%, #B8E8A0 40%, ${G.pale} 100%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Meaningful
                </span>
                {" "}
                <br />
                Social Change
              </motion.h1>

              {/* Accent divider */}
              <motion.div
                variants={fadeUp}
                className="mb-8"
                style={{ height: "2px", background: `linear-gradient(90deg, ${G.mid}, transparent)`, maxWidth: "320px" }}
              />

              <motion.p
                variants={fadeUp}
                className="text-lg text-white/60 leading-[1.8] mb-10 max-w-lg"
              >
                NexeraTech Solutions partners with{" "}
                <span className="font-semibold" style={{ color: G.light }}>IShara Foundation</span>{" "}
                to advance digital inclusion, education, and community development across India — because social impact is one of our core values.
              </motion.p>

              {/* CTA buttons */}
              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 mb-12">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold text-sm transition-all duration-300 hover:brightness-110"
                  style={{
                    background: `linear-gradient(135deg, ${G.mid} 0%, ${G.fresh} 100%)`,
                    boxShadow: `0 8px 32px rgba(61,122,53,0.50)`,
                  }}
                >
                  Get Involved <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#about-ishara"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm transition-all duration-300"
                  style={{
                    border: "1.5px solid rgba(125,196,110,0.35)",
                    color: G.light,
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(125,196,110,0.10)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                >
                  Learn More
                </Link>
              </motion.div>

              {/* Trust strip */}
              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-6">
                {[
                  { icon: Shield, text: "Committed CSR Partner" },
                  { icon: Heart, text: "Social Impact Core Value" },
                  { icon: Globe, text: "Digital Inclusion Focus" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <item.icon className="w-4 h-4" style={{ color: G.light }} />
                    <span className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.55)" }}>{item.text}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* ── RIGHT COLUMN ───────────────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="relative hidden lg:block"
            >
              {/* Main card */}
              <div
                className="relative rounded-[2rem] overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  backdropFilter: "blur(20px)",
                  boxShadow: "0 40px 100px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06)",
                }}
              >
                {/* Logo display area */}
                <div
                  className="px-10 pt-10 pb-8 flex flex-col items-center"
                  style={{ background: "rgba(255,255,255,0.02)" }}
                >
                  {/* Logo container */}
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="relative"
                  >
                    <div
                      className="relative rounded-2xl px-8 py-5"
                      style={{
                        background: "rgba(255,255,255,0.97)",
                        boxShadow: `0 20px 60px rgba(0,0,0,0.35), 0 0 0 1px ${G.light}20`,
                      }}
                    >
                      <Image
                        src="/IShara-Foundation/ISHARA_ FOUNDATION_LOGO.webp"
                        alt="IShara Foundation Logo"
                        width={280}
                        height={88}
                        className="object-contain"
                        priority
                      />
                    </div>
                    {/* Glow behind logo */}
                    <div
                      className="absolute inset-0 rounded-2xl -z-10 blur-3xl scale-110"
                      style={{ background: G.light, opacity: 0.18 }}
                    />
                  </motion.div>

                  <h3 className="text-xl font-bold text-white mt-6 mb-1">IShara Foundation</h3>
                  <p className="text-sm font-semibold" style={{ color: G.light }}>NexeraTech&apos;s CSR Partner</p>
                </div>

                {/* Divider */}
                <div style={{ height: "1px", background: "rgba(255,255,255,0.07)" }} />

                {/* Stats grid */}
                <div className="grid grid-cols-3 divide-x" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
                  {[
                    { icon: "🌱", value: "Social", label: "Core Value" },
                    { icon: "💻", value: "Digital", label: "Inclusion" },
                    { icon: "🤝", value: "Long-term", label: "Partnership" },
                  ].map((s, i) => (
                    <div
                      key={i}
                      className="py-5 px-4 text-center"
                      style={{ borderColor: "rgba(255,255,255,0.07)" }}
                    >
                      <span className="text-2xl block mb-1">{s.icon}</span>
                      <p className="text-xs font-bold text-white leading-none">{s.value}</p>
                      <p className="text-[10px] mt-1" style={{ color: "rgba(255,255,255,0.40)" }}>{s.label}</p>
                    </div>
                  ))}
                </div>

                {/* Focus tags */}
                <div className="px-8 py-6 flex flex-wrap gap-2 justify-center">
                  {["Digital Inclusion", "Education", "Community Dev", "Tech Skills", "Volunteering"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-full text-xs font-semibold"
                      style={{ background: "rgba(125,196,110,0.12)", color: G.light, border: `1px solid rgba(125,196,110,0.25)` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom CTA strip */}
                <div
                  className="px-8 py-5 flex items-center justify-between"
                  style={{
                    background: `linear-gradient(135deg, ${G.deep}80, ${G.mid}60)`,
                    borderTop: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <span className="text-sm font-medium text-white/70">
                    A commitment to social change
                  </span>
                  <span
                    className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full"
                    style={{ background: "rgba(125,196,110,0.2)", color: G.light }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: G.fresh }} />
                    Active
                  </span>
                </div>
              </div>

              {/* Floating badge top-right */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-5 -right-5 rounded-2xl px-4 py-3 flex items-center gap-2.5"
                style={{
                  background: "rgba(11,31,11,0.85)",
                  border: `1px solid ${G.light}40`,
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                }}
              >
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: `${G.fresh}22` }}>
                  <Star className="w-4 h-4" style={{ color: G.gold }} />
                </div>
                <div>
                  <p className="text-white text-xs font-bold leading-none">CSR Certified</p>
                  <p className="text-[10px] mt-0.5 font-medium" style={{ color: G.light }}>IShara Foundation</p>
                </div>
              </motion.div>

              {/* Floating badge bottom-left */}
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-5 -left-5 rounded-2xl px-4 py-3 flex items-center gap-2.5"
                style={{
                  background: "rgba(11,31,11,0.85)",
                  border: `1px solid ${G.light}30`,
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                }}
              >
                <span className="text-2xl">🌱</span>
                <div>
                  <p className="text-white text-xs font-bold leading-none">Social Impact</p>
                  <p className="text-[10px] mt-0.5" style={{ color: G.light }}>Core Company Value</p>
                </div>
              </motion.div>

              {/* Ambient glow */}
              <div
                className="absolute -inset-8 rounded-[3rem] -z-10"
                style={{ background: `${G.fresh}08`, filter: "blur(40px)" }}
              />
            </motion.div>

          </div>
        </motion.div>

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-10"
          style={{ background: `linear-gradient(to bottom, transparent, ${G.cream})` }}
        />

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: "rgba(255,255,255,0.25)" }}>Scroll</span>
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="h-8 w-5 rounded-full flex items-start justify-center pt-1.5"
            style={{ border: `1px solid rgba(125,196,110,0.25)` }}
          >
            <div className="h-1.5 w-1.5 rounded-full" style={{ background: G.light, opacity: 0.5 }} />
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════ STAT STRIP ══════════════════════════════════ */}
      <section id="about-ishara" style={{ background: G.cream }} className="py-16 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-0 divide-y sm:divide-y-0 sm:divide-x"
            style={{ borderRadius: "1.5rem", border: `1px solid ${G.pale}`, background: "#fff", boxShadow: "0 4px 32px rgba(45,90,39,0.08)", borderColor: G.pale }}
          >
            {[
              { icon: "🌱", value: "Social Impact",       label: "Our Core Value" },
              { icon: "🤝", value: "IShara Foundation",  label: "CSR Partner" },
              { icon: "💻", value: "Digital Inclusion",   label: "Focus Area" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="py-10 px-8 text-center"
                style={{ borderColor: G.pale }}
              >
                <span className="text-4xl block mb-3">{item.icon}</span>
                <p className="text-xl font-bold" style={{ color: G.dark }}>{item.value}</p>
                <p className="text-sm mt-1" style={{ color: G.mid }}>{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ ABOUT ISHARA ════════════════════════════════ */}
      <section className="section-py" style={{ background: "#fff" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left copy */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.span
                variants={fadeUp}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5"
                style={{ background: G.pale, color: G.deep, border: `1px solid ${G.light}40` }}
              >
                <LeafDot /> About IShara Foundation
              </motion.span>
              <motion.h2
                variants={fadeUp}
                className="text-4xl lg:text-5xl font-bold mb-6 leading-tight"
                style={{ color: G.dark }}
              >
                Nurturing Communities Through Technology
              </motion.h2>
              <motion.div variants={fadeUp} className="space-y-5 text-base leading-relaxed" style={{ color: "#4B5563" }}>
                <p>
                  IShara Foundation is a social impact organization dedicated to digital inclusion, education,
                  and community development. NexeraTech Solutions is a committed contributor — bringing
                  technology expertise, resources, and volunteering to support IShara&apos;s programs.
                </p>
                <p>
                  At NexeraTech, social impact is one of our four core values — not a footnote in an annual
                  report. We believe that companies with technology capabilities have a responsibility and an
                  opportunity to use those capabilities for good.
                </p>
              </motion.div>

              <motion.ul variants={stagger} className="mt-8 space-y-3">
                {[
                  "Technology-first approach to social challenges",
                  "Grassroots community development programs",
                  "Long-term strategic partnership commitment",
                ].map((item, i) => (
                  <motion.li key={i} variants={fadeUp} className="flex items-center gap-3 text-sm font-medium" style={{ color: G.dark }}>
                    <span
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ background: G.pale, border: `1.5px solid ${G.light}` }}
                    >
                      <Leaf className="w-3 h-3" style={{ color: G.deep }} />
                    </span>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Right visual card */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn}>
              <div
                className="relative rounded-3xl p-10 overflow-hidden"
                style={{
                  background: `linear-gradient(145deg, ${G.deep} 0%, ${G.dark} 100%)`,
                  boxShadow: `0 24px 60px rgba(45,90,39,0.35)`,
                }}
              >
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `radial-gradient(circle, ${G.light} 1px, transparent 1px)`,
                    backgroundSize: "24px 24px",
                  }}
                />
                <div className="absolute top-4 right-4 opacity-20">
                  <TreePine className="w-24 h-24 text-white" />
                </div>

                <div className="relative z-10 text-center">
                  <div
                    className="inline-flex items-center justify-center mb-8 rounded-2xl px-6 py-4"
                    style={{ background: "rgba(255,255,255,0.95)" }}
                  >
                    <Image
                      src="/IShara-Foundation/ISHARA_ FOUNDATION_LOGO.webp"
                      alt="IShara Foundation"
                      width={200}
                      height={65}
                      className="object-contain"
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">IShara Foundation</h3>
                  <p className="mb-6 font-semibold text-sm" style={{ color: G.light }}>NexeraTech&apos;s CSR Partner</p>
                  <p className="text-white/65 text-sm leading-relaxed">
                    Together, we are working toward a future where technology access, digital literacy,
                    and community development are available to everyone — regardless of socioeconomic background.
                  </p>

                  <div className="flex gap-3 justify-center mt-8 flex-wrap">
                    {["Digital Inclusion", "Education", "Community"].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-semibold"
                        style={{ background: "rgba(125,196,110,0.2)", color: G.light, border: `1px solid rgba(125,196,110,0.3)` }}
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

      {/* ══════════════════════ FOCUS AREAS ═════════════════════════════════ */}
      <section
        className="section-py relative overflow-hidden"
        style={{
          background: G.cream,
          backgroundImage: `radial-gradient(circle, rgba(45,90,39,0.07) 1.5px, transparent 1.5px)`,
          backgroundSize: "28px 28px",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5"
              style={{ background: G.pale, color: G.deep, border: `1px solid ${G.light}50` }}
            >
              <LeafDot /> What We Support
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-3" style={{ color: G.dark }}>
              Our Focus Areas
            </h2>
            <p className="mt-4 text-base max-w-xl mx-auto" style={{ color: "#6B7280" }}>
              Every initiative is rooted in creating lasting, measurable impact for underserved communities.
            </p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: Globe,    title: "Digital Inclusion",      desc: "Making technology and internet access available to underserved communities across India." },
              { icon: BookOpen, title: "Education & Literacy",   desc: "Digital literacy programs, computer skills training, and educational resources for youth." },
              { icon: Users,    title: "Skills & Employment",    desc: "Technology skills training and career development programs to enable economic mobility." },
              { icon: Sprout,   title: "Community Development",  desc: "Using technology infrastructure to support community services and development projects." },
            ].map((area, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="group bg-white rounded-2xl p-7 border text-center cursor-default transition-shadow"
                style={{
                  border: `1px solid ${G.pale}`,
                  boxShadow: "0 2px 16px rgba(45,90,39,0.06)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 16px 48px rgba(45,90,39,0.16)`;
                  (e.currentTarget as HTMLElement).style.borderColor = `${G.light}80`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 16px rgba(45,90,39,0.06)";
                  (e.currentTarget as HTMLElement).style.borderColor = G.pale;
                }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: G.pale }}
                >
                  <area.icon className="w-7 h-7" style={{ color: G.deep }} />
                </div>
                <h3 className="font-bold text-base mb-3" style={{ color: G.dark }}>{area.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>{area.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════ HOW NEXERATECH CONTRIBUTES ══════════════════ */}
      <section
        className="section-py relative overflow-hidden"
        style={{ background: `linear-gradient(160deg, ${G.dark} 0%, ${G.deep} 100%)` }}
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full pointer-events-none"
          style={{ background: `rgba(78,153,68,0.12)`, filter: "blur(100px)" }}
        />
        <div
          className="absolute inset-0 opacity-8 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5"
              style={{ background: "rgba(125,196,110,0.15)", color: G.light, border: `1px solid rgba(125,196,110,0.35)` }}
            >
              <LeafDot /> Our Contribution
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mt-3">
              How NexeraTech Contributes
            </h2>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto"
          >
            {[
              { icon: "⚙️",  text: "Technology expertise — pro bono and subsidized technology development for IShara programs" },
              { icon: "💰",  text: "Financial contribution — annual CSR commitment to IShara Foundation programs and operations" },
              { icon: "🙌",  text: "Team volunteering — NexeraTech team members volunteer time and skills at IShara events" },
              { icon: "📚",  text: "Digital skills training — NexeraTech engineers deliver digital literacy and coding workshops" },
              { icon: "🏗️", text: "Infrastructure support — technology infrastructure donation for IShara community centers" },
              { icon: "🤝",  text: "Long-term partnership — multi-year commitment to IShara's strategic development goals" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex items-start gap-4 rounded-xl p-5 transition-colors duration-200"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: `1px solid rgba(125,196,110,0.15)`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.09)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(125,196,110,0.40)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(125,196,110,0.15)";
                }}
              >
                <span className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</span>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.70)" }}>{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════ CORE VALUES ═════════════════════════════════ */}
      <section className="section-py bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
              style={{ background: G.pale, color: G.deep, border: `1px solid ${G.light}50` }}
            >
              <LeafDot /> Our Commitment
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-4xl lg:text-5xl font-bold mb-6 leading-tight"
              style={{ color: G.dark }}
            >
              Social Impact is a Core Value,{" "}
              <span
                style={{
                  background: `linear-gradient(135deg, ${G.deep}, ${G.fresh})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Not a Campaign
              </span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-lg leading-relaxed max-w-3xl mx-auto"
              style={{ color: "#6B7280" }}
            >
              At NexeraTech Solutions, Social Impact is listed alongside Innovation First, Delivery Excellence,
              and Client Partnership as one of our four defining values. We give back through IShara Foundation,
              using technology for meaningful social change — because we believe that technology companies have
              both the capability and the responsibility to do so.
            </motion.p>

            <motion.div variants={stagger} className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {[
                { label: "Innovation First",     icon: "💡", active: false },
                { label: "Delivery Excellence",  icon: "🎯", active: false },
                { label: "Client Partnership",   icon: "🤝", active: false },
                { label: "Social Impact",        icon: "🌱", active: true  },
              ].map((val, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="rounded-2xl p-6 text-center transition-all duration-300"
                  style={{
                    background: val.active ? `linear-gradient(145deg, ${G.deep}, ${G.dark})` : G.cream,
                    border: `1.5px solid ${val.active ? G.mid : G.pale}`,
                    boxShadow: val.active ? `0 12px 32px rgba(45,90,39,0.30)` : "none",
                  }}
                >
                  <span className="text-3xl block mb-3">{val.icon}</span>
                  <p
                    className="text-sm font-bold"
                    style={{ color: val.active ? "#fff" : G.dark }}
                  >
                    {val.label}
                  </p>
                  {val.active && (
                    <span
                      className="inline-block mt-2 text-xs px-2 py-0.5 rounded-full font-semibold"
                      style={{ background: "rgba(125,196,110,0.25)", color: G.light }}
                    >
                      CSR Focus
                    </span>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════ CTA ══════════════════════════════════════════ */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background: `linear-gradient(160deg, ${G.dark} 0%, #0F2210 50%, ${G.deep} 100%)` }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] rounded-full pointer-events-none"
          style={{ background: `rgba(78,153,68,0.18)`, filter: "blur(120px)" }}
        />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div
              className="inline-flex items-center justify-center rounded-2xl px-8 py-5"
              style={{ background: "rgba(255,255,255,0.92)", boxShadow: `0 8px 40px rgba(0,0,0,0.35)` }}
            >
              <Image
                src="/IShara-Foundation/ISHARA_ FOUNDATION_LOGO.webp"
                alt="IShara Foundation"
                width={240}
                height={75}
                className="object-contain"
              />
            </div>
          </motion.div>

          <motion.span
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
            style={{ background: "rgba(125,196,110,0.15)", color: G.light, border: `1px solid rgba(125,196,110,0.35)` }}
          >
            <LeafDot /> CSR Initiative
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-white mb-5 mt-4 leading-tight"
          >
            Want to Learn More or Partner with IShara?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-lg mb-10"
            style={{ color: "rgba(255,255,255,0.60)" }}
          >
            Reach out to the NexeraTech team and we&apos;ll connect you with IShara Foundation directly.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold text-sm transition-all duration-300 hover:brightness-110"
              style={{
                background: `linear-gradient(135deg, ${G.mid} 0%, ${G.fresh} 60%, ${G.mid} 100%)`,
                backgroundSize: "200% auto",
                boxShadow: `0 8px 28px rgba(61,122,53,0.55)`,
              }}
            >
              Get in Touch <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
