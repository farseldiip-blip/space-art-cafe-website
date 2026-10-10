import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { repository } from '@/lib/data'
import { isLocale } from '@/lib/locale'

export const revalidate = 3600

export default async function GalleryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const photos = await repository.getGalleryImages()
  const ar = locale === 'ar'
  return <main className="gallery-page section-pad" dir={ar ? 'rtl' : 'ltr'}>
    <header className="menu-page-header"><Link className="text-link" href={`/${locale}`}>{ar ? 'الرئيسية' : 'Home'}</Link><Link className="language" href={`/${ar ? 'en' : 'ar'}`}>{ar ? 'EN' : 'ع'}</Link></header>
    <p className="eyebrow">{ar ? 'بصة من جوه' : 'A look inside'}</p>
    <h1>{ar ? 'شوف المكان بطريقتك.' : 'Bring your own point of view.'}</h1>
    <div className="gallery-page-grid">{photos.map((photo) => <figure className={`gallery-photo ${photo.className}`} key={photo.src}><Image src={photo.src} alt={photo[`alt_${locale}`]} fill sizes="(max-width: 760px) 90vw, 33vw" /></figure>)}</div>
  </main>
}
