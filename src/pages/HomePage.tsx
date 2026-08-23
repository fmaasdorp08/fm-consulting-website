import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Services } from '@/sections/Services';
import { Portfolio } from '@/sections/Portfolio';
import { CTA } from '@/sections/CTA';
import { FocusAreas } from '@/sections/FocusAreas';
import { Process } from '@/sections/Process';

export function HomePage() {
  return (
    <>
      <Hero />
      <FocusAreas />
      <About />
      <Services />
      <Process />
      <Portfolio />
      {/* Testimonials are withheld until real, attributable quotes exist.
          The section and its config remain in place — restore this line
          once testimonialsConfig holds genuine client quotes. */}
      <CTA />
    </>
  );
}
