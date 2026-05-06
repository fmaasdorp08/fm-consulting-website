import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Services } from '@/sections/Services';
import { Portfolio } from '@/sections/Portfolio';
import { Testimonials } from '@/sections/Testimonials';
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
      <Testimonials />
      <CTA />
    </>
  );
}
