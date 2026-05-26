/**
 * CardPrograma — Figma: "Card - Programa padrão" (id=389:84830)
 *                       "Card - Programa Ao Vivo"  (id=389:84845)
 *
 * States: Rest | Selected
 * Shows: cover image, time, program name (bold), host name
 * "Ao Vivo" variant adds red badge and equalizer graphic
 */
import { Tag } from './Tag'
import './CardPrograma.css'

export interface CardProgramaProps {
  time:       string
  name:       string
  host:       string
  coverUrl?:  string
  isLive?:    boolean
  selected?:  boolean
}

export function CardPrograma({
  time,
  name,
  host,
  coverUrl,
  isLive   = false,
  selected = false,
}: CardProgramaProps) {
  return (
    <article
      className={[
        'rfm-card',
        isLive    ? 'rfm-card--live'     : '',
        selected  ? 'rfm-card--selected' : '',
      ].filter(Boolean).join(' ')}
    >
      {/* Cover image with gradient fallback */}
      <div className="rfm-card__img-wrap" aria-hidden="true">
        {coverUrl
          ? <img src={coverUrl} alt="" className="rfm-card__img" />
          : <div className="rfm-card__img-placeholder" />
        }
      </div>

      {/* Content */}
      <div className="rfm-card__body">
        {isLive && (
          <div className="rfm-card__live-row">
            <Tag type="ao-vivo" />
          </div>
        )}
        <p className="rfm-card__time">{time}</p>
        <p className="rfm-card__name">{name}</p>
        <p className="rfm-card__host">{host}</p>
      </div>
    </article>
  )
}
