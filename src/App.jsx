import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Splash from './Splash';
import WhoIsThis from './WhoIsThis';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './Footer'; // Import the new Footer component
// import Skills from './pages/Skills';

function App() {
  const [showSplash, setShowSplash] = useState(false); // Start with splash hidden
  const [showWhoIsThis, setShowWhoIsThis] = useState(true); // Start with WhoIsThis visible
  const [selectedRole, setSelectedRole] = useState(null);

  useEffect(() => {
    console.log('App mounted, showSplash:', showSplash, 'showWhoIsThis:', showWhoIsThis);
    // No initial timer needed here, WhoIsThis will handle the transition
  }, []);

  useEffect(() => {
    console.log('State changed - showSplash:', showSplash, 'showWhoIsThis:', showWhoIsThis);
  }, [showSplash, showWhoIsThis]);

  const handleSelectRole = (role) => {
    console.log('Role selected:', role);
    setSelectedRole(role);
    setShowWhoIsThis(false); // Hide WhoIsThis
    setShowSplash(true); // Show Splash after role selection
  };

  const handleSplashComplete = () => {
    console.log('Splash animation complete');
    setShowSplash(false); // Hide Splash after it's done
  };

  console.log('Rendering App - showSplash:', showSplash, 'showWhoIsThis:', showWhoIsThis);

  return (
    <Router>
      {showWhoIsThis && <WhoIsThis onSelectRole={handleSelectRole} />}
      {!showWhoIsThis && showSplash && <Splash onSplashComplete={handleSplashComplete} />}
      {!showWhoIsThis && !showSplash && (
        <div className="app-container">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            {/* Skills merged into About Me; route removed */}
          </Routes>
          <Footer /> {/* Add the Footer component here */}
        </div>
      )}
    </Router>
  );
}

export default App;
