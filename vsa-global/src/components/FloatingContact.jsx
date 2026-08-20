import { motion } from 'framer-motion'
import { brand } from '../data/content'

export default function FloatingContact() {
  const waLink = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent('Hi, I would like a free study abroad consultation.')}`

  return (
    <>
      {/* Persistent WhatsApp button, bottom-right */}
      <motion.a
        href={waLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, type: 'spring', stiffness: 260, damping: 18 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="fab-whatsapp"
        style={{
          position: 'fixed',
          right: 22,
          bottom: 22,
          zIndex: 90,
          width: 56,
          height: 56,
          borderRadius: '50%',
          background: 'var(--brass)',
          color: 'var(--white)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 10px 26px rgba(242,107,15,0.45)',
        }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.28-1.38a9.9 9.9 0 004.71 1.2h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.09c-.24.68-1.4 1.32-1.93 1.4-.5.08-1.11.11-1.79-.11a16.4 16.4 0 01-1.66-.62c-2.93-1.27-4.83-4.22-4.98-4.42-.15-.2-1.19-1.58-1.19-3.02 0-1.44.75-2.14 1.02-2.44.27-.29.58-.36.78-.36h.55c.18 0 .42-.03.65.5.24.56.81 1.94.88 2.08.07.14.11.31.02.5-.09.19-.14.31-.28.48-.14.16-.29.36-.42.49-.14.14-.28.29-.12.57.16.28.71 1.18 1.53 1.91 1.05.94 1.94 1.24 2.22 1.38.28.14.44.12.6-.07.16-.19.68-.79.86-1.06.18-.28.36-.23.6-.14.24.09 1.53.72 1.79.85.26.14.44.2.5.32.06.11.06.65-.18 1.33z" />
        </svg>
      </motion.a>

      {/* Sticky call bar, mobile only */}
      <a
        href={`tel:${brand.phoneMobile.replace(/\s/g, '')}`}
        className="sticky-call-bar mono"
        style={{
          position: 'fixed',
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 89,
          background: 'var(--ink)',
          color: 'var(--white)',
          display: 'none',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 10,
          padding: '13px 0',
          fontSize: 13,
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
          fontWeight: 700,
        }}
      >
        <PhoneIcon />
        Call Now — {brand.phoneMobile}
      </a>

      <style>{`
        @media (max-width: 640px) {
          .sticky-call-bar { display: flex !important; }
          .fab-whatsapp { bottom: 68px !important; right: 16px !important; width: 50px !important; height: 50px !important; }
        }
      `}</style>
    </>
  )
}

function PhoneIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.5 21 3 13.5 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  )
}
