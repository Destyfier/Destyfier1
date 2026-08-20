import { brand, destinations, testPrep } from '../data/content'

const socials = [
  { label: 'Facebook', href: 'https://facebook.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Instagram', href: 'https://instagram.com' },
]

export default function Footer() {
  const waLink = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent('Hi, I would like a free study abroad consultation.')}`

  return (
    <footer style={{ background: 'var(--ink)', color: 'rgba(255,255,255,0.75)', paddingTop: 64 }}>
      <div className="container footer-grid" style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr 1fr 1fr', gap: 32, paddingBottom: 48 }}>
        {/* Col 1: logo, mission, address */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <img src="/logo.png" alt={brand.name} style={{ height: 46, width: 46, objectFit: 'contain', borderRadius: '50%', background: 'var(--paper)' }} />
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 600, color: 'var(--paper)', lineHeight: 1.2 }}>{brand.name}</span>
          </div>
          <p style={{ fontSize: 13, maxWidth: 250, marginBottom: 16 }}>
            {brand.tagline}. Independent education and visa consultancy serving Chitwan and beyond.
          </p>
          <p className="mono" style={{ fontSize: 12, lineHeight: 1.7, color: 'rgba(255,255,255,0.6)' }}>
            {brand.address}
          </p>

          <div style={{ display: 'flex', gap: 14, marginTop: 20 }}>
            {socials.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label} className="mono footer-social" style={{ fontSize: 11, letterSpacing: '0.04em' }}>
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Col 2: Study Destinations */}
        <div>
          <div className="mono footer-heading">Study Destinations</div>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {destinations.map((d) => (
              <li key={d.code}>
                <a href="#destinations" className="footer-link" style={{ fontSize: 13.5 }}>{d.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Test Preparation */}
        <div>
          <div className="mono footer-heading">Test Preparation</div>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {testPrep.map((t) => (
              <li key={t.name}>
                <a href="#test-prep" className="footer-link" style={{ fontSize: 13.5 }}>{t.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: Contact & Support */}
        <div>
          <div className="mono footer-heading">Contact &amp; Support</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <a href={`tel:${brand.phoneLandline.replace(/\s/g, '')}`} className="footer-link mono" style={{ fontSize: 13 }}>
              {brand.phoneLandline}
            </a>
            <a href={`tel:${brand.phoneMobile.replace(/\s/g, '')}`} className="footer-link mono" style={{ fontSize: 13 }}>
              {brand.phoneMobile}
            </a>
            <a href={`mailto:${brand.email}`} className="footer-link mono" style={{ fontSize: 13 }}>
              {brand.email}
            </a>
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="mono"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'var(--brass)',
                color: 'var(--white)',
                padding: '9px 14px',
                borderRadius: 4,
                fontSize: 12,
                fontWeight: 700,
                marginTop: 6,
                width: 'fit-content',
              }}
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="perforated" style={{ borderColor: 'var(--line-on-ink)' }} />

      <div className="container" style={{ padding: '20px 24px', display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'space-between', alignItems: 'center' }}>
        <span className="mono" style={{ fontSize: 11.5 }}>
          &copy; {new Date().getFullYear()} {brand.name}. All rights reserved.
        </span>
        <span className="mono" style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.55)' }}>
          Bharatpur-10, Chitwan · Head Office
        </span>
      </div>

      <style>{`
        .footer-heading {
          font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase;
          color: var(--brass-light); margin-bottom: 16px;
        }
        .footer-link, .footer-social { color: rgba(255,255,255,0.7); transition: color 0.2s ease; }
        .footer-link:hover, .footer-social:hover { color: var(--brass-light); }
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
