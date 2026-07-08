import { useEffect, useState } from 'react'
import { FiArrowUp } from 'react-icons/fi'

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 500)

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <button
      className={`fixed bottom-5 right-5 z-40 grid h-11 w-11 place-items-center rounded-full bg-teal-600 text-white shadow-lg shadow-teal-900/20 transition duration-200 hover:-translate-y-1 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-stone-50 dark:bg-teal-400 dark:text-slate-950 dark:hover:bg-teal-300 dark:focus:ring-offset-slate-950 ${
        isVisible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <FiArrowUp aria-hidden="true" />
    </button>
  )
}

export default ScrollToTop
