"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, AlertTriangle } from "lucide-react";
import { caseStudies } from "@/lib/case-studies-data";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

export default function CaseStudiesClient() {
  return (
    <div className="overflow-hidden">
      {/* Disclaimer banner */}
      <div className="bg-amber-50 border-b border-amber-200 py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-3 text-sm text-amber-800">
          <AlertTriangle className="w-4 h-4 flex-shrink-0" />
          <span><strong>Editorial Note:</strong> Confirm all client names and details with actual clients before publishing. If names cannot be used, replace with approved anonymized versions.</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative pt-24 pb-20 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-0 bottom-0 w-[500px] h-[500px] rounded-full bg-[#E85D04] opacity-8 blur-[100px]" />
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, rgba(232,93,4,0.1) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-6 text-sm">
              <Link href="/" className="text-white/40 hover:text-[#E85D04] transition-colors">Home</Link>
              <span className="text-white/25">/</span>
              <span className="text-[#E85D04] font-medium">Case Studies</span>
            </motion.div>
            <motion.span variants={fadeUp} className="inline-block px-4 py-1.5 bg-[#FFF4EC] text-[#E85D04] text-xs font-bold uppercase tracking-widest rounded-full mb-6">Client Success</motion.span>
            <motion.h1 variants={fadeUp} className="text-5xl lg:text-6xl font-bold text-white mb-6">
              5 Stories,{" "}<span className="text-[#E85D04]">Real Outcomes</span>
            </motion.h1>
            {/* Stats row */}
            <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 max-w-2xl">
              {[
                { value: "5", label: "Case Studies" },
                { value: "3", label: "Geographies" },
                { value: "5", label: "Industries" },
                { value: "6", label: "Services Covered" },
              ].map((s, i) => (
                <div key={i}>
                  <p className="text-3xl font-bold text-[#E85D04]">{s.value}</p>
                  <p className="text-sm text-white/50 mt-0.5">{s.label}</p>
                </div>
              ))}
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mt-6">
              {[
                { label: "Geographies", value: "USA · United Kingdom · India" },
                { label: "Services", value: "Offshore IT · Software Dev · AI/ML · IAM · Payroll" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-white/60">
                  <span className="text-gray-500 font-medium">{item.label}:</span>
                  <span>{item.value}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section-py bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-8">
            {caseStudies.map((cs, idx) => (
              <motion.div key={cs.slug} variants={fadeUp}>
                <Link href={`/case-studies/${cs.slug}`} className="group block bg-white rounded-2xl border-2 border-gray-100 hover:border-[#E85D04] card-hover overflow-hidden transition-all duration-300">
                  <div className="flex flex-col lg:flex-row">
                    {/* Left color panel */}
                    <div className="lg:w-64 flex-shrink-0 p-8 flex flex-col justify-between" style={{ background: cs.color + "15" }}>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: cs.color }}>Case Study {idx + 1} of 5</p>
                        <p className="text-4xl mb-3">{cs.flag}</p>
                        <p className="font-bold text-[#0A1628] text-lg">{cs.client}</p>
                        <p className="text-sm text-gray-500">{cs.country}</p>
                      </div>
                      <div className="mt-6 space-y-2">
                        <div>
                          <p className="text-xs text-gray-400">Duration</p>
                          <p className="text-sm font-medium text-[#0A1628]">{cs.duration}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-400">Team</p>
                          <p className="text-sm font-medium text-[#0A1628]">{cs.teamSize}</p>
                        </div>
                      </div>
                    </div>

                    {/* Right content */}
                    <div className="flex-1 p-8">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ background: cs.color + "15", color: cs.color }}>{cs.industry}</span>
                        {cs.services.map((svc, i) => (
                          <span key={i} className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">{svc}</span>
                        ))}
                      </div>

                      {/* Stats */}
                      <div className="flex flex-wrap gap-6 mb-5">
                        {cs.stats.map((stat, i) => (
                          <div key={i} className="text-center">
                            <p className="text-2xl font-bold" style={{ color: cs.color }}>{stat.value}</p>
                            <p className="text-xs text-gray-400">{stat.label}</p>
                          </div>
                        ))}
                      </div>

                      <h2 className="text-2xl font-bold text-[#0A1628] mb-3 group-hover:text-[#E85D04] transition-colors">{cs.headline}</h2>
                      <p className="text-gray-500 mb-5 leading-relaxed">{cs.subheadline}</p>

                      {/* Quote preview */}
                      <div className="bg-gray-50 rounded-xl p-4 border-l-4 mb-5" style={{ borderColor: cs.color }}>
                        <p className="text-sm text-gray-600 italic line-clamp-2">&ldquo;{cs.quote}&rdquo;</p>
                      </div>

                      <div className="flex items-center gap-1 text-sm font-bold group-hover:gap-2 transition-all duration-200" style={{ color: cs.color }}>
                        Read full case study <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden border-t border-white/05" style={{ backgroundColor: "#070D19" }}>
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div aria-hidden className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full blur-[100px] opacity-15" style={{ background: "radial-gradient(circle, rgba(232,93,4,0.40) 0%, transparent 70%)" }} />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <span className="eyebrow-tag eyebrow-tag-dark mb-6 inline-flex"><span className="dot" />Client Success</span>
          <h2 className="text-4xl font-bold text-white mb-4 mt-4">Want to Be Our Next Success Story?</h2>
          <p className="text-white/60 text-lg mb-8">Let&apos;s discuss how we can deliver real outcomes for your business.</p>
          <Link href="/contact" className="glow-btn">
            Start a Conversation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
