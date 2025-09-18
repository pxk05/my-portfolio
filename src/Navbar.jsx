import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggle = () => setOpen((o) => !o);
  const close = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 2);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Primary">
      <div className="container nav-inner">
        <Link to="/" className="navbar-brand" onClick={close}>
          <span className="brand-initial">PK</span>
          <span className="brand-name">Pratikshya Kafle</span>
        </Link>

        <button
          className={`navbar-toggle ${open ? 'open' : ''}`}
          onClick={toggle}
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls="primary-navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul
          id="primary-navigation"
          className={`navbar-links ${open ? 'open' : ''}`}
          onClick={close}
        >
          <li>
            <NavLink to="/home" className={({ isActive }) => (isActive ? 'active' : undefined)}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : undefined)}>About Me</NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : undefined)}>Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : undefined)}>Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;