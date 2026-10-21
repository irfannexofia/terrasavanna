import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, MapPin } from 'lucide-react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CTA } from '@/components/CTA'
import { BulletList, Faq, Process, ProjectGrid } from '@/components/blocks'
import { pageMeta } from '@/lib/meta'

export const metadata = pageMeta('Interior Design & Build', '/interior', 'Terra Savanna House of Interior — desain dan pengerjaan interior hunian di BSD dan Jabodetabek.')

export default function InteriorPage() {
  return <>
    <Header active="/interior" />
    <main>
      <section className="shell page-hero">
        <div><p className="eyebrow">Terra Savanna House of Interior</p><h1 className="page-hero__title">Ruang yang<br /><em>dibuat untukmu.</em></h1><p className="page-hero__lead">Interior Design & Build untuk hunian yang fungsional, tenang, dan terasa personal — dari ide pertama sampai ruang siap dihuni.</p></div>
        <div className="page-hero__aside"><dl className="fact-list"><div><dt>Fokus</dt><dd>Interior hunian</dd></div><div><dt>Area</dt><dd>BSD · Jabodetabek</dd></div><div><dt>Pendekatan</dt><dd>Design & Build</dd></div></dl><Link className="btn btn--dark" href="/#contact">Jadwalkan konsultasi <ArrowUpRight size={16} /></Link></div>
      </section>

      <section className="shell section"><div className="split"><div className="split__media"><Image src="/gallery/rumah-di-louis-bsd/1792608577757-2ddae0c5-734b-49c9-975d-0658895891e0-LOUISE-ND-1---CLASSIC-LUXURY_17.webp" alt="Interior hunian dengan material warm minimalist" fill sizes="(min-width: 900px) 50vw, 100vw" /></div><div className="split__body"><p className="eyebrow">A considered approach</p><h2>Fungsional dulu.<br /><em>Indah kemudian.</em></h2><p>Kami percaya interior yang baik bukan hanya tentang bagaimana ruang terlihat, tetapi bagaimana ruang membantu penghuninya hidup lebih nyaman setiap hari.</p><BulletList items={['Optimasi ruang dan storage', 'Material dan detail yang thoughtful', 'Pendampingan dari desain hingga build']} /></div></div></section>

      <section className="shell section"><div className="section-head"><div><p className="eyebrow">How we work</p><h2>Proses yang<br /><em>jelas dan tenang.</em></h2></div><span className="section-head__meta">01 — 04</span></div><Process steps={[{ num: '01', title: 'Percakapan', body: 'Kami mulai dengan mendengarkan kebutuhan, kebiasaan, dan gambaran ruang yang kamu inginkan.' }, { num: '02', title: 'Eksplorasi', body: 'Tim menerjemahkan kebutuhan menjadi arah desain, mood, dan skenario pemanfaatan ruang.' }, { num: '03', title: 'Development', body: 'Detail desain, material, dan rencana pengerjaan dibahas sebelum masuk ke tahap build.' }, { num: '04', title: 'Build & handover', body: 'Pengerjaan dilakukan dengan komunikasi yang terukur sampai ruang siap digunakan.' }]} /></section>

      <section className="shell section" id="projects"><div className="section-head"><div><p className="eyebrow">Selected stories</p><h2>Beberapa ruang<br /><em>yang pernah kami ceritakan.</em></h2></div><span className="section-head__meta">Portofolio</span></div><div className="notice"><MapPin size={16} />Contoh proyek seperti Sky House BSD dan proyek kamar mandi Makassar masih menunggu verifikasi foto, detail, dan izin publikasi sebelum dapat ditampilkan sebagai proyek nyata.</div><div className="mt-40"><ProjectGrid /></div></section>

      <section className="shell section"><div className="section-head"><div><p className="eyebrow">Questions</p><h2>Yang sering<br /><em>ditanyakan.</em></h2></div></div><Faq items={[{ q: 'Apakah Terra Savanna mengerjakan desain sekaligus build?', a: 'Cakupan layanan perlu dikonfirmasi per proyek. Ceritakan kebutuhanmu agar tim dapat menjelaskan opsi yang tersedia.' }, { q: 'Area mana yang dilayani?', a: 'Arah area utama saat ini adalah BSD dan Jabodetabek. Kelayakan proyek dikonfirmasi melalui konsultasi.' }, { q: 'Bagaimana mendapatkan estimasi?', a: 'Estimasi dibahas setelah kebutuhan, kondisi ruang, dan scope pekerjaan cukup jelas. Website ini tidak menampilkan harga yang belum diverifikasi.' }]} /></section>

      <CTA title={<>Punya ruang untuk<br /><em>dibuat lebih berarti?</em></>} body="Ceritakan ruang dan cara hidupmu. Kami akan mulai dari sana." />
    </main>
    <Footer />
  </>
}

