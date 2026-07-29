import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GitBranch, Activity, Database, Radio, Cpu, Shield, Code2 } from 'lucide-react';

const C = {
  cyan: '#00FFFF',
  orange: '#D35400',
  purple: '#7C3AED',
  green: '#22C55E',
  gray: '#0a0a0a',
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

const allProjects = [
  {
    title: 'BloodLink Pro',
    description: 'A real-time, full-stack medical emergency SOS network mapping regional blood donations using Firebase and the Haversine formula for proximity matching.',
    tags: ['Firebase', 'Node.js', 'Maps API', 'Geolocation'],
    Icon: Database,
    accent: C.cyan,
    category: 'Software',
    version: 'v2.1.4',
    status: 'Active',
    github: '#',
  },
  {
    title: 'Orange Pigeon AI',
    description: 'An AI-powered edge defense system designed to detect and deter birds using live computer vision and real-time audio response deployed on Raspberry Pi 5.',
    tags: ['Raspberry Pi 5', 'OpenCV', 'Python', 'Audio Tracking'],
    Icon: Activity,
    accent: C.orange,
    category: 'Hardware',
    version: 'v1.3.0',
    status: 'Active',
    github: '#',
  },
  {
    title: 'AgroVON 2.0',
    description: 'A smart farming ecosystem featuring an Arduino-based IoT sensor network broadcasting soil, temperature, and humidity data to a React Native mobile app.',
    tags: ['React Native', 'Arduino', 'MQTT', 'Sensor Networks'],
    Icon: Radio,
    accent: C.green,
    category: 'Hardware',
    version: 'v2.0.1',
    status: 'Active',
    github: '#',
  },
  {
    title: 'EdgeVision CCTV',
    description: 'A low-latency surveillance system using tinyML inference on ESP32-CAM for on-device object detection without any cloud dependency.',
    tags: ['ESP32-CAM', 'TensorFlow Lite', 'C++', 'RTOS'],
    Icon: Cpu,
    accent: C.purple,
    category: 'Hardware',
    version: 'v1.0.0',
    status: 'In Development',
    github: '#',
  },
  {
    title: 'MeshNet Comms',
    description: 'Decentralized LoRa mesh network for off-grid communication, enabling peer-to-peer text and sensor data relay across long distances.',
    tags: ['LoRa', 'ESP32', 'Mesh Protocol', 'RF'],
    Icon: Shield,
    accent: '#F59E0B',
    category: 'Hardware',
    version: 'v0.9.2',
    status: 'In Development',
    github: '#',
  },
  {
    title: 'FUSION Dashboard',
    description: 'The internal club management portal — tracking projects, member contributions, session attendance, and resource allocation across all domains.',
    tags: ['React', 'Firebase', 'Tailwind', 'Auth'],
    Icon: Code2,
    accent: C.cyan,
    category: 'Software',
    version: 'v1.2.0',
    status: 'Active',
    github: '#',
  },
];

const filters = ['All', 'Hardware', 'Software'];

const statusColor = {
  'Active': C.green,
  'In Development': C.orange,
  'Archived': '#6B7280',
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? allProjects
    : allProjects.filter((p) => p.category === activeFilter);

  return (
    <div className="py-12">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <SectionLabel>Our Work</SectionLabel>
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
          Projects
        </h1>
        <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1rem', color: '#6B7280', maxWidth: '500px', lineHeight: 1.7 }}>
          From embedded firmware to production web apps — everything FUSION has shipped.
        </p>
      </motion.div>

      {/* Filter Tabs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        style={{ display: 'flex', gap: '8px', marginBottom: '36px', flexWrap: 'wrap' }}
      >
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '0.875rem',
              fontWeight: 600,
              padding: '8px 20px',
              borderRadius: '8px',
              border: `1px solid ${activeFilter === filter ? C.cyan : C.lightgray}`,
              background: activeFilter === filter ? `${C.cyan}15` : 'transparent',
              color: activeFilter === filter ? C.cyan : '#6B7280',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              if (activeFilter !== filter) {
                e.currentTarget.style.borderColor = '#4B5563';
                e.currentTarget.style.color = '#fff';
              }
            }}
            onMouseLeave={(e) => {
              if (activeFilter !== filter) {
                e.currentTarget.style.borderColor = C.lightgray;
                e.currentTarget.style.color = '#6B7280';
              }
            }}
          >
            {filter}
          </button>
        ))}
        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.8rem', color: '#4B5563', alignSelf: 'center', marginLeft: '8px' }}>
          {filtered.length} project{filtered.length !== 1 ? 's' : ''}
        </span>
      </motion.div>

      {/* Project Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '28px',
                background: C.gray,
                border: `1px solid ${C.lightgray}`,
                borderRadius: '12px',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = project.accent;
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = `0 16px 40px ${project.accent}18`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = C.lightgray;
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* BG icon watermark */}
              <div style={{ position: 'absolute', bottom: -8, right: -8, opacity: 0.04 }}>
                <project.Icon size={90} color={project.accent} />
              </div>

              {/* Top row: icon + version + status */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    background: `${project.accent}15`,
                    border: `1px solid ${project.accent}30`,
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: project.accent,
                  }}
                >
                  <project.Icon size={20} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
                  <span
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      padding: '3px 10px',
                      background: `${statusColor[project.status]}15`,
                      border: `1px solid ${statusColor[project.status]}40`,
                      color: statusColor[project.status],
                      borderRadius: '20px',
                    }}
                  >
                    {project.status}
                  </span>
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.7rem', color: '#4B5563' }}>
                    {project.version}
                  </span>
                </div>
              </div>

              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: '1.2rem',
                  color: '#fff',
                  marginBottom: '10px',
                }}
              >
                {project.title}
              </h3>

              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '0.85rem',
                  color: '#6B7280',
                  lineHeight: 1.7,
                  flexGrow: 1,
                  marginBottom: '20px',
                }}
              >
                {project.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '0.7rem',
                      fontWeight: 500,
                      padding: '3px 10px',
                      background: 'rgba(255,255,255,0.04)',
                      border: `1px solid ${C.lightgray}`,
                      color: '#9CA3AF',
                      borderRadius: '20px',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '10px', paddingTop: '16px', borderTop: `1px solid ${C.lightgray}` }}>
                <a
                  href={project.github}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: '#6B7280',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#6B7280'; }}
                >
                  <GitBranch size={15} /> GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Projects;
