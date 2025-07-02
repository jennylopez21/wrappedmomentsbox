import Image from 'next/image';

export default function Hero({ t }) {
  return (
    <section className="hero">
      <Image src="/logo.png" alt="Wrapped Moments Logo" width={120} height={120} className="hero-logo" priority />
      <h1>Wrapped Moments</h1>
      <h2>{t.slogan}</h2>
      <p>{t.intro}</p>
      <a href="#contact" className="cta">{t.cta}</a>
    </section>
  );
}
