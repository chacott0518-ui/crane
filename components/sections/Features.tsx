const features = [
  {
    icon: '🛡️',
    title: '안전 제일주의',
    desc: '현장의 안전을 최우선으로 항상 최적의 장비상태를 유지하며, 세계 최고 수준의 장비만을 보유하고 있습니다.',
  },
  {
    icon: '⚡',
    title: '신속 · 정확',
    desc: '신속 정확함은 기본이며 합리적인 가격과 안전한 작업·이동을 위해 최선을 다하고 있습니다.',
  },
  {
    icon: '🏆',
    title: '20년 노하우',
    desc: '20년 넘게 영업을 할 수 있었던 것은 고객님들께서 저희의 성실함과 장비 운용의 전문성을 인정해 주셨기 때문입니다.',
  },
  {
    icon: '📍',
    title: '중부권 전문',
    desc: '평택을 중심으로 안성, 천안, 오산 등 중부권 대표 중장비 임대업체로서 최고의 서비스를 제공합니다.',
  },
  {
    icon: '🔧',
    title: '최신 장비 보유',
    desc: '카고크레인 5~18톤, 유압크레인 13~500톤, 거미크레인 2~7톤, 스카이 Wing24~37 등 다양한 장비 보유.',
  },
  {
    icon: '📞',
    title: '24시간 대응',
    desc: 'AnyTime Hot Line을 운영하여 긴급 상황에서도 신속하게 대응합니다. 언제든지 문의 주세요.',
  },
]

export default function Features() {
  return (
    <>
      <div
        id="about"
        style={{
          backgroundColor: '#F5F0E8',
          padding: '96px 0',
        }}
      >
        <div
          className="feat-inner"
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
              WHY CHOOSE US
            </p>
            <h2
              className="feat-h2"
              style={{
                color: '#1A2A3A',
                fontWeight: 700,
              }}
            >
              왜 평택크레인인가요?
            </h2>
          </div>

          {/* 카드 그리드 */}
          <div
            className="feat-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '20px',
            }}
          >
            {features.map((f) => (
              <div
                key={f.title}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  padding: '32px 28px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                }}
              >
                <div
                  style={{
                    fontSize: '34px',
                    marginBottom: '16px',
                    lineHeight: 1,
                  }}
                >
                  {f.icon}
                </div>
                <h3
                  style={{
                    color: '#1A2A3A',
                    fontSize: '17px',
                    fontWeight: 700,
                    marginBottom: '12px',
                    lineHeight: 1.4,
                  }}
                >
                  {f.title}
                </h3>
                <p
                  style={{
                    color: '#6B6560',
                    fontSize: '14px',
                    lineHeight: 1.75,
                    wordBreak: 'keep-all',
                  }}
                >
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .feat-h2 { font-size: 40px; }

        @media (max-width: 768px) {
          .feat-inner { padding: 0 20px !important; }
          .feat-grid { grid-template-columns: 1fr !important; }
          .feat-h2 { font-size: 28px !important; }
        }
      `}</style>
    </>
  )
}
