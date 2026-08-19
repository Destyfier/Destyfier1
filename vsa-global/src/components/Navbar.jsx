import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { brand } from '../data/content'

const links = [
  { href: '#destinations', label: 'Destinations' },
  { href: '#services', label: 'Services' },
  { href: '#journey', label: 'Journey' },
  { href: '#testimonials', label: 'Stories' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: scrolled ? 'var(--ink)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--line-on-ink)' : '1px solid transparent',
        transition: 'background 0.35s ease, border-color 0.35s ease',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 78,
        }}
      >
        <a
          href="#top"
          style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--paper)' }}
        >
          <span
            className="stamp-ring"
            style={{
              width: 38,
              height: 38,
              borderColor: 'var(--brass)',
              transform: 'rotate(-6deg)',
              flexShrink: 0,
            }}
          >
            <span className="mono" style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.02em' }}>
              VSA
            </span>
          </span>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 600, letterSpacing: '-0.01em' }}>
            {brand.short}
            <span style={{ color: 'var(--brass)' }}> Global</span>
          </span>
        </a>

        <nav
          className="mono"
          style={{
            display: 'flex',
            gap: 32,
            fontSize: 12.5,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            color: 'var(--paper)',
          }}
        >
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <a href="#book" className="btn btn-primary nav-cta">
            Book Free Session
          </a>
          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            style={{
              display: 'none',
              background: 'transparent',
              border: 'none',
              color: 'var(--paper)',
              padding: 6,
            }}
            className="menu-toggle"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            style={{ overflow: 'hidden', background: 'var(--ink)', borderTop: '1px solid var(--line-on-ink)' }}
            className="mobile-menu"
          >
            <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 4, padding: '18px 24px 26px' }}>
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="mono"
                  style={{ color: 'var(--paper)', padding: '12px 0', fontSize: 14, letterSpacing: '0.04em', textTransform: 'uppercase', borderBottom: '1px solid var(--line-on-ink)' }}
                >
                  {l.label}
                </a>
              ))}
              <a href="#book" onClick={() => setOpen(false)} className="btn btn-primary" style={{ marginTop: 16, justifyContent: 'center' }}>
                Book Free Session
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .nav-link { position: relative; padding-bottom: 4px; }
        .nav-link::after {
          content: '';
          position: absolute;
          left: 0; bottom: 0;
          width: 0%;
          height: 1px;
          background: var(--brass);
          transition: width 0.25s ease;
        }
        .nav-link:hover::after { width: 100%; }
        @media (max-width: 860px) {
          nav.mono { display: none !important; }
          .nav-cta { display: none !important; }
          .menu-toggle { display: inline-flex !important; }
        }
      `}</style>
    </header>
  )
}
