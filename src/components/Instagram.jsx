const posts = [
  { src: '/logo-front.png', alt: 'Logo TAJ OIL', likes: 512, comments: 48 },
  { src: '/packaging.png', alt: 'Packaging TAJ OIL', likes: 428, comments: 37 },
  { src: '/bottle-reference.png', alt: 'زجاجة تاج أويل', likes: 691, comments: 55 },
  { src: '/logo-photo.jpg', alt: 'TAJ OIL — univers', likes: 340, comments: 29 },
]

function HeartIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
    </svg>
  )
}

function CommentIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 3a4 4 0 014 4v10a4 4 0 01-4 4H8a4 4 0 01-4-4V7a4 4 0 014-4h8zm0 4.5a.5.5 0 100-1 .5.5 0 000 1zM12 8a4 4 0 100 8 4 4 0 000-8zm0 2a2 2 0 110 4 2 2 0 010-4z" />
    </svg>
  )
}

export default function Instagram() {
  return (
    <section id="instagram" className="relative py-24 sm:py-28 border-t border-gold/15">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14">
          <p className="reveal text-goldlight tracking-[0.35em] text-xs sm:text-sm mb-4">عالمنا</p>
          <h2 className="reveal font-display text-4xl sm:text-5xl font-bold mb-5">
            تابعنا على <span className="text-gold-grad">إنستغرام</span>
          </h2>
          <div className="reveal ornament"><span className="text-goldlight">✦</span></div>
          <p className="reveal text-white/60 max-w-xl mx-auto mt-5">
            طقوس الجمال، الكواليس وعروض حصرية — انضم إلى مجتمع تاج أويل.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-14">
          {posts.map((post, i) => (
            <a
              key={i}
              href="https://www.instagram.com/taj_oil_haircare"
              target="_blank"
              rel="noopener noreferrer"
              className="reveal group relative block aspect-square rounded-2xl overflow-hidden border border-gold/30 hover:border-gold transition-colors duration-300"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <img src={post.src} alt={post.alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 inset-x-0 flex items-center justify-between px-4 pb-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="flex items-center gap-1.5 text-white text-sm font-medium">
                  <HeartIcon /> {post.likes}
                </span>
                <span className="flex items-center gap-1.5 text-white text-sm font-medium">
                  <CommentIcon /> {post.comments}
                </span>
              </div>
              <span className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/40 backdrop-blur flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <InstagramIcon />
              </span>
            </a>
          ))}
        </div>

        <div className="reveal text-center">
          <a
            href="https://www.instagram.com/taj_oil_haircare"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-gold/50 bg-gold/5 text-goldlight text-sm font-semibold tracking-[0.15em] hover:bg-gold/15 hover:border-gold hover:-translate-y-0.5 transition-all duration-300"
          >
            <InstagramIcon />
            تابع @taj_oil_haircare على إنستغرام
          </a>
        </div>
      </div>
    </section>
  )
}
