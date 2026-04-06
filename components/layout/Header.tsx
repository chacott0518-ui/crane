'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const navItems = [
  { label: '회사소개', href: '#about' },
  { label: '보유 장비', href: '#crane' },
  { label: '서비스 지역', href: '#area' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // 드로어 열릴 때 배경 스크롤 막기
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      {/* ───── 헤더 바 ───── */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          height: '64px',
          backgroundColor: scrolled ? '#1A2A3A' : 'transparent',
          transition: 'background-color 0.3s ease',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
          className="header-inner"
        >
          {/* 로고 */}
          <Link
            href="/"
            style={{
              color: '#ffffff',
              fontWeight: 700,
              fontSize: '17px',
              textDecoration: 'none',
              letterSpacing: '-0.3px',
              flexShrink: 0,
            }}
          >
            ㈜평택크레인
          </Link>

          {/* PC 네비게이션 */}
          <nav
            className="pc-nav"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '32px',
            }}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '14px',
                  textDecoration: 'none',
                  fontWeight: 500,
                  transition: 'color 0.2s',
                }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:01053209981"
              style={{
                backgroundColor: '#E85D24',
                color: '#ffffff',
                padding: '8px 20px',
                borderRadius: '999px',
                fontSize: '14px',
                fontWeight: 600,
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              상담하기
            </a>
          </nav>

          {/* 모바일 햄버거 버튼 */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mobile-menu-btn"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#ffffff',
              fontSize: '22px',
              padding: '4px',
              lineHeight: 1,
              display: 'none',
            }}
            aria-label={isOpen ? '메뉴 닫기' : '메뉴 열기'}
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </header>

      {/* ───── 모바일 드로어 (헤더 밖에서 독립 fixed) ───── */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: '64px',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '#1A2A3A',
            zIndex: 199,
            display: 'flex',
            flexDirection: 'column',
            padding: '32px 24px',
            overflowY: 'auto',
          }}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              style={{
                color: '#ffffff',
                fontSize: '19px',
                textDecoration: 'none',
                padding: '18px 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                fontWeight: 500,
                display: 'block',
              }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="tel:01053209981"
            onClick={() => setIsOpen(false)}
            style={{
              backgroundColor: '#E85D24',
              color: '#ffffff',
              padding: '16px',
              borderRadius: '12px',
              fontSize: '17px',
              fontWeight: 700,
              textAlign: 'center',
              textDecoration: 'none',
              marginTop: '28px',
              display: 'block',
            }}
          >
            상담하기
          </a>
        </div>
      )}

      <style>{`
        .pc-nav { display: flex !important; }
        .mobile-menu-btn { display: none !important; }

        @media (max-width: 768px) {
          .pc-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }

        @media (min-width: 769px) {
          .header-inner { padding: 0 80px !important; }
        }
      `}</style>
    </>
  )
}
