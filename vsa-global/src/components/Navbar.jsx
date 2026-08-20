import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { brand, destinations, testPrep, services } from '../data/content'

const navGroups = [
  {
    label: 'Destinations',
    href: '#destinations',
    items: destinations.map((d) => d.name),
  },
  {
    label: 'Test Preparation',
    href: '#test-prep',
    items: testPrep.map((t) => `${t.name} — ${t.note}`),
  },
  {
    label: 'Services',
    href: '#services',
    items: services.map((s) => s.title),
  },
  {
    label: 'Resources',
    href: '#resources',
    items: ['SOP Guides', 'LOR Formats', 'Intake Calendars', 'GPA Calculator'],
  },
  {
    label: 'About Us',
    href: '#testimonials',
    items: ['Who We Are', 'Leadership', 'Success Stories', 'Contact Us'],
  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [openGroup, setOpenGroup] = useState(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const waLink = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent('Hi, I would like a free study abroad consultation.')}`

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50 }}>
      {/* Top info bar */}
      <div className="topbar" style={{ background: 'var(--ink)', color: 'var(--paper)' }}>
        <div className="container topbar-inner" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 'var(--topbar-h)' }}>
          <span className="mono topbar-address" style={{ fontSize: 11.5, letterSpacing: '0.02em', opacity: 0.85 }}>
            {brand.address}
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <a href={`tel:${brand.phoneLandline.replace(/\s/g, '')}`} className="mono topbar-link" style={{ fontSize: 11.5 }}>
              {brand.phoneLandline}
            </a>
            <span className="topbar-sep" style={{ opacity: 0.4 }}>|</span>
            <a href={`tel:${brand.phoneMobile.replace(/\s/g, '')}`} className="mono topbar-link" style={{ fontSize: 11.5 }}>
              {brand.phoneMobile}
            </a>
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="mono"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                fontSize: 11.5,
                color: 'var(--brass)',
                fontWeight: 600,
                letterSpacing: '0.03em',
              }}
            >
              <WhatsAppIcon size={13} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div
        style={{
          background: 'var(--paper)',
          borderBottom: '1px solid var(--line)',
          boxShadow: scrolled ? '0 4px 16px rgba(18,33,58,0.08)' : 'none',
          transition: 'box-shadow 0.25s ease',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 76 }}>
          <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
            <img src="/logo.png" alt={brand.name} style={{ height: 52, width: 52, objectFit: 'contain' }} />
          </a>

          <nav className="desktop-nav" style={{ display: 'flex', gap: 4 }}>
            {navGroups.map((g) => (
              <div
                key={g.label}
                onMouseEnter={() => setOpenGroup(g.label)}
                onMouseLeave={() => setOpenGroup(null)}
                style={{ position: 'relative' }}
              >
                <a
                  href={g.href}
                  className="mono nav-link"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 5,
                    padding: '10px 12px',
                    fontSize: 12,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    color: 'var(--ink)',
                  }}
                >
                  {g.label}
                  <svg width="9" height="9" viewBox="0 0 10 10" fill="none"><path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </a>
                <AnimatePresence>
                  {openGroup === g.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.16 }}
                      style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        minWidth: 230,
                        background: 'var(--paper)',
                        border: '1px solid var(--line)',
                        borderRadius: 6,
                        boxShadow: '0 16px 32px rgba(18,33,58,0.14)',
                        padding: '10px 0',
                        zIndex: 60,
                      }}
                    >
                      {g.items.map((it) => (
                        <a
                          key={it}
                          href={g.href}
                          style={{
                            display: 'block',
                            padding: '9px 18px',
                            fontSize: 13.5,
                            color: 'var(--charcoal)',
                          }}
                          className="dropdown-item"
                        >
                          {it}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <motion.a
              href="#book"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="btn btn-primary nav-cta"
            >
              Book Free Consultation
            </motion.a>
            <button
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              style={{ display: 'none', background: 'transparent', border: 'none', color: 'var(--ink)', padding: 6 }}
              className="menu-toggle"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                {open ? (
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            style={{ overflow: 'hidden', background: 'var(--paper)', borderBottom: '1px solid var(--line)' }}
          >
            <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 2, padding: '14px 24px 24px', maxHeight: '70vh', overflowY: 'auto' }}>
              {navGroups.map((g) => (
                <div key={g.label} style={{ borderBottom: '1px solid var(--line)', padding: '10px 0' }}>
                  <a
                    href={g.href}
                    onClick={() => setOpen(false)}
                    className="mono"
                    style={{ fontSize: 13, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--ink)', fontWeight: 700 }}
                  >
                    {g.label}
                  </a>
                  <div style={{ display: 'flex', flexDirection: 'column', marginTop: 8, gap: 6 }}>
                    {g.items.map((it) => (
                      <a key={it} href={g.href} onClick={() => setOpen(false)} style={{ fontSize: 13, color: 'var(--slate)' }}>
                        {it}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
              <a href="#book" onClick={() => setOpen(false)} className="btn btn-primary" style={{ marginTop: 16, justifyContent: 'center' }}>
                Book Free Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .nav-link { position: relative; }
        .dropdown-item:hover { background: var(--paper-2); color: var(--brass); }
        .topbar-link:hover { color: var(--brass); }
        @media (max-width: 1080px) {
          .desktop-nav { display: none !important; }
          .nav-cta { display: none !important; }
          .menu-toggle { display: inline-flex !important; }
        }
        @media (max-width: 640px) {
          .topbar-address { display: none !important; }
        }
      `}</style>
    </header>
  )
}

function WhatsAppIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.28-1.38a9.9 9.9 0 004.71 1.2h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.09c-.24.68-1.4 1.32-1.93 1.4-.5.08-1.11.11-1.79-.11a16.4 16.4 0 01-1.66-.62c-2.93-1.27-4.83-4.22-4.98-4.42-.15-.2-1.19-1.58-1.19-3.02 0-1.44.75-2.14 1.02-2.44.27-.29.58-.36.78-.36h.55c.18 0 .42-.03.65.5.24.56.81 1.94.88 2.08.07.14.11.31.02.5-.09.19-.14.31-.28.48-.14.16-.29.36-.42.49-.14.14-.28.29-.12.57.16.28.71 1.18 1.53 1.91 1.05.94 1.94 1.24 2.22 1.38.28.14.44.12.6-.07.16-.19.68-.79.86-1.06.18-.28.36-.23.6-.14.24.09 1.53.72 1.79.85.26.14.44.2.5.32.06.11.06.65-.18 1.33z"/>
    </svg>
  )
}
