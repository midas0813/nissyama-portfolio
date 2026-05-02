import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Blog } from '@/components/Blog';
import { Contact } from '@/components/Contact';
import { Navigation } from '@/components/Navigation';

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white dark:bg-slate-950">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Blog />
        <Contact />
      </div>
    </>
  );
}
