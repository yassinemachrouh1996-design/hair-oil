const ingredients = [
  'حناء الأطلس',
  'ورد دمشق',
  'اللوز الحلو',
  'التين الشوكي',
  'الزعفران الملكي',
  'إكليل الجبل البري',
]

export default function Heritage() {
  return (
    <section id="histoire" className="relative py-24 sm:py-32 border-t border-gold/15">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <div className="relative order-2 lg:order-1 reveal">
          <div className="hero-glow">
            <img
              src="/logo-front.png"
              alt="Logo royal TAJ OIL — couronne de la femme"
              className="w-full max-w-md mx-auto rounded-full ring-1 ring-gold/40 shadow-[0_40px_80px_-30px_rgba(0,0,0,.9)]"
            />
          </div>
          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-ink/95 border border-gold/50 rounded-2xl px-6 py-4 backdrop-blur-md text-center shadow-xl">
            <p className="font-arabic text-xl text-goldlight">شعرك تاجك</p>
            <p className="text-xs tracking-[0.25em] text-white/55 mt-1">شعرك تاج جمالك</p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="reveal text-goldlight tracking-[0.35em] text-xs sm:text-sm mb-4">إرثنا</p>
          <h2 className="reveal font-display text-4xl sm:text-5xl font-bold leading-tight mb-7">
            الإرث الملكي
            <br className="hidden sm:block" />
            لـ<span className="text-gold-grad">الحمّامات المغربية</span>
          </h2>
          <p className="reveal text-white/65 text-lg leading-relaxed mb-5">
            منذ قرون، تحافظ نساء المغرب على طقس جمالي ينتقل من الأم إلى الابنة: خليط ثمين من الأعشاب المقدسة، يُنقع ببطء ثم يُصفى ليصنع إكسير شباب الشعر.
          </p>
          <p className="reveal text-white/65 text-lg leading-relaxed mb-9">
            تاج أويل يحيي هذا التقليد الملكي. زيتنا يجمع أنبل نباتات الأرض المغربية — تُختار عند شروق الشمس، وتُجفف في الظل، وتُعصر على البارد للحفاظ على كل قوتها.
          </p>

          <div className="reveal grid grid-cols-2 sm:grid-cols-3 gap-3 mb-9">
            {ingredients.map((ing, i) => (
              <span key={i} className="px-4 py-2.5 rounded-xl border border-gold/30 bg-gold/5 text-white/85 text-sm flex items-center gap-2">
                <span className="text-goldlight">✦</span> {ing}
              </span>
            ))}
          </div>

          <div className="reveal flex items-center gap-6">
            <div className="flex -space-x-3">
              <span className="w-11 h-11 rounded-full ring-2 ring-coal bg-gradient-to-br from-gold to-golddeep flex items-center justify-center font-display font-bold text-ink">س</span>
              <span className="w-11 h-11 rounded-full ring-2 ring-coal bg-gradient-to-br from-goldlight to-gold flex items-center justify-center font-display font-bold text-ink">ك</span>
              <span className="w-11 h-11 rounded-full ring-2 ring-coal bg-gradient-to-br from-golddeep to-gold flex items-center justify-center font-display font-bold text-ink">ي</span>
            </div>
            <p className="text-sm text-white/60">
              انضمت أكثر من <b className="text-white">5,000 امرأة مغربية</b> جعلت تاج أويل طقسها اليومي.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
