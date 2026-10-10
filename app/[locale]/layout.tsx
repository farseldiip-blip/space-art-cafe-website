import type { CSSProperties, ReactNode } from 'react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import type { Locale } from '@/lib/data'
import { isLocale } from '@/lib/locale'
import { PreloaderEntry } from '@/components/preloader-entry'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://spaceartcafe.com'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const ar = locale === 'ar'
  const title = ar ? 'سبيس آرت كافيه' : 'Space Art Cafe'
  const description = ar
    ? 'قهوة وفن وسهرات هادية فوق المدينة. مستنيينك في الدور الرابع بأول المنصورة.'
    : 'Coffee, art and easy evenings above the city in Mansoura.'
  const url = `${siteUrl}/${locale}`
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: { en: `${siteUrl}/en`, ar: `${siteUrl}/ar`, 'x-default': `${siteUrl}/en` },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: title,
      locale: ar ? 'ar_EG' : 'en_US',
      type: 'website',
      images: [{ url: '/og.png', width: 1200, height: 630, alt: ar ? 'شعار سبيس آرت كافيه' : 'Space Art Cafe cloud logo' }],
    },
    twitter: { card: 'summary_large_image', title, description, images: ['/og.png'] },
  }
}

export default async function LocaleLayout({ children, params }: { children: ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const typedLocale: Locale = locale
  const ar = typedLocale === 'ar'
  const fontStyle = {
    '--font-display': ar ? 'var(--font-cairo), "Segoe UI", Tahoma, system-ui, sans-serif' : 'var(--font-plus-jakarta), system-ui, -apple-system, "Segoe UI", sans-serif',
    '--font-body': ar ? 'var(--font-cairo), "Segoe UI", Tahoma, system-ui, sans-serif' : 'var(--font-plus-jakarta), system-ui, -apple-system, "Segoe UI", sans-serif',
    fontFamily: 'var(--font-body)',
  } as CSSProperties
  return <div lang={typedLocale} dir={ar ? 'rtl' : 'ltr'} style={fontStyle}><PreloaderEntry />{children}</div>
}
