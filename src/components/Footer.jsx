const quickLinks = [
  { href: '#accueil', label: 'الرئيسية' },
  { href: '#bienfaits', label: 'الفوائد' },
  { href: '#histoire', label: 'قصتنا' },
  { href: '#avis', label: 'آراء الزبائن' },
  { href: '#commander', label: 'اطلب الآن' },
]

function SocialIcon({ children, href, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 rounded-full border border-gold/30 bg-gold/5 flex items-center justify-center text-goldlight hover:bg-gold/15 hover:-translate-y-1 transition-all duration-300"
    >
      {children}
    </a>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-gold/25 bg-ink/60 backdrop-blur-sm pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-14">
          <div>
            <a href="#accueil" className="flex items-center gap-3 mb-5">
              <img src="/logo-front.png" alt="Logo TAJ OIL" className="w-12 h-12 rounded-full ring-1 ring-gold/70" />
              <span className="leading-none">
                <span className="block font-display font-bold tracking-[0.22em] text-goldlight text-xl">TAJ&nbsp;OIL</span>
                <span className="block font-arabic text-sm text-white/60 mt-0.5" dir="rtl">تاج المرأة شعرها</span>
              </span>
            </a>
            <p className="text-sm text-white/55 leading-relaxed mb-5">
              الإكسير الملكي للشعر. زيت أعشاب مغربية طبيعي 100%، محضّر وفق وصفة عريقة تنتقل من جيل إلى جيل.
            </p>
            <div className="flex items-center gap-3">
              <SocialIcon href="https://www.instagram.com/taj_oil_haircare" label="Instagram">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 3a4 4 0 014 4v10a4 4 0 01-4 4H8a4 4 0 01-4-4V7a4 4 0 014-4h8zm0 4.5a.5.5 0 100-1 .5.5 0 000 1zM12 8a4 4 0 100 8 4 4 0 000-8zm0 2a2 2 0 110 4 2 2 0 010-4z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://wa.me/212600000000" label="WhatsApp">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a9 9 0 00-7.8 13.5L3 21l4.7-1.2A9 9 0 1012 3zm4.2 12.1c-.2.5-1 .9-1.5 1-1.4.2-2.7-.1-4.8-1.4-1.7-1.1-2.9-2.9-3-3-.1-.2-.7-1-.7-2s.4-1.2.6-1.4c.2-.2.4-.2.6-.2h.5c.1 0 .3-.1.5.4l.6 1.5c.1.1.1.3 0 .4l-.3.4-.3.4c-.1.1-.2.2-.1.4.1.2.5 1 1.2 1.6.9.8 1.7 1 2 1.1.2.1.4.1.5-.1l.7-.9c.1-.2.3-.2.5-.1l1.6.8c.2.1.3.2.4.3 0 .1 0 .5-.1.7z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="#" label="Facebook">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-6h2l.5-3h-2.5V9.5c0-.9.3-1.5 1.6-1.5H16V5.2c-.3 0-1.2-.1-2.3-.1-2.3 0-3.7 1.4-3.7 3.9V12H8v3h2v6h3.5z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="#" label="TikTok">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3c.3 2 1.6 3.6 3.5 3.9v2.5c-1.3 0-2.5-.4-3.5-1v5.1c0 3.4-2.6 6-6 6S4.5 17 4.5 13.5s2.6-6 6-6c.3 0 .7 0 1 .1v2.6c-.3-.1-.7-.1-1-.1-1.9 0-3.5 1.6-3.5 3.5S8.6 17 10.5 17s3.5-1.6 3.5-3.5V3h2.5z" />
                </svg>
              </SocialIcon>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold text-goldlight mb-5 tracking-wider">روابط سريعة</h4>
            <ul className="space-y-3 text-sm text-white/60">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-goldlight transition-colors inline-flex items-center gap-2">
                    <span className="text-goldlight/60">✦</span> {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold text-goldlight mb-5 tracking-wider">اتصل بنا</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-goldlight mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h4.6l1.6 4-2.2 1.6a12 12 0 005.4 5.4l1.6-2.2 4 1.6V19a2 2 0 01-2 2A16 16 0 013 5z" />
                </svg>
                <a href="tel:+212600000000" className="hover:text-goldlight transition-colors">+212 6 00 00 00 00</a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-goldlight mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:contact@tajoil.ma" className="hover:text-goldlight transition-colors">contact@tajoil.ma</a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-goldlight mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-3-3h-2M9 20H4v-2a3 3 0 013-3h2m4-2a4 4 0 100-8 4 4 0 000 8zm5 0a3 3 0 100-6 3 3 0 000 6zm-9 6a4 4 0 100-8 4 4 0 000 8z" />
                </svg>
                <a href="#" className="hover:text-goldlight transition-colors">@tajoil.ma — إنستغرام وواتساب</a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-goldlight mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>الدار البيضاء، المغرب — توصيل لجميع المدن</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-7 border-t border-gold/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {year} تاج أويل — جميع الحقوق محفوظة.</p>
          <p className="font-arabic" dir="rtl">100% طبيعي — زيت أعشاب مغربية · تاج المرأة شعرها</p>
        </div>
      </div>
    </footer>
  )
}
