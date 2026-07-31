import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { journeyData } from '../data/timeline';

const C = {
  cyan:   '#00FFFF',
  border: '#1e1e1e',
  muted:  '#6B7280',
  secondary: '#9CA3AF',
};

// Type label colors — all restrained within the FUSION cyan system
const TYPE_ACCENT = {
  Milestone:   '#00FFFF',
  Workshop:    '#9CA3AF',
  Project:     '#9CA3AF',
  Competition: '#9CA3AF',
  Achievement: '#00FFFF',
  Recruitment: '#9CA3AF',
  Event:       '#9CA3AF',
};


// ─── Scroll-driven timeline progress line ─────────────────────────────────────
const TimelineScrollLine = ({ containerRef }) => {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div
      className="hidden md:block"
      style={{
        position: 'absolute',
        left: '120px',
        top: 8,
        bottom: 0,
        width: 1,
        background: C.border,
        borderRadius: '1px',
        overflow: 'hidden',
        zIndex: 0,
      }}
    >
      <motion.div
        style={{
          width: '100%',
          height: '100%',
          background: `linear-gradient(to bottom, ${C.cyan}, rgba(0,255,255,0.15), transparent)`,
          scaleY,
          transformOrigin: 'top',
        }}
      />
    </div>
  );
};

// ─── Single journey event node ─────────────────────────────────────────────────
const JourneyNode = ({ entry, _index, isLast }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const hasLink = entry.link && entry.link.trim() !== '' && entry.link !== '#';

  return (
    <div
      ref={ref}
      style={{
        display: 'flex',
        gap: 0,
        alignItems: 'flex-start',
        paddingBottom: isLast ? 0 : '52px',
        position: 'relative',
      }}
    >
      {/* Date column (desktop) */}
      <div
        className="hidden md:flex"
        style={{
          width: '120px',
          flexShrink: 0,
          paddingRight: '24px',
          paddingTop: '4px',
          justifyContent: 'flex-end',
        }}
      >
        <span
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '0.75rem',
            color: C.muted,
            textAlign: 'right',
            lineHeight: 1.4,
          }}
        >
          {entry.date}
        </span>
      </div>

      {/* Center dot */}
      <div
        style={{
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          zIndex: 2,
          position: 'relative',
        }}
      >
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.35, delay: 0.1, type: 'spring', stiffness: 280 }}
          style={{
            width: 10,
            height: 10,
            borderRadius: '50%',
            border: `1px solid ${inView ? C.cyan : '#333'}`,
            background: inView ? `${C.cyan}30` : '#111',
            transition: 'all 0.4s ease',
            marginTop: '6px',
          }}
        />
        {!isLast && (
          <div
            style={{
              width: 1,
              flexGrow: 1,
              minHeight: '52px',
              background: C.border,
              marginTop: '6px',
            }}
          />
        )}
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.45, delay: 0.15 }}
        style={{
          flex: 1,
          paddingLeft: '24px',
          paddingTop: 0,
        }}
      >
        {/* Mobile date */}
        <span
          className="md:hidden"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '0.72rem',
            color: C.muted,
            display: 'block',
            marginBottom: '6px',
          }}
        >
          {entry.date}
        </span>

        {/* Type tag */}
        {entry.type && (
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '0.68rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: TYPE_ACCENT[entry.type] || C.muted,
              display: 'block',
              marginBottom: '6px',
            }}
          >
            {entry.type}
          </span>
        )}

        {/* Title */}
        <h3
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: '1.05rem',
            color: '#fff',
            letterSpacing: '-0.015em',
            lineHeight: 1.3,
            marginBottom: '8px',
          }}
        >
          {entry.title}
        </h3>

        {/* Description */}
        {entry.description && (
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '0.88rem',
              color: C.secondary,
              lineHeight: 1.7,
              marginBottom: hasLink ? '12px' : 0,
              maxWidth: '560px',
            }}
          >
            {entry.description}
          </p>
        )}

        {/* Optional link */}
        {hasLink && (
          <a
            href={entry.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '0.8rem',
              fontWeight: 600,
              color: C.cyan,
              textDecoration: 'none',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.7'; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
          >
            Learn more →
          </a>
        )}
      </motion.div>
    </div>
  );
};

// ─── JOURNEY PAGE ──────────────────────────────────────────────────────────────
const Journey = () => {
  const timelineRef = useRef(null);
  const hasEntries = journeyData.length > 0;

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>

      {/* ── PAGE INTRO ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: '56px', borderBottom: `1px solid ${C.border}`, paddingBottom: '32px' }}
      >
        <span className="section-tag">FUSION · GLA University</span>
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
          Built one step<br />at a time.
        </h1>
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '1.05rem',
            color: C.secondary,
            lineHeight: 1.7,
            maxWidth: '520px',
          }}
        >
          A growing record of FUSION's activities, workshops, projects and milestones — documented as the club grows.
        </p>
      </motion.div>

      {/* ── TIMELINE OR EMPTY STATE ── */}
      {hasEntries ? (
        /* Timeline with real data */
        <div
          ref={timelineRef}
          style={{ position: 'relative', paddingBottom: '48px' }}
        >
          <TimelineScrollLine containerRef={timelineRef} />
          {journeyData.map((entry, i) => (
            <JourneyNode
              key={entry.id}
              entry={entry}
              index={i}
              isLast={i === journeyData.length - 1}
            />
          ))}
        </div>
      ) : (
        /* Clean empty state */
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '20px',
            paddingTop: '16px',
          }}
        >
          {/* Faint vertical line to show the timeline structure */}
          <div
            className="hidden md:flex items-start"
            style={{ gap: 0, position: 'relative', width: '100%', minHeight: '220px' }}
          >
            <div
              style={{
                width: '120px',
                flexShrink: 0,
              }}
            />
            <div
              style={{
                width: 1,
                background: C.border,
                alignSelf: 'stretch',
                flexShrink: 0,
              }}
            />
            <div style={{ flex: 1, paddingLeft: '32px', paddingTop: '4px' }}>
              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '1rem',
                  color: C.muted,
                  lineHeight: 1.7,
                  maxWidth: '400px',
                }}
              >
                Journey updates coming soon.
              </p>
              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '0.85rem',
                  color: '#374151',
                  lineHeight: 1.6,
                  maxWidth: '400px',
                  marginTop: '10px',
                }}
              >
                FUSION's workshops, events, projects and milestones will be documented here as the club grows.
              </p>
            </div>
          </div>

          {/* Mobile empty state */}
          <div className="md:hidden">
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '1rem',
                color: C.muted,
                lineHeight: 1.7,
              }}
            >
              Journey updates coming soon.
            </p>
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.85rem',
                color: '#374151',
                lineHeight: 1.6,
                marginTop: '10px',
              }}
            >
              FUSION's workshops, events, projects and milestones will be documented here as the club grows.
            </p>
          </div>
        </motion.div>
      )}

    </div>
  );
};

export default Journey;
