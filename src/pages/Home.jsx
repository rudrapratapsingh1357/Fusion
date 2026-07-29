import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Cloud, Shield, Code2, Users, Layers, Zap, Eye, Bot, Radio, Server, CircuitBoard } from 'lucide-react';

const C = {
  cyan: '#00FFFF',
  orange: '#D35400',
  purple: '#7C3AED',
  gray: '#111111',
  lightgray: '#2a2a2a',
};

// ─── COUNTER ANIMATION ───────────────────────────────────────────────────────
const CountUp = ({ end, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 1500;
          const step = (end / duration) * 16;
          const interval = setInterval(() => {
            start += step;
            if (start >= end) { setCount(end); clearInterval(interval); }
            else setCount(Math.floor(start));
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return <span ref={ref}>{count}{suffix}</span>;
};

// ─── STAT CARD ───────────────────────────────────────────────────────────────
const StatCard = ({ value, suffix, label, accent, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    style={{
      textAlign: 'center',
      padding: '28px 20px',
      background: '#0a0a0a',
      border: `1px solid ${C.lightgray}`,
      borderRadius: '12px',
      flex: 1,
      minWidth: '140px',
    }}
  >
    <div
      style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: '2.8rem',
        fontWeight: 800,
        color: accent,
        lineHeight: 1,
        marginBottom: '8px',
        letterSpacing: '-0.03em',
      }}
    >
      <CountUp end={value} suffix={suffix} />
    </div>
    <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.8rem', color: '#6B7280', fontWeight: 500 }}>
      {label}
    </div>
  </motion.div>
);

// ─── DOMAIN CARD ───────────────────────────────────────────────────────────────
const DomainCard = ({ Icon, title, subtitle, body, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    style={{
      padding: '36px 32px',
      background: '#080808',
      border: `1px solid ${C.lightgray}`,
      borderRadius: '12px',
      transition: 'all 0.3s ease',
      display: 'flex',
      flexDirection: 'column',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = C.cyan;
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = `0 20px 50px ${C.cyan}12`;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = C.lightgray;
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'none';
    }}
  >
    <div
      style={{
        width: 48,
        height: 48,
        border: `1px solid ${C.lightgray}`,
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '24px',
        color: '#fff',
        background: 'rgba(255,255,255,0.04)',
      }}
    >
      <Icon size={22} />
    </div>

    <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1.1rem', color: '#fff', margin: '0 0 6px', letterSpacing: '-0.01em' }}>
      {title}
    </h3>
    <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, fontSize: '0.8rem', color: C.cyan, margin: '0 0 16px', letterSpacing: '0.02em' }}>
      {subtitle}
    </p>
    <div style={{ width: '40px', height: '1px', background: C.lightgray, marginBottom: '16px' }} />
    <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.875rem', color: '#6B7280', lineHeight: 1.75, margin: '0 0 24px', flexGrow: 1 }}>
      {body}
    </p>
    <Link
      to="/projects"
      style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: '0.82rem', color: '#9CA3AF', textDecoration: 'none', transition: 'all 0.2s ease', marginTop: 'auto' }}
      onMouseEnter={(e) => { e.currentTarget.style.color = C.cyan; e.currentTarget.style.gap = '10px'; }}
      onMouseLeave={(e) => { e.currentTarget.style.color = '#9CA3AF'; e.currentTarget.style.gap = '6px'; }}
    >
      Explore Projects <ArrowRight size={14} />
    </Link>
  </motion.div>
);

