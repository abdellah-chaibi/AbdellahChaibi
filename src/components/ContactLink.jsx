function ContactLink({ icon: Icon, label, value, href }) {
  return (
    <a className="surface group block p-6" href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
      <Icon className="h-6 w-6 text-teal-600 transition-transform group-hover:-translate-y-1 dark:text-teal-300" aria-hidden="true" />
      <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">{label}</p>
      <p className="mt-2 break-words text-lg font-semibold text-slate-950 dark:text-white">{value}</p>
    </a>
  )
}

export default ContactLink
