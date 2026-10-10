import type { MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://spaceartcafe.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: '', priority: 1 },
    { path: '/menu', priority: 0.9 },
  ]
  return ['en', 'ar'].flatMap<MetadataRoute.Sitemap[number]>((locale) =>
    pages.map((page) => ({
      url: `${siteUrl}/${locale}${page.path}`,
      changeFrequency: 'weekly',
      priority: page.priority,
    })),
  )
}