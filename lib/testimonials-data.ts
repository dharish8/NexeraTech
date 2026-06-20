export interface Testimonial {
  id: string;
  client: string;
  role: string;
  company: string;
  industry: string;
  service: string;
  geography: string;
  outcome: string;
  quote: string;
  flag: string;
  color: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    client: "James Whitfield",
    role: "VP of Engineering",
    company: "FinBridge Technologies, USA",
    industry: "BFSI / Fintech",
    service: "Offshore IT & Staff Augmentation",
    geography: "USA",
    flag: "🇺🇸",
    outcome: "Scaled from 0 to 6-person offshore team in under 60 days",
    quote: "We engaged Nexeratech when we needed to scale our engineering team fast without compromising on quality. Within three weeks they had placed two senior backend engineers and a QA lead who integrated seamlessly into our sprint cadence. The communication was excellent, the talent was exactly what they promised, and the commercial model was transparent from day one. We have since expanded the engagement to a dedicated team of six.",
    color: "#E85D04"
  },
  {
    id: "t2",
    client: "Sarah Mitchell",
    role: "Head of Technology",
    company: "PrecisionHealth UK, United Kingdom",
    industry: "Healthcare",
    service: "Software Development & Cloud Services",
    geography: "United Kingdom",
    flag: "🇬🇧",
    outcome: "Portal delivered on schedule, zero compliance issues at audit",
    quote: "Nexeratech built our patient data management portal from scratch — on time, within budget, and fully HIPAA-aligned. What impressed me most was how proactively they flagged compliance risks during the architecture phase, before they became problems. Their team took genuine ownership of the product. I have worked with a lot of offshore vendors and Nexeratech's quality of communication and delivery accountability stands out significantly.",
    color: "#0A1628"
  },
  {
    id: "t3",
    client: "Arjun Mehta",
    role: "CTO",
    company: "LegalEdge AI, India",
    industry: "Technology / SaaS",
    service: "AI / ML Services",
    geography: "India",
    flag: "🇮🇳",
    outcome: "AI prototype delivered in 14 days · 94% classification accuracy achieved",
    quote: "We brought in Nexeratech to build an AI-powered document classification engine for our legal-tech product. They recommended a RAG-based architecture, built a working prototype in two weeks, and had production-ready code deployed within six weeks. The model accuracy exceeded our targets. Their AI team actually understands the business context behind the technology — they asked the right questions and built the right solution.",
    color: "#E85D04"
  },
  {
    id: "t4",
    client: "Marcus Delgado",
    role: "Director of IT Security",
    company: "Crestline Financial, USA",
    industry: "BFSI / Fintech",
    service: "IAM & Cybersecurity",
    geography: "USA",
    flag: "🇺🇸",
    outcome: "400-user Okta rollout completed in 21 days · 3 security gaps identified and remediated",
    quote: "Our Okta implementation was behind schedule and our internal team lacked the bandwidth to fix it. Nexeratech came in, assessed the situation in two days, and delivered a fully functional SSO and MFA rollout across 400 users within three weeks. They also identified three access policy gaps that our previous vendor had missed. Their IAM team's depth of knowledge — Okta, Azure AD, Zero Trust — is genuinely impressive for a company of their size.",
    color: "#E85D04"
  },
  {
    id: "t5",
    client: "Priya Nair",
    role: "HR Director",
    company: "Vertex Industries, India",
    industry: "Manufacturing",
    service: "Payroll & EOR Services",
    geography: "India",
    flag: "🇮🇳",
    outcome: "Full payroll compliance for 80+ employees across 3 states, zero errors in 8 months",
    quote: "Managing payroll for a workforce spread across three states was creating serious compliance headaches for us. Nexeratech took over the entire process — monthly payroll, PF, ESI, TDS, and HR documentation — and made it completely hands-off for our team. The first month was seamless. More importantly, they proactively flagged a statutory compliance issue from the previous year and helped us correct it before it became a penalty. That alone justified the engagement.",
    color: "#E85D04"
  },
  {
    id: "t6",
    client: "Charlotte Davies",
    role: "Operations Director",
    company: "Ashford Legal Partners, UK",
    industry: "Legal",
    service: "Software Development & AI / ML",
    geography: "United Kingdom",
    flag: "🇬🇧",
    outcome: "2 hours per fee-earner saved weekly · portal adopted by 100% of solicitors within 2 weeks",
    quote: "We needed a client portal with document management and AI-assisted contract review features. Nexeratech delivered a clean, secure, and intuitive platform that our solicitors adopted immediately with minimal training. The AI contract review module has saved our fee-earners an average of two hours per week each. What stood out was that Nexeratech understood the legal sector's sensitivity around data — security was built in, not bolted on.",
    color: "#0A1628"
  }
];
