import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

// ─── Design Tokens ────────────────────────────────────────────────────────────
const C = {
  cyan:   '#00E5FF',
  orange: '#D35400',
  bg:     '#000000',
  card:   'rgba(255,255,255,0.03)',
  border: 'rgba(255,255,255,0.08)',
};

// ─── Top Stats ────────────────────────────────────────────────────────────────
const stats = [
  { value: '03',   label: 'Execution Phases'       },
  { value: '100%', label: 'Project-Based Learning'  },
  { value: '₹',    label: 'Hardware Incubation'     },
  { value: '01',   label: 'Mega Tech Exhibition'    },
];

// ─── Timeline Nodes ───────────────────────────────────────────────────────────
const nodes = [
  {
    tag:   '[ WEEKS 01 – 03 ]',
    phase: 'Phase I',
    title: 'The Core Bootcamp',
    desc:  'An intensive onboarding phase focusing strictly on integrating hardware with core compute. Members master real-time database syncing (Firebase), headless Linux operations (Raspberry Pi), and low-level firmware architecture.',
    tags:  ['Firebase', 'Raspberry Pi', 'Firmware', 'Linux'],
    icon:  '⚡',
  },
  {
    tag:   '[ WEEK 04 ]',
    phase: 'Phase II',
    title: 'The Project Pitch',
    desc:  'The tuition phase ends, and R&D begins. Teams pitch their disruptive ideas (like edge-AI defense or decentralized mesh networks) to the council. The most innovative architectures receive official budget approval and hardware funding.',
    tags:  ['Edge AI', 'Mesh Networks', 'Budget Approval'],
    icon:  '🎯',
  },
  {
    tag:   '[ WEEKS 05 – 12 ]',
    phase: 'Phase III',
    title: 'Sprint Hack-Sessions',
    desc:  'Formal workshops transition into dedicated weekend lab builds. Teams build their approved projects autonomously, while the FUSION Technical Wing acts as on-ground mentors to debug complex hardware and software bottlenecks.',
    tags:  ['Lab Builds', 'Mentorship', 'Autonomous Dev'],
    icon:  '🔧',
  },
  {
    tag:   '[ WEEK 13 ]',
    phase: 'Phase IV',
    title: 'The Mega Exhibition',
    desc:  'The semester culminates in a massive showcase. Teams deploy their final systems, proving their capability to turn bare-metal components and cloud APIs into production-ready tech.',
    tags:  ['Demo Day', 'Deployment', 'Production-Ready'],
    icon:  '🚀',
  },
];

// ─── Stat Card ────────────────────────────────────────────────────────────────
const StatCard = ({ value, label, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        flex: 1,
        minWidth: '140px',
        textAlign: 'center',
        padding: '28px 20px',
        background: C.card,
        border: `1px solid ${C.border}`,
        borderRadius: '16px',
        backdropFilter: 'blur(12px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top accent line */}
      <div style={{ position: 'absolute', top: 0, left: '20%', right: '20%', height: '2px', background: `linear-gradient(to right, transparent, ${C.cyan}, transparent)` }} />

      <div style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: '2.6rem',
        fontWeight: 800,
        color: C.cyan,
        letterSpacing: '-0.04em',
        lineHeight: 1,
        marginBottom: '8px',
        textShadow: `0 0 24px ${C.cyan}55`,
      }}>
        {value}
      </div>
      <div style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '0.68rem',
        color: '#6B7280',
        letterSpacing: '0.08em',
        fontWeight: 500,
      }}>
        {label}
      </div>
    </motion.div>
  );
};

// ─── Timeline Node Card ───────────────────────────────────────────────────────
const TimelineNode = ({ node, index, isLast }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const isRight = index % 2 === 0; // alternate sides on desktop

  return (
    <div
      ref={ref}
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 0,
        position: 'relative',
        paddingBottom: isLast ? 0 : '64px',
      }}
    >
      {/* ── LEFT SIDE (even = content, odd = spacer) ── */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', paddingRight: '40px' }}
           className="hidden lg:flex">
        {!isRight && (
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ maxWidth: '420px', width: '100%' }}
          >
            <NodeCard node={node} inView={inView} accentSide="right" />
          </motion.div>
        )}
      </div>

      {/* ── CENTER: dot + line ── */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, position: 'relative', zIndex: 2 }}>
        {/* Glowing dot */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.1, type: 'spring', stiffness: 300 }}
          style={{
            width: 48,
            height: 48,
            borderRadius: '50%',
            border: `2px solid ${inView ? C.cyan : 'rgba(255,255,255,0.15)'}`,
            background: inView ? `${C.cyan}15` : 'rgba(0,0,0,0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.2rem',
            transition: 'all 0.4s ease',
            boxShadow: inView ? `0 0 24px ${C.cyan}55, 0 0 48px ${C.cyan}22` : 'none',
            position: 'relative',
            zIndex: 3,
          }}
        >
          <motion.span
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ delay: 0.3, type: 'spring' }}
          >
            {node.icon}
          </motion.span>

          {/* Pulse ring */}
          {inView && (
            <motion.div
              initial={{ scale: 1, opacity: 0.6 }}
              animate={{ scale: 2.2, opacity: 0 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut' }}
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '50%',
                border: `1px solid ${C.cyan}`,
                pointerEvents: 'none',
              }}
            />
          )}
        </motion.div>

        {/* Vertical line segment below dot */}
        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeInOut' }}
            style={{
              width: 2,
              flexGrow: 1,
              minHeight: '64px',
              background: `linear-gradient(to bottom, ${C.cyan}88, ${C.cyan}11)`,
              transformOrigin: 'top',
              boxShadow: `0 0 8px ${C.cyan}44`,
            }}
          />
        )}
      </div>

      {/* ── RIGHT SIDE (even = content, odd = spacer) ── */}
      <div style={{ flex: 1, paddingLeft: '40px' }} className="hidden lg:block">
        {isRight && (
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <NodeCard node={node} inView={inView} accentSide="left" />
          </motion.div>
        )}
      </div>

      {/* ── MOBILE (always right of dot) ── */}
      <div className="lg:hidden" style={{ flex: 1, paddingLeft: '24px' }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.2 }}
        >
          <NodeCard node={node} inView={inView} accentSide="left" />
        </motion.div>
      </div>
    </div>
  );
};

