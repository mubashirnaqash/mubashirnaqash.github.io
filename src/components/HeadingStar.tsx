import React from 'react';
import { motion } from 'framer-motion';

interface HeadingStarProps {
  className?: string;
}

const HeadingStar: React.FC<HeadingStarProps> = ({ className = '' }) => {
  return (
    <motion.div
      className={`inline-block ${className}`}
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <svg 
        className="w-4 h-4" 
        viewBox="0 0 51 48" 
        fill="currentColor"
      >
        <path d="M25.5 0L31.5 16.5H49.5L35 27L40.5 44L25.5 34.5L10.5 44L16 27L1.5 16.5H19.5L25.5 0Z" />
      </svg>
    </motion.div>
  );
};

export const StarredHeading: React.FC<{
  children: React.ReactNode;
  className?: string;
  variant?: 'h1' | 'h2' | 'h3';
}> = ({ children, className = '', variant = 'h2' }) => {
  const Tag = variant;
  const starColors = [
    'text-yellow-400',
    'text-pink-400',
    'text-purple-400',
    'text-blue-400'
  ];
  const randomColor = starColors[Math.floor(Math.random() * starColors.length)];

  return (
    <Tag className={`flex items-center gap-2 ${className}`}>
      <HeadingStar className={randomColor} />
      {children}
      <HeadingStar className={randomColor} />
    </Tag>
  );
};

export default HeadingStar;
