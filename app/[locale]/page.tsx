import { notFound } from 'next/navigation'
import { SpaceArtCafe } from '@/components/space-art-cafe'
import { repository } from '@/lib/data'
import { isLocale } from '@/lib/locale'
export const revalidate = 3600
export default async function Page({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; if (!isLocale(locale)) notFound(); const [settings, categories, menu, photos, reviews] = await Promise.all([repository.getSiteSettings(), repository.getCategories(), repository.getMenuItems(), repository.getGalleryImages(), repository.getReviews()]); return <SpaceArtCafe locale={locale} settings={settings} categories={categories} menu={menu} photos={photos} reviews={reviews} /> }
