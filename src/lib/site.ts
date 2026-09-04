import luxaShot from "@/assets/luxa.jpg";
import pureBlissShot from "@/assets/purebliss.jpg";
import novaSkinShot from "@/assets/novaskin.jpg";
import portfolioShot from "@/assets/portfolio.jpg";

export const BRAND = {
  name: "WEBRIX",
  tagline: "Build. Design. Grow.",
  email: "rizvihasan01876@gmail.com",
  phone: "+8801876954397",
  whatsapp: "8801876954397",
  whatsappUrl:
    "https://wa.me/8801876954397?text=Hi%20Webrix%2C%20I%27d%20like%20to%20discuss%20a%20website%20project.",
  facebook: "https://www.facebook.com/webrix.bd",
  instagram: "https://www.instagram.com/zihad_110",
  linkedin: "https://www.linkedin.com/in/rizvi-hasan-201036433/",
} as const;

export const NAV_LINKS = [
  { label: "Work", to: "/work" },
  { label: "Services", to: "/services" },
  { label: "Process", to: "/process" },
  { label: "About", to: "/about" },
  { label: "FAQ", to: "/faq" },
] as const;

export const CAPABILITIES = [
  "Web Design",
  "Landing Pages",
  "E-commerce",
  "Portfolio",
  "Custom Development",
] as const;

export type Service = {
  no: string;
  title: string;
  description: string;
  bullets: string[];
};

export const SERVICES: Service[] = [
  {
    no: "01",
    title: "Web Design",
    description:
      "Modern websites designed around your brand, audience and goals.",
    bullets: ["Brand-led visual direction", "Responsive layouts", "Design systems"],
  },
  {
    no: "02",
    title: "Landing Pages",
    description:
      "High-impact landing pages designed to capture attention and drive action.",
    bullets: ["Single-goal structure", "Fast load times", "Clear calls to action"],
  },
  {
    no: "03",
    title: "E-commerce",
    description:
      "Beautiful online stores designed for seamless shopping experiences.",
    bullets: ["Product pages", "Cart & checkout flow", "Mobile-first browsing"],
  },
  {
    no: "04",
    title: "Portfolio",
    description:
      "Personal and professional portfolios that make your work stand out.",
    bullets: ["Editorial case layouts", "Image-led storytelling", "Contact flow"],
  },
  {
    no: "05",
    title: "Custom Development",
    description: "Unique web solutions built around your exact requirements.",
    bullets: ["Custom components", "Integrations", "Ongoing iteration"],
  },
];

export type Project = {
  slug: string;
  no: string;
  name: string;
  industry: string;
  service: string;
  description: string;
  image: string;
  url: string;
  challenge: string;
  approach: string;
  solution: string;
  outcome: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "luxa",
    no: "01",
    name: "Luxa",
    industry: "Retail / Lifestyle",
    service: "E-commerce Landing Page",
    description:
      "A conversion-focused storefront landing page built around a single hero product story and a short path to checkout.",
    image: luxaShot,
    url: "https://luxabd.vercel.app/",
    challenge:
      "The brand needed an online entry point that could present products clearly and push visitors toward a purchase decision without a heavy multi-page store.",
    approach:
      "We mapped the shortest journey from first impression to add-to-cart, then built the page around product imagery, clear value points and a single dominant action.",
    solution:
      "A responsive e-commerce landing page with a strong hero, structured product sections and a checkout path that stays visible while scrolling.",
    outcome:
      "Live and in use. Performance and sales figures are tracked by the client, so no numbers are published here.",
  },
  {
    slug: "pure-bliss",
    no: "02",
    name: "Pure Bliss",
    industry: "Organic Beauty",
    service: "Brand Website",
    description:
      "A calm, product-led website for an organic beauty brand, built to communicate ingredients, care and trust.",
    image: pureBlissShot,
    url: "https://pure-bliss-nu.vercel.app/",
    challenge:
      "Organic beauty is a crowded category. The site had to feel gentle and credible while still selling the product range.",
    approach:
      "We set a soft, natural visual direction, gave ingredients and benefits their own space, and kept the layout uncluttered.",
    solution:
      "A responsive brand website with product presentation, benefit sections and a direct enquiry path.",
    outcome:
      "Live and in use. Results are reported privately by the client.",
  },
  {
    slug: "nova-skin",
    no: "03",
    name: "Nova Skin",
    industry: "Skincare",
    service: "Product Website",
    description:
      "A clean skincare product site focused on clarity: what it is, what it does and how to get it.",
    image: novaSkinShot,
    url: "https://nova-skin-eight.vercel.app/",
    challenge:
      "Skincare buyers scan quickly. The site needed to answer product questions before the visitor loses interest.",
    approach:
      "We led with the product, followed with benefits and routine, and kept a persistent action available on every screen size.",
    solution:
      "A fast, responsive product website with a structured content flow and mobile-first layout.",
    outcome: "Live and in use.",
  },
  {
    slug: "creative-portfolio",
    no: "04",
    name: "Creative Developer Portfolio",
    industry: "Personal Brand",
    service: "Portfolio",
    description:
      "A personal portfolio built to present projects as work, not as a list — with a direct route to contact.",
    image: portfolioShot,
    url: "https://rizvi-hasan-protfolio.vercel.app/",
    challenge:
      "A portfolio has one job: convince someone to make contact. The previous format buried the work.",
    approach:
      "We put projects first, wrote short honest context for each, and removed everything that did not support the decision to reach out.",
    solution:
      "An editorial portfolio with project previews, skills context and a visible contact section.",
    outcome: "Live and in use.",
  },
];

