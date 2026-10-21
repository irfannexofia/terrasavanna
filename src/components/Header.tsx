'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useState } from 'react'

const links = [
  { href: '/#services', label: 'Our Services' },
  { href: '/#coverage', label: 'Coverage Area' },
  { href: '/#about', label: 'Tentang' },
]

export function Header({ active }: { active?: string }) {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <Link href="/" className="brand" aria-label="Terra Savanna home" onClick={close}>
          <Image src="/logo-ts.png" alt="Terra Savanna" width={220} height={104} priority />
        </Link>
        <nav className="nav" aria-label="Navigasi utama">
          {links.map((link) => <Link key={link.href} href={link.href} aria-current={active === link.href ? 'page' : undefined}>{link.label}</Link>)}
        </nav>
        <div className="header-actions">
          <Link className="btn btn--dark header-cta" href="/#contact">Mulai percakapan <ArrowUpRight size={15} /></Link>
          <button className="menu-btn" onClick={() => setOpen((value) => !value)} aria-label={open ? 'Tutup menu' : 'Buka menu'} aria-expanded={open}>
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>
      {open && <nav className="mobile-nav" aria-label="Navigasi mobile"><div className="shell"><ul>{links.map((link) => <li key={link.href}><Link href={link.href} onClick={close}>{link.label}<ArrowUpRight size={17} /></Link></li>)}<li><Link href="/#contact" onClick={close}>Mulai percakapan <ArrowUpRight size={17} /></Link></li></ul></div></nav>}
    </header>
  )
}
