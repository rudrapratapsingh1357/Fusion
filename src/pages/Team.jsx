import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const C = {
  cyan:      '#00E5FF',
  orange:    '#D35400',
  purple:    '#7C3AED',
  green:     '#22C55E',
  border:    '#1a1a1a',
};

// ─── TEAM DATA ────────────────────────────────────────────────────────────────
// photo: use '/team/filename.jpg' if you have it, otherwise leave null for avatar
const sections = [
  {
    key: 'Executive Board',
    label: 'Executive Board',
    accent: C.cyan,
    members: [
      { name: 'Aviral Sachdeva',   role: 'President',               wing: 'Executive', year: '3rd Year · CSE', photo: '/team/aviral.jpg',   github: '', linkedin: '' },
      { name: 'Rudra Pratap Singh',role: 'Vice President',          wing: 'Executive', year: '3rd Year · ECE', photo: '/team/rudra.jpg',    github: '', linkedin: '' },
      { name: 'Shreya Singh',      role: 'General Secretary',       wing: 'Executive', year: '2nd Year · CSE', photo: '/team/shreya.jpg',   github: '', linkedin: '' },
      { name: 'Vikash Rai',        role: 'Treasurer',               wing: 'Executive', year: '2nd Year · ECE', photo: null,                 github: '', linkedin: '' },
    ],
  },
  {
    key: 'Technical Wing',
    label: 'Technical Wing',
    accent: C.orange,
    members: [
      { name: 'Priyanshu Nandi',  role: 'Technical Director',      wing: 'Technical', year: '3rd Year · ECE', photo: null, github: '', linkedin: '' },
      { name: 'Amardeep Singh',   role: 'Robotics & IoT',          wing: 'Technical', year: '2nd Year · ECE', photo: null, github: '', linkedin: '' },
      { name: 'Adhish Gupta',     role: 'Robotics & IoT',          wing: 'Technical', year: '2nd Year · CSE', photo: null, github: '', linkedin: '' },
      { name: 'Saksham Sharan',   role: 'Firmware & Cloud',        wing: 'Technical', year: '2nd Year · CSE', photo: null, github: '', linkedin: '' },
      { name: 'Shavez Khan',      role: 'Firmware & Cloud',        wing: 'Technical', year: '2nd Year · ECE', photo: null, github: '', linkedin: '' },
    ],
  },
  {
    key: 'Operations & Outreach',
    label: 'Operations & Outreach',
    accent: C.purple,
    members: [
      { name: 'Tuba Afreen',        role: 'Events Lead',           wing: 'Operations', year: '2nd Year · CSE', photo: null, github: '', linkedin: '' },
      { name: 'Anuj Patwa',         role: 'Events',                wing: 'Operations', year: '1st Year · ECE', photo: null, github: '', linkedin: '' },
      { name: 'Aanya Maheshwari',   role: 'Public Relations',      wing: 'Operations', year: '2nd Year · CSE', photo: null, github: '', linkedin: '' },
      { name: 'Paridhi Maheshwari', role: 'Public Relations',      wing: 'Operations', year: '1st Year · BCA', photo: null, github: '', linkedin: '' },
      { name: 'Shaurya Singh',      role: 'Corporate Relations',   wing: 'Operations', year: '2nd Year · CSE', photo: null, github: '', linkedin: '' },
      { name: 'Prem Mighlani',      role: 'Corporate Relations',   wing: 'Operations', year: '2nd Year · ECE', photo: null, github: '', linkedin: '' },
    ],
  },
];

const filters = ['All Team', 'Executive Board', 'Technical Wing', 'Operations & Outreach'];

// ─── AVATAR FALLBACK ──────────────────────────────────────────────────────────
const avatarUrl = (name, accent) => {
  const hex = accent.replace('#', '');
  return `https://api.dicebear.com/9.x/initials/svg?seed=${encodeURIComponent(name)}&backgroundColor=0d1117&textColor=${hex}&radius=0&fontSize=36`;
};

