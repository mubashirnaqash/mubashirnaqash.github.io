import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useState, useEffect } from 'react';
import { StarredHeading } from './HeadingStar';

// Import photo directly from src/assets
import profilePhoto from '../assets/mubashir-photo.jpg';

const About = () => {
  return (
    <section id="about" className="min-h-screen py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        <StarredHeading>About Me</StarredHeading>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Profile Photo */}
          <motion.div 
            className="w-64 h-64 relative"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
              <img
                src={profilePhoto}
                alt="Mubashir Naqash"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <div className="md:w-2/3">
            <motion.h3 
              className="text-2xl font-bold mb-4 text-blue-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              PhD Researcher & AI Enthusiast
            </motion.h3>
            
            <motion.p 
              className="text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              I'm passionate about pushing the boundaries of AI and Machine Learning, 
              particularly in healthcare applications. My research focuses on developing 
              innovative solutions that bridge the gap between theoretical ML concepts 
              and practical medical challenges.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
