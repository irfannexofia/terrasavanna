import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Check, Plus } from 'lucide-react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CTA } from '@/components/CTA'
import { projects } from '@/data/content'

export function ServiceCard({ num, kicker, title, italic, desc, dark, href, label }: { num: string; kicker: string; title: string; italic: string; desc: string; dark?: boolean; href: string; label: string }) {
  return <Link className={dark ? 'service-card service-card--dark' : 'service-card'} href={href}>
    <span className="service-card__num">{num}</span>
    <div><p className="service-card__kicker">{kicker}</p><h3>{title}<br /><em>{italic}</em></h3><p>{desc}</p></div>
    <span className="service-card__arrow" aria-label={label}><ArrowUpRight size={19} /></span>
  </Link>
}

export function ProjectGrid() {
  return <div className="project-grid">
    {projects.map((project, index) => <div key={project.title} className={index === 0 ? 'project-card project-card--wide' : 'project-card'}>
      <div className="project-card__media"><Image src={project.image} alt={project.title} fill sizes="(min-width: 820px) 33vw, 100vw" /><span className="project-card__tag">0{index + 1}</span></div>
      <p className="project-card__type">{project.type}</p><h3>{project.title}</h3>
    </div>)}
  </div>
}

export function ListingGrid({ items, emptyText }: { items: { title: string; type: string; area: string; image: string }[]; emptyText: string }) {
  if (items.length === 0) return <div className="empty-state">{emptyText}</div>
  return <div className="listing-grid">
    {items.map((item) => <div key={item.title} className="listing-card">
      <div className="listing-card__media"><Image src={item.image} alt={item.title} fill sizes="(min-width: 1080px) 33vw, (min-width: 760px) 50vw, 100vw" /><span className="listing-card__status">Data forthcoming</span></div>
      <div className="listing-card__body"><h3>{item.title}</h3><div className="listing-card__meta"><span>{item.type}</span><span>·</span><span>{item.area}</span></div>
        <div className="listing-card__foot"><span className="listing-card__note">Detail & harga — hubungi kami</span><span className="listing-card__price">TBA</span></div>
      </div>
    </div>)}
  </div>
}

export function Process({ steps }: { steps: { num: string; title: string; body: string }[] }) {
  return <div className="process-list">
    {steps.map((step) => <div key={step.num} className="process-item"><span className="process-item__num">{step.num}</span><h3>{step.title}</h3><p>{step.body}</p></div>)}
  </div>
}

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return <div className="faq-list">
    {items.map((item) => <details key={item.q} className="faq-item"><summary>{item.q}<Plus size={19} /></summary><div className="faq-item__body">{item.a}</div></details>)}
  </div>
}

export function BulletList({ items }: { items: string[] }) {
  return <ul>{items.map((item) => <li key={item}><Check size={15} />{item}</li>)}</ul>
}

export { projects }
