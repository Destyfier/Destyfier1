import { useState } from 'react'
import { motion } from 'framer-motion'
import { resources, brand } from '../data/content'

const GRADE_POINTS = { 'A+': 4.0, A: 4.0, 'A-': 3.7, 'B+': 3.3, B: 3.0, 'B-': 2.7, 'C+': 2.3, C: 2.0, 'C-': 1.7, D: 1.0, F: 0.0 }

function GpaCalculator() {
  const [rows, setRows] = useState([
    { grade: 'A', credits: 3 },
    { grade: 'B+', credits: 3 },
  ])

  const addRow = () => setRows((r) => [...r, { grade: 'A', credits: 3 }])
  const removeRow = (idx) => setRows((r) => r.filter((_, i) => i !== idx))
  const updateRow = (idx, key, value) => setRows((r) => r.map((row, i) => (i === idx ? { ...row, [key]: value } : row)))

  const totalCredits = rows.reduce((sum, r) => sum + Number(r.credits || 0), 0)
  const totalPoints = rows.reduce((sum, r) => sum + GRADE_POINTS[r.grade] * Number(r.credits || 0), 0)
  const gpa = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : '0.00'

  return (
    <div style={{ background: 'var(--white)', border: '1px solid var(--line)', borderRadius: 6, padding: '24px 22px' }}>
      <h3 style={{ fontSize: 16.5, fontWeight: 600, marginBottom: 4 }}>GPA Calculator</h3>
      <p style={{ fontSize: 12.5, color: 'var(--slate)', marginBottom: 16 }}>Add each course's grade and credit hours to get your 4.0-scale GPA.</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 14 }}>
        {rows.map((row, idx) => (
          <div key={idx} style={{ display: 'grid', gridTemplateColumns: '1fr 84px 28px', gap: 8, alignItems: 'center' }}>
            <select value={row.grade} onChange={(e) => updateRow(idx, 'grade', e.target.value)} className="field-input-sm">
              {Object.keys(GRADE_POINTS).map((g) => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>
            <input
              type="number"
              min="0"
              max="10"
              value={row.credits}
              onChange={(e) => updateRow(idx, 'credits', e.target.value)}
              className="field-input-sm"
              aria-label="Credit hours"
            />
            <button
              onClick={() => removeRow(idx)}
              aria-label="Remove course"
              disabled={rows.length === 1}
              style={{ background: 'transparent', border: 'none', color: 'var(--slate)', opacity: rows.length === 1 ? 0.3 : 1, fontSize: 15 }}
            >
              &times;
            </button>
          </div>
        ))}
      </div>

      <button onClick={addRow} className="mono" style={{ background: 'transparent', border: '1px dashed var(--line)', borderRadius: 4, padding: '8px 12px', fontSize: 12, color: 'var(--ink)', width: '100%' }}>
        + Add Course
      </button>

      <div style={{ marginTop: 18, paddingTop: 14, borderTop: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span className="mono" style={{ fontSize: 10.5, letterSpacing: '0.06em', color: 'var(--slate)', textTransform: 'uppercase' }}>Your GPA</span>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 700, color: 'var(--brass)' }}>{gpa}</span>
      </div>

      <style>{`
        .field-input-sm {
          width: 100%;
          font-family: var(--font-body);
          font-size: 13.5px;
          padding: 8px 10px;
          border: 1px solid var(--line);
          border-radius: 4px;
          background: var(--white);
          color: var(--charcoal);
        }
      `}</style>
    </div>
  )
}

export default function Resources() {
  const cardResources = resources.filter((r) => r.title !== 'GPA Calculator')

  return (
    <section id="resources" className="section-pad" style={{ background: 'var(--paper-2)' }}>
      <div className="container">
        <div style={{ marginBottom: 40, maxWidth: 620 }}>
          <span className="eyebrow">Free Resources</span>
          <h2 style={{ fontSize: 'clamp(26px, 3.2vw, 36px)', marginTop: 14, fontWeight: 600 }}>
            Tools and guides, no consultation required.
          </h2>
        </div>

        <div className="resources-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 320px', gap: 18, alignItems: 'start' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, gridColumn: 'span 2' }} className="resource-cards">
            {cardResources.map((r, idx) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                style={{ background: 'var(--white)', borderRadius: 6, padding: '22px 22px', border: '1px solid var(--line)', display: 'flex', flexDirection: 'column', gap: 12 }}
              >
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>{r.title}</h3>
                  <p style={{ fontSize: 12.5, color: 'var(--slate)' }}>{r.body}</p>
                </div>
                <a
                  href={`mailto:${brand.email}?subject=${encodeURIComponent('Request: ' + r.title)}`}
                  className="mono resource-link"
                  style={{ fontSize: 11, color: 'var(--brass)', letterSpacing: '0.04em', marginTop: 'auto' }}
                >
                  REQUEST BY EMAIL &rarr;
                </a>
              </motion.div>
            ))}
          </div>

          <GpaCalculator />
        </div>
      </div>

      <style>{`
        .resource-link:hover { color: var(--stamp); }
        @media (max-width: 1000px) {
          .resources-grid { grid-template-columns: 1fr 1fr !important; }
          .resource-cards { grid-column: span 2 !important; }
        }
        @media (max-width: 700px) {
          .resources-grid { grid-template-columns: 1fr !important; }
          .resource-cards { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
