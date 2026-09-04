import { NavLink, Link } from 'react-router-dom'
import { site } from '../data/site.js'
import './Header.css'

export default function Header() {
  const linkClass = ({ isActive }) =>
    isActive ? 'site-header__link site-header__link--active' : 'site-header__link'

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link to="/" className="site-header__name">
          {site.name}
        </Link>
        <nav aria-label="Primary">
          <ul className="site-header__nav">
            <li>
              <NavLink to="/projects" className={linkClass}>
                Projects
              </NavLink>
            </li>
            <li>
              {/* Jumps to the About section of the home page */}
              <Link to="/#about" className="site-header__link">
                About
              </Link>
            </li>
            <li>
              <NavLink to="/resume" className={linkClass}>
                Resume
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
