import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import logoTop from '../assets/images/logo-top-det.svg';
import logoLetters from '../assets/images/letters-logo.svg';
import logoBottom from '../assets/images/logo-bot-detail.svg';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navOffset, setNavOffset] = useState(0);   // px to translateX nav to center it
  const [pillLeft, setPillLeft] = useState(0);      // pill left edge (px from header left)
  const [pillWidth, setPillWidth] = useState(0);    // pill width in px
  const [measured, setMeasured] = useState(false);

  const headerRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Measure the nav's natural (right-aligned) position to calculate centering offset
  const measure = () => {
    if (!navRef.current || !headerRef.current) return;
    const PILL_PAD = window.innerWidth >= 1280 ? 28 : 18;

    // Strip any active transform so getBoundingClientRect returns natural layout position
    const prevTransform = navRef.current.style.transform;
    const prevTransition = navRef.current.style.transition;
    navRef.current.style.transition = 'none';
    navRef.current.style.transform = 'none';
    // Force reflow so the browser recalculates positions without the transform
    void navRef.current.getBoundingClientRect();

    const navRect = navRef.current.getBoundingClientRect();
    const headerRect = headerRef.current.getBoundingClientRect();

    // Restore
    navRef.current.style.transform = prevTransform;
    navRef.current.style.transition = prevTransition;

    const headerCenter = headerRect.left + headerRect.width / 2;
    const navCenter = navRect.left + navRect.width / 2;
    const pw = navRect.width + PILL_PAD * 2;

    setNavOffset(headerCenter - navCenter);
    setPillWidth(pw);
    setPillLeft(headerRect.width / 2 - pw / 2);
    setMeasured(true);
  };

  // Measure once after first paint (no transforms applied yet)
  useLayoutEffect(() => {
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  // Focus trap for mobile menu
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Početna', id: 'hero' },
    { label: 'Galerija', id: 'gallery' },
    { label: 'O nama', id: 'about' },
    { label: 'Utisci', id: 'testimonials' },
    { label: 'Kontakt', id: 'contact' },
  ];

  const PILL_V_INSET = 10;
  const headerWidth = headerRef.current?.offsetWidth ?? 0;

  // Pill → bar: edges expand first, corners unfold last (staggered)
  // Bar → pill: corners round first, then edges contract (reverse stagger)
  const EXPAND_TRANSITION =
    'top 0.48s cubic-bezier(0.4,0,0.2,1),' +
    'bottom 0.48s cubic-bezier(0.4,0,0.2,1),' +
    'left 0.48s cubic-bezier(0.4,0,0.2,1),' +
    'right 0.48s cubic-bezier(0.4,0,0.2,1),' +
    'border-radius 0.32s cubic-bezier(0.4,0,0.2,1) 0.18s,' +
    'background 0.48s cubic-bezier(0.4,0,0.2,1),' +
    'box-shadow 0.48s cubic-bezier(0.4,0,0.2,1)';

  const CONTRACT_TRANSITION =
    'border-radius 0.28s cubic-bezier(0.4,0,0.2,1),' +
    'top 0.44s cubic-bezier(0.4,0,0.2,1) 0.1s,' +
    'bottom 0.44s cubic-bezier(0.4,0,0.2,1) 0.1s,' +
    'left 0.44s cubic-bezier(0.4,0,0.2,1) 0.1s,' +
    'right 0.44s cubic-bezier(0.4,0,0.2,1) 0.1s,' +
    'background 0.44s cubic-bezier(0.4,0,0.2,1),' +
    'box-shadow 0.44s cubic-bezier(0.4,0,0.2,1)';

  const NAV_TRANSITION = 'transform 0.48s cubic-bezier(0.4,0,0.2,1)';

  // Use right instead of width so CSS can interpolate all four edges
  const pillRight = headerWidth - pillLeft - pillWidth;

  // Background morphs from centered pill → full-width bar
  const bgStyle = measured ? (isScrolled ? {
    position: 'absolute',
    top: 0, bottom: 0, left: 0, right: 0,
    borderRadius: 0,
    background: 'var(--color-background)',
    boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
    borderBottom: '1px solid var(--color-surface)',
    transition: EXPAND_TRANSITION,
  } : {
    position: 'absolute',
    top: `${PILL_V_INSET}px`,
    bottom: `${PILL_V_INSET}px`,
    left: `${pillLeft}px`,
    right: `${pillRight}px`,
    borderRadius: '9999px',
    background: 'rgba(255, 255, 255, 0.88)',
    backdropFilter: 'blur(14px)',
    WebkitBackdropFilter: 'blur(14px)',
    boxShadow: '0 2px 24px rgba(0,0,0,0.08)',
    transition: CONTRACT_TRANSITION,
  }) : { display: 'none' };

  // Nav slides from center → natural right-aligned position
  const navStyle = {
    transform: (!isScrolled && measured) ? `translateX(${navOffset}px)` : 'translateX(0)',
    transition: NAV_TRANSITION,
  };

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-[200]"
    >
      {/* Morphing background — desktop only */}
      <div className="hidden lg:block pointer-events-none" style={bgStyle} />

      {/* Mobile background */}
      <div className={`lg:hidden absolute inset-0 transition-all duration-400 ${
        isScrolled
          ? 'bg-[var(--color-background)] shadow-md border-b border-[var(--color-surface)]'
          : 'bg-[var(--color-background)]/90 backdrop-blur-md'
      }`} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">

          {/* Logo — untouched */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollToSection('hero')}
              className="logo-container flex flex-col items-center gap-0 focus:outline-none group transition-all duration-300 hover:scale-105"
              aria-label="Olimp logo - povratak na početnu"
            >
              <img src={logoTop} alt="" className="logo-part logo-decorative hidden lg:block lg:w-20 transition-all duration-500" />
              <img src={logoLetters} alt="Olimp" className="logo-part logo-letters w-24 lg:w-20 transition-all duration-500 py-[2px]" />
              <img src={logoBottom} alt="" className="logo-part logo-decorative hidden lg:block lg:w-20 transition-all duration-500" />
            </button>
            <div className="hidden sm:flex flex-col text-[var(--color-text-secondary)] text-xs font-medium border-l-2 border-[var(--color-accent)]/40 pl-4">
              <div className="text-[var(--color-accent)] font-bold text-sm lg:text-base tracking-wider">Est. 1996</div>
              <div className="whitespace-nowrap font-semibold text-xs lg:text-sm">28+ godina</div>
            </div>
          </div>

          {/* Desktop nav — slides between center and right */}
          <nav
            ref={navRef}
            className="hidden lg:flex items-center lg:gap-8 xl:gap-12"
            style={navStyle}
            aria-label="Glavna navigacija"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="nav-link lg:px-3 xl:px-4 lg:py-1.5 xl:py-2 text-[var(--color-text-primary)] hover:text-[var(--color-accent)] font-semibold lg:text-sm xl:text-base tracking-wide transition-all duration-300 rounded-sm hover:scale-105"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative w-12 h-12"
            aria-label={isMobileMenuOpen ? 'Zatvori meni' : 'Otvori meni'}
            aria-expanded={isMobileMenuOpen}
          >
            <span className={`absolute left-3 rounded-full block h-0.5 w-6 bg-[var(--color-text-primary)] transition-all duration-300 ${isMobileMenuOpen ? 'top-[22px] rotate-45' : 'top-[16px]'}`} />
            <span className={`absolute left-3 top-[22px] rounded-full block h-0.5 w-6 bg-[var(--color-text-primary)] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`absolute left-3 rounded-full block h-0.5 w-6 bg-[var(--color-text-primary)] transition-all duration-300 ${isMobileMenuOpen ? 'top-[22px] -rotate-45' : 'top-[28px]'}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className="lg:hidden transition-all duration-300 overflow-hidden relative"
        style={{ maxHeight: isMobileMenuOpen ? '400px' : '0', opacity: isMobileMenuOpen ? 1 : 0 }}
        aria-hidden={!isMobileMenuOpen}
      >
        <nav
          className="frosted-glass border-t border-[var(--color-text-secondary)]/20"
          style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              tabIndex={isMobileMenuOpen ? 0 : -1}
              className="px-6 py-3 hover:text-[var(--color-accent)] hover:bg-[var(--color-accent)]/5 transition-all duration-300 rounded-sm text-left font-medium text-lg"
              style={{ color: '#1A1A1A', background: 'none', border: 'none', cursor: 'pointer', width: '100%' }}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
