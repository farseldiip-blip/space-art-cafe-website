'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import type { Category, MenuItem, Locale } from '@/lib/data'
import { MenuCard } from '@/components/MenuCard'
import { copy } from '@/lib/locale'

export default function MenuBrowser({ locale, categories, items }: { locale: Locale; categories: Category[]; items: MenuItem[] }) {
  const t = copy[locale]
  const [active, setActive] = useState('all')
  const [query, setQuery] = useState('')
  const filtered = useMemo(() => items.filter((item) => {
    const matchesCategory = active === 'all' || item.category_slug === active
    const haystack = `${item.name_en} ${item.name_ar} ${item.description_en} ${item.description_ar}`.toLowerCase()
    return matchesCategory && haystack.includes(query.toLowerCase())
  }), [active, query, items])

  return <main className="menu-page section-pad" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
    <header className="menu-page-header"><Link className="text-link" href={`/${locale}`}>{locale === 'ar' ? 'الرئيسية' : 'Home'}</Link><Link className="language" href={`/${locale === 'ar' ? 'en' : 'ar'}`}>{locale === 'ar' ? 'EN' : 'ع'}</Link></header>
    <p className="eyebrow">{locale === 'ar' ? 'المنيو' : 'The menu'}</p>
    <h1>{locale === 'ar' ? 'اختار اللي على مزاجك.' : 'Pick your mood.'}</h1>
    <label className="sr-only" htmlFor="menu-search">{t.search}</label>
    <input id="menu-search" className="menu-search" placeholder={t.search} value={query} onChange={(event) => setQuery(event.target.value)} />
    <div className="chip-row menu-tabs" role="tablist" aria-label={locale === 'ar' ? 'فئات المنيو' : 'Menu categories'}>
      <button type="button" role="tab" aria-selected={active === 'all'} className={active === 'all' ? 'chip active' : 'chip'} onClick={() => setActive('all')}>{locale === 'ar' ? 'الكل' : 'All'}</button>
      {categories.map((cat) => <button type="button" role="tab" aria-selected={active === cat.slug} key={cat.slug} className={active === cat.slug ? 'chip active' : 'chip'} onClick={() => setActive(cat.slug)}>{cat[`name_${locale}`]}</button>)}
    </div>
    {filtered.length ? <div className="full-menu-grid">{filtered.map((item, index) => <MenuCard item={item} locale={locale} key={item.slug} priority={index === 0} descriptionLines={2} />)}</div> : <div className="empty-menu sticker">{locale === 'ar' ? 'ملقيناش حاجة بالاسم ده، جرّب كلمة تانية.' : 'Nothing found. Try another search.'}</div>}
  </main>
}
