import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { testimonials } from '../data/content'

export default function Testimonials() {
  const [[index, dir], setIndex] = useState([0, 0])

  const go = (delta) => {
    setIndex(([i]) => {
      const next = (i + delta + testimonials.length) % testimonials.length
      return [next, delta]
    })
  }

  const t = testimonials[index]

  return (
    <section id="testimonials" className="section-pad">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 44, flexWrap: 'wrap', gap: 20 }}>
          <div style={{ maxWidth: 560 }}>
            <span className="eyebrow">Student Stories</span>
            <h2 style={{ fontSize: 'clamp(28px, 3.4vw, 40px)', marginTop: 14, fontWeight: 600 }}>
              Filed, approved, departed.
            </h2>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button aria-label="Previous testimonial" onClick={() => go(-1)} className="carousel-btn">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <button aria-label="Next testimonial" onClick={() => go(1)} className="carousel-btn">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </div>
        </div>

        <div style={{ position: 'relative', minHeight: 240, overflow: 'hidden' }}>
          <AnimatePresence initial={false} custom={dir} mode="wait">
            <motion.div
              key={index}
              custom={dir}
              initial={{ opacity: 0, x: dir >= 0 ? 60 : -60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir >= 0 ? -60 : 60 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              style={{
                background: 'var(--paper-2)',
                border: '1px solid var(--line)',
                borderRadius: 6,
                padding: '40px 44px',
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                gap: 30,
                alignItems: 'center',
              }}
              className="postcard"
            >
              <div>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(19px, 2.2vw, 25px)', fontWeight: 500, fontStyle: 'italic', lineHeight: 1.4 }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div style={{ marginTop: 24, display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ fontWeight: 600, fontSize: 14.5 }}>{t.name}</span>
                  <span className="mono" style={{ fontSize: 11, color: 'var(--slate)', letterSpacing: '0.04em' }}>
                    {t.dest}
                  </span>
                </div>
              </div>
              <div
                className="stamp-ring postcard-stamp"
                style={{
                  width: 82,
                  height: 82,
                  borderColor: 'var(--stamp)',
                  transform: 'rotate(8deg)',
                  flexShrink: 0,
                }}
              >
                <span className="mono" style={{ fontSize: 9, color: 'var(--stamp)', letterSpacing: '0.06em' }}>VISA</span>
                <span className="mono" style={{ fontSize: 11, color: 'var(--stamp)', fontWeight: 700 }}>APPROVED</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div style={{ display: 'flex', gap: 8, marginTop: 22, justifyContent: 'center' }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => setIndex([i, i > index ? 1 : -1])}
              style={{
                width: i === index ? 22 : 8,
                height: 8,
                borderRadius: 4,
                border: 'none',
                background: i === index ? 'var(--brass)' : 'var(--line)',
                transition: 'all 0.25s ease',
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        .carousel-btn {
          width: 40px; height: 40px; border-radius: 50%;
          border: 1px solid var(--line); background: transparent; color: var(--ink);
          display: flex; align-items: center; justify-content: center;
          transition: background 0.2s ease, border-color 0.2s ease;
        }
        .carousel-btn:hover { background: var(--ink); color: var(--paper); border-color: var(--ink); }
        @media (max-width: 640px) {
          .postcard { grid-template-columns: 1fr !important; padding: 30px 26px !important; }
          .postcard-stamp { display: none; }
        }
      `}</style>
    </section>
  )
}
