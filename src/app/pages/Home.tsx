import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Portfolio } from '../components/Portfolio';
import { Pricing } from '../components/Pricing';
import { About } from '../components/About';
import { Contact } from '../components/Contact';

export function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <main>
      <Hero />
      <Services />
      <Portfolio />
      <Pricing />
      <About />
      <Contact />
    </main>
  );
}