"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { Mail, MapPin, Phone, Clock, ArrowRight, CheckCircle, Linkedin, Twitter, Facebook, Globe, Shield, Loader2 } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const displayFont = { fontFamily: "var(--font-display, 'Plus Jakarta Sans', sans-serif)" };

const services = [
  "Offshore IT Services",
  "Software Development",
  "AI / ML Services",
  "IAM & Cybersecurity",
  "Payroll & EOR",
  "Staff Augmentation",
  "Cloud Services",
  "Managed IT",
  "QA & Testing",
  "Recruitment (RPO)",
  "Finance & Accounting",
  "Digital Transformation",
  "Other / Not sure",
];

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", email: "", company: "", service: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // NOTE: Replace these with your actual EmailJS credentials
      // It is recommended to use environment variables for these (e.g., process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID)
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

      const templateParams = {
        from_name: form.name,
        from_email: form.email,
        company: form.company || "Not provided",
        service: form.service,
        message: form.message,
      };

      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      setSubmitted(true);
    } catch (err) {
      console.error("Failed to send email:", err);
      setError("Failed to send your message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = (field: string) =>
    `premium-input transition-all duration-200 ${focused === field ? "ring-4 ring-[#E85D04]/10 border-[#E85D04]" : ""}`;

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative pt-28 pb-20 section-dot-dark overflow-hidden">
        {/* Ambient orbs */}
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute -left-20 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[120px] opacity-15"
            style={{ background: "radial-gradient(circle, #E85D04 0%, transparent 70%)" }}
          />
          <div
            className="absolute -right-20 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[100px] opacity-08"
            style={{ background: "radial-gradient(circle, #FF802B 0%, transparent 70%)" }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            {/* Breadcrumb */}
            <motion.div variants={fadeUp} className="flex items-center gap-2 justify-center mb-5 text-sm">
              <span className="text-white/40">
                <Link href="/" className="hover:text-[#E85D04] transition-colors">Home</Link>
              </span>
              <span className="text-white/25">/</span>
              <span className="text-[#E85D04] font-semibold">Contact</span>
            </motion.div>

            {/* Eyebrow */}
            <motion.div variants={fadeUp} className="mb-6">
              <span className="eyebrow-tag eyebrow-tag-dark">
                <span className="dot" />
                Get in Touch
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.04] tracking-tight"
              style={displayFont}
            >
              Let&apos;s Build <span className="gradient-text">Together</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
              Tell us about your technology challenge. We&apos;ll respond within one business day with the right team and approach.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-py section-dot-light relative">
        <div aria-hidden className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] blur-[90px]" style={{ background: "rgba(232,93,4,0.04)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10">

            {/* Left Column — Info Panel */}
            <div
              className="relative group overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "linear-gradient(145deg, #0A1628 0%, #0F1E35 60%, #132238 100%)",
                border: "1px solid rgba(232,93,4,0.18)",
                boxShadow: "0 24px 56px rgba(10,22,40,0.30), 0 4px 16px rgba(0,0,0,0.15)",
              }}
            >
              {/* Top accent line */}
              <div className="absolute inset-x-0 top-0 h-[2px]" style={{ background: "linear-gradient(90deg, transparent, #E85D04, transparent)" }} />
              {/* Dot grid inside */}
              <div
                aria-hidden
                className="absolute inset-0 opacity-07 pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(circle, rgba(232,93,4,0.28) 1px, transparent 1px)",
                  backgroundSize: "22px 22px",
                }}
              />
              {/* Ambient orb inside */}
              <div
                aria-hidden
                className="absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full blur-[80px] opacity-12 pointer-events-none"
                style={{ background: "#E85D04" }}
              />

              <div className="relative z-10 p-8 flex flex-col h-full">
                <div>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#E85D04]/18 text-[#E85D04] text-[11px] font-bold uppercase tracking-[0.18em] rounded-full mb-6 border border-[#E85D04]/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E85D04] animate-flicker" />
                    Contact Information
                  </span>
                  <h2 className="text-3xl font-black text-white mb-4 leading-tight" style={displayFont}>
                    Hyderabad HQ &amp;<br />Delivery Center
                  </h2>
                  <p className="text-white/55 text-sm leading-relaxed mb-8">
                    Operating across global time zones (IST, EST, GMT) to ensure seamless delivery and proactive support for every client.
                  </p>

                  {/* Contact details */}
                  <div className="space-y-5">
                    {[
                      { icon: MapPin, label: "Headquarters", value: "Hyderabad, Telangana, India", sub: "EST · GMT · IST coverage" },
                      { icon: Mail, label: "Email", value: "info@nexeratechinc.com", href: "mailto:info@nexeratechinc.com" },
                      { icon: Phone, label: "Phone", value: "+91 970 186 7111", sub: "Mon–Fri 9am–6pm IST" },
                      { icon: Clock, label: "SLA Response", value: "Within 1 business day", sub: "For all B2B inquiries" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-white/05 border border-white/10 flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:bg-[#E85D04]/12 group-hover:border-[#E85D04]/25">
                          <item.icon className="w-4.5 h-4.5 text-[#E85D04]" />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/35 mb-0.5">{item.label}</p>
                          {item.href ? (
                            <a href={item.href} className="font-semibold text-sm text-white hover:text-[#E85D04] transition-colors">{item.value}</a>
                          ) : (
                            <p className="font-semibold text-sm text-white">{item.value}</p>
                          )}
                          {item.sub && <p className="text-[10px] text-white/40 mt-0.5">{item.sub}</p>}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Trust pills */}
                  <div className="flex flex-wrap gap-2 mt-8">
                    {[
                      { icon: Shield, label: "GDPR Compliant" },
                      { icon: Globe, label: "Global Delivery" },
                    ].map(({ icon: Icon, label }) => (
                      <div key={label} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold text-white/50 uppercase tracking-wider" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                        <Icon className="w-3 h-3 text-[#E85D04]" />
                        {label}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social icons row */}
                <div className="flex items-center gap-3 mt-10 border-t border-white/08 pt-6">
                  {[
                    { icon: Linkedin, label: "LinkedIn" },
                    { icon: Twitter, label: "Twitter" },
                    { icon: Facebook, label: "Facebook" },
                  ].map(({ icon: Icon, label }) => (
                    <a
                      key={label}
                      href="#"
                      aria-label={label}
                      className="group/icon w-10 h-10 rounded-xl bg-white/05 border border-white/10 flex items-center justify-center hover:bg-[#E85D04] hover:border-[#E85D04] hover:shadow-[0_4px_12px_rgba(232,93,4,0.35)] transition-all duration-200"
                    >
                      <Icon className="w-4 h-4 text-white/60 group-hover/icon:text-white transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column — Form Panel */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-16 bg-white rounded-3xl p-8 shadow-[0_8px_40px_rgba(15,23,42,0.08)] border border-gray-100">
                  <div className="w-24 h-24 rounded-full flex items-center justify-center mb-6" style={{ background: "rgba(5,150,105,0.10)", border: "2px solid rgba(5,150,105,0.25)" }}>
                    <CheckCircle className="w-12 h-12 text-emerald-500" />
                  </div>
                  <h3 className="text-3xl font-black text-[#0A1628] mb-3" style={displayFont}>Message Received!</h3>
                  <p className="text-gray-500 max-w-sm mb-8 text-sm leading-relaxed">
                    Thank you for reaching out. A solution architect will contact you within one business day with an execution plan.
                  </p>
                  <Link href="/" className="glow-btn">
                    Back to Home <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              ) : (
                <div
                  className="bg-white rounded-3xl p-8 lg:p-10"
                  style={{
                    boxShadow: "0 8px 40px rgba(15,23,42,0.08), 0 2px 12px rgba(15,23,42,0.04)",
                    border: "1px solid rgba(15,23,42,0.07)",
                  }}
                >
                  {/* Form header */}
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="h-1 w-8 rounded-full bg-[#E85D04]" />
                      <span className="text-[11px] font-bold text-[#E85D04] uppercase tracking-[0.18em]">B2B Inquiry</span>
                    </div>
                    <h3 className="text-2xl font-black text-[#0A1628] mb-2" style={displayFont}>Request a B2B Proposal</h3>
                    <p className="text-gray-500 text-sm">Fill out the details and our architect will get back to you with an execution plan.</p>
                  </div>

                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-5" id="contact-form">
                    {error && (
                      <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm">
                        {error}
                      </div>
                    )}
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="contact-name" className="premium-label">Full Name *</label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          onFocus={() => setFocused("name")}
                          onBlur={() => setFocused(null)}
                          className={inputClass("name")}
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-email" className="premium-label">Email Address *</label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          onFocus={() => setFocused("email")}
                          onBlur={() => setFocused(null)}
                          className={inputClass("email")}
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="contact-company" className="premium-label">Company Name</label>
                      <input
                        id="contact-company"
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        onFocus={() => setFocused("company")}
                        onBlur={() => setFocused(null)}
                        className={inputClass("company")}
                        placeholder="Acme Corporation"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-service" className="premium-label">Service Interest *</label>
                      <select
                        id="contact-service"
                        required
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        onFocus={() => setFocused("service")}
                        onBlur={() => setFocused(null)}
                        className={inputClass("service")}
                      >
                        <option value="">Select a service...</option>
                        {services.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="contact-message" className="premium-label">Your Message *</label>
                      <textarea
                        id="contact-message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        onFocus={() => setFocused("message")}
                        onBlur={() => setFocused(null)}
                        className={`${inputClass("message")} resize-none`}
                        placeholder="Tell us about your project or resource needs..."
                      />
                    </div>
                    <button
                      type="submit"
                      id="contact-submit"
                      disabled={isSubmitting}
                      className="w-full glow-btn py-4 text-sm uppercase tracking-wider flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Request a Proposal <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>
                    <div className="flex items-center justify-center gap-2 pt-1">
                      <Shield className="w-3.5 h-3.5 text-gray-400" />
                      <p className="text-[11px] text-gray-400 text-center">
                        Respond within 1 business day · GDPR &amp; SOC2 compliant
                      </p>
                    </div>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="h-72 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0A1628 0%, #132238 100%)" }}>
        <div className="absolute inset-0 pointer-events-none opacity-12" style={{ backgroundImage: "radial-gradient(circle, rgba(232,93,4,0.4) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div
          aria-hidden
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] rounded-full blur-[100px] opacity-20"
          style={{ background: "#E85D04" }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mb-4 animate-float"
            style={{ background: "rgba(232,93,4,0.18)", border: "1px solid rgba(232,93,4,0.35)" }}
          >
            <MapPin className="w-8 h-8 text-[#E85D04]" />
          </div>
          <p className="font-black text-white text-lg" style={displayFont}>Hyderabad, Telangana, India</p>
          <p className="text-white/40 text-sm mt-1">NexeraTech Solutions Headquarters</p>
        </div>
      </section>
    </div>
  );
}
