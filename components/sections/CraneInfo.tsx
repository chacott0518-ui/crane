const cranes = [
  { name: '카고크레인', desc: '5·11·15·18톤',      color: '#E85D24' },
  { name: '유압크레인', desc: '13 ~ 500톤',         color: '#1A2A3A' },
  { name: '거미크레인', desc: '2·3·5·7톤',          color: '#E85D24' },
  { name: '고소작업차', desc: 'Wing 24·29·32·37',   color: '#1A2A3A' },
]

export default function CraneInfo() {
  return (
    <>
      <div id="crane" style={{ backgroundColor: '#ffffff', padding: '110px 0' }}>
        <div
          className="crane-inner"
          style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 80px' }}
        >
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p style={{
              color: '#E85D24',
              fontSize: '12px',
              letterSpacing: '5px',
              fontWeight: 700,
              marginBottom: '14px',
              textTransform: 'uppercase',
            }}>
              OUR EQUIPMENT
            </p>
            <h2 className="crane-h2" style={{
              color: '#1A2A3A',
              fontWeight: 800,
              marginBottom: '14px',
              lineHeight: 1.2,
            }}>
              보유 크레인
            </h2>
            <p style={{ color: '#6B6560', fontSize: '16px', lineHeight: 1.7 }}>
              중부권 최대 규모의 다양한 크레인을 보유하고 있습니다
            </p>
          </div>

          <div
            className="crane-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '24px',
            }}
          >
            {cranes.map((crane) => (
              <div
                key={crane.name}
                className="crane-card"
                style={{
                  backgroundColor: '#F5F0E8',
                  borderRadius: '20px',
                  padding: '48px 24px',
                  textAlign: 'center',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.05)',
                  transition: 'transform 0.25s, box-shadow 0.25s',
                }}
              >
                <h3 style={{
                  color: crane.color,
                  fontSize: '20px',
                  fontWeight: 800,
                  marginBottom: '18px',
                  whiteSpace: 'nowrap',
                }}>
                  {crane.name}
                </h3>
                <p className="crane-desc" style={{
                  color: '#1A2A3A',
                  fontWeight: 700,
                  lineHeight: 1.4,
                  whiteSpace: 'nowrap',
                }}>
                  {crane.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .crane-h2 { font-size: 44px; }
        .crane-desc { font-size: 24px; }
        .crane-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 36px rgba(0,0,0,0.1);
        }
        @media (max-width: 768px) {
          .crane-inner { padding: 0 16px !important; }
          .crane-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 12px !important;
          }
          .crane-h2 { font-size: 26px !important; }
          .crane-card { padding: 24px 10px !important; border-radius: 14px !important; }
          .crane-desc { font-size: 13px !important; }
          .crane-card h3 { font-size: 14px !important; margin-bottom: 10px !important; }
        }
      `}</style>
    </>
  )
}