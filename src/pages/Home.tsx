import { useState } from 'react';
import { services } from '../data/services';
import { industries } from '../data/industries';
import { articles } from '../data/articles';
import { Icon } from '../components/Icons';
import { ArticleArt, RibbonArt } from '../components/Visuals';
import { FounderMessage } from '../components/FounderMessage';
import {
  Button,
  Eyebrow,
  FAQList,
  Process,
  SectionHeading,
  ServiceCard,
} from '../components/Shared';

export function Home() {
  const [activeIndustry, setActiveIndustry] = useState('pemerintahan');
  const selected = industries.find((x) => x.slug === activeIndustry)!;
  return (
    <>
      <section className="hero" id="home">
        <div className="hero-grid-bg" aria-hidden="true" />
        <div className="container hero-layout">
          <div className="hero-copy">
            <div className="hero-intro">
              <span className="status-dot" /> YOUR NEXT DIGITAL PARTNER
            </div>
            <h1>
              Ide besar.
              <br />
              Jadi{' '}
              <span className="hero-highlight">
                nyata.
                <svg viewBox="0 0 350 20" aria-hidden="true">
                  <path
                    d="M5 13C98 2 226 2 345 11"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
            <p>
              Kami mengubah ide menjadi website, aplikasi, dan solusi digital yang menggerakkan
              bisnis Anda.
            </p>
            <div className="hero-buttons">
              <Button>Mari bangun sesuatu</Button>
              <a href="/solusi" className="hero-secondary">
                <span>
                  <Icon name="arrow" size={17} />
                </span>
                Jelajahi kemungkinan
              </a>
            </div>
            <div className="hero-footnote">
              <span className="hero-footnote-icon">
                <Icon name="checks" size={19} />
              </span>
              <span>
                Teknologi yang tepat. Anggaran yang masuk akal.
                <br />
                <b>Untuk setiap skala, di setiap langkah.</b>
              </span>
            </div>
          </div>
          <RibbonArt />
        </div>
        <div className="container hero-bottom">
          <a href="#possibilities" className="scroll-link">
            <span>
              <Icon name="down" size={15} />
            </span>
            SCROLL TO EXPLORE
          </a>
          <span>
            CREATIVE MINDS. MEANINGFUL TECHNOLOGY.
            <span className="hero-tiny-star" aria-hidden="true">
              ✳
            </span>
          </span>
        </div>
      </section>
      <section className="audience-strip" aria-label="Untuk berbagai skala organisasi">
        <div className="container">
          <span>
            DARI IDE PERTAMA,
            <br />
            <b>HINGGA SKALA BERIKUTNYA.</b>
          </span>
          {[
            { icon: 'landmark', name: 'Pemerintahan' },
            { icon: 'building', name: 'Perusahaan' },
            { icon: 'store', name: 'UMKM' },
            { icon: 'rocket', name: 'Startup' },
          ].map((x) => (
            <div key={x.name}>
              <Icon name={x.icon} size={25} />
              <span>{x.name}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="section intro-section" id="possibilities">
        <div className="container intro-grid">
          <Eyebrow>HELLO, WE’RE SLIVA</Eyebrow>
          <div>
            <h2>
              Teknologi itu soal
              <br />
              <span className="text-muted">membuka kemungkinan.</span>
            </h2>
            <div className="intro-bottom">
              <p>
                Ide sederhana bisa membawa perubahan besar. Kami hadir sebagai partner yang
                mendengarkan, merancang, dan membangun solusi digital bersama Anda — dari usaha yang
                baru mulai hingga organisasi dengan kebutuhan kompleks.
              </p>
              <a className="round-link" href="/tentang" aria-label="Kenali Sliva">
                <Icon name="diagonal" size={25} />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="section services-section">
        <div className="container">
          <SectionHeading
            eyebrow="WHAT WE DO"
            title={
              <>
                Anda punya visi.
                <br />
                <span className="text-blue">Kami bantu wujudkan.</span>
              </>
            }
            href="/layanan"
            linkText="Semua layanan"
            text="Dari tampilan pertama hingga sistem di balik layar. Semua terhubung, semua dipikirkan."
          />
          <div className="service-grid">
            {[0, 1, 2, 3, 5, 4].map((n, i) => (
              <ServiceCard key={services[n].slug} service={services[n]} index={i} />
            ))}
          </div>
          <div className="services-note">
            <Icon name="plus" size={18} />
            <span>
              Juga bisa bantu <a href="/layanan/data-analytics">data & analytics</a>,{' '}
              <a href="/layanan/integrasi-api">integrasi API</a>,{' '}
              <a href="/layanan/iot-sistem-cerdas">IoT</a>,{' '}
              <a href="/layanan/web3-blockchain">Web3</a>, dan lebih banyak lagi.
            </span>
          </div>
        </div>
      </section>
      <FounderMessage />
      <section className="section industry-section">
        <div className="container">
          <SectionHeading
            eyebrow="BUILT FOR EVERY AMBITION"
            title={
              <>
                Beda bidang.
                <br />
                <span className="text-blue">Semangat yang sama.</span>
              </>
            }
            text="Siapa pun Anda, ada langkah digital yang bisa kita mulai bersama."
          />
          <div className="industry-layout">
            <div className="industry-tabs">
              <div
                className="industry-tab-buttons"
                role="tablist"
                aria-label="Pilih sektor"
                aria-orientation="vertical"
              >
                {industries.slice(0, 4).map((x) => (
                  <button
                    id={`tab-${x.slug}`}
                    key={x.slug}
                    role="tab"
                    aria-selected={selected.slug === x.slug}
                    aria-controls="industry-panel"
                    tabIndex={selected.slug === x.slug ? 0 : -1}
                    onClick={() => setActiveIndustry(x.slug)}
                    onKeyDown={(e) => {
                      if (['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(e.key)) {
                        e.preventDefault();
                        const list = industries.slice(0, 4);
                        const current = list.findIndex((y) => y.slug === x.slug);
                        const next =
                          e.key === 'Home'
                            ? 0
                            : e.key === 'End'
                              ? 3
                              : (current + (e.key === 'ArrowDown' ? 1 : 3)) % 4;
                        setActiveIndustry(list[next].slug);
                        document.getElementById(`tab-${list[next].slug}`)?.focus();
                      }
                    }}
                  >
                    <Icon name={x.icon} size={22} />
                    {x.name}
                    <Icon name="diagonal" size={19} />
                  </button>
                ))}
              </div>
              <a href="/industri">
                Lihat 16 sektor industri <Icon name="arrow" size={16} />
              </a>
            </div>
            <div
              className="industry-panel"
              id="industry-panel"
              role="tabpanel"
              aria-labelledby={`tab-${selected.slug}`}
              tabIndex={0}
            >
              <span className="industry-panel-icon">
                <Icon name={selected.icon} size={39} />
              </span>
              <Eyebrow>{selected.name}</Eyebrow>
              <h3>{selected.tagline}</h3>
              <p>{selected.description}</p>
              <div className="tag-list">
                {selected.solutions.slice(0, 3).map((x) => (
                  <span key={x}>{x}</span>
                ))}
              </div>
              <a className="text-link" href={`/industri/${selected.slug}`}>
                Bangun solusi bersama <Icon name="diagonal" size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="section process-section">
        <div className="container">
          <SectionHeading
            eyebrow="GOOD THINGS, BUILT TOGETHER"
            title={
              <>
                Proses jelas.
                <br />
                Kolaborasi tanpa jarak.
              </>
            }
            href="/biaya"
            linkText="Biaya & cara kerja"
            text="Anda tahu apa yang sedang dibangun, ke mana arahnya, dan bagaimana langkah berikutnya."
          />
          <Process />
          <div className="promise-row">
            <div>
              <Icon name="message" size={24} />
              <span>
                <b>Komunikasi terbuka</b>
                <small>Bahasa yang Anda pahami.</small>
              </span>
            </div>
            <div>
              <Icon name="layers" size={24} />
              <span>
                <b>Fleksibel sesuai anggaran</b>
                <small>Mulai dari prioritas terpenting.</small>
              </span>
            </div>
            <div>
              <Icon name="shield" size={24} />
              <span>
                <b>Dirancang untuk jangka panjang</b>
                <small>Dokumentasi dan serah terima jelas.</small>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="section insight-section">
        <div className="container">
          <SectionHeading
            eyebrow="A LITTLE INSIGHT, A BIGGER PICTURE"
            title={
              <>
                Bekal untuk
                <br />
                <span className="text-blue">langkah berikutnya.</span>
              </>
            }
            href="/insight"
            linkText="Semua insight"
          />
          <div className="article-grid">
            {articles.slice(0, 3).map((x, i) => (
              <a className="article-card" href={`/insight/${x.slug}`} key={x.slug}>
                <ArticleArt theme={x.theme} index={i} />
                <div className="article-meta">
                  <span>{x.category}</span>
                  <span>{x.readTime} baca</span>
                </div>
                <h3>{x.title}</h3>
                <span className="article-link">
                  Baca insight <Icon name="diagonal" size={16} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="section faq-section">
        <div className="container faq-layout">
          <div>
            <Eyebrow>LET’S MAKE IT CLEAR</Eyebrow>
            <h2>
              Masih ada
              <br />
              <span className="text-blue">yang penasaran?</span>
            </h2>
            <p>Beberapa jawaban untuk membantu Anda mengambil langkah pertama.</p>
            <a className="text-link" href="/faq">
              Pertanyaan lainnya <Icon name="diagonal" size={17} />
            </a>
          </div>
          <FAQList limit={5} />
        </div>
      </section>
    </>
  );
}
