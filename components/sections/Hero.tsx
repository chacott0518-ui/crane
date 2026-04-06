export default function Hero() {
  return (
    <>
      <section
        style={{
          position: 'relative',
          width: '100%',
          height: '100vh',
          overflow: 'hidden',
        }}
      >
        {/* 배경 이미지 */}
        <img
          src="https://i.pinimg.com/1200x/f6/8c/77/f68c7728239dc10f822f749a2592de10.jpg"
          alt="평택크레인 GROVE 크레인 장비"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />

        {/* 어두운 오버레이 */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.38)',
          }}
        />

        {/* 콘텐츠 */}
        <div
          className="hero-inner"
          style={{
            position: 'relative',
            zIndex: 10,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 80px 80px',
          }}
        >
          {/* 안전 제일 태그 */}
          <p
            style={{
              color: '#E85D24',
              fontSize: '13px',
              letterSpacing: '4px',
              marginBottom: '14px',
              fontWeight: 500,
            }}
          >
            安全 第一主義
          </p>

          {/* 메인 타이틀 */}
          <h1
            className="hero-h1"
            style={{
              color: '#ffffff',
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: '16px',
            }}
          >
            중부권 No.1<br />크레인 전문기업
          </h1>

          {/* 서비스 지역 */}
          <p
            style={{
              color: 'rgba(255, 255, 255, 0.85)',
              fontSize: '15px',
              marginBottom: '10px',
              letterSpacing: '0.5px',
            }}
          >
            평택 · 안성 · 천안 · 오산
          </p>

          {/* 설명 */}
          <p
            className="hero-desc"
            style={{
              color: 'rgba(255, 255, 255, 0.65)',
              lineHeight: 1.8,
              marginBottom: '36px',
              wordBreak: 'keep-all',
            }}
          >
            ㈜평택크레인은 20년 이상의 노하우로 현장의 안전을 최우선으로<br className="hero-br" />
            신속·정확하게 크레인 임대 서비스를 제공합니다.
          </p>

          {/* CTA 버튼 - 항상 한 줄 */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '12px',
              alignItems: 'center',
            }}
          >
            <a
              href="tel:01053209981"
              style={{
                backgroundColor: '#E85D24',
                color: '#ffffff',
                padding: '14px 32px',
                borderRadius: '999px',
                fontWeight: 700,
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              className="hero-btn"
            >
              상담하기
            </a>
            <a
              href="#crane"
              style={{
                border: '1.5px solid rgba(255, 255, 255, 0.55)',
                color: '#ffffff',
                padding: '14px 32px',
                borderRadius: '999px',
                fontWeight: 700,
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              className="hero-btn"
            >
              장비 보기
            </a>
          </div>
        </div>
      </section>

      <style>{`
        .hero-h1 { font-size: 56px; }
        .hero-desc { font-size: 14px; }
        .hero-btn { font-size: 15px; }

        @media (max-width: 768px) {
          .hero-inner {
            padding: 0 20px 100px !important;
          }
          .hero-h1 {
            font-size: 34px !important;
          }
          .hero-desc {
            font-size: 13px !important;
          }
          .hero-btn {
            font-size: 14px !important;
            padding: 12px 24px !important;
          }
          .hero-br {
            display: none;
          }
        }
      `}</style>
    </>
  )
}
