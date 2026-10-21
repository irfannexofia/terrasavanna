# 08 — Security, Privacy, dan Operations

## Security baseline
MFA untuk owner/admin, least privilege, akun personal (bukan shared), password manager, HTTPS, environment secrets, dependency patching rutin, rate-limit form, anti-spam, validation server-side, secure headers, backup, audit log, error monitoring tanpa PII. Uji restore dan vulnerability scan sebelum launch.

## Privacy & governance
Privacy notice harus menjelaskan controller/pengelola, data form, tujuan (menjawab inquiry/follow-up/analytics), dasar/persetujuan sesuai hukum yang berlaku, retention, vendor, hak subjek, kontak privasi, dan cara mencabut consent. Checkbox consent terpisah dari marketing bila diperlukan. Jangan meminta dokumen identitas pada form publik MVP. Data sharing kepada agen/vendor harus didokumentasi. Pemilik/penasihat hukum wajib meninjau final privacy notice, cookies/consent, retention, dan terms/disclaimer properti.

## Hak akses
Owner: keputusan, billing, data policy. Admin: user/content/lead. Editor: content/media tanpa user/security. Staff: lead assigned terbatas. Review access bulanan; cabut akses saat orang keluar.

## Backup & incident
Backup otomatis sesuai CMS/database SLA + export berkala ke storage terpisah terenkripsi; restore drill. Incident: deteksi → isolate → catat waktu/scope → rotasi credential → pulihkan → analisis akar masalah → pemberitahuan sesuai kewajiban → postmortem.

## Operasional listing dan lead
- Setiap listing punya owner dan `lastUpdated`.
- Checklist verifikasi sebelum publish: status, harga bila ditampilkan, foto/izin, lokasi publik, CTA.
- Jadwal review aktif: minimal mingguan untuk availability; lebih sering sesuai volume.
- Lead: notification → assign → kontak pertama sesuai SLA yang disetujui → status → next action → outcome.
- Stale/unavailable otomatis atau manual di-unpublish; jangan menghapus history.
- Pertanyaan properti yang memerlukan legal/komersial dijawab oleh pihak berwenang, bukan copy website.

## Hal yang harus ditinjau
Pemilik dan penasihat hukum: legal entity, privacy, cookie, WhatsApp provider, consent foto, disclaimer listing, retensi lead, transfer data, dan incident notification.
