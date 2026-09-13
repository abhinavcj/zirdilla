import React from 'react';
import { ShieldCheck, Handshake, HeartHandshake, MapPin, Building2, ArrowRight } from 'lucide-react';

export default function About({ onOpenAboutModal }) {
  const highlights = [
    {
      title: 'Quality First',
      description: 'High-quality pharmaceutical solutions designed around stringent standards.',
      icon: <ShieldCheck size={24} color="var(--color-primary-blue)" />,
      bg: 'rgba(11, 77, 162, 0.08)',
    },
    {
      title: 'Trusted Partnerships',
      description: 'Building lasting relationships with healthcare professionals, hospitals, distributors, and global partners.',
      icon: <Handshake size={24} color="var(--color-primary-cyan)" />,
      bg: 'rgba(0, 155, 176, 0.08)',
    },
    {
      title: 'Affordable Healthcare',
      description: 'Working to make essential healthcare solutions more accessible.',
      icon: <HeartHandshake size={24} color="var(--color-primary-green)" />,
      bg: 'rgba(0, 158, 82, 0.08)',
    },
  ];

  return (
    <section
      id="about"
      style={{
        padding: '6rem 0',
        background: '#FFFFFF',
        position: 'relative',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
            marginBottom: '4rem',
          }}
        >
          {/* Left Column Image & Location Badges */}
          <div style={{ position: 'relative' }}>
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
                  height: '460px',
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
                  bottom: '1.5rem',
                  left: '1.5rem',
                  right: '1.5rem',
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(16px)',
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  boxShadow: '0 15px 30px rgba(0,0,0,0.15)',
                  border: '1px solid rgba(255, 255, 255, 0.8)',
                  flexWrap: 'wrap',
                  gap: '0.75rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <Building2 size={20} color="var(--color-primary-blue)" />
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600' }}>Headquarters</div>
                    <div style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--text-main)' }}>Mumbai, India</div>
                  </div>
                </div>

                <div style={{ height: '30px', width: '1px', background: 'rgba(0,0,0,0.1)' }} />

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <MapPin size={20} color="var(--color-primary-cyan)" />
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600' }}>Operational Office</div>
                    <div style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--text-main)' }}>Kerala, India</div>
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

            <p style={{ fontSize: '1.08rem', color: 'var(--text-body)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
              At Zirdilia Life Science, we believe that every individual deserves access to safe, effective, and affordable healthcare. Established with the vision of improving lives through science and innovation, we specialize in the marketing and distribution of high-quality generic pharmaceutical products.
            </p>

            <p style={{ fontSize: '1.08rem', color: 'var(--text-body)', lineHeight: 1.75, marginBottom: '2rem' }}>
              Based in Mumbai with our operational office in Kerala, we work closely with healthcare professionals, hospitals, distributors, and international partners to ensure reliable medicines reach the people who need them most.
            </p>

            <button
              onClick={onOpenAboutModal}
              className="btn btn-primary"
              style={{ padding: '0.85rem 1.8rem' }}
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.75rem',
            marginTop: '2rem',
          }}
        >
          {highlights.map((card, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '2rem',
                borderRadius: 'var(--radius-lg)',
                transition: 'all 0.35s ease',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: 'var(--radius-md)',
                  background: card.bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                }}
              >
                {card.icon}
              </div>

              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.6rem', color: 'var(--text-main)' }}>
                {card.title}
              </h3>

              <p style={{ fontSize: '0.975rem', color: 'var(--text-body)', lineHeight: 1.6 }}>
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
