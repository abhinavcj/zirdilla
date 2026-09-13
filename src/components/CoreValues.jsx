import React, { useState } from 'react';
import { Award, ShieldCheck, Eye, Clock, Leaf } from 'lucide-react';

export default function CoreValues() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const values = [
    {
      title: 'QUALITY',
      description: 'Excellence in every product and process.',
      icon: (color) => <Award size={30} color={color} />,
      color: '#0B4DA2',
      accentBg: 'rgba(11, 77, 162, 0.08)',
    },
    {
      title: 'INTEGRITY',
      description: 'Ethical decisions that earn trust.',
      icon: (color) => <ShieldCheck size={30} color={color} />,
      color: '#009BB0',
      accentBg: 'rgba(0, 155, 176, 0.08)',
    },
    {
      title: 'TRANSPARENCY',
      description: 'Open, honest, and accountable relationships.',
      icon: (color) => <Eye size={30} color={color} />,
      color: '#009E52',
      accentBg: 'rgba(0, 158, 82, 0.08)',
    },
    {
      title: 'RELIABILITY',
      description: 'Consistent performance healthcare professionals can depend on.',
      icon: (color) => <Clock size={30} color={color} />,
      color: '#0284C7',
      accentBg: 'rgba(2, 132, 199, 0.08)',
    },
    {
      title: 'SUSTAINABILITY',
      description: 'Creating long-term value for society, healthcare, and the environment.',
      icon: (color) => <Leaf size={30} color={color} />,
      color: '#10B981',
      accentBg: 'rgba(16, 185, 129, 0.08)',
    },
  ];

  return (
    <section
      id="values"
      style={{
        padding: '6rem 0',
        background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 4rem auto' }}>
          <div className="section-label" style={{ margin: '0 auto 1rem auto' }}>
            CORE VALUES
          </div>
          <h2 className="section-heading">What We Stand For</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Our core values guide every interaction, decision, and solution we deliver to the healthcare ecosystem.
          </p>
        </div>

        {/* 5 Core Values Interactive Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {values.map((val, idx) => {
            const isHovered = hoveredIndex === idx;
            return (
              <div
                key={val.title}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  background: isHovered ? '#FFFFFF' : 'rgba(255, 255, 255, 0.85)',
                  backdropFilter: 'blur(12px)',
                  padding: '2.25rem 1.75rem',
                  borderRadius: 'var(--radius-xl)',
                  border: isHovered
                    ? `1px solid ${val.color}`
                    : '1px solid rgba(11, 77, 162, 0.1)',
                  boxShadow: isHovered
                    ? `0 20px 35px -10px ${val.color}25`
                    : 'var(--shadow-sm)',
                  transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  position: 'relative',
                }}
              >
                {/* Icon Circle */}
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: 'var(--radius-md)',
                    background: isHovered ? val.color : val.accentBg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                    transition: 'all 0.35s ease',
                    transform: isHovered ? 'scale(1.08) rotate(3deg)' : 'scale(1)',
                  }}
                >
                  {val.icon(isHovered ? '#FFFFFF' : val.color)}
                </div>

                <h3
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 800,
                    letterSpacing: '0.04em',
                    color: isHovered ? val.color : 'var(--text-main)',
                    marginBottom: '0.75rem',
                    transition: 'color 0.3s ease',
                  }}
                >
                  {val.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.95rem',
                    color: 'var(--text-body)',
                    lineHeight: 1.6,
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
                    left: '1.75rem',
                    right: '1.75rem',
                    height: '3px',
                    background: val.color,
                    borderRadius: '3px 3px 0 0',
                    opacity: isHovered ? 1 : 0,
                    transition: 'opacity 0.3s ease',
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
