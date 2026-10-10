import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cairo, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'], variable: '--font-plus-jakarta', display: 'swap', preload: true })
const cairo = Cairo({ subsets: ['arabic', 'latin'], weight: ['400', '500', '700', '800', '900'], variable: '--font-cairo', display: 'swap', preload: true })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://spaceartcafe.com'

export const metadata: Metadata = { metadataBase: new URL(siteUrl), title: 'Space Art Cafe', description: 'Coffee, art and easy evenings above the city in Mansoura.', openGraph: { title: 'Space Art Cafe', description: 'A place you belong to.', type: 'website', images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Space Art Cafe cloud logo' }] }, twitter: { card: 'summary_large_image', title: 'Space Art Cafe', description: 'A place you belong to.', images: ['/og.png'] }, generator: 'v0.app' }

export const viewport: Viewport = { colorScheme: 'light', themeColor: '#FDD94E', width: 'device-width', initialScale: 1 }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" dir="ltr" className={`${plusJakarta.variable} ${cairo.variable}`}><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
