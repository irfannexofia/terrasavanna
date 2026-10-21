# 06 — Content & Data Model

## Materi yang harus disediakan
Logo/brand, copy layanan, area, proses, kontak; foto proyek/unit/listing dengan izin; spesifikasi dan status; profil legal/bisnis yang boleh dipublikasi; FAQ; policy privacy; artikel; social links; akses domain, CMS, analytics, WhatsApp/email. Status awal semuanya **belum tersedia** kecuali fakta di brief.

## Entitas dan field

| Entitas | Wajib publish | Opsional | Validasi/status | Owner pembaruan |
|---|---|---|---|---|
| Project interior | title, slug unik, summary, service/scope, area umum, cover + alt, consent, status | year, materials, gallery, challenge/outcome | draft/review/published/archived; foto/claim harus berizin | Lead Interior |
| Rental/unit titip | title/ID internal, area umum, type, availability, lastUpdated, inquiry CTA, image rights | price, size, bedrooms, facilities, rules, viewing notes | available/pending/unavailable/archived; price optional sampai disetujui | Koordinator Sewa |
| Property listing | title/ID, area, listing type, status, summary, image rights, inquiry CTA | price, land/building size, bedrooms, tenure/legal notes jika boleh | draft/review/published/withdrawn; legal data tidak boleh diasumsikan | Lead Property |
| Article | title, slug, body, author, publish date, cover alt, excerpt | tags, related CTA, updated date | draft/review/published; no thin/duplicate content | Editor Konten |
| Service page | H1, value proposition, scope, area, CTA, SEO title/description | FAQ, process, related projects | owner approval; no unverified claims | Owner/Marketing |
| Lead | source, type, name, contact, consent timestamp, message, receivedAt | budget/timeline, UTM, page, assignment, notes | new/contacted/qualified/scheduled/won/lost/spam; retention policy | Admin/assigned staff |

## Aturan data
- Slug lowercase, unik, stabil; redirect bila berubah.
- Nomor/email tervalidasi; consent wajib sebelum submit; jangan mengumpulkan KTP/NPWP di form publik MVP.
- Tanggal ISO timezone Indonesia; `lastUpdated` di-render.
- Price/availability/address lengkap hanya jika owner menyetujui; gunakan “hubungi kami” bila tidak publik.
- PII lead dibatasi role dan retention yang disetujui. Export terenkripsi.
- Semua media memiliki credit/source/rights expiry. Rights expired → unpublish.

## Belum tersedia / harus diverifikasi
Detail perusahaan/legal, nomor WhatsApp/email, alamat, area final, layanan tepat, harga, status unit, properti, foto Sky House BSD dan kamar mandi Makassar, testimoni, sertifikasi, warranty, statistik, izin publikasi, kebijakan data dan retention.
