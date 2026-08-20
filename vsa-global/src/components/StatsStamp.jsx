import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { stats } from '../data/content'
import { useCountUp } from './useCountUp'

function Stamp({ s, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const value = useCountUp(s.value, inView)

  const rotations = [-6, 4, -3, 5]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}
    >
      <div
        className="stamp-ring"
        style={{
          width: 128,
          height: 128,
          transform: `rotate(${rotations[delay * 10 % 4] || -6}deg)`,
        }}
      >
        <span className="mono" style={{ fontSize: 10, letterSpacing: '0.12em', color: 'var(--orange)', marginBottom: 2 }}>
          {s.code}
        </span>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 700, color: 'var(--navy)' }}>
          {value.toLocaleString()}
          {s.suffix}
        </span>
      </div>
      <span className="mono" style={{ fontSize: 12, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--grey-mid)', textAlign: 'center' }}>
        {s.label}
      </span>
    </motion.div>
  )
}

export default function StatsStamp() {
  return (
    <section className="section-pad" style={{ paddingTop: 64, paddingBottom: 64, borderBottom: '1px solid var(--line)' }}>
      <div
        className="container stats-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 32,
        }}
      >
        {stats.map((s, idx) => (
          <Stamp key={s.label} s={s} delay={idx * 0.12} />
        ))}
      </div>
      <style>{`
        @media (max-width: 760px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; row-gap: 40px !important; }
        }
      `}</style>
    </section>
  )
}
