const reviews = [
  {
    text: '« لم يكن شعري بهذا اللمعان أبداً. ثلاثة أسابيع من الاستعمال ولم أعد أستطيع الاستغناء عنه. »',
    name: 'Salma',
    city: 'Casablanca',
    initial: 'S',
    gradient: 'from-gold to-golddeep',
  },
  {
    text: '« العطر إلهي والقوام خفيف. طقس ملكي حقيقي كل صباح. والتساقط قلّ بالفعل! »',
    name: 'Khadija',
    city: 'Marrakech',
    initial: 'K',
    gradient: 'from-goldlight to-gold',
  },
  {
    text: '« توصيل سريع ودفع عند الاستلام. المنتج أصلي، تماماً كما وُعدت. »',
    name: 'Yasmine',
    city: 'Rabat',
    initial: 'Y',
    gradient: 'from-golddeep to-gold',
  },
  {
    text: '« خلال شهر، أصبح شعري أكثر كثافة ونعومة. شكراً تاج أويل، إنه سر جمالي. »',
    name: 'Fatima-Zahra',
    city: 'Fès',
    initial: 'F',
    gradient: 'from-gold to-goldlight',
  },
]

export default function Reviews() {
  return (
    <section id="avis" className="relative py-24 sm:py-32 border-t border-gold/15">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <p className="reveal text-goldlight tracking-[0.35em] text-xs sm:text-sm mb-4">آراء الزبائن</p>
          <h2 className="reveal font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-5">
            يتحدثون <span className="text-gold-grad">عنا</span>
          </h2>
          <div className="reveal ornament"><span className="text-goldlight">✦</span></div>
          <div className="reveal flex items-center justify-center gap-3 mt-6 text-sm text-white/70">
            <span className="text-goldlight text-xl tracking-tight">★★★★★</span>
            <span><b className="text-white">4.9 / 5</b> — بناءً على أكثر من 1,200 تقييم موثّق</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="card-lux reveal p-7 flex flex-col" style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className="text-goldlight text-lg tracking-tight mb-4">★★★★★</div>
              <p className="text-white/80 leading-relaxed flex-1 mb-6 italic">{r.text}</p>
              <div className="flex items-center gap-3 pt-5 border-t border-gold/20">
                <span className={`w-11 h-11 rounded-full bg-gradient-to-br ${r.gradient} flex items-center justify-center font-display font-bold text-ink`}>
                  {r.initial}
                </span>
                <div>
                  <p className="font-semibold text-sm">{r.name}</p>
                  <p className="text-xs text-white/50">{r.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
