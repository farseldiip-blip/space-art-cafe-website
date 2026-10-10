'use client'

import Image from 'next/image'
import type { MenuItem, Locale } from '@/lib/data'
import { imageUrl, localized } from '@/lib/data/types'

type MenuCardProps = {
  item: MenuItem
  locale: Locale
  descriptionLines?: 2 | 3
  priority?: boolean
  className?: string
}

export function MenuCard({ item, locale, descriptionLines = 3, priority = false, className = '' }: MenuCardProps) {
  const isArabic = locale === 'ar'
  const name = localized(item, locale, 'name')
  const description = localized(item, locale, 'description')
  const src = imageUrl(item.image_path)

  return <article className={`sticker menu-card menu-card-content ${!item.is_available ? 'is-unavailable' : ''} ${className}`} dir={isArabic ? 'rtl' : 'ltr'}>
    <div className="menu-card-image">
      {src ? <Image src={src} alt={isArabic ? `صورة ${name}` : `Photo of ${name}`} width={800} height={600} sizes="(max-width: 760px) 90vw, (max-width: 1100px) 45vw, 30vw" priority={priority} placeholder="blur" blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='12'%3E%3Crect width='16' height='12' fill='%2387c9e8'/%3E%3C/svg%3E" /> : <div className="menu-card-placeholder" aria-label={isArabic ? `لا توجد صورة لـ ${name}` : `No image available for ${name}`} />}
    </div>
    <div className="menu-card-copy">
      <h2 className="menu-card-name">{name}</h2>
      <p className={`menu-card-description clamp-${descriptionLines}`}>{description}</p>
      <strong className="menu-card-price">{item.price} {isArabic ? 'ج.م' : 'EGP'}</strong>
      {!item.is_available ? <p className="menu-card-unavailable">{isArabic ? 'مش متاح النهاردة' : 'Not available today'}</p> : null}
    </div>
  </article>
}

export default MenuCard
