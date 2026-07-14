import { profile } from '../data/portfolio'

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-8 dark:border-slate-800 dark:bg-slate-900">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8 dark:text-slate-400">
        <p>{profile.name} - {profile.role}</p>
        <p>Portfolio realise avec React, Tailwind CSS et Vite.</p>
      </div>
    </footer>
  )
}

export default Footer
