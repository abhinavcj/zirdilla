import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles, Award, HeartPulse } from 'lucide-react';
import MolecularCanvas from './MolecularCanvas';

export default function Hero({ onOpenProductsModal, onOpenAboutModal }) {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offsetTop = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '6.5rem',
        paddingBottom: '4rem',
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F4F8FC 60%, #EBF3FA 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Background Molecular Particles Canvas */}
      <MolecularCanvas density={35} speed={0.4} opacity={0.6} />

      {/* Decorative Gradient Orbs */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '450px',
          height: '450px',
          background: 'radial-gradient(circle, rgba(0, 155, 176, 0.15) 0%, rgba(11, 77, 162, 0.05) 50%, rgba(255, 255, 255, 0) 70%)',
          borderRadius: '50%',
          filter: 'blur(50px)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center',
          }}
        >
          {/* Left Column Text Content */}
          <div style={{ maxWidth: '640px' }} className="animate-slide-up">
            {/* Pill Tag */}
            <div className="section-label">
              <Sparkles size={14} color="var(--color-primary-cyan)" />
              Pioneering Healthcare Solutions
            </div>

            {/* Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.1rem, 5.2vw, 3.8rem)',
                fontWeight: 800,
                color: 'var(--text-main)',
                lineHeight: 1.15,
                marginBottom: '1.25rem',
                letterSpacing: '-0.03em',
              }}
            >
              Empowering Health,{' '}
              <span className="text-gradient" style={{ display: 'inline-block' }}>
                Every Day.
              </span>
            </h1>

            {/* Supporting Headline */}
            <h2
              style={{
                fontSize: 'clamp(1.1rem, 2.2vw, 1.4rem)',
                fontWeight: 600,
                color: 'var(--color-primary-blue)',
                marginBottom: '1.1rem',
                lineHeight: 1.4,
              }}
            >
              Trusted pharmaceutical solutions for a healthier tomorrow.
            </h2>

            {/* Body Copy */}
            <p
              style={{
                fontSize: '1rem',
                color: 'var(--text-body)',
                lineHeight: 1.65,
                marginBottom: '2rem',
              }}
            >
              Zirdilia Life Science is committed to making high-quality, affordable healthcare more accessible through trusted generic pharmaceuticals, nutritional formulations, and reliable healthcare partnerships.
            </p>

            {/* CTA Action Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.85rem',
                alignItems: 'center',
                marginBottom: '2.25rem',
              }}
            >
              <button
                onClick={() => {
                  handleScrollTo('products');
                  if (onOpenProductsModal) onOpenProductsModal();
                }}
                className="btn btn-primary"
                style={{ padding: '0.9rem 1.8rem' }}
              >
                Explore Our Products
                <ArrowRight size={18} />
              </button>

              <button
                onClick={() => {
                  handleScrollTo('about');
                  if (onOpenAboutModal) onOpenAboutModal();
                }}
                className="btn btn-secondary"
                style={{ padding: '0.9rem 1.8rem' }}
              >
                Discover Zirdilia
              </button>
            </div>

            {/* Trust Statement */}
            <div
              style={{
                paddingTop: '1.25rem',
                borderTop: '1px solid rgba(11, 77, 162, 0.12)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.8125rem',
                  fontWeight: '700',
                  color: 'var(--text-main)',
                  letterSpacing: '0.02em',
                  textTransform: 'uppercase',
                  flexWrap: 'wrap',
                }}
              >
                <ShieldCheck size={18} color="var(--color-primary-green)" style={{ flexShrink: 0 }} />
                <span>Quality</span> <span style={{ color: 'var(--color-primary-cyan)' }}>•</span>
                <span>Integrity</span> <span style={{ color: 'var(--color-primary-cyan)' }}>•</span>
                <span>Reliability</span> <span style={{ color: 'var(--color-primary-cyan)' }}>•</span>
                <span>Transparency</span>
              </div>
            </div>
          </div>

          {/* Right Column Visual Graphic Card */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <div
              className="glass-card"
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '540px',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                padding: '0.6rem',
                background: 'rgba(255, 255, 255, 0.9)',
                boxShadow: '0 20px 50px -15px rgba(11, 77, 162, 0.18)',
              }}
            >
              {/* Hero Image Container */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: 'clamp(280px, 45vh, 420px)',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                }}
              >
                <img
                  src="/pics/hero1.jpg"
                  alt="Zirdilia Life Science Laboratory Research"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />

                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(11, 77, 162, 0.1) 0%, rgba(6, 17, 33, 0.45) 100%)',
                  }}
                />

                {/* Floating Stat Badge 1 */}
                <div
                  style={{
                    position: 'absolute',
                    top: '0.85rem',
                    left: '0.85rem',
                    background: 'rgba(255, 255, 255, 0.94)',
                    backdropFilter: 'blur(12px)',
                    padding: '0.5rem 0.85rem',
                    borderRadius: 'var(--radius-md)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.12)',
                    border: '1px solid rgba(255, 255, 255, 0.8)',
                  }}
                >
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: 'rgba(0, 158, 82, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-primary-green)',
                      flexShrink: 0,
                    }}
                  >
                    <Award size={16} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.675rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase' }}>
                      Standard
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-main)', fontWeight: '700' }}>
                      Quality Focused
                    </div>
                  </div>
                </div>

                {/* Floating Stat Badge 2 */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '0.85rem',
                    right: '0.85rem',
                    background: 'rgba(255, 255, 255, 0.94)',
                    backdropFilter: 'blur(12px)',
                    padding: '0.5rem 0.85rem',
                    borderRadius: 'var(--radius-md)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.12)',
                    border: '1px solid rgba(255, 255, 255, 0.8)',
                  }}
                >
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: 'rgba(11, 77, 162, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-primary-blue)',
                      flexShrink: 0,
                    }}
                  >
                    <HeartPulse size={16} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.675rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase' }}>
                      Impact
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-main)', fontWeight: '700' }}>
                      Patient Centric
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
