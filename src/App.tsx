import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollArrows from './components/ScrollArrows';
import BackgroundStars from './components/BackgroundStars';
import MFLogo from './components/MFLogo';
import FloatingKeywords from './components/FloatingKeywords';
import { FaMoon, FaSun, FaUser, FaBriefcase, FaCode, FaEnvelope, FaUserAstronaut, FaRobot } from 'react-icons/fa';
import './styles/scroll.css';
import './styles/animations.css';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('about');
  const [headlineIndex, setHeadlineIndex] = useState(0);
  
  const { observerRef } = useIntersectionObserver({
    onSectionChange: setActiveSection,
    threshold: 0.5,
    rootMargin: '-100px 0px -100px 0px'
  });

  const headlines = [
    "Exploring the Frontiers of AI",
    "Innovating Healthcare with ML",
    "Advancing Research in Deep Learning",
    "Building the Future of Technology"
  ];

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % headlines.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [headlines.length]);

  const navItems = [
    {
      id: 'about',
      label: 'About',
      icon: <FaUserAstronaut className="text-2xl group-hover:text-gradient-start" />
    },
    {
      id: 'experience',
      label: 'Experience',
      icon: <FaBriefcase className="text-2xl group-hover:text-gradient-start" />
    },
    {
      id: 'projects',
      label: 'Projects',
      icon: <FaRobot className="text-2xl group-hover:text-gradient-start" />
    },
    {
      id: 'contact',
      label: 'Contact',
      icon: <FaEnvelope className="text-2xl group-hover:text-gradient-start" />
    }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200 font-playfair">
      <BackgroundStars />
      <FloatingKeywords />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <MFLogo />

            <div className="flex items-center space-x-8">
              {/* Theme Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 text-gray-600 dark:text-gray-300 hover:text-gradient-start dark:hover:text-gradient-start transition-colors duration-200"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <FaSun className="text-2xl" /> : <FaMoon className="text-2xl" />}
              </button>

              {/* Navigation Items */}
              <div className="flex space-x-6">
                {navItems.map((item) => (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`group flex items-center space-x-2 text-base font-medium transition-colors duration-200
                      ${activeSection === item.id
                        ? 'text-gradient-start'
                        : 'text-gray-600 dark:text-gray-300 hover:text-gradient-start dark:hover:text-gradient-start'
                      }`}
                  >
                    {item.icon}
                    <span className="font-playfair">{item.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Animated Headlines */}
      <header className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-12"
          >
            {/* Animated Headline */}
            <motion.div
              key={headlineIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <motion.h2 
                className="text-4xl md:text-5xl font-bold font-playfair relative"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.span
                  className="bg-gradient-to-r from-[#FF3366] via-[#FF6B6B] to-[#4ECDC4] inline-block"
                  style={{
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundSize: '200% 100%'
                  }}
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 5,
                    ease: 'linear',
                    repeat: Infinity
                  }}
                >
                  {headlines[headlineIndex]}
                </motion.span>
              </motion.h2>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl font-bold font-playfair relative"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.span 
                className="relative inline-block"
                animate={{
                  scale: [1, 1.05, 1],
                  y: [0, -5, 0],
                  textShadow: [
                    '0 0 20px rgba(56,189,248,0.5)',
                    '0 0 40px rgba(232,121,249,0.4)',
                    '0 0 20px rgba(56,189,248,0.5)'
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut"
                }}
              >
                {/* Gradient background with animation */}
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-[#38BDF8] via-[#E879F9] to-[#38BDF8] opacity-75 blur-lg"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    backgroundSize: '200% 200%'
                  }}
                />
                
                {/* Main text with gradient */}
                <motion.span 
                  className="relative bg-gradient-to-r from-[#38BDF8] via-[#E879F9] to-[#38BDF8] bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    backgroundSize: '200% 200%'
                  }}
                >
                  AI Researcher
                </motion.span>

                {/* Sparkle effects */}
                <motion.span 
                  className="absolute -inset-2 bg-gradient-to-r from-[#38BDF8] via-transparent to-[#E879F9] opacity-30 blur-xl"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    rotate: {
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear"
                    },
                    scale: {
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }
                  }}
                />
              </motion.span>

              <motion.span 
                className="relative inline-block mx-4 text-transparent bg-gradient-to-r from-[#38BDF8] to-[#E879F9] bg-clip-text"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                &
              </motion.span>

              <motion.span 
                className="relative inline-block"
                animate={{
                  scale: [1, 1.05, 1],
                  y: [0, -5, 0],
                  textShadow: [
                    '0 0 20px rgba(232,121,249,0.5)',
                    '0 0 40px rgba(56,189,248,0.4)',
                    '0 0 20px rgba(232,121,249,0.5)'
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                {/* Gradient background with animation */}
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-[#E879F9] via-[#38BDF8] to-[#E879F9] opacity-75 blur-lg"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    backgroundSize: '200% 200%'
                  }}
                />
                
                {/* Main text with gradient */}
                <motion.span 
                  className="relative bg-gradient-to-r from-[#E879F9] via-[#38BDF8] to-[#E879F9] bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    backgroundSize: '200% 200%'
                  }}
                >
                  Developer
                </motion.span>

                {/* Sparkle effects */}
                <motion.span 
                  className="absolute -inset-2 bg-gradient-to-r from-[#E879F9] via-transparent to-[#38BDF8] opacity-30 blur-xl"
                  animate={{
                    rotate: [0, -360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    rotate: {
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear"
                    },
                    scale: {
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: 0.5
                    }
                  }}
                />
              </motion.span>
            </motion.h1>

            <div className="flex justify-center space-x-6">
              <motion.a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                {/* Gradient background with glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-[#EC4899] rounded-lg opacity-75 group-hover:opacity-100 blur animate-gradient-xy"></div>
                
                {/* Button content */}
                <div className="relative px-8 py-4 bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-[#EC4899] text-white rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-200 text-lg">
                  Get in Touch
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-[#EC4899] rounded-lg opacity-50 group-hover:opacity-75 blur-xl transition-opacity"></div>
              </motion.a>

              <motion.a
                href="#projects"
                onClick={(e) => handleNavClick(e, 'projects')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                {/* Gradient background with glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#EC4899] via-[#7C3AED] to-[#4F46E5] rounded-lg opacity-75 group-hover:opacity-100 blur animate-gradient-xy"></div>
                
                {/* Button content */}
                <div className="relative px-8 py-4 bg-gradient-to-r from-[#EC4899] via-[#7C3AED] to-[#4F46E5] text-white rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-200 text-lg">
                  View Projects
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#EC4899] via-[#7C3AED] to-[#4F46E5] rounded-lg opacity-50 group-hover:opacity-75 blur-xl transition-opacity"></div>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <main ref={observerRef}>
        <section id="about" className="py-20">
          <About />
        </section>
        <section id="experience" className="py-20">
          <Experience />
        </section>
        <section id="projects" className="py-20">
          <Projects />
        </section>
        <section id="contact" className="py-20">
          <Contact />
        </section>
      </main>

      {/* Scroll Arrows */}
      <ScrollArrows />

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-300 font-playfair">
              &copy; {new Date().getFullYear()} Mubashir Farooq. All rights reserved.
            </p>
            <motion.p 
              className="flex items-center justify-center mt-2 text-gray-500 dark:text-gray-400 font-playfair"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Made with{' '}
              <motion.span
                animate={{ 
                  scale: [1, 1.2, 1],
                  color: ['#FF6B6B', '#FF4D4D', '#FF6B6B']
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="mx-1"
              >
                &hearts;
              </motion.span>
              {' '}by Mubashir Farooq
            </motion.p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
