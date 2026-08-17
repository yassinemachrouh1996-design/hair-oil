import { useState, useMemo } from 'react'

const WHATSAPP_NUMBER = '212600000000'
const PRICE = 149
const OLD_PRICE = 249

const qtyOptions = [
  [1, 'زجاجة واحدة'],
  [2, 'زجاجتان'],
  [3, '3 زجاجات'],
  [5, '5 زجاجات'],
]

function formatPrice(n) {
  return new Intl.NumberFormat('fr-MA', { maximumFractionDigits: 0 }).format(n)
}

export default function OrderForm() {
  const [qty, setQty] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [city, setCity] = useState('')

  const total = useMemo(() => qty * PRICE, [qty])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim() || !phone.trim() || !city.trim()) {
      alert('يرجى ملء جميع الحقول الإلزامية.')
      return
    }

    const msg =
      `🛒 *طلب جديد من تاج أويل*` +
      `\n\n🧾 المنتج : زيت الأعشاب المغربية 100مل` +
      `\n🔢 الكمية : ${qty}` +
      `\n💰 الإجمالي (الدفع عند الاستلام) : ${formatPrice(total)} درهم` +
      `\n\n👤 الاسم : ${name}` +
      `\n📞 الهاتف : ${phone}` +
      `\n🏙️ المدينة : ${city}`

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank')
    setSubmitted(true)
  }

  const resetForm = () => {
    setName('')
    setPhone('')
    setCity('')
    setQty(1)
    setSubmitted(false)
  }

  return (
    <section id="commander" className="relative py-24 sm:py-32 border-t border-gold/15">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14">
          <p className="reveal text-goldlight tracking-[0.35em] text-xs sm:text-sm mb-4">طلب سريع</p>
          <h2 className="reveal font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-5">
            اطلب في <span className="text-gold-grad">30 ثانية</span>
          </h2>
          <div className="reveal ornament"><span className="text-goldlight">✦</span></div>
          <p className="reveal text-white/60 text-lg max-w-xl mx-auto mt-5">
            ملأ الاستمارة. نتصل بك لتأكيد الطلب. تدفع نقداً عند الاستلام.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Order summary / benefits */}
          <div className="lg:col-span-2 reveal space-y-4">
            <div className="card-lux p-7">
              <div className="flex items-center gap-4 mb-6">
                <span className="flex items-center justify-center w-14 h-14 rounded-full border border-gold/40 bg-gold/10 text-goldlight">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293a1 1 0 00.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 4 0 014 0z" />
                  </svg>
                </span>
                <div>
                  <p className="font-display text-lg font-bold">TAJ OIL — 100 مل</p>
                  <p className="text-xs text-white/55">زيت أعشاب مغربية · صنع في المغرب</p>
                </div>
              </div>
              <div className="flex items-end gap-3 mb-6">
                <span className="text-4xl font-display font-bold text-gold-grad">{formatPrice(PRICE)} درهم</span>
                <span className="text-lg text-white/40 line-through">{formatPrice(OLD_PRICE)} درهم</span>
                <span className="ml-auto px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/40 text-emerald-400 text-xs font-semibold">-40%</span>
              </div>
              <ul className="space-y-3 text-sm text-white/70">
                <li className="flex items-start gap-3"><span className="text-goldlight mt-0.5">✦</span> عرض الإطلاق — توصيل مجاني اليوم</li>
                <li className="flex items-start gap-3"><span className="text-goldlight mt-0.5">✦</span> الدفع 100% عند الاستلام، تأكد قبل الدفع</li>
                <li className="flex items-start gap-3"><span className="text-goldlight mt-0.5">✦</span> توصيل خلال 24-72 ساعة إلى جميع مدن المغرب</li>
                <li className="flex items-start gap-3"><span className="text-goldlight mt-0.5">✦</span> ضمان الرضا أو استرجاع المال</li>
              </ul>
            </div>
            <div className="card-lux p-6 flex items-center gap-4">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/15 border border-emerald-400/40 text-emerald-400 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h2m4 0h2M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <div>
                <p className="font-semibold text-sm">الدفع نقداً عند الاستلام</p>
                <p className="text-xs text-white/55">لا دفع إلكتروني. تدفع نقداً عند استلام طلبك.</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 card-lux reveal p-8 sm:p-10">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium tracking-wide mb-2 text-goldlight text-xs">
                    الاسم الكامل <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="اسمك الكامل"
                    className="field"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium tracking-wide mb-2 text-goldlight text-xs">
                      رقم الهاتف <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      placeholder="06 XX XX XX XX"
                      className="field"
                      inputMode="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium tracking-wide mb-2 text-goldlight text-xs">
                      المدينة <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="city"
                      required
                      placeholder="مثال: الدار البيضاء"
                      className="field"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="qty" className="block text-sm font-medium tracking-wide mb-2 text-goldlight text-xs">
                    الكمية
                  </label>
                  <div className="relative">
                    <select
                      id="qty"
                      className="field pl-12 cursor-pointer"
                      value={qty}
                      onChange={(e) => setQty(Number(e.target.value))}
                    >
                      {qtyOptions.map(([val, label]) => (
                        <option key={val} value={val}>
                          {label} — {formatPrice(PRICE * val)} درهم{val === 3 ? ' (الأكثر طلباً)' : val > 1 ? ' (توفير)' : ''}
                        </option>
                      ))}
                    </select>
                    <svg className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-goldlight pointer-events-none" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4 px-5 py-4 rounded-xl border border-gold/30 bg-gold/5">
                  <div>
                    <p className="text-xs tracking-widest text-white/50">الإجمالي المطلوب دفعه عند الاستلام</p>
                    <p className="font-display text-3xl font-bold text-gold-grad">{formatPrice(total)} درهم</p>
                  </div>
                  <span className="hidden sm:flex items-center gap-2 text-xs text-emerald-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    الدفع عند الاستلام
                  </span>
                </div>

                <button type="submit" className="btn-gold w-full rounded-2xl px-8 py-5 text-base font-bold tracking-[0.15em] inline-flex items-center justify-center gap-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293a1 1 0 00.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 4 0 014 0z" />
                  </svg>
                  أكّد طلبي
                </button>

                <p className="text-center text-xs text-white/45">🔒 معلوماتك تبقى سرية. لا حاجة لأي دفع إلكتروني.</p>
              </form>
            ) : (
              <div className="text-center py-10">
                <span className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-400/50 text-emerald-400 mb-5">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <h3 className="font-display text-2xl font-bold mb-2">تم استلام طلبك!</h3>
                <p className="text-white/60 mb-6">سنتصل بك بسرعة لتأكيد توصيل طلبك.</p>
                <button type="button" onClick={resetForm} className="btn-ghost rounded-full px-8 py-3 text-sm font-semibold tracking-widest">
                  طلب جديد
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
