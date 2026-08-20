import { motion } from 'framer-motion'
import { destinations } from '../data/content'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Destinations() {
  return (
    <section id="destinations" className="section-pad">
      <div className="container">
        <div style={{ marginBottom: 44, maxWidth: 640 }}>
          <span className="eyebrow">Destinations</span>
          <h2 style={{ fontSize: 'clamp(28px, 3.4vw, 40px)', marginTop: 14, fontWeight: 600 }}>
            Eight countries. One consultant who actually knows your file.
          </h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="dest-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}
        >
          {destinations.map((d) => (
            <motion.a
              key={d.code}
              href="#book"
              variants={item}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="dest-card"
              style={{
                background: 'var(--paper-2)',
                border: '1px solid var(--line)',
                borderRadius: 6,
                padding: '24px 26px',
                display: 'flex',
                gap: 20,
              }}
            >
              <span
                className="mono"
                style={{
                  fontSize: 26,
                  fontWeight: 700,
                  color: 'var(--white)',
                  background: 'var(--ink)',
                  borderRadius: 6,
                  width: 58,
                  height: 58,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {d.code}
              </span>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 10 }}>
                  <h3 style={{ fontSize: 18, fontWeight: 600 }}>{d.name}</h3>
                  <span className="mono dest-explore" style={{ fontSize: 11, color: 'var(--brass)', letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>
                    EXPLORE &rarr;
                  </span>
                </div>
                <p style={{ fontSize: 12.5, color: 'var(--slate)', marginTop: 3 }}>{d.note}</p>

                <div className="dest-facts" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 16px', marginTop: 14 }}>
                  <Fact label="Popular Courses" value={d.courses} />
                  <Fact label="Intake Months" value={d.intake} />
                  <Fact label="Post-Study Work" value={d.psw} />
                  <Fact label="Avg. Tuition" value={d.tuition} />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>

      <style>{`
        .dest-explore { opacity: 0; transform: translateX(-4px); transition: opacity 0.2s ease, transform 0.2s ease; }
        .dest-card:hover .dest-explore { opacity: 1; transform: translateX(0); }
        @media (max-width: 760px) {
          .dest-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

function Fact({ label, value }) {
  return (
    <div>
      <div className="mono" style={{ fontSize: 9.5, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--slate)' }}>
        {label}
      </div>
      <div style={{ fontSize: 12.5, fontWeight: 500, marginTop: 2 }}>{value}</div>
    </div>
  )
}
