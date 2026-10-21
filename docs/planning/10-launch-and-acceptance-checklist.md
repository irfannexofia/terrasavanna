# 10 — Launch & Acceptance Checklist

## Konten & legal
- [ ] Nama Terra Savanna konsisten; ejaan alternatif dikonfirmasi.
- [ ] Copy tiga lini disetujui; Interior mendapat emphasis beranda.
- [ ] Foto, logo, font, proyek, listing memiliki source/izin; konsep diberi label.
- [ ] Harga/alamat/status/unit hanya tampil bila diverifikasi.
- [ ] Privacy notice, disclaimer, consent copy ditinjau owner/legal.
- [ ] Kontak, area layanan, jam, WhatsApp, email benar.

## UI dan aksesibilitas
- [ ] Mobile/desktop template diuji; tidak ada horizontal scroll.
- [ ] Navigasi keyboard, focus, label, error form, alt text, contrast diuji.
- [ ] CTA tiga lini terlihat; sticky mobile tidak menutupi konten.
- [ ] Loading/error/empty state tersedia.

## Fungsi
- [ ] Semua route publik 200/404 yang benar; internal/external links diuji.
- [ ] CRUD CMS, draft/publish/unpublish, role, preview diuji.
- [ ] Status listing/unit dan `lastUpdated` benar.
- [ ] Form valid/invalid, consent, anti-spam, notification, storage, dedupe diuji.
- [ ] WhatsApp opens nomor resmi dengan konteks; fallback kontak berfungsi.

## SEO & analytics
- [ ] Title/meta/canonical/H1/OG/alt/structured data faktual.
- [ ] `robots.txt`, sitemap, 404, redirects, staging noindex diuji.
- [ ] Search Console property dan sitemap submitted.
- [ ] Events CTA, WhatsApp, form, listing/project views terlihat tanpa PII.
- [ ] UTM test dan consent behavior diverifikasi.

## Security/ops
- [ ] HTTPS/domain/DNS; secrets tidak masuk repo; MFA admin.
- [ ] Dependency/build/typecheck/test; error monitoring tidak merekam isi lead.
- [ ] Backup berjalan dan restore drill sukses.
- [ ] Admin handover, runbook update listing, assignment lead, SLA.
- [ ] Rollback owner dan prosedur insiden diketahui.

## Definition “siap diluncurkan”
Owner telah menyetujui scope/copy/data/legal; semua Must FR memenuhi acceptance; P1/P2 bug nol; form & WhatsApp end-to-end sukses; backup/restore dan analytics tervalidasi; admin dapat mengubah satu konten; DNS/rollback siap; checklist ditandatangani.

## Setelah launch
24 jam: smoke test route/form/analytics. 7 hari: cek error, search index, lead reconciliation, listing freshness, response time. 30 hari: review funnel dan content plan; prioritaskan perbaikan berbasis data, bukan asumsi. Catat incident dan perubahan dalam changelog.
