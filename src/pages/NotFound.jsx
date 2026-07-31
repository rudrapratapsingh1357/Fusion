import React from 'react';
import { Link } from 'react-router-dom';

const C = {
  cyan: '#00FFFF',
  lightgray: '#2a2a2a',
};

const NotFound = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '70vh',
        textAlign: 'center',
        padding: '40px 24px',
      }}
    >
      <div
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 'clamp(5rem, 12vw, 9rem)',
          fontWeight: 800,
          color: C.cyan,
          lineHeight: 1,
          letterSpacing: '-0.04em',
          marginBottom: '16px',
          opacity: 0.25,
        }}
      >
        404
      </div>

      <h1
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 800,
          fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
          color: '#fff',
          letterSpacing: '-0.03em',
          marginBottom: '12px',
        }}
      >
        Page not found
      </h1>

      <p
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '0.95rem',
          color: '#6B7280',
          lineHeight: 1.7,
          maxWidth: '360px',
          marginBottom: '36px',
        }}
      >
        The page you are looking for doesn't exist or has been moved.
      </p>

      <Link
        to="/"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 600,
          fontSize: '0.9rem',
          color: '#000',
          background: C.cyan,
          padding: '11px 26px',
          borderRadius: '8px',
          textDecoration: 'none',
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = '#fff'; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = C.cyan; }}
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