// ─── MEMBER CARD (Spider-style) ───────────────────────────────────────────────
const MemberCard = ({ name, role, year, photo, accent, github, linkedin, index }) => {
  const [hovered, setHovered] = useState(false);
  const imgSrc = photo || avatarUrl(name, accent);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#0d0d0d',
        border: `1px solid ${hovered ? accent : C.border}`,
        borderRadius: '16px',
        overflow: 'hidden',
        transition: 'border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered ? `0 20px 50px ${accent}18` : '0 2px 12px rgba(0,0,0,0.4)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Photo area */}
      <div style={{ position: 'relative', width: '100%', aspectRatio: '3 / 4', overflow: 'hidden', background: '#0a0a0a' }}>
        <img
          src={imgSrc}
          alt={name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'top center',
            display: 'block',
            transition: 'transform 0.5s ease',
            transform: hovered ? 'scale(1.04)' : 'scale(1)',
          }}
          onError={(e) => { e.currentTarget.src = avatarUrl(name, accent); }}
        />
        {/* Gradient overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(to top, #0d0d0d 0%, transparent 55%)`,
          pointerEvents: 'none',
        }} />
        {/* Accent top line */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: 3,
          background: `linear-gradient(to right, ${accent}, transparent)`,
          opacity: hovered ? 1 : 0.4,
          transition: 'opacity 0.3s',
        }} />
      </div>

      {/* Info area */}
      <div style={{ padding: '18px 18px 16px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <h3 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          fontSize: '1rem',
          color: '#f9fafb',
          margin: 0,
          letterSpacing: '-0.01em',
          lineHeight: 1.3,
        }}>
          {name}
        </h3>
        <p style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '0.8rem',
          color: accent,
          fontWeight: 600,
          margin: 0,
        }}>
          {role}
        </p>
        <p style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.65rem',
          color: '#4B5563',
          margin: '2px 0 0',
          letterSpacing: '0.04em',
        }}>
          {year}
        </p>

        {/* Social links (only shown if URLs provided) */}
        {(github || linkedin) && (
          <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
            {linkedin && (
              <a href={linkedin} target="_blank" rel="noreferrer" title="LinkedIn"
                style={{ color: '#4B5563', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '4px', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem', letterSpacing: '0.06em' }}
                onMouseEnter={e => e.currentTarget.style.color = accent}
                onMouseLeave={e => e.currentTarget.style.color = '#4B5563'}
              >
                <ExternalLink size={13} /> LI
              </a>
            )}
            {github && (
              <a href={github} target="_blank" rel="noreferrer" title="GitHub"
                style={{ color: '#4B5563', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '4px', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem', letterSpacing: '0.06em' }}
                onMouseEnter={e => e.currentTarget.style.color = accent}
                onMouseLeave={e => e.currentTarget.style.color = '#4B5563'}
              >
                <ExternalLink size={13} /> GH
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

// ─── TEAM PAGE ────────────────────────────────────────────────────────────────
const Team = () => {
  const [activeFilter, setActiveFilter] = useState('All Team');

  const visibleSections = activeFilter === 'All Team'
    ? sections
    : sections.filter(s => s.key === activeFilter);

  return (
    <div className="py-12">

      {/* ── HERO HEADER ────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '52px' }}
      >
        {/* Label */}
        <span style={{
          display: 'inline-block',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.7rem',
          fontWeight: 600,
          letterSpacing: '0.14em',
          color: C.cyan,
          background: `${C.cyan}12`,
          border: `1px solid ${C.cyan}28`,
          padding: '5px 14px',
          borderRadius: '20px',
          marginBottom: '20px',
        }}>
          THE PEOPLE
        </span>

        {/* Main heading */}
        <h1 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 800,
          fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
          color: '#ffffff',
          letterSpacing: '-0.04em',
          lineHeight: 1.05,
          marginBottom: '16px',
        }}>
          Meet the team behind{' '}
          <span style={{ color: C.cyan }}>FUSION</span>
        </h1>

        <p style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '1rem',
          color: '#6B7280',
          maxWidth: '440px',
          margin: '0 auto 36px',
          lineHeight: 1.7,
        }}>
          The builders, strategists, and researchers driving real systems — not just concepts.
        </p>

        {/* Filter tabs */}
        <div style={{
          display: 'inline-flex',
          flexWrap: 'wrap',
          gap: '8px',
          justifyContent: 'center',
          background: '#0d0d0d',
          border: '1px solid #1a1a1a',
          borderRadius: '60px',
          padding: '6px',
        }}>
          {filters.map((f) => {
            const isActive = activeFilter === f;
            const sectionAccent = sections.find(s => s.key === f)?.accent || C.cyan;
            const pill = f === 'All Team' ? C.cyan : sectionAccent;
            return (
              <button
                key={f}
                id={`team-filter-${f.replace(/[^a-z0-9]/gi, '-').toLowerCase()}`}
                onClick={() => setActiveFilter(f)}
                style={{
                  position: 'relative',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '0.82rem',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? (pill === C.orange || pill === C.purple ? '#fff' : '#000') : '#6B7280',
                  background: isActive ? pill : 'transparent',
                  border: 'none',
                  padding: '8px 20px',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  whiteSpace: 'nowrap',
                }}
              >
                {f}
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* ── SECTIONS + CARDS ───────────────────────────────────────────── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}
        >
          {visibleSections.map(({ key, label, accent, members }) => (
            <div key={key}>

              {/* Section label row */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
                <h2 style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 800,
                  fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
                  color: accent,
                  margin: 0,
                  letterSpacing: '-0.02em',
                  whiteSpace: 'nowrap',
                }}>
                  {label}
                </h2>
                <div style={{ flexGrow: 1, height: 1, background: '#1a1a1a' }} />
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.68rem',
                  color: '#374151',
                  letterSpacing: '0.06em',
                  whiteSpace: 'nowrap',
                }}>
                  {members.length} MEMBERS
                </span>
              </div>

              {/* Cards grid — 2 cols on mobile, 3 on md, 4 on lg */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 200px), 1fr))',
                gap: '18px',
              }}>
                {members.map((m, i) => (
                  <MemberCard
                    key={m.name}
                    {...m}
                    accent={accent}
                    index={i}
                  />
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Photo note */}
      <p style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '0.65rem',
        color: '#374151',
        textAlign: 'center',
        marginTop: '48px',
        letterSpacing: '0.06em',
      }}>
        // PHOTOS UPLOADING — ACTUAL PHOTOS COMING SOON FOR REMAINING MEMBERS
      </p>
    </div>
  );
};

export default Team;
