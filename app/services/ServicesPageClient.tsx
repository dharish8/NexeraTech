"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Globe, Code2, Brain, Shield, Banknote, Users, Cloud, Monitor, CheckCircle, UserCheck, BarChart3, Zap } from "lucide-react";
import { services } from "@/lib/services-data";

const iconMap: Record<string, React.ElementType> = {
  Globe, Code2, Brain, Shield, Banknote, Users, Cloud, Monitor, CheckCircle, UserCheck, BarChart3, Zap,
};

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

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};
const stagger = { visible: { transition: { staggerChildren: 0.07 } } };

const displayFont = { fontFamily: "var(--font-display, 'Plus Jakarta Sans', sans-serif)" };

export default function ServicesPageClient() {
  return (
    <div className="overflow-hidden">

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-28 pb-20 overflow-hidden" style={{ backgroundColor: "#0B1120" }}>
        {/* Dot grid */}
        <div
          aria-hidden className="pointer-events-none absolute inset-0"
          style={{ backgroundImage: "radial-gradient(circle, rgba(232,93,4,0.18) 1.5px, transparent 1.5px)", backgroundSize: "32px 32px" }}
        />
        {/* Ambient orbs */}
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 bottom-0 w-[500px] h-[500px] rounded-full blur-[100px] opacity-15" style={{ background: "radial-gradient(circle, #E85D04 0%, transparent 70%)" }} />
          <div className="absolute -right-20 top-0 w-[350px] h-[350px] rounded-full blur-[100px] opacity-08" style={{ background: "radial-gradient(circle, #FF802B 0%, transparent 70%)" }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            {/* Breadcrumb */}
            <motion.div variants={fadeUp} className="flex items-center gap-2 justify-center mb-5">
              <span className="text-white/40 text-sm"><Link href="/" className="hover:text-[#E85D04] transition-colors">Home</Link></span>
              <span className="text-white/25">/</span>
              <span className="text-[#E85D04] text-sm font-medium">Services</span>
            </motion.div>

            {/* Eyebrow */}
            <motion.div variants={fadeUp} className="flex justify-center mb-6">
              <span className="eyebrow-tag eyebrow-tag-dark"><span className="dot" />What We Do</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.06] tracking-tight"
              style={displayFont}
            >
              12 Service Lines,{" "}
              <span className="gradient-text">One Partner</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-white/50 max-w-3xl mx-auto leading-relaxed mb-10">
              From offshore engineering squads to AI/ML systems, identity management, and payroll compliance — we cover the full technology and workforce spectrum for US, UK, and India clients.
            </motion.p>

            {/* Quick stats */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-8 justify-center">
              {[
                { label: "Practice Areas", value: "5" },
                { label: "Service Lines", value: "12" },
                { label: "Markets", value: "3" },
                { label: "Industries", value: "6" },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <p className="text-3xl font-bold text-[#E85D04]" style={displayFont}>{s.value}</p>
                  <p className="text-sm text-white/40 mt-0.5">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── CORE 5 PRACTICE AREAS ───────────────────────────────────────── */}
      <section
        className="relative section-py overflow-hidden"
        style={{
          backgroundColor: "#ffffff",
          backgroundImage: "radial-gradient(circle, rgba(232,93,4,0.07) 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
      >
        <div aria-hidden className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] blur-[90px]" style={{ background: "rgba(232,93,4,0.04)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14"
          >
            <span className="eyebrow-tag mb-5"><span className="dot" />Core Practice Areas</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0A1628] leading-[1.06] tracking-tight" style={displayFont}>Our Core Services</h2>
            <p className="text-gray-500 mt-4 max-w-2xl text-base leading-relaxed">Five flagship practice areas staffed by specialists with hands-on delivery experience.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.slice(0, 5).map((service) => {
              const Icon = iconMap[service.icon] || Globe;
              const serviceImage = specialtyImages[service.slug];
              return (
                <motion.div key={service.slug} variants={fadeUp} className={service.slug === "payroll-eor" ? "lg:col-span-1" : ""}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group relative flex flex-col h-full bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5"
                    style={{ border: "1px solid rgba(15,23,42,0.08)", boxShadow: "0 2px 12px rgba(15,23,42,0.06)" }}
                  >
                    <span className="absolute inset-x-0 top-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                      style={{ background: `linear-gradient(90deg, transparent, ${service.color}, transparent)` }}
                    />
                    {/* Image banner */}
                    {serviceImage && (
                      <div className="h-44 relative overflow-hidden flex-shrink-0">
                        <Image
                          src={serviceImage}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute bottom-3 left-4">
                          <span className="text-xs font-bold uppercase tracking-widest text-white/80">Core Service</span>
                        </div>
                      </div>
                    )}
                    <div className="p-8 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110" style={{ background: service.color + "18" }}>
                          <Icon className="w-6 h-6" style={{ color: service.color }} />
                        </div>
                        <h3 className="text-xl font-bold text-[#0A1628] group-hover:text-[#E85D04] transition-colors" style={displayFont}>{service.title}</h3>
                      </div>
                      <p className="text-sm font-medium mb-4" style={{ color: service.color }}>{service.tagline}</p>
                      <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-3 flex-1">{service.description}</p>
                      <div className="border-t border-gray-100 pt-4">
                        <p className="text-xs text-gray-400 mb-2 font-medium">Key features</p>
                        <ul className="space-y-1">
                          {service.features.slice(0, 3).map((f, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-gray-500">
                              <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: service.color }} />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex items-center gap-1 mt-5 text-sm font-semibold group-hover:gap-2 transition-all duration-200" style={{ color: service.color }}>
                        Explore service <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                    <span className="absolute inset-x-0 bottom-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: service.color }} />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ─── ADDITIONAL SERVICES ─────────────────────────────────────────── */}
      <section
        className="relative section-py overflow-hidden"
        style={{
          backgroundColor: "#F8FAFC",
          backgroundImage: "radial-gradient(circle, rgba(15,23,42,0.10) 1.5px, transparent 1.5px)",
          backgroundSize: "26px 26px",
        }}
      >
        <div aria-hidden className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] blur-[100px]" style={{ background: "rgba(232,93,4,0.04)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14"
          >
            <span className="eyebrow-tag mb-5"><span className="dot" />Also Available</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0A1628] leading-[1.06] tracking-tight" style={displayFont}>Additional Services</h2>
            <p className="text-gray-500 mt-4 max-w-2xl text-base leading-relaxed">Seven more service lines to cover your complete technology and operations needs.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {services.slice(5).map((service) => {
              const Icon = iconMap[service.icon] || Globe;
              const serviceImage = specialtyImages[service.slug];
              return (
                <motion.div key={service.slug} variants={fadeUp}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group relative flex flex-col h-full bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5"
                    style={{ border: "1px solid rgba(15,23,42,0.08)", boxShadow: "0 2px 12px rgba(15,23,42,0.06)" }}
                  >
                    <span className="absolute inset-x-0 top-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                      style={{ background: `linear-gradient(90deg, transparent, ${service.color}, transparent)` }}
                    />
                    {/* Image banner */}
                    {serviceImage && (
                      <div className="h-32 relative overflow-hidden flex-shrink-0">
                        <Image
                          src={serviceImage}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      </div>
                    )}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110" style={{ background: service.color + "18" }}>
                        <Icon className="w-5 h-5" style={{ color: service.color }} />
                      </div>
                      <h3 className="font-bold text-[#0A1628] mb-1 group-hover:text-[#E85D04] transition-colors" style={displayFont}>{service.shortTitle}</h3>
                      <p className="text-xs text-gray-500 mb-3 leading-relaxed flex-1">{service.tagline}</p>
                      <div className="flex items-center gap-1 text-xs font-semibold group-hover:gap-2 transition-all duration-200" style={{ color: service.color }}>
                        Learn more <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                    <span className="absolute inset-x-0 bottom-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: service.color }} />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ─── ENGAGEMENT MODELS ───────────────────────────────────────────── */}
      <section className="relative section-py overflow-hidden section-line-dark border-t border-white/05">
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] blur-[100px] opacity-10" style={{ background: "rgba(232,93,4,0.30)" }} />
          <div className="absolute -left-20 bottom-0 w-[350px] h-[300px] rounded-full blur-[100px] opacity-10" style={{ background: "radial-gradient(circle, rgba(232,93,4,0.25) 0%, transparent 70%)" }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14"
          >
            <span className="eyebrow-tag eyebrow-tag-dark mb-5"><span className="dot" />How We Work</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-[1.06] tracking-tight" style={displayFont}>Engagement Models</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Fixed Price", icon: "🎯", desc: "Defined scope, defined cost. Best for projects with clear requirements and a fixed delivery timeline.", best: "Software dev projects, compliance audits, portal builds" },
              { title: "Time & Material", icon: "⏱️", desc: "Flexible billing based on hours delivered. Best for evolving scopes where requirements change over time.", best: "AI/ML development, ongoing consulting, discovery phases" },
              { title: "Dedicated Team", icon: "👥", desc: "Your engineers, your culture, your sprint cadence. Best for long-term offshore squads embedded in your team.", best: "Offshore IT services, staff augmentation, managed IT" },
            ].map((model, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-2xl p-7 overflow-hidden transition-all duration-300 hover:-translate-y-1.5"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(232,93,4,0.30)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                }}
              >
                <span className="absolute inset-x-0 top-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(90deg, transparent, #E85D04, transparent)" }}
                />
                <span className="text-3xl block mb-4">{model.icon}</span>
                <h3 className="text-xl font-bold text-white mb-3" style={displayFont}>{model.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4">{model.desc}</p>
                <p className="text-xs text-[#E85D04] font-medium">Best for: {model.best}</p>
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
        <div aria-hidden className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div aria-hidden className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[250px] rounded-full blur-[100px] opacity-12"
          style={{ background: "radial-gradient(circle, rgba(232,93,4,0.40) 0%, transparent 70%)" }}
        />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="flex justify-center mb-6">
              <span className="eyebrow-tag eyebrow-tag-dark"><span className="dot" />Let&apos;s Get Started</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-[1.06] tracking-tight" style={displayFont}>
              Not sure which service you need?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/50 text-lg mb-8">
              Tell us about your challenge — we&apos;ll recommend the right engagement model and team.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="glow-btn">
                Start a Conversation <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
