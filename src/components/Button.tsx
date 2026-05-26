/**
 * Button — Figma: "Button" component set (id=495:152945)
 * Variants: Type=Filled | Type=Outlined  ×  State=Default | Hover | Pressed
 */
import './Button.css'

export type ButtonType = 'filled' | 'outlined'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonType
  size?: ButtonSize
  /** Show the play-arrow decorators on both sides (default true for filled) */
  showIcons?: boolean
  children: React.ReactNode
}

function PlayArrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}

export function Button({
  variant = 'filled',
  size = 'md',
  showIcons,
  children,
  className = '',
  ...rest
}: ButtonProps) {
  const icons = showIcons ?? variant === 'filled'
  return (
    <button
      type="button"
      className={`rfm-btn rfm-btn--${variant} rfm-btn--${size} ${className}`.trim()}
      {...rest}
    >
      {icons && <PlayArrow />}
      <span>{children}</span>
      {icons && <PlayArrow />}
    </button>
  )
}
