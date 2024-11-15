import React from 'react';
import { motion } from 'framer-motion';

interface StarredHeadingProps {
  children: React.ReactNode;
}

export const StarredHeading: React.FC<StarredHeadingProps> = ({ children }) => {
  return (
    <motion.h2 
      className="text-4xl font-bold mb-12 text-center relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.h2>
  );
};
