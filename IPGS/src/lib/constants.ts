export const WHATSAPP_NUMBER = '601140285850'; // 011-4028 5850
export const PHONE_DISPLAY = '011-4028 5850';
export const PHONE_TEL = '+601140285850';
export const EMAIL = 'info@innovative.edu.my';
export const WEBSITE = 'ipgs.innovative.edu.my';

export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export type Programme = 'MBA' | 'MBM' | 'PhD' | 'YLP';

export interface ProgrammeInfo {
  code: Programme;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  duration: string;
  feesFrom: string;
  entryRequirements: string[];
  overview: string;
  highlights: { label: string; value: string }[];
  badge?: string;
}

export const PROGRAMMES: ProgrammeInfo[] = [
  {
    code: 'MBA',
    name: 'Master in Business Administration',
    tagline: 'For working professionals and managers',
    description:
      'A globally recognised MBA designed for working professionals. Learn from industry leaders, build a powerful network, and accelerate your career trajectory.',
    features: [
      'Flexible weekend schedule',
      'Industry-leading networking opportunities',
      'Career advancement pathways',
      'Executive mentoring programme',
    ],
    duration: '18 - 24 months (part-time)',
    feesFrom: 'RM 28,800',
    entryRequirements: [
      "Bachelor's degree (minimum CGPA 2.75) from recognised institution",
      'Minimum 2 years working experience in management or professional role',
      'MUET Band 3 / IELTS 5.5 or equivalent for international applicants',
      'Pass admission interview',
    ],
    overview:
      'Our MBA programme is crafted for ambitious professionals who seek to elevate their leadership capabilities. Through a blend of strategic case studies, executive coaching and applied projects, you will build the competencies required to lead in dynamic business environments.',
    highlights: [
      { label: 'Mode of Study', value: 'Online & On Campus' },
      { label: 'Intake', value: 'January, May, September' },
      { label: 'Accreditation', value: 'MQA Recognised' },
      { label: 'Format', value: 'Part-Time Weekend' },
    ],
    badge: 'Most Popular',
  },
  {
    code: 'MBM',
    name: 'Master in Business Management',
    tagline: 'Business leadership development',
    description:
      'Develop strategic management and leadership skills while charting a pathway to doctoral studies. The MBM is your foundation for senior leadership and research.',
    features: [
      'Business leadership development focus',
      'Management and strategic thinking skills',
      'Direct academic pathway to PhD',
      'Research methods preparation',
    ],
    duration: '16 - 24 months (part-time)',
    feesFrom: 'RM 24,500',
    entryRequirements: [
      "Bachelor's degree (minimum CGPA 2.50) from recognised institution",
      'Working experience preferred but not mandatory',
      'MUET Band 3 / IELTS 5.5 or equivalent for international applicants',
      'Statement of Purpose (500 words)',
    ],
    overview:
      'The MBM programme balances managerial practice with academic rigor, preparing graduates for senior leadership positions while establishing a clear pathway to doctoral research. Modules integrate modern management theory with practical application.',
    highlights: [
      { label: 'Mode of Study', value: 'Online & On Campus' },
      { label: 'Intake', value: 'January, May, September' },
      { label: 'Accreditation', value: 'MQA Recognised' },
      { label: 'PhD Pathway', value: 'Eligible' },
    ],
  },
  {
    code: 'PhD',
    name: 'Doctor of Philosophy',
    tagline: 'Research supervision support',
    description:
      'Pursue advanced research with dedicated supervision, an AI-friendly research ecosystem and flexible timelines designed for busy professionals.',
    features: [
      'Dedicated research supervision support',
      'AI-friendly research ecosystem',
      'Flexible timeline for busy professionals',
      'Focus on earlier completion',
    ],
    duration: '3 - 5 years (part-time)',
    feesFrom: 'RM 32,000',
    entryRequirements: [
      "Master's degree from recognised institution (minimum CGPA 3.00)",
      'Research proposal (1,500 - 2,000 words)',
      'Demonstrated research capability or prior publications preferred',
      'English proficiency for international applicants',
      'Pass research proposal defence',
    ],
    overview:
      'Our PhD programme provides world-class supervision combined with an AI-enhanced research environment. Flexible schedules and focused mentorship help candidates move purposefully toward completion, supported by a community of scholars.',
    highlights: [
      { label: 'Mode of Study', value: 'Hybrid Research' },
      { label: 'Intake', value: 'Rolling Admission' },
      { label: 'Supervision', value: '1:1 Dedicated' },
      { label: 'AI Research Tools', value: 'Available' },
    ],
  },
];

export const YLP_PROGRAMME = {
  name: 'Young Lecturer Program',
  short: 'YLP',
  description:
    'A structured development programme designed for emerging academics. The YLP prepares graduates and professionals for a career in higher education, combining teaching methodology, AI integration and teaching permit preparation.',
  sections: [
    {
      title: 'Programme Overview',
      description:
        'The Young Lecturer Program is an intensive pathway that equips future academics with the pedagogical, regulatory and technological skills required to teach confidently at the tertiary level.',
      icon: 'GraduationCap',
    },
    {
      title: 'Learning Outcomes',
      description:
        'Graduates will master modern teaching methods, design outcome-based curriculum, apply AI tools in academic settings, and meet the requirements set by the Ministry of Higher Education.',
      icon: 'Target',
    },
    {
      title: 'CLO & PLO Introduction',
      description:
        'Learn to construct Course Learning Outcomes (CLO) and Programme Learning Outcomes (PLO) that align with MQA standards and ensure measurable student achievement.',
      icon: 'ListChecks',
    },
    {
      title: 'AI in Higher Education',
      description:
        'Explore how artificial intelligence can enhance teaching, assessment design and student engagement while maintaining academic integrity and personalisation.',
      icon: 'BrainCircuit',
    },
    {
      title: 'Teaching Permit Preparation',
      description:
        'Receive complete guidance and document support for applying for the teaching permit from the Department of Higher Education (JPT).',
      icon: 'FileBadge',
    },
    {
      title: 'ODL Teaching Skills',
      description:
        'Develop Open Distance Learning (ODL) facilitation skills including online pedagogy, engagement strategies and LMS proficiency.',
      icon: 'Laptop',
    },
  ],
  certificate: {
    title: 'Certificate of Completion',
    description:
      'Upon successful completion of all modules, participants receive a recognised Certificate of Completion that strengthens their academic portfolio and teaching permit application.',
    icon: 'Award',
  },
};
