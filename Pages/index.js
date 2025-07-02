import { useRouter } from 'next/router';
import en from '../locales/en.json';
import es from '../locales/es.json';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Benefits from '../components/Benefits';
import HowItWorks from '../components/HowItWorks';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  const { locale } = useRouter();
  const t = locale === 'es' ? es : en;

  return (
    <>
      <Header t={t} />
      <Hero t={t} />
      <About t={t} />
      <Benefits t={t} />
      <HowItWorks t={t} />
      <Gallery t={t} />
      <Contact t={t} />
      <Footer />
    </>
  );
}
