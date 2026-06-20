"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { HelpCircle, ChevronDown, CheckCircle, FileText, Search, UserCheck, Shield, Send } from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

const STEPS = [
  {
    num: "01",
    title: "Define Your Need",
    desc: "Share your technical requirements, stack preferences, timeline, and budget range. The more detail, the faster we can match.",
    icon: FileText,
  },
  {
    num: "02",
    title: "We Source & Vet",
    desc: "Our domain specialists surface and screen candidates and delivery partners against precise technical and cultural criteria — not just keyword matching.",
    icon: Search,
  },
  {
    num: "03",
    title: "You Receive a Shortlist",
    desc: "A concise, high-quality shortlist — typically within 3–5 business days for talent, 5–7 days for project delivery.",
    icon: UserCheck,
  },
  {
    num: "04",
    title: "Governed Delivery",
    desc: "We stay engaged. Clear SLAs, open reporting, named points of contact, and proactive communication throughout the engagement.",
    icon: Shield,
  },
];

const TOGGLE_OPTIONS = [
  { id: "ai-iam-talent", label: "I need AI or IAM talent" },
  { id: "project", label: "I want to start a project" },
  { id: "general-talent", label: "I need general tech talent" },
];

const DROPDOWN_OPTIONS = {
  "ai-iam-talent": {
    label: "What type of role?",
    options: [
      "AI / ML Engineer",
      "IAM / Identity Architect",
      "LLM / GenAI Engineer",
      "MLOps Engineer",
      "Security / IAM Analyst",
      "AI Product Manager",
      "Okta / SailPoint / CyberArk Specialist",
      "Other AI or IAM role",
    ],
  },
  "project": {
    label: "What type of project?",
    options: [
      "AI Implementation / LLM Integration",
      "IAM Platform Implementation",
      "Zero Trust Architecture",
      "Data Platform Build",
      "MLOps / AI Operations",
      "Application Modernization",
      "Other",
    ],
  },
  "general-talent": {
    label: "What technology area?",
    options: [
      "Software Engineering",
      "Data Engineering",
      "Cloud / DevOps",
      "QA / Automation",
      "Cybersecurity",
      "Product / PMO / BA",
      "Other",
    ],
  },
};

const displayFont = { fontFamily: "var(--font-display, 'Plus Jakarta Sans', sans-serif)" };

export default function FinalCTA() {
  const [activeToggle, setActiveToggle] = useState<"ai-iam-talent" | "project" | "general-talent">("ai-iam-talent");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    selection: "",
    message: "",
  });
  const [focused, setFocused] = useState<string | null>(null);

  const activeDropdown = DROPDOWN_OPTIONS[activeToggle];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm outline-none transition-all duration-200 ${
      focused === field
        ? "ring-4 ring-[#E85D04]/10 border-[#E85D04]"
        : "hover:border-gray-300 focus:border-[#E85D04]"
    }`;

  return (
    <section className="relative py-24 bg-white border-t border-gray-100 overflow-hidden">
      {/* Background orbs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -right-20 top-1/3 w-[500px] h-[500px] rounded-full blur-[130px] opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #E85D04 0%, transparent 70%)" }}
        />
        <div
          className="absolute -left-20 bottom-10 w-[400px] h-[400px] rounded-full blur-[110px] opacity-[0.05]"
          style={{ background: "radial-gradient(circle, #E85D04 0%, transparent 70%)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: STEPS */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#E85D04] bg-[#FFF4EC] w-fit px-3.5 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E85D04] animate-pulse" />
                Engage NexeraTech
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1628] leading-tight mb-4" style={displayFont}>
                How We Partner
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-12">
                Accelerate your engineering capacity or deploy compliant workflows using our clear 4-step governance model.
              </p>

              {/* Steps timeline */}
              <div className="relative pl-8 border-l border-gray-100 space-y-10">
                {STEPS.map((step, index) => {
                  const StepIcon = step.icon;
                  return (
                    <div key={index} className="relative">
                      {/* Timeline dot */}
                      <div className="absolute -left-[45px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-white border border-gray-100 shadow-sm text-xs font-bold text-gray-400 group-hover:text-[#E85D04]">
                        <span className="text-[#E85D04]">{step.num}</span>
                      </div>
                      
                      {/* Step content */}
                      <div className="flex gap-4 items-start">
                        <div className="w-10 h-10 rounded-xl bg-[#FFF4EC] flex items-center justify-center flex-shrink-0">
                          <StepIcon className="w-5 h-5 text-[#E85D04]" />
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-[#0A1628]" style={displayFont}>{step.title}</h3>
                          <p className="text-gray-500 text-xs mt-1.5 leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-gray-100 p-8 sm:p-10 shadow-2xl hover:shadow-[0_32px_80px_rgba(0,0,0,0.06)] transition-all duration-300 relative overflow-hidden">
              {/* Decorative top border line */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-[#E85D04]" />

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-[#FFF4EC] flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-[#E85D04]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0A1628] mb-3" style={displayFont}>
                    Inquiry Received Successfully
                  </h3>
                  <p className="text-gray-500 text-sm max-w-sm leading-relaxed mb-6">
                    Thank you for reaching out! A NexeraTech domain specialist will analyze your parameters and respond within one business day.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", company: "", selection: "", message: "" });
                    }}
                    className="px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full text-xs font-semibold transition-colors"
                  >
                    Send Another Request
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-[#0A1628] mb-1" style={displayFont}>
                      Specify Your Requirements
                    </h3>
                    <p className="text-xs text-gray-400 mb-6">
                      Select your business need to view specialized options.
                    </p>

                    {/* Toggle Options */}
                    <div className="flex flex-col sm:flex-row gap-2 bg-gray-50 p-1.5 rounded-2xl border border-gray-200/50 mb-6">
                      {TOGGLE_OPTIONS.map((opt) => {
                        const isActive = activeToggle === opt.id;
                        return (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => {
                              setActiveToggle(opt.id as any);
                              setForm({ ...form, selection: "" });
                            }}
                            className={`flex-1 px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 ${
                              isActive
                                ? "bg-[#E85D04] text-white shadow-md shadow-[#E85D04]/25"
                                : "text-gray-600 hover:text-[#0A1628] hover:bg-gray-100"
                            }`}
                          >
                            {opt.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Form fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">Your Name</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        onFocus={() => setFocused("name")}
                        onBlur={() => setFocused(null)}
                        className={inputClass("name")}
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">Business Email</label>
                      <input
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">Company Name</label>
                      <input
                        type="text"
                        required
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        onFocus={() => setFocused("company")}
                        onBlur={() => setFocused(null)}
                        className={inputClass("company")}
                        placeholder="Enter company name"
                      />
                    </div>

                    <div className="relative">
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">
                        {activeDropdown.label}
                      </label>
                      <div className="relative">
                        <select
                          required
                          value={form.selection}
                          onChange={(e) => setForm({ ...form, selection: e.target.value })}
                          onFocus={() => setFocused("selection")}
                          onBlur={() => setFocused(null)}
                          className={`${inputClass("selection")} appearance-none pr-10`}
                        >
                          <option value="" disabled hidden>Select an option...</option>
                          {activeDropdown.options.map((opt, i) => (
                            <option key={i} value={opt}>{opt}</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">Describe Requirements</label>
                    <textarea
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                      rows={4}
                      className={`${inputClass("message")} resize-none`}
                      placeholder="Detail stack requirements, project scope, timeline details..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#E85D04] text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-[#E85D04]/30 hover:bg-[#d05303] transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-50"
                  >
                    {loading ? (
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        Submit Inquiry
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
