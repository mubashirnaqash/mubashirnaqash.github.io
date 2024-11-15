import React from 'react';
import { motion } from 'framer-motion';

const MFLogo = () => {
  return (
    <div className="flex items-center space-x-4">
      <motion.div
        className="relative w-14 h-14 flex items-center justify-center rounded-lg overflow-hidden"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-gradient-xy opacity-90"></div>
        
        {/* Glowing effect */}
        <div className="absolute inset-0 bg-white opacity-20 blur-lg"></div>
        
        {/* MF text */}
        <motion.div
          className="relative z-10 font-extrabold text-2xl text-white font-playfair"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          MF
        </motion.div>
      </motion.div>

      {/* Name with animated gradient */}
      <div className="flex flex-col">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl font-bold font-playfair"
        >
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-gradient-xy">
            Mubashir Farooq
          </span>
        </motion.h1>
      </div>
    </div>
  );
};

export default MFLogo;
