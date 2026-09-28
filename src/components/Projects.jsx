import projects from "../data/projects";

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="section-heading">
        <p>MY WORK</p>
        <h2>
          Featured <span>Projects</span>
        </h2>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>

            <div className="project-number">
              {String(index + 1).padStart(2, "0")}
            </div>

            <p className="project-category">
              {project.category}
            </p>

            <h3>{project.title}</h3>

            <p className="project-description">
              {project.description}
            </p>

            <div className="project-technologies">
              {project.technologies.map((technology, techIndex) => (
                <span key={techIndex}>
                  {technology}
                </span>
              ))}
            </div>

            <div className="project-highlights">
              {project.highlights.map((highlight, highlightIndex) => (
                <p key={highlightIndex}>
                  ✓ {highlight}
                </p>
              ))}
            </div>

            <div className="project-links">

              {/* GitHub */}
              {project.github && project.github !== "#" && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              )}

              {/* Live Demo */}
              {project.demo && project.demo !== "#" && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              )}

            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;