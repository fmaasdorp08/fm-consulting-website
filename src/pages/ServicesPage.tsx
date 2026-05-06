import { cn } from '@/lib/utils';
import { useScrollAnimation, useStaggerAnimation } from '@/hooks/useScrollAnimation';
import { servicesConfig } from '@/config';
import { ArrowRight, TrendingUp, Target, Users, RefreshCw, BarChart3, Settings } from 'lucide-react';

const serviceDetails = [
  {
    icon: TrendingUp,
    title: "Growth Strategy",
    overview: "We help you define and execute a clear path to sustainable business growth.",
    problems: [
      "Unclear growth priorities and resource allocation",
      "Lack of market opportunity analysis",
      "Inconsistent channel performance",
      "No structured growth roadmap"
    ],
    outcomes: [
      "Clear growth objectives and KPIs",
      "Prioritised market opportunities",
      "Optimised channel mix and budget allocation",
      "Actionable 12-month growth roadmap"
    ],
    features: [
      "Business growth planning",
      "Market opportunity analysis",
      "Channel strategy development",
      "Customer journey mapping",
      "Growth roadmap creation"
    ],
    image: "/images/service-1.jpg"
  },
  {
    icon: Target,
    title: "Digital Marketing Strategy",
    overview: "Strategic planning and execution for digital channels that drive measurable results.",
    problems: [
      "Wasted ad spend on underperforming channels",
      "Poor campaign structure and targeting",
      "Unclear audience segmentation",
      "Inefficient budget allocation"
    ],
    outcomes: [
      "Improved ROAS and cost per acquisition",
      "Better audience targeting and messaging",
      "Streamlined campaign architecture",
      "Data-driven budget optimisation"
    ],
    features: [
      "Paid media strategy (Google, Meta, LinkedIn)",
      "Digital channel planning",
      "Campaign architecture design",
      "Audience strategy and segmentation",
      "Budget efficiency planning"
    ],
    image: "/images/service-2.jpg"
  },
  {
    icon: Users,
    title: "Customer Acquisition",
    overview: "Build systems that consistently attract and convert high-quality customers.",
    problems: [
      "Low lead volume or poor lead quality",
      "High cost per acquisition",
      "Leaky conversion funnels",
      "Inconsistent acquisition performance"
    ],
    outcomes: [
      "Increased qualified lead volume",
      "Reduced customer acquisition costs",
      "Improved conversion rates",
      "Scalable acquisition systems"
    ],
    features: [
      "Lead generation strategy",
      "Funnel design and optimisation",
      "Landing page and CRO",
      "Campaign performance management",
      "Acquisition efficiency analysis"
    ],
    image: "/images/service-3.jpg"
  },
  {
    icon: RefreshCw,
    title: "Customer Lifecycle & Retention",
    overview: "Maximise customer lifetime value through strategic retention and loyalty programmes.",
    problems: [
      "High customer churn rates",
      "Low repeat purchase frequency",
      "Underutilised customer database",
      "Disconnected customer touchpoints"
    ],
    outcomes: [
      "Improved customer retention rates",
      "Increased repeat purchase frequency",
      "Higher customer lifetime value",
      "Stronger customer relationships"
    ],
    features: [
      "Retention strategy development",
      "CRM strategy and implementation",
      "Lifecycle marketing automation",
      "Customer journey optimisation",
      "Loyalty programme design"
    ],
    image: "/images/service-4.jpg"
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    overview: "Turn data into actionable insights with comprehensive measurement frameworks.",
    problems: [
      "Lack of visibility into marketing performance",
      "No clear KPIs or success metrics",
      "Data scattered across platforms",
      "Inability to attribute results"
    ],
    outcomes: [
      "Clear performance dashboards",
      "Defined KPIs and targets",
      "Unified data and reporting",
      "Improved decision-making speed"
    ],
    features: [
      "Performance dashboard setup",
      "KPI framework development",
      "Campaign measurement and attribution",
      "Data interpretation and insights",
      "Decision-enabling reporting"
    ],
    image: "/images/service-5.jpg"
  },
  {
    icon: Settings,
    title: "Business Performance Consulting",
    overview: "Identify and remove bottlenecks to improve overall business performance.",
    problems: [
      "Unclear where revenue is being lost",
      "Inefficient processes and workflows",
      "Misalignment between teams",
      "Difficulty scaling operations"
    ],
    outcomes: [
      "Identified revenue opportunities",
      "Streamlined processes",
      "Improved team alignment",
      "Scalable growth systems"
    ],
    features: [
      "Commercial diagnostics",
      "Process efficiency analysis",
      "Digital transformation roadmap",
      "Operational alignment consulting",
      "Growth bottleneck identification"
    ],
    image: "/images/service-6.jpg"
  }
];

