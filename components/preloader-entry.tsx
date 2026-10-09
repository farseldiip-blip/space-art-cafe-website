'use client'

import { usePathname } from 'next/navigation'
import { BrandedPreloader } from '@/components/branded-preloader'

export function PreloaderEntry() {
  const pathname = usePathname()
  const isHomepage = pathname === '/en' || pathname === '/ar'

  if (!isHomepage) return null

  return <BrandedPreloader pathname={pathname} />
}