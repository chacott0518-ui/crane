'use client'

import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 72px',
        height: '68px',
        backgroundColor: '#1A2A3A',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        width: '100%',
      }}>
        <a href="/" className="header-logo" style={{ textDecoration: 'none' }}>
  충남크레인
</a>

        {/* PC 네비 */}
        <nav className="header-nav">
          <a href="#about">회사소개</a>
          <a href="#crane">보유 장비</a>
          <a href="#area">서비스 지역</a>
        </nav>

        {/* PC 전화 버튼 */}
        <a href="tel:041-588-7003" className="header-cta">
          📞 041-588-7003
        </a>

        {/* 모바일 햄버거 */}
        <button className="ham-btn" onClick={() => setOpen(true)} aria-label="메뉴 열기">
          <span /><span /><span />
        </button>
      </header>

      {/* 모바일 메뉴 */}
      {open && (
        <div className="mob-overlay" onClick={() => setOpen(false)}>
          <div className="mob-dim" />
          <div className="mob-panel" onClick={(e) => e.stopPropagation()}>
            <button className="mob-close" onClick={() => setOpen(false)}>✕</button>
            <a href="#about" onClick={() => setOpen(false)}>회사소개</a>
            <a href="#crane" onClick={() => setOpen(false)}>보유 장비</a>
            <a href="#area" onClick={() => setOpen(false)}>서비스 지역</a>
          </div>
        </div>
      )}

      <style>{`
        .header-logo {
          font-size: 20px;
          font-weight: 900;
          color: #ffffff;
          letter-spacing: -0.5px;
        }
        .header-nav {
          display: flex;
          gap: 32px;
        }
        .header-nav a {
          color: rgba(255,255,255,0.72);
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.2s;
        }
        .header-nav a:hover { color: #ffffff; }
        .header-cta {
          background: #E85D24;
          color: #ffffff;
          font-size: 13px;
          font-weight: 700;
          padding: 10px 22px;
          border-radius: 999px;
          text-decoration: none;
          white-space: nowrap;
          transition: background 0.2s;
        }
        .header-cta:hover { background: #d04d1a; }
        .ham-btn {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }
        .ham-btn span {
          display: block;
          width: 22px;
          height: 2px;
          background: #ffffff;
          border-radius: 2px;
        }
        .mob-overlay {
          position: fixed;
          inset: 0;
          z-index: 200;
          display: flex;
        }
        .mob-dim {
          flex: 1;
          background: rgba(0,0,0,0.4);
        }
        .mob-panel {
          width: 185px;
          background: rgba(18,28,42,0.97);
          display: flex;
          flex-direction: column;
          padding-top: 14px;
        }
        .mob-close {
          background: none;
          border: none;
          color: rgba(255,255,255,0.7);
          font-size: 20px;
          padding: 6px 16px;
          cursor: pointer;
          align-self: flex-end;
        }
        .mob-panel a {
          display: block;
          padding: 15px 22px;
          color: rgba(255,255,255,0.82);
          font-size: 14px;
          font-weight: 600;
          border-bottom: 1px solid rgba(255,255,255,0.07);
          text-decoration: none;
        }
        .mob-panel a:hover { background: rgba(255,255,255,0.05); }

        @media (max-width: 768px) {
          header {
            padding: 0 18px !important;
            height: 56px !important;
          }
          .header-logo { font-size: 16px !important; }
          .header-nav { display: none !important; }
          .header-cta { display: none !important; }
          .ham-btn { display: flex !important; }
        }
      `}</style>
    </>
  )
}