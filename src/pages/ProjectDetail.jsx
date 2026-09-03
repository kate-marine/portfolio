import { useParams, Link } from 'react-router-dom'
import { getProject } from '../data/projects.js'
import Figure from '../components/Figure.jsx'
import NotFound from './NotFound.jsx'
import './ProjectDetail.css'

/** A titled block within the case study. */
function CaseSection({ id, title, children }) {
  return (
    <section className="case-section" aria-labelledby={id}>
      <h2 id={id} className="case-section__title">
        {title}
      </h2>
      <div className="case-section__body stack">{children}</div>
    </section>
  )
}

/** Render an array of strings as paragraphs. */
function Paragraphs({ items }) {
  return items.map((text, i) => <p key={i}>{text}</p>)
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProject(slug)

  if (!project) {
    return <NotFound />
  }

  return (
    <article className="container container--prose case">
      <Link to="/" className="case__back">
        <span aria-hidden="true">← </span>All work
      </Link>

      <header className="case__header">
        <div className="case__meta-line">
          <span>{project.year}</span>
          <span aria-hidden="true">·</span>
          <span>{project.role}</span>
        </div>
        <h1>{project.title}</h1>
        <p className="case__summary">{project.summary}</p>

        <dl className="case__facts">
          <div>
            <dt>Tools</dt>
            <dd>{project.tools.join(', ')}</dd>
          </div>
          <div>
            <dt>Repository</dt>
            <dd>
              <a href={project.repo} target="_blank" rel="noreferrer">
                {project.repo.replace('https://', '')}
              </a>
            </dd>
          </div>
        </dl>
      </header>

      <CaseSection id="question" title="Main Questions">
        <Paragraphs items={project.question} />
      </CaseSection>

      <CaseSection id="data" title="Data">
        <Paragraphs items={project.data} />
      </CaseSection>

      <CaseSection id="methodology" title="Methodology">
        <Paragraphs items={project.methodology} />
      </CaseSection>

      <CaseSection id="findings" title="Key findings">
        <ul className="case-findings">
          {project.findings.map((finding, i) => (
            <li key={i}>{finding}</li>
          ))}
        </ul>
      </CaseSection>

      {project.figures?.length > 0 && (
        <CaseSection id="figures" title="Selected visualizations">
          <div className="case-figures">
            {project.figures.map((figure) => (
              <Figure key={figure.src} {...figure} />
            ))}
          </div>
        </CaseSection>
      )}

      <CaseSection id="significance" title="Significance">
        <Paragraphs items={project.significance} />
      </CaseSection>

      <footer className="case__cta">
        <p>
          Full code, data-processing notebooks, and a longer technical writeup are
          in the project repository.
        </p>
        <a
          className="case__cta-link"
          href={project.repo}
          target="_blank"
          rel="noreferrer"
        >
          View repository on GitHub
          <span aria-hidden="true"> →</span>
        </a>
      </footer>
    </article>
  )
}
