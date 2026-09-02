import { site, experience, education } from '../data/site.js'
import './Resume.css'

export default function Resume() {
  return (
    <div className="container container--prose resume">
      <div className="resume__head">
        <h1>Resume</h1>
        <a className="resume__download" href={site.resumePdf} download>
          Download PDF
        </a>
      </div>
      <p className="text-muted resume__note">
        A summary is below. The PDF is the most current version — add yours at{' '}
        <code>public/resume.pdf</code>.
      </p>

      <section className="resume__section" aria-labelledby="resume-education">
        <h2 id="resume-education">Education</h2>
        <div className="resume-entry">
          <div className="resume-entry__head">
            <h3>{education.school}</h3>
            <span className="resume-entry__period">{education.period}</span>
          </div>
          <p className="resume-entry__sub">{education.degree}</p>
          <ul>
            {education.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="resume__section" aria-labelledby="resume-experience">
        <h2 id="resume-experience">Experience</h2>
        {experience.map((job) => (
          <div key={`${job.org}-${job.role}`} className="resume-entry">
            <div className="resume-entry__head">
              <h3>
                {job.role}, {job.org}
              </h3>
              <span className="resume-entry__period">{job.period}</span>
            </div>
            <ul>
              {job.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="resume__section" aria-labelledby="resume-contact">
        <h2 id="resume-contact">Contact</h2>
        <p>
          <a href={`mailto:${site.email}`}>{site.email}</a> · {site.location}
        </p>
      </section>
    </div>
  )
}
