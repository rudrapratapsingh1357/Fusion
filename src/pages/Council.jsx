import React from 'react';
import { motion } from 'framer-motion';

const C = { cyan: '#00FFFF', orange: '#D35400', gray: '#1A1A1A', lightgray: '#333333' };

const councilSections = [
  {
    title: 'EXECUTIVE_BOARD',
    color: C.cyan,
    members: [
      { name: 'Aviral Sachdeva', role: 'President' },
      { name: 'Rudra Pratap Singh', role: 'Vice President' },
      { name: 'Shreya Singh', role: 'General Secretary' },
      { name: 'Vikash Rai', role: 'Treasurer' },
    ],
  },
  {
    title: 'TECHNICAL_WING',
    color: C.orange,
    members: [
      { name: 'Priyanshu Nandi', role: 'Director' },
      { name: 'Amardeep Singh', role: 'Robotics & IoT' },
      { name: 'Adhish Gupta', role: 'Robotics & IoT' },
      { name: 'Saksham Sharan', role: 'Firmware & Cloud' },
      { name: 'Shavez Khan', role: 'Firmware & Cloud' },
    ],
  },
  {
    title: 'OPERATIONS_&_OUTREACH',
    color: '#A78BFA',
    members: [
      { name: 'Tuba Afreen', role: 'Events' },
      { name: 'Anuj Patwa', role: 'Events' },
      { name: 'Aanya Maheshwari', role: 'PR' },
      { name: 'Paridhi Maheshwari', role: 'PR' },
      { name: 'Shaurya Singh', role: 'Corporate Relations' },
      { name: 'Prem Mighlani', role: 'Corporate Relations' },
    ],
  },
];

// Generate a consistent pattern avatar using the member's name initials
const Avatar = ({ name, accent }) => {
  const initials = name.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase();
  return (
    <div
      className="flex-shrink-0 flex items-center justify-center"
      style={{
        width: '52px',
        height: '52px',
        background: `${accent}12`,
        border: `1px solid ${accent}44`,
        color: accent,
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 700,
        fontSize: '1rem',
        letterSpacing: '0.05em',
      }}
    >
      {initials}
    </div>
  );
};

const MemberCard = ({ name, role, accent, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.92 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.3 }}
    className="flex items-center gap-4 p-4 transition-all duration-300"
    style={{ backgroundColor: C.gray, border: `1px solid ${C.lightgray}` }}
    onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${accent}66`; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = `0 8px 24px ${accent}18`; }}
    onMouseLeave={(e) => { e.currentTarget.style.borderColor = C.lightgray; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
  >
    <Avatar name={name} accent={accent} />
    <div>
      <h4 className="font-bold text-base" style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#F9FAFB' }}>
        {name}
      </h4>
      <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: '#6B7280', marginTop: '2px' }}>
        &lt;{role}/&gt;
      </p>
    </div>
  </motion.div>
);

const Council = () => {
  let delay = 0;

  return (
    <div className="py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          THE_COUNCIL
        </h1>
        <div className="w-20 h-[2px] mb-4"
          style={{ background: C.cyan, boxShadow: `0 0 10px ${C.cyan}88` }}></div>
        <p style={{ fontFamily: "'JetBrains Mono', monospace", color: '#9CA3AF', fontSize: '0.85rem' }}>
          Core maintainers and architecture leads.
        </p>
      </motion.div>

      <div className="space-y-16">
        {councilSections.map((section, sIdx) => {
          return (
            <div key={sIdx}>
              {/* Section header */}
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-lg whitespace-nowrap"
                  style={{ fontFamily: "'JetBrains Mono', monospace", color: section.color, fontWeight: 600 }}>
                  {section.title}
                </h2>
                <div className="flex-grow h-[1px]" style={{ background: C.lightgray }}></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {section.members.map((member, mIdx) => {
                  delay += 0.05;
                  return (
                    <MemberCard
                      key={mIdx}
                      name={member.name}
                      role={member.role}
                      accent={section.color}
                      delay={delay}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Council;
