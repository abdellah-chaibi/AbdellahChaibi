import { motion } from 'framer-motion'

function SkillGroup({ group }) {
  return (
    <motion.article
      className="surface p-6"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{group.title}</h3>
      <div className="mt-5 flex flex-wrap gap-3">
        {group.skills.map((skill) => (
          <span className="skill-pill" key={skill}>
            {skill}
          </span>
        ))}
      </div>
    </motion.article>
  )
}

export default SkillGroup
