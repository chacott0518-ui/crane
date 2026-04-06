export default function Footer() {
  return (
    <>
      <footer style={{
        backgroundColor: '#1A2A3A',
        padding: '48px 80px 60px',
        color: 'rgba(255,255,255,0.55)',
        fontSize: '13px',
        lineHeight: 1.9,
      }}>
        <div style={{ fontSize: '18px', fontWeight: 900, color: '#ffffff', marginBottom: '12px' }}>
          충남크레인
        </div>
        <div>경기도 평택시 합정동 915-3</div>
        <div>TEL 041-588-7003</div>
        <div>사업자등록번호 000-00-00000</div>
        <div style={{ marginTop: '12px', color: 'rgba(255,255,255,0.25)', fontSize: '12px' }}>
          © 2025 충남크레인. All rights reserved.
        </div>
      </footer>

      {/* 모바일 전화하기 고정 버튼 */}
      <a href="tel:041-588-7003" className="tel-fixed">
        📞 전화하기
      </a>

      <style>{`
        .tel-fixed {
          display: none;
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: #E85D24;
          color: #ffffff;
          font-size: 16px;
          font-weight: 800;
          padding: 16px;
          text-align: center;
          text-decoration: none;
          z-index: 99;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        @media (max-width: 768px) {
          footer {
            padding: 36px 20px 90px !important;
          }
          .tel-fixed { display: flex !important; }
        }
      `}</style>
    </>
  )
}