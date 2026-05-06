import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { Navigation } from '@/components/Navigation';
import { PageOverlay } from '@/components/PageOverlay';
import { Footer } from '@/sections/Footer';
import { usePageLoad } from '@/hooks/usePageLoad';

// Pages
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { ServicesPage } from '@/pages/ServicesPage';
import { IndustriesPage } from '@/pages/IndustriesPage';
import { WhyFMPage } from '@/pages/WhyFMPage';
import { InsightsPage } from '@/pages/InsightsPage';
import { ContactPage } from '@/pages/ContactPage';

function App() {
  const { showOverlay } = usePageLoad(500);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        {/* Page Load Overlay */}
        <PageOverlay isVisible={showOverlay} />
        
        {/* Navigation */}
        <Navigation />
        
        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/why-fm" element={<WhyFMPage />} />
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
      <Analytics />
    </Router>
  );
}

export default App;
