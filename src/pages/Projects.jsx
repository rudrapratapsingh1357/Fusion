import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GitBranch, Box } from 'lucide-react';
import { allProjects } from '../data/projects';

const C = {
  cyan: '#00FFFF',
  border: '#1e1e1e',
  surface: '#0a0a0a',
  muted: '#6B7280',
  secondary: '#9CA3AF',
};

const FILTERS = ['All', 'IoT', 'Robotics', 'UAVs', 'Software', 'Other'];
const CORE_CATEGORIES = ['IoT', 'Robotics', 'UAVs', 'Software'];

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  // Filter logic:
  // - 'All': return everything
  // - 'Other': return anything that is not in the core categories (e.g. 'Embedded Systems')
  // - Core category: return exact match
  const filtered = activeFilter === 'All'
    ? allProjects
    : activeFilter === 'Other'
      ? allProjects.filter((p) => !CORE_CATEGORIES.includes(p.category))
      : allProjects.filter((p) => p.category === activeFilter);

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
      
      {/* ── PAGE INTRO ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: '56px' }}
      >
        <span className="section-tag">Explore our work</span>
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
          Projects
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
          Things we've built, tested, and learned from. FUSION projects bring
          together hardware, software and experimentation across IoT, robotics, UAVs and related technologies.
        </p>
      </motion.div>

      {/* ── FILTER SYSTEM ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
        style={{
          display: 'flex',
          gap: '8px',
          marginBottom: '56px',
          flexWrap: 'wrap',
          alignItems: 'center',
          borderBottom: `1px solid ${C.border}`,
          paddingBottom: '20px',
        }}
      >
        {FILTERS.map((filter) => {
          const isActive = activeFilter === filter;
          return (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.85rem',
                fontWeight: 600,
                padding: '8px 18px',
                borderRadius: '6px',
                border: `1px solid ${isActive ? C.cyan : 'transparent'}`,
                background: isActive ? 'rgba(0, 255, 255, 0.08)' : 'transparent',
                color: isActive ? C.cyan : C.muted,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.color = C.muted;
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
            >
              {filter}
            </button>
          );
        })}
        
        {/* Count Indicator */}
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.72rem',
            color: '#4B5563',
            marginLeft: 'auto',
            letterSpacing: '0.04em',
          }}
        >
          // {filtered.length} RECORDED
        </span>
      </motion.div>

      {/* ── PROJECT LISTING (Alternating Editorial Layout) ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '80px', paddingBottom: '80px' }}
        >
          {filtered.length > 0 ? (
            filtered.map((project, index) => {
              const isEven = index % 2 === 0;
              const hasGithub = project.github && project.github !== '#';
              
              return (
                <motion.article
                  key={project.title}
                  {...reveal()}
                  className={`flex flex-col lg:items-center gap-8 lg:gap-16 w-full ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                  style={{
                    borderBottom: index < filtered.length - 1 ? `1px solid ${C.border}` : 'none',
                    paddingBottom: index < filtered.length - 1 ? '80px' : '0',
                  }}
                >
                  {/* Left Column: Neutral Placeholder / Image */}
                  <div
                    style={{
                      flex: 1,
                      width: '100%',
                    }}
                  >
                    {project.image ? (
                      <div
                        style={{
                          aspectRatio: '16 / 9',
                          borderRadius: '8px',
                          overflow: 'hidden',
                          background: C.surface,
                        }}
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.4s ease',
                          }}
                        />
                      </div>
                    ) : (
                      /* Quiet, Designed Neutral Technical Placeholder */
                      <div
                        style={{
                          aspectRatio: '16 / 9',
                          borderRadius: '8px',
                          border: `1px solid ${C.border}`,
                          background: '#070707',
                          position: 'relative',
                          overflow: 'hidden',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          alignItems: 'center',
                          padding: '24px',
                        }}
                      >
                        {/* Technical grid backdrop */}
                        <div
                          style={{
                            position: 'absolute',
                            inset: 0,
                            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.015) 1px, transparent 1px)',
                            backgroundSize: '16px 16px',
                            pointerEvents: 'none',
                          }}
                          aria-hidden="true"
                        />
                        
                        {/* Placeholder Content */}
                        <Box size={20} style={{ color: '#222', marginBottom: '8px' }} aria-hidden="true" />
                        <span
                          style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontSize: '0.78rem',
                            color: '#4B5563',
                            fontWeight: 400,
                            textAlign: 'center',
                          }}
                        >
                          Project photo coming soon
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Project Details */}
                  <div
                    style={{
                      flex: 1.1,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                    }}
                  >
                    {/* Domain Category Label */}
                    <span
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: '0.74rem',
                        fontWeight: 600,
                        color: project.accent,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        marginBottom: '12px',
                        display: 'inline-block',
                      }}
                    >
                      {project.category}
                    </span>

                    {/* Project Title */}
                    <h3
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 700,
                        fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)',
                        color: '#fff',
                        letterSpacing: '-0.025em',
                        lineHeight: 1.2,
                        marginBottom: '14px',
                      }}
                    >
                      {project.title}
                    </h3>

                    {/* Project Description */}
                    <p
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: '0.94rem',
                        color: C.secondary,
                        lineHeight: 1.72,
                        marginBottom: '24px',
                        maxWidth: '520px',
                      }}
                    >
                      {project.description}
                    </p>

                    {/* Technology tags */}
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '6px',
                        marginBottom: '28px',
                      }}
                    >
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontSize: '0.72rem',
                            fontWeight: 500,
                            color: C.muted,
                            background: '#0c0c0c',
                            border: `1px solid ${C.border}`,
                            borderRadius: '4px',
                            padding: '3px 9px',
                            letterSpacing: '0.01em',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Project links (Render ONLY if a valid repository exists) */}
                    {hasGithub && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline"
                        style={{
                          padding: '8px 16px',
                          fontSize: '0.8rem',
                        }}
                      >
                        <GitBranch size={14} /> Repository
                      </a>
                    )}
                  </div>
                </motion.article>
              );
            })
          ) : (
            /* Empty State */
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{
                textAlign: 'center',
                padding: '80px 24px',
                border: `1px dashed ${C.border}`,
                borderRadius: '8px',
                maxWidth: '480px',
                margin: '40px auto',
              }}
            >
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  color: '#fff',
                  marginBottom: '10px',
                }}
              >
                No projects recorded yet
              </h3>
              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '0.88rem',
                  color: C.muted,
                  lineHeight: 1.6,
                }}
              >
                Projects in this category will appear here.
              </p>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

    </div>
  );
};

export default Projects;
