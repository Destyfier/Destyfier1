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
        <div style={{ marginBottom: 44, maxWidth: 620 }}>
          <span className="eyebrow">Destinations</span>
          <h2 style={{ fontSize: 'clamp(28px, 3.4vw, 40px)', marginTop: 14, fontWeight: 600 }}>
            Twelve countries. One consultant who actually knows your file.
          </h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="dest-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 16,
          }}
        >
          {destinations.map((d) => (
            <motion.a
              key={d.code}
              href="#book"
              variants={item}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="dest-card"
              style={{
                background: 'var(--ink)',
                color: 'var(--paper)',
                borderRadius: 6,
                padding: '22px 20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: 154,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <span className="mono" style={{ fontSize: 28, fontWeight: 600, color: 'var(--brass)' }}>
                {d.code}
              </span>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 19, fontWeight: 600 }}>{d.name}</div>
                <div style={{ fontSize: 12.5, color: 'rgba(246,241,228,0.65)', marginTop: 4 }}>{d.note}</div>
                <div className="mono dest-explore" style={{ fontSize: 11, color: 'var(--brass-light)', marginTop: 10, letterSpacing: '0.05em' }}>
                  EXPLORE &rarr;
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>

      <style>{`
        .dest-explore { opacity: 0; transform: translateY(4px); transition: opacity 0.2s ease, transform 0.2s ease; }
        .dest-card:hover .dest-explore { opacity: 1; transform: translateY(0); }
        @media (max-width: 980px) {
          .dest-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 680px) {
          .dest-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}
