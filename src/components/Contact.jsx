import React, { useState } from 'react';
import { Send, MapPin, Building2, Mail, PhoneCall, CheckCircle2, Handshake, FileText, Truck } from 'lucide-react';

export default function Contact({ onSubmitSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    inquiryType: 'Product Enquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      if (onSubmitSuccess) onSubmitSuccess(formData);
    }, 800);
  };

  return (
    <section
      id="contact"
      style={{
        padding: '6.5rem 0',
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F1F5F9 100%)',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 4rem auto' }}>
          <div className="section-label" style={{ margin: '0 auto 1rem auto' }}>
            CONNECT WITH US
          </div>

          <h2 className="section-heading">
            Let’s build a healthier future together.
          </h2>

          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Whether you are a healthcare professional, hospital, distributor, business partner, or international organization, we welcome opportunities to connect and create meaningful healthcare partnerships.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'start',
          }}
        >
          {/* Left Column Contact Information & Locations */}
          <div>
            <div
              className="glass-card"
              style={{
                padding: '2.25rem',
                borderRadius: 'var(--radius-xl)',
                background: '#FFFFFF',
                border: '1px solid rgba(11, 77, 162, 0.12)',
                boxShadow: 'var(--shadow-md)',
                marginBottom: '2rem',
              }}
            >
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '1.5rem' }}>
                Corporate Offices & Location
              </h3>

              {/* Headquarters & Address */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  paddingBottom: '1.25rem',
                  borderBottom: '1px solid rgba(0,0,0,0.06)',
                  marginBottom: '1.25rem',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(11, 77, 162, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Building2 size={22} color="var(--color-primary-blue)" />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-primary-blue)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Headquarters
                  </div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-main)', marginTop: '0.15rem', marginBottom: '0.3rem' }}>
                    Mumbai, Maharashtra
                  </div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-body)', lineHeight: 1.55 }}>
                    Haware Intelligentia Business Park, Sector 24, Vashi, Navi Mumbai, Maharashtra 400703
                  </div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-body)', marginTop: '0.25rem' }}>
                    +91 9860875134
                  </div>
                </div>
              </div>

              {/* Operational Office */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  paddingBottom: '1.25rem',
                  borderBottom: '1px solid rgba(0,0,0,0.06)',
                  marginBottom: '1.25rem',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(0, 155, 176, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Truck size={22} color="var(--color-primary-cyan)" />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-primary-cyan)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Operational Office
                  </div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-main)', marginTop: '0.15rem', marginBottom: '0.3rem' }}>
                    Kerala, India
                  </div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-body)', lineHeight: 1.55 }}>
                    Maithri, House No 5, TC 61/1359, CGS Nagar, Pappanamcode, Thiruvananthapuram, Kerala, 695002
                  </div>
                </div>
              </div>

              {/* GSTIN Details */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  padding: '0.85rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(11, 77, 162, 0.04)',
                  border: '1px solid rgba(11, 77, 162, 0.1)',
                  marginBottom: '1.25rem',
                }}
              >
                <FileText size={18} color="var(--color-primary-blue)" style={{ flexShrink: 0 }} />
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-main)' }}>
                  <span style={{ color: 'var(--text-muted)', fontWeight: 600 }}>GSTIN: </span> 32AADCZ1580A1ZS
                </div>
              </div>

              {/* Contact Info (Email & Phone) */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem', color: 'var(--text-body)' }}>
                  <Mail size={18} color="var(--color-primary-cyan)" style={{ flexShrink: 0 }} />
                  <a href="mailto:zirdilialifescience@gmail.com" style={{ color: 'var(--color-primary-blue)', textDecoration: 'none', fontWeight: 600 }}>
                    zirdilialifescience@gmail.com
                  </a>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.95rem', color: 'var(--text-body)' }}>
                  <PhoneCall size={18} color="var(--color-primary-green)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                    <a href="tel:+917907706086" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: 600 }}>
                      +91 7907706086
                    </a>
                    <a href="tel:+917012853890" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: 600 }}>
                      +91 7012853890
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Partnerships Banner Card */}
            <div
              style={{
                padding: '1.75rem',
                borderRadius: 'var(--radius-xl)',
                background: 'var(--gradient-brand-subtle)',
                border: '1px solid rgba(0, 155, 176, 0.2)',
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
              }}
            >
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  background: 'rgba(0, 158, 82, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Handshake size={22} color="var(--color-primary-green)" />
              </div>
              <div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)' }}>
                  Strategic Alliances Welcome
                </h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', margin: 0 }}>
                  We actively collaborate with healthcare institutions, suppliers, and healthcare professionals.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column Interactive Enquiry Form */}
          <div>
            <div
              className="glass-card"
              style={{
                padding: '2.25rem',
                borderRadius: 'var(--radius-xl)',
                background: '#FFFFFF',
                border: '1px solid rgba(11, 77, 162, 0.12)',
                boxShadow: 'var(--shadow-lg)',
              }}
            >
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      background: 'rgba(0, 158, 82, 0.12)',
                      color: 'var(--color-primary-green)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.5rem auto',
                    }}
                  >
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.75rem' }}>
                    Enquiry Submitted Successfully
                  </h3>
                  <p style={{ fontSize: '1rem', color: 'var(--text-body)', lineHeight: 1.6, marginBottom: '2rem' }}>
                    Thank you for reaching out to <strong>Zirdilia Life Science</strong>. Our business development team will review your inquiry and respond promptly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        organization: '',
                        email: '',
                        phone: '',
                        inquiryType: 'Product Enquiry',
                        message: '',
                      });
                    }}
                    className="btn btn-secondary"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '1.5rem' }}>
                    Send Us an Enquiry
                  </h3>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
                    {/* Name */}
                    <div>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Dr. / Mr. / Ms. Name"
                        value={formData.name}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '0.8rem 1rem',
                          borderRadius: 'var(--radius-md)',
                          border: '1px solid rgba(15, 23, 42, 0.15)',
                          fontSize: '0.95rem',
                          outline: 'none',
                        }}
                      />
                    </div>

                    {/* Organization */}
                    <div>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                        Organization / Institution
                      </label>
                      <input
                        type="text"
                        name="organization"
                        placeholder="Hospital / Company / Pharmacy"
                        value={formData.organization}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '0.8rem 1rem',
                          borderRadius: 'var(--radius-md)',
                          border: '1px solid rgba(15, 23, 42, 0.15)',
                          fontSize: '0.95rem',
                          outline: 'none',
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
                    {/* Email */}
                    <div>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="zirdilialifescience@gmail.com"
                        value={formData.email}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '0.8rem 1rem',
                          borderRadius: 'var(--radius-md)',
                          border: '1px solid rgba(15, 23, 42, 0.15)',
                          fontSize: '0.95rem',
                          outline: 'none',
                        }}
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+91 7907706086"
                        value={formData.phone}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '0.8rem 1rem',
                          borderRadius: 'var(--radius-md)',
                          border: '1px solid rgba(15, 23, 42, 0.15)',
                          fontSize: '0.95rem',
                          outline: 'none',
                        }}
                      />
                    </div>
                  </div>

                  {/* Inquiry Type Selector */}
                  <div style={{ marginBottom: '1.25rem' }}>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                      Inquiry Type *
                    </label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid rgba(15, 23, 42, 0.15)',
                        fontSize: '0.95rem',
                        outline: 'none',
                        background: '#FFFFFF',
                        cursor: 'pointer',
                      }}
                    >
                      <option value="Product Enquiry">Product Enquiry</option>
                      <option value="Distribution Partnership">Distribution Partnership</option>
                      <option value="Business Partnership">Business Partnership</option>
                      <option value="Healthcare Professional">Healthcare Professional Inquiry</option>
                      <option value="International Enquiry">International Enquiry</option>
                      <option value="General Enquiry">General Enquiry</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div style={{ marginBottom: '1.75rem' }}>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                      Message / Requirement *
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      placeholder="Please share details about your inquiry or healthcare requirements..."
                      value={formData.message}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid rgba(15, 23, 42, 0.15)',
                        fontSize: '0.95rem',
                        outline: 'none',
                        resize: 'vertical',
                      }}
                    />
                  </div>

                  {/* Action Buttons */}
                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary"
                      style={{ flex: 1, padding: '0.9rem 1.5rem' }}
                    >
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          Send Enquiry
                          <Send size={18} />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
