# Terra Savanna — Dokumen 00 — Project Brief

| Field | Nilai |
| --- | --- |
| ID dokumen | TS-PLAN-00 |
| Versi | 0.1 (draft untuk review pemilik) |
| Status | Menunggu persetujuan |
| Tanggal | 2026-09-30 |
| Locale | id-ID |

> **Dokumen ini belum disetujui.** Sesuai instruksi proyek, tidak ada source code yang diubah dan tidak ada fitur yang dibangun sebelum dokumen perencanaan ini ditinjau dan keputusan blocker ditetapkan (lihat `11-open-decisions-and-asset-request.md`).

## 1. Ringkasan Proyek

Terra Savanna memiliki tiga lini bisnis:

1. **Terra Savanna House of Interior** — desain & pengerjaan interior hunian (lini prioritas keuntungan).
2. **Layanan sewa & titip unit** — apartemen dan rumah.
3. **Terra Property BSD** — properti, fokus BSD.

Tujuan proyek ini adalah membangun website perusahaan di domain tunggal `terrasavanna.com` yang berfungsi sebagai pusat informasi resmi, portofolio, dan mesin penghasil prospek untuk ketiga lini, dengan sorotan terbesar pada Interior.

Website ini **bukan** sistem transaksi. Tidak ada pembayaran online, booking otomatis, atau kontrak digital pada versi pertama (lihat `03-functional-requirements.md`).

## 2. Tujuan dan hasil bisnis

| ID | Tujuan | Ukuran sukses indikatif |
| --- | --- | --- |
| G-01 | Menghasilkan prospek interior yang relevan | Form konsultasi interior dan klik WhatsApp tercatat dengan sumbernya |
| G-02 | Mempermudah penemuan layanan sewa/titip | Pengunjung dapat menemukan halaman sewa dari beranda dalam maksimal dua klik |
| G-03 | Menyajikan properti BSD | Listing terkelola memiliki data akurat dan tanggal pembaruan |
| G-04 | Menunjukkan bukti kerja yang kredibel | Proyek yang dipublikasikan memiliki foto nyata, deskripsi, dan area yang berizin |
| G-05 | Memudahkan pengelolaan internal | Tim dapat memperbarui proyek/unit tanpa developer setelah pelatihan |
| G-06 | Menyiapkan fondasi SEO dan pertumbuhan | URL stabil, metadata, analytics, mobile-first, dan performance baseline tersedia |

> Ini adalah ukuran arah, bukan janji ranking, traffic, atau jumlah transaksi. Lihat `07-seo-analytics-and-conversion.md`.

## 3. Ruang lingkup

### Termasuk (v1)
- Website publik berbahasa Indonesia, mobile-first, di `terrasavanna.com`.
- Beranda yang menyorot Interior dan tetap menampilkan sewa/titip serta properti.
- Halaman `/interior`, `/sewa`, `/property`.
- `/tentang`, `/kontak`, `/kebijakan-privasi`, `/panduan`, dan detail artikel.
- Form prospek per intent + tombol WhatsApp.
- Portofolio proyek interior, unit sewa/titip, dan listing properti BSD.
- CMS ringan dengan workflow draft/publish.
- Analytics, Search Console, sitemap, robots, metadata dasar.

### Tidak termasuk (v1)
- Pembayaran, DP online, booking unit, e-signature, kontrak digital.
- Portal pelanggan, aplikasi native, chatbot AI, kalkulator harga otomatis.
- Multi-bahasa dan integrasi CRM/ticketing kompleks.

### Batasan
- Satu domain utama dengan subpath yang telah ditentukan.
- Bahasa Indonesia pada versi awal.
- Konten, foto, data unit, listing, dan kontak harus disediakan/diverifikasi pemilik; CLI tidak mengarang materi.
- Tim non-teknis perlu dapat mengelola konten.

## 4. Target pelanggan

