import { motion } from 'framer-motion'
import { services } from '../data/content'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Services() {
  return (
    <section id="services" className="section-pad" style={{ background: 'var(--paper-2)' }}>
      <div className="container">
        <div style={{ marginBottom: 44, maxWidth: 620 }}>
          <span className="eyebrow">What We Handle</span>
          <h2 style={{ fontSize: 'clamp(28px, 3.4vw, 40px)', marginTop: 14, fontWeight: 600 }}>
            Everything between "I want to study abroad" and boarding the flight.
          </h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="services-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: 'var(--line)' }}
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={item}
              style={{ background: 'var(--paper-2)', padding: '32px 28px' }}
            >
              <div
                className="mono"
                style={{
                  fontSize: 11,
                  color: 'var(--brass)',
                  letterSpacing: '0.08em',
                  marginBottom: 14,
                }}
              >
                {String(services.indexOf(s) + 1).padStart(2, '0')}
              </div>
              <h3 style={{ fontSize: 19, fontWeight: 600, marginBottom: 10 }}>{s.title}</h3>
              <p style={{ fontSize: 14.5, color: 'var(--slate)' }}>{s.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
