import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <section className="home-hero">
      <div className="overlay"></div>
      <div className="container hero-content">
        <h1>
          Crafting engaging digital experiences
          <span className="accent"> with code and creativity.</span>
        </h1>
        <p>
          I build modern, user-focused web applications. Explore my projects, learn more about me,
          or get in touch to collaborate.
        </p>
        <div className="cta-group">
          <Link to="/projects" className="btn">View Projects</Link>
          <Link to="/contact" className="btn btn-outline">Contact Me</Link>
        </div>
      </div>
    </section>
  );
};

export default Home;