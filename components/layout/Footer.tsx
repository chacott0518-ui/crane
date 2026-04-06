export default function Footer() {
  return (
    <>
      <footer
        style={{
          backgroundColor: '#0F1E2E',
          paddingTop: '64px',
        }}
      >
        <div
          className="footer-inner"
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 80px',
          }}
        >
          {/* ── 3열 그리드 ── */}
          <div
            className="footer-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '48px',
              paddingBottom: '48px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            {/* 회사 정보 */}
            <div>
              <h3
                style={{
                  color: '#ffffff',
                  fontSize: '17px',
                  fontWeight: 700,
                  marginBottom: '20px',
                  letterSpacing: '-0.3px',
                }}
              >
                ㈜평택크레인
              </h3>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  fontSize: '13px',
                  color: 'rgba(255, 255, 255, 0.55)',
                  lineHeight: 1.7,
                }}
              >
                <p>상호: 주식회사 평택크레인</p>
                <p>사업자등록번호: 140-81-96079</p>
                <p>대표: 양의섭</p>
                <p>📍 경기도 평택시 합정동 915-3</p>
              </div>
            </div>

            {/* 상담 문의 */}
            <div>
              <h3
                style={{
                  color: '#ffffff',
                  fontSize: '17px',
                  fontWeight: 700,
                  marginBottom: '20px',
                  letterSpacing: '-0.3px',
                }}
              >
                상담 문의
              </h3>
              <p
                style={{
                  color: 'rgba(255, 255, 255, 0.55)',
                  fontSize: '13px',
                  lineHeight: 1.85,
                  marginBottom: '20px',
                }}
              >
                크레인 임대 및 견적에 관한 문의는<br />
                아래 버튼을 통해 편하게 상담해 주세요.
              </p>
              <a
                href="tel:01053209981"
                style={{
                  backgroundColor: '#E85D24',
                  color: '#ffffff',
                  padding: '10px 24px',
                  borderRadius: '999px',
                  fontSize: '14px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  display: 'inline-block',
                }}
              >
                상담하기
              </a>
            </div>

            {/* 서비스 지역 */}
            <div>
              <h3
                style={{
                  color: '#ffffff',
                  fontSize: '17px',
                  fontWeight: 700,
                  marginBottom: '20px',
                  letterSpacing: '-0.3px',
                }}
              >
                서비스 지역
              </h3>
              <p
                style={{
                  color: 'rgba(255, 255, 255, 0.55)',
                  fontSize: '13px',
                  lineHeight: 2.1,
                }}
              >
                평택 · 안성 · 천안 · 오산<br />
                수원 · 화성 · 아산<br />
                중부권 전 지역 출동 가능
              </p>
            </div>
          </div>

          {/* 카피라이트 */}
          <div
            style={{
              padding: '20px 0',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                color: 'rgba(255, 255, 255, 0.35)',
                fontSize: '13px',
              }}
            >
              © 2026 ㈜평택크레인 All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* ── 모바일 하단 고정 CTA ── */}
      <div
        className="mobile-cta"
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          display: 'none',
          zIndex: 300,
          height: '60px',
        }}
      >
        {/* 전화하기 */}
        <a
          href="tel:01053209981"
          style={{
            flex: 1,
            backgroundColor: '#1A2A3A',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            fontSize: '15px',
            fontWeight: 700,
            textDecoration: 'none',
          }}
        >
          <span style={{ fontSize: '16px', lineHeight: 1 }}>📞</span>
          <span>전화하기</span>
        </a>

        {/* 상담하기 */}
        <a
          href="tel:01053209981"
          style={{
            flex: 1,
            backgroundColor: '#E85D24',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            fontSize: '15px',
            fontWeight: 700,
            textDecoration: 'none',
          }}
        >
          <span style={{ fontSize: '16px', lineHeight: 1 }}>💬</span>
          <span>상담하기</span>
        </a>
      </div>

      <style>{`
        .mobile-cta { display: none; }

        @media (max-width: 768px) {
          .mobile-cta { display: flex !important; }
          .footer-inner { padding: 0 20px !important; }
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
          footer { padding-bottom: 60px !important; }
        }
      `}</style>
    </>
  )
}
