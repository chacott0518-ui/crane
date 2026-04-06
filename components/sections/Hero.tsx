export default function Hero() {
  return (
    <>
      <section
        className="hero-wrapper"
        style={{
          position: 'relative',
          width: '100%',
          height: '100svh',
          minHeight: '580px',
          overflow: 'hidden',
          backgroundColor: '#000',
        }}
      >
        <img
          src="https://i.pinimg.com/1200x/f6/8c/77/f68c7728239dc10f822f749a2592de10.jpg"
          alt="충남크레인 현장 배경"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            zIndex: 0,
          }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.62)',
          zIndex: 1,
        }} />

        <div className="hero-container">
          <div className="hero-stack">

            <div className="hero-block">
              <h1 className="hero-h1 hero-orange">충남크레인</h1>
              <p className="hero-sub hero-white">장기임대 가능</p>
            </div>

            <div className="hero-spacer" />

            <div className="hero-block">
              <h2 className="hero-h1 hero-orange">충청도 No.1</h2>
              <p className="hero-sub hero-white-90">크레인 전문기업</p>
            </div>

            <a href="tel:041-588-7003" className="hero-tel hero-orange">
              041-588-7003
            </a>

            <div className="hero-location">
              <span className="hero-location-bar" />
              <div className="hero-location-text">
                <p className="hero-loc-title">충남 · 평택 · 안성 · 천안 · 오산 전 지역</p>
                <p className="hero-loc-desc">
                  충남크레인은 최고의 기술력과 최신 장비로 현장의 안전을 책임집니다.<br />
                  24시간 언제든 신속하고 정확한 배차를 약속드립니다.
                </p>
              </div>
            </div>

            <div>
              <a href="#crane" className="hero-equip-btn">장비 보기</a>
            </div>

          </div>
        </div>
      </section>

      <style>{`
        .hero-container {
          position: relative;
          z-index: 10;
          height: 100%;
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 100px;
          display: flex;
          align-items: center;
        }
        .hero-stack {
          display: flex;
          flex-direction: column;
          text-align: left;
          width: 100%;
        }
        .hero-orange { color: #E85D24; }
        .hero-white { color: #ffffff; }
        .hero-white-90 { color: rgba(255,255,255,0.9); }
        .hero-block {
          display: flex;
          flex-direction: column;
          margin-bottom: 6px;
        }
        .hero-spacer { height: 14px; }
        .hero-h1 {
          font-size: 96px;
          font-weight: 900;
          line-height: 1.0;
          letter-spacing: -4px;
          margin: 0;
        }
        .hero-sub {
          font-size: 36px;
          font-weight: 700;
          line-height: 1.0;
          letter-spacing: -0.5px;
          margin: 0;
        }
        .hero-tel {
          font-size: 88px;
          font-weight: 900;
          line-height: 1.0;
          letter-spacing: -3px;
          text-decoration: none;
          display: inline-block;
          margin-top: 6px;
          margin-bottom: 28px;
          transition: color 0.2s;
        }
        .hero-tel:hover { color: #ff7a4d; }
        .hero-location {
          display: flex;
          align-items: stretch;
          gap: 18px;
          margin-bottom: 28px;
        }
        .hero-location-bar {
          width: 4px;
          background: #E85D24;
          border-radius: 2px;
          flex-shrink: 0;
        }
        .hero-location-text { display: flex; flex-direction: column; gap: 7px; }
        .hero-loc-title {
          color: #ffffff;
          font-size: 18px;
          font-weight: 700;
          margin: 0;
        }
        .hero-loc-desc {
          color: rgba(255,255,255,0.58);
          font-size: 14px;
          line-height: 1.75;
          margin: 0;
          word-break: keep-all;
        }
        .hero-equip-btn {
          display: inline-block;
          border: 2px solid rgba(255,255,255,0.65);
          color: #ffffff;
          font-size: 15px;
          font-weight: 700;
          padding: 13px 52px;
          border-radius: 999px;
          text-decoration: none;
          letter-spacing: 0.5px;
          transition: all 0.25s;
        }
        .hero-equip-btn:hover {
          background: rgba(255,255,255,0.12);
          border-color: rgba(255,255,255,0.9);
        }

        @media (max-width: 768px) {
          .hero-container {
            padding-left: 24px !important;
            padding-right: 24px !important;
            padding-top: 20px !important;
            /* 하단 전화 바를 고려해 바닥 여백을 100px로 늘려 텍스트를 살짝 밀어 올렸습니다 */
            padding-bottom: 100px !important; 
            align-items: center !important; 
            display: flex !important;
          }
          .hero-h1 {
            font-size: 44px !important;
            line-height: 1.1 !important;
            letter-spacing: -2px !important;
          }
          .hero-sub { font-size: 18px !important; }
          .hero-spacer { height: 10px !important; }
          .hero-tel {
            font-size: 44px !important;
            letter-spacing: -2px !important;
            margin-top: 10px !important;
            margin-bottom: 24px !important;
          }
          .hero-loc-title { font-size: 12px !important; }
          .hero-loc-desc { font-size: 11px !important; }
          .hero-location { gap: 12px !important; margin-bottom: 24px !important; }
          .hero-equip-btn {
            font-size: 13px !important;
            padding: 10px 32px !important;
          }
        }
      `}</style>
    </>
  )
}