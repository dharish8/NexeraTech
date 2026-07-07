import Link from "next/link";
import { Mail, MapPin, Phone, Linkedin, Twitter, Facebook, Youtube, ArrowRight, Globe, Zap, Instagram } from "lucide-react";
import { services } from "@/lib/services-data";

const footerServices = services.slice(0, 6);

const displayFont = { fontFamily: "var(--font-display, 'Plus Jakarta Sans', sans-serif)" };

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: "#070D19" }}>

      {/* ─── CTA Strip ─────────────────────────────────────────────────────── */}
      <div className="relative overflow-hidden border-b border-white/[0.06]">
        {/* Line grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Left orange orb */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-20 top-1/2 -translate-y-1/2 w-[500px] h-[280px] rounded-full blur-[100px] opacity-22"
          style={{ background: "radial-gradient(circle, rgba(232,93,4,0.38) 0%, transparent 70%)" }}
        />
        {/* Right subtle orb */}
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[220px] rounded-full blur-[100px] opacity-12"
          style={{ background: "radial-gradient(circle, rgba(255,128,43,0.25) 0%, transparent 70%)" }}
        />
        {/* Top gradient border */}
        <div className="absolute inset-x-0 top-0 h-[1px]" style={{ background: "linear-gradient(90deg, transparent, rgba(232,93,4,0.5), transparent)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-4 h-4 text-[#E85D04]" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/40">
                Ready to Build Together?
              </span>
            </div>
            <h3
              className="text-2xl md:text-3xl font-black text-white leading-tight"
              style={displayFont}
            >
              Let&apos;s talk about your<br className="hidden md:block" />
              technology challenges.
            </h3>
          </div>
          <Link href="/contact" className="glow-btn flex-shrink-0">
            Start a Conversation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* ─── Main Footer ───────────────────────────────────────────────────── */}
      <div
        className="relative"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(232,93,4,0.05) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

            {/* Brand Column */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-3 mb-6 group w-fit">
                <img
                  src="/company-logo/NexeraTech-Solutions_logo.webp"
                  alt="NexeraTech Solutions"
                  className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
              <p className="text-white/40 text-sm leading-relaxed mb-6">
                Next-generation IT services from Hyderabad. Offshore IT, AI/ML,
                IAM, and Payroll for US, UK, and India markets.
              </p>
              <div className="flex flex-col gap-3 text-sm text-white/40">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#E85D04] flex-shrink-0 mt-0.5" />
                  <span>B2, Touch River Classic, Street no 5, Czech colony, Sanath Nagar, Hyderabad Telangana India - 500018 Est. 2024</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#E85D04] flex-shrink-0" />
                  <a href="mailto:hr@nexeratechinc.com" className="hover:text-[#E85D04] transition-colors">
                    hr@nexeratechinc.com
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#E85D04] flex-shrink-0" />
                  <span>+91 970 186 7111</span>
                </div>
              </div>
              {/* Social Icons */}
              <div className="flex items-center gap-2 mt-6">
                {[
                  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/nexeratech-solutions/" },
                  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/nexeratechsolutions/" },
                  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/NexeraTechSolutions" },
                ].map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="group w-9 h-9 rounded-xl flex items-center justify-center bg-white/[0.04] border border-white/[0.08] transition-all duration-200 hover:scale-110 hover:bg-[#E85D04] hover:border-transparent hover:shadow-[0_4px_14px_rgba(232,93,4,0.40)]"
                  >
                    <Icon className="w-4 h-4 text-white/55 group-hover:text-white transition-colors duration-200" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-white mb-5 text-[11px] uppercase tracking-[0.18em]" style={displayFont}>
                Services
              </h4>
              <ul className="flex flex-col gap-2.5">
                {footerServices.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="text-sm text-white/40 hover:text-[#E85D04] transition-colors animated-underline"
                    >
                      {s.shortTitle}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/services"
                    className="text-sm text-[#E85D04] hover:text-[#FF802B] transition-colors font-semibold"
                  >
                    View all 12 →
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-bold text-white mb-5 text-[11px] uppercase tracking-[0.18em]" style={displayFont}>
                Company
              </h4>
              <ul className="flex flex-col gap-2.5">
                {[
                  { label: "About Us", href: "/about" },
                  { label: "Industries", href: "/industries" },
                  { label: "Case Studies", href: "/case-studies" },
                  { label: "Testimonials", href: "/testimonials" },
                  { label: "Blog", href: "/blog" },
                  { label: "Contact", href: "/contact" },
                  { label: "CSR Foundation", href: "https://i-shara-foundation.vercel.app/csr-foundation" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/40 hover:text-[#E85D04] transition-colors"
                      {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Markets + CSR */}
            <div>
              <h4 className="font-bold text-white mb-5 text-[11px] uppercase tracking-[0.18em]" style={displayFont}>
                Markets
              </h4>
              <div className="flex flex-col gap-3.5 mb-8">
                {[
                  { flag: "🇺🇸", market: "United States", detail: "US clients & teams" },
                  { flag: "🇬🇧", market: "United Kingdom", detail: "UK clients & teams" },
                  { flag: "🇮🇳", market: "India", detail: "Hyderabad HQ" },
                ].map((m) => (
                  <div key={m.market} className="flex items-center gap-3">
                    <span className="text-xl">{m.flag}</span>
                    <div>
                      <p className="text-sm text-white font-semibold">{m.market}</p>
                      <p className="text-[11px] text-white/30">{m.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* IShara Foundation */}
              <div
                className="p-4 rounded-xl relative overflow-hidden"
                style={{
                  background: "rgba(232,93,4,0.08)",
                  border: "1px solid rgba(232,93,4,0.22)",
                }}
              >
                <div className="absolute inset-x-0 top-0 h-[1px]" style={{ background: "linear-gradient(90deg, transparent, rgba(232,93,4,0.5), transparent)" }} />
                <div className="flex items-center gap-2 mb-1">
                  <Globe className="w-3.5 h-3.5 text-[#E85D04]" />
                  <p className="text-[10px] text-[#E85D04] font-bold uppercase tracking-[0.18em]">
                    CSR Initiative
                  </p>
                </div>
                <p className="text-sm text-white font-bold">IShara Foundation</p>
                <p className="text-[11px] text-white/35 mt-0.5">Technology for social impact</p>
                <div className="flex items-center gap-2 mt-3 mb-2">
                  {[
                    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/isharafoundation" },
                    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/ishara.foundation/" },
                    { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/isharafoundation/" },
                  ].map(({ icon: Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="group/social w-6 h-6 rounded bg-white/[0.04] border border-white/[0.08] flex items-center justify-center transition-all duration-200 hover:scale-110 hover:bg-[#E85D04] hover:border-transparent"
                    >
                      <Icon className="w-3.5 h-3.5 text-white/55 group-hover/social:text-white transition-colors duration-200" />
                    </a>
                  ))}
                </div>
                <Link
                  href="https://i-shara-foundation.vercel.app/csr-foundation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#E85D04] hover:text-[#FF802B] mt-2 block transition-colors font-semibold"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div
            className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
            style={{ borderColor: "rgba(255,255,255,0.06)" }}
          >
            <p className="text-sm text-white/25">
              © {currentYear} NexeraTech Solutions Private Limited. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-white/25">
              <Link href="#" className="hover:text-[#E85D04] transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-[#E85D04] transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-[#E85D04] transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
