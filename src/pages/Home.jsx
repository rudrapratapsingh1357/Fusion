import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Wifi, Bot, Plane, Users } from 'lucide-react';
import { allProjects } from '../data/projects';

// ─── Design tokens ────────────────────────────────────────────────────────────
const C = {
  cyan:      '#00FFFF',
  border:    '#1e1e1e',
  surface:   '#0a0a0a',
  muted:     '#6B7280',
  secondary: '#9CA3AF',
};

// ─── Scroll-reveal animation factory ─────────────────────────────────────────
const reveal = (delay = 0) => ({
  initial:     { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true, margin: '-60px' },
  transition:  { duration: 0.52, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

// ─── Domain data ──────────────────────────────────────────────────────────────
const DOMAINS = [
  {
    id:          'iot',
    number:      '01',
    Icon:        Wifi,
    name:        'Internet of Things',
    description: 'Connected devices, sensors, embedded systems and automation. We build networks that bridge the physical and digital — from microcontroller firmware to full data pipelines.',
  },
  {
    id:          'robotics',
    number:      '02',
    Icon:        Bot,
    name:        'Robotics',
    description: 'Machines that sense, move and interact with the physical world. Autonomous systems, control loops, actuator logic and the engineering that makes them reliable.',
  },
  {
    id:          'uav',
    number:      '03',
    Icon:        Plane,
    name:        'UAVs',
    description: 'Flight systems, autonomous platforms and aerial engineering. Designing, assembling and programming unmanned aerial vehicles for real-world applications.',
  },
];

// ─── Homepage featured projects ───────────────────────────────────────────────
// TEMPORARY SELECTION — chosen to show range across IoT, edge hardware, and
// embedded vision. When club leadership confirms which projects to feature,
// update featured: true in src/data/projects.js and switch to:
//   allProjects.filter(p => p.featured)
const FEATURED_TITLES = ['AgroVON 2.0', 'Orange Pigeon AI', 'EdgeVision CCTV'];
const featuredProjects = FEATURED_TITLES
  .map((t) => allProjects.find((p) => p.title === t))
  .filter(Boolean);

// ─── Community values ─────────────────────────────────────────────────────────
const COMMUNITY_VALUES = [
  'Learning by building — not just reading documentation.',
  'Hardware and software treated as a single discipline.',
  'Open to all skill levels. Curiosity is the only requirement.',
  'Collaborative work over individual competition.',
];


// ══════════════════════════════════════════════════════════════════════════════
// HERO SECTION
// ══════════════════════════════════════════════════════════════════════════════
const HeroSection = () => (
  <section
    aria-labelledby="hero-heading"
    style={{
      minHeight: '88vh',
      display:   'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      paddingBottom: '56px',
      position:  'relative',
    }}
  >
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-10 items-center">

      {/* ── Left: content ── */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Eyebrow */}
        <p style={{
          fontFamily:    "'Space Grotesk', sans-serif",
          fontSize:      '0.78rem',
          fontWeight:    500,
          color:         C.muted,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          marginBottom:  '28px',
        }}>
          IoT &amp; Robotics Club &nbsp;·&nbsp; GLA University
        </p>

        {/* H1 */}
        <h1
          id="hero-heading"
          style={{
            fontFamily:    "'Space Grotesk', sans-serif",
            fontWeight:    800,
            fontSize:      'clamp(2.5rem, 5.5vw, 4.4rem)',
            color:         '#fff',
            lineHeight:    1.07,
            letterSpacing: '-0.035em',
            marginBottom:  '24px',
          }}
        >
          Engineering ideas<br />
          into real-world<br />
          <span style={{ color: C.cyan }}>systems.</span>
        </h1>

        {/* Description */}
        <p style={{
          fontFamily:   "'Space Grotesk', sans-serif",
          fontSize:     '1.05rem',
          color:        C.secondary,
          lineHeight:   1.75,
          marginBottom: '40px',
          maxWidth:     '460px',
        }}>
          FUSION is a student community at GLA University where we learn by
          building — connected devices, robotic systems, and aerial platforms.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
          <Link to="/projects" className="btn btn-primary" id="hero-cta-projects">
            Explore Projects <ArrowRight size={16} />
          </Link>
          <Link
            to="/join"
            className="btn btn-outline"
            id="hero-cta-join"
          >
            Join FUSION
          </Link>
        </div>
      </motion.div>

      {/* ── Right: hero visual ──
          TEMPORARY ASSET — fusion-hero-logo.png
          This container (4:3 aspect) is reserved for real FUSION project photography.
          Drop in a real <img> without any layout changes when available.
          Intentionally plain: no glow, no ring, no decoration.
      */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.18 }}
        className="hidden lg:flex justify-center"
      >
        <div style={{
          width:        '100%',
          maxWidth:     '460px',
          aspectRatio:  '4 / 3',
          borderRadius: '12px',
          overflow:     'hidden',
          background:   C.surface,
          flexShrink:   0,
        }}>
          <img
            src="/fusion-hero-logo.png"
            alt="FUSION Club"
            style={{
              width:        '100%',
              height:       '100%',
              objectFit:    'contain',
              filter:       'invert(1) hue-rotate(180deg) brightness(1.05)',
              mixBlendMode: 'screen',
              opacity:      0.72,
              padding:      '44px',
            }}
          />
        </div>
      </motion.div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      animate={{ y: [0, 8, 0] }}
      transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
      aria-hidden="true"
      style={{
        position:       'absolute',
        bottom:         '24px',
        left:           '50%',
        transform:      'translateX(-50%)',
        display:        'flex',
        flexDirection:  'column',
        alignItems:     'center',
        gap:            '6px',
        color:          '#374151',
        pointerEvents:  'none',
      }}
    >
      <div style={{ width: '1px', height: '30px', background: 'linear-gradient(to bottom, transparent, #374151)' }} />
      <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
        Scroll
      </span>
    </motion.div>
  </section>
);


// ══════════════════════════════════════════════════════════════════════════════
// DOMAINS SECTION — editorial three-column layout, no card backgrounds
// ══════════════════════════════════════════════════════════════════════════════
const DomainsSection = () => (
  <section
    aria-labelledby="domains-heading"
    style={{ paddingTop: '88px', paddingBottom: '96px' }}
  >
    {/* Section intro */}
    <motion.div {...reveal()} style={{ marginBottom: '48px' }}>
      <span className="section-tag">What we work on</span>
      <h2
        id="domains-heading"
        style={{
          fontFamily:    "'Space Grotesk', sans-serif",
          fontWeight:    800,
          fontSize:      'clamp(1.7rem, 3.2vw, 2.4rem)',
          color:         '#fff',
          letterSpacing: '-0.03em',
          lineHeight:    1.18,
        }}
      >
        Three domains.<br />One mission.
      </h2>
    </motion.div>

    {/* Thin horizontal rule above columns */}
    <div style={{ height: '1px', background: C.border, marginBottom: '0' }} aria-hidden="true" />

    {/* Editorial columns */}
    <div className="grid grid-cols-1 md:grid-cols-3">
      {DOMAINS.map((domain, i) => (
        <motion.div
          key={domain.id}
          {...reveal(i * 0.09)}
          className="domain-col"
        >
          {/* Sequence number */}
          <span style={{
            fontFamily:    "'JetBrains Mono', 'Courier New', monospace",
            fontSize:      '0.68rem',
            color:         '#374151',
            letterSpacing: '0.06em',
            display:       'block',
            marginBottom:  '22px',
          }}>
            {domain.number}
          </span>

          {/* Domain name + icon */}
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', marginBottom: '14px' }}>
            <h3 style={{
              fontFamily:    "'Space Grotesk', sans-serif",
              fontWeight:    700,
              fontSize:      '1.2rem',
              color:         '#fff',
              letterSpacing: '-0.02em',
              lineHeight:    1.25,
              margin:        0,
            }}>
              {domain.name}
            </h3>
            <domain.Icon
              size={17}
              aria-hidden="true"
              style={{ color: C.cyan, flexShrink: 0, marginTop: '3px', opacity: 0.6 }}
            />
          </div>

          {/* Description */}
          <p style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize:   '0.875rem',
            color:      C.muted,
            lineHeight: 1.78,
            margin:     0,
          }}>
            {domain.description}
          </p>
        </motion.div>
      ))}
    </div>
  </section>
);


