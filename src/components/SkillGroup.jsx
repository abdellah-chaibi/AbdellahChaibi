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
      <div className="mt-6 grid gap-5">
        {group.skills.map((skill) => (
          <div key={skill.name}>
            <div className="mb-2 flex items-center justify-between gap-4">
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">{skill.name}</span>
              <span className="rounded-md bg-teal-50 px-2.5 py-1 text-xs font-bold text-teal-700 dark:bg-teal-300/10 dark:text-teal-200">
                {skill.level}%
              </span>
            </div>
            <div className="h-2.5 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-teal-500 via-cyan-500 to-rose-500"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.85, ease: 'easeOut' }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.article>
  )
}

export default SkillGroup
