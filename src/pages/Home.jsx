import { Link } from 'react-router-dom'
import { site, about } from '../data/site.js'
import { projects } from '../data/projects.js'
import ProjectCard from '../components/ProjectCard.jsx'
import './Home.css'

export default function Home() {
  return (
    <div className="container">
      <section className="home-intro">
        <h1>{site.name}</h1>
        <p className="home-intro__headline">{site.headline}</p>
        <p className="home-intro__lead">{site.intro}</p>
      </section>

      <section className="home-section" aria-labelledby="work-heading">
        <div className="home-section__head">
          <h2 id="work-heading">Selected work</h2>
          <p className="text-muted home-section__note">
            Case studies. Code for each project lives in its own repository.
          </p>
        </div>

        <div className="home-projects">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="home-section" aria-labelledby="focus-heading">
        <div className="home-section__head">
          <h2 id="focus-heading">Focus areas</h2>
        </div>
        <ul className="home-focus">
          {about.focusAreas.map((area) => (
            <li key={area}>{area}</li>
          ))}
        </ul>
      </section>

      <section className="home-section home-contact" aria-labelledby="contact-heading">
        <h2 id="contact-heading">Contact</h2>
        <p>
          I am looking for internships in data science, analytics, and consulting.
          The best way to reach me is by email at{' '}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
        <p className="text-muted">
          Also on{' '}
          <a href={site.links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>{' '}
          and{' '}
          <a href={site.links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          . <Link to="/resume">Resume</Link>.
        </p>
      </section>
    </div>
  )
}
