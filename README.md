# Sliva company profile

Revamp website **PT. Sliva Technology Indonesia**, berbahasa Indonesia, dengan domain canonical **https://sliva.id**. Dibangun dengan React 19, TypeScript, dan Vite; seluruh halaman diprerender menjadi HTML saat build.

## Menjalankan

Gunakan Node.js 22.12+ (CI memakai Node.js 24).

```sh
npm ci
npm run dev
```

Untuk memeriksa hasil produksi, termasuk metadata SEO dan status 404:

```sh
npm run build
npm run preview
```

Buka `http://127.0.0.1:4173`. Server preview menyajikan HTML per URL dan mengompresi respons teks dengan gzip. Server ini hanya untuk preview lokal. Deploy folder `dist` ke hosting statis; konfigurasi Vercel sudah disediakan.

## Isi situs

50 halaman: beranda; indeks dan 12 detail layanan; indeks dan 16 sektor; indeks dan 3 konsep solusi; tentang; indeks dan 6 artikel; biaya; produk Slivadoc; kemitraan; kontak; FAQ; privasi; ketentuan. Halaman 404 terpisah menggunakan `noindex` dan status HTTP 404.

- Warna biru/cyan mengikuti logo asli pada `public/logo-sliva.png`.
- Visual berdimensi menggunakan SVG dan CSS tanpa library 3D. Gerakan menghormati `prefers-reduced-motion`.
- Font lokal, aset kecil, dimensi gambar eksplisit, serta file JS/CSS dengan hash.
- HTML lengkap, judul dan deskripsi unik, canonical, Open Graph, gambar sosial, sitemap XML, robots.txt, dan JSON-LD sesuai konteks.
- Tidak ada klaim jumlah klien, penghargaan, testimoni, atau proyek yang belum diverifikasi. Preview solusi diberi label konsep dan memakai data ilustrasi.

## Mengubah konten

| Kebutuhan                        | Sumber                                         |
| -------------------------------- | ---------------------------------------------- |
| Kontak, nama badan usaha, domain | `src/data/site.ts`                             |
| Pesan Founder & CEO, visi, misi  | `src/components/FounderMessage.tsx`            |
| Layanan dan FAQ per layanan      | `src/data/services.ts`                         |
| Sektor industri                  | `src/data/industries.ts`                       |
| Konsep solusi                    | `src/data/solutions.ts`                        |
| Artikel insight                  | `src/data/articles.ts`                         |
| URL, title, description          | `src/routes.ts`                                |
| Structured data                  | `src/entry-server.tsx`                         |
| Visual dan tata letak            | `src/components`, `src/pages`, `src/index.css` |

Setelah menambah konten, tambahkan route bila diperlukan lalu jalankan build. Sitemap dihasilkan dari daftar route yang sama sehingga tidak perlu disinkronkan manual. Skrip prerender, pemeriksaan SEO, dan dokumentasi SEO memakai domain produksi yang sama; perbarui ketiganya jika domain berubah.

## Konsultasi

WhatsApp: **082391239651** / `https://wa.me/6282391239651`.

Email: **evans.moris21@gmail.com**.

Formulir memvalidasi isian dan membuka WhatsApp dengan pesan yang disiapkan. Pengguna menekan Kirim sendiri di WhatsApp. Situs tidak menyimpan formulir ke database dan tidak menampilkan status seolah pesan telah terkirim. Email menggunakan `mailto:`. Tidak ada kredensial, backend, atau tracker yang diperlukan.

## Keyword dan strategi SEO

Folder `seo` memuat **5.000 kandidat keyword unik** dalam CSV, JSON, dan Excel, dengan klaster, intent, URL tujuan, prioritas editorial, serta status validasi. Volume pencarian dan tingkat kesulitan dibiarkan kosong karena belum diukur. Excel menyediakan filter, freeze panes, dan kolom riset yang bisa dilengkapi.

```sh
npm run keywords
```

Perintah di atas meregenerasi CSV, JSON, dan ringkasan. Excel adalah snapshot editorial yang perlu diperbarui jika dataset berubah. Dataset tidak dimasukkan ke HTML publik dan tidak menghasilkan ribuan halaman lokasi. Strategi implementasi, pemetaan halaman, dan langkah setelah peluncuran terdapat pada `seo/SEO-STRATEGY.md`.

## Validasi

```sh
npm run typecheck
npm run build
npm run test:seo
npx playwright install chromium
npm test
npm run audit:performance
npm audit
```

Tes lokal memakai Google Chrome; CI memakai Chromium dari Playwright. Audit Lighthouse memerlukan Chrome; bila tidak terdeteksi, isi `CHROME_PATH` dengan lokasi executable. Laporan HTML Lighthouse dan trace browser diabaikan Git; ringkasan hasil disimpan dalam `qa`.

Pemeriksaan mencakup 50 halaman pada empat ukuran layar, error runtime/hidrasi, overflow horizontal, aksesibilitas 17 template, menu, keyboard tabs, filter, FAQ, validasi dan penerusan pesan WhatsApp, konten tanpa JavaScript, metadata, structured data, tautan internal, serta 404.

## Deployment dan pencarian

`vercel.json` mengatur build, direktori output, URL bersih, dan header. Semua route memiliki file HTML sendiri, sehingga **jangan menambahkan catch-all rewrite ke `/index.html`**. Pada hosting selain Vercel, petakan URL extensionless ke file HTML yang cocok dan sajikan `404.html` dengan status 404 untuk URL lain.

Push GitHub tidak otomatis membuktikan deployment berhasil. Hubungkan repository dan domain pada hosting, lalu verifikasi `https://sliva.id`, halaman detail, `/sitemap.xml`, `/robots.txt`, serta URL tidak dikenal. Search Console memerlukan akses pemilik domain untuk verifikasi dan pengiriman sitemap. Peringkat dan indeks Google tidak dijamin oleh skor Lighthouse.
