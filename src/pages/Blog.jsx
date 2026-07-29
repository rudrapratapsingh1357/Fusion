import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Clock, User } from 'lucide-react';

const C = {
  cyan: '#00FFFF',
  orange: '#D35400',
  purple: '#7C3AED',
  green: '#22C55E',
  lightgray: '#2a2a2a',
};

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

const blogPosts = [
  {
    id: 1,
    title: 'Building Orange Pigeon AI: Real-Time Edge Vision on Raspberry Pi 5',
    excerpt: 'We\'ll walk through how we built a real-time bird detection and deterrence system using OpenCV, custom-trained YOLO weights, and audio response — all running locally on a Raspberry Pi 5 without any cloud.',
    author: 'Priyanshu Nandi',
    date: 'July 12, 2025',
    readTime: '8 min read',
    category: 'Edge AI',
    accent: C.orange,
    tags: ['Raspberry Pi', 'OpenCV', 'Computer Vision'],
    featured: true,
  },
  {
    id: 2,
    title: 'AgroVON 2.0: Designing an IoT Stack from Sensors to Mobile App',
    excerpt: 'Building AgroVON\'s sensor-to-app pipeline taught us a lot about MQTT broker configuration, data reliability on unstable connections, and keeping React Native dashboards performant with live data.',
    author: 'Saksham Sharan',
    date: 'June 28, 2025',
    readTime: '6 min read',
    category: 'IoT',
    accent: C.green,
    tags: ['Arduino', 'MQTT', 'React Native'],
    featured: false,
  },
  {
    id: 3,
    title: 'Getting Started with tinyML on ESP32: A Practical Walkthrough',
    excerpt: 'A step-by-step guide for deploying TensorFlow Lite models on microcontrollers — covering model quantization, memory constraints, and real-world inference on constrained devices.',
    author: 'Adhish Gupta',
    date: 'June 14, 2025',
    readTime: '10 min read',
    category: 'Edge AI',
    accent: C.cyan,
    tags: ['TensorFlow Lite', 'ESP32', 'tinyML'],
    featured: false,
  },
  {
    id: 4,
    title: 'BloodLink Pro: Mapping Emergency Medical Networks with Firebase & Haversine',
    excerpt: 'The architecture decisions behind BloodLink Pro — how we use the Haversine formula for proximity matching, Firebase Realtime Database for sub-second updates, and handle edge cases in emergency SOS flow.',
    author: 'Aviral Sachdeva',
    date: 'May 30, 2025',
    readTime: '7 min read',
    category: 'Full-Stack',
    accent: C.purple,
    tags: ['Firebase', 'Node.js', 'Geolocation'],
    featured: false,
  },
  {
    id: 5,
    title: 'LoRa Mesh Networking: Off-Grid Communication Experiments at FUSION',
    excerpt: 'What happens when you try to build a self-healing mesh network with LoRa modules and ESP32s in a university building? We found out — here\'s everything we learned from MeshNet Comms\'s first field test.',
    author: 'Shavez Khan',
    date: 'May 15, 2025',
    readTime: '9 min read',
    category: 'Hardware',
    accent: '#F59E0B',
    tags: ['LoRa', 'ESP32', 'Mesh Protocol'],
    featured: false,
  },
  {
    id: 6,
    title: 'How We Ran FUSION\'s First Mega Exhibition',
    excerpt: 'Organizing a 5-project showcase with live demos, audience interaction, and hardware that might break at any moment is a logistical puzzle. Here\'s how the Operations team planned and executed it.',
    author: 'Tuba Afreen',
    date: 'April 28, 2025',
    readTime: '5 min read',
    category: 'Events',
    accent: C.orange,
    tags: ['Events', 'Exhibition', 'Organization'],
    featured: false,
  },
];

const categories = ['All', 'Edge AI', 'IoT', 'Hardware', 'Full-Stack', 'Events'];

