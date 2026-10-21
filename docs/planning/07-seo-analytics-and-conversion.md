# 07 — SEO, Analytics, dan Conversion

## SEO teknis
Gunakan URL subpath yang ditetapkan; slug deskriptif, canonical, title/meta unik, satu H1, heading semantik, alt text, Open Graph, sitemap XML, robots.txt, 404, internal linking antar lini, breadcrumb pada detail. SSR/SSG untuk halaman konten; structured data hanya bila fakta memenuhi pedoman (`Organization`, `LocalBusiness` bila data benar, `Article`, `BreadcrumbList`; jangan markup review/offer rekaan). Redirect saat slug berubah. Test indexability, noindex staging, Core Web Vitals, mobile rendering, image size, dan broken links.

## SEO lokal & konten
Cluster: interior BSD, desain interior rumah/apartemen Jabodetabek, renovasi ruang, penyimpanan fungsional, sewa apartemen/rumah area yang benar-benar dilayani, properti BSD. Artikel harus menjawab kebutuhan nyata dan menyebut area hanya jika layanan/data tersedia. Buat brief → fact check → editor → publish → update date; jangan menjanjikan ranking atau jumlah traffic.

## Tools & events
Search Console untuk sitemap/index/query; analytics privacy-aware (GA4 atau alternatif disetujui) dengan consent sesuai kebijakan; dashboard sederhana mingguan.

| Event | Parameter minimum |
|---|---|
| `cta_click` | cta_name, page_path, line |
| `whatsapp_click` | line, page_path, content_id |
| `form_start/submit/error` | form_type, page_path, error_category (tanpa isi sensitif) |
| `project_view/listing_view/unit_view` | content_id, status |
| `appointment_request` | lead_type, source |
| Offline `qualified/survey/viewing/won/lost` | internal lead ID, date, owner, outcome |

Semua form menyimpan source/landing page dan UTM (`utm_source`, `utm_medium`, `utm_campaign`, `utm_content`) secara minim. UTM convention ditulis di campaign brief dan tidak dipakai untuk menyimpan PII.

## Conversion system
CTA utama Interior di header/hero; CTA kontekstual pada detail. Form pendek dan berbeda per intent. Tampilkan ekspektasi tindak lanjut yang benar-benar disepakati. Lead masuk ke inbox/CMS, assigned owner, status, next action, timestamp; rekonsiliasi mingguan antara analytics submit dan lead nyata.

## Measurement
Dashboard: sessions/landing (directional), CTA rate, WhatsApp click, valid form submit, qualified lead, survey/viewing, response time, lost reason, source, dan outcome. Angka baseline ditentukan setelah 2–4 minggu data; tidak ada target ranking/transaksi fiktif.
