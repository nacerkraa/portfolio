import React from 'react';

function Data() {
  return (
    <div className="home__data">
      <h1 className="home__title">
        Nacer Kraa
        <span className="home__title-mark" aria-hidden="true">✦</span>
      </h1>
      <h3 className="home__subtitle">Full-Stack Software Engineer</h3>
      <p className="home__description">
        I build practical business applications across backend, frontend and database layers, with a strong focus on Java, Spring Boot, Angular and PostgreSQL.
      </p>
      <div className="home__actions">
        <a href="#projects" className="button button--flex">
          View Projects <i className="uil uil-arrow-right button__icon"></i>
        </a>
        <a href="#contact" className="button button--ghost">
          Contact Me
        </a>
      </div>
    </div>
  );
}

export default Data;
