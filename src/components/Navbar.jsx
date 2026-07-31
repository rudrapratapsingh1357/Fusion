import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const NAVBAR_H = 66;

const navLinks = [
  { name: 'Home',     path: '/',         end: true },
  { name: 'Projects', path: '/projects', end: false },
  { name: 'Team',     path: '/team',     end: false },
  { name: 'Journey',  path: '/journey',  end: false },
  { name: 'Blog',     path: '/blog',     end: false },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef(null);

  // Monitor scroll for styling navbar
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Keyboard Escape key handler to close menu
  useEffect(() => {
    if (!mobileOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      {/* ── MAIN NAV BAR ── */}
      <nav
        aria-label="Main navigation"
        style={{
          height: `${NAVBAR_H}px`,
          backgroundColor: scrolled ? 'rgba(0,0,0,0.96)' : 'rgba(0,0,0,0.02)',
          borderBottom: scrolled ? '1px solid #1e1e1e' : '1px solid transparent',
          backdropFilter: 'blur(20px)',
          transition: 'background-color 0.3s ease, border-color 0.3s ease',
        }}
        className="fixed top-0 left-0 w-full z-50"
      >
        <div
          className="h-full flex items-center justify-between"
          style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', gap: '20px' }}
        >

          {/* ── LOGO / IDENTITY ── */}
          <NavLink
            to="/"
            onClick={closeMobile}
            aria-label="FUSION — home"
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              flexShrink: 0,
            }}
          >
            <img
              src="/fusion-logo.png"
              alt=""
              aria-hidden="true"
              style={{ height: '36px', width: 'auto' }}
            />
            <div style={{ lineHeight: 1.25 }}>
              <div style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: '0.97rem',
                color: '#fff',
                letterSpacing: '-0.01em',
              }}>
                FUSION<span style={{ color: '#00FFFF' }}>.</span>
              </div>
              
              {/* Responsive Subtitle: Hides on tablets/small laptops before navigation collapses to mobile */}
              <div 
                className="hidden lg:block"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '0.64rem',
                  color: '#6B7280',
                  fontWeight: 400,
                  letterSpacing: '0.02em',
                  whiteSpace: 'nowrap',
                }}
              >
                IoT &amp; Robotics Club &nbsp;·&nbsp; GLA University
              </div>
            </div>
          </NavLink>

          {/* ── DESKTOP LINKS (hidden on mobile, visible on desktop) ── */}
          <div className="hidden md:flex items-center gap-1 flex-grow justify-end">
            {navLinks.map(({ name, path, end }) => (
              <NavLink
                key={name}
                to={path}
                end={end}
                className={({ isActive }) =>
                  isActive ? 'nav-link nav-link--active' : 'nav-link'
                }
              >
                {name}
              </NavLink>
            ))}

            {/* Separator */}
            <div style={{
              width: '1px',
              height: '16px',
              background: '#2a2a2a',
              margin: '0 8px',
              flexShrink: 0,
            }} aria-hidden="true" />

            {/* Join CTA */}
            <Link
              to="/join"
              className="btn btn-ghost-cyan"
              id="navbar-join-cta"
            >
              Join FUSION
            </Link>
          </div>

          {/* ── MOBILE HAMBURGER BUTTON (hidden on desktop, flex on mobile/tablet) ── */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex md:hidden"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            {/* Animated hamburger icon (hamburger -> X) */}
            <span
              style={{ display: 'block', width: '22px', height: '16px', position: 'relative' }}
              aria-hidden="true"
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    position: 'absolute',
                    left: 0,
                    width: '100%',
                    height: '2px',
                    background: '#fff',
                    borderRadius: '2px',
                    transition: 'all 0.25s ease',
                    top:
                      i === 0 ? (mobileOpen ? '7px' : '0')
                      : i === 1 ? '7px'
                      : mobileOpen ? '7px' : '14px',
                    transform:
                      mobileOpen && i === 0 ? 'rotate(45deg)'
                      : mobileOpen && i === 2 ? 'rotate(-45deg)'
                      : 'none',
                    opacity: mobileOpen && i === 1 ? 0 : 1,
                  }}
                />
              ))}
            </span>
          </button>
        </div>
      </nav>

      {/* ── MOBILE MENU & BACKDROP ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop layer to catch outside clicks and close menu */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMobile}
              style={{
                position: 'fixed',
                inset: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                backdropFilter: 'blur(4px)',
                zIndex: 48,
              }}
              aria-hidden="true"
            />

            {/* Menu panel */}
            <motion.div
              key="mobile-nav"
              id="mobile-nav"
              ref={menuRef}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="md:hidden"
              role="navigation"
              aria-label="Mobile navigation panel"
              style={{
                position: 'fixed',
                top: `${NAVBAR_H}px`,
                left: 0,
                right: 0,
                zIndex: 49,
                backgroundColor: 'rgba(4, 4, 4, 0.98)',
                borderBottom: '1px solid #1e1e1e',
                backdropFilter: 'blur(20px)',
              }}
            >
              <div style={{ padding: '8px 24px 28px' }}>
                {navLinks.map(({ name, path, end }) => (
                  <NavLink
                    key={name}
                    to={path}
                    end={end}
                    onClick={closeMobile}
                    className={({ isActive }) =>
                      isActive
                        ? 'nav-link-mobile nav-link-mobile--active'
                        : 'nav-link-mobile'
                    }
                  >
                    {name}
                  </NavLink>
                ))}

                <div style={{
                  marginTop: '20px',
                  paddingTop: '20px',
                  borderTop: '1px solid #1e1e1e',
                }}>
                  <Link
                    to="/join"
                    onClick={closeMobile}
                    className="btn btn-ghost-cyan"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    Join FUSION
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
