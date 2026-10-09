import { notFound } from 'next/navigation'
import { repository } from '@/lib/data'
import { isLocale } from '@/lib/locale'
import MenuBrowser from './menu-browser'
export const revalidate = 3600
export default async function Page({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; if (!isLocale(locale)) notFound(); const [categories, items] = await Promise.all([repository.getCategories(), repository.getMenuItems()]); return <MenuBrowser locale={locale} categories={categories} items={items} /> }
