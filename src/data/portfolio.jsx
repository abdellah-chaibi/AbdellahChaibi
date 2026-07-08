import { FiBookOpen, FiBriefcase, FiCompass } from 'react-icons/fi'

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const profile = {
  name: 'Abdellah Chaibi',
  role: 'Developpement Web Full Stack',
  headline: 'Personal Portfolio',
  image: '/images/profile-photo.jpeg',
  intro:
    "Technicien specialise en Developpement Digital, option Web Full Stack. Passionne par le developpement web, je travaille sur tout le cycle de vie d'une application, de la conception de bases de donnees au deploiement.",
  cv: '/cv-chaibi-abdellah.pdf',
}

export const aboutItems = [
  {
    icon: FiBookOpen,
    title: 'Biography',
    text: "Developpeur web full stack base a Kasba Tadla, passionne par la creation d'applications utiles, propres et faciles a utiliser. Je combine React, Laravel et MySQL pour construire des projets concrets.",
  },
  {
    icon: FiBriefcase,
    title: 'Education',
    text: 'Technicien Specialise en Developpement Digital - Option Web Full Stack, ISTA Kasba Tadla (2025 - 2026). Premiere annee a ISTA Khenifra (2024 - 2025). Baccalaureat option Sciences Physiques, Lycee Moulay Rachid - Kasba Tadla (2023 - 2024).',
  },
  {
    icon: FiCompass,
    title: 'Career Objective',
    text: "Continuer a progresser comme developpeur full stack junior dans une equipe moderne, en travaillant sur des applications web performantes, securisees et bien structurees.",
  },
]

export const skillGroups = [
  {
    title: 'Front-end',
    skills: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript ES6+', 'React.js 18', 'React.js 19', 'Vite'],
  },
  {
    title: 'Back-end',
    skills: ['PHP', 'Laravel 12', 'MVC', 'APIs', 'Node.js', 'Express.js'],
  },
  {
    title: 'Database and Modeling',
    skills: ['MySQL', 'MongoDB', 'UML', 'Merise'],
  },
  {
    title: 'Security and Tools',
    skills: ['Laravel Sanctum', 'Git', 'GitHub', 'Docker', 'Postman', 'SonarQube', 'Jira', 'CI/CD'],
  },
  {
    title: 'Methods',
    skills: ['Agile', 'Scrum', 'DevOps practices', 'Clean code'],
  },
]

export const projects = [
  {
    title: 'RPFVS - Gestion des Reclamations',
    description:
      'Projet de stage pour digitaliser le traitement des reclamations citoyennes au sein de la Commune Urbaine de Kasba Tadla, avec workflow multi-roles, geolocalisation GPS, televersement de preuves et suivi du statut en temps reel.',
    technologies: ['React 18', 'Vite', 'Laravel 12', 'MySQL', 'Laravel Sanctum', 'Geolocation API'],
    image: '/images/project-reclamation.png',
    github: 'https://github.com/abdellah-chaibi/reclamation',
    report: '/rpfvs-stage-cover.pdf',
  },
  {
    title: 'TADLABRICOL - Plateforme Web',
    description:
      "Projet de Fin d'Etudes: plateforme web trilingue de mise en relation entre citoyens et artisans locaux dans la region de Tadla, avec roles Client, Artisan et Admin, messagerie interne, filtres de recherche, avis et favoris.",
    technologies: ['React 19', 'Vite', 'Laravel 12', 'MySQL', 'Laravel Sanctum', 'Tailwind CSS'],
    image: '/images/project-tadlabricol.png',
    github: 'https://github.com/abdellah-chaibi/tadlabricol',
    report: '/tadla-bricole-pfe-cover.pdf',
  },
  {
    title: 'Sport Manager - F-CRUD',
    description:
      "Application CRUD front-end pour gerer les inscriptions des athletes, avec formulaire d'ajout, selection des disciplines, sauvegarde et chargement des donnees.",
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'CRUD', 'LocalStorage'],
    image: '/images/project-fcrud.svg',
    github: 'https://github.com/abdellah-chaibi/F-CRUD',
  },
]

export const experienceItems = [
  {
    period: 'Mars 2026',
    title: 'Projet de Stage - Application de Gestion des Reclamations',
    company: 'Commune de Kasba Tadla',
    description:
      'Digitalisation du processus de traitement des doleances des citoyens avec une application web full stack basee sur React, Laravel, MySQL, Sanctum et Geolocation API.',
  },
  {
    period: '2026',
    title: "Projet de Fin d'Etudes - TADLABRICOL",
    company: 'ISTA Kasba Tadla',
    description:
      "Conception et developpement d'une plateforme web trilingue qui connecte citoyens et artisans locaux, avec authentification securisee, roles, messagerie, recherche multicritere et systeme d'avis.",
  },
  {
    period: '2025 - 2026',
    title: 'Developpement Digital - Option Web Full Stack',
    company: 'ISTA Kasba Tadla',
    description:
      'Formation specialisee orientee conception, developpement et deploiement d applications web full stack.',
  },
]

export const contactItems = {
  email: 'abdoochaib145@gmail.com',
  phone: '0655322660',
  github: 'github.com/abdellah-chaibi',
}
