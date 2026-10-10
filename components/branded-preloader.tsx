'use client'

import { useEffect, useRef, useState } from 'react'
import { LogoMark } from '@/components/logo-mark'
import { copy } from '@/lib/locale'

type Locale = 'en' | 'ar'
type Phase = 'enter' | 'reveal' | 'gone'

const SESSION_KEY = 'space-art-preloader-seen-v2'
const MIN_DISPLAY_MS = 2600
const READY_CAP_MS = 3000
const REVEAL_MS = 1600
const REVEAL_FAST_MS = 450
const SAFETY_MS = 8000

export function BrandedPreloader({ pathname }: { pathname: string }) {
  const [phase, setPhase] = useState<Phase>('enter')
  const [fast, setFast] = useState(false)
  const [locale, setLocale] = useState<Locale>('en')
  const [enabled, setEnabled] = useState(true)
  const overlayRef = useRef<HTMLDivElement>(null)
  const skipRef = useRef<HTMLButtonElement>(null)
  const timers = useRef<number[]>([])
  const phaseRef = useRef<Phase>('enter')
  const finishedRef = useRef(false)
  const startedAt = useRef(0)

  function finish() {
    if (finishedRef.current) return
    finishedRef.current = true
    try {
      sessionStorage.setItem(SESSION_KEY, 'true')
    } catch {
      /* storage unavailable — overlay still unmounts */
    }
    document.documentElement.classList.remove('loader-lock')
    document.documentElement.classList.remove('site-reveal-hero')
    phaseRef.current = 'gone'
    setPhase('gone')
  }

  function beginReveal(skip: boolean) {
    if (finishedRef.current || phaseRef.current !== 'enter') return
    if (skip) {
      setFast(true)
    } else {
      document.documentElement.classList.add('site-reveal-hero')
    }
    phaseRef.current = 'reveal'
    setPhase('reveal')
    const fallback = window.setTimeout(
      () => finish(),
      (skip ? REVEAL_FAST_MS : REVEAL_MS) + 500,
    )
    timers.current.push(fallback)
  }

  useEffect(() => {
    setLocale(pathname.startsWith('/ar') ? 'ar' : 'en')

    let seen = false
    try {
      seen = sessionStorage.getItem(SESSION_KEY) === 'true'
    } catch {
      seen = false
    }
    if (seen) {
      setEnabled(false)
      return
    }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      try {
        sessionStorage.setItem(SESSION_KEY, 'true')
      } catch {
        /* ignore */
      }
      setEnabled(false)
      return
    }

    startedAt.current = performance.now()
    document.documentElement.classList.add('loader-lock')
    skipRef.current?.focus({ preventScroll: true })

    const later = (fn: () => void, ms: number) => {
      const id = window.setTimeout(fn, ms)
      timers.current.push(id)
    }

    const fontsReady = (document.fonts?.ready ?? Promise.resolve()).then(
      () => undefined,
      () => undefined,
    )
    const minimum = new Promise<void>((resolve) => later(() => resolve(), MIN_DISPLAY_MS))
    const cap = new Promise<void>((resolve) => later(() => resolve(), READY_CAP_MS))
    void Promise.race([Promise.all([minimum, fontsReady]), cap]).then(() => beginReveal(false))
    later(() => finish(), SAFETY_MS)

    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape' || event.key === 'Enter') beginReveal(true)
    }
    function onTap() {
      if (performance.now() - startedAt.current >= 500) beginReveal(true)
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('pointerdown', onTap)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('pointerdown', onTap)
      timers.current.forEach((id) => window.clearTimeout(id))
      timers.current = []
      document.documentElement.classList.remove('loader-lock')
      document.documentElement.classList.remove('site-reveal-hero')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  function onTransitionEnd(event: React.TransitionEvent<HTMLDivElement>) {
    if (event.target === overlayRef.current && event.propertyName === 'transform') finish()
  }

  if (!enabled || phase === 'gone') return null

  const t = copy[locale]
  const revealing = phase === 'reveal'
  const revealMs = fast ? REVEAL_FAST_MS : REVEAL_MS

  return (
    <div
      ref={overlayRef}
      className={`site-preloader${revealing ? ' is-revealing' : ''}`}
      style={{ '--reveal-ms': `${revealMs}ms`, '--reveal-delay': fast ? '20ms' : '250ms' } as React.CSSProperties}
      role="status"
      aria-live="polite"
      aria-label={locale === 'ar' ? 'جاري تحميل سبيس آرت كافيه' : 'Loading Space Art Cafe'}
      onTransitionEnd={onTransitionEnd}
    >
      <LogoMark
        id="preloader-logo"
        className={`site-preloader-logo${revealing ? ' is-leaving' : ''}`}
        ariaLabel={locale === 'ar' ? 'شعار سبيس آرت كافيه' : 'Space Art Cafe logo'}
      />
      <button ref={skipRef} className="site-preloader-skip" type="button" onClick={() => beginReveal(true)}>
        {t.skip}
      </button>
    </div>
  )
}
