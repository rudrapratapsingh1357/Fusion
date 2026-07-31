// FUSION Team Roster Data
// Note: Accent colors are mapped here but designations and hierarchy can be modified dynamically.
// ALL team members are confirmed as 3rd Year students.

export const teamAccentColors = {
  cyan: '#00E5FF',
  orange: '#D35400',
  purple: '#7C3AED',
  green: '#22C55E'
};

export const teamSections = [
  {
    key: 'Executive Board',
    label: 'Executive Board',
    accentKey: 'cyan', // mapped to teamAccentColors.cyan
    members: [
      { name: 'Aviral Sachdeva',   role: 'President',               wing: 'Executive', year: '3rd Year · CSE', photo: '/team/aviral.jpg',   github: '', linkedin: '' },
      { name: 'Rudra Pratap Singh',role: 'Vice President',          wing: 'Executive', year: '3rd Year · ECE', photo: '/team/rudra.jpg',    github: '', linkedin: '' },
      { name: 'Shreya Singh',      role: 'General Secretary',       wing: 'Executive', year: '3rd Year · CSE', photo: '/team/shreya.jpg',   github: '', linkedin: '' },
      { name: 'Vikash Rai',        role: 'Treasurer',               wing: 'Executive', year: '3rd Year · ECE', photo: null,                 github: '', linkedin: '' },
    ],
  },
  {
    key: 'Technical Wing',
    label: 'Technical Wing',
    accentKey: 'orange', // mapped to teamAccentColors.orange
    members: [
      { name: 'Priyanshu Nandi',  role: 'Technical Director',      wing: 'Technical', year: '3rd Year · ECE', photo: null, github: '', linkedin: '' },
      { name: 'Amardeep Singh',   role: 'Robotics & IoT',          wing: 'Technical', year: '3rd Year · ECE', photo: null, github: '', linkedin: '' },
      { name: 'Adhish Gupta',     role: 'Robotics & IoT',          wing: 'Technical', year: '3rd Year · CSE', photo: null, github: '', linkedin: '' },
      { name: 'Saksham Sharan',   role: 'Firmware & Cloud',        wing: 'Technical', year: '3rd Year · CSE', photo: null, github: '', linkedin: '' },
      { name: 'Shavez Khan',      role: 'Firmware & Cloud',        wing: 'Technical', year: '3rd Year · ECE', photo: null, github: '', linkedin: '' },
    ],
  },
  {
    key: 'Operations & Outreach',
    label: 'Operations & Outreach',
    accentKey: 'purple', // mapped to teamAccentColors.purple
    members: [
      { name: 'Tuba Afreen',        role: 'Events Lead',           wing: 'Operations', year: '3rd Year · CSE', photo: null, github: '', linkedin: '' },
      { name: 'Anuj Patwa',         role: 'Events',                wing: 'Operations', year: '3rd Year · ECE', photo: null, github: '', linkedin: '' },
      { name: 'Aanya Maheshwari',   role: 'Public Relations',      wing: 'Operations', year: '3rd Year · CSE', photo: null, github: '', linkedin: '' },
      { name: 'Paridhi Maheshwari', role: 'Public Relations',      wing: 'Operations', year: '3rd Year · BCA', photo: null, github: '', linkedin: '' },
      { name: 'Shaurya Singh',      role: 'Corporate Relations',   wing: 'Operations', year: '3rd Year · CSE', photo: null, github: '', linkedin: '' },
      { name: 'Prem Mighlani',      role: 'Corporate Relations',   wing: 'Operations', year: '3rd Year · ECE', photo: null, github: '', linkedin: '' },
    ],
  },
];
