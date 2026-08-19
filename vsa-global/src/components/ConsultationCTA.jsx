import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { destinations } from '../data/content'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function ConsultationCTA() {
  const [form, setForm] = useState({ name: '', phone: '', destination: '', intake: '', message: '', company: '' })
  const [status, setStatus] = useState('idle') // idle | sending | done | error

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  async function handleSubmit(e) {
    e.preventDefault()
    if (form.company) return // honeypot tripped, silently drop
    setStatus('sending')
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'consultation', ...form }),
      })
      setStatus('done')
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="book" className="section-pad" style={{ background: 'var(--ink)', color: 'var(--paper)' }}>
      <div className="container book-grid" style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 56, alignItems: 'center' }}>
        <div>
          <span className="eyebrow">Free, No-Obligation</span>
          <h2 style={{ fontSize: 'clamp(28px, 3.4vw, 42px)', marginTop: 14, fontWeight: 600 }}>
            Book a 30-minute session with a destination counsellor.
          </h2>
          <p style={{ marginTop: 18, color: 'rgba(246,241,228,0.72)', maxWidth: 440, fontSize: 15 }}>
            No sales script — just an honest read on your options, budget and timeline. We'll follow
            up within one business day to confirm your slot.
          </p>
        </div>

        <div style={{ background: 'var(--paper)', color: 'var(--ink)', borderRadius: 8, padding: '34px 34px 30px', position: 'relative', overflow: 'hidden' }}>
          <AnimatePresence mode="wait">
            {status === 'done' ? (
              <motion.div
                key="done"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ minHeight: 260, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 14 }}
              >
                <div className="stamp-ring" style={{ width: 64, height: 64, borderColor: 'var(--stamp)', transform: 'rotate(-6deg)' }}>
                  <span className="mono" style={{ fontSize: 9, color: 'var(--stamp)' }}>FILED</span>
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 600 }}>Request received.</h3>
                <p style={{ fontSize: 14, color: 'var(--slate)' }}>
                  A counsellor will call {form.phone || 'you'} within one business day to confirm your session.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                name="consultation"
                data-netlify="true"
                netlify-honeypot="company"
                onSubmit={handleSubmit}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}
              >
                <input type="hidden" name="form-name" value="consultation" />
                <div className="visually-hidden">
                  <label>
                    Company (leave blank)
                    <input name="company" value={form.company} onChange={update('company')} tabIndex="-1" autoComplete="off" />
                  </label>
                </div>

                <Field label="Full Name" span={2}>
                  <input required name="name" value={form.name} onChange={update('name')} placeholder="Sujal Shrestha" className="field-input" />
                </Field>

                <Field label="Phone">
                  <input required name="phone" type="tel" value={form.phone} onChange={update('phone')} placeholder="98XXXXXXXX" className="field-input" />
                </Field>

                <Field label="Preferred Intake">
                  <select required name="intake" value={form.intake} onChange={update('intake')} className="field-input">
                    <option value="" disabled>Select</option>
                    <option>Fall 2026</option>
                    <option>Spring 2027</option>
                    <option>Fall 2027</option>
                  </select>
                </Field>

                <Field label="Destination" span={2}>
                  <select required name="destination" value={form.destination} onChange={update('destination')} className="field-input">
                    <option value="" disabled>Where do you want to study?</option>
                    {destinations.map((d) => (
                      <option key={d.code} value={d.name}>{d.name}</option>
                    ))}
                  </select>
                </Field>

                <Field label="Anything we should know?" span={2}>
                  <textarea name="message" value={form.message} onChange={update('message')} rows={3} placeholder="Optional" className="field-input" />
                </Field>

                <div style={{ gridColumn: '1 / -1', marginTop: 4 }}>
                  <motion.button
                    type="submit"
                    disabled={status === 'sending'}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="btn btn-primary"
                    style={{ width: '100%', justifyContent: 'center', opacity: status === 'sending' ? 0.7 : 1 }}
                  >
                    {status === 'sending' ? 'Sending…' : 'Start My Free Consultation'}
                  </motion.button>
                  <p className="mono" style={{ fontSize: 10.5, color: 'var(--slate)', marginTop: 12, letterSpacing: '0.02em' }}>
                    By submitting, you agree to be contacted about your enquiry.
                  </p>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>

      <style>{`
        .field-input {
          width: 100%;
          font-family: var(--font-body);
          font-size: 14px;
          padding: 11px 13px;
          border: 1px solid var(--line);
          border-radius: 4px;
          background: var(--white);
          color: var(--ink);
        }
        @media (max-width: 860px) {
          .book-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

function Field({ label, span = 1, children }) {
  return (
    <label style={{ gridColumn: span === 2 ? '1 / -1' : 'auto', display: 'flex', flexDirection: 'column', gap: 6 }}>
      <span className="mono" style={{ fontSize: 10.5, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--slate)' }}>
        {label}
      </span>
      {children}
    </label>
  )
}