// ─── Node Card ────────────────────────────────────────────────────────────────
const NodeCard = ({ node, inView, accentSide }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'rgba(0,229,255,0.04)' : C.card,
        border: `1px solid ${hovered ? `${C.cyan}55` : C.border}`,
        borderRadius: '16px',
        padding: '28px',
        backdropFilter: 'blur(16px)',
        transition: 'all 0.3s ease',
        boxShadow: hovered ? `0 0 40px ${C.cyan}12, 0 20px 48px rgba(0,0,0,0.4)` : '0 4px 24px rgba(0,0,0,0.3)',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Corner accent */}
      <div style={{
        position: 'absolute',
        top: 0,
        ...(accentSide === 'left' ? { left: 0 } : { right: 0 }),
        width: hovered ? '100%' : '40%',
        height: '2px',
        background: `linear-gradient(to ${accentSide === 'left' ? 'right' : 'left'}, ${C.cyan}, transparent)`,
        transition: 'width 0.4s ease',
      }} />

      {/* Phase badge */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.62rem',
          fontWeight: 600,
          color: C.cyan,
          background: `${C.cyan}12`,
          border: `1px solid ${C.cyan}28`,
          padding: '3px 10px',
          borderRadius: '20px',
          letterSpacing: '0.06em',
        }}>
          {node.phase}
        </span>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.6rem',
          color: '#374151',
          letterSpacing: '0.08em',
        }}>
          {node.tag}
        </span>
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 800,
        fontSize: '1.2rem',
        color: '#ffffff',
        letterSpacing: '-0.02em',
        marginBottom: '12px',
        lineHeight: 1.2,
      }}>
        {node.title}
      </h3>

      {/* Divider */}
      <div style={{ width: 32, height: 2, background: `${C.cyan}50`, marginBottom: '14px', borderRadius: '2px' }} />

      {/* Body */}
      <p style={{
        fontFamily: "'Inter', 'Space Grotesk', sans-serif",
        fontSize: '0.875rem',
        color: '#9CA3AF',
        lineHeight: 1.75,
        margin: '0 0 18px',
      }}>
        {node.desc}
      </p>

      {/* Tech tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {node.tags.map(tag => (
          <span
            key={tag}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.62rem',
              fontWeight: 500,
              padding: '3px 10px',
              background: 'rgba(0,229,255,0.06)',
              border: '1px solid rgba(0,229,255,0.18)',
              color: C.cyan,
              borderRadius: '20px',
              letterSpacing: '0.06em',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

// ─── Animated Background Line ─────────────────────────────────────────────────
const TimelineScrollLine = ({ containerRef }) => {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div
      className="hidden lg:block"
      style={{
        position: 'absolute',
        left: '50%',
        top: 24,
        bottom: 0,
        width: 2,
        transform: 'translateX(-50%)',
        background: 'rgba(255,255,255,0.05)',
        borderRadius: '2px',
        overflow: 'hidden',
        zIndex: 0,
      }}
    >
      <motion.div
        style={{
          width: '100%',
          height: '100%',
          background: `linear-gradient(to bottom, ${C.cyan}, ${C.cyan}55, transparent)`,
          scaleY,
          transformOrigin: 'top',
          boxShadow: `0 0 12px ${C.cyan}`,
        }}
      />
    </div>
  );
};

// ─── BLUEPRINT PAGE ───────────────────────────────────────────────────────────
const Blueprint = () => {
  const timelineRef = useRef(null);
  const headerRef   = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <div className="py-12" style={{ minHeight: '100vh' }}>

      {/* ── PAGE HEADER ────────────────────────────────────────────────── */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 28 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65 }}
        style={{ textAlign: 'center', marginBottom: '56px' }}
      >
        {/* Label */}
        <span style={{
          display: 'inline-block',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.68rem',
          fontWeight: 600,
          letterSpacing: '0.16em',
          color: C.cyan,
          background: `${C.cyan}10`,
          border: `1px solid ${C.cyan}28`,
          padding: '5px 16px',
          borderRadius: '20px',
          marginBottom: '20px',
          textTransform: 'uppercase',
        }}>
          FUSION Operational Roadmap
        </span>

        <h1 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 800,
          fontSize: 'clamp(2.4rem, 6vw, 4.2rem)',
          color: '#ffffff',
          letterSpacing: '-0.04em',
          lineHeight: 1.0,
          marginBottom: '18px',
        }}>
          The{' '}
          <span style={{
            color: C.cyan,
            textShadow: `0 0 32px ${C.cyan}55`,
          }}>
            Blueprint.
          </span>
        </h1>

        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '1rem',
          color: '#6B7280',
          maxWidth: '520px',
          margin: '0 auto',
          lineHeight: 1.75,
        }}>
          FUSION is just getting started. Here is our aggressive operational roadmap
          for the upcoming semester. We operate on a strict{' '}
          <span style={{ color: '#9CA3AF', fontWeight: 600 }}>pitch-and-build incubation model.</span>
        </p>
      </motion.div>

      {/* ── STAT CARDS ─────────────────────────────────────────────────── */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '16px',
        justifyContent: 'center',
        marginBottom: '88px',
      }}>
        {stats.map((s, i) => (
          <StatCard key={s.label} {...s} index={i} />
        ))}
      </div>

      {/* ── TIMELINE SECTION LABEL ──────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center', marginBottom: '64px' }}
      >
        <h2 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          fontSize: 'clamp(1.4rem, 3vw, 2rem)',
          color: '#fff',
          letterSpacing: '-0.02em',
          marginBottom: '8px',
        }}>
          Execution Roadmap
        </h2>
        <p style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.7rem',
          color: '#374151',
          letterSpacing: '0.1em',
        }}>
          // 01 SEMESTER · 04 PHASES · PRODUCTION-READY OUTPUT
        </p>

        {/* Decorative line */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', maxWidth: '320px', margin: '20px auto 0' }}>
          <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.06)' }} />
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: C.cyan, boxShadow: `0 0 10px ${C.cyan}` }} />
          <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.06)' }} />
        </div>
      </motion.div>

      {/* ── VERTICAL TIMELINE ───────────────────────────────────────────── */}
      <div
        ref={timelineRef}
        style={{ position: 'relative', maxWidth: '900px', margin: '0 auto', paddingBottom: '32px' }}
      >
        {/* Scroll-driven background line (desktop only) */}
        <TimelineScrollLine containerRef={timelineRef} />

        {/* Nodes */}
        {nodes.map((node, i) => (
          <TimelineNode
            key={node.title}
            node={node}
            index={i}
            isLast={i === nodes.length - 1}
          />
        ))}
      </div>

      {/* ── BOTTOM CALL OUT ─────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          maxWidth: '640px',
          margin: '80px auto 0',
          padding: '40px 36px',
          background: 'rgba(0,229,255,0.03)',
          border: `1px solid ${C.border}`,
          borderRadius: '16px',
          backdropFilter: 'blur(16px)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Corner accents */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: 48, height: 2, background: C.cyan }} />
        <div style={{ position: 'absolute', top: 0, left: 0, width: 2, height: 48, background: C.cyan }} />
        <div style={{ position: 'absolute', bottom: 0, right: 0, width: 48, height: 2, background: C.orange }} />
        <div style={{ position: 'absolute', bottom: 0, right: 0, width: 2, height: 48, background: C.orange }} />

        <p style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.68rem',
          color: C.cyan,
          letterSpacing: '0.12em',
          marginBottom: '12px',
        }}>
          // STATUS: SEMESTER INCOMING
        </p>
        <h3 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 800,
          fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
          color: '#fff',
          letterSpacing: '-0.03em',
          marginBottom: '14px',
        }}>
          Applications open soon.
        </h3>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.9rem',
          color: '#6B7280',
          lineHeight: 1.7,
          marginBottom: '24px',
        }}>
          If you're obsessed with building real systems — not just writing code —
          FUSION's next intake is for you.
        </p>
        <a
          href="mailto:aviralsachdeva9@gmail.com"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: '0.88rem',
            color: '#000',
            background: C.cyan,
            padding: '12px 28px',
            borderRadius: '8px',
            textDecoration: 'none',
            letterSpacing: '-0.01em',
            transition: 'all 0.25s ease',
            boxShadow: `0 0 24px ${C.cyan}44`,
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = C.cyan; e.currentTarget.style.transform = 'translateY(0)'; }}
        >
          Express Interest →
        </a>
      </motion.div>

    </div>
  );
};

export default Blueprint;
