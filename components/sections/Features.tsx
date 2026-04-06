const features = [
  { icon: '🛡️', title: '안전 제일주의', desc: '현장의 안전을 최우선으로 항상 최적의 장비 상태를 유지하며, 세계 최고 수준의 장비만을 보유하고 있습니다.' },
  { icon: '⚡', title: '신속 · 정확',   desc: '신속 정확함은 기본이며 합리적인 가격과 안전한 작업을 위해 최선을 다하고 있습니다.' },
  { icon: '🏆', title: '20년 노하우',   desc: '고객님들의 신뢰를 바탕으로 20년 넘게 성실함과 장비 운용의 전문성을 인정받아 왔습니다.' },
  { icon: '📍', title: '중부권 전문',   desc: '충남을 중심으로 평택, 안성, 천안, 오산 등 중부권 대표 중장비 임대업체로 최고의 서비스를 제공합니다.' },
  { icon: '🔧', title: '최신 장비 보유', desc: '카고크레인 5~18톤, 유압크레인 13~500톤, 거미크레인 2~7톤, Wing 24~37 등 다양한 장비 보유.' },
  { icon: '📞', title: '24시간 대응',   desc: 'AnyTime Hot Line을 운영하여 긴급 상황에서도 신속하게 대응합니다. 언제든지 문의 주세요.' },
]

export default function Features() {
  return (
    <>
      <section id="about" style={{ backgroundColor: '#F5F0E8', padding: '120px 0' }}>
        <div
          className="feat-inner"
          style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 80px' }}
        >
          <div style={{ textAlign: 'center', marginBottom: '72px' }}>
            <p style={{
              color: '#E85D24',
              fontSize: '13px',
              letterSpacing: '5px',
              fontWeight: 800,
              marginBottom: '16px',
              textTransform: 'uppercase',
            }}>
              WHY CHOOSE US
            </p>
            <h2 className="feat-h2" style={{ color: '#1A2A3A', fontWeight: 900, lineHeight: 1.2 }}>
              왜 <span style={{ color: '#E85D24' }}>충남크레인</span>인가요?
            </h2>
          </div>

          <div
            className="feat-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '28px',
            }}
          >
            {features.map((f) => (
              <div
                key={f.title}
                className="feat-card"
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '24px',
                  padding: '44px 36px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.05)',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                }}
              >
                <div style={{ fontSize: '36px', marginBottom: '20px', lineHeight: 1 }}>
                  {f.icon}
                </div>
                <h3 style={{
                  color: '#1A2A3A',
                  fontSize: '19px',
                  fontWeight: 800,
                  marginBottom: '12px',
                  lineHeight: 1.4,
                }}>
                  {f.title}
                </h3>
                <p style={{
                  color: '#6B6560',
                  fontSize: '14px',
                  lineHeight: 1.85,
                  wordBreak: 'keep-all',
                  margin: 0,
                }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .feat-h2 { font-size: 48px; }
        .feat-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 16px 48px rgba(0,0,0,0.09);
        }
        @media (max-width: 1024px) {
          .feat-inner { padding: 0 40px !important; }
          .feat-h2 { font-size: 40px !important; }
        }
        @media (max-width: 768px) {
          .feat-inner { padding: 0 16px !important; }
          .feat-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 12px !important;
          }
          .feat-h2 { font-size: 28px !important; }
          .feat-card {
            padding: 20px 16px !important;
            border-radius: 16px !important;
          }
          .feat-card h3 { font-size: 13px !important; margin-bottom: 6px !important; }
          .feat-card p { font-size: 11px !important; line-height: 1.65 !important; }
          .feat-card > div:first-child { font-size: 24px !important; margin-bottom: 12px !important; }
        }
      `}</style>
    </>
  )
}