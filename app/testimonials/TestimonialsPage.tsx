"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, Home, ChevronRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

import { testimonials } from "@/lib/testimonials-data";

const INITIAL_COUNT = 8;
const LOAD_MORE_COUNT = 4;

export default function TestimonialsPage() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const visibleTestimonials = testimonials.slice(0, visibleCount);
  const hasMore = visibleCount < testimonials.length;

  return (
    <div className="bg-white text-[#0A1628]">
      {/* ─── HERO BANNER ──────────────────────────────────────────────────── */}
      <section className="relative bg-[#0A1628] py-20 overflow-hidden">
        {/* Background decorators */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#E85D04] to-[#FF802B] opacity-[0.07]" />
          <div className="absolute right-16 top-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full border border-[#E85D04]/15" />
          <div className="absolute right-36 top-1/2 -translate-y-1/2 w-[240px] h-[240px] rounded-full border border-[#E85D04]/10" />
          {/* Dot grid */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(232,93,4,0.12) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          {/* Floating accent circles */}
          <div className="absolute top-8 left-1/4 w-3 h-3 rounded-full bg-[#E85D04] opacity-40" />
          <div className="absolute bottom-10 left-1/3 w-2 h-2 rounded-full bg-[#E85D04] opacity-30" />
          <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 rounded-full bg-[#FF802B] opacity-50" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-5">
              Testimonials
            </h1>
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center gap-2 text-sm">
              <Link
                href="/"
                className="flex items-center gap-1.5 text-white/60 hover:text-[#E85D04] transition-colors duration-200"
              >
                <Home className="w-3.5 h-3.5" />
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-white/30" />
              <span className="text-[#E85D04] font-medium">Testimonials</span>
            </nav>
          </motion.div>
        </div>

        {/* Bottom wave curve */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-white"
          style={{ clipPath: "ellipse(60% 100% at 50% 100%)" }}
        />
      </section>

      {/* ─── MAIN CONTENT ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-14"
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#E85D04] uppercase tracking-widest mb-4">
              <span className="w-8 h-px bg-[#E85D04]" />
              Testimonials
              <span className="w-8 h-px bg-[#E85D04]" />
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0A1628] leading-tight">
              Experience Shared by{" "}
              <span className="text-[#E85D04]">Our Clients</span>
            </h2>
          </motion.div>

          {/* Testimonials Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {visibleTestimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={fadeUp}
                className="group bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col gap-4"
              >
                {/* Stars + Rating */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#E85D04] text-[#E85D04]"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-[#0A1628]">
                    5.0
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-[#0A1628] group-hover:text-[#E85D04] transition-colors duration-200">
                  {testimonial.outcome}
                </h3>

                {/* Text */}
                <p className="text-sm text-gray-500 leading-relaxed flex-1">
                  {testimonial.quote}
                </p>

                {/* Divider */}
                <div className="border-t border-gray-100" />

                {/* Client Info */}
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 shadow-sm"
                    style={{ background: testimonial.color }}
                  >
                    {testimonial.client[0]}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#0A1628] leading-tight">
                      {testimonial.client}
                    </p>
                    <p className="text-xs text-[#E85D04] font-semibold mt-0.5">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {testimonial.company} · {testimonial.flag}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Load More Button */}
          {hasMore && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center mt-12"
            >
              <button
                onClick={() =>
                  setVisibleCount((prev) =>
                    Math.min(prev + LOAD_MORE_COUNT, testimonials.length)
                  )
                }
                className="px-10 py-4 bg-[#E85D04] text-white font-bold text-sm rounded-full hover:bg-[#B74603] hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30 active:scale-95 transition-all duration-200"
              >
                Load More
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
