import { motion } from 'framer-motion'
import { FiExternalLink, FiFileText, FiGithub } from 'react-icons/fi'

function ProjectCard({ project }) {
  return (
    <motion.article
      className="surface group overflow-hidden"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{ scale: 1.01 }}
    >
      <div className="overflow-hidden">
        <img
          className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
          src={project.image}
          alt={project.title}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{project.title}</h3>
        <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span className="tech-tag" key={technology}>
              {technology}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          {project.github && (
            <a className="btn btn-secondary flex-1" href={project.github} target="_blank" rel="noreferrer">
              <FiGithub aria-hidden="true" />
              GitHub
            </a>
          )}
          {project.report && (
            <a className="btn btn-secondary flex-1" href={project.report} target="_blank" rel="noreferrer">
              <FiFileText aria-hidden="true" />
              Report
            </a>
          )}
          {project.demo && (
            <a className="btn btn-primary flex-1" href={project.demo} target="_blank" rel="noreferrer">
              <FiExternalLink aria-hidden="true" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default ProjectCard
