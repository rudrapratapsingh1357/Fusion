import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const C = {
  cyan: '#00FFFF',
  lightgray: '#2a2a2a',
};

const navLinks = [
  { name: 'Projects', path: '/projects' },
  { name: 'Team', path: '/team' },
  { name: 'Blueprint', path: '/blueprint' },
  { name: 'Blog', path: '/blog' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav
        style={{
          backgroundColor: scrolled ? 'rgba(0,0,0,0.95)' : 'rgba(0,0,0,0.6)',
          borderBottom: `1px solid ${scrolled ? C.lightgray : 'rgba(255,255,255,0.06)'}`,
          backdropFilter: 'blur(16px)',
          transition: 'all 0.3s ease',
        }}
        className="fixed top-0 left-0 w-full z-50"
      >
        <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">

          {/* ── LOGO ── */}
          <NavLink to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <img
              src="/fusion-logo.png"
              alt="FUSION Club"
              style={{
                height: '52px',
                width: 'auto',
              }}
            />
          </NavLink>

          {/* ── DESKTOP NAV LINKS ── */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                style={({ isActive }) => ({
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '0.9rem',
                  fontWeight: isActive ? 600 : 400,
                  textDecoration: 'none',
                  color: isActive ? '#fff' : '#9CA3AF',
                  padding: '6px 16px',
                  borderRadius: '6px',
                  backgroundColor: isActive ? 'rgba(255,255,255,0.08)' : 'transparent',
                  transition: 'all 0.2s ease',
                })}
                onMouseEnter={(e) => {
                  const isActive = e.currentTarget.getAttribute('aria-current') === 'page';
                  if (!isActive) {
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                  }
                }}
                onMouseLeave={(e) => {
                  const isActive = e.currentTarget.getAttribute('aria-current') === 'page';
                  if (!isActive) {
                    e.currentTarget.style.color = '#9CA3AF';
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* ── MOBILE HAMBURGER ── */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: 'block',
                  width: '22px',
                  height: '2px',
                  backgroundColor: '#fff',
                  borderRadius: '2px',
                  transition: 'all 0.3s ease',
                  transform:
                    mobileOpen && i === 0 ? 'rotate(45deg) translate(3px, 3px)' :
                      mobileOpen && i === 1 ? 'scaleX(0)' :
                        mobileOpen && i === 2 ? 'rotate(-45deg) translate(3px, -3px)' :
                          'none',
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* ── MOBILE MENU ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 w-full z-40 md:hidden"
            style={{
              backgroundColor: 'rgba(0,0,0,0.97)',
              borderBottom: `1px solid ${C.lightgray}`,
              backdropFilter: 'blur(16px)',
            }}
          >
            <div className="flex flex-col px-8 py-4 gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  style={({ isActive }) => ({
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '1rem',
                    fontWeight: isActive ? 600 : 400,
                    textDecoration: 'none',
                    color: isActive ? '#fff' : '#9CA3AF',
                    padding: '14px 0',
                    borderBottom: `1px solid ${C.lightgray}`,
                    display: 'block',
                  })}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
