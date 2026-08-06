// FUSION Team Roster Data
// Note: Accent colors are mapped here but designations and hierarchy can be modified dynamically.
// ALL team members are confirmed as 2nd Year students.

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
      { name: 'Aviral Sachdeva',   role: 'President',               wing: 'Executive', year: '2nd Year · CSE', photo: '/team/aviral_sachdeva.jpg',   github: '', linkedin: 'https://www.linkedin.com/in/aviral-sachdeva-202289265/' },
      { name: 'Rudra Pratap Singh',role: 'Vice President',          wing: 'Executive', year: '2nd Year · CSE', photo: '/team/rudra_pratap_singh.jpg', github: '', linkedin: 'https://www.linkedin.com/in/rudra-pratap-singh-b6188a380/' },
      { name: 'Shreya Singh',      role: 'General Secretary',       wing: 'Executive', year: '2nd Year · CSE', photo: '/team/shreya_singh.jpg',        github: '', linkedin: 'https://www.linkedin.com/in/shreya-singh-083716381/' },
      { name: 'Vikash Rai',        role: 'Treasurer',               wing: 'Executive', year: '2nd Year · CSE', photo: '/team/vikash_rai.jpg',          github: '', linkedin: 'https://www.linkedin.com/in/vikash-rai-6b6534392' },
    ],
  },
  {
    key: 'Technical Wing',
    label: 'Technical Wing',
    accentKey: 'orange', // mapped to teamAccentColors.orange
    members: [
      { name: 'Priyanshu Nandi',  role: 'Technical Director',      wing: 'Technical', year: '2nd Year · AIML', photo: null, github: '', linkedin: '' },
      { name: 'Amardeep Singh',   role: 'Technical Member',        wing: 'Robotics & IoT', year: '2nd Year · CSE', photo: '/team/amardeep_singh.jpg', github: 'https://github.com/Amar-Deep22', linkedin: 'https://www.linkedin.com/in/amardeep-ranjan05/' },
      { name: 'Adhish Gupta',     role: 'Technical Member',        wing: 'Robotics & IoT', year: '2nd Year · CSE', photo: '/team/adhish_gupta.jpg',    github: '', linkedin: 'https://www.linkedin.com/in/adhish-gupta-65baba383/' },
      { name: 'Saksham Sharan',   role: 'Technical Member',        wing: 'Firmware & Cloud', year: '2nd Year · CSE', photo: '/team/saksham_sharan.jpg', github: '', linkedin: 'https://www.linkedin.com/in/saksham-sharan-bbab14258/' },
      { name: 'Shahvez Khan',     role: 'Technical Member',        wing: 'Firmware & Cloud', year: '2nd Year · AIML', photo: '/team/shahvez_khan.jpg',  github: 'https://github.com/shahvezkhan9221-prog', linkedin: 'https://www.linkedin.com/in/shahvez-khan-9a8988361?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
      { name: 'Yatharth Chhabra', role: 'Technical Member',        wing: 'Robotics & IoT', year: '2nd Year · CSE', photo: '/team/yatharth_chahabra.jpg', github: 'https://github.com/whyysee12', linkedin: 'https://www.linkedin.com/in/yatharth-chhabra-1b302427a?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
    ],
  },
  {
    key: 'Operations & Outreach',
    label: 'Operations & Outreach',
    accentKey: 'purple', // mapped to teamAccentColors.purple
    members: [
      { name: 'Raunak Singh',       role: 'Operations Member',     wing: 'Robotics & IoT', year: '2nd Year · CSE', photo: '/team/raunak_singh.jpg',        github: 'https://github.com/Raunak827', linkedin: 'https://www.linkedin.com/in/raunak-singh-4636ab374?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
      { name: 'Tuba Afreen',        role: 'Operations Member',     wing: 'Events Lead', year: '2nd Year · AIML', photo: '/team/tuba_afreen.jpg',          github: '', linkedin: 'https://www.linkedin.com/in/tuba-afreen-21b988376' },
      { name: 'Anuj Patwa',         role: 'Operations Member',     wing: 'Events', year: '2nd Year · CSE', photo: '/team/anuj_patwa.jpg',              github: '', linkedin: 'https://www.linkedin.com/in/anuj-patwa/' },
      { name: 'Aanya Maheshwari',   role: 'Operations Member',     wing: 'Public Relations', year: '2nd Year · CSE', photo: '/team/aanya_maheshwari.jpg', github: 'https://github.com/Aanya-Maheshwari', linkedin: 'https://www.linkedin.com/in/aanya-maheshwari-119199364' },
      { name: 'Paridhi Maheshwari', role: 'Operations Member',     wing: 'Public Relations', year: '2nd Year · CSE', photo: '/team/paridhi_maheshwari.jpg', github: 'https://github.com/ParidhiMaheshwari14', linkedin: 'https://www.linkedin.com/in/paridhi-maheshwari-3872b5380/' },
      { name: 'Shaurya Singh',      role: 'Operations Member',     wing: 'Corporate Relations', year: '2nd Year · CSE', photo: '/team/shaurya_singh.jpg',  github: 'https://github.com/shaurya-netizen', linkedin: 'https://www.linkedin.com/in/shaurya-singh-89b8b2287?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
      { name: 'Prem Miglani',       role: 'Operations Member',     wing: 'Corporate Relations', year: '2nd Year · CSE', photo: null,                       github: 'https://github.com/miglaniprem571', linkedin: 'https://www.linkedin.com/in/prem-miglani-80056538b/' },
    ],
  },
  {
    key: 'Club Members',
    label: 'Club Members',
    accentKey: 'green', // mapped to teamAccentColors.green
    members: [
      { name: 'Avinash Pathak',       role: 'Member',              wing: 'General', year: '2nd Year · CSE', photo: '/team/avinash_pathak.jpg',      github: 'https://github.com/avanishpathak108-ghost', linkedin: 'https://www.linkedin.com/in/avanish-pathak-1ba901381' },
      { name: 'Krishan Kant Sharma',  role: 'Member',              wing: 'General', year: '2nd Year · CSE', photo: '/team/krishan_kant_sharma.jpg', github: 'https://github.com/KrishanKant2256', linkedin: 'https://www.linkedin.com/in/krishan-kant-sharma-866b2937b/' },
      { name: 'Nandini Sharma',       role: 'Member',              wing: 'General', year: '2nd Year · CSE', photo: '/team/nandini_sharma.jpg',      github: 'https://github.com/nandsh98', linkedin: 'https://www.linkedin.com/in/nandini-sharma-85283b35b?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
      { name: 'Shreya Agrawal',       role: 'Member',              wing: 'General', year: '2nd Year · AIML', photo: '/team/shreya_agrawal.jpg',     github: 'https://github.com/shreya22806-cmd', linkedin: 'https://www.linkedin.com/in/shreyaagrawall/' },
    ],
  }
];

