import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { blogPosts } from '../data/blogs';

const C = {
  cyan:      '#00FFFF',
  border:    '#1e1e1e',
  muted:     '#6B7280',
  secondary: '#9CA3AF',
};

const BlogPostDetail = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  // ── Article Not Found ────────────────────────────────────────────────────────
  if (!post) {
    return (
      <div
        style={{
          maxWidth: '640px',
          margin: '0 auto',
          padding: '80px 24px',
          textAlign: 'center',
        }}
      >
        <span
          className="section-tag"
          style={{ display: 'inline-block', marginBottom: '20px' }}
        >
          Blog
        </span>
        <h1
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            color: '#fff',
            letterSpacing: '-0.03em',
            marginBottom: '16px',
          }}
        >
          Article not found
        </h1>
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '0.95rem',
            color: C.muted,
            lineHeight: 1.7,
            marginBottom: '32px',
          }}
        >
          This article doesn't exist or may have moved.
        </p>
        <Link
          to="/blog"
          className="btn btn-outline"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
        >
          <ArrowLeft size={15} /> Back to Blog
        </Link>
      </div>
    );
  }

  // ── Article Detail ───────────────────────────────────────────────────────────
  return (
    <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px 80px' }}>

      {/* Back link */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        style={{ marginBottom: '40px' }}
      >
        <Link
          to="/blog"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '0.85rem',
            fontWeight: 600,
            color: C.muted,
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = C.muted; }}
        >
          <ArrowLeft size={14} /> Blog
        </Link>
      </motion.div>

      {/* Article header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.05 }}
      >
        {/* Category */}
        <span
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '0.72rem',
            fontWeight: 600,
            color: C.cyan,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '14px',
          }}
        >
          {post.category}
        </span>

        {/* Title */}
        <h1
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
            color: '#fff',
            letterSpacing: '-0.03em',
            lineHeight: 1.2,
            marginBottom: '20px',
          }}
        >
          {post.title}
        </h1>

        {/* Metadata row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px 20px',
            marginBottom: '32px',
            borderBottom: `1px solid ${C.border}`,
            paddingBottom: '24px',
          }}
        >
          {post.author && (
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.82rem',
                color: C.secondary,
              }}
            >
              {post.author}
            </span>
          )}
          {post.date && (
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.82rem',
                color: C.muted,
              }}
            >
              {post.date}
            </span>
          )}
          {post.readTime && (
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.82rem',
                color: C.muted,
              }}
            >
              {post.readTime}
            </span>
          )}
        </div>

        {/* Excerpt / lead */}
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '1.05rem',
            color: C.secondary,
            lineHeight: 1.75,
            marginBottom: '32px',
          }}
        >
          {post.excerpt}
        </p>

        {/* Article body: content pending notice */}
        {!post.content ? (
          <div
            style={{
              borderTop: `1px solid ${C.border}`,
              paddingTop: '32px',
            }}
          >
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.9rem',
                color: C.muted,
                lineHeight: 1.7,
              }}
            >
              The full article content is being prepared. Check back soon.
            </p>
          </div>
        ) : (
          /* Future: render markdown/rich content here */
          <div
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '0.95rem',
              color: C.secondary,
              lineHeight: 1.8,
              borderTop: `1px solid ${C.border}`,
              paddingTop: '32px',
            }}
          >
            {post.content}
          </div>
        )}
      </motion.div>

    </div>
  );
};

export default BlogPostDetail;
