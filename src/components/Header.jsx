import { NavLink, Link } from 'react-router-dom'
import { site } from '../data/site.js'
import './Header.css'

const navItems = [
  { to: '/', label: 'Work', end: true },
  { to: '/about', label: 'About' },
  { to: '/resume', label: 'Resume' },
]

export default function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link to="/" className="site-header__name">
          {site.name}
        </Link>
        <nav aria-label="Primary">
          <ul className="site-header__nav">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    isActive
                      ? 'site-header__link site-header__link--active'
                      : 'site-header__link'
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