// ─── PROJECT PREVIEW CARD ─────────────────────────────────────────────────────
const ProjectCard = ({ title, desc, tags, accent, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    style={{
      padding: '28px',
      background: '#0a0a0a',
      border: `1px solid ${C.lightgray}`,
      borderRadius: '12px',
      transition: 'all 0.3s ease',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = accent;
      e.currentTarget.style.transform = 'translateY(-3px)';
      e.currentTarget.style.boxShadow = `0 12px 32px ${accent}15`;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = C.lightgray;
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'none';
    }}
  >
    <div style={{ width: 10, height: 10, borderRadius: '50%', background: accent }} />
    <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1.15rem', color: '#fff', margin: 0 }}>
      {title}
    </h3>
    <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.85rem', color: '#6B7280', lineHeight: 1.65, margin: 0, flexGrow: 1 }}>
      {desc}
    </p>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
      {tags.map((tag) => (
        <span
          key={tag}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '0.7rem',
            fontWeight: 500,
            padding: '3px 10px',
            background: `${accent}12`,
            border: `1px solid ${accent}30`,
            color: accent,
            borderRadius: '20px',
          }}
        >
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);

// ─── SECTION LABEL ────────────────────────────────────────────────────────────
const SectionLabel = ({ children }) => (
  <span
    style={{
      display: 'inline-block',
      fontFamily: "'Space Grotesk', sans-serif",
      fontSize: '0.72rem',
      fontWeight: 600,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: C.cyan,
      background: `${C.cyan}12`,
      border: `1px solid ${C.cyan}30`,
      padding: '4px 12px',
      borderRadius: '20px',
      marginBottom: '16px',
    }}
  >
    {children}
  </span>
);

// ─── DOMAINS DATA ─────────────────────────────────────────────────────────────
const softwareDomains = [
  { Icon: Cloud, title: 'Cloud & Data Engineering', tag: 'NODE.JS · FIREBASE · REALTIME DB', desc: 'Architecting scalable, real-time databases and telemetry pipelines. We utilize Node.js and Firebase to process, store, and route massive streams of data from distributed sensor nodes.' },
  { Icon: Eye, title: 'Edge AI & Vision', tag: 'OPENCV · PYTHON · TINYML', desc: 'Deploying lightweight machine learning models directly onto resource-constrained hardware. We utilize OpenCV and Python to give autonomous systems the ability to process visual data locally with zero latency.' },
  { Icon: Shield, title: 'Cyber-Physical Security', tag: 'IOT AUDIT · ENCRYPTED MESH', desc: 'Hardening physical networks against digital exploits. We focus on auditing embedded communications, testing vulnerability in IoT APIs, and developing encrypted off-grid data routing.' },
  { Icon: Layers, title: 'Full-Stack App Interfaces', tag: 'REACT NATIVE · JS FRAMEWORKS', desc: 'Building the digital dashboards that control physical hardware. We develop robust web and mobile applications using React Native and modern JavaScript frameworks to visualize hardware metrics in real-time.' },
  { Icon: Zap, title: 'Algorithmic Optimization', tag: 'DSA · MEMORY · POWER MGMT', desc: 'Applying competitive programming logic to hardware limitations. We write highly optimized algorithms to manage memory allocation, execution time, and power efficiency on low-level microcontrollers.' },
];

const hardwareDomains = [
  { Icon: Bot, title: 'Advanced Robotics & UAVs', tag: 'DRONES · ROVERS · FLIGHT CTRL', desc: 'Engineering autonomous drones and rovers. We focus on aerodynamic frame builds, payload mechanisms, and integrating custom flight controllers that act upon our Edge AI scripts.' },
  { Icon: Radio, title: 'IoT & Sensor Ecosystems', tag: 'ESP32 · BIOMETRIC · ACOUSTIC', desc: 'Constructing the sensory organs of our network. We integrate complex sensor modules (environmental, biometric, acoustic) with microcontrollers like the ESP32 to capture high-fidelity physical data.' },
  { Icon: Cpu, title: 'Embedded Firmware Design', tag: 'C · RTOS · HARDWARE INTERRUPTS', desc: 'Writing the bare-metal logic that bridges software and circuitry. We program in low-level C to explicitly control actuators, motors, and hardware interrupts with extreme precision.' },
  { Icon: Server, title: 'Microcomputing Nodes', tag: 'RASPBERRY PI 5 · HEADLESS LINUX', desc: 'Setting up and managing high-performance edge nodes. We specialize in configuring headless Linux environments on systems like the Raspberry Pi 5 to act as localized master servers for our IoT fleets.' },
  { Icon: CircuitBoard, title: 'Hardware Prototyping & Circuitry', tag: 'PCB · SOLDERING · ENCLOSURES', desc: 'Moving from breadboards to robust physical systems. We design custom wiring logic, handle complex soldering integrations, and build the structural housing for production-ready hardware deployments.' },
];

// ─── DOMAIN TOGGLE CARD ───────────────────────────────────────────────────────
const DomainToggleCard = ({ Icon, title, tag, desc, index, accent }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '28px',
        background: '#0a0a0a',
        border: `1px solid ${hovered ? accent : '#1e1e1e'}`,
        borderRadius: '14px',
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
        transition: 'border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered ? `0 16px 48px ${accent}14` : 'none',
        cursor: 'default',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ghost icon */}
      <div style={{ position: 'absolute', bottom: -8, right: -8, opacity: hovered ? 0.055 : 0.025, transition: 'opacity 0.3s', pointerEvents: 'none' }}>
        <Icon size={100} color={accent} />
      </div>

      {/* Top sweep line on hover */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: hovered ? '100%' : '0%', height: '2px', background: `linear-gradient(to right, ${accent}, transparent)`, transition: 'width 0.4s ease', borderRadius: '14px 14px 0 0' }} />

      {/* Icon badge */}
      <div style={{ width: 42, height: 42, background: `${accent}15`, border: `1px solid ${accent}30`, borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: accent, flexShrink: 0 }}>
        <Icon size={20} />
      </div>

      {/* Content */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', zIndex: 1 }}>
        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1.05rem', color: '#fff', margin: 0, letterSpacing: '-0.01em' }}>
          {title}
        </h3>
        <span style={{ fontFamily: "'JetBrains Mono', 'Courier New', monospace", fontSize: '0.6rem', fontWeight: 500, letterSpacing: '0.1em', color: accent, opacity: 0.75 }}>
          {tag}
        </span>
        <div style={{ width: 28, height: 1, background: '#1e1e1e', marginTop: 4 }} />
        <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.875rem', color: '#6B7280', lineHeight: 1.75, margin: 0 }}>
          {desc}
        </p>
      </div>
    </motion.div>
  );
};

