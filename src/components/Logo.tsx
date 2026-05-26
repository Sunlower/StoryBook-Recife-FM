/**
 * Logo Recife FM — Figma: "Logo Recife FM" component set (id=9:1475)
 * Variants: Cor=Colorida | Preta | Cinza | Branca  ×  Slogan=Sem slogan
 *
 * Station: Recife FM 97.5
 */
import './Logo.css'

export type LogoColor = 'colorida' | 'preta' | 'cinza' | 'branca'

export interface LogoProps {
  color?: LogoColor
  size?: 'sm' | 'md' | 'lg'
}

export function Logo({ color = 'colorida', size = 'md' }: LogoProps) {
  return (
    <div className={`rfm-logo rfm-logo--${color} rfm-logo--${size}`} role="img" aria-label="Recife FM 97.5">
      {/* Signal arcs */}
      <span className="rfm-logo__arcs" aria-hidden="true">
        <svg viewBox="0 0 24 16" fill="currentColor" className="rfm-logo__arc-svg">
          <path d="M4 14 Q12 2 20 14" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M7 14 Q12 5 17 14" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M10 14 Q12 8 14 14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
      </span>
      <div className="rfm-logo__text">
        <span className="rfm-logo__name">RECIFE</span>
        <span className="rfm-logo__freq">FM 97.5</span>
      </div>
    </div>
  )
}
