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
        className="relative min-h-screen flex items-center overflow-hidden py-24 sm:py-32"
        style={{ background: `linear-gradient(165deg, #0A1F0A 0%, ${G.dark} 40%, ${G.deep} 80%, #153615 100%)` }}
      >
        {/* Parallax background patterns and glows */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ y: bgY }}
        >
          {/* Natural organic radial glows */}
          <div
            className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full"
            style={{ background: `radial-gradient(circle, ${G.light}20 0%, transparent 65%)` }}
          />
          <div
            className="absolute -bottom-20 -left-20 w-[600px] h-[600px] rounded-full"
            style={{ background: `radial-gradient(circle, ${G.mid}15 0%, transparent 65%)` }}
          />

          {/* Subtle dot grid */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(125,196,110,0.12) 1.5px, transparent 1.5px)`,
              backgroundSize: "32px 32px",
            }}
          />

          {/* Clean decorative organic line overlays */}
          <svg className="absolute right-[-40px] top-[-40px] w-[500px] h-[500px] opacity-[0.08]" viewBox="0 0 500 500" fill="none">
            <circle cx="250" cy="250" r="220" stroke={G.light} strokeWidth="1" strokeDasharray="8 12" />
            <circle cx="250" cy="250" r="170" stroke={G.light} strokeWidth="0.6" strokeDasharray="4 8" />
            <circle cx="250" cy="250" r="120" stroke={G.light} strokeWidth="0.4" />
          </svg>
        </motion.div>

        {/* Main hero content */}
        <motion.div
          className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          style={{ y: textY }}
        >
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">

            {/* ── LEFT COLUMN ────────────────────────────────────────────── */}
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              {/* Breadcrumb */}
              <motion.div variants={fadeUp} className="flex items-center gap-2 mb-8 text-sm">
                <Link href="/" className="text-white/35 hover:text-white transition-colors">Home</Link>
                <span className="text-white/20">/</span>
                <span className="font-medium" style={{ color: G.light }}>IShara Foundation</span>
              </motion.div>

              {/* Eyebrow pill */}
              <motion.span
                variants={fadeUp}
                className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.15em] mb-6"
                style={{
                  background: "rgba(125,196,110,0.12)",
                  border: "1px solid rgba(125,196,110,0.35)",
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
                className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.08] tracking-tight mb-6"
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
                style={{ height: "3px", background: `linear-gradient(90deg, ${G.light}, transparent)`, maxWidth: "240px", borderRadius: "99px" }}
              />

              <motion.p
                variants={fadeUp}
                className="text-base text-white/70 leading-[1.75] mb-8 max-w-lg"
              >
                NexeraTech Solutions partners with{" "}
                <span className="font-semibold text-emerald-300">IShara Foundation</span>{" "}
                to advance digital inclusion, education, and community development across India — because social impact is one of our core values.
              </motion.p>

              {/* CTA buttons */}
              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 mb-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold text-sm transition-all duration-300 hover:brightness-110 shadow-lg hover:shadow-xl"
                  style={{
                    background: `linear-gradient(135deg, ${G.deep} 0%, ${G.fresh} 100%)`,
                    boxShadow: `0 8px 24px rgba(45,90,39,0.25)`,
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
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(125,196,110,0.1)"; }}
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
                    <span className="text-sm font-semibold text-white/60">{item.text}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* ── RIGHT COLUMN ───────────────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="relative mt-12 lg:mt-0"
            >
              {/* Image Frame with shadow and rounded corners */}
              <div className="relative max-w-[560px] mx-auto lg:mr-0">
                {/* Visual shadow container */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-emerald-800/10 to-yellow-500/5 rounded-[2.5rem] blur-xl -z-10" />

                {/* Main image container */}
                <div className="relative rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl">
                  <Image
                    src="/IShara-Foundation/landing-page.webp"
                    alt="IShara Foundation Support for Poor"
                    width={560}
                    height={480}
                    className="w-full h-[460px] object-cover transition-transform duration-700 hover:scale-105"
                    priority
                  />
                  {/* Warm gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none" />
                  
                  {/* Text overlay on image bottom-right */}
                  <div className="absolute bottom-6 right-6 text-white text-right z-10">
                    <p className="text-xs uppercase tracking-widest font-semibold opacity-75">Grassroots Support</p>
                    <h4 className="text-lg font-bold">Empowering Communities</h4>
                  </div>
                </div>

                {/* Overlapping Foundation Logo Card */}
                <div
                  className="absolute -bottom-6 left-4 sm:-left-6 bg-white rounded-2xl p-5 border border-stone-100 flex flex-col items-center z-20"
                  style={{
                    boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
                  }}
                >
                  <Image
                    src="/IShara-Foundation/ISHARA_ FOUNDATION_LOGO.webp"
                    alt="IShara Foundation Logo"
                    width={140}
                    height={44}
                    className="object-contain"
                  />
                  <div className="flex items-center gap-1.5 mt-3">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: G.fresh }} />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500">Official CSR Partner</span>
                  </div>
                </div>

                {/* Overlapping Active Stats Badge */}
                <div
                  className="absolute -top-6 right-4 sm:-right-6 bg-white rounded-2xl p-4 border border-stone-100 flex items-center gap-3 z-20"
                  style={{
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  }}
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-emerald-50 text-emerald-800 text-lg">
                    🌱
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400 leading-none">Lives Impacted</p>
                    <p className="text-sm font-bold text-stone-800 mt-1">10,000+ and growing</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: "rgba(255,255,255,0.25)" }}>Scroll</span>
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="h-8 w-5 rounded-full flex items-start justify-center pt-1.5"
            style={{ border: "1px solid rgba(255,255,255,0.25)" }}
          >
            <div className="h-1.5 w-1.5 rounded-full" style={{ background: G.light, opacity: 0.5 }} />
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════ STAT STRIP ══════════════════════════════════ */}
      <section 
        id="about-ishara" 
        style={{ background: G.cream }} 
        className="py-20 relative z-20 rounded-t-[3.5rem] -mt-14 shadow-[0_-24px_60px_rgba(10,31,10,0.18)]"
      >
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
              { 
                icon: Globe, 
                title: "Digital Inclusion", 
                desc: "Making technology and internet access available to underserved communities across India.",
                image: "/IShara-Foundation/What-We-Support/Digital-Inclusion.webp"
              },
              { 
                icon: BookOpen, 
                title: "Education & Literacy", 
                desc: "Digital literacy programs, computer skills training, and educational resources for youth.",
                image: "/IShara-Foundation/What-We-Support/Education-Literacy.webp"
              },
              { 
                icon: Users, 
                title: "Skills & Employment", 
                desc: "Technology skills training and career development programs to enable economic mobility.",
                image: "/IShara-Foundation/What-We-Support/Skills-Employment.webp"
              },
              { 
                icon: Sprout, 
                title: "Community Development", 
                desc: "Using technology infrastructure to support community services and development projects.",
                image: "/IShara-Foundation/What-We-Support/Community-Development.webp"
              },
            ].map((area, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="group bg-white rounded-2xl overflow-hidden border cursor-default transition-shadow flex flex-col h-full animate-fadeIn"
                style={{
                  border: `1px solid ${G.pale}`,
                  boxShadow: "0 2px 16px rgba(45,90,39,0.06)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 16px 48px rgba(45,90,39,0.12)`;
                  (e.currentTarget as HTMLElement).style.borderColor = `${G.light}80`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 16px rgba(45,90,39,0.06)";
                  (e.currentTarget as HTMLElement).style.borderColor = G.pale;
                }}
              >
                {/* Card Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Floating Icon Indicator */}
                  <div 
                    className="absolute bottom-3 left-3 w-10 h-10 rounded-xl flex items-center justify-center shadow-md backdrop-filter backdrop-blur-md"
                    style={{ background: "rgba(255, 255, 255, 0.9)" }}
                  >
                    <area.icon className="w-5 h-5" style={{ color: G.deep }} />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow text-left">
                  <h3 className="font-bold text-lg mb-2" style={{ color: G.dark }}>
                    {area.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-stone-600 flex-grow">
                    {area.desc}
                  </p>
                </div>
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
