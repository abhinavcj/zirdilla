import React from 'react';
import { TrendingUp, Shield, Award, Globe, Layers } from 'lucide-react';

export default function QualityFuture() {
  const roadmapSteps = [
    {
      phase: 'Today',
      title: 'Focused Portfolio',
      subtitle: 'Focused pharmaceutical portfolio',
      description: 'Gastroenterology, vitamins, and essential generic formulations delivering immediate healthcare value.',
      icon: <Layers size={22} color="var(--color-primary-blue)" />,
      badgeColor: 'var(--color-primary-blue)',
    },
    {
      phase: 'Growth',
      title: 'Therapeutic Expansion',
      subtitle: 'Expanding therapeutic offerings',
      description: 'Broadening reach into new therapeutic categories and enhanced formulations.',
      icon: <TrendingUp size={22} color="var(--color-primary-cyan)" />,
      badgeColor: 'var(--color-primary-cyan)',
    },
    {
      phase: 'Excellence',
      title: 'Quality Systems',
      subtitle: 'Strengthening quality systems',
      description: 'Targeting alignment with global regulatory frameworks (WHO-GMP, ISO, CDSCO, FSSAI, US FDA targets).',
      icon: <Award size={22} color="var(--color-primary-green)" />,
      badgeColor: 'var(--color-primary-green)',
    },
    {
      phase: 'Global',
      title: 'International Reach',
      subtitle: 'Building international healthcare partnerships',
      description: 'Forming strategic cross-border healthcare and distribution alliances across emerging and global markets.',
      icon: <Globe size={22} color="#0284C7" />,
      badgeColor: '#0284C7',
    },
  ];

  return (
    <section
      id="quality-future"
      style={{
        padding: '6.5rem 0',
        background: '#FFFFFF',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 4rem auto' }}>
          <div className="section-label" style={{ margin: '0 auto 1rem auto' }}>
            STRATEGIC ROADMAP
          </div>

          <h2 className="section-heading">Growing with Purpose</h2>

          <p className="section-subtitle" style={{ margin: '0 auto 1.5rem auto' }}>
            As we grow, we aim to expand our therapeutic offerings while pursuing globally recognized quality certifications and regulatory standards, including WHO-GMP, GMP, ISO 9001, ISO 13485, CDSCO, FSSAI, and US FDA compliance where applicable.
          </p>

          {/* Compliance Disclosure Callout */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.6rem 1.25rem',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(11, 77, 162, 0.04)',
              border: '1px solid rgba(11, 77, 162, 0.12)',
              fontSize: '0.875rem',
              color: 'var(--text-muted)',
              fontWeight: 600,
            }}
          >
            <Shield size={16} color="var(--color-primary-blue)" />
            Note: Regulatory standards listed represent our strategic compliance roadmap and future targets.
          </div>
        </div>

        {/* Timeline Horizontal Progression */}
        <div
          style={{
            position: 'relative',
            marginTop: '2rem',
          }}
        >
          {/* Connector Line for Desktop */}
          <div
            className="timeline-connector"
            style={{
              position: 'absolute',
              top: '40px',
              left: '10%',
              right: '10%',
              height: '3px',
              background: 'linear-gradient(90deg, #0B4DA2 0%, #009BB0 50%, #009E52 100%)',
              zIndex: 1,
            }}
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '2rem',
              position: 'relative',
              zIndex: 2,
            }}
          >
            {roadmapSteps.map((step) => (
              <div
                key={step.phase}
                className="glass-card"
                style={{
                  padding: '2.25rem 1.5rem',
                  borderRadius: 'var(--radius-xl)',
                  background: '#FFFFFF',
                  border: '1px solid rgba(11, 77, 162, 0.12)',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                }}
              >
                {/* Node Pill */}
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: '#FFFFFF',
                    border: `2px solid ${step.badgeColor}`,
                    color: step.badgeColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                  }}
                >
                  {step.icon}
                </div>

                {/* Phase Tag */}
                <span
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 800,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: step.badgeColor,
                    marginBottom: '0.4rem',
                  }}
                >
                  {step.phase}
                </span>

                <h3
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: 'var(--text-main)',
                    marginBottom: '0.3rem',
                  }}
                >
                  {step.title}
                </h3>

                <div
                  style={{
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: 'var(--color-primary-blue)',
                    marginBottom: '0.75rem',
                  }}
                >
                  {step.subtitle}
                </div>

                <p
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.55,
                    margin: 0,
                  }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
