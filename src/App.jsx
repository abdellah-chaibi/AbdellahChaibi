import { useEffect, useState } from 'react'
import {
  FiArrowRight,
  FiDownload,
  FiGithub,
  FiMail,
  FiMapPin,
  FiPhone,
} from 'react-icons/fi'
import {
  aboutItems,
  contactItems,
  experienceItems,
  profile,
  projects,
  skillGroups,
} from './data/portfolio'
import ContactLink from './components/ContactLink'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ProjectCard from './components/ProjectCard'
import ScrollToTop from './components/ScrollToTop'
import SectionHeader from './components/SectionHeader'
import SkillGroup from './components/SkillGroup'
import TimelineItem from './components/TimelineItem'

function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return (
    <div className="min-h-screen bg-stone-50 text-slate-800 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-200">
      <Navbar theme={theme} onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />

      <main>
        <section
          id="home"
          className="section-shell grid min-h-screen items-center gap-12 pt-28 md:grid-cols-[1.05fr_0.95fr]"
        >
          <div className="motion-safe:animate-fade-up">
            <p className="eyebrow">{profile.headline}</p>
            <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-tight text-slate-950 sm:text-6xl dark:text-white">
              {profile.name}
            </h1>
            <p className="mt-4 text-2xl font-medium text-teal-700 dark:text-teal-300">
              {profile.role}
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              {profile.intro}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a className="btn btn-primary" href="#projects">
                View Projects
                <FiArrowRight aria-hidden="true" />
              </a>
              <a className="btn btn-secondary" href={profile.cv} download>
                Download CV
                <FiDownload aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-sm motion-safe:animate-float-soft">
            <div className="absolute inset-0 rounded-full border border-teal-200 bg-white shadow-2xl shadow-slate-200/70 motion-safe:animate-pulse-ring dark:border-teal-400/40 dark:bg-slate-900 dark:shadow-black/30" />
            <img
              className="relative h-full w-full rounded-full object-cover p-4 transition duration-500 hover:scale-[1.03]"
              src={profile.image}
              alt={`${profile.name} profile`}
            />
          </div>
        </section>

        <section id="about" className="section-shell">
          <SectionHeader label="About" title="Profile overview" />
          <div className="grid gap-5 md:grid-cols-3">
            {aboutItems.map((item) => (
              <article className="surface p-6" key={item.title}>
                <item.icon className="h-6 w-6 text-teal-600 dark:text-teal-300" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-semibold text-slate-950 dark:text-white">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section-shell">
          <SectionHeader label="Skills" title="Technical stack" />
          <div className="grid gap-5 lg:grid-cols-2">
            {skillGroups.map((group) => (
              <SkillGroup group={group} key={group.title} />
            ))}
          </div>
        </section>

        <section id="projects" className="section-shell">
          <SectionHeader label="Projects" title="Selected projects" />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard project={project} key={project.title} />
            ))}
          </div>
        </section>

        <section id="experience" className="section-shell">
          <SectionHeader label="Experience" title="Academic and project timeline" />
          <div className="mx-auto max-w-3xl">
            {experienceItems.map((item, index) => (
              <TimelineItem item={item} isLast={index === experienceItems.length - 1} key={item.title} />
            ))}
          </div>
        </section>

        <section id="contact" className="section-shell pb-20">
          <SectionHeader label="Contact" title="Get in touch" />
          <div className="grid gap-5 md:grid-cols-3">
            <ContactLink icon={FiMail} label="Email" value={contactItems.email} href={`mailto:${contactItems.email}`} />
            <ContactLink icon={FiPhone} label="Phone" value={contactItems.phone} href={`tel:${contactItems.phone}`} />
            <ContactLink icon={FiGithub} label="GitHub" value={contactItems.github} href="https://github.com/abdellah-chaibi" />
          </div>
          <div className="mt-6 flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-5 text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
            <FiMapPin className="h-5 w-5 shrink-0 text-teal-600 dark:text-teal-300" aria-hidden="true" />
            <p>Kasba Tadla, Morocco. Available from July 2026.</p>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
