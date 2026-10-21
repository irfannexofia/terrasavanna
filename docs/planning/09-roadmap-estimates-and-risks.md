# 09 — Roadmap, Estimasi, dan Risiko

## Estimasi hari kerja aktif

| Tahap | Rendah | Wajar | Tinggi | Menunggu/dependensi |
|---|---:|---:|---:|---|
| Discovery & brief | 3 | 5 | 7 | Jawaban pemilik & keputusan scope |
| Konten & data | 5 | 8 | 12 | Foto, data listing, legal/approval |
| Sitemap/wireframe & desain | 5 | 8 | 10 | Brand asset dan review |
| Build CMS + frontend + form | 10 | 15 | 20 | Schema final, provider, content seed |
| SEO/analytics/security setup | 2 | 4 | 6 | Account access, privacy decision |
| QA/UAT/fix | 4 | 5 | 7 | Tester dan device/content lengkap |
| Launch & handover | 2 | 3 | 5 | DNS, approval, backup/rollback |
| **Total aktif** | **31** | **48** | **67** | Kalender indikatif **6–10 minggu** karena paralel + menunggu |

Patokan pemilik tetap: brief 1 minggu, konten 1–2, desain 1–2, pembangunan 2–4, QA/launch 1; rentang aktual dipengaruhi keputusan dan materi. CLI dapat mempercepat scaffolding, lint/typecheck, content transformation, test, dan audit link, tetapi tidak menghilangkan kebutuhan copy, verifikasi foto/data, QA manusia, dan approval.

## Urutan & dependensi
1. Brief/decisions → sitemap/data model.
2. Brand + content inventory → wireframe/design.
3. Schema + approved content sample → CMS/build.
4. Build → integration/SEO/analytics.
5. Full content + UAT → launch.

## Risiko

| Risiko | Dampak | Kemungkinan | Mitigasi | Owner | Tanda mulai |
|---|---|---|---|---|---|
| Foto/proyek tidak berizin | Tinggi | Sedang | rights register, placeholder jelas, approval | Owner/Interior | aset tanpa consent/source |
| Listing stale/salah | Tinggi | Tinggi | owner data, lastUpdated, review cadence, unpublish | Lead Sewa/Property | inquiry menemukan status berbeda |
| Keputusan pemilik terlambat | Tinggi | Sedang | decision log, deadline, default safe option | PM/Owner | blocker lewat tanggal |
| Brand/nomor kontak belum final | Tinggi | Sedang | asset request awal, no fake placeholder at launch | Owner | designer/dev memakai data sementara |
| Privacy tidak ditinjau | Tinggi | Sedang | legal review sebelum production | Owner/legal | form siap tetapi notice belum approved |
| Spam/PII exposure | Tinggi | Sedang | validation, rate limit, minimization, access review | Tech lead | error/spam spike |
| Scope creep | Sedang | Tinggi | MoSCoW/change log | PM | fitur Later masuk sprint MVP |
| SEO claim berlebihan | Sedang | Sedang | fact-check, no ranking guarantee | SEO/editor | draft menjanjikan posisi/traffic |
| Backup/restore gagal | Tinggi | Rendah-Sedang | restore drill, provider review | Tech lead | backup tidak bisa dipulihkan |
