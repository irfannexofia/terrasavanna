import type { Metadata } from 'next'

export const SITE = {
  name: 'Terra Savanna',
  domain: 'terrasavanna.com',
  description: 'Terra Savanna — studio interior design, build, dan custom furniture untuk ruang yang terasa pulang.',
}

export function pageMeta(title: string, path: string, description = SITE.description): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title: `${title} | ${SITE.name}`, description, url: `https://${SITE.domain}${path}`, type: 'website' },
  }
}
