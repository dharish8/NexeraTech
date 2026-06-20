"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Globe,
  Zap,
  Heart,
  Users,
  Target,
  Eye,
  CheckCircle,
  MapPin,
  Facebook,
  Linkedin,
  Twitter,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const displayFont = { fontFamily: "var(--font-display, 'Plus Jakarta Sans', sans-serif)" };

export default function AboutPage() {
  return (
    <div className="overflow-hidden">

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section
        className="relative pt-28 pb-20 overflow-hidden"
        style={{ backgroundColor: "#0B1120" }}
      >
        {/* Dot grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(232,93,4,0.18) 1.5px, transparent 1.5px)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* Ambient orbs */}
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute -right-40 top-0 w-[500px] h-[500px] rounded-full blur-[100px] opacity-15"
            style={{ background: "radial-gradient(circle, #E85D04 0%, transparent 70%)" }}
          />
          <div
            className="absolute -left-20 bottom-0 w-[350px] h-[350px] rounded-full blur-[100px] opacity-08"
            style={{ background: "radial-gradient(circle, #FF802B 0%, transparent 70%)" }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            {/* Breadcrumb */}
            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-5">
              <span className="text-white/40 text-sm">
                <Link href="/" className="hover:text-[#E85D04] transition-colors">Home</Link>
              </span>
              <span className="text-white/25">/</span>
              <span className="text-[#E85D04] text-sm font-medium">About Us</span>
            </motion.div>

            {/* Eyebrow */}
            <motion.div variants={fadeUp} className="mb-6">
              <span className="eyebrow-tag eyebrow-tag-dark">
                <span className="dot" />
                Who We Are
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.04] tracking-tight"
              style={displayFont}
            >
              Our Story, Our Mission,{" "}
              <span className="gradient-text">Our Team</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-white/50 leading-relaxed max-w-2xl" style={{ lineHeight: "1.75" }}>
              Founded in 2024 in Hyderabad, NexeraTech Solutions was built on a
              single conviction: world-class technology delivery should be
              accessible, agile, and aligned to real business outcomes — not
              just billable hours.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─── WHO WE ARE ─────────────────────────────────────────────────── */}
      <section
        className="relative section-py overflow-hidden"
        style={{
          backgroundColor: "#ffffff",
          backgroundImage: "radial-gradient(circle, rgba(232,93,4,0.07) 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] blur-[80px]"
          style={{ background: "rgba(232,93,4,0.04)" }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left: Visual Card with Hyderabad HQ image */}
            <div className="relative">
              <div
                className="relative w-full h-[400px] rounded-[40px_10px_40px_10px] overflow-hidden"
                style={{
                  border: "1px solid rgba(232,93,4,0.15)",
                  boxShadow: "0 24px 64px rgba(15,23,42,0.14)",
                }}
              >
                <Image
                  src="/about/Hyderabad-HQ.webp"
                  alt="NexeraTech Hyderabad HQ"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 via-[#0A1628]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 z-10 p-8 text-center">
                  <h3 className="text-2xl font-bold text-white mb-2" style={displayFont}>Hyderabad HQ</h3>
                  <p className="text-sm text-white/70 max-w-xs mx-auto">
                    Operating across global time zones (IST, EST, GMT) to ensure seamless delivery.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Narrative */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="mb-5">
                <span className="eyebrow-tag"><span className="dot" />About Us</span>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="text-4xl font-black text-[#0A1628] mb-6 leading-[1.05] tracking-tight"
                style={displayFont}
              >
                Next-Generation IT Services<br />
                <span className="gradient-text">from Hyderabad</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-gray-500 text-sm leading-relaxed mb-6">
                NexeraTech Solutions Private Limited is a next-generation IT services company. We were built on a single conviction: that world-class technology delivery should be accessible, agile, and aligned to real business outcomes.
              </motion.p>

              {/* Checklist */}
              <motion.ul variants={stagger} className="space-y-3 mb-8">
                {[
                  "Scalable Global Offshore Engineering Teams",
                  "Compliance-First Custom Software Development",
                  "Advanced AI/ML Labs & Custom Model Deployments",
                ].map((item, i) => (
                  <motion.li key={i} variants={fadeUp} className="flex items-center gap-3 text-sm text-[#0A1628] font-semibold">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(232,93,4,0.12)", border: "1px solid rgba(232,93,4,0.25)" }}
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-[#E85D04]" />
                    </div>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>

              {/* Stat + Founder card */}
              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-8 border-t border-gray-200 pt-6">
                <div className="flex items-center gap-3">
                  <span className="text-5xl font-extrabold text-[#E85D04] tracking-tight" style={displayFont}>25+</span>
                  <div>
                    <p className="text-xs font-bold text-[#0A1628] uppercase tracking-wider">Tech Experts</p>
                    <p className="text-[10px] text-gray-500">Delivering Outcomes</p>
                  </div>
                </div>
                <div
                  className="flex items-center gap-3 p-3.5 rounded-2xl"
                  style={{ background: "#F8FAFC", border: "1px solid rgba(15,23,42,0.08)", boxShadow: "0 2px 8px rgba(15,23,42,0.05)" }}
                >
                  <div className="w-10 h-10 rounded-full bg-[#0A1628] flex items-center justify-center text-white font-extrabold text-sm flex-shrink-0">
                    KD
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#0A1628]">K. Durga Prasad</p>
                    <p className="text-[9px] text-gray-500">Founder & MD · info@nexeratechsolutions.com</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── MISSION & VISION ────────────────────────────────────────────── */}
      <section
        className="relative section-py overflow-hidden"
        style={{
          backgroundColor: "#F8FAFC",
          backgroundImage: "radial-gradient(circle, rgba(15,23,42,0.10) 1.5px, transparent 1.5px)",
          backgroundSize: "26px 26px",
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] blur-[100px]"
          style={{ background: "rgba(232,93,4,0.05)" }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14"
          >
            <span className="eyebrow-tag mb-5"><span className="dot" />Purpose & Direction</span>
            <h2 className="text-4xl sm:text-5xl font-black text-[#0A1628] leading-[1.05] tracking-tight" style={displayFont}>
              Mission &{" "}<span className="gradient-text">Vision</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Target,
                label: "Mission Statement",
                color: "#E85D04",
                text: "To empower businesses globally with reliable, innovative, and outcome-driven technology services — delivered with the precision of a large firm and the care of a dedicated partner.",
              },
              {
                icon: Eye,
                label: "Vision Statement",
                color: "#0A1628",
                text: "To become the most trusted offshore IT partner for mid-market enterprises across the US and UK — known for AI-readiness, security expertise, and an uncompromising commitment to delivery.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group relative flex flex-col bg-white rounded-2xl p-8 overflow-hidden transition-all duration-300 hover:-translate-y-1.5"
                style={{ border: "1px solid rgba(15,23,42,0.08)", boxShadow: "0 2px 12px rgba(15,23,42,0.06)" }}
              >
                <span
                  className="absolute inset-x-0 top-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${item.color}, transparent)` }}
                />
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: item.color + "18" }}
                >
                  <item.icon className="w-7 h-7" style={{ color: item.color }} />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: item.color }}>
                  {item.label}
                </p>
                <p className="text-gray-600 text-base leading-relaxed">{item.text}</p>
                <span
                  className="absolute inset-x-0 bottom-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: item.color }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CORE VALUES ─────────────────────────────────────────────────── */}
      <section className="relative section-py overflow-hidden section-line-dark border-t border-white/05">
        {/* Ambient orbs */}
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] blur-[100px] opacity-10"
            style={{ background: "rgba(232,93,4,0.30)" }}
          />
          <div
            className="absolute -right-20 bottom-0 w-[400px] h-[300px] rounded-full blur-[100px] opacity-10"
            style={{ background: "radial-gradient(circle, rgba(232,93,4,0.25) 0%, transparent 70%)" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14"
          >
            <span className="eyebrow-tag eyebrow-tag-dark mb-5"><span className="dot" />What Drives Us</span>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-[1.05] tracking-tight" style={displayFont}>
              Our <span className="gradient-text">Values</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: Zap, title: "Innovation First", desc: "We embrace AI and emerging technology to build solutions that are ahead of the curve.", color: "#E85D04" },
              { icon: CheckCircle, title: "Delivery Excellence", desc: "We commit fully — on scope, on time, on quality. No exceptions.", color: "#E85D04" },
              { icon: Users, title: "Client Partnership", desc: "We treat every client engagement as a long-term relationship, not a transaction.", color: "#E85D04" },
              { icon: Heart, title: "Social Impact", desc: "We give back through IShara Foundation, using technology for meaningful social change.", color: "#E85D04" },
            ].map((value, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group relative text-center rounded-2xl p-7 overflow-hidden transition-all duration-300 hover:-translate-y-1.5"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${value.color}40`;
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                }}
              >
                <span
                  className="absolute inset-x-0 top-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${value.color}, transparent)` }}
                />
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: value.color + "25" }}
                >
                  <value.icon className="w-7 h-7" style={{ color: value.color }} />
                </div>
                <h3 className="font-bold text-white mb-3" style={displayFont}>{value.title}</h3>
                <p className="text-sm text-white/45 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── MARKETS ────────────────────────────────────────────────────── */}
      <section
        className="relative section-py overflow-hidden"
        style={{
          backgroundColor: "#ffffff",
          backgroundImage: "radial-gradient(circle, rgba(232,93,4,0.07) 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14"
          >
            <span className="eyebrow-tag mb-5"><span className="dot" />Global Reach</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0A1628] leading-[1.06] tracking-tight" style={displayFont}>
              Where We Operate
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { flag: "🇺🇸", market: "United States", detail: "Offshore engineering teams for US-based clients. EST timezone alignment. Series A to enterprise scale.", color: "#E85D04", image: "/about/Global-Reach/United-States.webp" },
              { flag: "🇬🇧", market: "United Kingdom", detail: "Healthcare tech, SaaS development, and IAM implementation for UK enterprises. GMT timezone.", color: "#E85D04", image: "/about/Global-Reach/United-Kingdom.webp" },
              { flag: "🇮🇳", market: "India (HQ)", detail: "Hyderabad delivery center. Payroll, EOR, and domestic software development for Indian enterprises.", color: "#E85D04", image: "/about/Global-Reach/India-Gate.webp" },
            ].map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group relative bg-white rounded-2xl overflow-hidden text-center transition-all duration-300 hover:-translate-y-1.5"
                style={{ border: "1px solid rgba(15,23,42,0.08)", boxShadow: "0 2px 12px rgba(15,23,42,0.06)" }}
              >
                <span
                  className="absolute inset-x-0 top-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                  style={{ background: `linear-gradient(90deg, transparent, ${m.color}, transparent)` }}
                />
                {/* Market image */}
                <div className="h-40 relative overflow-hidden">
                  <Image
                    src={m.image}
                    alt={m.market}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className="absolute top-3 right-3 text-3xl">{m.flag}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3" style={{ color: m.color, ...displayFont }}>{m.market}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{m.detail}</p>
                  <div className="flex items-center justify-center gap-2 mt-4">
                    <MapPin className="w-4 h-4" style={{ color: m.color }} />
                    <span className="text-xs font-medium" style={{ color: m.color }}>Active market</span>
                  </div>
                </div>
                <span
                  className="absolute inset-x-0 bottom-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: m.color }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TEAM SECTION ─────────────────────────────────────────────────── */}
      <section
        className="relative section-py overflow-hidden"
        style={{
          backgroundColor: "#F8FAFC",
          backgroundImage: "radial-gradient(circle, rgba(15,23,42,0.10) 1.5px, transparent 1.5px)",
          backgroundSize: "26px 26px",
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] blur-[100px]"
          style={{ background: "rgba(232,93,4,0.05)" }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16"
          >
            <span className="eyebrow-tag mb-5"><span className="dot" />Experts Behind Your Solutions</span>
            <h2 className="text-4xl lg:text-5xl font-black text-[#0A1628] leading-[1.05] tracking-tight" style={displayFont}>
              Our <span className="gradient-text">Expert</span> Team
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "K. Durga Prasad", role: "Founder & Managing Director", initials: "KD" },
              { name: "Sarah Jenkins", role: "Head of Global Delivery (US/UK)", initials: "SJ" },
              { name: "Arvind Naidu", role: "Chief Technology Officer (CTO)", initials: "AN" },
              { name: "Rachel Stevens", role: "Principal IAM & Identity Architect", initials: "RS" },
            ].map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-white rounded-2xl overflow-hidden p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_56px_rgba(15,23,42,0.14)]"
                style={{ border: "1px solid rgba(15,23,42,0.08)", boxShadow: "0 2px 12px rgba(15,23,42,0.06)" }}
              >
                <span
                  className="absolute inset-x-0 top-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(90deg, transparent, #E85D04, transparent)" }}
                />
                <div
                  className="w-full h-52 rounded-xl flex items-center justify-center mb-5 relative overflow-hidden"
                  style={{ background: "linear-gradient(145deg, #0A1628 0%, #0F1E35 50%, #132238 100%)" }}
                >
                  <div className="absolute inset-x-0 top-0 h-[1px]" style={{ background: "linear-gradient(90deg, transparent, rgba(232,93,4,0.5), transparent)" }} />
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-08"
                    style={{ backgroundImage: "radial-gradient(circle, rgba(232,93,4,0.3) 1px, transparent 1px)", backgroundSize: "18px 18px" }}
                  />
                  <span className="text-4xl font-extrabold text-[#E85D04] tracking-wider font-mono relative z-10">
                    {member.initials}
                  </span>
                </div>
                <h4 className="text-[#0A1628] font-bold text-base mb-1" style={displayFont}>{member.name}</h4>
                <p className="text-xs text-[#E85D04] font-semibold mb-4">{member.role}</p>
                <div className="flex items-center justify-center gap-2">
                  {[Facebook, Linkedin, Twitter].map((Icon, idx) => (
                    <a
                      key={idx}
                      href="#"
                      aria-label="Social Link"
                      className="w-8 h-8 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 transition-all duration-200 hover:scale-110"
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "linear-gradient(135deg, #E85D04, #FF802B)";
                        (e.currentTarget as HTMLElement).style.borderColor = "transparent";
                        (e.currentTarget as HTMLElement).style.color = "#fff";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "";
                        (e.currentTarget as HTMLElement).style.borderColor = "";
                        (e.currentTarget as HTMLElement).style.color = "";
                      }}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </a>
                  ))}
                </div>
                <span
                  className="absolute inset-x-0 bottom-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "#E85D04" }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT WE DO ─────────────────────────────────────────────────── */}
      <section
        className="relative section-py overflow-hidden"
        style={{
          backgroundColor: "#ffffff",
          backgroundImage: "radial-gradient(circle, rgba(232,93,4,0.06) 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14"
          >
            <span className="eyebrow-tag mb-5"><span className="dot" />Service Portfolio</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0A1628] leading-[1.06] tracking-tight" style={displayFont}>
              Five Core Practice Areas
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { n: "01", title: "Offshore & Onshore IT Services", desc: "Dedicated engineering squads and onshore engagement models. Our flagship offering.", icon: Globe, href: "/services/offshore-it-services" },
              { n: "02", title: "Software Development", desc: "End-to-end product engineering from discovery to post-launch support.", icon: Zap, href: "/services/software-development" },
              { n: "03", title: "AI / ML Services", desc: "LLM integration, RAG systems, custom ML models, and generative AI applications.", icon: Target, href: "/services/ai-ml-services" },
              { n: "04", title: "IAM & Cybersecurity", desc: "Okta, Azure AD, Zero Trust, and compliance-first identity management.", icon: Eye, href: "/services/iam-cybersecurity" },
              { n: "05", title: "Payroll & EOR", desc: "End-to-end payroll processing and Employer of Record services for India operations.", icon: Users, href: "/services/payroll-eor" },
              { n: "+7", title: "Also Available", desc: "Staff Augmentation · Cloud Services · Managed IT · QA · RPO · Finance & Accounting · Digital Transformation", icon: Heart, href: "/services" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  href={item.href}
                  className="group relative flex bg-white rounded-2xl p-7 overflow-hidden h-full transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(232,93,4,0.12)]"
                  style={{ border: "1px solid rgba(15,23,42,0.08)", boxShadow: "0 2px 12px rgba(15,23,42,0.06)" }}
                >
                  <span
                    className="absolute inset-x-0 top-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "linear-gradient(90deg, transparent, #E85D04, transparent)" }}
                  />
                  <div className="flex items-start gap-4">
                    <span className="text-3xl font-bold text-[#E85D04]/20 font-mono flex-shrink-0 transition-colors duration-300 group-hover:text-[#E85D04]" style={displayFont}>
                      {item.n}
                    </span>
                    <div>
                      <h3 className="font-bold text-[#0A1628] mb-2 group-hover:text-[#E85D04] transition-colors" style={displayFont}>
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  <span
                    className="absolute inset-x-0 bottom-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "#E85D04" }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ────────────────────────────────────────────────────────── */}
      <section
        className="relative py-20 overflow-hidden border-t border-white/05"
        style={{ backgroundColor: "#070D19" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full blur-[100px] opacity-12"
          style={{ background: "radial-gradient(circle, rgba(232,93,4,0.40) 0%, transparent 70%)" }}
        />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="mb-6">
              <span className="eyebrow-tag eyebrow-tag-dark"><span className="dot" />Let&apos;s Work Together</span>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-4xl sm:text-5xl font-black text-white mb-4 leading-[1.04] tracking-tight"
              style={displayFont}
            >
              Ready to Partner with<br />
              <span className="gradient-text">NexeraTech?</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/50 text-lg mb-8">
              Let&apos;s discuss how we can support your technology goals.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="glow-btn">
                Get in Touch <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/case-studies" className="glow-btn glow-btn-ghost">
                View Case Studies
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
