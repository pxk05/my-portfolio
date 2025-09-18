import React from 'react';
import './AboutMe.css';
import profileImg from '../assets/profile.png';
import {
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaAws,
  FaFigma,
  FaBrain,
  FaPalette,
  FaLightbulb,
  FaUsers,
} from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiMysql, SiVercel } from 'react-icons/si';

const AboutMe = () => {
  const programmingSkills = [
    { name: 'Python', icon: <FaPython /> },
    { name: 'JavaScript (React, Node.js)', icon: <FaJs /> },
  ];
  const webDevelopmentSkills = [
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3Alt /> },
    { name: 'Tailwind', icon: <SiTailwindcss /> },
    { name: 'API Integration', icon: <FaReact /> }, // Using React icon for now, can be changed
  ];
  const databaseSkills = [
    { name: 'MySQL', icon: <SiMysql /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
  ];
  const toolsAndPlatforms = [
    { name: 'Git/GitHub', icon: <FaGitAlt /> },
    { name: 'Vercel', icon: <SiVercel /> },
    { name: 'Figma', icon: <FaFigma /> },
  ];
  const aiDataSkills = [
    { name: 'Machine Learning Basics', icon: <FaBrain /> },
    { name: 'Computer Vision (OpenCV, Lipreading Project)', icon: <FaBrain /> },
    { name: 'Data Analysis & Visualization', icon: <FaBrain /> },
  ];
  const creativeSoftSkills = [
    { name: 'UI/UX Design', icon: <FaPalette /> },
    { name: 'Graphic Design & Creative Writing', icon: <FaLightbulb /> },
    { name: 'Problem-Solving & Research', icon: <FaLightbulb /> },
    { name: 'Communication & Teamwork', icon: <FaUsers /> },
  ];

  return (
    <div className="page-container about-me-container">
      <section className="about-hero container">
        <div className="about-text">
          <h1>About Me</h1>
          <p>
            Hi, I’m Pratikshya Kafle, a Computer Science and AI student with a passion for technology, creativity, and problem-solving. I enjoy building user-friendly digital solutions through web design and development, while also exploring the potential of artificial intelligence. Along with my skills in Python, frontend development, and API integration, I bring creativity from graphic design and writing, helping me present ideas in clear and engaging ways. I’m always curious, always learning, and excited to turn ideas into impactful projects.
          </p>
        </div>
        <div className="profile-picture" aria-label="Profile picture">
          <img
            src={profileImg}
            alt="Profile picture"
            onError={(e) => (e.currentTarget.style.display = 'none')}
          />
        </div>
      </section>

      <section className="container skills-section">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <h3>Programming</h3>
            <ul>
              {programmingSkills.map((s, i) => (
                <li key={i}>
                  {s.icon} {s.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="skill-card">
            <h3>Web Development</h3>
            <ul>
              {webDevelopmentSkills.map((s, i) => (
                <li key={i}>
                  {s.icon} {s.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="skill-card">
            <h3>Database</h3>
            <ul>
              {databaseSkills.map((s, i) => (
                <li key={i}>
                  {s.icon} {s.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="skill-card">
            <h3>Tools & Platforms</h3>
            <ul>
              {toolsAndPlatforms.map((s, i) => (
                <li key={i}>
                  {s.icon} {s.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="skill-card">
            <h3>AI & Data</h3>
            <ul>
              {aiDataSkills.map((s, i) => (
                <li key={i}>
                  {s.icon} {s.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="skill-card">
            <h3>Creative & Soft Skills</h3>
            <ul>
              {creativeSoftSkills.map((s, i) => (
                <li key={i}>
                  {s.icon} {s.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;