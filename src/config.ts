// FM Consulting Pty Ltd - Site Configuration
// Premium Business Consulting Website

export interface SiteConfig {
  language: string;
  title: string;
  description: string;
}

export const siteConfig: SiteConfig = {
  language: "en",
  title: "FM Consulting | Business Growth & Strategy Consultants",
  description: "FM Consulting helps South African businesses grow through smarter strategy, sharper execution, and measurable commercial outcomes. Specialising in growth strategy, digital marketing, customer acquisition, and business performance.",
};

// Navigation configuration
export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationConfig {
  logo: string;
  links: NavLink[];
  contactLabel: string;
  contactHref: string;
}

export const navigationConfig: NavigationConfig = {
  logo: "FM Consulting",
  links: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "Why FM", href: "/why-fm" },
    { label: "Insights", href: "/insights" },
  ],
  contactLabel: "Book Consultation",
  contactHref: "/contact",
};

// Hero section configuration
export interface HeroConfig {
  name: string;
  roles: string[];
  backgroundImage: string;
  headline: string;
  subheadline: string;
  primaryCta: string;
  secondaryCta: string;
}

export const heroConfig: HeroConfig = {
  name: "FM Consulting",
  roles: [
    "Growth Strategy",
    "Digital Marketing",
    "Performance Analytics",
    "Business Transformation",
  ],
  backgroundImage: "/images/hero-bg.jpg",
  headline: "Build Growth Systems That Drive Measurable Business Performance",
  subheadline: "We partner with ambitious South African businesses to improve acquisition, retention, efficiency, and commercial outcomes through strategy, analytics, and performance-led execution.",
  primaryCta: "Book a Consultation",
  secondaryCta: "Explore Our Services",
};

// About section configuration
export interface AboutStat {
  value: string;
  label: string;
}

export interface AboutImage {
  src: string;
  alt: string;
}

export interface AboutConfig {
  label: string;
  description: string;
  experienceValue: string;
  experienceLabel: string;
  stats: AboutStat[];
  images: AboutImage[];
}

