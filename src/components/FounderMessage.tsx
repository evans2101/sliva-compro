import { Icon } from './Icons';
import { Eyebrow } from './Shared';

export function FounderMessage() {
  return (
    <section className="section founder-section" aria-labelledby="founder-heading">
      <div className="container">
        <div className="founder-intro">
          <Eyebrow>DARI FOUNDER & CEO</Eyebrow>
          <h2 id="founder-heading">
            Teknologi untuk maju.
            <br />
            <span className="text-blue">Peluang untuk semua.</span>
          </h2>
        </div>
        <div className="founder-layout">
          <figure className="founder-letter">
            <span className="founder-quote-mark" aria-hidden="true">
              “
            </span>
            <blockquote>
              <p className="founder-statement">
                Saya membangun Sliva dengan satu keyakinan:{' '}
                <strong>teknologi harus bisa dijangkau dan membawa manfaat nyata.</strong>
              </p>
              <p>
                Dari UMKM yang baru memulai, perusahaan yang ingin tumbuh, hingga instansi yang
                melayani masyarakat — setiap kebutuhan layak didengar. Komitmen saya adalah membantu
                Anda menentukan langkah yang tepat, menggunakan anggaran dengan bijak, dan membangun
                solusi yang bisa berkembang bersama Anda.
              </p>
            </blockquote>
            <figcaption>
              <span className="founder-monogram" aria-hidden="true">
                EM
              </span>
              <span className="founder-identity">
                <strong>Evans Moris</strong>
                <span>Founder & CEO</span>
                <span>PT. Sliva Technology Indonesia</span>
              </span>
            </figcaption>
          </figure>
          <div className="founder-direction">
            <div className="founder-principle">
              <span className="founder-principle-number" aria-hidden="true">
                01
              </span>
              <div>
                <h3>Visi kami</h3>
                <p>
                  Membuka akses teknologi yang berkualitas dan terjangkau agar lebih banyak bisnis
                  serta organisasi di Indonesia bisa tumbuh dan memberi dampak bagi masyarakat.
                </p>
              </div>
            </div>
            <div className="founder-principle">
              <span className="founder-principle-number" aria-hidden="true">
                02
              </span>
              <div>
                <h3>Misi kami</h3>
                <p>
                  Mendengarkan kebutuhan, merancang solusi sesuai prioritas dan anggaran, serta
                  mendampingi perjalanan digital melalui proses yang transparan dan kolaborasi
                  jangka panjang.
                </p>
              </div>
            </div>
            <a className="text-link" href="/tentang">
              Kenali Sliva lebih dekat <Icon name="diagonal" size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
