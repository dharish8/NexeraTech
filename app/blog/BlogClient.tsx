"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, User } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } } };
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

export default function BlogClient() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative pt-28 pb-20 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-0 top-0 w-[500px] h-[400px] rounded-full bg-[#E85D04] opacity-8 blur-[100px]" />
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, rgba(232,93,4,0.1) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="flex items-center gap-2 justify-center mb-4 text-sm">
              <Link href="/" className="text-white/40 hover:text-[#E85D04] transition-colors">Home</Link>
              <span className="text-white/25">/</span>
              <span className="text-[#E85D04] font-medium">Blog</span>
            </motion.div>
            <motion.span variants={fadeUp} className="inline-block px-4 py-1.5 bg-[#FFF4EC] text-[#E85D04] text-xs font-bold uppercase tracking-widest rounded-full mb-6">Insights & Expertise</motion.span>
            <motion.h1 variants={fadeUp} className="text-5xl lg:text-6xl font-bold text-white mb-6">
              NexeraTech <span className="text-[#E85D04]">Blog</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              Practical insights on offshore IT, AI/ML engineering, identity security, payroll compliance, and digital transformation — from the practitioners delivering it every day.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section
        className="section-py relative overflow-hidden"
        style={{
          backgroundColor: "#F8FAFC",
          backgroundImage: "radial-gradient(circle, rgba(15,23,42,0.08) 1.5px, transparent 1.5px)",
          backgroundSize: "26px 26px",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-8">
            <span className="eyebrow-tag"><span className="dot" />Featured Post</span>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="group bg-white rounded-3xl border border-[rgba(15,23,42,0.08)] hover:border-[#E85D04]/40 p-10 transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-[0_24px_56px_rgba(15,23,42,0.12)]">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex flex-wrap gap-2 mb-5">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#E85D04] text-white">{featured.category}</span>
                    <span className="flex items-center gap-1 text-sm text-gray-500">
                      <Clock className="w-3.5 h-3.5" />{featured.readTime}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-[#0A1628] mb-4 group-hover:text-[#E85D04] transition-colors leading-tight">{featured.title}</h2>
                  <p className="text-gray-500 leading-relaxed mb-6">{featured.excerpt}</p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#E85D04] flex items-center justify-center">
                        <User className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm text-gray-600">{featured.author}</span>
                    </div>
                    <span className="text-sm text-gray-400">{featured.date}</span>
                  </div>
                </div>
                <div className="relative h-56 bg-gradient-to-br from-[#E85D04]/20 to-[#F3722C]/10 rounded-2xl flex items-center justify-center border border-[#E85D04]/20">
                  <div className="text-center">
                    <div className="text-5xl mb-3">📰</div>
                    <p className="text-sm text-[#E85D04] font-medium">Featured Article</p>
                  </div>
                  <div className="absolute top-4 right-4 flex items-center gap-1 text-sm text-[#E85D04] font-semibold group-hover:gap-2 transition-all">
                    Read <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Post Grid */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-8">
            <h2 className="text-3xl font-bold text-[#0A1628]">Latest Articles</h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <motion.div key={post.slug} variants={fadeUp}>
                <div className="group bg-white rounded-2xl border border-gray-100 card-hover overflow-hidden h-full cursor-pointer">
                  {/* Color strip */}
                  <div className="h-1" style={{ background: post.color }} />
                  {/* Image placeholder */}
                  <div className="h-44 flex items-center justify-center" style={{ background: post.color + "10" }}>
                    <div className="text-center">
                      <span className="text-4xl block mb-2">📝</span>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ background: post.color + "20", color: post.color }}>{post.category}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-[#0A1628] text-lg mb-2 group-hover:text-[#E85D04] transition-colors leading-snug">{post.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" />{post.readTime}
                      </span>
                      <span className="text-xs text-gray-400">{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1 mt-4 text-sm font-semibold group-hover:gap-2 transition-all" style={{ color: post.color }}>
                      Read article <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 section-line-dark border-t border-white/05 relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[250px] rounded-full blur-[100px] opacity-15" style={{ background: "rgba(232,93,4,0.40)" }} />
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="mb-6">
              <span className="eyebrow-tag eyebrow-tag-dark"><span className="dot" />Newsletter</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl font-bold text-white mb-4">Get Insights in Your Inbox</motion.h2>
            <motion.p variants={fadeUp} className="text-white/60 text-lg mb-8">Practical tech and compliance insights — no fluff, no spam. Once or twice a month.</motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                id="newsletter-email"
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-5 py-3.5 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#E85D04] transition-colors"
              />
              <button className="px-6 py-3.5 bg-[#E85D04] text-white font-bold rounded-xl hover:bg-[#B74603] transition-all duration-200 hover:scale-105 whitespace-nowrap">
                Subscribe
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
