import { motion } from 'framer-motion'

function TimelineItem({ item, isLast }) {
  return (
    <motion.article
      className="relative grid gap-5 pl-10"
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {!isLast && <span className="absolute bottom-0 left-[11px] top-7 w-px bg-slate-200 dark:bg-slate-800" />}
      <span className="absolute left-0 top-1 h-6 w-6 rounded-full border-4 border-stone-50 bg-teal-600 dark:border-slate-950 dark:bg-teal-300" />
      <div className="surface mb-6 p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700 dark:text-teal-300">
          {item.period}
        </p>
        <h3 className="mt-3 text-xl font-semibold text-slate-950 dark:text-white">{item.title}</h3>
        <p className="mt-1 font-medium text-slate-500 dark:text-slate-400">{item.company}</p>
        <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
      </div>
    </motion.article>
  )
}

export default TimelineItem
