import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AIChat from './components/AIChat';

function App() {
  const [isLiveMode, setIsLiveMode] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [bgStyle, setBgStyle] = useState({});

  // Load preference from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('scrollo_live_mode');
    if (stored) {
      setIsLiveMode(JSON.parse(stored));
    }
  }, []);

  // Update background based on time if Live Mode is active
  useEffect(() => {
    const updateBackground = () => {
      if (!isLiveMode) {
        setBgStyle({}); // Reset to default CSS class
        return;
      }

      const now = new Date();
      const hour = now.getHours();
      const minute = now.getMinutes();
      const timeFloat = hour + minute / 60;

      let baseColor = '';
      let gradientOverlay = '';

      // Time-based logic
      // Night (22:00 - 05:00): Darker
      if (timeFloat >= 22 || timeFloat < 5) {
        // Deep blue/black
        baseColor = `hsl(222, 47%, 5%)`; 
        gradientOverlay = `radial-gradient(circle at 50% 0%, rgba(30, 41, 59, 0.2), transparent 50%)`;
      } 
      // Morning (05:00 - 11:00): Transition to Original
      else if (timeFloat >= 5 && timeFloat < 11) {
        // Transition from dark to original slate
        const p = (timeFloat - 5) / 6; // Progress
        const l = 5 + (p * 6); // Lightness 5% -> 11%
        baseColor = `hsl(222, 47%, ${l}%)`;
        gradientOverlay = `radial-gradient(circle at 100% 0%, rgba(99, 102, 241, ${0.1 * p}), transparent 60%)`;
      }
      // Day (11:00 - 17:00): Lighter + Warm tint
      else if (timeFloat >= 11 && timeFloat < 17) {
        // Original slate to slightly lighter with warm tint
        const p = (timeFloat - 11) / 6;
        // Lightness 11% -> 16% -> 11% (Peak at 14:00)
        // Hue shift slightly towards purple/warmth?
        baseColor = `hsl(225, 40%, 15%)`;
        // Subtle yellow/red tint for daylight sun
        gradientOverlay = `radial-gradient(circle at 50% -20%, rgba(255, 150, 100, 0.08), transparent 70%)`;
      }
      // Evening (17:00 - 22:00): Back to Dark
      else {
        const p = (timeFloat - 17) / 5;
        const l = 15 - (p * 10); // 15% -> 5%
        baseColor = `hsl(222, 47%, ${l}%)`;
        gradientOverlay = `radial-gradient(circle at 0% 50%, rgba(79, 70, 229, 0.1), transparent 50%)`;
      }

      setBgStyle({
        backgroundColor: baseColor,
        backgroundImage: gradientOverlay,
        transition: 'background-color 2s ease, background-image 2s ease'
      });
    };

    updateBackground();
    const interval = setInterval(updateBackground, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [isLiveMode]);

  const toggleLiveMode = () => {
    const newValue = !isLiveMode;
    setIsLiveMode(newValue);
    localStorage.setItem('scrollo_live_mode', JSON.stringify(newValue));
  };

  return (
    <div 
      className="relative min-h-screen transition-colors duration-1000"
      style={bgStyle} // Apply dynamic style overrides here
    >
      <Navbar 
        isLiveMode={isLiveMode} 
        toggleLiveMode={toggleLiveMode} 
        onOpenChat={() => setIsChatOpen(true)}
      />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
      <AIChat 
        isOpen={isChatOpen} 
        onToggle={() => setIsChatOpen(!isChatOpen)} 
      />
    </div>
  );
}

export default App;