import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { brand } from '../data/content'

const routes = [
  { to: 'LON', full: 'London' },
  { to: 'SYD', full: 'Sydney' },
  { to: 'TOR', full: 'Toronto' },
  { to: 'DUB', full: 'Dublin' },
  { to: 'MEL', full: 'Melbourne' },
]

export default function Hero() {
  const [i, setI] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % routes.length), 2200)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      id="top"
      style={{
        background: 'var(--ink)',
        color: 'var(--paper)',
        paddingTop: 64,
        paddingBottom: 0,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle at 15% 20%, rgba(184,135,79,0.10), transparent 40%), radial-gradient(circle at 85% 0%, rgba(184,135,79,0.08), transparent 45%)',
        }}
      />
      <div className="container hero-grid" style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: 0, alignItems: 'stretch' }}>
        {/* Left: statement */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          style={{ padding: '56px 56px 64px 0', display: 'flex', flexDirection: 'column', gap: 26 }}
        >
          <span className="eyebrow">Study Abroad &amp; Visa Consultants</span>
          <h1 style={{ fontSize: 'clamp(38px, 5vw, 60px)', fontWeight: 600 }}>
            Your file, prepared like it's <em style={{ fontStyle: 'italic', color: 'var(--brass-light)' }}>going to be read twice.</em>
          </h1>
          <p style={{ maxWidth: 480, fontSize: 17, color: 'rgba(246,241,228,0.78)' }}>
            {brand.name} plans, applies and files for students headed to 12 countries — counselling,
            admissions, scholarships and visa documentation, handled by people who track policy
            changes for a living.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 6 }}>
            <motion.a
              href="#book"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="btn btn-primary"
            >
              Book a Free Consultation
            </motion.a>
            <motion.a
              href="#journey"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="btn btn-ghost"
            >
              See How It Works
            </motion.a>
          </div>
        </motion.div>

        {/* Divider: perforation */}
        <div className="hero-perf" aria-hidden />

        {/* Right: ticket stub */}
        <motion.div
          initial={{ opacity: 0, y: 24, rotate: -1 }}
          animate={{ opacity: 1, y: 0, rotate: -1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          style={{
            alignSelf: 'center',
            margin: '40px 0 40px 40px',
            background: 'var(--paper)',
            color: 'var(--ink)',
            borderRadius: 6,
            padding: '26px 26px 22px',
            boxShadow: '0 30px 60px rgba(0,0,0,0.35)',
          }}
          className="ticket"
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="mono" style={{ fontSize: 11, letterSpacing: '0.12em', color: 'var(--slate)' }}>
              BOARDING PASS
            </span>
            <span className="mono" style={{ fontSize: 11, letterSpacing: '0.12em', color: 'var(--brass)' }}>
              VSA-001
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 18, margin: '18px 0 10px' }}>
            <div>
              <div className="mono" style={{ fontSize: 11, color: 'var(--slate)' }}>FROM</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 700 }}>KTM</div>
            </div>
            <svg width="34" height="14" viewBox="0 0 34 14" fill="none" style={{ marginTop: 14 }}>
              <path d="M0 7h30" stroke="var(--brass)" strokeWidth="1.4" strokeDasharray="3 3" />
              <path d="M24 2l8 5-8 5" stroke="var(--brass)" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div>
              <div className="mono" style={{ fontSize: 11, color: 'var(--slate)' }}>TO</div>
              <motion.div
                key={routes[i].to}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                style={{ fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 700, color: 'var(--stamp)' }}
              >
                {routes[i].to}
              </motion.div>
            </div>
          </div>

          <div className="perforated" style={{ margin: '14px 0' }} />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 18px', fontSize: 13 }}>
            <div>
              <div className="mono" style={{ fontSize: 10, color: 'var(--slate)' }}>PASSENGER</div>
              <div style={{ fontWeight: 600 }}>You, eventually</div>
            </div>
            <div>
              <div className="mono" style={{ fontSize: 10, color: 'var(--slate)' }}>DESTINATION</div>
              <div style={{ fontWeight: 600 }}>{routes[i].full}</div>
            </div>
            <div>
              <div className="mono" style={{ fontSize: 10, color: 'var(--slate)' }}>STATUS</div>
              <div style={{ fontWeight: 600, color: '#3a7d5c' }}>File in progress</div>
            </div>
            <div>
              <div className="mono" style={{ fontSize: 10, color: 'var(--slate)' }}>GATE</div>
              <div style={{ fontWeight: 600 }}>Free Consultation</div>
            </div>
          </div>

          <div aria-hidden style={{ display: 'flex', gap: 3, marginTop: 18, height: 30, alignItems: 'flex-end' }}>
            {Array.from({ length: 38 }).map((_, idx) => (
              <span
                key={idx}
                style={{
                  width: 2,
                  height: [6, 22, 14, 30, 10, 18][idx % 6],
                  background: 'var(--ink)',
                  opacity: 0.75,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        .hero-perf {
          width: 0;
          border-left: 1.5px dashed rgba(246,241,228,0.3);
          margin: 40px 0;
        }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-perf { display: none !important; }
          .ticket { margin: 0 0 48px 0 !important; }
        }
      `}</style>
    </section>
  )
}
