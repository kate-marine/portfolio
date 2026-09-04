import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * On navigation: if the URL has a #hash, scroll to that section; otherwise
 * jump back to the top of the page (React Router keeps the old scroll position
 * by default).
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView()
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
