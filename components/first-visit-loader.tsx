'use client'

import { useEffect, useRef, useState } from 'react'
import { copy } from '@/lib/locale'

type Locale = 'en' | 'ar'

const SESSION_KEY = 'space-art-loader-seen'

export function FirstVisitLoader() {
  const [visible, setVisible] = useState(true)
  const [locale, setLocale] = useState<Locale>('en')
  const [skipping, setSkipping] = useState(false)
  const [ready, setReady] = useState(false)
  const skipRef = useRef<HTMLButtonElement>(null)
  const startedAt = useRef(0)

  useEffect(() => {
    const currentLocale: Locale = window.location.pathname.startsWith('/ar') ? 'ar' : 'en'
    setLocale(currentLocale)
    if (document.documentElement.dataset.loaderSeen === 'true' || sessionStorage.getItem(SESSION_KEY) === 'true') {
      setVisible(false)
      return
    }

    startedAt.current = performance.now()
    document.documentElement.classList.add('loader-lock')
    skipRef.current?.focus()

    const minimum = new Promise<void>((resolve) => window.setTimeout(resolve, 1600))
    const resources = Promise.all([
      document.fonts?.ready ?? Promise.resolve(),
      ...Array.from(document.images).map((image) => image.complete ? Promise.resolve() : new Promise<void>((resolve) => {
        image.addEventListener('load', () => resolve(), { once: true })
        image.addEventListener('error', () => resolve(), { once: true })
      })),
    ])
    const cap = new Promise<void>((resolve) => window.setTimeout(resolve, 3000))
    Promise.race([Promise.all([minimum, resources]), cap]).then(() => finish())

    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape' || event.key === 'Enter') finish(true)
    }
    function onTap() {
      if (performance.now() - startedAt.current >= 800) finish(true)
    }
    function finish(skip = false) {
      if (!document.documentElement.classList.contains('loader-lock')) return
      setSkipping(skip)
      setReady(true)
      sessionStorage.setItem(SESSION_KEY, 'true')
      window.setTimeout(() => {
        document.documentElement.classList.remove('loader-lock')
        document.documentElement.dataset.loaderSeen = 'true'
        setVisible(false)
        document.getElementById('page-start')?.focus({ preventScroll: true })
      }, skip ? 300 : 500)
    }

    window.addEventListener('keydown', onKey)
    window.addEventListener('pointerdown', onTap)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('pointerdown', onTap)
      document.documentElement.classList.remove('loader-lock')
    }
  }, [])

  if (!visible) return null
  const t = copy[locale]
  return <div className={`first-visit-loader${ready ? ' is-ready' : ''}${skipping ? ' is-skipping' : ''}`} role="status" aria-live="polite" aria-label={locale === 'ar' ? 'جاري تحميل سبيس آرت كافيه' : 'Loading Space Art Cafe'}>
    <div className="loader-logo" aria-hidden="true">
      <svg viewBox="0 0 640 390" role="presentation">
        <defs>
          <clipPath id="loader-cloud-clip"><path d="M90 246C48 219 45 157 80 128c17-14 37-21 61-20 4-55 48-91 100-83 20 3 38 13 52 29 28-48 92-66 140-36 24 15 40 38 45 65 49-25 111-4 132 45 13 31 8 65-10 91 41 9 63 51 49 89-14 38-57 56-96 42-21-7-36-21-45-38-31 56-100 75-152 40-18-12-32-29-40-49-27 41-83 56-127 31-23-13-38-32-44-54-35 18-76 16-105-3Z" /></clipPath>
          <path id="loader-handle-curve" d="M125 240 C190 325 320 345 470 275" />
        </defs>
        <path className="loader-cloud-shadow" d="M90 246C48 219 45 157 80 128c17-14 37-21 61-20 4-55 48-91 100-83 20 3 38 13 52 29 28-48 92-66 140-36 24 15 40 38 45 65 49-25 111-4 132 45 13 31 8 65-10 91 41 9 63 51 49 89-14 38-57 56-96 42-21-7-36-21-45-38-31 56-100 75-152 40-18-12-32-29-40-49-27 41-83 56-127 31-23-13-38-32-44-54-35 18-76 16-105-3Z" />
        <path className="loader-cloud-outline" d="M90 246C48 219 45 157 80 128c17-14 37-21 61-20 4-55 48-91 100-83 20 3 38 13 52 29 28-48 92-66 140-36 24 15 40 38 45 65 49-25 111-4 132 45 13 31 8 65-10 91 41 9 63 51 49 89-14 38-57 56-96 42-21-7-36-21-45-38-31 56-100 75-152 40-18-12-32-29-40-49-27 41-83 56-127 31-23-13-38-32-44-54-35 18-76 16-105-3Z" />
        <g clipPath="url(#loader-cloud-clip)"><rect className="loader-fill" x="0" y="390" width="640" height="390" /></g>
        <text className="loader-handle"><textPath href="#loader-handle-curve">@spaceartcafe</textPath></text>
      </svg>
    </div>
    <button ref={skipRef} className="loader-skip" type="button" onClick={() => window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))}>{t.skip}</button>
  </div>
}

export function LoaderHeadScript() {
  return <script dangerouslySetInnerHTML={{ __html: `try{if(sessionStorage.getItem('${SESSION_KEY}')==='true')document.documentElement.dataset.loaderSeen='true'}catch(e){}` }} />
}

export function LoaderNoScript() {
  return <noscript><style>{'.first-visit-loader{display:none!important}'}</style></noscript>
}
