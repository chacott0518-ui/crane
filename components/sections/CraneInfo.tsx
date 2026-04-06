export default function CraneInfo() {
  const cranes = [
    { name: '카고크레인', desc: '5 · 11 · 15 · 18톤',  color: '#E85D24' },
    { name: '유압크레인', desc: '13 ~ 500톤',           color: '#1A2A3A' },
    { name: '거미크레인', desc: '2 · 3 · 5 · 7톤',     color: '#E85D24' },
    { name: '고소작업차', desc: 'Wing 24·29·32·37',    color: '#1A2A3A' },
  ]

  return (
    <>
      <div
        id="crane"
        style={{
          backgroundColor: '#ffffff',
          padding: '96px 0',
        }}
      >
        <div
          className="crane-inner"
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 80px',
          }}
        >
          {/* 섹션 타이틀 */}
          <div
            style={{
              textAlign: 'center',
              marginBottom: '56px',
            }}
          >
            <p
              style={{
                color: '#E85D24',
                fontSize: '11px',
                letterSpacing: '4px',
                fontWeight: 600,
                marginBottom: '12px',
                textTransform: 'uppercase',
              }}
            >
              OUR EQUIPMENT
            </p>
            <h2
              className="crane-h2"
              style={{
                color: '#1A2A3A',
                fontWeight: 700,
                marginBottom: '12px',
              }}
            >
              보유 크레인
            </h2>
            <p
              style={{
                color: '#6B6560',
                fontSize: '15px',
              }}
            >
              중부권 최대 규모의 다양한 크레인을 보유하고 있습니다
            </p>
          </div>

          {/* 카드 그리드 */}
          <div
            className="crane-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '20px',
              marginBottom: '48px',
            }}
          >
            {cranes.map((crane) => (
              <div
                key={crane.name}
                style={{
                  backgroundColor: '#F5F0E8',
                  borderRadius: '16px',
                  padding: '36px 20px',
                  textAlign: 'center',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                }}
              >
                <h3
                  style={{
                    color: crane.color,
                    fontSize: '18px',
                    fontWeight: 700,
                    marginBottom: '14px',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {crane.name}
                </h3>
                <p
                  className="crane-desc"
                  style={{
                    color: '#1A2A3A',
                    fontWeight: 700,
                    lineHeight: 1.4,
                  }}
                >
                  {crane.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA 버튼 */}
          <div style={{ textAlign: 'center' }}>
            <a
              href="tel:01053209981"
              style={{
                backgroundColor: '#E85D24',
                color: '#ffffff',
                padding: '15px 48px',
                borderRadius: '999px',
                fontWeight: 700,
                fontSize: '15px',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              상담하기
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .crane-h2 { font-size: 40px; }
        .crane-desc { font-size: 22px; }

        @media (max-width: 768px) {
          .crane-inner { padding: 0 20px !important; }
          .crane-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 14px !important;
          }
          .crane-h2 { font-size: 28px !important; }
          .crane-desc { font-size: 16px !important; }
        }
      `}</style>
    </>
  )
}
