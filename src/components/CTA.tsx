import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export function CTA({ title = <>Mulai dari<br /><em>percakapan.</em></>, body = 'Punya ruang yang ingin diubah? Ceritakan kebutuhan interior kamu kepada kami.' }: { title?: React.ReactNode; body?: string }) {
  return <section className="shell cta-band" id="contact"><div><p className="eyebrow">Let’s make room</p><h2>{title}</h2><p>{body}</p><p className="cta-contact">WhatsApp: +62 851 2131 8760<br />Sky House BSD+ Unit Kios KS-GD</p></div><div className="cta-band__actions"><Link className="btn btn--light" href="https://wa.me/6285121318760" target="_blank">Hubungi via WhatsApp <ArrowUpRight size={16} /></Link></div></section>
}
