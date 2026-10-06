import { useState } from "react";
import projects from "../data/projects";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openImages = (project) => {
    setSelectedProject(project);
  };

  const closeImages = () => {
    setSelectedProject(null);
  };

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

              {/* View Images */}
              {project.images && project.images.length > 0 && (
                <button
                  type="button"
                  className="project-button"
                  onClick={() => openImages(project)}
                >
                  View Images
                </button>
              )}

              {/* Demo Video */}
              {project.demo && project.demo !== "#" && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo Video
                </a>
              )}

            </div>

          </div>
        ))}
      </div>

      {/* IMAGE GALLERY MODAL */}
      {selectedProject && (
        <div className="image-modal-overlay" onClick={closeImages}>

          <div
            className="image-modal"
            onClick={(event) => event.stopPropagation()}
          >

            <div className="image-modal-header">
              <h2>{selectedProject.title}</h2>

              <button
                type="button"
                className="image-modal-close"
                onClick={closeImages}
              >
                ×
              </button>
            </div>

            <div className="image-gallery">
              {selectedProject.images.map((image, imageIndex) => (
                <div
                  className="gallery-image-container"
                  key={imageIndex}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="gallery-image"
                  />
                </div>
              ))}
            </div>

          </div>

        </div>
      )}

    </section>
  );
}

export default Projects;