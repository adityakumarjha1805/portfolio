import { Link } from 'react-router-dom'

const projectList = [
  {
    number: '01',
    type: 'Web platform',
    title: 'URL Shortener',
    description:
      'A fast, focused link management tool that turns long URLs into shareable links with a clean and frictionless experience.',
    stack: ['Next.js', 'HTML', 'CSS'],
    accent: 'project-card--violet',
  },
  {
    number: '02',
    type: 'Developer tool',
    title: 'AI Code Reviewer',
    description:
      'An intelligent review workspace that combines a MERN backend with generative AI to surface useful feedback while you build.',
    stack: ['MongoDB', 'Express', 'React', 'Gen AI'],
    accent: 'project-card--blue',
  },
]

function Projects() {
  return (
    <main className="projects-page">
      <section className="projects-hero" aria-labelledby="projects-title">
        <p className="projects-eyebrow">Selected work / 2026</p>
        <h1 id="projects-title">Projects that turn ideas<br />into <span>useful products.</span></h1>
        <p className="projects-intro">
          A small collection of experiments and applications built with a love for thoughtful interfaces,
          reliable systems, and practical problem-solving.
        </p>
      </section>

      <section className="project-grid" aria-label="Featured projects">
        {projectList.map((project) => (
          <article className={`project-card ${project.accent}`} key={project.title}>
            <div className="project-card-topline">
              <span>{project.number}</span>
              <span>{project.type}</span>
            </div>
            <div className="project-visual" aria-hidden="true">
              <div className="visual-window">
                <span className="visual-dot" />
                <span className="visual-dot" />
                <span className="visual-dot" />
                <div className="visual-line visual-line--long" />
                <div className="visual-line visual-line--short" />
              </div>
            </div>
            <div className="project-card-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="project-stack" aria-label={`${project.title} technologies`}>
                {project.stack.map((technology) => <span key={technology}>{technology}</span>)}
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="projects-footer-cta">
        <p>Have a problem worth solving?</p>
        <Link to="/contact">Let&apos;s build something <span aria-hidden="true">&rarr;</span></Link>
      </section>
    </main>
  )
}

export default Projects

