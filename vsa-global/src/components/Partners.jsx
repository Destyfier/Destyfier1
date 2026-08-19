import { partners } from '../data/content'

export default function Partners() {
  const loop = [...partners, ...partners]

  return (
    <section style={{ background: 'var(--paper-2)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', padding: '30px 0' }}>
      <div className="marquee-mask">
        <div className="marquee-track">
          {loop.map((p, i) => (
            <span key={i} className="mono" style={{ fontSize: 13, letterSpacing: '0.05em', color: 'var(--slate)', whiteSpace: 'nowrap', padding: '0 36px' }}>
              {p}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .marquee-mask {
          overflow: hidden;
          -webkit-mask-image: linear-gradient(90deg, transparent, black 8%, black 92%, transparent);
          mask-image: linear-gradient(90deg, transparent, black 8%, black 92%, transparent);
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 32s linear infinite;
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
        }
      `}</style>
    </section>
  )
}
