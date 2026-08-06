import React from 'react';
import { motion } from 'framer-motion';
import { Wifi, Bot, Plane, ExternalLink, Sparkles } from 'lucide-react';

const C = {
  cyan: '#00FFFF',
  border: '#1e1e1e',
  muted: '#6B7280',
  secondary: '#9CA3AF',
  surface: '#0A0A0A',
};

// Configurable Google Form URL
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSe9_evfndzEXh7L1I_TT1nO_tvZCTtdaM06Ls5fW1IsKCuRMA/viewform?usp=publish-editor"; // Update this link with the real Google Form URL when provided

const Join = () => {
  const domainHighlights = [
    {
      Icon: Wifi,
      title: 'Internet of Things',
      desc: 'Work with sensor ecosystems, microcontrollers, and localized data telemetry.',
    },
    {
      Icon: Bot,
      title: 'Robotics',
      desc: 'Build smart mechanical actuators, physical robots, and direct control logic.',
    },
    {
      Icon: Plane,
      title: 'UAVs & Drones',
      desc: 'Design flight systems, payload mechanics, and autonomous navigation.',
    },
  ];

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 pt-8 pb-16">
        
        {/* ── LEFT COLUMN: INFO & INTRO ── */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Apply for Membership</span>
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
              color: '#fff',
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              marginBottom: '24px',
            }}
          >
            Join FUSION<span style={{ color: C.cyan }}>.</span>
          </h1>

          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '1.05rem',
              color: C.secondary,
              lineHeight: 1.75,
              marginBottom: '32px',
              maxWidth: '480px',
            }}
          >
            FUSION welcomes students who are experienced builders and those who are only beginning to explore IoT, Robotics, and UAVs.
          </p>

          <blockquote
            style={{
              borderLeft: `2px solid ${C.cyan}`,
              paddingLeft: '20px',
              margin: '0 0 40px 0',
            }}
          >
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '1.15rem',
                fontWeight: 500,
                color: '#fff',
                lineHeight: 1.6,
                letterSpacing: '-0.01em',
              }}
            >
              "You don't need to know everything before joining."
            </p>
          </blockquote>

          {/* Domain lists/highlights */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <h3
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.8rem',
                fontWeight: 600,
                color: '#fff',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              What you can explore
            </h3>
            
            {domainHighlights.map((domain, index) => (
              <div key={index} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ color: C.cyan, marginTop: '3px', opacity: 0.8 }}>
                  <domain.Icon size={18} />
                </div>
                <div>
                  <h4
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 600,
                      fontSize: '0.95rem',
                      color: '#fff',
                      marginBottom: '4px',
                    }}
                  >
                    {domain.title}
                  </h4>
                  <p
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '0.85rem',
                      color: C.muted,
                      lineHeight: 1.6,
                      maxWidth: '380px',
                    }}
                  >
                    {domain.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── RIGHT COLUMN: GOOGLE FORM CTA & INTERESTING GRAPHIC ── */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
          }}
        >
          {/* Main Visual Container */}
          <div style={{
            background: 'linear-gradient(135deg, #050505 0%, #0c0c0c 100%)',
            border: `1px solid ${C.border}`,
            borderRadius: '16px',
            padding: '40px',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
          }}>
            {/* Ambient Cyan Glow behind the logo */}
            <div style={{
              position: 'absolute',
              top: '30%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '240px',
              height: '240px',
              background: 'radial-gradient(circle, rgba(0, 255, 255, 0.08) 0%, transparent 70%)',
              pointerEvents: 'none',
              zIndex: 1,
            }} />

            {/* FUSION Cybernetic Brain Graphic */}
            <div style={{
              width: '260px',
              height: '260px',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '32px',
              zIndex: 2,
            }}>
              <img
                src="/fusion-hero-logo.png"
                alt="FUSION Cybernetics"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  filter: 'invert(1) hue-rotate(180deg) brightness(1.2) contrast(1.1)',
                  mixBlendMode: 'screen',
                  opacity: 0.85,
                }}
              />
            </div>

            <div style={{ zIndex: 2, maxWidth: '440px' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'rgba(0, 255, 255, 0.06)',
                border: '1px solid rgba(0, 255, 255, 0.15)',
                borderRadius: '99px',
                padding: '6px 14px',
                fontSize: '0.78rem',
                fontWeight: 600,
                color: C.cyan,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}>
                <Sparkles size={12} />
                Recruitment Cohort 2026
              </div>

              <h2 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '1.6rem',
                fontWeight: 700,
                color: '#fff',
                marginBottom: '12px',
                letterSpacing: '-0.02em',
              }}>
                Apply Online
              </h2>

              <p style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.92rem',
                color: C.secondary,
                lineHeight: 1.6,
                marginBottom: '32px',
              }}>
                We have migrated our application process to Google Forms. Click below to fill out the form and submit your profile, interests, and project experience.
              </p>

              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  padding: '14px 28px',
                  fontSize: '0.98rem',
                  boxShadow: '0 0 20px rgba(0, 255, 255, 0.15)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 255, 255, 0.35)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 255, 255, 0.15)';
                }}
              >
                Open Google Form <ExternalLink size={16} />
              </a>

              <p style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.78rem',
                color: C.muted,
                marginTop: '16px',
                lineHeight: 1.4,
              }}>
                * Make sure to log in with your university account to access the form.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Join;
