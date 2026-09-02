import { Link } from 'react-router-dom'
import './ProjectCard.css'

/**
 * A single project entry in the listing on the home page.
 * Text-only by design — no thumbnail — to keep the index calm and readable.
 */
export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card__meta">
        <span>{project.year}</span>
        <span aria-hidden="true">·</span>
        <span>{project.role}</span>
      </div>

      <h3 className="project-card__title">
        <Link to={`/projects/${project.slug}`}>{project.title}</Link>
      </h3>

      <p className="project-card__summary">{project.summary}</p>

      <div className="project-card__footer">
        <span className="project-card__tools">{project.tools.join(', ')}</span>
        <Link className="project-card__link" to={`/projects/${project.slug}`}>
          Read case study
          <span aria-hidden="true"> →</span>
        </Link>
      </div>
    </article>
  )
}
