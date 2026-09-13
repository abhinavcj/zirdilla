import React from 'react';
import { Eye, Target, Compass, Sparkles } from 'lucide-react';

export default function VisionMission() {
  const missionPoints = [
    {
      num: '01',
      title: 'Deliver high-quality and affordable generic medicines.',
    },
    {
      num: '02',
      title: 'Improve healthcare accessibility across India and global markets.',
    },
    {
      num: '03',
      title: 'Build enduring partnerships with healthcare professionals and institutions.',
    },
    {
      num: '04',
      title: 'Uphold the highest standards of quality, ethics, and transparency.',
    },
    {
      num: '05',
      title: 'Drive sustainable growth through continuous innovation and operational excellence.',
    },
  ];

  return (
    <section
      id="vision-mission"
      style={{
        padding: '6.5rem 0',
        background: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        {/* Section Tag Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-label" style={{ margin: '0 auto 1rem auto' }}>
            PURPOSE & DIRECTION
          </div>
          <h2 className="section-heading">
            Guided by purpose.{' '}
            <span className="text-gradient">Driven by impact.</span>
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'stretch',
          }}
        >
          {/* VISION CARD - Left Box */}
          <div
            className="glass-card"
            style={{
              padding: '3rem 2.5rem',
              borderRadius: 'var(--radius-xl)',
              background: 'linear-gradient(135deg, rgba(11, 77, 162, 0.05) 0%, rgba(0, 155, 176, 0.08) 100%)',
              border: '1px solid rgba(0, 155, 176, 0.2)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Background Decorative Graphic */}
            <div
              style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                opacity: 0.06,
                pointerEvents: 'none',
              }}
            >
              <Eye size={220} color="var(--color-primary-blue)" />
            </div>

            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.4rem 1rem',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(11, 77, 162, 0.1)',
                  color: 'var(--color-primary-blue)',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  marginBottom: '2rem',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}
              >
                <Compass size={16} />
                OUR VISION
              </div>

              <h3
                style={{
                  fontSize: 'clamp(1.5rem, 2.5vw, 1.85rem)',
                  fontWeight: 800,
                  color: 'var(--text-main)',
                  lineHeight: 1.4,
                  marginBottom: '1.5rem',
                }}
              >
                “To illuminate lives by making quality healthcare accessible through innovative, affordable, and trusted pharmaceutical solutions, becoming a globally respected life science company that transforms healthcare with integrity and excellence.”
              </h3>
            </div>

            <div
              style={{
                paddingTop: '2rem',
                borderTop: '1px solid rgba(11, 77, 162, 0.12)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                color: 'var(--color-primary-blue)',
                fontWeight: 600,
                fontSize: '0.925rem',
              }}
            >
              <Sparkles size={18} color="var(--color-primary-cyan)" />
              Setting global benchmarks for accessible life sciences.
            </div>
          </div>

          {/* MISSION CARD - Right Box */}
          <div
            className="glass-card"
            style={{
              padding: '3rem 2.5rem',
              borderRadius: 'var(--radius-xl)',
              background: '#FFFFFF',
              border: '1px solid rgba(11, 77, 162, 0.12)',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.4rem 1rem',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(0, 158, 82, 0.1)',
                color: 'var(--color-primary-green)',
                fontWeight: 700,
                fontSize: '0.85rem',
                marginBottom: '2rem',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}
            >
              <Target size={16} />
              OUR MISSION
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {missionPoints.map((item) => (
                <div
                  key={item.num}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1.25rem',
                    padding: '1rem 1.25rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-secondary)',
                    border: '1px solid rgba(0,0,0,0.04)',
                    transition: 'transform 0.25s ease, background 0.25s ease',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'monospace',
                      fontSize: '1.1rem',
                      fontWeight: 800,
                      color: 'var(--color-primary-cyan)',
                      background: 'rgba(0, 155, 176, 0.1)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: 'var(--radius-sm)',
                      flexShrink: 0,
                    }}
                  >
                    {item.num}
                  </span>
                  <p
                    style={{
                      fontSize: '0.985rem',
                      fontWeight: 600,
                      color: 'var(--text-main)',
                      lineHeight: 1.5,
                      margin: 0,
                    }}
                  >
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
