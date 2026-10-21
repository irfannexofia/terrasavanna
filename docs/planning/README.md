# Terra Savanna — Ringkasan Perencanaan Satu Halaman

**Status:** Draft untuk review pemilik. Workspace saat discovery hanya berisi `.gitignore`; belum ada aplikasi, framework, package manager, atau CMS. Tidak ada source code yang diubah.

## MVP
Website Indonesia, mobile-first, satu domain `terrasavanna.com`, dengan beranda yang menonjolkan **Terra Savanna House of Interior**, serta akses jelas ke `/sewa` dan `/property`. MVP mencakup halaman tentang, kontak, privasi, artikel/panduan, portofolio interior, listing unit dan properti, formulir prospek, WhatsApp, CMS ringan, SEO dasar, analytics, dan prosedur operasional.

Tidak termasuk pembayaran, booking otomatis, portal pelanggan, aplikasi mobile, atau CRM kompleks.

## Keputusan utama yang direkomendasikan
1. Monorepo website publik + CMS admin terkelola; stack yang sederhana, typed, SEO-friendly, dan dapat dipelihara (detail opsi di `05-technical-architecture.md`).
2. Tiga lini memakai subpath yang diminta; Interior mendapat hero dan porsi konten terbesar.
3. Semua data listing/unit memiliki status publikasi dan status ketersediaan; data yang belum diverifikasi tidak diterbitkan.
4. Lead masuk melalui formulir terarah dan WhatsApp; tim menindaklanjuti menggunakan SLA internal yang disepakati.
5. Launch hanya setelah aset, nomor kontak, persetujuan privasi, akses domain/analytics, dan data listing tersedia.

## Estimasi indikatif
Total kalender **6–10 minggu** (referensi pemilik): brief 1 minggu, konten 1–2, desain 1–2, pembangunan 2–4, QA/peluncuran 1. Waktu aktif lebih pendek dapat tertunda oleh materi dan approval. Lihat `09-roadmap-estimates-and-risks.md`.

## Risiko terbesar
- Materi foto/proyek dan listing tidak lengkap atau izin publikasi belum jelas.
- Informasi kontak/status unit kedaluwarsa sehingga menurunkan kepercayaan.
- Keputusan brand, CMS, pemilik data, dan proses follow-up terlambat.
- Kepatuhan privasi/izin foto belum ditinjau.

## Langkah pertama setelah brief disetujui
1. Pemilik menjawab blocker di `11-open-decisions-and-asset-request.md`.
2. Kumpulkan logo, identitas, kontak, foto berizin, data unit/listing, dan copy terverifikasi.
3. Tetapkan pemilik konten dan SLA follow-up.
4. Finalisasi sitemap/wireframe; baru kemudian implementasi source code.

Lihat `00-project-brief.md` untuk tujuan dan batasan; dokumen lain menjadi spesifikasi kerja lintas tim.
