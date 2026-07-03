import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { PageOverlay } from '@/components/PageOverlay';
import { Footer } from '@/sections/Footer';
import { usePageLoad } from '@/hooks/usePageLoad';
import { SmoothScroll } from '@/components/motion/SmoothScroll';
import { Cursor } from '@/components/motion/Cursor';
import { Grain } from '@/components/motion/Grain';
import { PageTransition } from '@/components/motion/PageTransition';
import { Seo } from '@/components/Seo';

// Pages
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { ServicesPage } from '@/pages/ServicesPage';
import { IndustriesPage } from '@/pages/IndustriesPage';
import { WhyFMPage } from '@/pages/WhyFMPage';
import { InsightsPage } from '@/pages/InsightsPage';
import { ContactPage } from '@/pages/ContactPage';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Seo path="/" /><HomePage /></PageTransition>} />
        <Route path="/about" element={<PageTransition><Seo title="About Us" description="FM Consulting is a South African business growth consultancy operating at the intersection of strategy, data, and execution." path="/about" /><AboutPage /></PageTransition>} />
        <Route path="/services" element={<PageTransition><Seo title="Services" description="Growth strategy, digital marketing, customer acquisition, lifecycle & retention, analytics, and business performance consulting." path="/services" /><ServicesPage /></PageTransition>} />
        <Route path="/industries" element={<PageTransition><Seo title="Industries" description="Tailored growth strategies for hospitality, retail & e-commerce, professional services, B2B technology, SMEs, and consumer services." path="/industries" /><IndustriesPage /></PageTransition>} />
        <Route path="/why-fm" element={<PageTransition><Seo title="Why FM Consulting" description="Strategy without fluff. Performance with accountability. Commercially grounded thinking with practical execution." path="/why-fm" /><WhyFMPage /></PageTransition>} />
        <Route path="/insights" element={<PageTransition><Seo title="Insights" description="Practical insights on growth strategy, performance marketing, and business optimisation." path="/insights" /><InsightsPage /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Seo title="Contact" description="Book a consultation with FM Consulting. We respond within 24 hours." path="/contact" /><ContactPage /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const { showOverlay } = usePageLoad(500);

  return (
    <Router>
      <SmoothScroll>
        <div className="min-h-screen bg-white">
          {/* Page Load Overlay */}
          <PageOverlay isVisible={showOverlay} />

          {/* Custom cursor + film grain */}
          <Cursor />
          <Grain />

          {/* Navigation */}
          <Navigation />

          {/* Main Content */}
          <main>
            <AnimatedRoutes />
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </SmoothScroll>
    </Router>
  );
}

export default App;
