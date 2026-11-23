export const personalInfo = {
  name: 'Suraj Manani',
  title: 'MCA Student & Web Developer',
  tagline: 'I build responsive, modern websites — from idea to deployment.',
  email: 'surajmanani028@gmail.com',
  location: 'Gujarat, India',
  github: 'https://github.com/Suraj-0228',
  linkedin: 'https://www.linkedin.com/in/suraj-manani-01826339a/',
  available: true,
  availabilityText: 'Open for Internships & Projects',
  resumeUrl: '/Suraj_Manani_Resume.pdf', // Put your resume PDF in public/resume.pdf or paste a Google Drive link
  web3FormsKey: '', // Optional: Get free access key at https://web3forms.com to receive form submissions directly
};

export const about = {
  paragraphs: [
    'I am an MCA student with a BCA background, passionate about building clean, responsive web applications. I enjoy turning ideas into working products — from landing pages to full-stack projects.',
    'I use React, HTML/CSS, JavaScript, and AI-assisted tools to prototype and ship faster, while learning the fundamentals behind every project I build.',
    'Currently looking for internships, freelance opportunities, and collaborative projects where I can grow as a developer.',
  ],
  highlights: [
    { value: '3+', label: 'Projects Built' },
    { value: 'MCA', label: 'Pursuing Degree' },
    { value: '3rd', label: 'Techfest Rank' },
  ],
};

export const skills = [
  {
    category: 'Frontend',
    icon: 'frontend',
    items: [
      { name: 'HTML5 & CSS3', level: 90 },
      { name: 'JavaScript (ES6+)', level: 85 },
      { name: 'React.js', level: 80 },
      { name: 'Tailwind CSS', level: 85 },
    ],
  },
  {
    category: 'Backend & Tools',
    icon: 'backend',
    items: [
      { name: 'Node.js & Express', level: 75 },
      { name: 'PHP & MySQL', level: 80 },
      { name: 'Git & GitHub', level: 85 },
      { name: 'REST APIs', level: 75 },
    ],
  },
  {
    category: 'Workflow',
    icon: 'tools',
    items: [
      { name: 'Vite & React', level: 85 },
      { name: 'Responsive Design', level: 90 },
      { name: 'AI-Assisted Dev', level: 85 },
      { name: 'Deployment (Vercel/Netlify/Render)', level: 75 },
    ],
  },
];

export const projects = [
  {
    id: 'finoire',
    title: 'Finoire',
    subtitle: 'Next-Gen Glassmorphic Wealth Management Platform',
    category: 'mern',
    description:
      'An enterprise-grade, high-fidelity dark glassmorphic personal finance and wealth management platform featuring real-time transaction ledgers, analytics, and an Admin Operations Command Center.',
    features: [
      'Interactive dashboard using Recharts for monthly cash flow, categories volume, and trends',
      'Speakeasy TOTP Two-Factor Authentication (2FA) & active sessions device auditor',
      'Admin Center with user management, system category/currency editor, and latency diagnostics',
      'One-click PDF statements generator and dynamic color-coded Action Toast Alerts',
    ],
    tech: ['React 18', 'Vite 6', 'Tailwind CSS v4', 'Node.js', 'Express', 'MongoDB Atlas', 'JWT', 'Speakeasy (2FA)'],
    github: 'https://github.com/Suraj-0228/Finoire',
    live: 'https://finoire.vercel.app',
    image: '/projects/finoire.png',
    gradient: 'from-cyan-500/20 to-blue-500/20',
  },
  {
    id: 'quizara',
    title: 'Quizara',
    subtitle: 'LMS & Interactive Quiz Assessment Platform',
    category: 'php',
    description:
      'A feature-rich, high-performance online learning platform featuring timed assessments, isolated portals, payment checks, and automated academic PDF generations.',
    features: [
      'Student Dashboard with XP credits, accuracy meters, and interactive timed quiz engines',
      'Automatic official PDF Certificate (score ≥75%) and server-side FPDF Academic Transcript',
      'Admin Panel with dashboard metrics, user credentials manager, and Global settings controls',
      'Secure PDO prepared statements, reset tokens, and auto-disappearing flash messages',
    ],
    tech: ['PHP 8.x', 'MySQL (PDO)', 'Tailwind CSS', 'PHPMailer', 'FPDF 1.84', 'FontAwesome 6'],
    github: 'https://github.com/Suraj-0228/Quizara',
    live: 'https://quizara.infinityfreeapp.com/Quizara',
    image: '/projects/quizara.png',
    gradient: 'from-blue-500/20 to-violet-500/20',
  },
  {
    id: 'technest',
    title: 'TechNest',
    subtitle: 'Premium E-Commerce Platform',
    category: 'php',
    description:
      'A gadget marketplace styled with a premium dark glassmorphism layout, persistent session carts, quick address management selectors, and order status invoice downloads.',
    features: [
      'Persistent session-based shopping cart, wishlist system, and custom SweetAlert2 alerts',
      'Interactive 2-column user dashboard for tracking recent orders, spent limits, and DOB/avatars',
      'Address Manager supporting CRUD for multiple addresses with a default checkout indicator',
      'Admin Panel for managing inventory list, adding custom products/categories, and ordering states',
    ],
    tech: ['PHP 7.4+', 'MySQL', 'Tailwind CSS', 'JavaScript', 'SweetAlert2', 'Apache'],
    github: 'https://github.com/Suraj-0228/TechNest',
    live: null,
    image: '/projects/technest.png',
    gradient: 'from-violet-500/20 to-pink-500/20',
  },
];

export const education = [
  {
    period: '2026 – Present',
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Department of Computer Science / Veer Narmad South Gujarat University, Surat.',
    description:
      'Focusing on advanced software engineering principles, modern web architectures, database design, and cloud technologies. Actively building full-stack projects to apply theoretical systems design into production-ready web apps.',
  },
  {
    period: '2023 – 2026',
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'SMT Z.S Patel College of Management (BBA) & Technology (BCA) / Veer Narmad South Gujarat University, Surat.',
    description:
      'Gained a strong foundation in computer science fundamentals including algorithms, object-oriented programming (OOP), relational databases (RDBMS), and frontend/backend web development technologies.',
  },
  {
    period: '2021 – 2023',
    degree: 'Higher Secondary Certificate (HSC / 12th)',
    institution: 'Sanskar Bharti Vidhaylaya / Gujarat Secondary and Higher Secondary Education Board (GSEB)',
    description:
      'Completed higher secondary studies with a focus on science, mathematics, and foundational computer programming, developing key logical thinking and analytical problem-solving skills.',
  },
  {
    period: 'Jan 2026',
    degree: '3rd Rank — "Creators Mind" Techfest',
    institution: 'Inter-College "Mindstorm" | DC Patel Campus',
    description:
      'Built "SmartHaven" smart home prototype using PHP, MySQL, Bootstrap 5, and JavaScript under competitive time limits.',
    highlight: true,
  },
];

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export const typewriterWords = [
  'Modern Websites.',
  'Full Stack Web Applications.',
  'Responsive Portfolio.',
];
