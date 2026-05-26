/**
 * Header — Figma: "Header" component set (id=167:25401)
 * Variants: Background=Desktop | Background=Mobile
 *
 * Desktop: Logo | nav (Início, Programação, Anuncie) | CTA button
 * Mobile:  Logo | hamburger menu
 */
import { Logo } from './Logo'
import { Button } from './Button'
import './Header.css'

export type HeaderVariant = 'desktop' | 'mobile'

export interface NavLink { label: string; href: string }

export interface HeaderProps {
  variant?:  HeaderVariant
  navLinks?: NavLink[]
  activeHref?: string
  ctaLabel?: string
}

const defaultLinks: NavLink[] = [
  { label: 'Início',       href: '/' },
  { label: 'Programação',  href: '/programacao' },
  { label: 'Anuncie',      href: '/anuncie' },
]

export function Header({
  variant    = 'desktop',
  navLinks   = defaultLinks,
  activeHref = '/',
  ctaLabel   = 'Promoção Números da Sorte',
}: HeaderProps) {
  const isMobile = variant === 'mobile'
  return (
    <header className={`rfm-header rfm-header--${variant}`} role="banner">
      <Logo color="colorida" size="sm" />

      {isMobile ? (
        <button className="rfm-header__burger" aria-label="Abrir menu">
          <HamburgerIcon />
        </button>
      ) : (
        <>
          <nav className="rfm-header__nav" aria-label="Menu principal">
            <ul className="rfm-header__nav-list">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`rfm-header__nav-link${link.href === activeHref ? ' rfm-header__nav-link--active' : ''}`}
                    aria-current={link.href === activeHref ? 'page' : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <Button variant="filled" size="sm" showIcons={false}>
            {ctaLabel}
          </Button>
        </>
      )}
    </header>
  )
}

function HamburgerIcon() {
  return (
    <svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden="true">
      <rect y="0"  width="22" height="2" rx="1" fill="currentColor" />
      <rect y="7"  width="22" height="2" rx="1" fill="currentColor" />
      <rect y="14" width="22" height="2" rx="1" fill="currentColor" />
    </svg>
  )
}
