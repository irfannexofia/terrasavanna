# 03 — Functional Requirements

## Must (MVP)

| ID | Requirement | Acceptance criteria yang dapat diuji |
|---|---|---|
| FR-001 | Beranda merutekan ke tiga lini, Interior dominan | Pada mobile/desktop, tiga CTA lini tampil; CTA Interior berada di hero; semua link valid |
| FR-002 | Halaman layanan tiga lini | `/interior`, `/sewa`, `/property` memiliki H1, manfaat terverifikasi, CTA, metadata, dan halaman 200 |
| FR-003 | Portofolio proyek interior | Admin dapat membuat draft/publish/unpublish; detail menampilkan foto berizin, scope, lokasi tingkat aman, status; item draft tidak publik |
| FR-004 | Unit sewa/titip | Admin dapat mengubah status `tersedia/dalam proses/tidak tersedia/arsip`; kartu menampilkan tanggal update; unit nonpublik tak muncul |
| FR-005 | Listing property BSD | CRUD draft/publish, detail terstruktur, CTA inquiry, dan validasi data wajib sebelum publish |
| FR-006 | Form lead terarah | Form interior/sewa/property memiliki field minimum, validasi client+server, consent wajib, pesan sukses/gagal, dan tidak mengekspos data sensitif |
| FR-007 | WhatsApp/contact routing | CTA membuka nomor resmi dengan konteks halaman; nomor sama dengan nomor yang disetujui pemilik |
| FR-008 | CMS role access | Admin/editor dapat login; editor tidak mengelola user; perubahan memiliki draft/publish dan audit dasar |
| FR-009 | Responsive/accessibility baseline | Keyboard usable, label form, focus visible, alt text wajib, contrast diuji; layout diuji viewport mobile & desktop |
| FR-010 | SEO/observability baseline | sitemap, robots, canonical, title/description unik, 404, analytics consent/config, Search Console property siap |
| FR-011 | Security/operations baseline | HTTPS, secrets environment, rate limit/spam control, backup teruji, error logging tanpa PII |

## Should (tahap 1.1)

| ID | Fitur | Acceptance criteria |
|---|---|---|
| FR-012 | Search/filter listing sederhana | Filter area/tipe/status menghasilkan URL shareable dan no-result state; tidak menampilkan expired |
| FR-013 | Artikel/panduan CMS | Admin dapat draft/publish artikel dengan author/date/slug/SEO image; artikel published masuk sitemap |
| FR-014 | Email notification lead | Lead valid mengirim notifikasi ke inbox resmi tanpa menjadikan email sebagai satu-satunya penyimpanan |
| FR-015 | Lead export/operational view | Admin dapat mengekspor lead terbatas atau melihat status follow-up dengan akses sesuai peran |
| FR-016 | Image optimization | Upload membatasi ukuran/format, menghasilkan responsive images, alt text wajib, dan tidak mengirim file asli berlebihan |

## Could
- `FR-017`: FAQ schema dan accordion dengan konten terverifikasi.
- `FR-018`: Integrasi CRM ringan setelah volume lead dan proses terbukti.
- `FR-019`: Galeri before/after dan perbandingan proyek jika izin tersedia.
- `FR-020`: Bahasa Inggris setelah ada kebutuhan dan owner terjemahan.

## Later / belum perlu
- Pembayaran, booking otomatis, kontrak/e-signature, portal pelanggan, native app, chatbot AI, kalkulator harga otomatis, rekomendasi listing berbasis AI.

## Non-functional targets
- Tidak menetapkan angka Core Web Vitals sebagai janji; audit di perangkat nyata sebelum launch.
- Tidak menyimpan password sendiri bila CMS managed dapat memakai provider teruji.
- Semua konten bisnis melewati status dan approval; data vacancy tidak boleh di-cache tanpa strategi invalidasi.
