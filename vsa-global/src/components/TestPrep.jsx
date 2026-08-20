import { motion } from 'framer-motion'
import { testPrep } from '../data/content'

export default function TestPrep() {
  return (
    <section id="test-prep" className="section-pad" style={{ background: 'var(--ink)', color: 'var(--paper)' }}>
      <div className="container">
        <div style={{ marginBottom: 40, maxWidth: 620 }}>
          <span className="eyebrow" style={{ color: 'var(--brass-light)' }}>Test Preparation</span>
          <h2 style={{ fontSize: 'clamp(26px, 3.2vw, 36px)', marginTop: 14, fontWeight: 600, color: 'var(--paper)' }}>
            IELTS &amp; PTE classes, running right here in Bharatpur.
          </h2>
        </div>

        <div className="testprep-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 14 }}>
          {testPrep.map((t, idx) => {
            const highlighted = t.name === 'IELTS' || t.name === 'PTE'
            return (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                style={{
                  background: highlighted ? 'var(--brass)' : 'rgba(255,255,255,0.06)',
                  border: highlighted ? '1px solid var(--brass)' : '1px solid var(--line-on-ink)',
                  borderRadius: 6,
                  padding: '20px 16px',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700, color: highlighted ? 'var(--charcoal)' : 'var(--paper)' }}>
                  {t.name}
                </div>
                <div className="mono" style={{ fontSize: 10.5, marginTop: 8, color: highlighted ? 'rgba(28,28,30,0.75)' : 'rgba(255,255,255,0.6)' }}>
                  {t.note}
                </div>
                {highlighted && (
                  <div className="mono" style={{ fontSize: 9, marginTop: 10, letterSpacing: '0.08em', color: 'var(--charcoal)', fontWeight: 700 }}>
                    CHITWAN CLASSES
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .testprep-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .testprep-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}