export function ServicesPage() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { containerRef: servicesRef, visibleItems } = useStaggerAnimation(serviceDetails.length, 100);

  return (
    <div className="w-full pt-24 lg:pt-32">
      {/* Header Section */}
      <section className="w-full pb-16 lg:pb-24 bg-white">
        <div className="container-large px-6 lg:px-12">
          <div ref={headerRef} className="max-w-4xl">
            <div
              className={cn(
                'transition-all duration-800 ease-out-quart',
                headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              )}
            >
              <span className="text-xs font-geist-mono uppercase tracking-widest text-exvia-black/50">
                Our Services
              </span>
            </div>
            <h1
              className={cn(
                'text-4xl lg:text-6xl font-semibold text-exvia-black mt-6 leading-tight transition-all duration-800 ease-out-quart',
                headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              )}
              style={{ transitionDelay: '100ms' }}
            >
              Strategic Solutions for Commercial Growth
            </h1>
            <p
              className={cn(
                'text-xl lg:text-2xl text-exvia-black/70 mt-6 leading-relaxed transition-all duration-800 ease-out-quart',
                headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              )}
              style={{ transitionDelay: '200ms' }}
            >
              We offer a comprehensive suite of consulting services designed to help you 
              acquire more customers, retain them longer, and operate more efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="w-full py-16 lg:py-24 bg-exvia-subtle/30">
        <div className="container-large px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesConfig.services.map((service, index) => (
              <div
                key={service.title}
                className="p-6 bg-white border border-exvia-border rounded-lg hover:border-exvia-black/30 transition-colors group"
              >
                <div className="w-10 h-10 flex items-center justify-center border border-exvia-border rounded-lg bg-exvia-subtle/30 mb-4 group-hover:bg-exvia-black group-hover:border-exvia-black transition-colors">
                  <span className="text-sm font-geist-mono text-exvia-black group-hover:text-white transition-colors">0{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-exvia-black mb-2">{service.title}</h3>
                <p className="text-sm text-exvia-black/60">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="w-full py-16 lg:py-24 bg-white">
        <div className="container-large px-6 lg:px-12">
          <div ref={servicesRef} className="space-y-24">
            {serviceDetails.map((service, index) => (
              <div
                key={service.title}
                className={cn(
                  'grid lg:grid-cols-2 gap-12 lg:gap-16 items-start transition-all duration-800 ease-out-quart',
                  visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                )}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 flex items-center justify-center border border-exvia-border rounded-lg bg-exvia-subtle/30">
                      <service.icon className="w-5 h-5 text-exvia-black" />
                    </div>
                    <span className="text-xs font-geist-mono uppercase tracking-widest text-exvia-black/50">
                      Service 0{index + 1}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl lg:text-3xl font-semibold text-exvia-black mb-4">
                    {service.title}
                  </h2>
                  
                  <p className="text-exvia-black/70 text-lg mb-8">
                    {service.overview}
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-semibold text-exvia-black uppercase tracking-wider mb-3">
                        Problems We Solve
                      </h4>
                      <ul className="space-y-2">
                        {service.problems.map((problem, i) => (
                          <li key={i} className="flex items-start gap-3 text-exvia-black/70">
                            <span className="w-1.5 h-1.5 bg-exvia-black/40 rounded-full mt-2 flex-shrink-0" />
                            {problem}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-exvia-black uppercase tracking-wider mb-3">
                        Outcomes We Deliver
                      </h4>
                      <ul className="space-y-2">
                        {service.outcomes.map((outcome, i) => (
                          <li key={i} className="flex items-start gap-3 text-exvia-black/70">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-exvia-black uppercase tracking-wider mb-3">
                        What's Included
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 bg-exvia-subtle/50 text-exvia-black/70 text-sm rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 mt-8 text-exvia-black font-medium hover:gap-3 transition-all"
                  >
                    Discuss Your Needs
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="aspect-[4/3] rounded-lg overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 lg:py-24 bg-exvia-black text-white">
        <div className="container-large px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-semibold">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-white/70 mt-4 text-lg">
              Book a free consultation. We'll help you identify the biggest opportunities 
              for growth in your business.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-exvia-black font-medium rounded-lg hover:bg-white/90 transition-colors"
              >
                Book a Free Consultation
              </a>
              <a
                href="/industries"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
              >
                Explore by Industry
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
