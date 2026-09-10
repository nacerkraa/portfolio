import React from 'react';
import './contact.css';

function Contact() {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Let's Work Together</h2>
      <span className="section__subtitle">Have a project or an opportunity?</span>

      <div className="contact__container container">
        <div className="contact__content">
          <h3>Let's build something useful.</h3>
          <p>
            I'm interested in full-stack software engineering opportunities and practical business application projects.
          </p>
          <div className="contact__links">
            <a href="https://github.com/nacerkraa" target="_blank" rel="noreferrer">
              <i className="uil uil-github" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/nacerkraa/" target="_blank" rel="noreferrer">
              <i className="uil uil-linkedin" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
