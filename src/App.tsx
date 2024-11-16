import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { 
  FaUserAstronaut, FaUser, FaBriefcase, FaCode, 
  FaComments, FaEnvelope, FaMoon, FaSun 
} from 'react-icons/fa';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnalogClock from './components/AnalogClock';
import WelcomeSection from './components/WelcomeSection';
import Fireworks from './components/Fireworks';
import PartyPopper from './components/PartyPopper';
import ScrollArrows from './components/ScrollArrows';
import IntroSection from './components/IntroSection';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [currentSection, setCurrentSection] = useState('welcome');
  const [showFireworks, setShowFireworks] = useState(true);
  const hasShownFireworks = useRef(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode !== null) {
      setDarkMode(storedDarkMode === 'true');
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowFireworks(false);
    }, 2000);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.pageYOffset;

      sections.forEach((current) => {
        const sectionHeight = (current as HTMLElement).offsetHeight;
        const sectionTop = (current as HTMLElement).offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          if (['welcome', 'about', 'experience', 'projects', 'reviews', 'contact'].includes(sectionId || '')) {
            setCurrentSection(sectionId || '');
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    {
      id: 'welcome',
      label: 'Home',
      icon: <FaUserAstronaut className="text-2xl group-hover:text-gradient-start" />
    },
    {
      id: 'about',
      label: 'About',
      icon: <FaUser className="text-2xl group-hover:text-gradient-start" />
    },
    {
      id: 'experience',
      label: 'Experience',
      icon: <FaBriefcase className="text-2xl group-hover:text-gradient-start" />
    },
    {
      id: 'projects',
      label: 'Projects',
      icon: <FaCode className="text-2xl group-hover:text-gradient-start" />
    },
    {
      id: 'reviews',
      label: 'Reviews',
      icon: <FaComments className="text-2xl group-hover:text-gradient-start" />
    },
    {
      id: 'contact',
      label: 'Contact',
      icon: <FaEnvelope className="text-2xl group-hover:text-gradient-start" />
    }
  ];

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-cream-50 dark:bg-gray-900 text-gray-900 dark:text-white relative">
        {/* Party Poppers */}
        <PartyPopper position="top-left" interval={2500} size="small" />
        <PartyPopper position="top-right" interval={3000} size="small" />
        <PartyPopper position="bottom-left" interval={2700} size="small" />
        <PartyPopper position="bottom-right" interval={3200} size="small" />

        {/* Fireworks */}
        {showFireworks && <Fireworks />}

        {/* Theme Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="fixed top-4 right-4 z-50 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
        >
          {darkMode ? (
            <FaSun className="text-yellow-400 w-6 h-6" />
          ) : (
            <FaMoon className="text-gray-600 w-6 h-6" />
          )}
        </button>

        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex-shrink-0">
                <AnalogClock />
              </div>
              <div className="hidden md:flex space-x-8">
                {navigationItems.map((item) => (
                  <Link
                    key={item.id}
                    to={item.id}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    className={`group flex items-center space-x-2 cursor-pointer
                      ${currentSection === item.id ? 'text-gradient-start' : 'text-gray-600 dark:text-gray-300'}
                      hover:text-gradient-start transition-colors duration-300`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="relative">
          {/* Welcome Section */}
          <section id="welcome" className="relative min-h-screen">
            <WelcomeSection />
          </section>

          {/* Intro Section */}
          <section className="relative min-h-screen">
            <IntroSection />
          </section>

          {/* About Section */}
          <section id="about" className="relative min-h-screen pt-16">
            <About />
          </section>

          {/* Experience Section */}
          <section id="experience" className="relative min-h-screen py-20">
            <Experience />
          </section>

          {/* Projects Section */}
          <section id="projects" className="relative min-h-screen py-20">
            <Projects />
          </section>

          {/* Reviews Section */}
          <section id="reviews" className="relative min-h-screen py-20">
            <Reviews />
          </section>

          {/* Contact Section */}
          <section id="contact" className="relative min-h-screen py-20">
            <Contact />
          </section>
        </main>

        {/* Background Effects */}
        <ScrollArrows />
        <Footer />
      </div>
    </div>
  );
}

export default App;
