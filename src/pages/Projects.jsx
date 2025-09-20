import React from 'react';
import './Projects.css';
import nyanoKokhLogo from '../assets/nyano kokh logo.png';
import tealiciousLogo from '../assets/tealicious.png';
import lipreadImage from '../assets/lipread.jpg';

const Projects = () => {
  const projects = [
    { id: 1, title: 'Nyano Kokh', description: 'A digital platform designed to support maternal and child health by spreading awareness, resources, and community care. It focuses on providing warmth, guidance, and accessibility for mothers.', link: 'https://github.com/pxk05/Nyano-Kakh', imageUrl: nyanoKokhLogo },
    { id: 4, title: 'Tealicious Webapp', description: 'A web-based project for tea lovers, offering an engaging platform to explore varieties of teas. It combines design, taste experience, and interactive features for a modern tea culture.', link: 'https://github.com/pxk05/Tealicious.git', imageUrl: tealiciousLogo },
    {
      id: 5,
      title: 'Lip Reading Project',
      description: 'A computer vision project that interprets spoken words by analyzing lip movements. It leverages AI to enhance accessibility for hearing-impaired individuals.',
      imageUrl: lipreadImage,
      link: 'https://github.com/pxk05/Lip-Reading.git' // Replace with actual link
    },
  ];

  return (
    <div className="page-container">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.imageUrl} alt={project.title} className="project-image" />
            <div className="project-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;