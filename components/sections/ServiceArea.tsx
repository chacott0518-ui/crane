const areas = ['평택', '안성', '천안', '오산', '수원', '화성', '아산']

export default function ServiceArea() {
  return (
    <>
      <div
        id="area"
        style={{
          backgroundColor: '#ffffff',
          padding: '96px 0',
        }}
      >
        <div
          className="area-inner"
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 80px',
          }}
        >
          <div
            className="area-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '80px',
              alignItems: 'center',
            }}
          >
            {/* ── 텍스트 영역 ── */}
            <div>
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
                SERVICE AREA
              </p>

              <h2
                className="area-h2"
                style={{
                  color: '#1A2A3A',
                  fontWeight: 700,
                  marginBottom: '20px',
                  lineHeight: 1.25,
                }}
              >
                서비스 가능 지역
              </h2>

              <p
                style={{
                  color: '#6B6560',
                  fontSize: '15px',
                  lineHeight: 1.9,
                  marginBottom: '32px',
                  wordBreak: 'keep-all',
                }}
              >
                평택을 중심으로 안성, 천안, 오산 등 중부권 전 지역에
                크레인 임대 서비스를 제공합니다.
                긴급 출동도 가능하니 언제든지 문의 주세요.
              </p>

              {/* 지역 태그 */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  marginBottom: '40px',
                }}
              >
                {areas.map((area) => (
                  <span
                    key={area}
                    style={{
                      backgroundColor: '#F5F0E8',
                      border: '1px solid #D4C5A9',
                      color: '#1A2A3A',
                      padding: '6px 14px',
                      borderRadius: '999px',
                      fontSize: '14px',
                    }}
                  >
                    📍 {area}
                  </span>
                ))}
              </div>

              {/* CTA 버튼 */}
              <a
                href="tel:01053209981"
                style={{
                  backgroundColor: '#E85D24',
                  color: '#ffffff',
                  padding: '14px 36px',
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

            {/* ── 지도 카드 ── */}
            <div
              style={{
                backgroundColor: '#F5F0E8',
                borderRadius: '20px',
                padding: '56px 40px',
                textAlign: 'center',
                minHeight: '340px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  fontSize: '60px',
                  marginBottom: '20px',
                  lineHeight: 1,
                }}
              >
                🗺️
              </div>
              <p
                style={{
                  color: '#1A2A3A',
                  fontWeight: 700,
                  fontSize: '17px',
                  marginBottom: '8px',
                }}
              >
                경기도 평택시 합정동 915-3
              </p>
              <p
                style={{
                  color: '#6B6560',
                  fontSize: '14px',
                  marginBottom: '24px',
                }}
              >
                평택 · 안성 · 천안 · 오산 서비스
              </p>
              <a
                href="https://map.kakao.com/?q=경기도+평택시+합정동+915-3"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: '#FAE100',
                  color: '#391B1B',
                  padding: '10px 24px',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: 700,
                  textDecoration: 'none',
                }}
              >
                카카오맵에서 보기
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .area-h2 { font-size: 40px; }

        @media (max-width: 768px) {
          .area-inner { padding: 0 20px !important; }
          .area-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .area-h2 { font-size: 28px !important; }
        }
      `}</style>
    </>
  )
}
