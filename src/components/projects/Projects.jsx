import React from 'react';
import './projects.css';

const projects = [
  {
    title: 'CurrencyToWords',
    type: 'Business Management Application',
    featured: true,
    description:
      'A business application for managing payment orders, clients and products, with French and Arabic amount-to-words conversion, workflow management and reporting.',
    features: ['Payment orders', 'Kanban workflow', 'French & Arabic support', 'JasperReports', 'Offline deployment'],
    technologies: ['Java', 'Spring Boot', 'JHipster', 'Angular', 'PostgreSQL', 'Docker'],
    link: 'https://github.com/nacerkraa',
  },
  {
    title: 'AssetCheck360',
    type: 'Enterprise Full-Stack Application',
    description:
      'A JHipster-based business application demonstrating complete full-stack development across backend, frontend, database and deployment.',
    features: ['Business workflows', 'REST APIs', 'Database persistence', 'Docker deployment'],
    technologies: ['Java', 'Spring Boot', 'JHipster', 'Angular', 'PostgreSQL', 'Docker'],
    link: 'https://github.com/nacerkraa',
  },
  {
    title: 'JDL → Filament',
    type: 'Developer Tool',
    description:
      'A project focused on converting JHipster Domain Language concepts into Laravel Filament resources, connecting application modeling with rapid admin development.',
    features: ['JDL processing', 'Resource generation', 'Laravel Filament integration'],
    technologies: ['Laravel', 'PHP', 'Filament', 'JDL'],
    link: 'https://github.com/nacerkraa/jdl-to-filament',
  },
  {
    title: 'Car Parts Landing Page',
    type: 'Web / Frontend Project',
    description:
      'A focused landing page project demonstrating responsive frontend development and presentation of a car-parts business.',
    features: ['Responsive layout', 'Product-focused presentation', 'Modern web UI'],
    technologies: ['React', 'JavaScript', 'HTML', 'CSS'],
    link: 'https://github.com/nacerkraa',
  },
];

function Projects() {
  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Featured Projects</h2>
      <span className="section__subtitle">Selected work & engineering projects</span>

      <div className="projects__container container grid">
        {projects.map((project) => (
          <article className={`project__card ${project.featured ? 'project__card--featured' : ''}`} key={project.title}>
            <div className="project__topline">
              <span className="project__type">{project.type}</span>
              {project.featured && <span className="project__featured">Featured</span>}
            </div>

            <h3 className="project__title">{project.title}</h3>
            <p className="project__description">{project.description}</p>

            <div className="project__features">
              {project.features.map((feature) => (
                <span className="project__feature" key={feature}>{feature}</span>
              ))}
            </div>

            <div className="project__techs">
              {project.technologies.map((technology) => (
                <span className="project__tech" key={technology}>{technology}</span>
              ))}
            </div>

            <p className="project__contribution">
              <strong>Contribution:</strong> Architecture + Full-Stack Development
            </p>

            <a className="project__link" href={project.link} target="_blank" rel="noreferrer">
              View project <i className="uil uil-arrow-up-right" />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
