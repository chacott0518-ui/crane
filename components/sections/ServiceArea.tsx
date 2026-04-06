const areas = ['충남', '평택', '안성', '천안', '오산', '수원', '화성', '아산']

const NAVER_URL = 'https://map.naver.com/p/search/%EA%B2%BD%EA%B8%B0%EB%8F%84%20%ED%8F%89%ED%83%9D%EC%8B%9C%20%ED%95%A9%EC%A0%95%EB%8F%99%20915-3/address/3zmYnd,2AnKRv,%EA%B2%BD%EA%B8%B0%EB%8F%84%20%ED%8F%89%ED%83%9D%EC%8B%9C%20%ED%95%A9%EC%A0%95%EB%8F%99%20915-3?searchType=address&isCorrectAnswer=true&c=15.00,0,0,0,dh'
const KAKAO_URL = 'https://map.kakao.com/?q=경기도+평택시+합정동+915-3'

export default function ServiceArea() {
  return (
    <>
      <section id="area" style={{ backgroundColor: '#ffffff', padding: '120px 0' }}>
        <div
          className="area-inner"
          style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 80px' }}
        >
          <div
            className="area-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1.1fr 0.9fr',
              gap: '100px',
              alignItems: 'start',
            }}
          >
            {/* 왼쪽 */}
            <div>
              <p style={{
                color: '#E85D24', fontSize: '13px', letterSpacing: '5px',
                fontWeight: 800, marginBottom: '16px', textTransform: 'uppercase',
              }}>
                SERVICE AREA
              </p>
              <h2 className="area-h2" style={{ color: '#1A2A3A', fontWeight: 900, lineHeight: 1.2, marginBottom: 0 }}>
                충남 전 지역
              </h2>
              <h2 className="area-h2" style={{ color: '#E85D24', fontWeight: 900, lineHeight: 1.2, marginBottom: '24px' }}>
                신속 배차 시스템
              </h2>
              <p style={{ color: '#6B6560', fontSize: '17px', lineHeight: 1.9, marginBottom: '32px', wordBreak: 'keep-all' }}>
                충남을 중심으로 평택, 안성, 천안, 오산 등 중부권 전 지역에
                최신 크레인 임대 서비스를 제공합니다. 24시간 긴급 출동 시스템으로
                현장의 공백 없는 작업을 약속드립니다.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {areas.map((area) => (
                  <span
                    key={area}
                    style={{
                      backgroundColor: '#F8F4EE',
                      border: '1px solid #E5DBC7',
                      color: '#1A2A3A',
                      padding: '10px 20px',
                      borderRadius: '999px',
                      fontSize: '15px',
                      fontWeight: 600,
                    }}
                  >
                    📍 {area}
                  </span>
                ))}
              </div>
            </div>

            {/* 오른쪽 지도 카드 */}
            <div style={{
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 8px 40px rgba(0,0,0,0.1)',
            }}>
              {/* 주소 헤더 */}
              <div style={{
                backgroundColor: '#1A2A3A',
                padding: '20px 24px',
              }}>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', marginBottom: '4px' }}>본사 위치</p>
                <p style={{ color: '#ffffff', fontSize: '17px', fontWeight: 800, margin: 0 }}>
                  경기도 평택시 합정동 915-3
                </p>
              </div>

              {/* Google Maps iframe — API 키 불필요 */}
              <iframe
                src="https://maps.google.com/maps?q=경기도+평택시+합정동+915-3&t=&z=16&ie=UTF8&iwloc=&output=embed&hl=ko"
                width="100%"
                height="280"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
              />

              {/* 지도 앱 버튼 2개 */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                
                  <a
                  href={NAVER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-link-btn naver-btn"
                  style={{
                    backgroundColor: '#03C75A',
                    color: '#ffffff',
                    padding: '16px 12px',
                    fontSize: '14px',
                    fontWeight: 800,
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    transition: 'filter 0.2s',
                  }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="white">
                    <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727z"/>
                  </svg>
                  네이버지도
                </a>
                
                  <a
                  href={KAKAO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-link-btn kakao-btn"
                  style={{
                    backgroundColor: '#FAE100',
                    color: '#391B1B',
                    padding: '16px 12px',
                    fontSize: '14px',
                    fontWeight: 800,
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    transition: 'filter 0.2s',
                  }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="#391B1B">
                    <path d="M12 3C6.477 3 2 6.477 2 11c0 2.897 1.573 5.448 3.969 7.028L4.5 21l3.617-1.874C9.3 19.36 10.625 19.5 12 19.5c5.523 0 10-3.477 10-8.5S17.523 3 12 3z"/>
                  </svg>
                  카카오맵
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <style>{`
        .area-h2 { font-size: 50px; }
        .map-link-btn:hover { filter: brightness(0.92); }

        @media (max-width: 1024px) {
          .area-inner { padding: 0 40px !important; }
          .area-grid { gap: 60px !important; }
          .area-h2 { font-size: 38px !important; }
        }
        @media (max-width: 768px) {
          .area-inner { padding: 0 16px !important; }
          .area-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
          .area-h2 { font-size: 26px !important; }
        }
      `}</style>
    </>
  )
}