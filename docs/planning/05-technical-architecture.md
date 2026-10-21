# 05 — Technical Architecture

## Kondisi workspace
Saat discovery, direktori hanya berisi `.gitignore` dan `.git`; tidak ditemukan framework, package manager, `AGENTS.md`, source code, atau CMS. Karena itu rekomendasi berikut adalah baseline keputusan baru, bukan audit aplikasi existing.

## Rekomendasi utama
**Next.js (App Router) + TypeScript + Tailwind/CSS component layer + headless CMS managed (mis. Sanity/Directus Cloud sesuai evaluasi) + managed Postgres bila lead/listing memerlukan database + hosting managed seperti Vercel/alternatif setara.** Pilihan vendor final menunggu budget, kemampuan tim, dan data residency.

Alasan: rendering dan metadata SEO kuat, typed code, image optimization, preview, route yang stabil, dan dapat dipelihara. CMS memisahkan pengeditan konten dari deploy. Form server-side harus memakai validation, anti-spam, dan provider email/CRM yang disetujui.

## Opsi
| Opsi | Plus | Minus/biaya perawatan | Cocok bila |
|---|---|---|---|
| Next.js + managed headless CMS (rekomendasi) | Fleksibel, cepat, SEO, scalable, content editor | Dua layanan, perlu setup preview/webhook dan biaya berlangganan | Site custom dengan listing/proyek yang tumbuh |
| WordPress managed + custom theme | Editor familiar, plugin banyak, biaya awal dapat rendah | Patch/plugin/security discipline; performa dan plugin conflict | Tim sudah mahir WP dan konten dominan |
| Astro + headless CMS | Output ringan dan cepat, biaya runtime rendah | Interaktivitas/form/CMS preview butuh integrasi ekstra | Situs mostly static dengan update terkontrol |

Jangan memilih vendor final hanya karena popularitas; buat spike kecil dan bandingkan total biaya bulanan/tahunan, export data, editor, preview, image CDN, logs, backup, dan lock-in.

## Struktur aplikasi yang disarankan
`app/` route pages; `components/` UI; `content-schema/` model/validation; `lib/cms/`; `lib/leads/`; `lib/analytics/`; `public/`; tests; `.env.example`. Reusable templates untuk project, unit, listing, article. Server-side secrets tidak pernah dikirim ke client.

## Environment & deployment
- Local: developer data dummy, `.env.local` ignored.
- Preview: branch/PR deploy + CMS preview dataset; no real sensitive leads.
- Production: domain canonical, HTTPS, environment secrets, CMS production dataset, analytics/Search Console.
- Git main protected, PR review, CI lint/typecheck/test/build, deploy rollback.
- Domain registrar/DNS owner dicatat; staging subdomain `staging.terrasavanna.com` hanya jika dibutuhkan dan noindex/password protected.

## CMS & backup
Roles Owner/Admin/Editor; draft/publish/unpublish; required fields; media rights; audit history. Backup database/CMS sesuai SLA provider, export content berkala, restore drill sebelum launch dan berkala. Uptime target tidak dijanjikan sebelum vendor SLA disetujui.

## Keamanan
HTTPS, CSP/security headers, dependency scanning, rate limiting, honeypot/managed CAPTCHA bila perlu, least privilege MFA, log access/change, PII minimization, secret rotation. Incident procedure: contain → preserve logs → assess → notify owner/affected party as required → remediate.

## Keputusan blocker
Nomor provider WhatsApp/email, CMS budget/provider, database kebutuhan, domain/DNS access, role admin, dan privacy/legal owner harus ditetapkan sebelum build production.
