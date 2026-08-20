import { motion } from 'framer-motion'
import { brand } from '../data/content'

export default function ConsultationCTA() {
  const waLink = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent('Hi, I would like a free study abroad consultation.')}`

  const actions = [
    {
      label: 'Call the Office',
      value: brand.phoneLandline,
      href: `tel:${brand.phoneLandline.replace(/\s/g, '')}`,
      icon: <PhoneIcon />,
    },
    {
      label: 'WhatsApp / Mobile',
      value: brand.phoneMobile,
      href: waLink,
      icon: <WhatsAppIcon />,
      external: true,
    },
    {
      label: 'Visit the Office',
      value: brand.address,
      href: `https://www.google.com/maps/search/${encodeURIComponent(brand.address)}`,
      icon: <PinIcon />,
      external: true,
    },
  ]

  return (
    <section id="book" className="section-pad" style={{ background: 'var(--navy)', color: 'var(--white)' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 48px' }}>
        <span className="eyebrow" style={{ justifyContent: 'center' }}>Talk to Us Directly</span>
        <h2 style={{ fontSize: 'clamp(26px, 3.2vw, 38px)', marginTop: 14, fontWeight: 600 }}>
          Prefer to skip the form? Reach a counsellor right now.
        </h2>
        <p style={{ marginTop: 14, color: 'rgba(255,255,255,0.75)', fontSize: 15 }}>
          No sales script — just an honest read on your options, budget and timeline.
        </p>
      </div>

      <div className="container contact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, maxWidth: 900, margin: '0 auto' }}>
        {actions.map((a) => (
          <motion.a
            key={a.label}
            href={a.href}
            target={a.external ? '_blank' : undefined}
            rel={a.external ? 'noreferrer' : undefined}
            whileHover={{ y: -4 }}
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid var(--line-on-ink)',
              borderRadius: 8,
              padding: '26px 22px',
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
              alignItems: 'flex-start',
            }}
          >
            <span style={{ color: 'var(--orange)' }}>{a.icon}</span>
            <div>
              <div className="mono" style={{ fontSize: 10.5, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)' }}>
                {a.label}
              </div>
              <div style={{ fontSize: 14.5, fontWeight: 600, marginTop: 4 }}>{a.value}</div>
            </div>
          </motion.a>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: 40 }}>
        <motion.a href="#top" whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} className="btn btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' }) }}>
          Or Fill the Consultation Form
        </motion.a>
      </div>

      <style>{`
        @media (max-width: 720px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

function PhoneIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.5 21 3 13.5 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  )
}
function WhatsAppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.28-1.38a9.9 9.9 0 004.71 1.2h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2z"/>
    </svg>
  )
}
function PinIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M12 22s7-7.4 7-12.5A7 7 0 105 9.5C5 14.6 12 22 12 22z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="12" cy="9.5" r="2.4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}
