import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Testimonials } from '@/components/Testimonials';
import { Blog } from '@/components/Blog';
import { Contact } from '@/components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Blog />
      <Contact />
    </div>
  );
}
