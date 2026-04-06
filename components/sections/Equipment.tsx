'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface EquipmentItem {
  name: string
  tonnage: string
  maxHeight: string
  desc: string
}

interface Category {
  id: string
  name: string
  image: string
  items: EquipmentItem[]
}

const categories: Category[] = [
  {
    id: 'cargo',
    name: '카고크레인',
    image:
      'https://images.unsplash.com/photo-1590247813693-5541d1c609fd?w=400&q=80',
    items: [
      {
        name: '카고크레인 5톤',
        tonnage: '5톤',
        maxHeight: '최대 28m',
        desc: '간판시공, 소형 자재 운반',
      },
      {
        name: '카고크레인 11톤',
        tonnage: '11톤',
        maxHeight: '최대 19m',
        desc: '중형 건축자재 인양',
      },
      {
        name: '카고크레인 15톤',
        tonnage: '15톤',
        maxHeight: '최대 24m',
        desc: '철근, 철골 인양 작업',
      },
      {
        name: '카고크레인 18톤',
        tonnage: '18톤',
        maxHeight: '최대 28m',
        desc: '대형 자재, 장비 운반',
      },
    ],
  },
  {
    id: 'hydraulic',
    name: '유압크레인',
    image:
      'https://images.unsplash.com/photo-1573108724029-4c46571d6490?w=400&q=80',
    items: [
      {
        name: '유압크레인 13톤',
        tonnage: '13톤',
        maxHeight: '최대 30m',
        desc: '소형 건설현장 인양',
      },
      {
        name: '유압크레인 16톤',
        tonnage: '16톤',
        maxHeight: '최대 32m',
        desc: '중소형 건설현장',
      },
      {
        name: '유압크레인 25톤',
        tonnage: '25톤',
        maxHeight: '최대 44m',
        desc: '중형 자재 인양',
      },
      {
        name: '유압크레인 35톤',
        tonnage: '35톤',
        maxHeight: '최대 49m',
        desc: '중대형 건설 작업',
      },
      {
        name: '유압크레인 50톤',
        tonnage: '50톤',
        maxHeight: '최대 54m',
        desc: '대형 건설 자재',
      },
      {
        name: '유압크레인 70톤',
        tonnage: '70톤',
        maxHeight: '최대 63m',
        desc: '대형 중량물 인양',
      },
      {
        name: '유압크레인 100톤',
        tonnage: '100톤',
        maxHeight: '최대 78m',
        desc: '타워크레인 조립해체',
      },
      {
        name: '유압크레인 160톤',
        tonnage: '160톤',
        maxHeight: '최대 80m',
        desc: '초대형 중량물 작업',
      },
      {
        name: '유압크레인 200톤',
        tonnage: '200톤',
        maxHeight: '최대 88m',
        desc: '플랜트, 교량 작업',
      },
      {
        name: '유압크레인 300톤',
        tonnage: '300톤',
        maxHeight: '최대 96m',
        desc: '특수 중량물 작업',
      },
      {
        name: '유압크레인 500톤',
        tonnage: '500톤',
        maxHeight: '최대 142m',
        desc: '초대형 특수 프로젝트',
      },
    ],
  },
  {
    id: 'spider',
    name: '거미크레인',
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80',
    items: [
      {
        name: '거미크레인 2톤',
        tonnage: '2톤',
        maxHeight: '협소공간 특화',
        desc: '실내, 좁은 공간 작업',
      },
      {
        name: '거미크레인 3톤',
        tonnage: '3톤',
        maxHeight: '협소공간 특화',
        desc: '실내 중형 인양',
      },
      {
        name: '거미크레인 5톤',
        tonnage: '5톤',
        maxHeight: '협소공간 특화',
        desc: '고성능 소형 크레인',
      },
      {
        name: '거미크레인 7톤',
        tonnage: '7톤',
        maxHeight: '협소공간 특화',
        desc: '협소공간 대형 인양',
      },
    ],
  },
  {
    id: 'sky',
    name: '고소작업차',
    image:
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&q=80',
    items: [
      {
        name: 'Wing24',
        tonnage: 'Wing24',
        maxHeight: '최대 23m',
        desc: '외벽 작업, 간판 설치',
      },
      {
        name: 'Wing29',
        tonnage: 'Wing29',
        maxHeight: '최대 28.5m',
        desc: '중층 고소작업',
      },
      {
        name: 'Wing32',
        tonnage: 'Wing32',
        maxHeight: '최대 32m',
        desc: '고층 외벽, 유리 시공',
      },
      {
        name: 'Wing37',
        tonnage: 'Wing37',
        maxHeight: '최대 37m',
        desc: '초고층 고소작업',
      },
    ],
  },
]

export default function Equipment() {
  const [activeTab, setActiveTab] = useState('cargo')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const activeCategory = categories.find((c) => c.id === activeTab)!

  return (
    <section id="equipment" className="bg-cream section-padding" ref={ref}>
      <div className="container-max">
        {/* 제목 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-crane text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Our Equipment
          </p>
          <h2 className="text-navy text-2xl md:text-4xl font-extrabold">
            보유 장비
          </h2>
        </motion.div>

        {/* 탭 버튼 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 min-h-[48px] ${
                activeTab === cat.id
                  ? 'bg-crane text-white shadow-lg'
                  : 'bg-white text-navy border border-sand hover:border-crane hover:text-crane'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </motion.div>

        {/* 카드 그리드 - PC 4열, 태블릿 2열, 모바일 1열 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activeCategory.items.map((item, i) => (
            <motion.div
              key={`${activeTab}-${item.name}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden card-shadow hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group min-h-[320px] flex flex-col"
            >
              {/* 이미지 영역 - img 태그 사용 */}
              <div className="h-48 bg-cream-dark overflow-hidden flex-shrink-0">
                <img
                  src={activeCategory.image}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                />
              </div>
              {/* 카드 내용 */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-navy font-bold text-lg mb-1">
                  {item.name}
                </h3>
                <p className="text-crane text-sm font-semibold mb-2">
                  {item.tonnage}
                </p>
                <p className="text-stone text-xs leading-relaxed mb-3 flex-1">
                  {item.desc}
                </p>
                <span className="inline-block bg-cream text-navy text-xs font-medium px-3 py-1.5 rounded-full self-start">
                  {item.maxHeight}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
