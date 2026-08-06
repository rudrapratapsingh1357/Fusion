import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { teamSections, teamAccentColors } from '../data/team';

const GithubIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const LinkedinIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);


const C = {
  cyan: '#00FFFF',
  border: '#1e1e1e',
  surface: '#0a0a0a',
  muted: '#6B7280',
  secondary: '#9CA3AF',
};

const getInitials = (name) => {
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
};

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

// ─── MEMBER AVATAR / PHOTO COMPONENT ───
const MemberPhoto = ({ name, photo, accent, sizeClass = 'aspect-square' }) => {
  const [imgFailed, setImgFailed] = useState(false);
  const initials = getInitials(name);

  return (
    <div
      className={sizeClass}
      style={{
        position: 'relative',
        width: '100%',
        borderRadius: '8px',
        overflow: 'hidden',
        background: '#070707',
        border: `1px solid ${C.border}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {photo && !imgFailed ? (
        <img
          src={photo}
          alt={name}
          onError={() => setImgFailed(true)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'top center',
            display: 'block',
          }}
        />
      ) : (
        /* Quiet neutral initials fallback */
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: '1.6rem',
              color: accent || '#fff',
              letterSpacing: '0.05em',
            }}
          >
            {initials}
          </span>
        </div>
      )}
    </div>
  );
};

// ─── MEMBER CARD COMPONENT ───
const MemberCard = ({ name, role, year, photo, accent, github, linkedin, sizeClass = 'aspect-square' }) => {
  const hasGithub = github && github.trim() !== '' && github !== '#';
  const hasLinkedin = linkedin && linkedin.trim() !== '' && linkedin !== '#';

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '100%',
      }}
    >
      <MemberPhoto name={name} photo={photo} accent={accent} sizeClass={sizeClass} />
      
      <div style={{ marginTop: '14px', width: '100%' }}>
        <h4
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: '0.95rem',
            color: '#fff',
            margin: '0 0 3px 0',
            letterSpacing: '-0.01em',
          }}
        >
          {name}
        </h4>
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '0.82rem',
            fontWeight: 500,
            color: accent || C.cyan,
            margin: '0 0 4px 0',
          }}
        >
          {role}
        </p>
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '0.78rem',
            color: C.muted,
            margin: 0,
          }}
        >
          {year}
        </p>

        {/* Render social icons only when they are verified and valid */}
        {(hasGithub || hasLinkedin) && (
          <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
            {hasLinkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name}'s LinkedIn`}
                style={{ color: C.muted, transition: 'color 0.2s' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
                onMouseLeave={(e) => e.currentTarget.style.color = C.muted}
              >
                <LinkedinIcon size={15} />
              </a>
            )}
            {hasGithub && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name}'s GitHub`}
                style={{ color: C.muted, transition: 'color 0.2s' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
                onMouseLeave={(e) => e.currentTarget.style.color = C.muted}
              >
                <GithubIcon size={15} />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

// ─── MAIN TEAM PAGE ───
const Team = () => {
  // Derive sections directly from team.js sections to avoid hardcoded filters
  const execSection = teamSections.find((s) => s.key === 'Executive Board');
  const techSection = teamSections.find((s) => s.key === 'Technical Wing');
  const opsSection = teamSections.find((s) => s.key === 'Operations & Outreach');
  const membersSection = teamSections.find((s) => s.key === 'Club Members');

  // Map accents dynamically using exported teamAccentColors
  const getAccent = (key) => teamAccentColors[key] || C.cyan;

  // Extract individual members to implement visual hierarchy
  const president = execSection?.members.find((m) => m.role === 'President');
  const otherExecs = execSection?.members.filter((m) => m.role !== 'President') || [];

  const techDirector = techSection?.members.find((m) => m.role === 'Technical Director');
  const otherTechs = techSection?.members.filter((m) => m.role !== 'Technical Director') || [];

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
      
      {/* ── PAGE INTRO ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: '64px', borderBottom: `1px solid ${C.border}`, paddingBottom: '32px' }}
      >
        <span className="section-tag">Members Roster</span>
        <h1
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
            color: '#fff',
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            marginBottom: '18px',
          }}
        >
          Team
        </h1>
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '1.05rem',
            color: C.secondary,
            lineHeight: 1.7,
            maxWidth: '560px',
          }}
        >
          The people behind FUSION. Our club is built by students working across technical development, operations, events and outreach.
        </p>
      </motion.div>

      {/* ── SECTION 1: EXECUTIVE BOARD ── */}
      {execSection && (
        <section style={{ marginBottom: '88px' }} aria-labelledby="exec-heading">
          <motion.div {...reveal()} style={{ marginBottom: '36px' }}>
            <span style={{ fontSize: '0.68rem', letterSpacing: '0.12em', color: getAccent(execSection.accentKey), textTransform: 'uppercase', fontWeight: 600 }}>
              Administration Wing
            </span>
            <h2
              id="exec-heading"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(1.5rem, 3.2vw, 2.2rem)',
                color: '#fff',
                letterSpacing: '-0.025em',
                marginTop: '4px',
              }}
            >
              {execSection.label}
            </h2>
          </motion.div>

          {/* Hierarchy: President on left (larger), others on right */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.2fr] gap-12 lg:gap-16 items-start">
            
            {/* President Prominence */}
            {president && (
              <motion.div {...reveal(0.05)}>
                <MemberCard
                  {...president}
                  accent={getAccent(execSection.accentKey)}
                  sizeClass="aspect-[4/5]"
                />
              </motion.div>
            )}

            {/* Other Executives */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {otherExecs.map((exec, i) => (
                <motion.div key={exec.name} {...reveal(0.1 + i * 0.05)}>
                  <MemberCard
                    {...exec}
                    accent={getAccent(execSection.accentKey)}
                    sizeClass="aspect-square"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── SECTION 2: TECHNICAL WING ── */}
      {techSection && (
        <section style={{ marginBottom: '88px' }} aria-labelledby="tech-heading">
          <motion.div {...reveal()} style={{ marginBottom: '36px', borderTop: `1px solid ${C.border}`, paddingTop: '48px' }}>
            <span style={{ fontSize: '0.68rem', letterSpacing: '0.12em', color: getAccent(techSection.accentKey), textTransform: 'uppercase', fontWeight: 600 }}>
              Development Wing
            </span>
            <h2
              id="tech-heading"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(1.5rem, 3.2vw, 2.2rem)',
                color: '#fff',
                letterSpacing: '-0.025em',
                marginTop: '4px',
              }}
            >
              {techSection.label}
            </h2>
          </motion.div>

          {/* Hierarchy: Technical Director prominent, others below in grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.2fr] gap-12 lg:gap-16 items-start">
            
            {/* Technical Director */}
            {techDirector && (
              <motion.div {...reveal(0.05)}>
                <MemberCard
                  {...techDirector}
                  accent={getAccent(techSection.accentKey)}
                  sizeClass="aspect-[4/5]"
                />
              </motion.div>
            )}

            {/* Rest of the Technical Team */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
              {otherTechs.map((tech, i) => (
                <motion.div key={tech.name} {...reveal(0.1 + i * 0.05)}>
                  <MemberCard
                    {...tech}
                    accent={getAccent(techSection.accentKey)}
                    sizeClass="aspect-square"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── SECTION 3: OPERATIONS & OUTREACH ── */}
      {opsSection && (
        <section style={{ marginBottom: '88px' }} aria-labelledby="ops-heading">
          <motion.div {...reveal()} style={{ marginBottom: '36px', borderTop: `1px solid ${C.border}`, paddingTop: '48px' }}>
            <span style={{ fontSize: '0.68rem', letterSpacing: '0.12em', color: getAccent(opsSection.accentKey), textTransform: 'uppercase', fontWeight: 600 }}>
              Relations Wing
            </span>
            <h2
              id="ops-heading"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(1.5rem, 3.2vw, 2.2rem)',
                color: '#fff',
                letterSpacing: '-0.025em',
                marginTop: '4px',
              }}
            >
              {opsSection.label}
            </h2>
          </motion.div>

          {/* Clean symmetric grid for Operations team (6 members) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
            {opsSection.members.map((member, i) => (
              <motion.div key={member.name} {...reveal(0.05 + i * 0.05)}>
                <MemberCard
                  {...member}
                  accent={getAccent(opsSection.accentKey)}
                  sizeClass="aspect-square"
                />
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* ── SECTION 4: CLUB MEMBERS ── */}
      {membersSection && (
        <section style={{ marginBottom: '88px' }} aria-labelledby="members-heading">
          <motion.div {...reveal()} style={{ marginBottom: '36px', borderTop: `1px solid ${C.border}`, paddingTop: '48px' }}>
            <span style={{ fontSize: '0.68rem', letterSpacing: '0.12em', color: getAccent(membersSection.accentKey), textTransform: 'uppercase', fontWeight: 600 }}>
              General Wing
            </span>
            <h2
              id="members-heading"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(1.5rem, 3.2vw, 2.2rem)',
                color: '#fff',
                letterSpacing: '-0.025em',
                marginTop: '4px',
              }}
            >
              {membersSection.label}
            </h2>
          </motion.div>

          {/* Clean symmetric grid for general members */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {membersSection.members.map((member, i) => (
              <motion.div key={member.name} {...reveal(0.05 + i * 0.05)}>
                <MemberCard
                  {...member}
                  accent={getAccent(membersSection.accentKey)}
                  sizeClass="aspect-square"
                />
              </motion.div>
            ))}
          </div>
        </section>
      )}

    </div>
  );
};

export default Team;
