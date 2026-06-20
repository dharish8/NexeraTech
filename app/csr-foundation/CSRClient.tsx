"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Leaf, Users, Globe, BookOpen, CheckCircle, Heart, Sprout, TreePine } from "lucide-react";

/* ─── Ishara green palette ────────────────────────────────────────────────── */
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

/* ─── Reusable leaf decoration ───────────────────────────────────────────── */
function LeafDot({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-block w-1.5 h-1.5 rounded-full animate-pulse ${className}`}
      style={{ background: G.fresh }}
    />
  );
}

export default function CSRClient() {
  return (
    <div className="overflow-hidden" style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}>

      {/* ══════════════════════════ HERO ════════════════════════════════════ */}
      <section
        className="relative pt-32 pb-24 overflow-hidden"
        style={{
          background: `linear-gradient(160deg, ${G.dark} 0%, ${G.deep} 55%, #1E4020 100%)`,
        }}
      >
        {/* Decorative organic circles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full opacity-10"
            style={{ background: `radial-gradient(circle, ${G.light} 0%, transparent 70%)` }}
          />
          <div
            className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full opacity-8"
            style={{ background: `radial-gradient(circle, ${G.mid} 0%, transparent 70%)` }}
          />
          {/* Subtle dot grid */}
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: `radial-gradient(circle, ${G.light} 1px, transparent 1px)`,
              backgroundSize: "36px 36px",
            }}
          />
          {/* Wavy leaf-like decorative lines */}
          <svg className="absolute right-0 top-0 w-[480px] h-[480px] opacity-6" viewBox="0 0 480 480" fill="none">
            <circle cx="240" cy="240" r="200" stroke={G.light} strokeWidth="1" strokeDasharray="8 12" />
            <circle cx="240" cy="240" r="150" stroke={G.light} strokeWidth="0.5" strokeDasharray="4 8" />
            <circle cx="240" cy="240" r="100" stroke={G.light} strokeWidth="0.5" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <motion.div
            initial="hidden" animate="visible" variants={stagger}
            className="flex flex-col items-center text-center"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-8 text-sm">
              <Link href="/" className="text-white/40 hover:text-white transition-colors">Home</Link>
              <span className="text-white/25">/</span>
              <span className="font-medium" style={{ color: G.light }}>IShara Foundation</span>
            </motion.div>

            {/* Logo */}
            <motion.div
              variants={scaleIn}
              className="mb-10 relative"
            >
              <div
                className="relative inline-flex items-center justify-center"
                style={{
                  background: "rgba(255,255,255,0.95)",
                  borderRadius: "2rem",
                  padding: "1.5rem 2.5rem",
                  boxShadow: `0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.15)`,
                }}
              >
                <Image
                  src="/IShara-Foundation/ISHARA_ FOUNDATION_LOGO.webp"
                  alt="IShara Foundation Logo"
                  width={320}
                  height={100}
                  className="object-contain"
                  priority
                />
              </div>
              {/* Floating glow ring */}
              <div
                className="absolute inset-0 rounded-3xl -z-10 blur-2xl opacity-40 scale-110"
                style={{ background: G.light }}
              />
            </motion.div>

            {/* Eyebrow pill */}
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
              style={{
                background: "rgba(125,196,110,0.18)",
                border: `1px solid rgba(125,196,110,0.4)`,
                color: G.light,
              }}
            >
              <LeafDot />
              NexeraTech&apos;s CSR Initiative
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="text-5xl lg:text-7xl font-bold text-white mb-5 leading-tight"
              style={{ letterSpacing: "-0.02em" }}
            >
              Technology for{" "}
              <span
                style={{
                  background: `linear-gradient(135deg, ${G.light} 0%, ${G.pale} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Meaningful
              </span>{" "}
              <br className="hidden lg:block" />Social Change
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-xl text-white/65 max-w-2xl mx-auto leading-relaxed"
            >
              NexeraTech Solutions partners with IShara Foundation to advance digital inclusion,
              education, and community development across India.
            </motion.p>

            {/* CTA row */}
            <motion.div variants={fadeUp} className="flex items-center gap-4 mt-10">
              <Link href="/contact" className="glow-btn" style={{
                background: `linear-gradient(135deg, ${G.mid} 0%, ${G.fresh} 60%, ${G.mid} 100%)`,
                backgroundSize: "200% auto",
                boxShadow: `0 8px 28px rgba(61,122,53,0.50)`,
              }}>
                Get Involved <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                className="glow-btn-ghost"
                style={{ border: `1px solid rgba(125,196,110,0.35)`, color: G.light }}
              >
                Learn More
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{ background: `linear-gradient(to bottom, transparent, ${G.cream})` }}
        />
      </section>

      {/* ══════════════════════ STAT STRIP ══════════════════════════════════ */}
      <section style={{ background: G.cream }} className="py-16 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 divide-y sm:divide-y-0 sm:divide-x"
            style={{ borderRadius: "1.5rem", border: `1px solid ${G.pale}`, background: "#fff", boxShadow: "0 4px 32px rgba(45,90,39,0.08)" }}
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

              {/* Leaf-styled bullet points */}
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
                {/* Background pattern */}
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
                  {/* Logo on dark bg */}
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

                  {/* Small stat pills */}
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
        {/* Decorative blob */}
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

            {/* Four values visual */}
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
          {/* Logo centred */}
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
              className="glow-btn"
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
