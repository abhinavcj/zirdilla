import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ChevronRight } from 'lucide-react';

export default function Navbar({ onOpenProductsModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Active section highlight tracking
      const sections = ['hero', 'about', 'products', 'vision-mission', 'values', 'quality-future', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'About Us', href: '#about', id: 'about' },
    { name: 'Products', href: '#products', id: 'products' },
    { name: 'Vision & Mission', href: '#vision-mission', id: 'vision-mission' },
    { name: 'Values', href: '#values', id: 'values' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.35s ease',
        background: scrolled
          ? 'rgba(255, 255, 255, 0.94)'
          : 'rgba(255, 255, 255, 0.75)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        boxShadow: scrolled ? '0 10px 30px -10px rgba(11, 77, 162, 0.12)' : 'none',
        borderBottom: scrolled
          ? '1px solid rgba(11, 77, 162, 0.08)'
          : '1px solid rgba(255, 255, 255, 0.4)',
        padding: scrolled ? '0.75rem 0' : '1.1rem 0',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img
            src="/pics/Zirdilia_Logo_New_Tagline_Transparent-1.png"
            alt="Zirdilia Life Science Logo"
            style={{
              height: scrolled ? '44px' : '52px',
              width: 'auto',
              transition: 'height 0.3s ease',
              objectFit: 'contain'
            }}
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <ul style={{ display: 'flex', listStyle: 'none', gap: '1.75rem', alignItems: 'center', margin: 0, padding: 0 }}>
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    style={{
                      textDecoration: 'none',
                      fontSize: '0.925rem',
                      fontWeight: isActive ? '700' : '500',
                      color: isActive ? 'var(--color-primary-blue)' : 'var(--text-main)',
                      position: 'relative',
                      padding: '0.35rem 0',
                      transition: 'color 0.2s ease',
                    }}
                  >
                    {link.name}
                    {isActive && (
                      <span
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: '2.5px',
                          background: 'var(--gradient-brand-horizontal)',
                          borderRadius: '2px',
                        }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Primary CTA */}
          <button
            onClick={() => {
              const el = document.getElementById('products');
              if (el) {
                const offsetTop = el.getBoundingClientRect().top + window.pageYOffset - 90;
                window.scrollTo({ top: offsetTop, behavior: 'smooth' });
              }
              if (onOpenProductsModal) onOpenProductsModal();
            }}
            className="btn btn-primary"
            style={{ padding: '0.7rem 1.4rem', fontSize: '0.9rem' }}
          >
            Explore Our Products
            <ArrowRight size={16} />
          </button>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
            color: 'var(--text-main)',
          }}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: '#FFFFFF',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
            borderBottom: '1px solid rgba(11, 77, 162, 0.1)',
            padding: '1.5rem 1.5rem 2rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            animation: 'slideUp 0.3s ease forwards',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={{
                textDecoration: 'none',
                fontSize: '1.05rem',
                fontWeight: '600',
                color: activeSection === link.id ? 'var(--color-primary-blue)' : 'var(--text-main)',
                display: 'flex',
                alignItems: 'center',
                justify: 'space-between',
                padding: '0.5rem 0',
                borderBottom: '1px solid rgba(0,0,0,0.05)',
              }}
            >
              {link.name}
              <ChevronRight size={18} color="var(--color-primary-cyan)" />
            </a>
          ))}

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              const el = document.getElementById('products');
              if (el) {
                const offsetTop = el.getBoundingClientRect().top + window.pageYOffset - 90;
                window.scrollTo({ top: offsetTop, behavior: 'smooth' });
              }
              if (onOpenProductsModal) onOpenProductsModal();
            }}
            className="btn btn-primary"
            style={{ width: '100%', marginTop: '0.5rem' }}
          >
            Explore Our Products
            <ArrowRight size={16} />
          </button>
        </div>
      )}

      {/* Responsive styles for header */}
      <style>{`
        @media (max-width: 991px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
}
