import React from 'react';
import { Pill, Activity, Stethoscope, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Products({ onOpenPortfolioModal }) {
  const categories = [
    {
      id: 'gastroenterology',
      title: 'Gastroenterology',
      description: 'Solutions supporting digestive health and gastrointestinal care.',
      image: '/pics/gastro-care.jpg',
      icon: <Activity size={24} color="var(--color-primary-blue)" />,
      badge: 'Therapeutic Focus',
      bullets: [
        'Digestive wellness & acid management care',
        'High compliance gastrointestinal formulations',
        'Formulated under rigorous quality standards',
      ],
    },
    {
      id: 'vitamins-nutrition',
      title: 'Vitamins & Nutrition',
      description: 'Nutritional formulations designed to support everyday health and wellbeing.',
      image: '/pics/vitamins-nutrition.jpg',
      icon: <HeartbeatIcon color="var(--color-primary-green)" />,
      badge: 'Nutritional Care',
      bullets: [
        'Essential micronutrient & multivitamin support',
        'Everyday vitality & wellness formulations',
        'Balanced support for active lifestyles',
      ],
    },
    {
      id: 'generic-pharmaceuticals',
      title: 'Generic Pharmaceuticals',
      description: 'Affordable pharmaceutical solutions focused on quality, accessibility, and reliability.',
      image: '/pics/pharma-solutions.jpg',
      icon: <Pill size={24} color="var(--color-primary-cyan)" />,
      badge: 'Essential Access',
      bullets: [
        'Broad therapeutic accessibility across regions',
        'Strict adherence to regulatory standards',
        'Cost-effective high quality generic formulations',
      ],
    },
  ];

  return (
    <section
      id="products"
      style={{
        padding: '6rem 0',
        background: 'linear-gradient(180deg, #F8FAFC 0%, #EFF6FF 100%)',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 4rem auto' }}>
          <div className="section-label" style={{ margin: '0 auto 1rem auto' }}>
            OUR PORTFOLIO
          </div>

          <h2 className="section-heading">
            Focused on essential healthcare needs.
          </h2>

          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Our current portfolio focuses on gastroenterology and nutritional formulations, addressing essential healthcare needs through reliable and quality-focused pharmaceutical solutions.
          </p>
        </div>

        {/* 3 Product Category Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.25rem',
            marginBottom: '3.5rem',
          }}
        >
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="glass-card"
              style={{
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                background: '#FFFFFF',
                border: '1px solid rgba(11, 77, 162, 0.1)',
                transition: 'transform 0.35s ease, box-shadow 0.35s ease',
              }}
            >
              {/* Image Preview Container */}
              <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                <img
                  src={cat.image}
                  alt={`Zirdilia ${cat.title}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s ease',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, transparent 40%, rgba(6, 17, 33, 0.6) 100%)',
                  }}
                />

                <span
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(8px)',
                    color: 'var(--color-primary-blue)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    padding: '0.35rem 0.85rem',
                    borderRadius: 'var(--radius-full)',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  {cat.badge}
                </span>
              </div>

              {/* Card Body */}
              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(11, 77, 162, 0.06)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {cat.icon}
                  </div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-main)' }}>
                    {cat.title}
                  </h3>
                </div>

                <p style={{ fontSize: '1rem', color: 'var(--text-body)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {cat.description}
                </p>

                {/* Bullets */}
                <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.5rem' }}>
                  {cat.bullets.map((b, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                      <CheckCircle2 size={16} color="var(--color-primary-green)" style={{ flexShrink: 0 }} />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => onOpenPortfolioModal(cat.id)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid rgba(11, 77, 162, 0.15)',
                    background: 'rgba(11, 77, 162, 0.04)',
                    color: 'var(--color-primary-blue)',
                    fontWeight: 600,
                    fontSize: '0.925rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    transition: 'all 0.25s ease',
                  }}
                >
                  Explore Details
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Global Portfolio CTA Button */}
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={() => onOpenPortfolioModal('all')}
            className="btn btn-primary"
            style={{ padding: '0.95rem 2.25rem', fontSize: '1rem' }}
          >
            View Product Portfolio
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

function HeartbeatIcon({ color = '#009E52' }) {
  return <Stethoscope size={24} color={color} />;
}
