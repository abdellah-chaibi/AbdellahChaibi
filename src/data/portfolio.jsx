import { FiAward, FiBookOpen, FiBriefcase, FiCompass } from 'react-icons/fi'

const publicAsset = (path) => `${import.meta.env.BASE_URL}${path}`

export const navItems = [
  { label: 'Accueil', href: '#home' },
  { label: 'À propos', href: '#about' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Certifications', href: '#certificates' },
  { label: 'Projets', href: '#projects' },
  { label: 'Formation', href: '#education' },
  { label: 'Expériences', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const profile = {
  name: 'Abdellah Chaibi',
  role: 'Développeur web full stack',
  headline: 'Portfolio personnel',
  image: publicAsset('images/profile-photo.jpeg'),
  intro:
    "Etudiant en licence professionnelle Developpement logiciel a l'Universite Mundiapolis. Issu d'un parcours de technicien specialise en developpement digital, je developpe mes competences en ingenierie logicielle : developpement web et mobile, architecture logicielle, integration de l'intelligence artificielle et pratiques DevOps. Je concois des solutions completes, evolutives et performantes, de l'analyse jusqu'au deploiement.",
  cv: publicAsset('images/cv-chaibi-abdellah.pdf'),
  highlights: [
    { value: '20+', label: 'Compétences' },
    { value: '5', label: 'Certifications' },
    { value: '4', label: 'Projets' },
  ],
}

export const aboutItems = [
  {
    icon: FiBookOpen,
    title: 'Biographie',
    text: 'Étudiant en licence professionnelle Développement logiciel à l’Université Mundiapolis Casablanca, je poursuis mon parcours après une formation de technicien spécialisé en développement digital. Basé à Casablanca, je m’intéresse au développement web et mobile, à l’architecture logicielle et à la création d’applications utiles.',
  },
  {
    icon: FiBriefcase,
    title: 'Formation',
    formations: [
      {
        name: 'Université Mundiapolis Casablanca',
        detail: 'Licence professionnelle en Développement logiciel · 2026–2027 · Bac+3',
      },
      {
        name: 'Institut Spécialisé de Technologie Appliquée NTIC',
        detail: 'Technicien spécialisé en Développement digital, option Web Full Stack · octobre 2024–juillet 2026',
      },
      {
        name: 'Lycée Moulay Rachid, Kasba Tadla',
        detail: 'Baccalauréat en sciences physiques · 2023–2024',
      },
    ],
  },
  {
    icon: FiCompass,
    title: 'Objectif professionnel',
    text: 'Approfondir mes compétences en développement logiciel et réussir mon stage de fin d’études, puis rejoindre une équipe où je pourrai concevoir et développer des applications web et mobiles performantes, sécurisées et bien structurées.',
  },
]

export const skillGroups = [
  {
    title: 'Développement front-end',
    skills: [
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 90 },
      { name: 'Bootstrap', level: 88 },
      { name: 'JavaScript', level: 84 },
      { name: 'React', level: 80 },
      { name: 'dart', level: 80 },
      { name: 'flutter', level: 80 },
    ],
  },
  {
    title: 'Développement back-end',
    skills: [
      { name: 'PHP', level: 84 },
      { name: 'java', level: 85 },
      { name: 'Laravel', level: 82 },
      { name: 'Node.js', level: 78 },
      { name: 'Express.js', level: 74 },
      { name: 'Python', level: 85 },
    ],
  },
  {
    title: 'Bases de données',
    skills: [
      { name: 'MySQL', level: 86 },
      { name: 'MySQL Procedural', level: 80 },
      { name: 'NoSQL / MongoDB', level: 76 },
    ],
  },
  {
    title: 'Modélisation et méthodes',
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
    text: 'Bases de Python : syntaxe, conditions, boucles, fonctions et logique de programmation.',
  },
  {
    icon: FiAward,
    title: 'HTML Essentials',
    issuer: 'Cisco Networking Academy',
    image: publicAsset('images/certificate-html.png'),
    url: 'https://www.credly.com/badges/b43dfb6a-0a9a-428b-a8cd-dbe88a709515/public_url',
    text: 'Structure sémantique, formulaires, médias, liens et bonnes pratiques HTML.',
  },
  {
    icon: FiAward,
    title: 'CSS Essentials',
    issuer: 'Cisco Networking Academy',
    image: publicAsset('images/certificate-css.png'),
    url: 'https://www.credly.com/badges/bfc14baa-60ee-4ba7-835c-404d5396b706/public_url',
    text: 'Sélecteurs, modèle de boîte, conception adaptative, mises en page modernes et styles réutilisables.',
  },
  {
    icon: FiAward,
    title: 'JavaScript Essentials 1',
    issuer: 'Cisco Networking Academy',
    image: publicAsset('images/certificate-javascript.png'),
    url: 'https://www.credly.com/badges/7ec05e1b-43dc-4c03-960d-a569a85d9171/public_url',
    text: 'Variables, fonctions, tableaux, objets, DOM et premiers comportements interactifs.',
  },
  {
    icon: FiAward,
    title: 'JavaScript Essentials 2',
    issuer: 'Cisco Networking Academy',
    image: publicAsset('images/javascript-essentials-2.png'),
    url: 'https://www.credly.com/badges/8880824f-95f5-43b1-85be-6932e30f25d2/public_url',
    text: 'Concepts avancés, programmation asynchrone, fermetures, fonctionnalités ES6+ et intégration d’API.',
  },
]

export const projects = [
  {
    title: 'RPFVS – Gestion des réclamations',
    description:
      'Projet de stage visant à numériser le traitement des réclamations citoyennes pour la commune urbaine de Kasba Tadla : validation selon plusieurs rôles, géolocalisation GPS, ajout de pièces justificatives et suivi du statut en temps réel.',
    technologies: ['React 18', 'Vite', 'Laravel 12', 'MySQL', 'Laravel Sanctum', 'Geolocation API'],
    image: publicAsset('images/project-reclamation.png'),
    github: 'https://github.com/abdellah-chaibi/reclamation',
    report: publicAsset('rpfvs-stage-cover.pdf'),
  },
  {
    title: 'TADLABRICOL – Plateforme web',
    description:
      'Projet de fin d’études : plateforme web trilingue qui met en relation les habitants et les artisans de la région de Tadla. Elle propose des espaces dédiés aux clients, artisans et administrateurs, ainsi que la messagerie, des filtres de recherche, des avis et des favoris.',
    technologies: ['React 19', 'Vite', 'Laravel 12', 'MySQL', 'Laravel Sanctum', 'Tailwind CSS'],
    image: publicAsset('images/project-tadlabricol.png'),
    github: 'https://github.com/abdellah-chaibi/tadlabricol',
    report: publicAsset('tadla-bricole-pfe-cover.pdf'),
  },
  {
    title: 'Gestion sportive – F-CRUD',
    description:
      'Application front-end de gestion des inscriptions d’athlètes, avec formulaire d’ajout, choix de discipline, enregistrement et chargement des données.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'CRUD', 'LocalStorage'],
    image: publicAsset('images/project-fcrud.svg'),
    github: 'https://github.com/abdellah-chaibi/F-CRUD',
  },
  {
    title: 'Calculatrice – Mode clair/sombre',
    description:
      'Calculatrice interactive proposant les opérations de base, une interface adaptative, un bouton d’effacement et un thème clair ou sombre.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI'],
    image: publicAsset('images/project-calculette.svg'),
    github: 'https://github.com/abdellah-chaibi/calculette',
    demo: 'https://abdellah-chaibi.github.io/calculette/',
  },
]

export const educationExperienceItems = [
  {
    period: 'Septembre 2026 – juillet 2027',
    title: 'Licence professionnelle – Développement logiciel',
    company: 'Université Mundiapolis Casablanca',
    description:
      'Poursuite de mes études en licence professionnelle (Bac+3). Modules : communication V, architecture MVC, systèmes d’information, développement web avancé, processus de développement logiciel et développement mobile. Au semestre 6 : DevOps, gouvernance IT et sécurité de l’information, sécurité applicative, assurance qualité logiciel et stage de fin d’études.',
  },
  {
    period: 'Octobre 2024 – juillet 2026',
    title: 'Développement digital – Option web full stack',
    company: 'Institut Spécialisé de Technologie Appliquée NTIC',
    description:
      'Formation spécialisée en conception, développement et déploiement d’applications web full stack.',
  },
]

export const projectExperienceItems = [
  {
    period: 'Mars 2026',
    title: 'Stage – Application de gestion des réclamations',
    company: 'Commune de Kasba Tadla',
    description:
      'Numérisation du traitement des réclamations citoyennes avec une application web full stack développée avec React, Laravel, MySQL, Sanctum et l’API de géolocalisation.',
  },
  {
    period: '2026',
    title: 'Projet de fin d’études – TADLABRICOL',
    company: 'ISTA Kasba Tadla',
    description:
      'Conception et développement d’une plateforme web trilingue mettant en relation les habitants et les artisans locaux, avec authentification sécurisée, gestion des rôles, messagerie, recherche multicritère et système d’avis.',
  },
]

export const contactItems = {
  email: 'ChaibiAbdellah26@gmail.com',
  phone: '0655322660',
  github: 'github.com/abdellah-chaibi',
}
