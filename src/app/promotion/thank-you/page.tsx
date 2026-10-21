import Link from 'next/link'
import { Instagram } from 'lucide-react'

export default function ThankYouPage() {
  return <main className="thank-you"><div className="thank-you__card"><p className="eyebrow">Terra Savanna Interior</p><h1>Terima kasih telah menghubungi Terra Savanna.</h1><p>Tim kami akan segera menghubungi Anda kembali.</p><p>Untuk respon yang lebih cepat silahkan hubungi WhatsApp dengan klik tombol di bawah.</p><a className="btn btn--dark" href="https://wa.link/gbfamj" target="_blank" rel="noreferrer">Saya sudah mengisi formulir di website Terra Savanna. ↗</a><Link className="thank-you__instagram" href="https://www.instagram.com/terrasavanna" target="_blank"><Instagram size={18} /> Ikuti Instagram @terrasavanna</Link></div></main>
}
