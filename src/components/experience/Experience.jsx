import React from 'react';
import './experience.css';

const experiences = [
  {
    role: 'Software Engineer',
    company: 'UAB Ouled Hamla',
    description: 'Developed business-oriented software for real-world organizational needs.',
    technologies: 'Full-stack web development and business applications',
  },
  {
    role: 'Full-Stack Developer',
    company: 'Go Platform',
    description: 'Worked on full-stack web applications across backend, frontend, APIs and relational databases.',
    technologies: 'PHP · Laravel · Node.js · Express.js · React · REST APIs',
  },
  {
    role: 'Freelance Backend Developer',
    company: 'Freelance',
    description: 'Approximately one year of freelance experience focused on backend/API development and business applications.',
    technologies: 'Backend development · REST APIs · Business applications',
  },
];

function Experience() {
  return (
    <section className="experience section" id="experience">
      <h2 className="section__title">Experience</h2>
      <span className="section__subtitle">Professional software development experience</span>

      <div className="experience__container container">
        {experiences.map((experience) => (
          <article className="experience__item" key={`${experience.role}-${experience.company}`}>
            <div className="experience__marker" />
            <div>
              <span className="experience__company">{experience.company}</span>
              <h3 className="experience__role">{experience.role}</h3>
              <p className="experience__description">{experience.description}</p>
              <p className="experience__technologies">{experience.technologies}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
