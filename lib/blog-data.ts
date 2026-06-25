export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  color: string;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "why-offshore-it-beats-us-hiring-in-2024",
    title: "Why Offshore IT Outperforms Local US Hiring for Series A Engineering Teams",
    excerpt:
      "The 90-to-120-day US engineering hire is quietly killing product timelines for Series A startups. Here is why the offshore model — done right — is both faster and 40% cheaper without quality compromise.",
    category: "Offshore IT",
    author: "Nexeratech Editorial",
    date: "June 10, 2025",
    readTime: "6 min read",
    color: "#E85D04",
    image: "/Blog/Featured-Post.webp",
  },
  {
    slug: "hipaa-compliant-cloud-architecture-aws",
    title: "Building HIPAA-Compliant Systems on AWS: A Technical Architecture Guide",
    excerpt:
      "HIPAA compliance is not just a checklist — it is an architecture discipline. This guide covers the key AWS services, patterns, and misconfigurations that health-tech teams need to get right from day one.",
    category: "Healthcare Tech",
    author: "Nexeratech Engineering",
    date: "May 28, 2025",
    readTime: "9 min read",
    color: "#0A1628",
    image: "/Blog/Latest-articles/healthcare-tech.webp",
  },
  {
    slug: "rag-vs-finetuning-enterprise-ai",
    title: "RAG vs. Fine-Tuning: Which AI Architecture Is Right for Your Enterprise?",
    excerpt:
      "Two dominant approaches to enterprise AI deployment — Retrieval-Augmented Generation and model fine-tuning — solve fundamentally different problems. Here is how to choose the right one for your use case.",
    category: "AI / ML",
    author: "Nexeratech AI Practice",
    date: "May 15, 2025",
    readTime: "8 min read",
    color: "#E85D04",
    image: "/Blog/Latest-articles/AIML.webp",
  },
  {
    slug: "okta-implementation-mistakes",
    title: "7 Critical Okta Implementation Mistakes (And How to Fix Them)",
    excerpt:
      "After auditing dozens of Okta configurations, we have seen the same misconfigurations appear again and again. Here are the seven most dangerous ones — and the remediation steps for each.",
    category: "IAM & Security",
    author: "Nexeratech IAM Team",
    date: "May 5, 2025",
    readTime: "7 min read",
    color: "#E85D04",
    image: "/Blog/Latest-articles/IAM-Security.webp",
  },
  {
    slug: "india-payroll-compliance-guide-2025",
    title: "India Payroll Compliance Guide 2025: PF, ESI, TDS, and the EPFO Audit Trail",
    excerpt:
      "India's statutory payroll landscape is more complex than most companies realize. This guide covers the key obligations, filing timelines, and the compliance gaps most commonly flagged in EPFO and TDS audits.",
    category: "Payroll & EOR",
    author: "Nexeratech Compliance Team",
    date: "April 20, 2025",
    readTime: "10 min read",
    color: "#0A1628",
    image: "/Blog/Latest-articles/Payroll-EOR.webp",
  },
  {
    slug: "zero-trust-architecture-mid-market",
    title: "Zero Trust Architecture for Mid-Market Firms: A Practical Rollout Guide",
    excerpt:
      "Zero Trust is no longer an enterprise-only concept. This guide breaks down how mid-market organizations can move away from legacy VPN models and implement a Zero Trust posture without a 12-month implementation program.",
    category: "Cybersecurity",
    author: "Nexeratech Security Practice",
    date: "April 8, 2025",
    readTime: "8 min read",
    color: "#0A1628",
    image: "/Blog/Latest-articles/Cybersecurity.webp",
  },
];
