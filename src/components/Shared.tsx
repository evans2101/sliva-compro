import { useEffect, useRef, useState, type ReactNode } from 'react';
import { services } from '../data/services';
import { faqs, site, whatsappUrl, type FAQ } from '../data/site';
import { Icon } from './Icons';

export function Button({
  href = '/kontak',
  children,
  secondary = false,
  className = '',
  external = false,
}: {
  href?: string;
  children: ReactNode;
  secondary?: boolean;
  className?: string;
  external?: boolean;
}) {
  return (
    <a
      className={`button ${secondary ? 'button-secondary' : 'button-primary'} ${className}`}
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
      <Icon name="diagonal" size={18} />
    </a>
  );
}
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <a
      href="/"
      aria-label="Sliva. Technology Indonesia, beranda"
      className={`brand ${light ? 'brand-light' : ''}`}
    >
      <img src="/brand-mark.webp" alt="" width="40" height="40" />
      <span>
        sliva<span className="brand-period">.</span>
        <small>TECHNOLOGY INDONESIA</small>
      </span>
    </a>
  );
}
const nav = [
  { name: 'Solusi', href: '/solusi' },
  { name: 'Industri', href: '/industri' },
  { name: 'Tentang', href: '/tentang' },
  { name: 'Insight', href: '/insight' },
];
export function Header({ path }: { path: string }) {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false);
        headerRef.current
          ?.querySelectorAll('details[open]')
          .forEach((x) => x.removeAttribute('open'));
        menuButton.current?.focus();
      }
    }
    function onOutside(event: MouseEvent) {
      if (headerRef.current && !event.composedPath().includes(headerRef.current)) {
        setOpen(false);
        headerRef.current
          ?.querySelectorAll('details[open]')
          .forEach((x) => x.removeAttribute('open'));
      }
    }
    document.addEventListener('keydown', onKey);
    document.addEventListener('click', onOutside);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onOutside);
    };
  }, []);
  return (
    <header className="site-header" ref={headerRef}>
      <div className="container header-inner">
        <Logo />
        <nav className="desktop-nav" aria-label="Navigasi utama">
          <details className="nav-dropdown">
            <summary className={path.startsWith('/layanan') ? 'active' : ''}>
              Layanan <Icon name="chevron" size={13} />
            </summary>
            <div className="dropdown-panel">
              <a href="/layanan" className="dropdown-all">
                Semua yang bisa kita bangun <Icon name="arrow" size={16} />
              </a>
              <div className="dropdown-grid">
                {services.map((x) => (
                  <a href={`/layanan/${x.slug}`} key={x.slug}>
                    <Icon name={x.icon} size={18} />
                    {x.name}
                  </a>
                ))}
              </div>
            </div>
          </details>
          {nav.map((x) => (
            <a
              key={x.href}
              href={x.href}
              aria-current={path.startsWith(x.href) ? 'page' : undefined}
            >
              {x.name}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a className="header-cta" href="/kontak">
            Ceritakan idemu <Icon name="diagonal" size={16} />
          </a>
          <button
            className="mobile-toggle"
            ref={menuButton}
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Tutup menu' : 'Buka menu'}
          >
            <Icon name={open ? 'x' : 'menu'} size={25} />
          </button>
        </div>
      </div>
      <nav id="mobile-nav" className="mobile-nav" hidden={!open} aria-label="Navigasi mobile">
        <a href="/">Beranda</a>
        <a href="/layanan">
          Layanan <span>12 keahlian, satu partner</span>
        </a>
        {nav.map((x) => (
          <a key={x.href} href={x.href}>
            {x.name}
            <Icon name="diagonal" size={17} />
          </a>
        ))}
        <a href="/biaya">Biaya & cara kerja</a>
        <a href="/kontak">
          Mulai konsultasi <Icon name="message" size={19} />
        </a>
      </nav>
    </header>
  );
}
export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <span className={`eyebrow ${light ? 'eyebrow-light' : ''}`}>
      <span />
      {children}
    </span>
  );
}
export function SectionHeading({
  eyebrow,
  title,
  text,
  href,
  linkText = 'Jelajahi semuanya',
}: {
  eyebrow: string;
  title: ReactNode;
  text?: string;
  href?: string;
  linkText?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2>{title}</h2>
        {text && <p>{text}</p>}
      </div>
      {href && (
        <a className="text-link" href={href}>
          {linkText}
          <Icon name="diagonal" size={18} />
        </a>
      )}
    </div>
  );
}
export function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  return (
    <a href={`/layanan/${service.slug}`} className="service-card">
      <div className="card-top">
        <span className="service-icon">
          <Icon name={service.icon} size={27} />
        </span>
        <span className="card-index">{String(index + 1).padStart(2, '0')}</span>
      </div>
      <h3>{service.name}</h3>
      <p>{service.short}</p>
      <span className="card-bottom">
        Lihat layanan{' '}
        <span className="circle-arrow">
          <Icon name="diagonal" size={18} />
        </span>
      </span>
    </a>
  );
}
export function FAQList({ items = faqs, limit }: { items?: FAQ[]; limit?: number }) {
  return (
    <div className="faq-list">
      {items.slice(0, limit).map((x, i) => (
        <details key={x.question} className="faq-item">
          <summary>
            <span className="faq-number">0{i + 1}</span>
            <span>{x.question}</span>
            <Icon name="plus" size={20} />
          </summary>
          <p>{x.answer}</p>
        </details>
      ))}
    </div>
  );
}
export function CTA() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-card">
          <div className="cta-rings" aria-hidden="true" />
          <div className="cta-copy">
            <Eyebrow light>THE NEXT BIG THING STARTS HERE</Eyebrow>
            <h2>
              Ide Anda layak
              <br />
              jadi <span>kenyataan.</span>
            </h2>
            <p>
              Dari obrolan sederhana, menuju solusi yang membawa perubahan.
              <br className="desktop-break" /> Mari cari langkah pertama yang paling masuk akal.
            </p>
            <Button href={whatsappUrl()} external>
              Ngobrol dengan Sliva <Icon name="message" size={18} />
            </Button>
            <span className="cta-note">Mulai dari diskusi. Kita petakan kebutuhannya.</span>
          </div>
          <span className="cta-asterisk" aria-hidden="true">
            ✳
          </span>
        </div>
      </div>
    </section>
  );
}
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo />
            <p>
              Menghubungkan ide, teknologi,
              <br />
              dan kemungkinan berikutnya.
            </p>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-availability"
            >
              <span className="success-dot" />
              Terbuka untuk ide dan kolaborasi baru <Icon name="diagonal" size={14} />
            </a>
            <a
              href="https://www.instagram.com/slivatech.id/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram @slivatech.id <Icon name="diagonal" size={14} />
            </a>
          </div>
          <div>
            <span className="footer-label">JELAJAHI</span>
            <a href="/tentang">Tentang Sliva</a>
            <a href="/solusi">Solusi digital</a>
            <a href="/produk">Produk kami</a>
            <a href="/kemitraan">Kemitraan</a>
            <a href="/insight">Insight</a>
          </div>
          <div>
            <span className="footer-label">BISA KAMI BANTU</span>
            <a href="/layanan/pembuatan-website">Website & E-commerce</a>
            <a href="/layanan/pengembangan-aplikasi">Aplikasi Web & Mobile</a>
            <a href="/layanan/software-custom">Software Custom</a>
            <a href="/layanan/ai-otomasi">AI & Otomasi</a>
            <a href="/layanan">
              Semua layanan <Icon name="diagonal" size={13} />
            </a>
          </div>
          <div className="footer-contact">
            <span className="footer-label">MULAI PERCAKAPAN</span>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
              {site.phone} <Icon name="diagonal" size={14} />
            </a>
            <p>
              Kolaborasi di seluruh Indonesia.
              <br />
              Dekat, meski dari mana saja.
            </p>
            <a href="/kontak" className="text-link">
              Punya ide? Cerita dulu <Icon name="diagonal" size={16} />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getUTCFullYear()} {site.legalName}
          </span>
          <div>
            <a href="/privasi">Privasi</a>
            <a href="/ketentuan">Ketentuan</a>
            <a href="/faq">FAQ</a>
            <span>Made with purpose. Built by Sliva.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
