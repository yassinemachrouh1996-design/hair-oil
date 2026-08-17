import { useState, useEffect } from 'react'

const navLinks = [
  { href: '#bienfaits', label: 'الفوائد' },
  { href: '#histoire', label: 'قصتنا' },
  { href: '#avis', label: 'آراء الزبائن' },
  { href: '#commander', label: 'اطلب الآن' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      id="navbar"
      className={`fixed top-0 inset-x-0 z-50 border-b border-transparent ${
        scrolled ? 'scrolled' : ''
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 py-3.5 flex items-center justify-between gap-4">
        <a href="#accueil" className="flex items-center gap-3 shrink-0">
          <img
            src="/logo-front.png"
            alt="Logo TAJ OIL"
            className="w-11 h-11 rounded-full ring-1 ring-gold/70 shadow-[0_0_20px_-4px_rgba(212,175,55,.6)]"
          />
          <span className="leading-none">
            <span className="block font-display font-bold tracking-[0.22em] text-goldlight text-lg">
              TAJ&nbsp;OIL
            </span>
            <span className="block font-arabic text-xs text-white/60 mt-0.5" dir="rtl">
              تاج المرأة شعرها
            </span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-9 text-sm tracking-widest">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/75 hover:text-goldlight transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://www.instagram.com/taj_oil_haircare"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hidden lg:inline-flex w-11 h-11 rounded-full border border-gold/40 items-center justify-center text-goldlight hover:bg-gold/10 hover:-translate-y-0.5 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 3a4 4 0 014 4v10a4 4 0 01-4 4H8a4 4 0 01-4-4V7a4 4 0 014-4h8zm0 4.5a.5.5 0 100-1 .5.5 0 000 1zM12 8a4 4 0 100 8 4 4 0 000-8zm0 2a2 2 0 110 4 2 2 0 010-4z" />
            </svg>
          </a>
          <a
            href="#commander"
            className="btn-gold hidden sm:inline-flex items-center gap-2 text-sm font-semibold tracking-widest px-6 py-3 rounded-full"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293a1 1 0 00.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 4 0 014 0z" />
            </svg>
            اطلب الآن
          </a>
          <button
            id="menuBtn"
            aria-label="Menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-11 h-11 rounded-full border border-gold/40 flex items-center justify-center text-goldlight hover:bg-gold/10 transition"
          >
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      <div
        id="mobileMenu"
        className={`lg:hidden mx-4 rounded-2xl border border-gold/30 bg-ink/95 backdrop-blur-md overflow-hidden ${
          menuOpen ? 'open' : ''
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={closeMenu}
            className="block px-6 py-4 text-white/80 hover:text-goldlight hover:bg-gold/5 transition"
          >
            {link.label}
          </a>
        ))}
      </div>
    </header>
  )
}
