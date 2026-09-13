import React from 'react';
import { Globe2, Sparkles, ShieldCheck } from 'lucide-react';
import MolecularCanvas from './MolecularCanvas';

export default function BrandPositioning() {
  return (
    <section
      style={{
        position: 'relative',
        padding: '7rem 0',
        background: 'var(--gradient-dark-banner)',
        color: '#FFFFFF',
        overflow: 'hidden',
      }}
    >
      {/* Background canvas for scientific nodes */}
      <MolecularCanvas density={45} speed={0.4} opacity={0.7} />

      {/* Decorative Glow Orbs */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(0, 155, 176, 0.25) 0%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '10%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(0, 158, 82, 0.2) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
          }}
        >
          {/* Left Column Text Content */}
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.4rem 1rem',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#38BDF8',
                fontSize: '0.8125rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '1.5rem',
              }}
            >
              <Globe2 size={16} />
              GLOBAL HEALTHCARE AMBITION
            </div>

            <h2
              style={{
                fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)',
                fontWeight: 800,
                color: '#FFFFFF',
                lineHeight: 1.15,
                marginBottom: '1.5rem',
                letterSpacing: '-0.025em',
              }}
            >
              Better healthcare.{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg, #38BDF8 0%, #34D399 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Greater accessibility.
              </span>{' '}
              A brighter future.
            </h2>

            <p
              style={{
                fontSize: '1.15rem',
                color: 'rgba(255, 255, 255, 0.85)',
                lineHeight: 1.8,
                marginBottom: '2.5rem',
              }}
            >
              Zirdilia Life Science delivers trusted, affordable pharmaceutical solutions that combine scientific excellence with compassionate care, making quality healthcare more accessible while improving lives across communities worldwide.
            </p>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '2rem',
                flexWrap: 'wrap',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <ShieldCheck size={22} color="#34D399" />
                <span style={{ fontSize: '0.95rem', fontWeight: '600', color: '#E2E8F0' }}>
                  Scientific Rigor
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Sparkles size={22} color="#38BDF8" />
                <span style={{ fontSize: '0.95rem', fontWeight: '600', color: '#E2E8F0' }}>
                  Ethical Operations
                </span>
              </div>
            </div>
          </div>

          {/* Right Column Image Visual */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '500px',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)',
              }}
            >
              <img
                src="/pics/india-global.jpg"
                alt="Zirdilia Global Expansion & India Healthcare Network"
                style={{
                  width: '100%',
                  height: '380px',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(6, 17, 33, 0.2) 0%, rgba(6, 17, 33, 0.7) 100%)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '1.5rem',
                  left: '1.5rem',
                  right: '1.5rem',
                  background: 'rgba(15, 31, 56, 0.85)',
                  backdropFilter: 'blur(12px)',
                  padding: '1rem 1.25rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                }}
              >
                <div
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background: '#34D399',
                    boxShadow: '0 0 10px #34D399',
                  }}
                />
                <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#FFFFFF' }}>
                  Connecting healthcare networks across India and expanding global horizons
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
