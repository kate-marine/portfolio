import { site, about, skills, education } from '../data/site.js'
import './About.css'

export default function About() {
  return (
    <div className="container container--prose about">
      <h1>About</h1>

      <section className="about-bio stack">
        {about.paragraphs.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
      </section>

      <section className="about-block" aria-labelledby="education-heading">
        <h2 id="education-heading">Education</h2>
        <p className="about-block__lead">
          {education.degree}
          <br />
          {education.school} · {education.period}
        </p>
        <ul className="about-list">
          {education.details.map((detail, i) => (
            <li key={i}>{detail}</li>
          ))}
        </ul>
      </section>

      <section className="about-block" aria-labelledby="skills-heading">
        <h2 id="skills-heading">Skills</h2>
        <dl className="about-skills">
          {skills.map((group) => (
            <div key={group.label}>
              <dt>{group.label}</dt>
              <dd>{group.items.join(', ')}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="about-block" aria-labelledby="about-contact-heading">
        <h2 id="about-contact-heading">Get in touch</h2>
        <p>
          Email me at <a href={`mailto:${site.email}`}>{site.email}</a>, or find me
          on{' '}
          <a href={site.links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>{' '}
          and{' '}
          <a href={site.links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          .
        </p>
      </section>
    </div>
  )
}
