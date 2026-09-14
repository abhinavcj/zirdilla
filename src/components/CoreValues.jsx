import React, { useState } from 'react';
import { Award, ShieldCheck, Eye, Clock, Leaf } from 'lucide-react';

export default function CoreValues() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const values = [
    {
      title: 'QUALITY',
      description: 'Excellence in every product and process.',
      icon: (color, size = 26) => <Award size={size} color={color} />,
      color: '#0B4DA2',
      accentBg: 'rgba(11, 77, 162, 0.08)',
    },
    {
      title: 'INTEGRITY',
      description: 'Ethical decisions that earn trust.',
      icon: (color, size = 26) => <ShieldCheck size={size} color={color} />,
      color: '#009BB0',
      accentBg: 'rgba(0, 155, 176, 0.08)',
    },
    {
      title: 'TRANSPARENCY',
      description: 'Open, honest, and accountable relationships.',
      icon: (color, size = 26) => <Eye size={size} color={color} />,
      color: '#009E52',
      accentBg: 'rgba(0, 158, 82, 0.08)',
    },
    {
      title: 'RELIABILITY',
      description: 'Consistent performance healthcare professionals depend on.',
      icon: (color, size = 26) => <Clock size={size} color={color} />,
      color: '#0284C7',
      accentBg: 'rgba(2, 132, 199, 0.08)',
    },
    {
      title: 'SUSTAINABILITY',
      description: 'Creating long-term value for society & healthcare.',
      icon: (color, size = 26) => <Leaf size={size} color={color} />,
      color: '#10B981',
      accentBg: 'rgba(16, 185, 129, 0.08)',
    },
  ];

  return (
    <section
      id="values"
      className="core-values-section"
      style={{
        padding: '5rem 0',
        background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Header */}
        <div className="values-header" style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem auto' }}>
          <div className="section-label" style={{ margin: '0 auto 0.75rem auto' }}>
            CORE VALUES
          </div>
          <h2 className="section-heading" style={{ marginBottom: '0.75rem' }}>What We Stand For</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Our core values guide every interaction, decision, and solution we deliver.
          </p>
        </div>

        {/* 5 Core Values Cards Grid */}
        <div className="values-grid">
          {values.map((val, idx) => {
            const isHovered = hoveredIndex === idx;
            const isLast = idx === values.length - 1;
            return (
              <div
                key={val.title}
                className={`value-card ${isLast ? 'last-card' : ''}`}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  background: isHovered ? '#FFFFFF' : 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(12px)',
                  padding: '1.5rem 1.25rem',
                  borderRadius: 'var(--radius-lg)',
                  border: isHovered
                    ? `1px solid ${val.color}`
                    : '1px solid rgba(11, 77, 162, 0.1)',
                  boxShadow: isHovered
                    ? `0 12px 25px -5px ${val.color}20`
                    : 'var(--shadow-sm)',
                  transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  position: 'relative',
                }}
              >
                {/* Icon Circle */}
                <div
                  className="value-icon"
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: 'var(--radius-md)',
                    background: isHovered ? val.color : val.accentBg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {val.icon(isHovered ? '#FFFFFF' : val.color, 22)}
                </div>

                <h3
                  style={{
                    fontSize: '1rem',
                    fontWeight: 800,
                    letterSpacing: '0.04em',
                    color: isHovered ? val.color : 'var(--text-main)',
                    marginBottom: '0.4rem',
                    transition: 'color 0.3s ease',
                  }}
                >
                  {val.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-body)',
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  {val.description}
                </p>

                {/* Bottom Accent Indicator */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: '1.25rem',
                    right: '1.25rem',
                    height: '2.5px',
                    background: val.color,
                    borderRadius: '2px 2px 0 0',
                    opacity: isHovered ? 1 : 0,
                    transition: 'opacity 0.3s ease',
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Grid CSS Rules */}
      <style>{`
        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
          gap: 1.25rem;
        }

        @media (max-width: 768px) {
          .core-values-section {
            padding: 3.5rem 0 !important;
          }
          .values-header {
            margin-bottom: 2rem !important;
          }
          .values-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.85rem;
          }
          .value-card {
            padding: 1.1rem 0.9rem !important;
          }
          .value-card.last-card {
            grid-column: span 2;
          }
          .value-icon {
            width: 38px !important;
            height: 38px !important;
            margin-bottom: 0.65rem !important;
          }
        }

        @media (max-width: 400px) {
          .values-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.65rem;
          }
          .value-card {
            padding: 0.9rem 0.75rem !important;
          }
        }
      `}</style>
    </section>
  );
}
