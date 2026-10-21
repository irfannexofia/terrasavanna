'use client'

import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import gallery from '@/data/gallery.json'

const titles: Record<string, string> = {
  'Sky House BSD tower Duxton': 'Apartment Sky House BSD Tower Duxton',
  'sky house BSD Tower Kensington': 'Apartment Sky House BSD Tower Kensington',
  'Sky House BSD Tower Kensington 2': 'Apartment Sky House BSD Tower Kensington 2',
  'Sky House BSD Tower Kensington CLassic HPL': 'Apartment Sky House BSD Tower Kensington Classic HPL',
  'rumah di louis BSD': 'Residential House di Louis BSD',
}

export function HomeGallery() {
  const [project, setProject] = useState(0)
  const [photo, setPhoto] = useState(0)
  const current = gallery[project]
  const moveProject = (direction: number) => { setProject((value) => (value + direction + gallery.length) % gallery.length); setPhoto(0) }
  const movePhoto = (direction: number) => setPhoto((value) => (value + direction + current.images.length) % current.images.length)
  return <div className="home-gallery"><div className="home-gallery__frame"><Image src={current.images[photo]} alt={`${titles[current.title] ?? current.title} — foto ${photo + 1}`} fill sizes="(min-width: 900px) 70vw, 100vw" priority={project === 0 && photo === 0} /><div className="home-gallery__controls"><button onClick={() => movePhoto(-1)} aria-label="Foto sebelumnya"><ChevronLeft size={20} /></button><span>{String(photo + 1).padStart(2, '0')} / {String(current.images.length).padStart(2, '0')}</span><button onClick={() => movePhoto(1)} aria-label="Foto berikutnya"><ChevronRight size={20} /></button></div></div><div className="home-gallery__caption"><div><p className="project-card__type">{String(project + 1).padStart(2, '0')} · Selected project</p><h3>{titles[current.title] ?? current.title}</h3></div><div className="home-gallery__project-nav"><button onClick={() => moveProject(-1)} aria-label="Proyek sebelumnya"><ChevronLeft size={18} /></button><button onClick={() => moveProject(1)} aria-label="Proyek berikutnya"><ChevronRight size={18} /></button></div></div><div className="home-gallery__dots">{gallery.map((item, index) => <button key={item.title} className={index === project ? 'active' : ''} onClick={() => { setProject(index); setPhoto(0) }} aria-label={`Pilih ${titles[item.title] ?? item.title}`} />)}</div></div>
}
