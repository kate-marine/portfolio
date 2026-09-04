import { projects } from '../data/projects.js'
import ProjectCard from '../components/ProjectCard.jsx'
import './Projects.css'

export default function Projects() {
  return (
    <div className="container">
      <header className="projects-intro">
        <h1>Projects</h1>
        <p className="projects-intro__lead text-muted">
          Selected data science, analytics, and research work, written up as case
          studies. The code for each project lives in its own repository.
        </p>
      </header>

      <div className="projects-list">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  )
}
