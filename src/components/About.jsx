import React from 'react';
import { ShieldCheck, Handshake, HeartHandshake, MapPin, Building2, ArrowRight } from 'lucide-react';

export default function About({ onOpenAboutModal }) {
  const highlights = [
    {
      title: 'Quality First',
      description: 'High-quality pharmaceutical solutions designed around stringent standards.',
      icon: <ShieldCheck size={22} color="var(--color-primary-blue)" />,
      bg: 'rgba(11, 77, 162, 0.08)',
    },
    {
      title: 'Trusted Partnerships',
      description: 'Building lasting relationships with healthcare professionals, hospitals, distributors, and global partners.',
      icon: <Handshake size={22} color="var(--color-primary-cyan)" />,
      bg: 'rgba(0, 155, 176, 0.08)',
    },
    {
      title: 'Affordable Healthcare',
      description: 'Working to make essential healthcare solutions more accessible.',
      icon: <HeartHandshake size={22} color="var(--color-primary-green)" />,
      bg: 'rgba(0, 158, 82, 0.08)',
    },
  ];

  return (
    <section
      id="about"
      style={{
        padding: '5rem 0',
        background: '#FFFFFF',
        position: 'relative',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
            marginBottom: '3rem',
          }}
        >
          {/* Left Column Image & Location Badges */}
          <div style={{ position: 'relative', width: '100%' }}>
            <div
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)',
                border: '1px solid rgba(11, 77, 162, 0.1)',
              }}
            >
              <img
                src="/pics/about-lab.jpg"
                alt="Zirdilia Life Science Laboratory & Operations"
                style={{
                  width: '100%',
                  height: 'clamp(280px, 40vh, 420px)',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 40%, rgba(6, 17, 33, 0.6) 100%)',
                }}
              />

              {/* Office Location Badge Overlay */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '1rem',
                  left: '1rem',
                  right: '1rem',
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(16px)',
                  padding: '1rem',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.12)',
                  border: '1px solid rgba(255, 255, 255, 0.8)',
                  flexWrap: 'wrap',
                  gap: '0.6rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Building2 size={18} color="var(--color-primary-blue)" style={{ flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: '0.675rem', color: 'var(--text-muted)', fontWeight: '600' }}>Headquarters</div>
                    <div style={{ fontSize: '0.875rem', fontWeight: '700', color: 'var(--text-main)' }}>Mumbai, India</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <MapPin size={18} color="var(--color-primary-cyan)" style={{ flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: '0.675rem', color: 'var(--text-muted)', fontWeight: '600' }}>Operational Office</div>
                    <div style={{ fontSize: '0.875rem', fontWeight: '700', color: 'var(--text-main)' }}>Kerala, India</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Text Content */}
          <div>
            <div className="section-label">WHO WE ARE</div>

            <h2 className="section-heading">
              Healthcare driven by science.{' '}
              <span className="text-gradient">Powered by trust.</span>
            </h2>

            <p style={{ fontSize: '1rem', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '1.1rem' }}>
              At Zirdilia Life Science, we believe that every individual deserves access to safe, effective, and affordable healthcare. Established with the vision of improving lives through science and innovation, we specialize in the marketing and distribution of high-quality generic pharmaceutical products.
            </p>

            <p style={{ fontSize: '1rem', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '1.75rem' }}>
              Based in Mumbai with our operational office in Kerala, we work closely with healthcare professionals, hospitals, distributors, and international partners to ensure reliable medicines reach the people who need them most.
            </p>

            <button
              onClick={onOpenAboutModal}
              className="btn btn-primary"
              style={{ padding: '0.85rem 1.6rem' }}
            >
              Learn More About Us
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* 3 Highlight Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
            marginTop: '1.5rem',
          }}
        >
          {highlights.map((card, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '1.5rem',
                borderRadius: 'var(--radius-lg)',
                transition: 'all 0.35s ease',
              }}
            >
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: 'var(--radius-md)',
                  background: card.bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem',
                }}
              >
                {card.icon}
              </div>

              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-main)' }}>
                {card.title}
              </h3>

              <p style={{ fontSize: '0.925rem', color: 'var(--text-body)', lineHeight: 1.55 }}>
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
