import React from 'react';
import { Building2, MapPin, ArrowUp, ShieldCheck } from 'lucide-react';

export default function Footer({ onOpenPolicyModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Vision & Mission', href: '#vision-mission' },
    { name: 'Values', href: '#values' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer
      style={{
        background: 'var(--bg-dark)',
        color: '#94A3B8',
        paddingTop: '5rem',
        paddingBottom: '2.5rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        position: 'relative',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '3rem',
            paddingBottom: '3.5rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          {/* Column 1: Logo & Company Statement */}
          <div>
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.95)',
                padding: '0.6rem 1.25rem',
                borderRadius: 'var(--radius-md)',
                display: 'inline-block',
                marginBottom: '1.25rem',
              }}
            >
              <img
                src="/pics/Zirdilia_Logo_New_Tagline_Transparent-1.png"
                alt="Zirdilia Life Science Logo"
                style={{ height: '48px', width: 'auto', display: 'block' }}
              />
            </div>

            <p style={{ fontSize: '1.1rem', color: '#FFFFFF', fontWeight: '700', marginBottom: '0.75rem' }}>
              “Empowering Health, Every Day.”
            </p>

            <p style={{ fontSize: '0.925rem', color: '#94A3B8', lineHeight: 1.6, maxWidth: '320px', marginBottom: '1.5rem' }}>
              Dedicated to manufacturing awareness, strategic generic medicine distribution, and nutritional solutions committed to quality and trust.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#38BDF8' }}>
              <ShieldCheck size={16} color="#38BDF8" />
              <span>Quality • Integrity • Reliability • Transparency</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '1.25rem' }}>
              Quick Navigation
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const targetId = link.href.replace('#', '');
                      const el = document.getElementById(targetId);
                      if (el) {
                        const offsetTop = el.getBoundingClientRect().top + window.pageYOffset - 90;
                        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                      }
                    }}
                    style={{
                      color: '#CBD5E1',
                      textDecoration: 'none',
                      fontSize: '0.95rem',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.target.style.color = '#38BDF8')}
                    onMouseLeave={(e) => (e.target.style.color = '#CBD5E1')}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Corporate Presence */}
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '1.25rem' }}>
              Corporate Offices
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <Building2 size={20} color="#38BDF8" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.85rem', color: '#64748B', fontWeight: '600' }}>HEADQUARTERS</div>
                  <div style={{ fontSize: '0.975rem', color: '#FFFFFF', fontWeight: '600' }}>Mumbai, Maharashtra, India</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <MapPin size={20} color="#34D399" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.85rem', color: '#64748B', fontWeight: '600' }}>OPERATIONAL OFFICE</div>
                  <div style={{ fontSize: '0.975rem', color: '#FFFFFF', fontWeight: '600' }}>Kerala, India</div>
                </div>
              </div>
            </div>

            <div
              style={{
                marginTop: '1.5rem',
                padding: '0.75rem 1rem',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                fontSize: '0.85rem',
                color: '#CBD5E1',
              }}
            >
              Headquartered in Mumbai | Operational Office in Kerala
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.875rem',
          }}
        >
          <div>
            © 2026 Zirdilia Life Science. All rights reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <button
              onClick={() => onOpenPolicyModal('privacy')}
              style={{ background: 'none', border: 'none', color: '#94A3B8', cursor: 'pointer', fontSize: '0.875rem' }}
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenPolicyModal('terms')}
              style={{ background: 'none', border: 'none', color: '#94A3B8', cursor: 'pointer', fontSize: '0.875rem' }}
            >
              Terms & Conditions
            </button>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--color-primary-blue)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)')}
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
