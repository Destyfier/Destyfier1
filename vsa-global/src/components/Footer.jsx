import { brand, branches, footerLinks } from '../data/content'

const socials = [
  { label: 'Facebook', href: 'https://facebook.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'YouTube', href: 'https://youtube.com' },
]

export default function Footer() {
  return (
    <footer style={{ background: 'var(--ink)', color: 'rgba(246,241,228,0.75)', paddingTop: 72 }}>
      <div className="container footer-grid" style={{ display: 'grid', gridTemplateColumns: '1.3fr repeat(4, 1fr)', gap: 32, paddingBottom: 56 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
            <span className="stamp-ring" style={{ width: 34, height: 34, borderColor: 'var(--brass)', transform: 'rotate(-6deg)' }}>
              <span className="mono" style={{ fontSize: 10, fontWeight: 600, color: 'var(--paper)' }}>VSA</span>
            </span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 600, color: 'var(--paper)' }}>{brand.name}</span>
          </div>
          <p style={{ fontSize: 13.5, maxWidth: 260, marginBottom: 20 }}>
            Independent education and visa consultancy. Not affiliated with any single university
            or immigration authority.
          </p>
          <a href={`tel:${brand.phone.replace(/\s/g, '')}`} className="mono" style={{ fontSize: 14, color: 'var(--brass-light)' }}>
            {brand.phone}
          </a>

          <div style={{ display: 'flex', gap: 14, marginTop: 22 }}>
            {socials.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label} className="mono footer-social" style={{ fontSize: 11, letterSpacing: '0.04em' }}>
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {Object.entries(footerLinks).map(([heading, items]) => (
          <div key={heading}>
            <div className="mono" style={{ fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: 16 }}>
              {heading}
            </div>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {items.map((it) => (
                <li key={it}>
                  <a href="#" className="footer-link" style={{ fontSize: 13.5 }}>{it}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="perforated" style={{ borderColor: 'var(--line-on-ink)' }} />

      <div className="container" style={{ padding: '22px 24px', display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'space-between', alignItems: 'center' }}>
        <span className="mono" style={{ fontSize: 11.5 }}>
          &copy; {new Date().getFullYear()} {brand.name}. All rights reserved.
        </span>
        <div className="mono" style={{ display: 'flex', gap: 8, fontSize: 11.5, flexWrap: 'wrap' }}>
          {branches.map((b, i) => (
            <span key={b.city}>
              {b.city}{i < branches.length - 1 ? ' · ' : ''}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .footer-link, .footer-social { color: rgba(246,241,228,0.68); transition: color 0.2s ease; }
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