const categoryColor = {
  'Edge AI': C.cyan,
  'IoT': C.green,
  'Hardware': C.orange,
  'Full-Stack': C.purple,
  'Events': '#F59E0B',
  'All': C.cyan,
};

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter((p) => p.category === activeCategory);

  const featured = blogPosts.find((p) => p.featured);
  const rest = filtered.filter((p) => !(activeCategory === 'All' && p.featured));

  return (
    <div className="py-12">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <SectionLabel>Insights & Articles</SectionLabel>
        <h1
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: '#fff',
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            marginBottom: '12px',
          }}
        >
          Blog
        </h1>
        <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1rem', color: '#6B7280', maxWidth: '480px', lineHeight: 1.7 }}>
          Technical deep-dives, project breakdowns, and lessons from building at FUSION.
        </p>
      </motion.div>

      {/* Featured Post */}
      {activeCategory === 'All' && featured && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          style={{
            padding: '36px',
            background: '#0a0a0a',
            border: `1px solid ${featured.accent}50`,
            borderRadius: '12px',
            marginBottom: '36px',
            position: 'relative',
            overflow: 'hidden',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 16px 40px ${featured.accent}15`; }}
          onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
        >
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(to right, ${featured.accent}, transparent)` }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', flexWrap: 'wrap' }}>
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.7rem',
                fontWeight: 700,
                padding: '3px 12px',
                background: `${featured.accent}20`,
                border: `1px solid ${featured.accent}40`,
                color: featured.accent,
                borderRadius: '20px',
                letterSpacing: '0.05em',
              }}
            >
              Featured
            </span>
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.7rem',
                fontWeight: 600,
                padding: '3px 12px',
                background: `${categoryColor[featured.category]}15`,
                border: `1px solid ${categoryColor[featured.category]}30`,
                color: categoryColor[featured.category],
                borderRadius: '20px',
              }}
            >
              {featured.category}
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
              color: '#fff',
              letterSpacing: '-0.02em',
              lineHeight: 1.3,
              marginBottom: '14px',
            }}
          >
            {featured.title}
          </h2>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.95rem', color: '#6B7280', lineHeight: 1.75, marginBottom: '20px', maxWidth: '700px' }}>
            {featured.excerpt}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#6B7280' }}>
                <User size={14} />
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.8rem' }}>{featured.author}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#6B7280' }}>
                <Clock size={14} />
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.8rem' }}>{featured.readTime}</span>
              </div>
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.8rem', color: '#4B5563' }}>{featured.date}</span>
            </div>
            <button
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: '0.85rem',
                color: featured.accent,
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                transition: 'gap 0.2s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.gap = '12px'; }}
              onMouseLeave={(e) => { e.currentTarget.style.gap = '6px'; }}
            >
              Read article <ArrowRight size={15} />
            </button>
          </div>
        </motion.div>
      )}

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        style={{ display: 'flex', gap: '8px', marginBottom: '28px', flexWrap: 'wrap' }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '0.875rem',
              fontWeight: 600,
              padding: '8px 20px',
              borderRadius: '8px',
              border: `1px solid ${activeCategory === cat ? C.cyan : C.lightgray}`,
              background: activeCategory === cat ? `${C.cyan}15` : 'transparent',
              color: activeCategory === cat ? C.cyan : '#6B7280',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              if (activeCategory !== cat) { e.currentTarget.style.borderColor = '#4B5563'; e.currentTarget.style.color = '#fff'; }
            }}
            onMouseLeave={(e) => {
              if (activeCategory !== cat) { e.currentTarget.style.borderColor = C.lightgray; e.currentTarget.style.color = '#6B7280'; }
            }}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* Blog Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {rest.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '24px',
                background: '#0a0a0a',
                border: `1px solid ${C.lightgray}`,
                borderRadius: '12px',
                transition: 'all 0.3s ease',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = post.accent;
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = `0 12px 32px ${post.accent}12`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = C.lightgray;
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  padding: '3px 10px',
                  background: `${categoryColor[post.category]}12`,
                  border: `1px solid ${categoryColor[post.category]}30`,
                  color: categoryColor[post.category],
                  borderRadius: '20px',
                  marginBottom: '14px',
                  alignSelf: 'flex-start',
                }}
              >
                {post.category}
              </span>

              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: '1rem',
                  color: '#fff',
                  lineHeight: 1.45,
                  marginBottom: '10px',
                  flexGrow: 0,
                }}
              >
                {post.title}
              </h3>

              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '0.83rem',
                  color: '#6B7280',
                  lineHeight: 1.7,
                  flexGrow: 1,
                  marginBottom: '16px',
                }}
              >
                {post.excerpt.length > 130 ? post.excerpt.slice(0, 130) + '…' : post.excerpt}
              </p>

              <div
                style={{
                  paddingTop: '14px',
                  borderTop: `1px solid ${C.lightgray}`,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.75rem', color: '#D1D5DB', fontWeight: 500 }}>
                    {post.author}
                  </span>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.7rem', color: '#4B5563' }}>{post.date}</span>
                    <span style={{ color: '#4B5563' }}>·</span>
                    <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.7rem', color: '#4B5563' }}>{post.readTime}</span>
                  </div>
                </div>
                <button
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    color: post.accent,
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    flexShrink: 0,
                    transition: 'gap 0.2s ease',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.gap = '8px'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.gap = '4px'; }}
                >
                  Read <ArrowRight size={13} />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Blog;
