import type { ReactNode } from 'react'

const icons: Record<string, ReactNode> = {
  'hot-coffee': (
    <svg viewBox="0 0 48 48" fill="none">
      <path
        d="M13 17h22l-2.2 16a8 8 0 0 1-8 8h-3.6a8 8 0 0 1-8-8Z"
        fill="#FDD94E"
        stroke="#14264A"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M35 21h3a5.5 5.5 0 0 1 0 11h-3"
        stroke="#14264A"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M19 11c-1.6-1.3-1.6-3 0-4.3"
        stroke="#14264A"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M26 11c-1.6-1.3-1.6-3 0-4.3"
        stroke="#14264A"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  ),
  'iced-coffee': (
    <svg viewBox="0 0 48 48" fill="none">
      <path
        d="M14 11h20l2.4 8H11.6Z"
        fill="#FDD94E"
        stroke="#14264A"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M14 19h20l-2.4 17a6 6 0 0 1-6 6h-3.2a6 6 0 0 1-6-6Z"
        fill="#BFE3F6"
        stroke="#14264A"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M22 4l10 9M32 13l.6 7"
        stroke="#FF7A66"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <rect x="18" y="21" width="5" height="5" rx="1.5" fill="#FFFFFF" stroke="#14264A" strokeWidth="2" transform="rotate(-8 20.5 23.5)" />
      <rect x="25" y="25" width="5" height="5" rx="1.5" fill="#FFFFFF" stroke="#14264A" strokeWidth="2" transform="rotate(10 27.5 27.5)" />
    </svg>
  ),
  'chocolate-mocha': (
    <svg viewBox="0 0 48 48" fill="none">
      <path
        d="M12 21l-2.4-5M36 21l2.4-5"
        stroke="#14264A"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M12 17h24l-2.4 16a8 8 0 0 1-8 8h-3.2a8 8 0 0 1-8-8Z"
        fill="#FFFFFF"
        stroke="#14264A"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M36 21h3.5a5.5 5.5 0 0 1 0 11H36"
        stroke="#14264A"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path d="M12 17l2.6 6h18.8l2.6-6Z" fill="#7B4B2A" stroke="#14264A" strokeWidth="3" strokeLinejoin="round" />
      <path
        d="M19 23c3.4 3 6.6 3 10 0"
        stroke="#7B4B2A"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  'cold-drinks': (
    <svg viewBox="0 0 48 48" fill="none">
      <path
        d="M15 17a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3l-2.4 18a6 6 0 0 1-6 6h-1.2a6 6 0 0 1-6-6Z"
        fill="#DFF2FB"
        stroke="#14264A"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M24 9l7 8M31 17l.6 6"
        stroke="#FF7A66"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <circle cx="23" cy="29" r="1.8" fill="#68BEEA" />
      <circle cx="28" cy="33" r="2.1" fill="#68BEEA" />
      <circle cx="21" cy="37" r="1.4" fill="#68BEEA" />
    </svg>
  ),
  breakfast: (
    <svg viewBox="0 0 48 48" fill="none">
      <ellipse cx="24" cy="31" rx="15" ry="5.5" fill="#FFFFFF" stroke="#14264A" strokeWidth="3" />
      <ellipse cx="24" cy="31.5" rx="8.5" ry="2.6" fill="none" stroke="#14264A" strokeWidth="2" opacity="0.45" />
      <circle cx="24" cy="20" r="7" fill="#FFFFFF" stroke="#14264A" strokeWidth="3" />
      <circle cx="24" cy="20" r="3.2" fill="#FDD94E" />
    </svg>
  ),
  desserts: (
    <svg viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="13.5" fill="#E9B98A" stroke="#14264A" strokeWidth="3" />
      <circle cx="19" cy="18" r="1.9" fill="#6B4226" />
      <circle cx="28" cy="21" r="1.9" fill="#6B4226" />
      <circle cx="21" cy="28" r="1.9" fill="#6B4226" />
      <circle cx="30" cy="29" r="1.9" fill="#6B4226" />
      <circle cx="18" cy="26" r="1.5" fill="#6B4226" />
    </svg>
  ),
}

export function CategoryIcon({
  category,
  className = '',
}: {
  category: string
  className?: string
}) {
  return (
    <span className={`${className} category-icon`} aria-hidden="true">
      {icons[category] ?? icons['hot-coffee']}
    </span>
  )
}