export function Breadcrumb({ items }: { items: { name: string; href?: string }[] }) {
  return (
    <nav className="breadcrumb container" aria-label="Breadcrumb">
      <a href="/">Beranda</a>
      {items.map((x, i) => (
        <span key={x.name}>
          <span className="breadcrumb-separator">/</span>
          {x.href ? (
            <a href={x.href}>{x.name}</a>
          ) : (
            <span aria-current={i === items.length - 1 ? 'page' : undefined}>{x.name}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="page-hero">
      <div className="container">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1>{title}</h1>
        <p>{description}</p>
        {children}
      </div>
      <span className="page-hero-star" aria-hidden="true">
        ✳
      </span>
    </section>
  );
}
export function Process({ compact = false }: { compact?: boolean }) {
  const steps = [
    [
      'Dengar & petakan',
      'Ceritakan tantangan, pengguna, dan target Anda. Kita tentukan prioritasnya bersama.',
    ],
    [
      'Rancang & sepakati',
      'Lihat arah desain, ruang lingkup, anggaran, dan jadwal sebelum pengembangan.',
    ],
    [
      'Bangun & sempurnakan',
      'Ikuti progres melalui demo. Uji alur dan beri masukan di setiap tahap.',
    ],
    [
      'Luncurkan & tumbuh',
      'Serah terima, pendampingan, dan rencana pengembangan untuk langkah berikutnya.',
    ],
  ];
  return (
    <div className={`process-grid ${compact ? 'process-compact' : ''}`}>
      {steps.map(([title, text], i) => (
        <div key={title}>
          <span className="process-number">
            0{i + 1}
            <Icon name="arrow" size={21} />
          </span>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      ))}
    </div>
  );
}
