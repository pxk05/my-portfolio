import React, { useEffect, useRef } from 'react';
import './Splash.css';

const Splash = ({ onSplashComplete }) => {
  const audioRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    const audio = new Audio('/netflix_intro.mp3');
    audio.preload = 'auto';
    audio.volume = 1;
    audioRef.current = audio;

    const onCurveStart = async (ev) => {
      if (ev.animationName !== 'draw-curve') return;
      if (!audioRef.current) return;
      try {
        audioRef.current.currentTime = 0;
        await audioRef.current.play();
      } catch (error) {
        console.error('Audio autoplay blocked or failed:', error);
      }
    };

    const node = pathRef.current;
    if (node) node.addEventListener('animationstart', onCurveStart);

    // Set a timer to call onSplashComplete after the animation duration
    const splashDuration = 4000; // Assuming 4 seconds for the splash animation
    const timer = setTimeout(() => {
      onSplashComplete();
    }, splashDuration);

    return () => {
      if (node) node.removeEventListener('animationstart', onCurveStart);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        audioRef.current = null;
      }
      clearTimeout(timer);
    };
  }, [onSplashComplete]);

  return (
    <div className="splash-container">
      <div className="logo" aria-label="Intro logo">
        <div className="logo-text">PRATIKSHYA KAFLE</div>
        <svg
          className="logo-curve"
          viewBox="0 0 100 26"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path ref={pathRef} d="M2 24 C 22 1, 78 1, 98 24" />
        </svg>
      </div>
    </div>
  );
};

export default Splash;