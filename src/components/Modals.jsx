import React from 'react';
import { X, Activity, Stethoscope, Pill, CheckCircle2, ArrowRight, Building2, FileText, Mail, PhoneCall, Truck } from 'lucide-react';

export function PortfolioModal({ isOpen, onClose, initialCategory = 'all' }) {
  if (!isOpen) return null;

  const categories = [
    {
      id: 'gastroenterology',
      title: 'Gastroenterology Portfolio',
      subtitle: 'Solutions supporting digestive health and gastrointestinal care.',
      icon: <Activity size={24} color="var(--color-primary-blue)" />,
      image: '/pics/therapeutic-gastro.jpg',
      overview: 'Our gastroenterology division is dedicated to formulating and distributing high-quality therapeutic options that aid in digestive care, acid regulation support, and overall gastrointestinal health.',
      keyFeatures: [
        'Formulated to meet strict pharmacopeial quality benchmarks',
        'Focused on digestive wellness and gut health support',
        'Designed for high patient compliance and reliability',
        'Manufactured in partnership with compliant manufacturing units',
      ],
    },
    {
      id: 'vitamins-nutrition',
      title: 'Vitamins & Nutrition Portfolio',
      subtitle: 'Nutritional formulations designed to support everyday health and wellbeing.',
      icon: <Stethoscope size={24} color="var(--color-primary-green)" />,
      image: '/pics/therapeutic-vitamins.jpg',
      overview: 'Our nutritional portfolio focuses on essential micronutrients, multivitamins, and dietary support products engineered to promote overall vitality, immune health, and active daily living.',
      keyFeatures: [
        'Balanced essential vitamin & mineral complexes',
        'Tailored for daily wellness and nutritional replenishment',
        'High bioavailability and stability formulations',
        'Quality tested for purity and strength consistency',
      ],
    },
    {
      id: 'generic-pharmaceuticals',
      title: 'Generic Pharmaceuticals Portfolio',
      subtitle: 'Affordable pharmaceutical solutions focused on quality, accessibility, and reliability.',
      icon: <Pill size={24} color="var(--color-primary-cyan)" />,
      image: '/pics/pharma-solutions.jpg',
      overview: 'Zirdilia Life Science delivers trusted generic pharmaceuticals targeting widely prevalent healthcare conditions, aiming to lower healthcare costs while maintaining uncompromising quality standards.',
      keyFeatures: [
        'High-accessibility essential therapeutic categories',
        'Affordable pricing structures to expand healthcare access',
        'Reliable supply chain from our headquarters in Kerala',
        'Strict batch-to-batch consistency and packaging protection',
      ],
    },
  ];

  const filtered = initialCategory === 'all'
    ? categories
    : categories.filter((c) => c.id === initialCategory);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        background: 'rgba(6, 17, 33, 0.75)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(0.5rem, 3vw, 1.5rem)',
        animation: 'fadeIn 0.3s ease',
        boxSizing: 'border-box',
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#FFFFFF',
          borderRadius: 'var(--radius-xl)',
          width: '100%',
          maxWidth: '850px',
          maxHeight: '90vh',
          overflowY: 'auto',
          overflowX: 'hidden',
          boxShadow: '0 25px 50px rgba(0,0,0,0.25)',
          border: '1px solid rgba(11, 77, 162, 0.15)',
          position: 'relative',
          boxSizing: 'border-box',
        }}
      >
        {/* Modal Header */}
        <div
          style={{
            padding: 'clamp(0.85rem, 3vw, 1.75rem) clamp(1rem, 4vw, 2rem)',
            borderBottom: '1px solid rgba(0,0,0,0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.75rem',
            position: 'sticky',
            top: 0,
            background: '#FFFFFF',
            zIndex: 10,
          }}
        >
          <div style={{ minWidth: 0, flex: 1 }}>
            <div className="section-label" style={{ marginBottom: '0.25rem', padding: '0.2rem 0.75rem', fontSize: '0.7rem' }}>
              PORTFOLIO OVERVIEW
            </div>
            <h3 style={{ fontSize: 'clamp(1rem, 4vw, 1.5rem)', fontWeight: 800, color: 'var(--text-main)', margin: 0, wordBreak: 'break-word' }}>
              Zirdilia Product Portfolio
            </h3>
          </div>

          <button
            onClick={onClose}
            aria-label="Close portfolio modal"
            style={{
              background: 'rgba(0,0,0,0.05)',
              border: 'none',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              minWidth: '36px',
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--text-main)',
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Content */}
        <div style={{ padding: 'clamp(1rem, 4vw, 2rem)' }}>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', lineHeight: 1.6, marginBottom: '1.5rem', wordBreak: 'break-word' }}>
            Zirdilia Life Science focuses on gastroenterology, nutritional formulations, and high-quality generic pharmaceuticals designed around safety, quality, and affordability.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {filtered.map((item) => (
              <div
                key={item.id}
                style={{
                  background: 'var(--bg-secondary)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'clamp(0.85rem, 3vw, 1.5rem)',
                  border: '1px solid rgba(11, 77, 162, 0.1)',
                  overflow: 'hidden',
                  boxSizing: 'border-box',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      minWidth: '40px',
                      borderRadius: 'var(--radius-md)',
                      background: '#FFFFFF',
                      boxShadow: 'var(--shadow-sm)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <h4 style={{ fontSize: 'clamp(0.95rem, 3vw, 1.15rem)', fontWeight: 700, color: 'var(--text-main)', margin: 0, wordBreak: 'break-word' }}>
                      {item.title}
                    </h4>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-primary-blue)', fontWeight: 600, display: 'block', marginTop: '0.2rem', wordBreak: 'break-word' }}>
                      {item.subtitle}
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-body)', lineHeight: 1.6, margin: 0 }}>
                    {item.overview}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                    {item.keyFeatures.map((feat, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-main)' }}>
                        <CheckCircle2 size={15} color="var(--color-primary-green)" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                        <span style={{ wordBreak: 'break-word' }}>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div
          style={{
            padding: 'clamp(0.85rem, 3vw, 1.25rem) clamp(1rem, 4vw, 2rem)',
            background: 'var(--bg-secondary)',
            borderTop: '1px solid rgba(0,0,0,0.06)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderRadius: '0 0 var(--radius-xl) var(--radius-xl)',
            flexWrap: 'wrap',
            gap: '0.75rem',
          }}
        >
          <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', flex: '1 1 auto', minWidth: 0, wordBreak: 'break-word' }}>
            For enquiries: zirdilialifescience@gmail.com
          </div>
          <button
            onClick={() => {
              onClose();
              const el = document.getElementById('contact');
              if (el) {
                const offsetTop = el.getBoundingClientRect().top + window.pageYOffset - 80;
                window.scrollTo({ top: offsetTop, behavior: 'smooth' });
              }
            }}
            className="btn btn-primary"
            style={{ padding: '0.6rem 1.25rem', fontSize: '0.875rem', whiteSpace: 'nowrap', flexShrink: 0 }}
          >
            Partner With Us
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

export function AboutModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        background: 'rgba(6, 17, 33, 0.75)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(0.5rem, 3vw, 1.5rem)',
        animation: 'fadeIn 0.3s ease',
        boxSizing: 'border-box',
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#FFFFFF',
          borderRadius: 'var(--radius-xl)',
          width: '100%',
          maxWidth: '750px',
          maxHeight: '90vh',
          overflowY: 'auto',
          overflowX: 'hidden',
          boxShadow: '0 25px 50px rgba(0,0,0,0.25)',
          border: '1px solid rgba(11, 77, 162, 0.15)',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            padding: 'clamp(1rem, 4vw, 1.75rem) clamp(1rem, 4vw, 2rem)',
            borderBottom: '1px solid rgba(0,0,0,0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
          }}
        >
          <h3 style={{ fontSize: 'clamp(1.15rem, 4vw, 1.5rem)', fontWeight: 800, color: 'var(--text-main)', margin: 0, wordBreak: 'break-word' }}>
            About Zirdilia Life Science
          </h3>
          <button
            onClick={onClose}
            aria-label="Close about modal"
            style={{
              background: 'rgba(0,0,0,0.05)',
              border: 'none',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              minWidth: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              flexShrink: 0,
            }}
          >
            <X size={20} />
          </button>
        </div>

        <div style={{ padding: 'clamp(1rem, 4vw, 2rem)' }}>
          <h4 style={{ fontSize: 'clamp(1.1rem, 4vw, 1.25rem)', fontWeight: 700, color: 'var(--color-primary-blue)', marginBottom: '1rem' }}>
            Empowering Health, Every Day.
          </h4>

          <p style={{ fontSize: '1rem', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            At Zirdilia Life Science, we believe that every individual deserves access to safe, effective, and affordable healthcare. Established with the vision of improving lives through science and innovation, we specialize in the marketing and distribution of high-quality generic pharmaceutical products.
          </p>

          <p style={{ fontSize: '1rem', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '1.75rem' }}>
            Headquartered in Kerala, India with our Operational Office (CFA & Logistics Center), we work closely with healthcare professionals, hospitals, distributors, and international partners to ensure reliable medicines reach the people who need them most.
          </p>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              padding: 'clamp(1rem, 3vw, 1.5rem)',
              borderRadius: 'var(--radius-lg)',
              background: 'var(--bg-secondary)',
              border: '1px solid rgba(11, 77, 162, 0.1)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
              <Building2 size={24} color="var(--color-primary-blue)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-primary-blue)', textTransform: 'uppercase' }}>HEADQUARTERS</div>
                <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-main)', marginTop: '0.15rem' }}>Mumbai, Maharashtra</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-body)', marginTop: '0.25rem', lineHeight: 1.5 }}>
                  Haware Intelligentia Business Park, Sector 24, Vashi, Navi Mumbai, Maharashtra 400703
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-body)', marginTop: '0.15rem' }}>+91 9860875134</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
              <Truck size={24} color="var(--color-primary-cyan)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-primary-cyan)', textTransform: 'uppercase' }}>OPERATIONAL OFFICE</div>
                <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-main)', marginTop: '0.15rem' }}>Kerala, India</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-body)', marginTop: '0.25rem', lineHeight: 1.5 }}>
                  Maithri, House No 5, TC 61/1359, CGS Nagar, Pappanamcode, Thiruvananthapuram, Kerala, 695002
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem' }}>
              <FileText size={18} color="var(--color-primary-green)" style={{ flexShrink: 0 }} />
              <span style={{ color: 'var(--text-main)', fontWeight: 700 }}>GSTIN: 32AADCZ1580A1ZS</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem' }}>
              <Mail size={18} color="var(--color-primary-cyan)" style={{ flexShrink: 0 }} />
              <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>zirdilialifescience@gmail.com</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem' }}>
              <PhoneCall size={18} color="var(--color-primary-green)" style={{ flexShrink: 0 }} />
              <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>+91 7907706086 / +91 7012853890</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PolicyModal({ isOpen, onClose, type = 'privacy' }) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        background: 'rgba(6, 17, 33, 0.75)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(0.5rem, 3vw, 1.5rem)',
        boxSizing: 'border-box',
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#FFFFFF',
          borderRadius: 'var(--radius-xl)',
          width: '100%',
          maxWidth: '650px',
          maxHeight: '85vh',
          overflowY: 'auto',
          overflowX: 'hidden',
          padding: 'clamp(1.5rem, 4vw, 2.5rem)',
          boxSizing: 'border-box',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', gap: '1rem' }}>
          <h3 style={{ fontSize: 'clamp(1.15rem, 4vw, 1.4rem)', fontWeight: 800, color: 'var(--text-main)', margin: 0, wordBreak: 'break-word' }}>
            {type === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
          </h3>
          <button onClick={onClose} style={{ background: 'rgba(0,0,0,0.05)', border: 'none', borderRadius: '50%', width: '36px', height: '36px', minWidth: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0 }}><X size={20} /></button>
        </div>

        <div style={{ fontSize: '0.95rem', color: 'var(--text-body)', lineHeight: 1.7 }}>
          <p style={{ marginBottom: '1rem' }}>
            Zirdilia Life Science (“Company”, “we”, “us”) is committed to protecting your privacy and ensuring responsible data governance. This document outlines general operational guidelines regarding communications and website use.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            1. Information Collection: We collect information provided voluntarily via our inquiry form or direct email (zirdilialifescience@gmail.com) for responding to partnership or product queries.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            2. Medical Disclaimer: Content on this site is provided for general informational and corporate overview purposes only and does not constitute medical advice or clinical prescribing instructions.
          </p>
          <p>
            3. Corporate Identification: Zirdilia Life Science, Headquartered in Kerala, India with Operational Office (CFA & Logistics Center), GSTIN: 32AADCZ1580A1ZS.
          </p>
        </div>
      </div>
    </div>
  );
}
