import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CTA } from '@/components/CTA'
import { Marquee } from '@/components/Marquee'
import { HomeGallery } from '@/components/HomeGallery'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section className="shell hero">
          <div>
            <p className="eyebrow">Interior Design · Build · Furniture</p>
            <h1 className="hero__title">Ruang yang<br /><em>terasa pulang.</em></h1>
            <p className="hero__intro">Kami merancang dan membangun ruang yang selaras dengan cara hidupmu — dengan perhatian pada detail, fungsi, dan rasa nyaman.</p>
            <div className="hero__actions">
              <Link className="btn btn--dark" href="#services">Jelajahi Layanan <ArrowUpRight size={16} /></Link>
              <Link className="btn btn--ghost" href="/#services">Lihat semua lini</Link>
            </div>
            <div className="hero__meta"><span>01 Interior Design</span><span>02 Design & Build</span><span>03 Custom Furniture</span></div>
          </div>
          <div className="hero__figure">
            <div className="hero__image">
              <Image src="/gallery/rumah-di-louis-bsd/1792608577757-2ddae0c5-734b-49c9-975d-0658895891e0-LOUISE-ND-1---CLASSIC-LUXURY_19.webp" alt="Hunian modern hangat oleh Terra Savanna" fill priority sizes="(min-width: 900px) 45vw, 100vw" />
              <span className="hero__badge">BSD & JABODETABEK</span>
            </div>
          </div>
        </section>

        <Marquee />

        <section className="shell section statement" id="about">
          <div className="statement__grid">
            <div>
              <p className="eyebrow">A little about us</p>
              <h2>Lebih dari sekadar <em>ruang.</em></h2>
            </div>
            <div className="statement__body">
              <p>Terra Savanna hadir untuk membuat setiap ruang terasa lebih dekat dengan penghuninya — melalui desain yang thoughtful, material yang jujur, dan pengerjaan yang rapi.</p>
              <p>Kami mengerjakan interior hunian, hospitality, komersial, hingga furniture custom dengan pendekatan warm minimalist, clean lines, dan fungsi yang tahan lama.</p>
            </div>
          </div>
        </section>

        <section className="shell section" id="services">
          <div className="section-head">
            <div>
              <p className="eyebrow">What we do</p>
            <h2>Ruang yang dirancang<br /><em>untuk hidupmu.</em></h2>
            </div>
            <span className="section-head__meta">01 — 10</span>
          </div>

          <div className="service-grid service-grid--interior">{['Apartment Interior','Residential Interior (Rumah & Villa)','Office Interior','Commercial Interior','Retail & Showroom Interior','Cafe & Restaurant Interior','Hotel & Hospitality Interior','Clinic & Beauty Salon Interior','Kitchen & Dining Interior','Custom Furniture & Cabinetry'].map((service, index) => <div className={index === 0 ? 'service-card service-card--dark' : 'service-card'} key={service}><span className="service-card__num">{String(index + 1).padStart(2, '0')}</span><div><p className="service-card__kicker">Interior Service</p><h3>{service}</h3><p>Konsep, detail, dan pengerjaan yang disesuaikan dengan kebutuhan ruangmu.</p></div><span className="service-card__arrow"><ArrowUpRight size={19} /></span></div>)}</div>
        </section>

        <section className="shell section coverage-section" id="coverage"><div className="section-head"><div><p className="eyebrow">Coverage Area</p><h2>Kami hadir di<br /><em>kota-kota pilihan.</em></h2></div><p className="coverage-intro">Kami melayani proyek interior dengan pendekatan yang personal, terukur, dan disesuaikan dengan karakter setiap kota serta ruang yang kamu miliki.</p></div><div className="coverage-list"><div className="coverage-card"><span className="coverage-card__num">01</span><strong>JABODETABEK</strong><p>Studio utama dan area layanan paling dekat dengan tim Terra Savanna.</p></div><div className="coverage-card"><span className="coverage-card__num">02</span><strong>MEDAN</strong><p>Kolaborasi interior untuk hunian, bisnis, dan ruang hospitality.</p></div><div className="coverage-card"><span className="coverage-card__num">03</span><strong>MAKASSAR</strong><p>Desain yang hangat dan fungsional untuk ruang yang terasa pulang.</p></div></div></section>

        <section className="shell section" id="projects">
          <div className="section-head">
            <div>
              <p className="eyebrow">Selected stories</p>
              <h2>Ruang yang<br /><em>kami tinggali.</em></h2>
            </div>
              <span className="section-head__meta">Portfolio interior</span>
          </div>

          <HomeGallery />
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  )
}

