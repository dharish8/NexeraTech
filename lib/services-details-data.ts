import * as Lucide from "lucide-react";

export interface FeatureDetail {
  title: string;
  desc: string;
  iconName: string;
  image?: string;
}

export interface UseCaseDetail {
  title: string;
  highlight: string;
  desc: string;
  iconName: string;
}

export interface ChallengeDetail {
  label: string;
  desc: string;
}

export interface ServiceDetailConfig {
  features: FeatureDetail[];
  useCases: UseCaseDetail[];
  technologies: string[];
  challenges?: ChallengeDetail[];
  featureSubtitle?: string;
  useCaseSubtitle?: string;
  challengeSubtitle?: string;
}

export const servicesDetailsMap: Record<string, ServiceDetailConfig> = {
  "offshore-it-services": {
    featureSubtitle: "Dedicated engineering teams that integrate directly into your delivery workflow.",
    useCaseSubtitle: "Leverage senior offshore talent to accelerate your roadmap and optimize budget.",
    challengeSubtitle: "The hidden costs and friction that slow offshore IT delivery — and how we eliminate them.",
    technologies: ["React", "Node.js", "AWS", "Jira", "GitHub"],
    challenges: [
      { label: "Timezone misalignment", desc: "Lost sprint velocity and delayed handoffs when offshore teams operate in complete isolation" },
      { label: "Talent quality uncertainty", desc: "CVs that look senior but lack production depth, leaving clients with underperforming engineers" },
      { label: "Slow hiring timelines", desc: "3-month recruitment cycles for US/UK roles prevent fast delivery team scaling" },
      { label: "Communication overhead", desc: "Multiple layers of management introducing delays, misinterpretations, and accountability gaps" },
    ],
    features: [
      {
        title: "Senior Tech Talent",
        desc: "Dedicated offshore engineering squads customized to your technology requirements.",
        iconName: "Users",
        image: "/services-assets/offshore-it-services/Key-Features-Capabilities/Senior-Tech-Talent.webp"
      },
      {
        title: "Local Engagement",
        desc: "Onshore management for seamless timezone alignment and communication.",
        iconName: "UserCheck",
        image: "/services-assets/offshore-it-services/Key-Features-Capabilities/Local-Engagement.webp"
      },
      {
        title: "Timezone Coverage",
        desc: "IST, EST & GMT shifts to ensure overlap with your local business hours.",
        iconName: "Globe",
        image: "/services-assets/offshore-it-services/Key-Features-Capabilities/Timezone-Coverage.webp"
      },
      {
        title: "Agile Development",
        desc: "Scrum methodology, daily standups, sprint reviews, and retrospective loops.",
        iconName: "Zap",
        image: "/services-assets/offshore-it-services/Key-Features-Capabilities/Agile-Development.webp"
      },
      {
        title: "Integrated Workspaces",
        desc: "Full integration with your Jira, Slack, GitHub, and internal channels.",
        iconName: "Layers",
        image: "/services-assets/offshore-it-services/Key-Features-Capabilities/Integrated-Workspaces.webp"
      },
      {
        title: "Exclusive Resources",
        desc: "Engineers work 100% on your product, not shared with other projects.",
        iconName: "CheckCircle",
        image: "/services-assets/offshore-it-services/Key-Features-Capabilities/Exclusive-Resources.webp"
      }
    ],
    useCases: [
      {
        title: "Scale dev squads",
        highlight: "without local hiring friction",
        desc: "Onboard pre-vetted engineers in 14 days rather than 3 months.",
        iconName: "Users"
      },
      {
        title: "Boost product velocity",
        highlight: "for upcoming releases",
        desc: "Add specialized expertise for a critical sprint or feature launch.",
        iconName: "Zap"
      },
      {
        title: "Establish a remote lab",
        highlight: "from the ground up",
        desc: "Set up a highly productive development center in Hyderabad.",
        iconName: "Globe"
      },
      {
        title: "Optimize developer costs",
        highlight: "by up to 40-50%",
        desc: "Access premium global talent at a smart commercial price point.",
        iconName: "BarChart3"
      }
    ]
  },
  "software-development": {
    featureSubtitle: "End-to-end engineering capabilities to build, scale, and modernize your digital products.",
    useCaseSubtitle: "Our expertise helps businesses across industries solve complex challenges and accelerate growth.",
    challengeSubtitle: "Common software delivery pitfalls that stall roadmaps — and how we solve them from day one.",
    technologies: ["React", "Next.js", "Node.js", "Python", "PostgreSQL"],
    challenges: [
      { label: "Slow time to market", desc: "Bloated planning cycles and unstructured sprints that prevent features from reaching production" },
      { label: "Technical debt accumulation", desc: "Legacy code, poor architecture decisions, and skipped testing creating compounding delivery friction" },
      { label: "Integration failures", desc: "Third-party APIs and ERP/EHR system connections breaking due to poor contract design" },
      { label: "Unplanned scope creep", desc: "Poorly defined requirements leading to runaway timelines and inflated project budgets" },
    ],
    features: [
      {
        title: "Full-stack Web & Mobile Development",
        desc: "Modern, scalable, and responsive applications built with the latest technologies.",
        iconName: "Monitor",
        image: "/services-assets/software-development/Full-stack-Web-Mobile-Development.webp"
      },
      {
        title: "Cloud-native Architecture",
        desc: "Secure, resilient, and high-performance solutions on AWS, Azure, and GCP.",
        iconName: "Cloud",
        image: "/services-assets/software-development/Cloud-native-Architecture.webp"
      },
      {
        title: "API Design & Integrations",
        desc: "Robust APIs and seamless third-party integrations that power connected experiences.",
        iconName: "Zap",
        image: "/services-assets/software-development/API-Design-Integrations.webp"
      },
      {
        title: "SaaS Product Engineering",
        desc: "From MVP to scale - build SaaS products that are scalable, reliable, and market-ready.",
        iconName: "Rocket",
        image: "/services-assets/software-development/SaaS-Product-Engineering.webp"
      },
      {
        title: "Legacy System Modernization",
        desc: "Modernize legacy systems and transform them into agile, future-ready platforms.",
        iconName: "Layers",
        image: "/services-assets/software-development/Legacy-System-Modernization.webp"
      },
      {
        title: "CI/CD Pipeline & DevOps",
        desc: "Automate, deploy, and scale with best-in-class DevOps practices and CI/CD pipelines.",
        iconName: "Settings",
        image: "/services-assets/software-development/CI-CD-Pipeline-DevOps.webp"
      }
    ],
    useCases: [
      {
        title: "Build a new SaaS product",
        highlight: "from MVP to production",
        desc: "Validate fast, iterate smarter, and go to market with confidence.",
        iconName: "Rocket"
      },
      {
        title: "Modernize a legacy",
        highlight: "enterprise application",
        desc: "Improve performance, reduce costs, and unlock new business value.",
        iconName: "Monitor"
      },
      {
        title: "Integrate EHR/ERP",
        highlight: "systems via API",
        desc: "Seamlessly connect systems and streamline your business workflows.",
        iconName: "Layers"
      },
      {
        title: "Deliver a compliant healthcare",
        highlight: "or fintech platform",
        desc: "Built with security, compliance, and scalability at the core.",
        iconName: "Shield"
      },
      {
        title: "End-to-end product development",
        highlight: "and support",
        desc: "From strategy and development to deployment and post-launch support.",
        iconName: "Code"
      }
    ]
  },
  "ai-ml-services": {
    featureSubtitle: "Harness machine learning and generative AI to automate operations and drive intelligence.",
    useCaseSubtitle: "Move from AI prototypes to scalable production deployments.",
    challengeSubtitle: "AI adoption barriers that keep businesses stuck in proof-of-concept mode — solved.",
    technologies: ["Python", "PyTorch", "OpenAI", "Pinecone", "AWS"],
    challenges: [
      { label: "Stuck in PoC stage", desc: "AI prototypes that look impressive but never make it into production workflows" },
      { label: "Data quality issues", desc: "Unstructured, inconsistent datasets that produce unreliable model predictions" },
      { label: "Model hallucination risk", desc: "LLMs generating confident but incorrect outputs in compliance-sensitive environments" },
      { label: "High compute costs", desc: "Poorly optimized inference pipelines burning excessive GPU and cloud resources" },
    ],
    features: [
      {
        title: "LLM Integration",
        desc: "Incorporate models from OpenAI, Anthropic Claude, and Google Gemini.",
        iconName: "Brain",
        image: "/ai-ml-services/LLM-Integration.webp"
      },
      {
        title: "RAG Architectures",
        desc: "Context-aware question answering engines using vector databases.",
        iconName: "Search",
        image: "/ai-ml-services/RAG-Architectures.webp"
      },
      {
        title: "Custom ML Models",
        desc: "Supervised and unsupervised models for prediction and anomaly detection.",
        iconName: "Cpu",
        image: "/ai-ml-services/Custom-ML-Models.webp"
      },
      {
        title: "Document Intelligence",
        desc: "Automated text extraction, processing, and compliance reporting.",
        iconName: "Layers",
        image: "/ai-ml-services/Document-Intelligence.webp"
      },
      {
        title: "Predictive Models",
        desc: "Forecasting trends, customer churn, and operational bottlenecks.",
        iconName: "BarChart3",
        image: "/ai-ml-services/Predictive--Models.webp"
      },
      {
        title: "Data Pipelines",
        desc: "ETL processes, data warehousing, and real-time streaming pipelines.",
        iconName: "Database",
        image: "/ai-ml-services/Data-Pipelines.webp"
      }
    ],
    useCases: [
      {
        title: "Automate contract analysis",
        highlight: "for legal teams",
        desc: "Extract clauses and flag anomalies with high classification accuracy.",
        iconName: "Layers"
      },
      {
        title: "Deploy intelligent chat",
        highlight: "for customer support",
        desc: "Resolve common inquiries in real-time with context-aware RAG systems.",
        iconName: "Brain"
      },
      {
        title: "Detect banking fraud",
        highlight: "in real-time",
        desc: "Flag anomalous transaction patterns before they finalize.",
        iconName: "Shield"
      },
      {
        title: "Unify enterprise analytics",
        highlight: "across data silos",
        desc: "Aggregate raw data into accessible business intelligence interfaces.",
        iconName: "Database"
      }
    ]
  },
  "iam-cybersecurity": {
    featureSubtitle: "Protect user identities and enterprise assets with modern Zero Trust IAM.",
    useCaseSubtitle: "Meet strict regulatory compliance and safeguard sensitive enterprise data.",
    challengeSubtitle: "Identity security gaps that expose enterprises to breaches and compliance failure.",
    technologies: ["Okta", "Azure", "AWS", "CyberArk", "Entra ID"],
    challenges: [
      { label: "Legacy VPN dependency", desc: "Perimeter-based security models allowing lateral movement once credentials are compromised" },
      { label: "Unmanaged privileged accounts", desc: "Admin credentials stored in spreadsheets or shared via email with no rotation policy" },
      { label: "Audit compliance gaps", desc: "Incomplete access logs and misconfigured policies failing SOC 2 and HIPAA audit checkpoints" },
      { label: "Fragmented identity platforms", desc: "Multiple disconnected IAM tools creating provisioning delays and orphaned accounts" },
    ],
    features: [
      {
        title: "Okta Single Sign-On",
        desc: "Enterprise-grade Okta integration, policy setup, and provisioning.",
        iconName: "Shield",
        image: "/services-assets/iam-cybersecurity/Okta-Single-Sign-On.webp"
      },
      {
        title: "Microsoft Azure AD / Entra ID",
        desc: "Identity federation, access reviews, and hybrid AD setups.",
        iconName: "Users",
        image: "/services-assets/iam-cybersecurity/Microsoft-Azure-AD-Entra-ID.webp"
      },
      {
        title: "Cloud Security Policy",
        desc: "Granular role configurations, resource policies, and compliance guardrails.",
        iconName: "Cloud",
        image: "/services-assets/iam-cybersecurity/Cloud-Security-Policy.webp"
      },
      {
        title: "Zero Trust Access",
        desc: "Deploy modern boundaryless security replacing legacy VPN systems.",
        iconName: "Lock",
        image: "/services-assets/iam-cybersecurity/Zero-Trust-Access.webp"
      },
      {
        title: "Privileged Access Management",
        desc: "Deploy CyberArk and BeyondTrust to protect system administrator credentials.",
        iconName: "Key",
        image: "/services-assets/iam-cybersecurity/Privileged-Access-Management.webp"
      },
      {
        title: "SSO & MFA Policies",
        desc: "Enforce secure multi-factor authentication across your enterprise apps.",
        iconName: "UserCheck",
        image: "/services-assets/iam-cybersecurity/SSO-MFA-Policies.webp"
      }
    ],
    useCases: [
      {
        title: "Transition away from VPNs",
        highlight: "to Zero Trust",
        desc: "Prevent lateral movement and enforce device posturing.",
        iconName: "Lock"
      },
      {
        title: "Deploy MFA and SSO",
        highlight: "across all operations",
        desc: "Protect company data against credential stuffing and phishing attacks.",
        iconName: "UserCheck"
      },
      {
        title: "Remediation and audit prep",
        highlight: "for Okta and Entra ID",
        desc: "Fix critical config gaps before compliance checkpoints.",
        iconName: "Shield"
      },
      {
        title: "Identify security gaps",
        highlight: "for SOC 2 & HIPAA",
        desc: "Ensure logging and access controls satisfy regulatory audits.",
        iconName: "CheckCircle"
      }
    ]
  },
  "payroll-eor": {
    featureSubtitle: "End-to-end payroll processing and workforce compliance, fully managed.",
    useCaseSubtitle: "Simplify global expansion and eliminate administrative overhead.",
    challengeSubtitle: "Payroll and compliance complexities that expose growing businesses to regulatory risk.",
    technologies: ["Razorpay", "Excel", "Slack", "Jira"],
    challenges: [
      { label: "Entity setup overhead", desc: "International companies spending months and thousands to set up a local India legal entity" },
      { label: "Statutory non-compliance", desc: "PF, ESIC, and TDS filings missed or filed incorrectly, attracting government penalties" },
      { label: "Manual payroll errors", desc: "Salary miscalculations and missed deductions causing employee dissatisfaction and legal risk" },
      { label: "Multi-state complexity", desc: "Varying professional tax rates and labor laws across Indian states creating compliance confusion" },
    ],
    features: [
      {
        title: "Salary Disbursement",
        desc: "On-time and error-free payroll calculation and direct bank transfer.",
        iconName: "Banknote",
        image: "/services-assets/payroll-eor/Salary-Disbursement.webp"
      },
      {
        title: "PF & ESIC Filing",
        desc: "Statutory tax deductions, monthly filing, and audit management.",
        iconName: "CheckCircle",
        image: "/services-assets/payroll-eor/PF-ESIC-Filing.webp"
      },
      {
        title: "Employer of Record",
        desc: "Hire employees in India without setting up a local entity.",
        iconName: "UserCheck",
        image: "/services-assets/payroll-eor/Employer-of-Record.webp"
      },
      {
        title: "Employee Onboarding",
        desc: "Contract preparation, background verification, and compliance checks.",
        iconName: "Users",
        image: "/services-assets/payroll-eor/Employee-Onboarding.webp"
      },
      {
        title: "Multi-State Compliance",
        desc: "Handle varying state tax regulations and professional taxes.",
        iconName: "Globe",
        image: "/services-assets/payroll-eor/Multi-State-Compliance.webp"
      },
      {
        title: "Compliance Remediation",
        desc: "Audit responses and statutory cleanups to mitigate legal risks.",
        iconName: "Shield",
        image: "/services-assets/payroll-eor/Compliance-Remediation.webp"
      }
    ],
    useCases: [
      {
        title: "Hire remote talent in India",
        highlight: "without local entities",
        desc: "Access top talent rapidly while we manage HR, payroll, and benefits.",
        iconName: "Users"
      },
      {
        title: "Clean up legacy filings",
        highlight: "and tax disclosures",
        desc: "Remediate previous administrative errors before audits occur.",
        iconName: "Shield"
      },
      {
        title: "Delegate payroll processing",
        highlight: "to reduce team fatigue",
        desc: "Save internal administrative hours and ensure 100% filing accuracy.",
        iconName: "Banknote"
      },
      {
        title: "Establish statutory compliance",
        highlight: "across multiple states",
        desc: "Ensure strict adherence to PF, ESIC, and local labor laws.",
        iconName: "Globe"
      }
    ]
  },
  "staff-augmentation": {
    featureSubtitle: "Senior engineering talent that integrates directly into your delivery workflow.",
    useCaseSubtitle: "Scale your development capabilities without recruiting delays.",
    challengeSubtitle: "Team scaling blockers that delay product releases and inflate engineering budgets.",
    technologies: ["React", "Node.js", "Python", "Kubernetes", "AWS"],
    challenges: [
      { label: "Slow hiring pipelines", desc: "3-4 month full-time recruitment cycles blocking critical sprint capacity and feature launches" },
      { label: "Skill gaps in niche areas", desc: "Local markets lacking specialized talent like IAM engineers, ML architects, or FHIR specialists" },
      { label: "High local contract rates", desc: "Premium US/UK contractor day rates making short-term scaling financially unviable" },
      { label: "Onboarding friction", desc: "New engineers taking weeks to become productive without structured integration processes" },
    ],
    features: [
      {
        title: "Senior Tech Talent",
        desc: "Access engineers with 5-15+ years of production experience.",
        iconName: "Users",
        image: "/staff-augmentation/Senior-Tech-Talent.webp"
      },
      {
        title: "Fast Onboarding",
        desc: "Place pre-screened developers in your team within 2-4 weeks.",
        iconName: "Zap",
        image: "/staff-augmentation/Fast-Onboarding.webp"
      },
      {
        title: "Embedded Devs",
        desc: "Talent integrates directly into your Slack, Jira, and GitHub.",
        iconName: "Layers",
        image: "/staff-augmentation/Embedded-Devs.webp"
      },
      {
        title: "Flexible Scaling",
        desc: "Scale resources up or down depending on your sprint goals.",
        iconName: "TrendingUp",
        image: "/staff-augmentation/Flexible-Scaling.webp"
      },
      {
        title: "Replacement Guarantee",
        desc: "Prompt replacement if an engineer does not meet expectations.",
        iconName: "CheckCircle",
        image: "/staff-augmentation/Replacement-Guarantee.webp"
      },
      {
        title: "Overlapping Hours",
        desc: "Engineers operate on your timezone (EST, GMT, or IST).",
        iconName: "Globe",
        image: "/staff-augmentation/Overlapping=Hours.webp"
      }
    ],
    useCases: [
      {
        title: "Fill engineering vacancies",
        highlight: "within weeks, not months",
        desc: "Avoid roadmap delays while searching for permanent hires.",
        iconName: "Users"
      },
      {
        title: "Add niche expertise",
        highlight: "such as IAM or RAG",
        desc: "Get senior specialists for complex feature integrations.",
        iconName: "Brain"
      },
      {
        title: "Boost capacity",
        highlight: "for upcoming releases",
        desc: "Add temporary velocity for critical product launch sprints.",
        iconName: "Zap"
      },
      {
        title: "Optimize resource cost",
        highlight: "vs. local contract rates",
        desc: "Access senior engineering talent at a highly commercial price.",
        iconName: "BarChart3"
      }
    ]
  },
  "cloud-services": {
    featureSubtitle: "Resilient, secure, and cost-optimized cloud infrastructure.",
    useCaseSubtitle: "Architect cloud solutions that grow with your user base.",
    challengeSubtitle: "Cloud architecture mistakes that drive up costs and limit scalability.",
    technologies: ["AWS", "Azure", "Terraform", "Docker", "Kubernetes"],
    challenges: [
      { label: "Cloud cost overruns", desc: "Idle instances, over-provisioned resources, and lack of FinOps discipline burning monthly budgets" },
      { label: "Unplanned downtime", desc: "Single-region deployments and missing disaster recovery plans causing business interruptions" },
      { label: "Security misconfigurations", desc: "Open S3 buckets, overly permissive IAM roles, and unencrypted databases exposing sensitive data" },
      { label: "Migration complexity", desc: "Legacy on-premise systems with undocumented dependencies stalling cloud migration projects" },
    ],
    features: [
      {
        title: "AWS/Azure Solutions",
        desc: "Design robust, highly available cloud-native architectures.",
        iconName: "Cloud",
        image: "/services-assets/cloud-services/AWS-Azure-Solutions.webp"
      },
      {
        title: "Secure Cloud Migration",
        desc: "Seamlessly lift-and-shift or refactor legacy databases to cloud.",
        iconName: "ArrowRight",
        image: "/services-assets/cloud-services/Secure-Cloud-Migration.webp"
      },
      {
        title: "Serverless Architecture",
        desc: "Build microservices using AWS Lambda and API Gateways.",
        iconName: "Cpu",
        image: "/services-assets/cloud-services/Serverless-Architecture.webp"
      },
      {
        title: "IaC (Terraform)",
        desc: "Declarative configuration files to provision resources predictably.",
        iconName: "Terminal",
        image: "/services-assets/cloud-services/IaC-Terraform.webp"
      },
      {
        title: "FinOps & Cost Tuning",
        desc: "Identify idle instances and optimize storage configurations.",
        iconName: "BarChart3",
        image: "/services-assets/cloud-services/FinOps-Cost-Tuning.webp"
      },
      {
        title: "Backup & Redundancy",
        desc: "Implement failover configurations and high-speed data backup loops.",
        iconName: "Shield",
        image: "/services-assets/cloud-services/Backup-Redundancy.webp"
      }
    ],
    useCases: [
      {
        title: "Transition legacy databases",
        highlight: "to cloud servers",
        desc: "Eliminate physical server upkeep and scale storage on-demand.",
        iconName: "Cloud"
      },
      {
        title: "Build HIPAA-compliant",
        highlight: "cloud environments",
        desc: "Implement strict encryption, access logging, and firewalls.",
        iconName: "Shield"
      },
      {
        title: "Audit current cloud bill",
        highlight: "for cost savings",
        desc: "Reduce monthly cloud spend by up to 30% without slowing performance.",
        iconName: "BarChart3"
      },
      {
        title: "Handle viral load spikes",
        highlight: "using autoscaling groups",
        desc: "Configure systems to dynamically spin up resources under high traffic.",
        iconName: "Zap"
      }
    ]
  },
  "managed-it": {
    featureSubtitle: "Proactive monitoring, maintenance, and IT helpdesk support.",
    useCaseSubtitle: "Ensure business continuity and secure device networks.",
    challengeSubtitle: "IT management gaps that put business operations and data at risk.",
    technologies: ["Windows", "Linux", "Okta", "Datadog", "Jira"],
    challenges: [
      { label: "Reactive IT culture", desc: "Issues discovered only after users report them, leading to prolonged downtime and data loss" },
      { label: "Unpatched vulnerabilities", desc: "Systems running outdated software versions exposing organizations to known security exploits" },
      { label: "No IT visibility", desc: "Lack of dashboards or real-time alerts making infrastructure health completely opaque" },
      { label: "SaaS license waste", desc: "Paying for unused software seats and neglecting to deprovision accounts of former employees" },
    ],
    features: [
      {
        title: "Continuous Monitoring",
        desc: "Real-time alerting and incident response to prevent downtime.",
        iconName: "Monitor",
        image: "/managed-it/Continuous-Monitoring.webp"
      },
      {
        title: "Helpdesk Solutions",
        desc: "Responsive technical support for employee machines and portals.",
        iconName: "Users",
        image: "/managed-it/Helpdesk-Solutions.webp"
      },
      {
        title: "Security Patching",
        desc: "Regular software updates and vulnerability sweeps to secure endpoints.",
        iconName: "Shield",
        image: "/managed-it/Security-Patching.webp"
      },
      {
        title: "Backup Verification",
        desc: "Daily cloud backups with automated testing of restore pipelines.",
        iconName: "Database",
        image: "/managed-it/Backup-Verification.webp"
      },
      {
        title: "IT Asset Auditing",
        desc: "Track hardware lifecycles, licenses, and security compliance.",
        iconName: "Layers",
        image: "/managed-it/IT-Asset-Auditing.webp"
      },
      {
        title: "SLA Commitments",
        desc: "Strict response windows for priority incidents to minimize disruption.",
        iconName: "CheckCircle",
        image: "/managed-it/SLA-Commitments.webp"
      }
    ],
    useCases: [
      {
        title: "Delegate IT helpdesk work",
        highlight: "to external specialists",
        desc: "Free up internal engineering staff to focus on product roadmaps.",
        iconName: "Users"
      },
      {
        title: "Monitor server clusters",
        highlight: "around the clock",
        desc: "Avoid service interruptions with proactively patched systems.",
        iconName: "Monitor"
      },
      {
        title: "Clean up employee hardware",
        highlight: "and access profiles",
        desc: "Ensure every work machine has updated security software installed.",
        iconName: "Shield"
      },
      {
        title: "Audit monthly software spend",
        highlight: "and active logins",
        desc: "Deprovision unused accounts to optimize SaaS licensing costs.",
        iconName: "BarChart3"
      }
    ]
  },
  "qa-testing": {
    featureSubtitle: "Comprehensive quality assurance and test automation disciplines.",
    useCaseSubtitle: "Ship clean, bug-free applications with automated testing pipelines.",
    challengeSubtitle: "Quality gaps that cost companies reputation, compliance, and customer trust.",
    technologies: ["Playwright", "Cypress", "Postman", "k6", "GitHub"],
    challenges: [
      { label: "Manual testing bottlenecks", desc: "QA cycles taking weeks instead of hours, blocking release timelines and engineering throughput" },
      { label: "Regression blind spots", desc: "New features breaking existing functionality without any automated detection in place" },
      { label: "Performance under load", desc: "Applications crashing during high-traffic events due to untested scalability thresholds" },
      { label: "Compliance audit failures", desc: "Healthcare and fintech platforms lacking sufficient test evidence for SOC 2 or HIPAA audits" },
    ],
    features: [
      {
        title: "Thorough Manual Testing",
        desc: "Functional, exploratory, and regression verification across devices.",
        iconName: "CheckCircle",
        image: "/qa-testing/Thorough-Manual-Testing.webp"
      },
      {
        title: "E2E Test Automation",
        desc: "Deploy Playwright, Cypress, or Selenium suites for fast checks.",
        iconName: "Terminal",
        image: "/qa-testing/E2E-Test-Automation.webp"
      },
      {
        title: "API Testing & Mocking",
        desc: "Validate contract boundaries and response times using Postman.",
        iconName: "Cpu",
        image: "/qa-testing/API-Testing-Mocking.webp"
      },
      {
        title: "Load & Stress Testing",
        desc: "Sustain user traffic spikes using k6 and JMeter audits.",
        iconName: "BarChart3",
        image: "/qa-testing/Load-Stress-Testing.webp"
      },
      {
        title: "Vulnerability Scans",
        desc: "Identify authentication leaks and code injection vectors.",
        iconName: "Shield",
        image: "/qa-testing/Vulnerability-Scans.webp"
      },
      {
        title: "CI/CD Test Enforcements",
        desc: "Configure automated test loops on every code commit.",
        iconName: "Settings",
        image: "/qa-testing/CI-CD-Test-Enforcements.webp"
      }
    ],
    useCases: [
      {
        title: "Automate regression testing",
        highlight: "for weekly releases",
        desc: "Run 100+ tests in minutes to release code confidently.",
        iconName: "Terminal"
      },
      {
        title: "Validate patient databases",
        highlight: "for HIPAA audits",
        desc: "Ensure health platforms encrypt fields and restrict user access.",
        iconName: "Shield"
      },
      {
        title: "Load test checkout paths",
        highlight: "before peak seasons",
        desc: "Ensure transaction paths scale seamlessly during high-volume events.",
        iconName: "Zap"
      },
      {
        title: "Log code quality scores",
        highlight: "for regulatory checkups",
        desc: "Track testing outcomes to meet enterprise compliance standards.",
        iconName: "CheckCircle"
      }
    ]
  },
  "recruitment-rpo": {
    featureSubtitle: "Dedicated recruitment process outsourcing to scale tech teams fast.",
    useCaseSubtitle: "Hire top-tier candidates without internal recruiting bottlenecks.",
    challengeSubtitle: "Talent acquisition friction that costs companies top engineering candidates.",
    technologies: ["LinkedIn Recruiter", "Lever", "Greenhouse", "Slack"],
    challenges: [
      { label: "Poor candidate quality", desc: "Generic job boards flooding pipelines with irrelevant profiles that waste interview bandwidth" },
      { label: "Slow time-to-hire", desc: "Unstructured hiring processes stretching role closures to 90+ days while competitors hire faster" },
      { label: "Internal recruiter overload", desc: "Lean HR teams managing 20+ open roles simultaneously leading to candidate drop-off and bad hires" },
      { label: "Niche role sourcing", desc: "Specialized engineering roles like IAM architects or AI engineers with tiny candidate pools" },
    ],
    features: [
      {
        title: "End-to-End Recruitment",
        desc: "Manage candidate sourcing, screening, and interview scheduling.",
        iconName: "Users",
        image: "/services-assets/recruitment-rpo/End-to-End-Recruitment.webp"
      },
      {
        title: "Global Talent Pipelines",
        desc: "Source candidates across India, US, and UK tech hubs.",
        iconName: "Globe",
        image: "/services-assets/recruitment-rpo/Global-Talent-Pipelines.webp"
      },
      {
        title: "ATS Management",
        desc: "Organize candidate profiles and pipeline status reports.",
        iconName: "Layers",
        image: "/services-assets/recruitment-rpo/ATS-Management.webp"
      },
      {
        title: "JD & Sourcing Audits",
        desc: "Optimize job descriptions to attract high-quality candidates.",
        iconName: "Search",
        image: "/services-assets/recruitment-rpo/JD-Sourcing-Audits.webp"
      },
      {
        title: "New Hire Coordination",
        desc: "Pre-onboarding checkups, background verifications, and offer letters.",
        iconName: "UserCheck",
        image: "/services-assets/recruitment-rpo/New-Hire-Coordination.webp"
      },
      {
        title: "EOR Compatibility",
        desc: "Directly link recruitment to payroll for smooth remote setups.",
        iconName: "Banknote",
        image: "/services-assets/recruitment-rpo/EOR-Compatibility.webp"
      }
    ],
    useCases: [
      {
        title: "Source full engineering teams",
        highlight: "in tech hubs like Hyderabad",
        desc: "Assemble complete teams of developers, QA, and PMs quickly.",
        iconName: "Users"
      },
      {
        title: "Hire 10+ software engineers",
        highlight: "in under 90 days",
        desc: "Accelerate hiring velocity with a dedicated RPO recruiter.",
        iconName: "Zap"
      },
      {
        title: "Find specialized developers",
        highlight: "like IAM or AI specialists",
        desc: "Target rare engineering talent with experienced search recruiters.",
        iconName: "Brain"
      },
      {
        title: "Delegate resume reviews",
        highlight: "and initial screening calls",
        desc: "Save internal management hours by reviewing only pre-qualified candidates.",
        iconName: "UserCheck"
      }
    ]
  },
  "finance-accounting-outsourcing": {
    featureSubtitle: "Meticulous bookkeeping, corporate analytics, and tax compliance.",
    useCaseSubtitle: "Keep your financial records audit-ready and tax-compliant.",
    challengeSubtitle: "Finance and accounting gaps that expose growing businesses to compliance penalties.",
    technologies: ["Tally Prime", "QuickBooks", "Excel", "Razorpay"],
    challenges: [
      { label: "Inaccurate GST filings", desc: "Incorrect GSTR filings leading to mismatched ITC claims, government notices, and monetary penalties" },
      { label: "Remote finance visibility", desc: "US/UK parent companies lacking real-time visibility into India subsidiary financial performance" },
      { label: "Audit unpreparedness", desc: "Disorganized books and missing documentation creating last-minute scrambles before statutory audits" },
      { label: "Manual bookkeeping errors", desc: "Spreadsheet-based accounting introducing errors that compound over time into major discrepancies" },
    ],
    features: [
      {
        title: "Day-to-Day Bookkeeping",
        desc: "Precise ledger maintenance and automated bank reconciliations.",
        iconName: "BarChart3",
        image: "/finance-accounting-outsourcing/Day-to-Day Bookkeeping.webp"
      },
      {
        title: "Monthly MIS & Analytics",
        desc: "Granular P&L reports, balance sheets, and cash flow tracking.",
        iconName: "Layers",
        image: "/finance-accounting-outsourcing/Monthly-MIS-Analytics.webp"
      },
      {
        title: "Statutory GST Filings",
        desc: "Prepare and file GSTR-1 and GSTR-3B compliance returns.",
        iconName: "CheckCircle",
        image: "/finance-accounting-outsourcing/Statutory-GST-Filings.webp"
      },
      {
        title: "TDS Processing & Returns",
        desc: "Calculate tax deductions at source and manage quarterly filings.",
        iconName: "Banknote",
        image: "/finance-accounting-outsourcing/TDS-Processing-Returns.webp"
      },
      {
        title: "Audit Log Organization",
        desc: "Prepare compliant financial reports for external audits.",
        iconName: "Shield",
        image: "/finance-accounting-outsourcing/Audit-Log-Organization.webp"
      },
      {
        title: "Payroll Ledger Syncing",
        desc: "Sync EOR payroll data with internal accounting ledgers.",
        iconName: "Database",
        image: "/finance-accounting-outsourcing/Payroll-Ledger-Syncing.webp"
      }
    ],
    useCases: [
      {
        title: "Track Indian subsidiary finances",
        highlight: "remotely from the US/UK",
        desc: "Ensure local filings are completed on time without setting up local finance teams.",
        iconName: "Globe"
      },
      {
        title: "Outsource daily bookkeeping",
        highlight: "for growing startups",
        desc: "Replace manual paper records with secure digital accounting systems.",
        iconName: "BarChart3"
      },
      {
        title: "Clean up tax filings",
        highlight: "following compliance notices",
        desc: "Reconcile past invoices to resolve statutory issues before audits.",
        iconName: "Shield"
      },
      {
        title: "Compile corporate MIS packs",
        highlight: "for board meetings",
        desc: "Present accurate, investor-ready cash flow dashboards.",
        iconName: "Layers"
      }
    ]
  },
  "digital-transformation": {
    featureSubtitle: "Modernize legacy systems, automate workflows, and build data foundations.",
    useCaseSubtitle: "Pragmatic modernizations that drive business efficiency.",
    challengeSubtitle: "Legacy technology barriers that prevent businesses from competing in a digital-first world.",
    technologies: ["AWS", "Python", "React", "Next.js", "Docker"],
    challenges: [
      { label: "Redundant data silos", desc: "Disconnected systems creating duplicated records, inconsistent reporting, and slowed decision-making" },
      { label: "Manual workflows", desc: "Paper-based and spreadsheet-driven processes increasing operational costs and human error rates" },
      { label: "Outdated tech infrastructure", desc: "On-premise systems requiring expensive maintenance while limiting flexibility and remote access" },
      { label: "Delayed analytics", desc: "Weeks-long reporting cycles preventing timely business decisions and AI-readiness" },
    ],
    features: [
      {
        title: "Maturity Assessments",
        desc: "Analyze legacy system bottlenecks and design transformation roadmaps.",
        iconName: "Search",
        image: "/digital-transformation/Maturity-Assessments.webp"
      },
      {
        title: "Legacy Modernization",
        desc: "Re-platform desktop applications into modern cloud-native systems.",
        iconName: "Layers",
        image: "/digital-transformation/Legacy-Modernization.webp"
      },
      {
        title: "Process Automation",
        desc: "Automate manual data entry paths using secure APIs.",
        iconName: "Zap",
        image: "/digital-transformation/Process-Automation.webp"
      },
      {
        title: "Data Lake Architecture",
        desc: "Consolidate scattered databases into unified analytics engines.",
        iconName: "Database",
        image: "/digital-transformation/Data-Lake-Architecture.webp"
      },
      {
        title: "AI-Readiness Programs",
        desc: "Prepare database architectures for future ML and LLM integrations.",
        iconName: "Brain",
        image: "/digital-transformation/AI-Readiness-Programs.webp"
      },
      {
        title: "Change Management",
        desc: "Provide user training and documentation to ensure high adoption rates.",
        iconName: "Users",
        image: "/digital-transformation/Change-Management.webp"
      }
    ],
    useCases: [
      {
        title: "Unify manufacturing data",
        highlight: "across multiple factories",
        desc: "Replace legacy paper logs with real-time cloud inventory systems.",
        iconName: "Globe"
      },
      {
        title: "Format scattered customer data",
        highlight: "for analytics dashboards",
        desc: "Consolidate databases to prepare for intelligent AI models.",
        iconName: "Database"
      },
      {
        title: "Automate invoice matching",
        highlight: "via API connections",
        desc: "Eliminate manual data entries and speed up verification loops.",
        iconName: "Zap"
      },
      {
        title: "Re-platform customer portals",
        highlight: "to responsive web apps",
        desc: "Upgrade outdated customer interfaces to modern SaaS layouts.",
        iconName: "Monitor"
      }
    ]
  }
};
