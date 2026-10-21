# 02 — User Journeys dan Friction

## J1 — Calon klien interior
1. Masuk dari pencarian, sosial, referral, atau beranda.
2. Melihat hero interior dan memilih `/interior`.
3. Memeriksa layanan, area, proses, portofolio, FAQ.
4. Klik `Konsultasi` atau `Minta survei`.
5. Mengisi kebutuhan ruang, lokasi, jenis properti, timeline, kontak, consent.
6. Melihat konfirmasi + ekspektasi tindak lanjut; tim menerima lead dengan sumber/UTM.
7. Tim qualification → konsultasi → survei (jika sesuai) → penawaran offline.

**Kehilangan:** hero generik, CTA tidak terlihat, portofolio tanpa konteks, form terlalu panjang, WhatsApp tanpa prefilled context, respons lambat. **Mitigasi:** CTA sticky mobile, form bertahap secukupnya, bukti berizin, pilihan kontak, autoresponse non-promissory, SLA internal.

## J2 — Pemilik unit ingin titip/sewakan
1. Masuk `/sewa` → memilih `Titip unit saya`.
2. Membaca cakupan layanan, area, informasi yang diperlukan, bukan janji hasil.
3. Mengisi tipe/alamat area, status unit, fasilitas, target waktu, kontak.
4. Tim memverifikasi kelayakan, meminta dokumen/foto melalui kanal aman, menjadwalkan diskusi.

**Kehilangan:** pemilik bingung bedanya titip dan sewa; mitigasi copy dua jalur dan form khusus. Jangan meminta KTP/dokumen sensitif pada form publik tanpa dasar dan prosedur.

## J3 — Calon penyewa
1. Dari search/beranda → `/sewa`.
2. Filter ringan (jika data cukup), membaca kartu unit: area, tipe, harga jika disetujui, status, tanggal update.
3. Detail unit → `Tanya unit` dengan slug otomatis.
4. Tim mengecek status terbaru sebelum menjawab dan mengatur viewing secara manual.

**Kehilangan:** unit sudah tidak tersedia, harga kosong, respons tidak jelas; mitigasi timestamp update, status jelas, owner data harian/mingguan, fallback inquiry umum.

## J4 — Calon pembeli BSD
1. Masuk dari konten lokal/iklan/referral → `/property`.
2. Membandingkan listing, detail, area, status publikasi.
3. Klik inquiry/jadwalkan kunjungan, kirim kebutuhan budget/timeline seperlunya.
4. Tim verifikasi listing, kualifikasi, konfirmasi kunjungan offline.

**Kehilangan:** detail legal/komersial tidak jelas, CTA ambigu, foto tidak representatif; mitigasi field “terakhir diperbarui”, disclaimer, data owner, dan approval sebelum publikasi.

## KPI journey
Event wajib: `cta_click`, `whatsapp_click`, `form_start`, `form_submit`, `view_listing`, `view_project`, `appointment_request`, `lead_qualified`, `survey_scheduled`, `viewing_scheduled`, `won/lost` (hasil transaksi dicatat di sistem internal, bukan otomatis dari situs). Sumber, consent, dan status follow-up harus dapat ditelusuri.
