import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles, Award, HeartPulse } from 'lucide-react';
import MolecularCanvas from './MolecularCanvas';

export default function Hero({ onOpenProductsModal, onOpenAboutModal }) {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offsetTop = el.getBoundingClientRect().top + window.pageYOffset - 90;
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
        paddingTop: '7rem',
        paddingBottom: '5rem',
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F4F8FC 60%, #EBF3FA 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Background Molecular Particles Canvas */}
      <MolecularCanvas density={40} speed={0.45} opacity={0.65} />

      {/* Decorative Gradient Orbs */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '550px',
          height: '550px',
          background: 'radial-gradient(circle, rgba(0, 155, 176, 0.15) 0%, rgba(11, 77, 162, 0.05) 50%, rgba(255, 255, 255, 0) 70%)',
          borderRadius: '50%',
          filter: 'blur(50px)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '5%',
          left: '-5%',
          width: '450px',
          height: '450px',
          background: 'radial-gradient(circle, rgba(0, 158, 82, 0.12) 0%, rgba(0, 155, 176, 0.04) 50%, rgba(255, 255, 255, 0) 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
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
                fontSize: 'clamp(2.5rem, 5.2vw, 3.8rem)',
                fontWeight: 800,
                color: 'var(--text-main)',
                lineHeight: 1.12,
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
                fontSize: 'clamp(1.2rem, 2.2vw, 1.45rem)',
                fontWeight: 600,
                color: 'var(--color-primary-blue)',
                marginBottom: '1.25rem',
                lineHeight: 1.4,
              }}
            >
              Trusted pharmaceutical solutions for a healthier tomorrow.
            </h2>

            {/* Body Copy */}
            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-body)',
                lineHeight: 1.7,
                marginBottom: '2.25rem',
              }}
            >
              Zirdilia Life Science is committed to making high-quality, affordable healthcare more accessible through trusted generic pharmaceuticals, nutritional formulations, and reliable healthcare partnerships.
            </p>

            {/* CTA Action Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                alignItems: 'center',
                marginBottom: '2.5rem',
              }}
            >
              <button
                onClick={() => {
                  handleScrollTo('products');
                  if (onOpenProductsModal) onOpenProductsModal();
                }}
                className="btn btn-primary"
                style={{ padding: '0.95rem 2rem', fontSize: '1rem' }}
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
                style={{ padding: '0.95rem 2rem', fontSize: '1rem' }}
              >
                Discover Zirdilia
              </button>
            </div>

            {/* Trust Statement */}
            <div
              style={{
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(11, 77, 162, 0.12)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                flexWrap: 'wrap',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.875rem',
                  fontWeight: '700',
                  color: 'var(--text-main)',
                  letterSpacing: '0.03em',
                  textTransform: 'uppercase',
                }}
              >
                <ShieldCheck size={18} color="var(--color-primary-green)" />
                Quality <span style={{ color: 'var(--color-primary-cyan)', margin: '0 0.2rem' }}>•</span>
                Integrity <span style={{ color: 'var(--color-primary-cyan)', margin: '0 0.2rem' }}>•</span>
                Reliability <span style={{ color: 'var(--color-primary-cyan)', margin: '0 0.2rem' }}>•</span>
                Transparency
              </div>
            </div>
          </div>

          {/* Right Column Visual Graphic Card */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
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
                padding: '0.75rem',
                background: 'rgba(255, 255, 255, 0.9)',
                boxShadow: '0 25px 60px -15px rgba(11, 77, 162, 0.2)',
              }}
            >
              {/* Hero Image Container */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '420px',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                }}
              >
                <img
                  src="/pics/hero.jpg"
                  alt="Zirdilia Life Science Laboratory Research"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.7s ease',
                  }}
                />

                {/* Gradient Overlay for aesthetic depth */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(11, 77, 162, 0.15) 0%, rgba(6, 17, 33, 0.4) 100%)',
                  }}
                />

                {/* Floating Floating Stat Badge 1 */}
                <div
                  style={{
                    position: 'absolute',
                    top: '1.25rem',
                    left: '1.25rem',
                    background: 'rgba(255, 255, 255, 0.92)',
                    backdropFilter: 'blur(12px)',
                    padding: '0.75rem 1.25rem',
                    borderRadius: 'var(--radius-md)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.12)',
                    border: '1px solid rgba(255, 255, 255, 0.8)',
                  }}
                >
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      background: 'rgba(0, 158, 82, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-primary-green)',
                    }}
                  >
                    <Award size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase' }}>
                      Standard
                    </div>
                    <div style={{ fontSize: '0.95rem', color: 'var(--text-main)', fontWeight: '700' }}>
                      Quality Focused
                    </div>
                  </div>
                </div>

                {/* Floating Stat Badge 2 */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1.25rem',
                    right: '1.25rem',
                    background: 'rgba(255, 255, 255, 0.92)',
                    backdropFilter: 'blur(12px)',
                    padding: '0.75rem 1.25rem',
                    borderRadius: 'var(--radius-md)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.12)',
                    border: '1px solid rgba(255, 255, 255, 0.8)',
                  }}
                >
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      background: 'rgba(11, 77, 162, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-primary-blue)',
                    }}
                  >
                    <HeartPulse size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase' }}>
                      Impact
                    </div>
                    <div style={{ fontSize: '0.95rem', color: 'var(--text-main)', fontWeight: '700' }}>
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
