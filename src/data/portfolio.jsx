import { FiAward, FiBookOpen, FiBriefcase, FiCompass } from 'react-icons/fi'

const publicAsset = (path) => `${import.meta.env.BASE_URL}${path}`

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const profile = {
  name: 'Abdellah Chaibi',
  role: 'Full Stack Web Developer',
  headline: 'Personal Portfolio',
  image: publicAsset('images/profile-photo.jpeg'),
  intro:
    'Specialized technician in Digital Development, Web Full Stack option. I build complete web applications with React, Laravel, Node.js, Express, MySQL and MongoDB, from UML/Merise analysis to the user interface.',
  cv: publicAsset('cv-chaibi-abdellah.pdf'),
  highlights: [
    { value: '15+', label: 'Skills' },
    { value: '4', label: 'Certificates' },
    { value: '4', label: 'Projects' },
  ],
}

export const aboutItems = [
  {
    icon: FiBookOpen,
    title: 'Biography',
    text: 'Full stack web developer based in Kasba Tadla, passionate about creating useful, clean and easy-to-use applications. I combine React, Laravel and MySQL to build practical projects.',
  },
  {
    icon: FiBriefcase,
    title: 'Education',
    text: 'Specialized Technician in Digital Development - Web Full Stack option, ISTA Kasba Tadla (2025 - 2026). First year at ISTA Khenifra (2024 - 2025). Baccalaureate in Physical Sciences, Moulay Rachid High School - Kasba Tadla (2023 - 2024).',
  },
  {
    icon: FiCompass,
    title: 'Career Objective',
    text: 'To keep growing as a junior full stack developer in a modern team, working on high-performance, secure and well-structured web applications.',
  },
]

export const skillGroups = [
  {
    title: 'Front-end Development',
    skills: [
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 90 },
      { name: 'Bootstrap', level: 88 },
      { name: 'JavaScript', level: 84 },
      { name: 'React', level: 80 },
    ],
  },
  {
    title: 'Back-end Development',
    skills: [
      { name: 'PHP', level: 84 },
      { name: 'Laravel', level: 82 },
      { name: 'Node.js', level: 78 },
      { name: 'Express.js', level: 74 },
      { name: 'Python', level: 85 },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MySQL', level: 86 },
      { name: 'MySQL Procedural', level: 80 },
      { name: 'NoSQL / MongoDB', level: 76 },
    ],
  },
  {
    title: 'Modeling and Methods',
    skills: [
      { name: 'UML', level: 78 },
      { name: 'Merise', level: 80 },
      { name: 'Git / GitHub', level: 82 },
      { name: 'API REST', level: 78 },
    ],
  },
]

export const certificateItems = [
  {
    icon: FiAward,
    title: 'Python Essentials 1',
    issuer: 'Cisco Networking Academy',
    image: publicAsset('images/certificate-python.png'),
    url: 'https://www.credly.com/badges/822cdcc0-6095-4721-93b6-fc81a2c4612d/public_url',
    text: 'Python basics, syntax, conditions, loops, functions and programming logic.',
  },
  {
    icon: FiAward,
    title: 'HTML Essentials',
    issuer: 'Cisco Networking Academy',
    image: publicAsset('images/certificate-html.png'),
    url: 'https://www.credly.com/badges/b43dfb6a-0a9a-428b-a8cd-dbe88a709515/public_url',
    text: 'Semantic structure, forms, media, links and HTML best practices.',
  },
  {
    icon: FiAward,
    title: 'CSS Essentials',
    issuer: 'Cisco Networking Academy',
    image: publicAsset('images/certificate-css.png'),
    url: 'https://www.credly.com/badges/bfc14baa-60ee-4ba7-835c-404d5396b706/public_url',
    text: 'Selectors, box model, responsive design, modern layouts and reusable styles.',
  },
  {
    icon: FiAward,
    title: 'JavaScript Essentials 1',
    issuer: 'Cisco Networking Academy',
    image: publicAsset('images/certificate-javascript.png'),
    url: 'https://www.credly.com/badges/7ec05e1b-43dc-4c03-960d-a569a85d9171/public_url',
    text: 'Variables, functions, arrays, objects, the DOM and first interactive behaviors.',
  },
]

export const projects = [
  {
    title: 'RPFVS - Complaint Management',
    description:
      'Internship project to digitize citizen complaint processing for the Urban Commune of Kasba Tadla, with a multi-role validation workflow, GPS geolocation, evidence uploads and real-time status tracking.',
    technologies: ['React 18', 'Vite', 'Laravel 12', 'MySQL', 'Laravel Sanctum', 'Geolocation API'],
    image: publicAsset('images/project-reclamation.png'),
    github: 'https://github.com/abdellah-chaibi/reclamation',
    report: publicAsset('rpfvs-stage-cover.pdf'),
  },
  {
    title: 'TADLABRICOL - Web Platform',
    description:
      'Final year project: a trilingual web platform connecting citizens with local craftspeople in the Tadla region, with Client, Craftsman and Admin roles, internal messaging, search filters, reviews and favorites.',
    technologies: ['React 19', 'Vite', 'Laravel 12', 'MySQL', 'Laravel Sanctum', 'Tailwind CSS'],
    image: publicAsset('images/project-tadlabricol.png'),
    github: 'https://github.com/abdellah-chaibi/tadlabricol',
    report: publicAsset('tadla-bricole-pfe-cover.pdf'),
  },
  {
    title: 'Sport Manager - F-CRUD',
    description:
      'Front-end CRUD application for managing athlete registrations, with an add form, discipline selection, data saving and data loading.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'CRUD', 'LocalStorage'],
    image: publicAsset('images/project-fcrud.svg'),
    github: 'https://github.com/abdellah-chaibi/F-CRUD',
  },
  {
    title: 'Calculator - Light/Dark Mode',
    description:
      'Interactive calculator application with basic operations, a responsive interface, clear buttons and a light/dark mode switch.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI'],
    image: publicAsset('images/project-calculette.svg'),
    github: 'https://github.com/abdellah-chaibi/calculette',
    demo: 'https://abdellah-chaibi.github.io/calculette/',
  },
]

export const experienceItems = [
  {
    period: 'March 2026',
    title: 'Internship Project - Complaint Management Application',
    company: 'Kasba Tadla Commune',
    description:
      'Digitization of the citizen complaint handling process with a full stack web application based on React, Laravel, MySQL, Sanctum and the Geolocation API.',
  },
  {
    period: '2026',
    title: 'Final Year Project - TADLABRICOL',
    company: 'ISTA Kasba Tadla',
    description:
      'Design and development of a trilingual web platform that connects citizens and local craftspeople, with secure authentication, roles, messaging, multi-criteria search and a review system.',
  },
  {
    period: '2025 - 2026',
    title: 'Digital Development - Web Full Stack Option',
    company: 'ISTA Kasba Tadla',
    description:
      'Specialized training focused on designing, developing and deploying full stack web applications.',
  },
]

export const contactItems = {
  email: 'abdoochaib145@gmail.com',
  phone: '0655322660',
  github: 'github.com/abdellah-chaibi',
}