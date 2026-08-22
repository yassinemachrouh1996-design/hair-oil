export default function Hero() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full grid lg:grid-cols-2 gap-14 lg:gap-10 items-center">
        <div className="text-center lg:text-right">
          <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/40 bg-gold/5 text-goldlight text-xs sm:text-sm tracking-[0.2em] mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-goldlight animate-pulse"></span>
            طبيعي 100% · صنع في المغرب
          </div>

          <h1 className="reveal font-display font-extrabold leading-[1.05] text-6xl sm:text-7xl xl:text-8xl mb-4" style={{ transitionDelay: '.08s' }}>
            <span className="headline-shine">TAJ&nbsp;OIL</span>
          </h1>
          <p className="reveal font-serifx italic text-2xl sm:text-3xl text-gold-grad-soft mb-3" style={{ transitionDelay: '.14s' }}>
            الذهب السائل لشعرك
          </p>
          <p className="reveal font-arabic text-2xl sm:text-3xl text-white/90 mb-8" style={{ transitionDelay: '.2s' }}>
            تاج المرأة شعرها
          </p>

          <p className="reveal text-white/65 text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed mb-9" style={{ transitionDelay: '.26s' }}>
            إكسير ملكي من الأعشاب المغربية، طبيعي 100%، يغذي ويقوّي ويجمّل شعرك من أول استعمال.
          </p>

          <div className="reveal flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-4 mb-10" style={{ transitionDelay: '.32s' }}>
            <a href="#commander" className="btn-gold w-full sm:w-auto text-center rounded-full px-9 py-4 text-sm font-bold tracking-[0.18em] inline-flex items-center justify-center gap-3">
              اطلب الآن
              <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#bienfaits" className="btn-ghost w-full sm:w-auto text-center rounded-full px-9 py-4 text-sm font-semibold tracking-[0.18em] inline-flex items-center justify-center gap-2">
              اكتشف المنتج
            </a>
          </div>

          <div className="reveal flex flex-col items-center lg:items-end gap-4" style={{ transitionDelay: '.36s' }}>
            <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-gold/40 bg-gold/10 text-goldlight text-xs sm:text-sm tracking-wide shadow-[0_0_24px_-8px_rgba(212,175,55,.5)]">
              <svg className="w-4 h-4 shrink-0 text-goldlight" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l2.4 5.8L20 9.5l-4.2 4.3 1.1 6.2-4.9-2.9-4.9 2.9 1.1-6.2L4 9.5l5.6-1.7L12 2z" />
              </svg>
              <span className="text-white/80">
                انضم إلى <b className="text-goldlight font-bold">+1,000 زبون سعيد</b> ومتابع على إنستغرام <b className="text-goldlight font-semibold">@taj_oil_haircare</b>
              </span>
            </span>
            <a
              href="https://www.instagram.com/taj_oil_haircare?igsi=aWZ6eWZyd2w0cnEy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full border border-gold/50 bg-gold/5 text-goldlight text-sm font-semibold tracking-[0.15em] hover:bg-gold/15 hover:border-gold hover:-translate-y-0.5 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 3a4 4 0 014 4v10a4 4 0 01-4 4H8a4 4 0 01-4-4V7a4 4 0 014-4h8zm0 4.5a.5.5 0 100-1 .5.5 0 000 1zM12 8a4 4 0 100 8 4 4 0 000-8zm0 2a2 2 0 110 4 2 2 0 010-4z" />
              </svg>
              تابعنا @taj_oil_haircare
            </a>
          </div>

          <div className="reveal flex flex-wrap items-center justify-center lg:justify-end gap-x-8 gap-y-4 text-sm text-white/70" style={{ transitionDelay: '.38s' }}>
            <div className="flex items-center gap-2">
              <span className="text-goldlight text-base tracking-tight">★★★★★</span>
              <span><b className="text-white">4.9/5</b> · +1,200 تقييم</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-white/15"></div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-goldlight" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <span><b className="text-white">+5,000</b> طلب تم توصيله</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-white/15"></div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-goldlight" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
              </svg>
              <span><b className="text-white">الدفع</b> عند الاستلام</span>
            </div>
          </div>
        </div>

        {/* Hero visual */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="hero-glow reveal relative" style={{ transitionDelay: '.15s' }}>
            <img
              src="/logo-front.png"
              alt="Logo TAJ OIL"
              className="w-full max-w-[10rem] sm:max-w-[12rem] lg:max-w-[14rem] h-auto rounded-full ring-1 ring-gold/50 drop-shadow-[0_45px_80px_-35px_rgba(0,0,0,.95)]"
            />

            <div className="absolute -top-5 -left-3 sm:left-2 bg-ink/90 border border-gold/50 rounded-2xl px-4 py-3 backdrop-blur-md shadow-xl">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-500/15 border border-emerald-400/40 text-emerald-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-semibold">الدفع عند الاستلام</p>
                  <p className="text-xs text-white/55">دفع نقداً · آمن 100%</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-3 sm:right-2 bg-ink/90 border border-gold/50 rounded-2xl px-4 py-3 backdrop-blur-md shadow-xl">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gold/15 border border-gold/50 text-goldlight">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l1.9 5.7 6.1.4-4.7 3.8 1.5 5.9-4.8-3.4-4.8 3.4 1.5-5.9L4 9.1l6.1-.4L12 3z" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-semibold">زيت أعشاب مغربية</p>
                  <p className="text-xs text-white/55">وصفة ملكية عريقة</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#bienfaits"
        aria-label="مرّر للأسفل"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/40 hover:text-goldlight transition-colors"
      >
        <span className="text-[10px] tracking-[0.35em]">مرّر للأسفل</span>
        <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </a>
    </section>
  )
}
