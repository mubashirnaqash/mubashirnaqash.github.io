import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { HeadlineStars } from './BackgroundStars';
import FloatingKeywords from './FloatingKeywords';

const headlines = [
  "Exploring the Frontiers of AI",
  "Innovating Healthcare with ML",
  "Advancing Research in Deep Learning",
  "Building the Future of Technology",
  "Transforming Ideas into Reality",
  "Creating Intelligent Solutions",
  "Pioneering AI Development",
  "Pushing Technical Boundaries"
];

const IntroSection = () => {
  const [currentHeadline, setCurrentHeadline] = useState(0);
  const [glowRotation, setGlowRotation] = useState(0);

  useEffect(() => {
    const headlineInterval = setInterval(() => {
      setCurrentHeadline(prev => (prev + 1) % headlines.length);
    }, 3000);

    const glowInterval = setInterval(() => {
      setGlowRotation(prev => (prev + 1) % 360);
    }, 20);

    return () => {
      clearInterval(headlineInterval);
      clearInterval(glowInterval);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-pink-500/10 to-transparent rounded-full filter blur-3xl"></div>
      </div>

      {/* Stars */}
      <HeadlineStars />

      {/* Main Content */}
      <div className="text-center z-10 relative p-4 space-y-12">
        {/* Headline Section with Keywords */}
        <div className="relative min-h-[200px] flex items-center justify-center">
          {/* Floating Keywords */}
          <FloatingKeywords />

          {/* Rotating Glow Background */}
          <div 
            className="absolute inset-0 -top-8 -bottom-8 bg-gradient-to-r from-[#4F46E5]/20 via-[#7C3AED]/20 to-[#EC4899]/20 rounded-full filter blur-3xl"
            style={{ transform: `rotate(${glowRotation}deg)` }}
          ></div>

          <AnimatePresence mode="wait">
            <motion.h1
              key={headlines[currentHeadline]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-[#EC4899] bg-clip-text text-transparent
                filter drop-shadow-[0_0_10px_rgba(124,58,237,0.5)]
                font-fancy tracking-wider z-20"
            >
              {headlines[currentHeadline]}
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* Role Section */}
        <div className="relative mt-8 mb-16">
          {/* Role Glow Background */}
          <div 
            className="absolute inset-0 -top-4 -bottom-4 bg-gradient-to-r from-[#4F46E5]/10 via-[#7C3AED]/10 to-[#EC4899]/10 rounded-full filter blur-2xl"
            style={{ transform: `rotate(${-glowRotation}deg)` }}
          ></div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl md:text-3xl text-gray-300
              filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]
              font-fancy tracking-wide
              transition-all duration-300 hover:text-gray-100"
          >
            AI Researcher & Developer
          </motion.div>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex justify-center space-x-6 pt-4">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(124,58,237,0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-[#EC4899] text-white font-medium
                hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300
                font-fancy tracking-wide"
            >
              Contact Me
            </motion.button>
          </Link>

          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.15)",
                boxShadow: "0 0 20px rgba(124,58,237,0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg bg-white/10 text-white font-medium backdrop-blur-sm
                hover:bg-white/20 transition-all duration-300
                relative group
                font-fancy tracking-wide"
            >
              {/* Button Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#4F46E5]/0 via-[#7C3AED]/10 to-[#EC4899]/0 
                rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl">
              </div>
              <span className="relative z-10">View Projects</span>
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