export const aboutConfig: AboutConfig = {
  label: "About Us",
  description: "FM Consulting is a South African business growth consultancy that operates at the intersection of strategy, data, and execution. We help SMEs, founder-led businesses, and established companies transform their commercial performance through disciplined, measurable approaches to growth. We do not chase vanity metrics. We build systems that improve efficiency, profitability, and long-term business performance.",
  experienceValue: "15+",
  experienceLabel: "Years of\nCombined Experience",
  stats: [
    { value: "200+", label: "Businesses\nAdvised" },
    { value: "R500M+", label: "Revenue\nImpacted" },
    { value: "85%", label: "Client\nRetention" },
  ],
  images: [
    { src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80", alt: "Strategic planning session" },
    { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80", alt: "Analytics and data visualization" },
    { src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80", alt: "Executive team collaboration" },
    { src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=80", alt: "Professional workspace" },
  ],
};

// Services section configuration
export interface ServiceItem {
  iconName: string;
  title: string;
  description: string;
  image: string;
}

export interface ServicesConfig {
  label: string;
  heading: string;
  services: ServiceItem[];
}

export const servicesConfig: ServicesConfig = {
  label: "Our Services",
  heading: "Strategic Solutions for Commercial Growth",
  services: [
    {
      iconName: "TrendingUp",
      title: "Growth Strategy",
      description: "Business growth planning, market opportunity analysis, channel strategy, and comprehensive growth roadmaps tailored to your commercial objectives.",
      image: "/images/service-1.jpg",
    },
    {
      iconName: "Target",
      title: "Digital Marketing Strategy",
      description: "Paid media strategy, digital channel planning, campaign architecture, audience strategy, and budget efficiency optimisation.",
      image: "/images/service-2.jpg",
    },
    {
      iconName: "Users",
      title: "Customer Acquisition",
      description: "Lead generation strategy, funnel design, campaign performance optimisation, conversion flow improvement, and acquisition efficiency.",
      image: "/images/service-3.jpg",
    },
    {
      iconName: "RefreshCw",
      title: "Customer Lifecycle & Retention",
      description: "Retention strategies, CRM thinking, lifecycle optimisation, customer journey enhancements, and loyalty programme development.",
      image: "/images/service-4.jpg",
    },
    {
      iconName: "BarChart3",
      title: "Analytics & Reporting",
      description: "Performance dashboards, KPI frameworks, campaign measurement, data interpretation, and decision-enabling reporting systems.",
      image: "/images/service-5.jpg",
    },
    {
      iconName: "Settings",
      title: "Business Performance Consulting",
      description: "Commercial diagnostics, process efficiency, digital transformation recommendations, and growth bottleneck identification.",
      image: "/images/service-6.jpg",
    },
  ],
};

// Portfolio/Case Studies section configuration
export interface ProjectItem {
  title: string;
  category: string;
  year: string;
  image: string;
  featured?: boolean;
}

export interface PortfolioCTA {
  label: string;
  heading: string;
  linkText: string;
  linkHref: string;
}

export interface PortfolioConfig {
  label: string;
  heading: string;
  description: string;
  projects: ProjectItem[];
  cta: PortfolioCTA;
  viewAllLabel: string;
}

export const portfolioConfig: PortfolioConfig = {
  label: "Client Success",
  heading: "Businesses We've Helped Grow",
  description: "We work with ambitious companies across South Africa, from hospitality brands and professional services to e-commerce and B2B technology firms. Each engagement is tailored to deliver measurable commercial outcomes.",
  projects: [
    {
      title: "The Reserve Restaurant Group",
      category: "Hospitality",
      year: "2024",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80",
      featured: true,
    },
    {
      title: "Luxe Home Collections",
      category: "E-commerce",
      year: "2024",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Argus Advisory Partners",
      category: "Professional Services",
      year: "2023",
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "B2B Connect Platform",
      category: "Technology",
      year: "2023",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Foundry Co-Working Spaces",
      category: "SME / Founder-led",
      year: "2023",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
    },
  ],
  cta: {
    label: "Ready to Grow?",
    heading: "Let's Discuss Your Business Goals",
    linkText: "Book a Consultation",
    linkHref: "/contact",
  },
  viewAllLabel: "View All Case Studies",
};

// Testimonials section configuration
export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
  rating: number;
}

export interface TestimonialsConfig {
  label: string;
  heading: string;
  testimonials: TestimonialItem[];
}

export const testimonialsConfig: TestimonialsConfig = {
  label: "Client Testimonials",
  heading: "What Business Leaders Say",
  testimonials: [
    {
      quote: "FM Consulting transformed how we think about growth. They didn't just run campaigns—they built a complete acquisition system that increased our qualified leads by 180% while reducing cost per acquisition by 40%.",
      author: "Sarah Mitchell",
      role: "Managing Director",
      company: "The Reserve Restaurant Group",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
      rating: 5,
    },
    {
      quote: "Finally, a consultancy that understands the difference between marketing activity and commercial outcomes. FM Consulting helped us identify where we were bleeding revenue and built a strategy that improved our bottom line by 35%.",
      author: "David Nkosi",
      role: "CEO",
      company: "Argus Advisory Partners",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80",
      rating: 5,
    },
    {
      quote: "The strategic clarity FM Consulting brought to our business was invaluable. They helped us understand our customer journey, optimise our funnel, and build a retention strategy that increased customer lifetime value by 60%.",
      author: "Emma van der Merwe",
      role: "Founder",
      company: "Luxe Home Collections",
      image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80",
      rating: 5,
    },
  ],
};

// CTA section configuration
export interface CTAConfig {
  tags: string[];
  heading: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  email: string;
  backgroundImage: string;
}

export const ctaConfig: CTAConfig = {
  tags: [
    "Growth Strategy",
    "Performance Marketing",
    "Business Analytics",
    "Customer Acquisition",
  ],
  heading: "Ready to Build a Growth System That Works?",
  description: "Book a consultation with our team. We'll discuss your business challenges, identify opportunities, and outline how FM Consulting can help you achieve measurable commercial outcomes.",
  buttonText: "Book Your Consultation",
  buttonHref: "/contact",
  email: "fmaasdorp@outlook.com",
  backgroundImage: "/images/cta-bg.jpg",
};

// Footer section configuration
export interface FooterLinkColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface SocialLink {
  iconName: string;
  href: string;
  label: string;
}

export interface FooterConfig {
  logo: string;
  description: string;
  columns: FooterLinkColumn[];
  socialLinks: SocialLink[];
  newsletterHeading: string;
  newsletterDescription: string;
  newsletterButtonText: string;
  newsletterPlaceholder: string;
  copyright: string;
  credit: string;
}

export const footerConfig: FooterConfig = {
  logo: "FM Consulting",
  description: "South African business growth consultancy helping companies improve acquisition, retention, efficiency, and commercial outcomes through strategy, analytics, and performance-led execution.",
  columns: [
    {
      title: "Services",
      links: [
        { label: "Growth Strategy", href: "/services" },
        { label: "Digital Marketing", href: "/services" },
        { label: "Customer Acquisition", href: "/services" },
        { label: "Analytics & Reporting", href: "/services" },
        { label: "Business Performance", href: "/services" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Industries", href: "/industries" },
        { label: "Why FM Consulting", href: "/why-fm" },
        { label: "Insights", href: "/insights" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Case Studies", href: "#" },
        { label: "Growth Framework", href: "#" },
        { label: "FAQ", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
      ],
    },
  ],
  socialLinks: [
    { iconName: "Linkedin", href: "#", label: "LinkedIn" },
    { iconName: "Twitter", href: "#", label: "Twitter" },
    { iconName: "Instagram", href: "#", label: "Instagram" },
  ],
  newsletterHeading: "Stay Informed",
  newsletterDescription: "Receive insights on growth strategy, performance marketing, and business optimisation.",
  newsletterButtonText: "Subscribe",
  newsletterPlaceholder: "Enter your email",
  copyright: "© 2026 FM Consulting Pty Ltd. All rights reserved.",
  credit: "",
};

// Industries page configuration
export interface IndustryItem {
  name: string;
  description: string;
  challenges: string[];
  solutions: string[];
  image: string;
}

export interface IndustriesConfig {
  label: string;
  heading: string;
  description: string;
  industries: IndustryItem[];
}

export const industriesConfig: IndustriesConfig = {
  label: "Industries",
  heading: "Sectors We Serve",
  description: "We understand that different industries face unique commercial challenges. Our expertise spans multiple sectors, each with tailored strategies that address specific market dynamics.",
  industries: [
    {
      name: "Hospitality",
      description: "Restaurants, hotels, and experience-based businesses competing in a dynamic market where customer experience directly impacts revenue.",
      challenges: [
        "Seasonal demand fluctuations",
        "High customer acquisition costs",
        "Online reputation management",
        "Repeat visit optimisation",
      ],
      solutions: [
        "Reservation and booking funnel optimisation",
        "Customer loyalty and retention programmes",
        "Review and reputation strategy",
        "Revenue management consulting",
      ],
      image: "/images/portfolio-1.jpg",
    },
    {
      name: "Retail & E-commerce",
      description: "Physical and digital retailers navigating competitive landscapes, changing consumer behaviours, and margin pressures.",
      challenges: [
        "Cart abandonment and conversion",
        "Customer lifetime value optimisation",
        "Multi-channel attribution",
        "Inventory and demand planning",
      ],
      solutions: [
        "E-commerce conversion optimisation",
        "Customer acquisition strategy",
        "Email and retention marketing",
        "Performance analytics setup",
      ],
      image: "/images/portfolio-2.jpg",
    },
    {
      name: "Professional Services",
      description: "Law firms, consultancies, agencies, and service businesses where expertise is the product and trust is the currency.",
      challenges: [
        "Lead quality and qualification",
        "Long sales cycles",
        "Differentiation in crowded markets",
        "Client retention and expansion",
      ],
      solutions: [
        "Thought leadership and content strategy",
        "Lead generation and nurturing",
        "CRM and pipeline optimisation",
        "Client journey mapping",
      ],
      image: "/images/portfolio-3.jpg",
    },
    {
      name: "B2B & Technology",
      description: "SaaS companies, technology providers, and B2B organisations selling complex solutions to sophisticated buyers.",
      challenges: [
        "Complex buyer journeys",
        "Multiple stakeholder alignment",
        "Demo-to-close optimisation",
        "Churn and expansion revenue",
      ],
      solutions: [
        "Account-based marketing strategy",
        "Sales and marketing alignment",
        "Product-led growth consulting",
        "Customer success optimisation",
      ],
      image: "/images/portfolio-4.jpg",
    },
    {
      name: "SMEs & Founder-led Businesses",
      description: "Growing companies led by entrepreneurs who need strategic expertise without the overhead of a full in-house team.",
      challenges: [
        "Limited marketing resources",
        "Strategic clarity and focus",
        "Scaling customer acquisition",
        "Measuring what matters",
      ],
      solutions: [
        "Fractional CMO services",
        "Growth strategy development",
        "Marketing team structure",
        "Performance reporting systems",
      ],
      image: "/images/portfolio-5.jpg",
    },
    {
      name: "Consumer Services",
      description: "Home services, health and wellness, education, and other consumer-facing service businesses.",
      challenges: [
        "Local market competition",
        "Appointment and booking optimisation",
        "Customer reviews and referrals",
        "Service delivery consistency",
      ],
      solutions: [
        "Local SEO and presence strategy",
        "Booking funnel optimisation",
        "Referral programme development",
        "Customer experience design",
      ],
      image: "/images/service-6.jpg",
    },
  ],
};

// Why FM Consulting page configuration
export interface DifferentiatorItem {
  title: string;
  description: string;
  iconName: string;
}

export interface WhyFMConfig {
  label: string;
  heading: string;
  description: string;
  differentiators: DifferentiatorItem[];
  stats: AboutStat[];
}

export const whyFMConfig: WhyFMConfig = {
  label: "Why FM Consulting",
  heading: "Strategy Without Fluff. Performance With Accountability.",
  description: "Businesses choose FM Consulting because we combine strategic thinking with commercial discipline. We don't just recommend—we help you execute, measure, and optimise.",
  differentiators: [
    {
      title: "Commercially Grounded Thinking",
      description: "We understand that marketing must serve business outcomes. Every recommendation is evaluated through the lens of revenue, profitability, and sustainable growth.",
      iconName: "TrendingUp",
    },
    {
      title: "Strategic Plus Practical Execution",
      description: "We don't deliver thick strategy documents that gather dust. We build actionable plans and help you implement them with the right resources and timelines.",
      iconName: "Target",
    },
    {
      title: "Data-Informed Decision Making",
      description: "We believe in measuring what matters. Our analytics and reporting frameworks give you clear visibility into performance and ROI.",
      iconName: "BarChart3",
    },
    {
      title: "Performance Over Vanity",
      description: "We focus on metrics that drive business value—revenue, margin, customer lifetime value—not superficial engagement numbers that don't translate to growth.",
      iconName: "Award",
    },
    {
      title: "Cross-Functional Understanding",
      description: "We bring expertise across strategy, marketing, operations, and technology—enabling us to see connections and opportunities that siloed consultants miss.",
      iconName: "Layers",
    },
    {
      title: "Tailored Thinking, Not Templates",
      description: "Every business is unique. We develop customised strategies based on your specific market position, competitive landscape, and growth objectives.",
      iconName: "Settings",
    },
  ],
  stats: [
    { value: "3.2x", label: "Average ROI\nDelivered" },
    { value: "94%", label: "Client\nSatisfaction" },
    { value: "12", label: "Weeks Average\nTo First Results" },
  ],
};

// Insights/Articles page configuration
export interface ArticleItem {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  slug: string;
}

export interface InsightsConfig {
  label: string;
  heading: string;
  description: string;
  articles: ArticleItem[];
}

export const insightsConfig: InsightsConfig = {
  label: "Insights",
  heading: "Thoughts on Growth, Strategy & Performance",
  description: "Practical insights and strategic perspectives on building businesses that grow sustainably and profitably.",
  articles: [
    {
      title: "Why Marketing Efficiency Matters More Than Marketing Volume",
      excerpt: "Most businesses focus on doing more marketing. The smart ones focus on doing better marketing. Here's how to shift from volume to efficiency.",
      category: "Strategy",
      date: "March 2024",
      readTime: "6 min read",
      slug: "marketing-efficiency-over-volume",
    },
    {
      title: "The Real Cost of Poor Customer Journey Design",
      excerpt: "Every friction point in your customer journey is costing you revenue. We break down how to identify and fix the leaks in your acquisition funnel.",
      category: "Customer Experience",
      date: "February 2024",
      readTime: "8 min read",
      slug: "cost-of-poor-customer-journey",
    },
    {
      title: "What Most Businesses Misread About Acquisition Performance",
      excerpt: "Looking at the wrong metrics leads to the wrong conclusions. Here's how to properly evaluate and optimise your customer acquisition efforts.",
      category: "Analytics",
      date: "February 2024",
      readTime: "7 min read",
      slug: "misreading-acquisition-performance",
    },
    {
      title: "Retention Is Not a CRM Problem, It's a Growth Strategy Problem",
      excerpt: "Businesses that treat retention as an afterthought are leaving money on the table. Here's why retention should be central to your growth strategy.",
      category: "Growth",
      date: "January 2024",
      readTime: "5 min read",
      slug: "retention-growth-strategy",
    },
    {
      title: "How To Diagnose Where Your Business Is Really Bleeding Revenue",
      excerpt: "A systematic approach to identifying the biggest opportunities for revenue improvement in your business.",
      category: "Performance",
      date: "January 2024",
      readTime: "9 min read",
      slug: "diagnose-revenue-bleeding",
    },
    {
      title: "The SME Guide to Building a Performance Marketing Function",
      excerpt: "How smaller businesses can build world-class marketing capabilities without enterprise-level budgets.",
      category: "SME",
      date: "December 2023",
      readTime: "10 min read",
      slug: "sme-performance-marketing-guide",
    },
  ],
};

// Contact page configuration
export interface ContactConfig {
  /** Web3Forms access key — form submissions are emailed to the address registered with this key. */
  web3formsKey: string;
  label: string;
  heading: string;
  description: string;
  formIntro: string;
  contactInfo: {
    email: string;
    phone: string;
    address: string;
    hours: string;
  };
  formFields: {
    name: string;
    company: string;
    email: string;
    phone: string;
    service: string;
    message: string;
    budget: string;
  };
}

export const contactConfig: ContactConfig = {
  web3formsKey: "64aa6f02-a054-4ad0-87c6-bb0712d3b50c",
  label: "Contact",
  heading: "Let's Discuss Your Growth Goals",
  description: "Ready to improve your business performance? Book a consultation with our team. We'll explore your challenges, identify opportunities, and outline how we can help.",
  formIntro: "Fill out the form below and we'll respond within 24 hours.",
  contactInfo: {
    email: "fmaasdorp@outlook.com",
    phone: "+27 21 555 0123",
    address: "Cape Town, South Africa",
    hours: "Monday - Friday: 08:00 - 17:00 SAST",
  },
  formFields: {
    name: "Full Name",
    company: "Company Name",
    email: "Email Address",
    phone: "Phone Number",
    service: "Service Required",
    message: "Tell us about your business goals",
    budget: "Estimated Budget Range",
  },
};

// Process/How We Work configuration
export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface ProcessConfig {
  label: string;
  heading: string;
  description: string;
  steps: ProcessStep[];
}

export const processConfig: ProcessConfig = {
  label: "Our Process",
  heading: "How We Work",
  description: "A proven framework for delivering measurable business outcomes.",
  steps: [
    {
      number: "01",
      title: "Diagnose",
      description: "We analyse your current performance, identify bottlenecks, and understand your market position, competitive landscape, and growth constraints.",
    },
    {
      number: "02",
      title: "Define",
      description: "We establish clear objectives, define success metrics, and develop a strategic roadmap aligned with your business goals and resources.",
    },
    {
      number: "03",
      title: "Build",
      description: "We implement the systems, processes, and campaigns needed to execute the strategy, ensuring proper tracking and measurement.",
    },
    {
      number: "04",
      title: "Optimise",
      description: "We continuously analyse performance data, test improvements, and refine approaches to maximise efficiency and outcomes.",
    },
    {
      number: "05",
      title: "Scale",
      description: "Once we've proven what works, we help you scale your growth systems while maintaining efficiency and profitability.",
    },
  ],
};

// Focus areas strip configuration
export interface FocusArea {
  title: string;
  iconName: string;
}

export interface FocusAreasConfig {
  areas: FocusArea[];
}

export const focusAreasConfig: FocusAreasConfig = {
  areas: [
    { title: "Growth Strategy", iconName: "TrendingUp" },
    { title: "Digital Acquisition", iconName: "Target" },
    { title: "Analytics & Reporting", iconName: "BarChart3" },
    { title: "Customer Lifecycle", iconName: "RefreshCw" },
    { title: "Conversion Improvement", iconName: "ArrowUpRight" },
    { title: "Business Performance", iconName: "Settings" },
  ],
};
