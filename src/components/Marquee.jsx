const items = [
  { text: 'طبيعي 100%', highlight: true },
  { text: 'زيت أعشاب مغربية', highlight: false },
  { text: 'توصيل لجميع مدن المغرب', highlight: true },
  { text: 'الدفع عند الاستلام', highlight: false },
  { text: 'وصفة ملكية', highlight: true },
  { text: 'تاج المرأة شعرها', highlight: false, arabic: true },
]

function MarqueeContent() {
  return (
    <div className="flex items-center gap-8 pr-8">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-8">
          <span
            className={`tracking-[0.3em] text-sm font-medium ${
              item.highlight ? 'text-goldlight' : 'text-white/80'
            } ${item.arabic ? 'font-arabic tracking-widest' : ''}`}
          >
            {item.text}
          </span>
          <span className="text-gold/60">✦</span>
        </span>
      ))}
    </div>
  )
}

export default function Marquee() {
  return (
    <div className="relative border-y border-gold/25 bg-gradient-to-r from-golddeep/15 via-gold/10 to-golddeep/15 overflow-hidden py-4">
      <div className="marquee-track flex whitespace-nowrap w-max">
        <MarqueeContent />
        <div aria-hidden="true">
          <MarqueeContent />
        </div>
      </div>
    </div>
  )
}
