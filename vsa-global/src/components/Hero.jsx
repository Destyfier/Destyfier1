import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { destinations } from '../data/content'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function Hero() {
  const [query, setQuery] = useState('')

  function handleSearch(e) {
    e.preventDefault()
    document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="top"
      style={{
        background: 'linear-gradient(160deg, var(--ink) 0%, var(--ink-2) 100%)',
        color: 'var(--paper)',
        paddingTop: 64,
        paddingBottom: 72,
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
            'radial-gradient(circle at 12% 15%, rgba(242,107,15,0.14), transparent 40%), radial-gradient(circle at 88% 0%, rgba(242,107,15,0.10), transparent 45%)',
        }}
      />

      <div className="container" style={{ position: 'relative' }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{ maxWidth: 740, marginBottom: 44 }}
        >
          <span className="eyebrow" style={{ color: 'var(--brass-light)' }}>
            <span style={{ color: 'var(--brass-light)' }}>Visa &amp; Study Alliance Global — Chitwan</span>
          </span>
          <h1 style={{ fontSize: 'clamp(32px, 4.6vw, 52px)', fontWeight: 600, marginTop: 16, color: 'var(--paper)' }}>
            Your Global Future Begins Here
          </h1>
          <p style={{ fontSize: 17, marginTop: 14, color: 'rgba(255,255,255,0.8)', maxWidth: 560 }}>
            Trusted study abroad and visa guidance in Bharatpur, Chitwan — for top universities in
            Australia, USA, Canada, UK, Europe and beyond.
          </p>

          <form onSubmit={handleSearch} style={{ display: 'flex', gap: 10, marginTop: 28, maxWidth: 460 }}>
            <div style={{ position: 'relative', flex: 1 }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', opacity: 0.5 }}>
                <circle cx="7" cy="7" r="5.2" stroke="currentColor" strokeWidth="1.4" />
                <path d="M11 11l3.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search courses or universities…"
                style={{
                  width: '100%',
                  padding: '13px 16px 13px 38px',
                  borderRadius: 4,
                  border: '1px solid rgba(255,255,255,0.22)',
                  background: 'rgba(255,255,255,0.08)',
                  color: 'var(--paper)',
                  fontSize: 14,
                }}
              />
            </div>
            <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} type="submit" className="btn btn-primary">
              Search
            </motion.button>
          </form>
        </motion.div>

        <LeadForm />
      </div>
    </section>
  )
}

function LeadForm() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', destination: '', intakeYear: '', intakeQuarter: '', company: '' })
  const [status, setStatus] = useState('idle')

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  async function handleSubmit(e) {
    e.preventDefault()
    if (form.company) return
    setStatus('sending')
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'consultation', ...form }),
      })
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
      style={{
        maxWidth: 480,
        background: 'var(--paper)',
        color: 'var(--charcoal)',
        borderRadius: 8,
        boxShadow: '0 30px 60px rgba(0,0,0,0.28)',
        overflow: 'hidden',
      }}
    >
      <div style={{ background: 'var(--ink)', color: 'var(--paper)', padding: '14px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span className="mono" style={{ fontSize: 11, letterSpacing: '0.1em' }}>FREE CONSULTATION REQUEST</span>
        <span className="mono" style={{ fontSize: 11, color: 'var(--brass-light)' }}>VSA-001</span>
      </div>

      <div style={{ padding: '26px 26px 24px' }}>
        <AnimatePresence mode="wait">
          {status === 'done' ? (
            <motion.div
              key="done"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ minHeight: 220, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12 }}
            >
              <div className="stamp-ring" style={{ width: 60, height: 60, borderColor: 'var(--brass)', transform: 'rotate(-6deg)' }}>
                <span className="mono" style={{ fontSize: 9, color: 'var(--stamp)' }}>FILED</span>
              </div>
              <h3 style={{ fontSize: 19, fontWeight: 600 }}>Request received.</h3>
              <p style={{ fontSize: 13.5, color: 'var(--slate)' }}>
                A counsellor will call {form.phone || 'you'} within one business day.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              name="consultation"
              data-netlify="true"
              netlify-honeypot="company"
              onSubmit={handleSubmit}
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}
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
                <div style={{ display: 'flex' }}>
                  <span className="mono" style={{ padding: '11px 10px', border: '1px solid var(--line)', borderRight: 'none', borderRadius: '4px 0 0 4px', background: 'var(--paper-2)', fontSize: 13, color: 'var(--slate)' }}>
                    +977
                  </span>
                  <input required name="phone" type="tel" value={form.phone} onChange={update('phone')} placeholder="98XXXXXXXX" className="field-input" style={{ borderRadius: '0 4px 4px 0' }} />
                </div>
              </Field>

              <Field label="Email">
                <input required name="email" type="email" value={form.email} onChange={update('email')} placeholder="you@email.com" className="field-input" />
              </Field>

              <Field label="Preferred Destination" span={2}>
                <select required name="destination" value={form.destination} onChange={update('destination')} className="field-input">
                  <option value="" disabled>Where do you want to study?</option>
                  {destinations.map((d) => (
                    <option key={d.code} value={d.name}>{d.name}</option>
                  ))}
                </select>
              </Field>

              <Field label="Intake Year">
                <select required name="intakeYear" value={form.intakeYear} onChange={update('intakeYear')} className="field-input">
                  <option value="" disabled>Year</option>
                  <option>2026</option>
                  <option>2027</option>
                </select>
              </Field>

              <Field label="Intake Quarter">
                <select required name="intakeQuarter" value={form.intakeQuarter} onChange={update('intakeQuarter')} className="field-input">
                  <option value="" disabled>Quarter</option>
                  <option>Q1</option>
                  <option>Q2</option>
                  <option>Q3</option>
                  <option>Q4</option>
                </select>
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
                  {status === 'sending' ? 'Sending…' : 'Apply / Book Free Consultation Now'}
                </motion.button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
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
          color: var(--charcoal);
        }
      `}</style>
    </motion.div>
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
