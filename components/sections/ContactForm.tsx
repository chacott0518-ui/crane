'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const equipmentGroups = [
  {
    label: '카고크레인',
    options: [
      { label: '5톤', value: 'cargo-5t' },
      { label: '11톤', value: 'cargo-11t' },
      { label: '15톤', value: 'cargo-15t' },
      { label: '18톤', value: 'cargo-18t' },
    ],
  },
  {
    label: '유압크레인',
    options: [
      { label: '13톤', value: 'hydro-13t' },
      { label: '16톤', value: 'hydro-16t' },
      { label: '25톤', value: 'hydro-25t' },
      { label: '35톤', value: 'hydro-35t' },
      { label: '50톤', value: 'hydro-50t' },
      { label: '70톤', value: 'hydro-70t' },
      { label: '100톤', value: 'hydro-100t' },
      { label: '160톤', value: 'hydro-160t' },
      { label: '200톤', value: 'hydro-200t' },
    ],
  },
  {
    label: '거미크레인',
    options: [
      { label: '2톤', value: 'spider-2t' },
      { label: '3톤', value: 'spider-3t' },
      { label: '5톤', value: 'spider-5t' },
      { label: '7톤', value: 'spider-7t' },
    ],
  },
  {
    label: '고소작업차',
    options: [
      { label: 'W24', value: 'sky-w24' },
      { label: 'W29', value: 'sky-w29' },
      { label: 'W32', value: 'sky-w32' },
      { label: 'W37', value: 'sky-w37' },
    ],
  },
]

const inputClasses =
  'w-full bg-white/10 text-white placeholder-white/30 border border-white/20 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-crane transition-colors min-h-[48px]'

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    site: '',
    location: '',
    startDate: '',
    endDate: '',
    equipment: [] as string[],
    reply: 'phone',
    memo: '',
  })
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const toggleEquipment = (val: string) => {
    setForm((prev) => ({
      ...prev,
      equipment: prev.equipment.includes(val)
        ? prev.equipment.filter((e) => e !== val)
        : [...prev.equipment, val],
    }))
  }

  const handleSubmit = async () => {
    if (!form.name || !form.phone) {
      alert('성명과 연락처는 필수입니다.')
      return
    }
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) setDone(true)
    } catch {
      // silent fail
    }
    setLoading(false)
  }

  if (done)
    return (
      <section id="contact" className="bg-navy section-padding">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-7xl mb-6">✅</div>
            <h3 className="text-white text-2xl md:text-4xl font-extrabold mb-3">
              견적 문의가 접수되었습니다!
            </h3>
            <p className="text-white/60 text-base md:text-lg mb-8">
              빠른 시간 내에 연락드리겠습니다.
            </p>
          </motion.div>
        </div>
      </section>
    )

  return (
    <section id="contact" className="bg-navy section-padding" ref={ref}>
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-crane text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Get a Quote
          </p>
          <h2 className="text-white text-2xl md:text-4xl font-extrabold">
            견적 / 문의
          </h2>
          <p className="text-white/50 mt-4 text-sm md:text-base">
            온라인으로 간편하게 견적 문의를 하실 수 있습니다
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto bg-white/5 rounded-3xl p-6 md:p-10 backdrop-blur-sm border border-white/10"
        >
          {/* 기본 정보 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="text-white/70 text-sm mb-2 block font-medium">
                성명 <span className="text-crane">*</span>
              </label>
              <input
                type="text"
                placeholder="홍길동"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClasses}
              />
            </div>
            <div>
              <label className="text-white/70 text-sm mb-2 block font-medium">
                연락처 <span className="text-crane">*</span>
              </label>
              <input
                type="tel"
                placeholder="010-0000-0000"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className={inputClasses}
              />
            </div>
            <div>
              <label className="text-white/70 text-sm mb-2 block font-medium">
                현장명
              </label>
              <input
                type="text"
                placeholder="○○ 건설현장"
                value={form.site}
                onChange={(e) => setForm({ ...form, site: e.target.value })}
                className={inputClasses}
              />
            </div>
            <div>
              <label className="text-white/70 text-sm mb-2 block font-medium">
                현장위치
              </label>
              <input
                type="text"
                placeholder="경기도 평택시 ..."
                value={form.location}
                onChange={(e) =>
                  setForm({ ...form, location: e.target.value })
                }
                className={inputClasses}
              />
            </div>
            <div>
              <label className="text-white/70 text-sm mb-2 block font-medium">
                사용 시작일
              </label>
              <input
                type="date"
                value={form.startDate}
                onChange={(e) =>
                  setForm({ ...form, startDate: e.target.value })
                }
                className={inputClasses}
              />
            </div>
            <div>
              <label className="text-white/70 text-sm mb-2 block font-medium">
                사용 종료일
              </label>
              <input
                type="date"
                value={form.endDate}
                onChange={(e) =>
                  setForm({ ...form, endDate: e.target.value })
                }
                className={inputClasses}
              />
            </div>
          </div>

          {/* 장비 선택 */}
          <div className="mb-6">
            <label className="text-white/70 text-sm mb-3 block font-medium">
              사용 장비 선택
            </label>
            <div className="space-y-4">
              {equipmentGroups.map((group) => (
                <div key={group.label}>
                  <p className="text-white/40 text-xs mb-2 font-semibold tracking-wide">
                    {group.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.options.map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => toggleEquipment(opt.value)}
                        className={`text-xs px-4 py-2.5 rounded-full border transition-all font-medium min-w-[60px] min-h-[48px] ${
                          form.equipment.includes(opt.value)
                            ? 'bg-crane border-crane text-white'
                            : 'bg-white/5 border-white/20 text-white/60 hover:border-crane/50 hover:text-white/80'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 답변 방법 */}
          <div className="mb-6">
            <label className="text-white/70 text-sm mb-3 block font-medium">
              답변 방법
            </label>
            <div className="flex gap-3">
              {[
                { val: 'phone', label: '📞 전화로 답변' },
                { val: 'email', label: '📧 이메일로 답변' },
              ].map((opt) => (
                <button
                  key={opt.val}
                  type="button"
                  onClick={() => setForm({ ...form, reply: opt.val })}
                  className={`px-5 py-3 rounded-full text-sm border transition-all font-medium min-h-[48px] ${
                    form.reply === opt.val
                      ? 'bg-crane border-crane text-white'
                      : 'bg-white/5 border-white/20 text-white/60 hover:border-crane/50'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* 기타사항 */}
          <div className="mb-8">
            <label className="text-white/70 text-sm mb-2 block font-medium">
              기타사항
            </label>
            <textarea
              placeholder="작업 내용, 요청사항 등을 자유롭게 입력해 주세요."
              rows={4}
              value={form.memo}
              onChange={(e) => setForm({ ...form, memo: e.target.value })}
              className={`${inputClasses} resize-none`}
            />
          </div>

          {/* 제출 버튼 */}
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-crane text-white py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition-colors disabled:opacity-50 min-h-[56px]"
          >
            {loading ? '전송 중...' : '견적 의뢰하기'}
          </button>
        </motion.div>
      </div>
    </section>
  )
}
