import Header from './Header.jsx'
import Footer from './Footer.jsx'
import './Layout.css'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main" className="layout__main">
        {children}
      </main>
      <Footer />
    </div>
  )
}
