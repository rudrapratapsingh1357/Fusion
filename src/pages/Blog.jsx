import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogs';

const C = {
  cyan:      '#00FFFF',
  border:    '#1e1e1e',
  muted:     '#6B7280',
  secondary: '#9CA3AF',
};

// Derive category list dynamically from existing posts
const FILTERS = ['All', ...Array.from(new Set(blogPosts.map((p) => p.category)))];

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-30px' },
  transition: { duration: 0.45, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

// ─── Blog post list row ───────────────────────────────────────────────────────
const PostRow = ({ post, index }) => (
  <motion.article
    key={post.slug}
    {...reveal(index * 0.05)}
    style={{
      borderBottom: `1px solid ${C.border}`,
      paddingBottom: '28px',
      marginBottom: '28px',
    }}
  >
    <Link
      to={`/blog/${post.slug}`}
      style={{ textDecoration: 'none', display: 'block' }}
    >
      <div
        className="flex flex-col sm:flex-row sm:items-start gap-4 group"
        style={{ cursor: 'pointer' }}
      >
        {/* Left: date + category */}
        <div
          style={{
            flexShrink: 0,
            width: '140px',
            paddingTop: '3px',
          }}
        >
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '0.72rem',
              fontWeight: 600,
              color: C.cyan,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '4px',
            }}
          >
            {post.category}
          </span>
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '0.72rem',
              color: C.muted,
              display: 'block',
            }}
          >
            {post.date}
          </span>
        </div>

        {/* Right: content */}
        <div style={{ flex: 1 }}>
          <h3
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(1rem, 2vw, 1.1rem)',
              color: '#fff',
              letterSpacing: '-0.015em',
              lineHeight: 1.35,
              marginBottom: '8px',
              transition: 'color 0.2s ease',
            }}
            className="group-hover:text-[#00FFFF]"
          >
            {post.title}
          </h3>
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '0.88rem',
              color: C.secondary,
              lineHeight: 1.7,
              maxWidth: '600px',
              marginBottom: '12px',
            }}
          >
            {post.excerpt.length > 160 ? post.excerpt.slice(0, 160) + '…' : post.excerpt}
          </p>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              flexWrap: 'wrap',
            }}
          >
            {post.author && (
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '0.78rem',
                  color: C.muted,
                }}
              >
                {post.author}
              </span>
            )}
            {post.readTime && (
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '0.78rem',
                  color: '#4B5563',
                }}
              >
                {post.readTime}
              </span>
            )}
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.78rem',
                fontWeight: 600,
                color: C.cyan,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                marginLeft: 'auto',
              }}
            >
              Read <ArrowRight size={13} />
            </span>
          </div>
        </div>
      </div>
    </Link>
  </motion.article>
);

// ─── BLOG PAGE ────────────────────────────────────────────────────────────────
const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>

      {/* ── PAGE INTRO ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: '48px' }}
      >
        <span className="section-tag">Writing from FUSION</span>
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
          Blog
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
          Ideas, builds, and stories from FUSION. Technical learning, project breakdowns, and updates from the club.
        </p>
      </motion.div>

      {/* ── FILTER TABS ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
        style={{
          display: 'flex',
          gap: '8px',
          marginBottom: '40px',
          flexWrap: 'wrap',
          alignItems: 'center',
          borderBottom: `1px solid ${C.border}`,
          paddingBottom: '20px',
        }}
      >
        {FILTERS.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
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
                if (!isActive) { e.currentTarget.style.color = '#fff'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.04)'; }
              }}
              onMouseLeave={(e) => {
                if (!isActive) { e.currentTarget.style.color = C.muted; e.currentTarget.style.backgroundColor = 'transparent'; }
              }}
            >
              {cat}
            </button>
          );
        })}
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.72rem',
            color: '#4B5563',
            marginLeft: 'auto',
            letterSpacing: '0.04em',
          }}
        >
          // {filtered.length} ARTICLE{filtered.length !== 1 ? 'S' : ''}
        </span>
      </motion.div>

      {/* ── ARTICLE LIST ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          style={{ paddingBottom: '40px' }}
        >
          {filtered.length > 0 ? (
            filtered.map((post, i) => (
              <PostRow key={post.slug} post={post} index={i} />
            ))
          ) : (
            <div
              style={{
                textAlign: 'center',
                padding: '60px 24px',
                border: `1px dashed ${C.border}`,
                borderRadius: '8px',
                maxWidth: '400px',
                margin: '0 auto',
              }}
            >
              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '0.9rem',
                  color: C.muted,
                }}
              >
                No articles in this category yet.
              </p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

    </div>
  );
};

export default Blog;
