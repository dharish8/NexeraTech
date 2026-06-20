"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle,
  Globe,
  Code2,
  Brain,
  Shield,
  Banknote,
  Users,
  Cloud,
  Monitor,
  UserCheck,
  BarChart3,
  Zap,
  Cpu,
  Database,
  Layers,
  Terminal,
  Search,
  PenTool,
  Code,
  CheckSquare,
  Rocket,
  Settings,
  ChevronRight,
  Lock,
  Key,
  TrendingUp,
} from "lucide-react";
import { servicesDetailsMap } from "@/lib/services-details-data";
import type { ChallengeDetail } from "@/lib/services-details-data";
import type { Service } from "@/lib/services-data";

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Code2,
  Brain,
  Shield,
  Banknote,
  Users,
  Cloud,
  Monitor,
  CheckCircle,
  UserCheck,
  BarChart3,
  Zap,
  Cpu,
  Database,
  Layers,
  Terminal,
  Search,
  PenTool,
  Code,
  CheckSquare,
  Rocket,
  Settings,
  ChevronRight,
  Lock,
  Key,
  TrendingUp,
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const displayFont = { fontFamily: "var(--font-display, 'Plus Jakarta Sans', sans-serif)" };

const ease: any = [0.22, 1, 0.36, 1];

interface Props {
  service: Service;
  related: Service[];
}

const specialtyImages: Record<string, string> = {
  "offshore-it-services": "/Our-Specialty/Offshore-IT-Delivery.webp",
  "software-development": "/Our-Specialty/Software-Development.webp",
  "ai-ml-services": "/Our-Specialty/AI-ML-Integration.webp",
  "iam-cybersecurity": "/Our-Specialty/IAM-Cybersecurity.webp",
  "payroll-eor": "/Our-Specialty/Payroll-Employer-of-Record.webp",
  "staff-augmentation": "/Our-Specialty/Staff-Augmentation.webp",
  "cloud-services": "/Our-Specialty/Cloud-Services.webp",
  "managed-it": "/Our-Specialty/Managed-IT.webp",
  "qa-testing": "/Our-Specialty/QA-Testing.webp",
  "recruitment-rpo": "/Our-Specialty/Recruitmen-RPO.webp",
  "finance-accounting-outsourcing": "/Our-Specialty/Finance-Accounting-Outsourcing.webp",
  "digital-transformation": "/Our-Specialty/Digital-Transformation.webp",
};

