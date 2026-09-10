import React from 'react';
import './services.css';

const services = [
  { icon: 'uil uil-server', title: 'Backend Development', text: 'Business logic, REST APIs and database-driven applications with Java and Spring Boot.' },
  { icon: 'uil uil-window', title: 'Full-Stack Applications', text: 'Complete web applications connecting backend services, databases and Angular frontends.' },
  { icon: 'uil uil-building', title: 'Business Management Systems', text: 'Custom applications for workflows, reporting, data management and internal business processes.' },
  { icon: 'uil uil-database', title: 'Database & Reporting', text: 'Relational database applications and business reporting with PostgreSQL and JasperReports.' },
];

function Services() {
  return (
    <section className="services section" id="services">
      <h2 className="section__title">What I Do</h2>
      <span className="section__subtitle">Software solutions for practical business needs</span>
      <div className="services__container container grid">
        {services.map((service) => (
          <article className="service__card" key={service.title}>
            <i className={`${service.icon} service__icon`} />
            <h3 className="service__title">{service.title}</h3>
            <p className="service__text">{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;
