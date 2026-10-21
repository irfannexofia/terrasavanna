import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return <footer className="site-footer">
    <div className="shell site-footer__top">
      <div><Link href="/" className="brand"><Image src="/logo-ts.png" alt="Terra Savanna" width={220} height={104} /></Link><p className="footer-tagline">Designing spaces<br />for living fully.</p></div>
      <div className="footer-col"><h3>Explore</h3><ul><li><Link href="/#services">Our Services</Link></li><li><Link href="/#coverage">Coverage Area</Link></li><li><Link href="/#projects">Portfolio</Link></li></ul></div>
      <div className="footer-col"><h3>Company</h3><ul><li><Link href="/#about">Tentang</Link></li><li><Link href="/#contact">Kontak</Link></li><li><a href="https://wa.me/6285121318760" target="_blank" rel="noreferrer">WhatsApp</a></li><li><a href="https://www.instagram.com/terrasavanna" target="_blank" rel="noreferrer">Instagram</a></li></ul></div>
      <div className="footer-col"><h3>Area</h3><ul><li><span>JABODETABEK</span></li><li><span>MEDAN</span></li><li><span>MAKASSAR</span></li></ul></div>
    </div>
    <div className="shell site-footer__bottom"><span>© 2025 Terra Savanna</span><span>Ruang yang terasa pulang.</span><Link href="#">Privacy & terms</Link></div>
  </footer>
}
