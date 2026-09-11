export const profile = {
  name: "Nikhil Goswami",
  role: "Deputy Manager – Trade Forex",
  tagline:
    "Foreign Exchange & Trade Finance Specialist focused on cross-border settlements, regulatory compliance, and risk control.",
  location: "South Delhi, Delhi, India",
  phone: "+91 8800441855",
  email: "nikhilgoswami661@gmail.com",
  linkedin: "https://linkedin.com/in/nikhil-goswami-9433bb179",
  linkedinLabel: "linkedin.com/in/nikhil-goswami-9433bb179",
  summary:
    "Dynamic and results-driven Deputy Manager – Trade Forex with 3+ years of specialized experience in trade finance operations across IDFC FIRST Bank and ICICI Bank. Proven expertise in managing foreign exchange transactions, trade finance operations, and cross-border settlements while ensuring strict adherence to FEMA, RBI Master Directions, and FEDAI guidelines. Adept at handling high-value corporate portfolios, performing in-depth risk assessment, and delivering accurate client advisory on forex documentation and regulatory compliance.",
};

export const orbitSkills = [
  "Trade Finance",
  "Foreign Exchange",
  "Compliance",
  "Risk & Audit",
];

export type CompetencyGroup = {
  title: string;
  icon: "landmark" | "fileText" | "shieldCheck" | "sendToBack" | "network" | "radio" | "clipboardCheck" | "gauge";
  items: string[];
};

export const competencies: CompetencyGroup[] = [
  {
    title: "Trade Finance Operations",
    icon: "landmark",
    items: ["LC (Letters of Credit)", "BG (Bank Guarantee)", "SBLC", "Bill of Exchange"],
  },
  {
    title: "Foreign Exchange Documentation",
    icon: "fileText",
    items: ["Shipping Documents", "Bill of Lading (BL)", "Invoice & Packing List (PL)"],
  },
  {
    title: "Regulatory & Compliance",
    icon: "shieldCheck",
    items: ["FEMA", "RBI Master Directions", "FEDAI Guidelines"],
  },
  {
    title: "Remittance Services",
    icon: "sendToBack",
    items: ["Inward / Outward Remittances (A1/A2)", "FDI", "ECB"],
  },
  {
    title: "Trade Systems & Portals",
    icon: "network",
    items: ["SWIFT Operations", "Finacle", "Trade360"],
  },
  {
    title: "SWIFT Messaging",
    icon: "radio",
    items: ["MT700", "MT710", "MT202", "MT103", "MT760"],
  },
  {
    title: "Trade & Regulatory Reporting",
    icon: "clipboardCheck",
    items: ["EDPMS", "IDPMS", "Bill Closures"],
  },
  {
    title: "Risk & Audit",
    icon: "gauge",
    items: ["AML / KYC Scrutiny", "Risk Assessment", "Audit Closure", "TAT Reduction"],
  },
];

export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  overview?: string;
  points: string[];
};

export const bankingExperience: ExperienceItem[] = [
  {
    role: "Deputy Manager (Trade Forex)",
    company: "IDFC FIRST Bank",
    location: "Gurugram, Haryana",
    period: "Oct 2023 – Present",
    current: true,
    overview:
      "Leading Trade Forex desk operations, managing high-value corporate and HNI client portfolios for international trade transactions.",
    points: [
      "Executing end-to-end inward remittances, plain vanilla inwards, and complex capital account inward transactions (FDI, ECB) strictly within TAT benchmarks for the Gurgaon region.",
      "Managing export foreign proceeds, export collection bills, pre-shipment and post-shipment loans, bill discounting, and knocking off pre-shipment loans end-to-end.",
      "Handling end-to-end export realization, export regularization (part/full realization), and EDPMS closure activities.",
      "Reviewing and scrutinizing export trade documents across trade products with strict accuracy in data entry, mitigating input-error risk.",
      "Processing Merchant Trade Transactions (MTT) leveraging deep practical knowledge of cross-border payment systems.",
    ],
  },
  {
    role: "Deputy Manager (Trade Forex)",
    company: "ICICI Bank",
    location: "Noida, UP",
    period: "Oct 2022 – Oct 2023",
    overview:
      "Managed Trade Forex operations for the SME & Mid-Corporate segment, ensuring smooth cross-border settlements and regulatory compliance.",
    points: [
      "Processed daily trade finance transactions including import/export bills, outward/inward remittances, and bill collections.",
      "Conducted due diligence & AML/KYC checks per RBI & FEMA norms to mitigate operational and regulatory risk.",
      "Handled EDPMS/IDPMS bill closure and client follow-up for pending realization; prepared regulatory submissions within TAT.",
      "Resolved client queries on forex rates, documentation, and regulatory compliance with central trade teams.",
      "Supported internal & RBI audit preparations, ensuring zero major compliance observations.",
    ],
  },
];

export const earlyCareer: ExperienceItem[] = [
  {
    role: "Business Development Associate",
    company: "BYJU'S",
    location: "Meerut, UP",
    period: "Nov 2021 – Oct 2022",
    points: [
      "Focused on lead generation, consultative selling, and client engagement for ed-tech solutions; achieved 110%+ of monthly targets consistently.",
      "Managed CRM data, sales pipeline, and client follow-ups to ensure high conversion rates.",
    ],
  },
  {
    role: "Product Trainer",
    company: "LG Electronics (via Quess Corp Ltd.)",
    location: "India",
    period: "Mar 2020 – Aug 2021",
    points: [
      "Designed training modules and delivered interactive sessions to 200+ sales personnel across regions, driving product awareness and sales performance.",
    ],
  },
];

export const education = [
  {
    degree: "MBA – Master of Business Administration",
    field: "Business & Financial Services Marketing Operations",
    school: "Accurate Institute of Management & Technology, GGSIPU",
    period: "May 2018 – Dec 2020",
  },
  {
    degree: "BBA – Bachelor of Business Administration",
    field: "",
    school: "Guru Gobind Singh Indraprastha University",
    period: "May 2015 – Dec 2018",
  },
];

export const certifications = [
  "Foreign Exchange Operations (IIBF/FEDAI Certified)",
  "Trade Finance Training (LC/BG, UCP 600, ISBP 745, Incoterms 2020)",
];

export const technicalTools = [
  "SWIFT Alliance",
  "Finacle",
  "Trade360",
  "MS Excel (Advanced)",
  "EDPMS/IDPMS Portal",
];

export const languages = [
  { name: "English", level: "Professional" },
  { name: "Hindi", level: "Native" },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Expertise" },
  { href: "#certifications", label: "Certifications" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];
