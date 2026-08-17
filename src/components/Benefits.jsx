const benefits = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18zm0 0c-2.5-1.7-4-5.2-4-9 0-3.8 1.5-7.3 4-9 2.5 1.7 4 5.2 4 9 0 3.8-1.5 7.3-4 9z" />
      </svg>
    ),
    title: 'طبيعي 100%',
    desc: 'بدون مواد كيميائية، بدون بارابين. فقط نباتات وزيوت ثمينة.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c.6 4-2.2 7.5-2.2 7.5S12 11.5 12 15c.6 4-3 7-3 7M15 4c.4 3-1.6 5.6-1.6 5.6s1.9 1 1.6 4.2c-.2 2.4-1.9 4-1.9 4" />
      </svg>
    ),
    title: 'تركيبة مغربية',
    desc: 'وصفة عريقة من أعشاب الصحراء والأطلس، تنتقل من جيل إلى جيل.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V3m0 0l-2 2m2-2l2 2M12 18v-3m0 6l-2-2m2 2l2-2M6 12H3m0 0l2-2M3 12l2 2m16-2h-3m0 0l2-2m-2 2l2 2M7 7l1.5 1.5M7 17l1.5-1.5M17 7l-1.5 1.5M17 17l-1.5-1.5" />
      </svg>
    ),
    title: 'نمو ولمعان',
    desc: 'يحفز النمو، يقلل التساقط، ويمنح لمعاناً ساطعاً من الأسبوع الأول.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l6.5 4.5v9L12 21l-6.5-4.5v-9L12 3zm-6.5 4.5L12 12l6.5-4.5M12 12v9" />
      </svg>
    ),
    title: 'تغذية عميقة',
    desc: 'يتغلغل في عمق الشعرة لترطيب وإصلاح وحماية مكثفة.',
  },
]

export default function Benefits() {
  return (
    <section id="bienfaits" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <p className="reveal text-goldlight tracking-[0.35em] text-xs sm:text-sm mb-4">لماذا تاج أويل؟</p>
          <h2 className="reveal font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-5">
            فوائد <span className="text-gold-grad">إكسير ملكي</span>
          </h2>
          <div className="reveal ornament"><span className="text-goldlight">✦</span></div>
          <p className="reveal text-white/60 text-lg max-w-2xl mx-auto mt-5">
            كل قطرة تجمع قروناً من الخبرة المغربية لشعر يليق بالملكات.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <div key={i} className="card-lux reveal p-8 text-center" style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-2xl border border-gold/40 bg-gold/10 text-goldlight shadow-[0_0_24px_-6px_rgba(212,175,55,.5)]">
                {b.icon}
              </div>
              <h3 className="font-display text-xl font-bold mb-3">{b.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
