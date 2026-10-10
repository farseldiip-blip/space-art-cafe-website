const CLOUD_PATH =
  'M90 246C48 219 45 157 80 128c17-14 37-21 61-20 4-55 48-91 100-83 20 3 38 13 52 29 28-48 92-66 140-36 24 15 40 38 45 65 49-25 111-4 132 45 13 31 8 65-10 91 41 9 63 51 49 89-14 38-57 56-96 42-21-7-36-21-45-38-31 56-100 75-152 40-18-12-32-29-40-49-27 41-83 56-127 31-23-13-38-32-44-54-35 18-76 16-105-3Z'

export function LogoMark({
  className = '',
  id = 'logo-mark',
  label = '@spaceartcafe',
  ariaLabel,
}: {
  className?: string
  id?: string
  label?: string
  ariaLabel?: string
}) {
  const curveId = `${id}-curve`
  return (
    <svg
      className={className}
      viewBox="0 0 640 390"
      preserveAspectRatio="xMidYMid meet"
      role={ariaLabel ? 'img' : undefined}
      aria-hidden={ariaLabel ? undefined : true}
      aria-label={ariaLabel}
    >
      <defs>
        <path id={curveId} d="M125 240 C190 325 320 345 470 275" />
      </defs>
      <path
        d={CLOUD_PATH}
        fill="#68BEEA"
        stroke="#FFFFFF"
        strokeWidth="16"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <text
        fontSize="30"
        fontWeight="600"
        fill="#14264A"
        fontFamily="var(--font-plus-jakarta), ui-sans-serif, system-ui, sans-serif"
      >
        <textPath href={`#${curveId}`}>{label}</textPath>
      </text>
    </svg>
  )
}
