'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { number: 20,  suffix: '년+', label: '업력',     desc: '신뢰의 역사'   },
  { number: 500, suffix: '건+', label: '시공 실적', desc: '누적 프로젝트' },
  { number: 30,  suffix: '대+', label: '보유 장비', desc: '다양한 라인업' },
  { number: 0,   suffix: '%',  label: '안전사고',   desc: '안전제일주의'  },
]

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true

          if (target === 0) {
            setCount(0)
            return
          }

          let current = 0
          const step = Math.ceil(target / 40)
          const timer = setInterval(() => {
            current += step
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(current)
            }
          }, 30)

          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <div
      ref={ref}
      className="stat-number"
      style={{
        color: '#E85D24',
        fontWeight: 700,
        lineHeight: 1,
        whiteSpace: 'nowrap',
      }}
    >
      {count}{suffix}
    </div>
  )
}

export default function Stats() {
  return (
    <>
      <div style={{ backgroundColor: '#1A2A3A', padding: '48px 0' }}>
        <div
          className="stats-grid"
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 80px',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '32px',
          }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              style={{
                textAlign: 'center',
              }}
            >
              <CountUp target={stat.number} suffix={stat.suffix} />
              <div
                style={{
                  color: '#ffffff',
                  fontWeight: 600,
                  fontSize: '14px',
                  marginTop: '8px',
                }}
              >
                {stat.label}
              </div>
              <div
                style={{
                  color: 'rgba(255, 255, 255, 0.5)',
                  fontSize: '12px',
                  marginTop: '4px',
                }}
              >
                {stat.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .stat-number { font-size: 48px; }

        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            padding: 0 24px !important;
            gap: 32px 16px !important;
          }
          .stat-number {
            font-size: 36px !important;
          }
        }
      `}</style>
    </>
  )
}