// ─── DOMAINS SECTION (embedded in Home) ───────────────────────────────────────
const DomainsSection = () => {
  const [activeTab, setActiveTab] = useState('software');
  const isSoftware = activeTab === 'software';
  const domains = isSoftware ? softwareDomains : hardwareDomains;
  const accent = isSoftware ? C.cyan : C.orange;

  return (
    <section className="py-24 px-4" style={{ background: 'rgba(255,255,255,0.015)' }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} style={{ marginBottom: '40px', textAlign: 'center' }}>
          <SectionLabel>Core Tech Domains</SectionLabel>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '14px' }}>
            10 Specialization Tracks.
          </h2>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.95rem', color: '#6B7280', maxWidth: '440px', lineHeight: 1.7, margin: '0 auto 32px' }}>
            Two pillars. Every discipline tightly integrated into production-ready systems that interact with the physical world.
          </p>

          {/* Toggle pill */}
          <div style={{ display: 'inline-flex', background: '#0d0d0d', border: '1px solid #1e1e1e', borderRadius: '60px', padding: '5px', gap: '4px' }}>
            {[
              { key: 'software', label: '💻  Software & Compute', pillAccent: C.cyan, textOnActive: '#000' },
              { key: 'hardware', label: '⚙️  Hardware & Systems', pillAccent: C.orange, textOnActive: '#fff' },
            ].map(({ key, label, pillAccent, textOnActive }) => {
              const isActive = activeTab === key;
              return (
                <button
                  key={key}
                  id={`home-domains-tab-${key}`}
                  onClick={() => setActiveTab(key)}
                  style={{ position: 'relative', fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.88rem', fontWeight: isActive ? 700 : 500, color: isActive ? textOnActive : '#6B7280', background: 'none', border: 'none', padding: '10px 24px', borderRadius: '50px', cursor: 'pointer', transition: 'color 0.25s ease', zIndex: 1, whiteSpace: 'nowrap', letterSpacing: '-0.01em' }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="homeDomainPill"
                      style={{ position: 'absolute', inset: 0, borderRadius: '50px', background: pillAccent, zIndex: -1 }}
                      transition={{ type: 'spring', stiffness: 420, damping: 36 }}
                    />
                  )}
                  {label}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Active tab label row */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab + '-label'}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', marginBottom: '24px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: 3, height: 24, background: accent, borderRadius: '4px' }} />
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: '0.95rem', color: '#fff' }}>
                {isSoftware ? 'Software & Compute' : 'Hardware & Systems'}
              </span>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: '#4B5563', letterSpacing: '0.06em' }}>
                {isSoftware ? '// The Brain' : '// The Muscle'} · 05 tracks
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '7px', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.67rem', color: accent, background: `${accent}10`, border: `1px solid ${accent}25`, padding: '5px 12px', borderRadius: '20px', letterSpacing: '0.06em' }}>
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: accent, boxShadow: `0 0 6px ${accent}`, display: 'inline-block' }} />
              OPEN_FOR_RESEARCH
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Cards grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: '18px' }}
          >
            {domains.map((d, i) => (
              <DomainToggleCard key={d.title} {...d} index={i} accent={accent} />
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

// ─── HOME PAGE ────────────────────────────────────────────────────────────────
const Home = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const words = ['Innovate.', 'Build.', 'Collaborate.', 'Deploy.'];

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative flex flex-col justify-center min-h-[90vh] px-4">

        {/* Announcement Banner */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '48px' }}
        >
          <Link
            to="/projects"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '0.85rem',
              fontWeight: 500,
              color: '#9CA3AF',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              padding: '8px 16px 8px 12px',
              borderRadius: '8px',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#9CA3AF'; }}
          >
            <span style={{ fontSize: '1rem' }}>🔧</span>
            Check out our latest Projects
            <span style={{ color: '#6B7280', margin: '0 2px' }}>|</span>
            <span style={{ color: C.cyan, fontWeight: 600 }}>Projects →</span>
          </Link>
        </motion.div>

        {/* Two-column: text left, logo right */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 w-full max-w-7xl">

          {/* ── LEFT: Content ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex-1 max-w-2xl"
          >
            <h1
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(2.6rem, 6vw, 5rem)',
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
                marginBottom: '28px',
              }}
            >
              Build. Innovate.<br />Collaborate.
            </h1>

            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '1rem',
                lineHeight: 1.8,
                color: '#9CA3AF',
                marginBottom: '8px',
              }}
            >
              <span style={{ color: C.cyan, fontWeight: 600 }}>FUSION Club</span>
              {', '}Where Hardware Meets Intelligence. We are GLA University's vibrant Research and Development Club. Our passion lies in creating cutting-edge projects, merging hardware and software, and pushing the boundaries of technology. Join us on this journey of ideation and innovation as we take R&D to new heights.
            </p>

            <div style={{ marginTop: '36px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link
                to="/projects"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  color: '#000',
                  background: C.cyan,
                  padding: '12px 26px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = C.cyan; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                Explore Projects <ArrowRight size={17} />
              </Link>
              <Link
                to="/team"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  color: '#fff',
                  background: 'transparent',
                  padding: '12px 26px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  border: `1px solid ${C.lightgray}`,
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = C.lightgray; e.currentTarget.style.background = 'transparent'; }}
              >
                Meet the Team <Users size={17} />
              </Link>
            </div>
          </motion.div>

          {/* ── RIGHT: Logo ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-shrink-0 flex items-center justify-center"
            style={{ isolation: 'isolate' }}
          >
            <motion.img
              src="/fusion-hero-logo.png"
              alt="FUSION Club Logo"
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              style={{
                width: 'clamp(260px, 32vw, 420px)',
                height: 'auto',
                /*
                  invert(1): white bg → black, cyan → warm orange
                  hue-rotate(180deg): warm orange → back to blue/cyan
                  brightness(1.4): bring back luminosity
                  screen blend: black (inverted white bg) disappears on dark page
                  result: logo merged with bg like SPIDER, no white box
                */
                filter: 'invert(1) hue-rotate(180deg) brightness(1.4) saturate(1.2)',
                mixBlendMode: 'screen',
              }}
            />
          </motion.div>

        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          style={{ position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', color: '#4B5563' }}
        >
          <div style={{ width: 1, height: 36, background: 'linear-gradient(to bottom, transparent, #4B5563)' }} />
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.65rem', letterSpacing: '0.12em' }}>SCROLL</span>
        </motion.div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────────────── */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
            <StatCard value={10} suffix="+" label="Production-Ready Projects" accent={C.cyan} delay={0.0} />
            <StatCard value={4} suffix="" label="Core Tech Domains" accent={C.cyan} delay={0.1} />
            <StatCard value={12} suffix="+" label="Core Tech Mentors" accent={C.cyan} delay={0.2} />
          </div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionLabel>About FUSION</SectionLabel>
              <h2
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 800,
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
                  color: '#fff',
                  lineHeight: 1.2,
                  letterSpacing: '-0.03em',
                  marginBottom: '20px',
                }}
              >
                Building Real Systems.<br />
                <span style={{ color: C.cyan }}>Not Just Concepts.</span>
              </h2>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1rem', color: '#9CA3AF', lineHeight: 1.8, marginBottom: '28px' }}>
                FUSION is GLA University's premier R&D incubator for computer science and hardware engineering. As a newly established powerhouse, we strictly focus on moving beyond theoretical concepts. Our mission is to architect, build, and deploy production-ready ecosystems—from bare-metal microcontrollers to real-time cloud interfaces. We don't just write code; we make it interact with the physical world.
              </p>
              <Link
                to="/team"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  color: C.cyan,
                  textDecoration: 'none',
                  transition: 'gap 0.2s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.gap = '14px'; }}
                onMouseLeave={(e) => { e.currentTarget.style.gap = '8px'; }}
              >
                Meet the team <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
            >
              {[
                { icon: Zap, text: 'End-to-end project incubation—from firmware logic to cloud architecture.' },
                { icon: Cpu, text: 'Cross-domain engineering utilizing Edge AI, Firebase, and IoT.' },
                { icon: Layers, text: 'Strict "Hack & Build" weekend lab sessions to deploy prototypes fast.' },
                { icon: Users, text: 'Mentorship driven by production-level problem solving and algorithms.' },
              ].map(({ icon: Icon, text }, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '16px 20px',
                    background: '#0a0a0a',
                    border: `1px solid ${C.lightgray}`,
                    borderRadius: '10px',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = C.cyan; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = C.lightgray; }}
                >
                  <div style={{ color: C.cyan, flexShrink: 0 }}>
                    <Icon size={20} />
                  </div>
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.9rem', color: '#D1D5DB' }}>
                    {text}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── DOMAINS ──────────────────────────────────────────────────────── */}
      <DomainsSection />

      {/* ── COUNCIL MEMBERS ────────────────────────────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">

          {/* Header row */}
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <div>
              <SectionLabel>Leadership</SectionLabel>
              <h2
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 800,
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
                  color: '#fff',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.2,
                  margin: 0,
                }}
              >
                Council Members
              </h2>
            </div>
            <Link
              to="/team"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: '0.85rem',
                color: C.cyan,
                textDecoration: 'none',
                transition: 'gap 0.2s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.gap = '12px'; }}
              onMouseLeave={(e) => { e.currentTarget.style.gap = '6px'; }}
            >
              View full team <ArrowRight size={15} />
            </Link>
          </div>

          {/* Members Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {[
              { name: 'Aviral Sachdeva', role: 'President', accent: C.cyan, photo: '/team/aviral.jpg' },
              { name: 'Rudra Pratap Singh', role: 'Vice President', accent: C.cyan, photo: '/team/rudra.jpg' },
              { name: 'Shreya Singh', role: 'General Secretary', accent: C.cyan, photo: '/team/shreya.jpg' },
              { name: 'Priyanshu Nandi', role: 'Technical Team Director', accent: C.cyan, photo: 'https://api.dicebear.com/9.x/initials/svg?seed=Priyanshu+Nandi&backgroundColor=0d1117&textColor=00ffff&radius=12' },
              { name: 'Anuj Patwa', role: 'Outreach Team Head', accent: C.cyan, photo: 'https://api.dicebear.com/9.x/initials/svg?seed=Anuj+Patwa&backgroundColor=0d1117&textColor=00ffff&radius=12' },
            ].map(({ name, role, accent, photo }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                style={{
                  background: '#0a0a0a',
                  border: `1px solid #2a2a2a`,
                  borderRadius: '14px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = accent;
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = `0 16px 40px ${accent}18`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#2a2a2a';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Photo area */}
                <div
                  style={{
                    width: '100%',
                    aspectRatio: '1 / 1',
                    background: `${accent}10`,
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={photo}
                    alt={name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top',
                      display: 'block',
                    }}
                  />
                  {/* Accent bottom line */}
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 3, background: `linear-gradient(to right, ${accent}, transparent)` }} />
                </div>

                {/* Info */}
                <div style={{ padding: '16px' }}>
                  <p
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: '0.95rem',
                      color: '#fff',
                      margin: '0 0 4px',
                    }}
                  >
                    {name}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '0.78rem',
                      color: accent,
                      fontWeight: 500,
                      margin: 0,
                    }}
                  >
                    {role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.75rem', color: '#4B5563', marginTop: '16px', textAlign: 'center' }}>
            * Demo photos shown — actual photos coming soon
          </p>
        </div>
      </section>


      {/* ── JOIN CTA ──────────────────────────────────────────────────────── */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              style={{
                padding: '60px 40px',
                background: 'linear-gradient(135deg, rgba(0,255,255,0.05), rgba(211,84,0,0.05))',
                border: `1px solid ${C.lightgray}`,
                borderRadius: '16px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Corner accents */}
              <div style={{ position: 'absolute', top: 0, left: 0, width: 60, height: 2, background: C.cyan }} />
              <div style={{ position: 'absolute', top: 0, left: 0, width: 2, height: 60, background: C.cyan }} />
              <div style={{ position: 'absolute', bottom: 0, right: 0, width: 60, height: 2, background: C.orange }} />
              <div style={{ position: 'absolute', bottom: 0, right: 0, width: 2, height: 60, background: C.orange }} />

              <SectionLabel>Open Recruitment</SectionLabel>
              <h2
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 800,
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)',
                  color: '#fff',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.2,
                  marginBottom: '16px',
                }}
              >
                Ready to build something real?
              </h2>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1rem', color: '#9CA3AF', lineHeight: 1.7, marginBottom: '32px' }}>
                FUSION is always looking for curious builders — hardware hackers, ML enthusiasts, and full-stack developers alike. Drop us a message or show up at our next session.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:aviralsachdeva9@gmail.com"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    color: '#000',
                    background: C.cyan,
                    padding: '13px 28px',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#fff'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = C.cyan; }}
                >
                  Get in Touch <ArrowRight size={16} />
                </a>
                <Link
                  to="/blog"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    color: '#fff',
                    background: 'transparent',
                    padding: '13px 28px',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    border: `1px solid ${C.lightgray}`,
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = C.lightgray; e.currentTarget.style.background = 'transparent'; }}
                >
                  Read Our Blog
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Home;
