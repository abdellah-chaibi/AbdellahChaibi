import { motion } from 'framer-motion'

function SectionHeader({ label, title }) {
  return (
    <motion.div
      className="mb-10 max-w-2xl"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      <p className="eyebrow">{label}</p>
      <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl dark:text-white">{title}</h2>
    </motion.div>
  )
}

export default SectionHeader