export const WHY = [
  {
    no: "01",
    title: "Designed with purpose",
    body: "Every design decision has a reason. Nothing is added because it looks busy or trendy.",
  },
  {
    no: "02",
    title: "Built for real users",
    body: "Responsive, intuitive and easy to use — on a 1440px monitor and on a 360px phone.",
  },
  {
    no: "03",
    title: "Focused on results",
    body: "Beautiful design should also support business goals. Structure follows the action you want.",
  },
  {
    no: "04",
    title: "Client-first process",
    body: "Clear communication from idea to launch. You always know what stage the project is at.",
  },
];

export const PROCESS = [
  {
    no: "01",
    title: "Discover",
    body: "Understand the business, audience and goals before a single pixel is drawn.",
  },
  {
    no: "02",
    title: "Plan",
    body: "Define structure, content and the user journey through the site.",
  },
  {
    no: "03",
    title: "Design",
    body: "Create the visual direction and interface, reviewed with you at each step.",
  },
  {
    no: "04",
    title: "Develop",
    body: "Turn the design into a fast, responsive, accessible website.",
  },
  {
    no: "05",
    title: "Launch",
    body: "Test, optimize and launch — then support you after it goes live.",
  },
];

export const PRICING = [
  {
    name: "Starter",
    for: "For personal projects and small businesses.",
    points: [
      "Single page or compact site",
      "Responsive on all devices",
      "Contact / enquiry setup",
      "Basic SEO setup",
    ],
  },
  {
    name: "Business",
    for: "For growing businesses that need a stronger online presence.",
    points: [
      "Multi-page website",
      "Custom design direction",
      "Content structure & copy support",
      "Performance & SEO optimisation",
    ],
    featured: true,
  },
  {
    name: "Custom",
    for: "For advanced or unique requirements.",
    points: [
      "E-commerce or custom builds",
      "Integrations & bespoke features",
      "Ongoing iteration",
      "Priority support",
    ],
  },
];

export const FAQS = [
  {
    q: "How long does a website take?",
    a: "A landing page usually takes about a week. A full multi-page website typically takes two to four weeks, depending on how quickly content and feedback come back. You get a timeline before work starts.",
  },
  {
    q: "Do you build responsive websites?",
    a: "Yes — every project is built mobile-first and tested across phone, tablet, laptop and large desktop widths. Mobile layouts are designed properly, not shrunk down.",
  },
  {
    q: "Can you redesign an existing website?",
    a: "Yes. Send the current link and we will review the structure, design and speed, then propose what to keep, rebuild or remove.",
  },
  {
    q: "Do you build e-commerce websites?",
    a: "Yes — product pages, cart and checkout flows, and store landing pages built for a smooth buying experience.",
  },
  {
    q: "Can you create a landing page for my product?",
    a: "Yes. Landing pages are one of our core services: one page, one goal, built to convert.",
  },
  {
    q: "How does the project process work?",
    a: "Five steps: Discover, Plan, Design, Develop, Launch. You review the work at each stage, so there are no surprises at the end.",
  },
  {
    q: "Do you provide support after launch?",
    a: "Yes. Post-launch fixes and small updates are covered, and ongoing support can be arranged if you want continued help.",
  },
  {
    q: "What information do you need to start?",
    a: "Your business name, what the site is for, any content or images you already have, examples of sites you like, your budget range and your deadline. If you do not have all of it yet, that is fine — we work it out together.",
  },
];

export const PROJECT_TYPES = [
  "Website",
  "Landing Page",
  "E-commerce",
  "Portfolio",
  "Website Redesign",
  "Custom Development",
  "Other",
] as const;

export const BUDGET_RANGES = [
  "Under $100",
  "$100–$300",
  "$300–$500",
  "$500+",
  "Custom Budget",
] as const;

export const TIMELINES = [
  "As soon as possible",
  "Within 2 weeks",
  "Within 1 month",
  "1–3 months",
  "Flexible",
] as const;
