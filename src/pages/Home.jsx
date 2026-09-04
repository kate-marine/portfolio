import { Link } from 'react-router-dom'
import { site, about, skills, education } from '../data/site.js'
import { projects } from '../data/projects.js'
import ProjectCard from '../components/ProjectCard.jsx'
import './Home.css'

// How many projects to preview on the home page before "View all projects".
const PREVIEW_COUNT = 3

export default function Home() {
  const featured = projects.slice(0, PREVIEW_COUNT)

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
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <p className="home-more">
          <Link to="/projects">
            View all projects<span aria-hidden="true"> →</span>
          </Link>
        </p>
      </section>

      <section
        id="about"
        className="home-section home-section--prose"
        aria-labelledby="about-heading"
      >
        <div className="home-section__head">
          <h2 id="about-heading">About Me</h2>
        </div>
        <div className="home-about">
          <img
            className="home-about__photo"
            src={site.photo}
            alt={`Portrait of ${site.name}`}
            width="180"
            height="225"
          />
          <div className="home-about__bio stack">
            {about.paragraphs.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>
        </div>
      </section>

      <section
        className="home-section home-section--prose home-section--tight"
        aria-labelledby="focus-heading"
      >
        <div className="home-section__head">
          <h2 id="focus-heading">Focus areas</h2>
        </div>
        <ul className="home-plain-list">
          {about.focusAreas.map((area) => (
            <li key={area}>{area}</li>
          ))}
        </ul>
      </section>

      <section
        className="home-section home-section--prose home-section--tight"
        aria-labelledby="education-heading"
      >
        <div className="home-section__head">
          <h2 id="education-heading">Education</h2>
        </div>
        <p className="home-edu">
          {education.degree}
          <br />
          {education.school} · {education.period}
        </p>
        <ul className="home-detail-list">
          {education.details.map((detail, i) => (
            <li key={i}>{detail}</li>
          ))}
        </ul>
      </section>

      <section
        className="home-section home-section--prose home-section--tight"
        aria-labelledby="skills-heading"
      >
        <div className="home-section__head">
          <h2 id="skills-heading">Skills</h2>
        </div>
        <dl className="home-skills">
          {skills.map((group) => (
            <div key={group.label}>
              <dt>{group.label}</dt>
              <dd>{group.items.join(', ')}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section
        id="contact"
        className="home-section home-section--prose home-contact"
        aria-labelledby="contact-heading"
      >
        <div className="home-section__head">
          <h2 id="contact-heading">Contact</h2>
        </div>
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
