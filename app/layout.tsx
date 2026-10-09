import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Lalezar, Readex_Pro } from 'next/font/google'
import './globals.css'

const lalezar = Lalezar({ subsets: ['arabic'], weight: '400', variable: '--font-arabic-display' })
const readex = Readex_Pro({ subsets: ['arabic'], variable: '--font-arabic-body' })

export const metadata: Metadata = { title: 'Space Art Cafe', description: 'Coffee, art and easy evenings above the city in Mansoura.', openGraph: { title: 'Space Art Cafe', description: 'A place you belong to.', type: 'website' }, generator: 'v0.app' }

export const viewport: Viewport = { colorScheme: 'light', themeColor: '#FDD94E', width: 'device-width', initialScale: 1 }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" dir="ltr"><body className={`antialiased ${lalezar.variable} ${readex.variable}`}>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
