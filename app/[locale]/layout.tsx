import type { ReactNode } from 'react'
import { notFound } from 'next/navigation'
import type { Locale } from '@/lib/data'
import { isLocale } from '@/lib/locale'
import { PreloaderEntry } from '@/components/preloader-entry'

export default async function LocaleLayout({ children, params }: { children: ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const typedLocale: Locale = locale
  return <div lang={typedLocale} dir={typedLocale === 'ar' ? 'rtl' : 'ltr'}><PreloaderEntry />{children}</div>
}