export default function ServiceDetailClient({ service, related }: Props) {
  const Icon = iconMap[service.icon] || Globe;
  const heroImage = specialtyImages[service.slug];

  const [activeTechTab, setActiveTechTab] = useState<"frontend" | "backend" | "db-cloud" | "devops">("frontend");
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const detailConfig = servicesDetailsMap[service.slug] || {
    features: service.features.map(f => ({ title: f, desc: "Key capability designed for dynamic operations.", iconName: "CheckCircle" })),
    useCases: service.useCases.map(u => ({ title: u, highlight: "", desc: "Proven setup in client projects.", iconName: "CheckCircle" })),
    technologies: [],
    featureSubtitle: "End-to-end capabilities built with premium performance, scalability, and security standards.",
    useCaseSubtitle: "Find out when and why clients select this service."
  };

  return (
    <div className="overflow-hidden">

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex flex-col justify-center overflow-hidden"
        style={{ backgroundColor: "#0B1120" }}
      >
        {/* Grid bg */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Full-bleed background image */}
        {heroImage && (
          <div className="absolute inset-0 z-0">
            <Image
              src={heroImage}
              alt={service.shortTitle}
              fill
              priority
              className="object-cover object-center"
              style={{ opacity: 0.24 }}
              sizes="100vw"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(11,17,32,0.92) 0%, rgba(11,17,32,0.55) 40%, rgba(11,17,32,0.65) 70%, rgba(11,17,32,0.97) 100%)" }} />
            <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(11,17,32,0.85) 0%, rgba(11,17,32,0.4) 50%, transparent 100%)" }} />
          </div>
        )}

        {/* Glowing orbs */}
        <motion.div
          aria-hidden
          animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.18, 0.08] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute top-[-80px] right-[-60px] w-[700px] h-[600px] rounded-full blur-[130px]"
          style={{ background: `${service.color}25`, zIndex: 1 }}
        />
        <motion.div
          aria-hidden
          animate={{ scale: [1, 1.15, 1], opacity: [0.06, 0.13, 0.06] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="pointer-events-none absolute bottom-0 left-[-80px] w-[500px] h-[400px] rounded-full blur-[110px]"
          style={{ background: `${service.color}15`, zIndex: 1 }}
        />

        <div className="relative z-10 mx-auto max-w-[1280px] w-full px-6 sm:px-8 lg:px-12 pt-36 pb-24">
          
          {/* Breadcrumb - inside z-10 */}
          <div className="flex items-center gap-2 mb-8 text-sm">
            <Link href="/" className="text-white/40 hover:text-[#E85D04] transition-colors">Home</Link>
            <span className="text-white/25">/</span>
            <Link href="/services" className="text-white/40 hover:text-[#E85D04] transition-colors">Services</Link>
            <span className="text-white/25">/</span>
            <span className="font-medium text-white/80">{service.shortTitle}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left text */}
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease }}
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] mb-7"
                style={{
                  border: `1px solid ${service.color}45`,
                  background: `${service.color}18`,
                  color: service.color,
                }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
                {service.shortTitle}
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, ease, delay: 0.1 }}
                className="font-extrabold leading-[1.06] tracking-tight text-white mb-6"
                style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", ...displayFont }}
              >
                {(() => {
                  const titleWords = service.title.split(" ");
                  const lastWord = titleWords.pop() || "";
                  const mainTitle = titleWords.join(" ");
                  return (
                    <>
                      {mainTitle}{" "}
                      <span
                        style={{
                          background: `linear-gradient(135deg, ${service.color} 0%, #FFF4EC 100%)`,
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        {lastWord}
                      </span>
                    </>
                  );
                })()}
              </motion.h1>

              <motion.div
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.9, ease, delay: 0.55 }}
                style={{
                  height: "1.5px",
                  background: `linear-gradient(90deg, ${service.color}, transparent)`,
                  maxWidth: "340px",
                  marginBottom: "1.6rem",
                }}
              />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease, delay: 0.28 }}
                className="text-base sm:text-lg leading-[1.8] mb-10 max-w-lg"
                style={{ color: "rgba(255,255,255,0.68)" }}
              >
                {service.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease, delay: 0.42 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-bold text-sm transition-all duration-300 shadow-lg hover:brightness-110"
                  style={{
                    backgroundColor: service.color,
                    boxShadow: `0 8px 32px ${service.color}50`,
                    textDecoration: "none",
                  }}
                >
                  Explore Solutions
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-300"
                  style={{
                    border: "1.5px solid rgba(255,255,255,0.22)",
                    color: "rgba(255,255,255,0.82)",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.07)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; }}
                >
                  See Case Studies
                </Link>
              </motion.div>
            </div>

            {/* Right floating card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.0, ease, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div
                className="relative rounded-[28px] overflow-hidden bg-white/5"
                style={{
                  height: "520px",
                  boxShadow: "0 32px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.08)",
                }}
              >
                {heroImage ? (
                  <Image
                    src={heroImage}
                    alt={service.shortTitle}
                    fill
                    className="object-cover object-center"
                    style={{ opacity: 0.88 }}
                    sizes="520px"
                  />
                ) : (
                  <div
                    className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden"
                    style={{
                      background: `${service.color}10`,
                    }}
                  >
                    <div
                      aria-hidden
                      className="absolute inset-0 opacity-15"
                      style={{ backgroundImage: `radial-gradient(circle, ${service.color}55 1px, transparent 1px)`, backgroundSize: "20px 20px" }}
                    />
                    <Icon className="w-24 h-24 text-white/10 animate-float" />
                  </div>
                )}
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 50%, rgba(11,17,32,0.7) 100%)" }} />
                
                <div
                  className="absolute bottom-5 left-5 px-4 py-2.5 rounded-xl flex items-center gap-2.5 backdrop-blur-md"
                  style={{
                    background: "rgba(11,17,32,0.65)",
                    border: "1px solid rgba(255,255,255,0.14)",
                  }}
                >
                  <span className="h-2 w-2 rounded-full animate-pulse" style={{ backgroundColor: service.color }} />
                  <span className="text-white text-[11px] font-bold uppercase tracking-wider">{service.shortTitle}</span>
                </div>
                
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-5 right-5 rounded-2xl px-4 py-3"
                  style={{
                    background: "rgba(11,17,32,0.7)",
                    border: `1px solid ${service.color}55`,
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <div className="text-lg font-extrabold text-white leading-none">{service.heroStat.value}</div>
                  <div className="text-[10px] mt-1.5 font-semibold uppercase tracking-wider" style={{ color: service.color }}>
                    {service.heroStat.label}
                  </div>
                </motion.div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-full -z-10" style={{ background: `${service.color}15`, filter: "blur(32px)" }} />
              <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full -z-10" style={{ background: `${service.color}10`, filter: "blur(24px)" }} />
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: "rgba(255,255,255,0.28)" }}>Scroll</span>
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="h-8 w-5 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
          >
            <div className="h-1.5 w-1.5 rounded-full bg-white/35" />
          </motion.div>
        </motion.div>
      </section>

      {/* ─── CHALLENGES WE SOLVE ────────────────────────────────────────── */}
      {detailConfig.challenges && detailConfig.challenges.length > 0 && (
        <section
          className="relative py-24 overflow-hidden"
          style={{ backgroundColor: "#0B1120" }}
        >
          {/* Animated grid background */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
            }}
          />
          {/* Glow blobs */}
          <motion.div
            aria-hidden
            animate={{ scale: [1, 1.15, 1], opacity: [0.06, 0.14, 0.06] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px]"
            style={{ background: `${service.color}30` }}
          />
          <motion.div
            aria-hidden
            animate={{ scale: [1, 1.1, 1], opacity: [0.04, 0.10, 0.04] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 5 }}
            className="pointer-events-none absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px]"
            style={{ background: "rgba(255,255,255,0.06)" }}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease }}
              className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16"
            >
              <span
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] mb-6"
                style={{ border: `1px solid ${service.color}45`, background: `${service.color}18`, color: service.color }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
                Challenges We Solve
              </span>
              <h2
                className="font-extrabold text-white leading-tight tracking-tight mb-4"
                style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.75rem)", ...displayFont }}
              >
                Common Pain Points{" "}
                <span style={{ background: `linear-gradient(135deg, ${service.color} 0%, #FFF4EC 100%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  We Eliminate
                </span>
              </h2>
              <p className="text-white/55 text-sm max-w-xl leading-relaxed">
                {detailConfig.challengeSubtitle || "Real problems our clients face — and exactly how we solve them."}
              </p>
            </motion.div>

            {/* Challenges grid */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {(detailConfig.challenges as ChallengeDetail[]).map((ch, idx) => (
                <motion.div
                  key={idx}
                  variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } } }}
                  className="group relative rounded-2xl p-7 overflow-hidden cursor-default"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    transition: "border-color 0.3s, background 0.3s, transform 0.3s",
                  }}
                  whileHover={{ y: -4 }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${service.color}50`;
                    (e.currentTarget as HTMLElement).style.background = `${service.color}08`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)";
                  }}
                >
                  {/* Top accent on hover */}
                  <span
                    className="absolute inset-x-0 top-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(90deg, transparent, ${service.color}, transparent)` }}
                  />
                  {/* Index number */}
                  <span
                    className="inline-block text-xs font-black uppercase tracking-[0.2em] mb-4"
                    style={{ color: service.color }}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-white font-bold text-lg mb-2 leading-snug" style={displayFont}>
                    {ch.label}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">{ch.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* ─── WHAT'S INCLUDED ───────────────────────────────────────────────── */}
      <section
        className="relative py-24 overflow-hidden"
        style={{
          background: "#F8FAFC",
          backgroundImage: "radial-gradient(circle, rgba(15,23,42,0.07) 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
      >
        <div aria-hidden className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[260px] blur-[90px]" style={{ background: `${service.color}06` }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <span
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.18em] mb-5"
              style={{ background: service.color + "12", color: service.color, border: `1px solid ${service.color}30` }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: service.color }} />
              What&apos;s Included
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0A1628] mb-3 leading-tight" style={displayFont}>
              Key Features &amp; Capabilities
            </h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">
              {detailConfig.featureSubtitle || "End-to-end capabilities built with premium performance, scalability, and security standards."}
            </p>
          </motion.div>

          {/* Bento-style feature grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {detailConfig.features.map((feat, i) => {
              const FeatIcon = iconMap[feat.iconName] || CheckCircle;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-[0_20px_50px_rgba(232,93,4,0.12)] transition-all duration-300 p-7 flex flex-col overflow-hidden"
                  style={{ '--accent-color': service.color } as React.CSSProperties}
                  whileHover={{ y: -6 }}
                >
                  {/* Hover bg gradient */}
                  <span
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl pointer-events-none"
                    style={{ background: `linear-gradient(135deg, ${service.color}08 0%, transparent 60%)` }}
                  />
                  {/* Top accent */}
                  <span
                    className="absolute inset-x-0 top-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl"
                    style={{ background: `linear-gradient(90deg, transparent, ${service.color}, transparent)` }}
                  />
                  {/* Left accent */}
                  <span
                    className="absolute inset-y-0 left-0 w-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-2xl"
                    style={{ background: service.color }}
                  />
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:bg-[var(--accent-color)] group-hover:text-white"
                    style={{ background: service.color + "12", color: service.color }}
                  >
                    <FeatIcon className="w-6 h-6 transition-colors duration-300" />
                  </div>
                  <h3 className="font-bold text-[#0A1628] text-base mb-2 leading-tight group-hover:text-[#0A1628] transition-colors" style={displayFont}>
                    {feat.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">{feat.desc}</p>
                  {/* Bottom badge */}
                  <div className="mt-5 pt-4 border-t border-gray-50 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: service.color }} />
                    <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: service.color }}>Included</span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Technologies bar */}
          {detailConfig.technologies && detailConfig.technologies.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row sm:items-center gap-4 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm mt-8"
            >
              <div className="flex items-center gap-2 text-xs font-black text-[#0A1628] whitespace-nowrap">
                <span className="text-[#E85D04] font-mono font-bold text-sm">&lt;/&gt;</span>
                Technologies We Use
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {detailConfig.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-full text-[11px] text-gray-600 font-bold shadow-sm hover:border-[#E85D04]/40 hover:text-[#E85D04] transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* ─── USE CASES ─────────────────────────────────────────────────────── */}
      <section
        className="relative py-24 overflow-hidden bg-white border-t border-gray-100"
      >
        {/* Subtle orange dot bg */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(232,93,4,0.04) 1.5px, transparent 1.5px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <span
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.18em] mb-5"
              style={{ background: "rgba(232,93,4,0.08)", color: "#E85D04", border: "1px solid rgba(232,93,4,0.25)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#E85D04]" />
              Use Cases
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0A1628] mb-3 leading-tight" style={displayFont}>
              When to Choose This Service
            </h2>
            <p className="text-gray-500 text-sm">
              {detailConfig.useCaseSubtitle || "Our expertise helps businesses across industries solve complex challenges and accelerate growth."}
            </p>
          </motion.div>

          {/* Use case cards - numbered rows */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.10 } } }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-5"
          >
            {detailConfig.useCases.map((uc, i) => {
              const UcIcon = iconMap[uc.iconName] || CheckCircle;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="group relative bg-[#F8FAFC] rounded-2xl border border-gray-100 hover:border-transparent hover:shadow-[0_16px_36px_rgba(232,93,4,0.08)] transition-all duration-300 overflow-hidden"
                  style={{ '--accent-color': service.color } as React.CSSProperties}
                  whileHover={{ y: -4 }}
                >
                  {/* Hover overlay */}
                  <span
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"
                    style={{ background: `linear-gradient(135deg, ${service.color}08 0%, transparent 70%)` }}
                  />
                  {/* Left accent bar */}
                  <span
                    className="absolute inset-y-0 left-0 w-1 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    style={{ background: `linear-gradient(180deg, ${service.color}, ${service.color}60)` }}
                  />
                  <div className="flex items-start gap-5 p-6 pl-7 relative">
                    {/* Large number */}
                    <div
                      className="text-5xl font-black leading-none select-none flex-shrink-0 transition-all duration-300 group-hover:scale-105 group-hover:text-[var(--accent-color)]/10"
                      style={{ color: "rgba(15,23,42,0.06)", fontFamily: "var(--font-display)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="flex-1 min-w-0">
                      {/* Icon + title row */}
                      <div className="flex items-center gap-3 mb-2">
                        <div
                          className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-[var(--accent-color)] group-hover:text-white"
                          style={{ background: service.color + "12", color: service.color }}
                        >
                          <UcIcon className="w-4.5 h-4.5 transition-colors duration-300" />
                        </div>
                        <h3 className="text-base font-bold text-[#0A1628] leading-snug" style={displayFont}>
                          {uc.title}{" "}
                          {uc.highlight && (
                            <span style={{ color: service.color }}>{uc.highlight}</span>
                          )}
                        </h3>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed pl-12">{uc.desc}</p>
                    </div>
                    {/* Arrow */}
                    <div
                      className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-300 bg-white border border-gray-200 group-hover:bg-[var(--accent-color)] group-hover:border-transparent mt-0.5"
                    >
                      <ChevronRight
                        className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-300"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ─── CUSTOM TECH STACK & AGILE WORKFLOW FOR SOFTWARE DEVELOPMENT ─── */}
      {service.slug === "software-development" && (
        <>
          {/* Tech Stack Explorer */}
          <section className="relative py-20 overflow-hidden bg-[#0A1628]">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute left-1/4 top-1/4 w-[400px] h-[400px] rounded-full bg-[#E85D04] opacity-5 blur-[120px]" />
              <div className="absolute right-1/4 bottom-1/4 w-[400px] h-[400px] rounded-full bg-white opacity-5 blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="text-center max-w-3xl mx-auto mb-12"
              >
                <span className="eyebrow-tag eyebrow-tag-dark mb-4">
                  <span className="dot" /> Tech Stack
                </span>
                <h2 className="text-4xl font-extrabold text-white mb-4" style={displayFont}>
                  Our Technology Ecosystem
                </h2>
                <p className="text-white/60 text-sm">
                  We build modern, fast, and secure platforms using industry-standard enterprise languages and frameworks.
                </p>
              </motion.div>

              {/* Tabs */}
              <div className="flex flex-wrap justify-center gap-2 mb-10">
                {[
                  { id: "frontend", label: "Frontend Dev", icon: Layers },
                  { id: "backend", label: "Backend APIs", icon: Cpu },
                  { id: "db-cloud", label: "Data & Cloud", icon: Database },
                  { id: "devops", label: "DevOps & Testing", icon: Terminal },
                ].map((tab) => {
                  const TabIcon = tab.icon;
                  const isActive = activeTechTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTechTab(tab.id as any)}
                      className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                        isActive
                          ? "bg-[#E85D04] text-white shadow-[0_8px_20px_rgba(232,93,4,0.3)]"
                          : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10"
                      }`}
                    >
                      <TabIcon className="w-4 h-4" />
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* Active Tab Content */}
              <motion.div
                key={activeTechTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {activeTechTab === "frontend" && [
                  { name: "Next.js", desc: "Production grade React framework for server-rendered, statically generated, and SEO-optimized apps.", skill: "95%" },
                  { name: "React.js", desc: "Dynamic client-side user interface development with component reusability and fast rendering.", skill: "98%" },
                  { name: "Tailwind CSS", desc: "Utility-first CSS styling for highly responsive, customized layouts and micro-interactions.", skill: "95%" },
                  { name: "TypeScript", desc: "Strong typing layer over JavaScript for codebase maintainability and bug prevention in production.", skill: "92%" },
                ].map((tech, i) => (
                  <div key={i} className="group/tech relative bg-white/5 border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-[#E85D04]/40 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(0,0,0,0.4)]">
                    <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#E85D04] to-transparent opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300" />
                    <h3 className="text-xl font-bold text-white mb-2">{tech.name}</h3>
                    <p className="text-white/60 text-xs leading-relaxed mb-4">{tech.desc}</p>
                    <div className="mt-auto pt-4 border-t border-white/5">
                      <div className="flex justify-between items-center text-[10px] text-[#E85D04] font-bold tracking-wider uppercase mb-1">
                        <span>Expertise Level</span>
                        <span>{tech.skill}</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-[#E85D04]" style={{ width: tech.skill }} />
                      </div>
                    </div>
                  </div>
                ))}

                {activeTechTab === "backend" && [
                  { name: "Node.js (Nest/Express)", desc: "Asynchronous, event-driven server runtime for fast and concurrent API services.", skill: "95%" },
                  { name: "Python (Django/FastAPI)", desc: "High-performance RESTful APIs, background jobs, machine learning algorithms and scripts.", skill: "90%" },
                  { name: "RESTful & GraphQL APIs", desc: "Clean contract and endpoint design, secure token systems, and schema validation integrations.", skill: "96%" },
                  { name: "Microservices", desc: "Decoupled component architecture communicating via event buses or gRPC for massive scalability.", skill: "88%" },
                ].map((tech, i) => (
                  <div key={i} className="group/tech relative bg-white/5 border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-[#E85D04]/40 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(0,0,0,0.4)]">
                    <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#E85D04] to-transparent opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300" />
                    <h3 className="text-xl font-bold text-white mb-2">{tech.name}</h3>
                    <p className="text-white/60 text-xs leading-relaxed mb-4">{tech.desc}</p>
                    <div className="mt-auto pt-4 border-t border-white/5">
                      <div className="flex justify-between items-center text-[10px] text-[#E85D04] font-bold tracking-wider uppercase mb-1">
                        <span>Expertise Level</span>
                        <span>{tech.skill}</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-[#E85D04]" style={{ width: tech.skill }} />
                      </div>
                    </div>
                  </div>
                ))}

                {activeTechTab === "db-cloud" && [
                  { name: "PostgreSQL & MySQL", desc: "Structured relational databases with highly optimized query indices, triggers, and replication.", skill: "92%" },
                  { name: "Redis Cache", desc: "In-memory database for API caching, session storage, and rate-limiting to sustain high loads.", skill: "90%" },
                  { name: "AWS & Cloud-Native", desc: "Highly available infrastructure across S3, Lambda serverless, RDS, ECS, and VPC networking.", skill: "94%" },
                  { name: "Docker Containerization", desc: "Predictable developer parity and deployment environments via robust lightweight container setups.", skill: "95%" },
                ].map((tech, i) => (
                  <div key={i} className="group/tech relative bg-white/5 border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-[#E85D04]/40 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(0,0,0,0.4)]">
                    <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#E85D04] to-transparent opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300" />
                    <h3 className="text-xl font-bold text-white mb-2">{tech.name}</h3>
                    <p className="text-white/60 text-xs leading-relaxed mb-4">{tech.desc}</p>
                    <div className="mt-auto pt-4 border-t border-white/5">
                      <div className="flex justify-between items-center text-[10px] text-[#E85D04] font-bold tracking-wider uppercase mb-1">
                        <span>Expertise Level</span>
                        <span>{tech.skill}</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-[#E85D04]" style={{ width: tech.skill }} />
                      </div>
                    </div>
                  </div>
                ))}

                {activeTechTab === "devops" && [
                  { name: "GitHub Actions CI/CD", desc: "Automated test suites, security checks, lint rules, and builds triggering on code push events.", skill: "92%" },
                  { name: "Playwright & E2E Testing", desc: "Robust automated cross-browser checks simulating real users to ensure pages load without regression.", skill: "90%" },
                  { name: "Jest & Unit Testing", desc: "Fast and reliable unit test suites covering edge cases in application logic and helpers.", skill: "95%" },
                  { name: "Static Code Analysis", desc: "Strict ESLint, Prettier, and code format standards preventing style drift and code smells.", skill: "96%" },
                ].map((tech, i) => (
                  <div key={i} className="group/tech relative bg-white/5 border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-[#E85D04]/40 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(0,0,0,0.4)]">
                    <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#E85D04] to-transparent opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300" />
                    <h3 className="text-xl font-bold text-white mb-2">{tech.name}</h3>
                    <p className="text-white/60 text-xs leading-relaxed mb-4">{tech.desc}</p>
                    <div className="mt-auto pt-4 border-t border-white/5">
                      <div className="flex justify-between items-center text-[10px] text-[#E85D04] font-bold tracking-wider uppercase mb-1">
                        <span>Expertise Level</span>
                        <span>{tech.skill}</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-[#E85D04]" style={{ width: tech.skill }} />
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Agile Lifecycle Process */}
          <section className="relative py-20 bg-gray-50 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="text-center max-w-3xl mx-auto mb-14"
              >
                <span className="eyebrow-tag mb-4">
                  <span className="dot" /> Workflow
                </span>
                <h2 className="text-4xl font-extrabold text-[#0A1628] mb-4" style={displayFont}>
                  Our Agile Product Lifecycle
                </h2>
                <p className="text-gray-500">
                  How we take your idea from initial requirements gathering to high-velocity coding and production scaling.
                </p>
              </motion.div>

              {/* Horizontal / Vertical Timeline Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
                {[
                  { step: "01", name: "Discovery & Scope", duration: "1-2 Weeks", icon: Search, desc: "We align on detailed requirements, produce feature backlogs, and sketch structural wireframes to map user actions." },
                  { step: "02", name: "Architecture & Design", duration: "2 Weeks", icon: PenTool, desc: "We design robust APIs, database schemas, secure access models, and modern UI mockups with high fidelity." },
                  { step: "03", name: "Iterative Sprint Build", duration: "Bi-Weekly", icon: Code, desc: "We compile features in sequential sprints, deploying to staging servers with full Slack and Jira transparent updates." },
                  { step: "04", name: "Continuous QA Testing", duration: "Embedded", icon: CheckSquare, desc: "We launch automated E2E tests, API validations, and perform thorough usability audits to seal code releases." },
                  { step: "05", name: "Zero-Downtime Release", duration: "Production", icon: Rocket, desc: "We containerize packages and deploy them securely into AWS/Azure cloud environments using CI/CD pipelines." },
                  { step: "06", name: "SLA Support & Upgrades", duration: "Ongoing", icon: Settings, desc: "We monitor error loops, tune query index speeds, and keep library dependencies updated for modern operations." },
                ].map((item, idx) => {
                  const StepIcon = item.icon;
                  const isHovered = hoveredStep === idx;
                  return (
                    <div
                      key={idx}
                      onMouseEnter={() => setHoveredStep(idx)}
                      onMouseLeave={() => setHoveredStep(null)}
                      className={`relative bg-white border rounded-3xl p-8 transition-all duration-300 hover:shadow-xl flex flex-col justify-between overflow-hidden cursor-default ${
                        isHovered ? "border-[#E85D04] -translate-y-1.5" : "border-gray-200"
                      }`}
                    >
                      {/* Top highlight bar on hover */}
                      <div className={`absolute top-0 inset-x-0 h-1.5 transition-all duration-300 ${
                        isHovered ? "bg-[#E85D04]" : "bg-transparent"
                      }`} />

                      <div>
                        {/* Header */}
                        <div className="flex justify-between items-start mb-6">
                          <span className="text-4xl font-black text-gray-200">{item.step}</span>
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                            isHovered ? "bg-[#FFF4EC]" : "bg-gray-100"
                          }`}>
                            <StepIcon className={`w-6 h-6 transition-colors duration-300 ${
                              isHovered ? "text-[#E85D04]" : "text-gray-400"
                            }`} />
                          </div>
                        </div>

                        {/* Title & Duration */}
                        <h3 className="text-xl font-bold text-[#0A1628] mb-1">{item.name}</h3>
                        <p className="text-xs font-semibold mb-4" style={{ color: "#E85D04" }}>
                          Timeline: {item.duration}
                        </p>
                        <p className="text-gray-500 text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </>
      )}

      {/* ─── INDUSTRIES ──────────────────────────────────────────────────── */}
      <section
        className="relative py-16 overflow-hidden"
        style={{
          backgroundColor: "#F8FAFC",
          backgroundImage: "radial-gradient(circle, rgba(15,23,42,0.10) 1.5px, transparent 1.5px)",
          backgroundSize: "26px 26px",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10"
          >
            <span className="eyebrow-tag mb-5"><span className="dot" />Verticals</span>
            <h2 className="text-3xl font-extrabold text-[#0A1628] tracking-tight" style={displayFont}>
              Industries We Serve with This Service
            </h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="flex flex-wrap gap-3 justify-center"
          >
            {service.industries.map((ind, i) => (
              <motion.div key={i} variants={fadeUp}>
                <Link
                  href="/industries"
                  className="group px-5 py-3 rounded-full bg-white font-medium text-sm transition-all duration-200 hover:-translate-y-0.5"
                  style={{ border: "1px solid rgba(15,23,42,0.10)", boxShadow: "0 2px 8px rgba(15,23,42,0.06)", color: "#0A1628" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${service.color}50`;
                    (e.currentTarget as HTMLElement).style.color = service.color;
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 16px ${service.color}18`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(15,23,42,0.10)";
                    (e.currentTarget as HTMLElement).style.color = "#0A1628";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 8px rgba(15,23,42,0.06)";
                  }}
                >
                  {ind}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── RELATED SERVICES ────────────────────────────────────────────── */}
      {related.length > 0 && (
        <section
          className="relative section-py overflow-hidden"
          style={{
            backgroundColor: "#ffffff",
            backgroundImage: "radial-gradient(circle, rgba(232,93,4,0.06) 1.5px, transparent 1.5px)",
            backgroundSize: "28px 28px",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="flex flex-col items-center text-center mb-12"
            >
              <span className="eyebrow-tag mb-5"><span className="dot" />Also Explore</span>
              <h2 className="text-3xl font-extrabold text-[#0A1628] tracking-tight" style={displayFont}>Related Services</h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((rel) => {
                const RelIcon = iconMap[rel.icon] || Globe;
                return (
                  <motion.div key={rel.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <Link
                      href={`/services/${rel.slug}`}
                      className="group relative flex flex-col h-full bg-white rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:-translate-y-1.5"
                      style={{ border: "1px solid rgba(15,23,42,0.08)", boxShadow: "0 2px 12px rgba(15,23,42,0.06)" }}
                    >
                      <span className="absolute inset-x-0 top-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ background: `linear-gradient(90deg, transparent, ${rel.color}, transparent)` }}
                      />
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: rel.color + "18" }}>
                        <RelIcon className="w-5 h-5" style={{ color: rel.color }} />
                      </div>
                      <h3 className="font-bold text-[#0A1628] mb-1 group-hover:text-[#E85D04] transition-colors" style={displayFont}>{rel.shortTitle}</h3>
                      <p className="text-sm text-gray-500 flex-1">{rel.tagline}</p>
                      <div className="flex items-center gap-1 mt-4 text-sm font-semibold group-hover:gap-2 transition-all" style={{ color: rel.color }}>
                        Learn more <ArrowRight className="w-4 h-4" />
                      </div>
                      <span className="absolute inset-x-0 bottom-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: rel.color }} />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ─── CTA ────────────────────────────────────────────────────────── */}
      <section
        className="relative py-20 overflow-hidden border-t border-white/05"
        style={{ backgroundColor: "#070D19" }}
      >
        <div aria-hidden className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full blur-[100px] opacity-15"
          style={{ background: `radial-gradient(circle, ${service.color}60 0%, transparent 70%)` }}
        />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="flex justify-center mb-6">
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.18em]"
                style={{ background: service.color + "22", color: service.color, border: `1px solid ${service.color}45` }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: service.color }} />
                Ready to Start?
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-black text-white mb-4 leading-[1.04] tracking-tight" style={displayFont}>
              Ready to Get Started with {service.shortTitle}?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/50 text-lg mb-8">
              Let&apos;s discuss your requirements and build the right engagement model.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="glow-btn"
                style={{ background: service.color, boxShadow: `0 8px 28px ${service.color}55` }}
              >
                Get in Touch <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/services" className="glow-btn glow-btn-ghost">
                All Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