// ══════════════════════════════════════════════════════════════════════════════
// SELECTED PROJECTS SECTION — editorial numbered list, not a card grid
// ══════════════════════════════════════════════════════════════════════════════
const ProjectsSection = () => (
  <section
    aria-labelledby="projects-heading"
    style={{ paddingBottom: '96px' }}
  >
    {/* Header row */}
    <motion.div
      {...reveal()}
      style={{
        display:       'flex',
        alignItems:    'flex-end',
        justifyContent:'space-between',
        flexWrap:      'wrap',
        gap:           '16px',
        marginBottom:  '48px',
      }}
    >
      <div>
        <span className="section-tag">Selected work</span>
        <h2
          id="projects-heading"
          style={{
            fontFamily:    "'Space Grotesk', sans-serif",
            fontWeight:    800,
            fontSize:      'clamp(1.7rem, 3.2vw, 2.4rem)',
            color:         '#fff',
            letterSpacing: '-0.03em',
            lineHeight:    1.18,
          }}
        >
          What we build.
        </h2>
      </div>
      <Link
        to="/projects"
        id="projects-view-all"
        style={{
          display:        'inline-flex',
          alignItems:     'center',
          gap:            '6px',
          fontFamily:     "'Space Grotesk', sans-serif",
          fontWeight:     600,
          fontSize:       '0.85rem',
          color:          C.cyan,
          textDecoration: 'none',
          transition:     'gap 0.18s ease',
          flexShrink:     0,
          paddingBottom:  '2px', // align with h2 baseline
        }}
        onMouseEnter={(e) => { e.currentTarget.style.gap = '12px'; }}
        onMouseLeave={(e) => { e.currentTarget.style.gap = '6px'; }}
      >
        View all projects <ArrowRight size={15} />
      </Link>
    </motion.div>

    {/* Project list */}
    <div>
      {featuredProjects.map((project, i) => (
        <motion.article
          key={project.title}
          {...reveal(i * 0.07)}
          className="project-row"
        >
          <div className="grid grid-cols-1 sm:grid-cols-[80px_1fr] gap-5 sm:gap-8">

            {/* Left: index + category */}
            <div style={{ paddingTop: '3px' }}>
              <span style={{
                fontFamily:    "'JetBrains Mono', 'Courier New', monospace",
                fontSize:      '0.68rem',
                color:         '#374151',
                letterSpacing: '0.06em',
                display:       'block',
                marginBottom:  '8px',
              }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <span style={{
                fontFamily:    "'Space Grotesk', sans-serif",
                fontSize:      '0.7rem',
                fontWeight:    600,
                color:         project.accent,
                letterSpacing: '0.07em',
                textTransform: 'uppercase',
                opacity:       0.85,
              }}>
                {project.category}
              </span>
            </div>

            {/* Right: content */}
            <div>
              <h3 style={{
                fontFamily:    "'Space Grotesk', sans-serif",
                fontWeight:    700,
                fontSize:      'clamp(1.05rem, 2vw, 1.25rem)',
                color:         '#fff',
                letterSpacing: '-0.02em',
                marginBottom:  '8px',
              }}>
                {project.title}
              </h3>
              <p style={{
                fontFamily:   "'Space Grotesk', sans-serif",
                fontSize:     '0.9rem',
                color:        C.secondary,
                lineHeight:   1.72,
                marginBottom: '16px',
                maxWidth:     '580px',
              }}>
                {project.description}
              </p>

              {/* Tech tags — minimal, not overwhelming */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily:    "'Space Grotesk', sans-serif",
                      fontSize:      '0.7rem',
                      fontWeight:    500,
                      color:         C.muted,
                      background:    '#0d0d0d',
                      border:        `1px solid ${C.border}`,
                      borderRadius:  '4px',
                      padding:       '3px 8px',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  </section>
);


// ══════════════════════════════════════════════════════════════════════════════
// COMMUNITY SECTION — two-column: prose left, values list right
// ══════════════════════════════════════════════════════════════════════════════
const CommunitySection = () => (
  <section
    aria-labelledby="community-heading"
    style={{ paddingTop: '96px', paddingBottom: '96px' }}
  >
    <div className="grid grid-cols-1 lg:grid-cols-2 items-start">

      {/* Left: prose + Meet the Team link */}
      <motion.div
        {...reveal()}
        className="lg:pr-16 pb-12 lg:pb-0 lg:border-r"
        style={{ borderColor: C.border }}
      >
        <span className="section-tag">The community</span>
        <h2
          id="community-heading"
          style={{
            fontFamily:    "'Space Grotesk', sans-serif",
            fontWeight:    800,
            fontSize:      'clamp(1.7rem, 3.2vw, 2.4rem)',
            color:         '#fff',
            letterSpacing: '-0.03em',
            lineHeight:    1.18,
            marginBottom:  '20px',
          }}
        >
          Students who build,<br />not just study.
        </h2>
        <p style={{
          fontFamily:   "'Space Grotesk', sans-serif",
          fontSize:     '0.97rem',
          color:        C.secondary,
          lineHeight:   1.78,
          marginBottom: '16px',
        }}>
          FUSION is a student-run engineering club at GLA University. We're not a lecture
          series or a study group — we're a community of people who learn by actually
          making things work.
        </p>
        <p style={{
          fontFamily:   "'Space Grotesk', sans-serif",
          fontSize:     '0.97rem',
          color:        C.secondary,
          lineHeight:   1.78,
          marginBottom: '36px',
        }}>
          Whether you're writing your first line of C or building your third autonomous
          system, there's room to experiment, get stuck, figure it out, and ship something real.
        </p>
        <Link
          to="/team"
          id="community-meet-team"
          style={{
            display:        'inline-flex',
            alignItems:     'center',
            gap:            '6px',
            fontFamily:     "'Space Grotesk', sans-serif",
            fontWeight:     600,
            fontSize:       '0.9rem',
            color:          C.cyan,
            textDecoration: 'none',
            transition:     'gap 0.18s ease',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.gap = '12px'; }}
          onMouseLeave={(e) => { e.currentTarget.style.gap = '6px'; }}
        >
          Meet the team <ArrowRight size={15} />
        </Link>
      </motion.div>

      {/* Right: values — plain text list, no cards */}
      <motion.div
        {...reveal(0.1)}
        className="lg:pl-16 pt-12 lg:pt-0 border-t lg:border-t-0"
        style={{ borderColor: C.border }}
      >
        <p style={{
          fontFamily:    "'Space Grotesk', sans-serif",
          fontSize:      '0.7rem',
          fontWeight:    600,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color:         C.muted,
          marginBottom:  '28px',
        }}>
          How we work
        </p>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {COMMUNITY_VALUES.map((value, i) => (
            <li
              key={i}
              style={{
                fontFamily:   "'Space Grotesk', sans-serif",
                fontSize:     '0.94rem',
                color:        C.secondary,
                lineHeight:   1.65,
                padding:      '18px 0',
                borderBottom: i < COMMUNITY_VALUES.length - 1 ? `1px solid ${C.border}` : 'none',
                display:      'flex',
                gap:          '14px',
                alignItems:   'flex-start',
              }}
            >
              <span
                aria-hidden="true"
                style={{ color: C.cyan, flexShrink: 0, marginTop: '1px', opacity: 0.55, fontSize: '0.9rem' }}
              >
                —
              </span>
              {value}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </section>
);


// ══════════════════════════════════════════════════════════════════════════════
// JOIN SECTION
// id="join" — Navbar and hero CTAs scroll here
// ══════════════════════════════════════════════════════════════════════════════
const JoinSection = () => (
  <section
    id="join"
    aria-labelledby="join-heading"
    style={{ paddingBottom: '80px' }}
  >
    {/* Section divider */}
    <div style={{ height: '1px', background: C.border, marginBottom: '80px' }} aria-hidden="true" />

    <motion.div
      {...reveal()}
      style={{ maxWidth: '560px', margin: '0 auto', textAlign: 'center' }}
    >
      <span className="section-tag">Open to everyone</span>

      <h2
        id="join-heading"
        style={{
          fontFamily:    "'Space Grotesk', sans-serif",
          fontWeight:    800,
          fontSize:      'clamp(1.9rem, 3.5vw, 2.8rem)',
          color:         '#fff',
          letterSpacing: '-0.035em',
          lineHeight:    1.14,
          marginBottom:  '20px',
        }}
      >
        Ready to build<br />with FUSION?
      </h2>

      <p style={{
        fontFamily:   "'Space Grotesk', sans-serif",
        fontSize:     '1rem',
        color:        C.secondary,
        lineHeight:   1.75,
        marginBottom: '36px',
      }}>
        Whether you've never touched a circuit board or you're already building
        embedded systems — FUSION is a place to learn, work alongside others, and
        ship something you're proud of.
      </p>

      {/*
        TODO (Phase 2B): Replace Link href with <Link to="/join"> when the
        registration page is implemented. /join currently resolves to NotFound.
        The design is ready — only the route needs wiring.
      */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link
            to="/join"
            className="btn btn-primary"
            id="join-cta-register"
          >
            Join FUSION <ArrowRight size={16} />
          </Link>
          <Link
            to="/team"
            className="btn btn-outline"
            id="join-cta-team"
          >
            Meet the Team <Users size={16} />
          </Link>
        </div>
        <p style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize:   '0.78rem',
          color:      '#4B5563',
          margin:     0,
        }}>
          Membership registration opens soon.
        </p>
      </div>
    </motion.div>
  </section>
);


// ══════════════════════════════════════════════════════════════════════════════
// HOME PAGE
// ══════════════════════════════════════════════════════════════════════════════
const Home = () => (
  <div>
    <HeroSection />
    <DomainsSection />
    <ProjectsSection />
    <CommunitySection />
    <JoinSection />
  </div>
);

export default Home;
