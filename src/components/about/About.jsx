import React from 'react';
import "./about.css"
import AboutImg from "../../assets/Profile_N.jpg";
import CV from "../../assets/Nacer-CV.pdf";
import Info from './Info';

function About() {
  return (
    <section className='about section' id='#about'>
        <h2 className='section__title'>About Me</h2>
        <span className="section__subtitle">My introduction</span>
        <div className="about__container container grid">
          <img src={AboutImg} alt="" className="about__img" />
          <div className="about__data">
            <Info />
            <p className="about__description">
            Full-stack developer with a passion for building innovative web applications. Experienced in React.js, Node.js, and MongoDB, with a focus on creating intuitive user experiences.
            </p>
          </div>
        </div>
    </section>
  )
}

export default About;