# 11 — Open Decisions & Asset Request

## Blocker sebelum build production

| ID | Keputusan/aset | Alasan | Format/opsi | Penanggung jawab | Dibutuhkan |
|---|---|---|---|---|---|
| D-01 | Konfirmasi arsitektur brand & ejaan resmi | Semua copy/SEO | Jawaban tertulis + logo | Pemilik | Sebelum sitemap final |
| D-02 | Nomor WhatsApp/email per lini | Routing lead dan CTA | Nomor/email resmi, owner | Pemilik | Sebelum form build |
| D-03 | Legal entity, alamat/area/jam publik | Trust, schema, privacy | Data tertulis terverifikasi | Pemilik | Sebelum konten final |
| D-04 | Foto/logo/font dan izin publikasi | Visual/legal | SVG/PNG, JPG/WebP asli + rights register | Pemilik | Sebelum desain final |
| D-05 | Validasi Sky House BSD & Makassar | Hindari data rekaan | Nama, lokasi umum, scope, foto, izin | Lead Interior | Sebelum portofolio |
| D-06 | Data unit/listing awal | MVP tidak kosong/stale | Spreadsheet CSV/XLSX + foto/rights | Lead Sewa/Property | Sebelum UAT |
| D-07 | CMS/provider/budget dan admin | Architecture/deploy | Pilih opsi di doc 05 + akun | Pemilik/Tech lead | Sebelum build |
| D-08 | Privacy, consent, retention, disclaimer | Kepatuhan data | Review owner/legal tertulis | Pemilik/legal | Sebelum production |
| D-09 | Owner follow-up & SLA | Conversion nyata | Nama role, jam kerja, status, escalation | Pemilik | Sebelum form go-live |
| D-10 | Domain/DNS/hosting/analytics access | Deployment & measurement | Delegated access, bukan password chat | Pemilik/Tech lead | Sebelum launch |

## Dapat menyusul setelah launch
- Kalender artikel dan author pipeline.
- Testimoni/studi kasus setelah consent.
- Filter listing lanjutan, CRM, email automation.
- English version.
- Foto tim/kantor bila disetujui.

## Template spreadsheet data listing
Kolom minimum: `internal_id`, `title`, `line`, `type`, `area_public`, `status`, `last_updated`, `price_public (yes/no/value)`, `description`, `contact_route`, `photo_filename`, `photo_source`, `publication_rights`, `rights_expiry`, `owner`, `notes`. Jangan kirim KTP atau data sensitif melalui spreadsheet publik.

## Pertanyaan bisnis terbuka
1. Apakah “House of Interior” sub-brand resmi atau label layanan?
2. Layanan interior tepatnya desain saja, build, renovasi, atau kombinasi apa?
3. Area layanan dan batas proyek yang realistis?
4. Apa proses kualifikasi, survei, dan tindak lanjut yang benar?
5. Apakah harga boleh tampil atau semua inquiry dulu?
6. Unit/listing mana yang aktif dan siapa yang memperbarui?
7. Klaim apa yang memiliki bukti/izin (sertifikasi, garansi, pengalaman, testimonial)?
8. Siapa data/privacy owner dan penasihat hukum?
9. Berapa budget operasional CMS/hosting/email/analytics?
10. Kapan target launch bisnis dan siapa approver final?

**Aturan:** setiap jawaban disimpan pada decision log. Jika belum dijawab, gunakan status “belum dikonfirmasi”, bukan asumsi atau placeholder publik.
