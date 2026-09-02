import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container container--prose">
      <h1>Page not found</h1>
      <p className="text-muted" style={{ marginTop: '1rem' }}>
        That page does not exist. <Link to="/">Return to the home page</Link>.
      </p>
    </div>
  )
}