| Persona | Kebutuhan | Lini | Hasil yang dituju |
| --- | --- | --- | --- |
| P1 — Pemilik rumah/apartemen | Desain, pengerjaan, optimasi ruang yang dapat dipercaya | Interior | Konsultasi/survei |
| P2 — Pemilik unit kosong | Jalur titip dan penjelasan pengelolaan | Sewa/titip | Inquiry menitipkan unit |
| P3 — Calon penyewa | Unit, status, lokasi, informasi, kontak cepat | Sewa | Inquiry/viewing |
| P4 — Calon pembeli | Listing, spesifikasi, info kawasan, kunjungan | Property BSD | Inquiry/kunjungan |

Rincian alur ada di `02-user-journeys.md`.

## 5. Asumsi dan status

| ID | Asumsi | Status |
| --- | --- | --- |
| A-01 | Brand resmi adalah “Terra Savanna”; ejaan lain perlu dikonfirmasi | Diberikan/perlu konfirmasi jika ditemukan variasi |
| A-02 | “House of Interior” berada di bawah payung Terra Savanna | Perlu konfirmasi |
| A-03 | Area Interior mencakup BSD dan Jabodetabek | Diberikan sebagai arah; batas layanan perlu konfirmasi |
| A-04 | Sky House BSD dan proyek kamar mandi Makassar mungkin menjadi contoh proyek | Foto, detail, dan izin belum diverifikasi |
| A-05 | Nomor WhatsApp bisnis dapat dipakai untuk CTA | Nomor dan routing belum tersedia |
| A-06 | Tim internal mengelola CMS | Perlu konfirmasi dan uji kemampuan |
| A-07 | Tidak ada pembayaran/booking di v1 | Diberikan sebagai aturan |
| A-08 | Media memakai hosting/CDN proyek | Rekomendasi, vendor/budget belum dipilih |

## 6. Definisi keberhasilan

Rilis v1 dianggap berhasil bila checklist `10-launch-and-acceptance-checklist.md` terpenuhi dan: (1) halaman inti dapat ditemukan di Search Console setelah proses indexing, (2) form dan WhatsApp teruji tanpa kehilangan lead, (3) tim berhasil memperbarui minimal satu proyek/unit melalui CMS, (4) tidak ada bug P1/P2 terbuka, dan (5) analytics serta backup terverifikasi.

## 7. Prioritas tiga lini

| Lini | Peran di beranda | Halaman | Prioritas |
| --- | --- | --- | --- |
| **Interior** | Hero utama + blok portofolio terbesar | `/interior` | 1 — paling menguntungkan saat ini |
| Sewa & titip | Blok sekunder dengan dua jalur CTA | `/sewa` | 2 |
| Properti BSD | Blok sekunder dengan CTA kunjungan | `/property` | 3 |

Beranda selalu menampilkan ketiga lini; Interior mendapat porsi dan emphasis visual terbesar. Lihat `01-sitemap-and-content.md`.

## 8. Referensi dokumen

`01-sitemap-and-content.md` (sitemap/konten) · `02-user-journeys.md` (journey) · `03-functional-requirements.md` (fitur/acceptance) · `04-design-and-brand.md` (UX/brand) · `05-technical-architecture.md` (arsitektur) · `06-content-and-data-model.md` (data) · `07-seo-analytics-and-conversion.md` (SEO/analytics) · `08-security-privacy-and-operations.md` (operasi) · `09-roadmap-estimates-and-risks.md` (roadmap/risiko) · `10-launch-and-acceptance-checklist.md` (launch) · `11-open-decisions-and-asset-request.md` (blocker/aset) · `README.md` (ringkasan satu halaman).

## 9. Fakta vs asumsi

- **Fakta dari brief:** nama Terra Savanna, tiga lini, domain, prioritas Interior, bahasa Indonesia, area BSD/Jabodetabek sebagai arah, dan contoh proyek yang belum diverifikasi.
- **Asumsi:** item A-02, A-05, A-06, A-08 dan batas detail A-03.
- **Rekomendasi:** spesifikasi pada dokumen 03–09.
- **Tidak boleh dikarang:** harga, alamat, status unit, listing, testimoni, statistik, sertifikasi, garansi, pengalaman, dan klaim perusahaan.
