/**
 * Player — Figma: "Player" component set (id=3:2194)
 * Variants: Dispositivo=Desktop|Mobile × Estado=Default|Loading|Fora do Ar|Skeletons × Versão=0|1
 *
 * Gradient bg: #FB1F1F → #FA8800
 * Play button: white circle, icon color #5B1100
 */
import { useState } from 'react'
import { Logo } from './Logo'
import { Tag } from './Tag'
import './Player.css'

export type PlayerDevice  = 'desktop' | 'mobile'
export type PlayerStatus  = 'default' | 'loading' | 'fora-do-ar' | 'skeleton'

export interface PlayerProps {
  device?:     PlayerDevice
  status?:     PlayerStatus
  trackTitle?: string
  artist?:     string
  coverUrl?:   string
  initialVolume?: number
}

export function Player({
  device   = 'desktop',
  status   = 'default',
  trackTitle = 'Lembrei de Nós',
  artist   = 'João Gomes',
  coverUrl,
  initialVolume = 75,
}: PlayerProps) {
  const [playing, setPlaying]   = useState(false)
  const [volume,  setVolume]    = useState(initialVolume)

  const isMobile  = device === 'mobile'
  const isLoading = status === 'loading'
  const isOff     = status === 'fora-do-ar'
  const isSkeleton = status === 'skeleton'

  return (
    <div className={`rfm-player rfm-player--${device} rfm-player--${status}`}
         role="region" aria-label="Player de rádio">

      {/* Left / Logo + info area */}
      <div className="rfm-player__info">
        {isSkeleton ? (
          <div className="rfm-player__skeleton-logo" aria-hidden="true" />
        ) : (
          <Logo color="branca" size="sm" />
        )}

        {!isMobile && (
          <Tag type={isOff ? 'fora-do-ar' : 'ao-vivo'} />
        )}

        {status === 'default' && !isSkeleton && (
          <div className="rfm-player__track">
            {coverUrl && (
              <img src={coverUrl} alt="" className="rfm-player__cover" />
            )}
            <div className="rfm-player__track-text">
              <span className="rfm-player__track-title">{trackTitle}</span>
              <span className="rfm-player__track-artist">{artist}</span>
            </div>
          </div>
        )}

        {isMobile && (
          <Tag type={isOff ? 'fora-do-ar' : 'ao-vivo'} />
        )}
      </div>

      {/* Right / Play button + volume */}
      <div className="rfm-player__controls">
        {isLoading ? (
          <div className="rfm-player__spinner" aria-label="Carregando…" role="status">
            <LoadingSpinner />
          </div>
        ) : (
          <button
            className="rfm-player__play-btn"
            aria-label={playing ? 'Pausar' : 'Tocar'}
            onClick={() => setPlaying(p => !p)}
            disabled={isOff}
          >
            {playing ? <PauseIcon /> : <PlayIcon />}
          </button>
        )}

        {!isMobile && status === 'default' && (
          <div className="rfm-player__volume">
            <VolumeIcon />
            <input
              type="range"
              className="rfm-player__vol-slider"
              min={0} max={100}
              value={volume}
              aria-label="Volume"
              onChange={e => setVolume(Number(e.target.value))}
            />
          </div>
        )}
      </div>
    </div>
  )
}

/* ── Icons ── */
function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}
function PauseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
    </svg>
  )
}
function VolumeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
    </svg>
  )
}
function LoadingSpinner() {
  return (
    <svg className="rfm-spinner" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" fill="none" strokeDasharray="30 60" />
    </svg>
  )
}
