import Link from 'next/link';
import { useRouter } from 'next/router';
import locales from '../locales/en.json';
import Image from 'next/image';

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' }
];

export default function Header({ t }) {
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;

  const changeLang = (e) => {
    const newLocale = e.target.value;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  return (
    <header>
      <Link href="/">
        <Image src="/logo.png" alt="Wrapped Moments Logo" width={60} height={60} className="logo" priority />
      </Link>
      <nav>
        <ul>
          <li><a href="#about">{t.about}</a></li>
          <li><a href="#benefits">{t.benefits}</a></li>
          <li><a href="#how">{t.how}</a></li>
          <li><a href="#gallery">{t.gallery}</a></li>
          <li><a href="#contact">{t.contact}</a></li>
        </ul>
        <select onChange={changeLang} value={locale}>
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>{lang.label}</option>
          ))}
        </select>
      </nav>
    </header>
  );
}
