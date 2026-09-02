import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * React Router keeps the scroll position between route changes by default.
 * This resets to the top of the page whenever the path changes.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
