import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { journey } from '../data/content'

export default function Journey() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.75', 'end 0.4'] })
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section id="journey" className="section-pad" style={{ background: 'var(--navy)', color: 'var(--white)' }}>
      <div className="container">
        <div style={{ marginBottom: 56, maxWidth: 620 }}>
          <span className="eyebrow">The Journey</span>
          <h2 style={{ fontSize: 'clamp(28px, 3.4vw, 40px)', marginTop: 14, fontWeight: 600 }}>
            Five gates between here and your first day of class.
          </h2>
        </div>

        <div ref={ref} style={{ position: 'relative' }}>
          <svg aria-hidden className="journey-line" width="100%" height="2" viewBox="0 0 1000 2" preserveAspectRatio="none" style={{ position: 'absolute', top: 20, left: 0, overflow: 'visible' }}>
            <line x1="0" y1="1" x2="1000" y2="1" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" strokeDasharray="6 6" />
            <motion.line x1="0" y1="1" x2="1000" y2="1" stroke="var(--orange)" strokeWidth="1.5" strokeDasharray="6 6" style={{ pathLength }} />
          </svg>

          <div className="journey-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 24, position: 'relative' }}>
            {journey.map((step, idx) => (
              <motion.div
                key={step.gate}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: 'easeOut' }}
                style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
              >
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--navy)', border: '1.5px solid var(--orange)', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="mono">
                  {step.gate}
                </div>
                <div>
                  <div className="mono" style={{ fontSize: 10.5, color: 'var(--orange-light)', letterSpacing: '0.1em', marginBottom: 6 }}>GATE {step.gate}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>{step.title}</h3>
                  <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.72)' }}>{step.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .journey-grid { grid-template-columns: 1fr 1fr !important; row-gap: 36px !important; }
          .journey-line { display: none; }
        }
        @media (max-width: 560px) { .journey-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
