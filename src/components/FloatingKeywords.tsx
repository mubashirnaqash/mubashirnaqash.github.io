import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const leftKeywords = [
  ['Deep Learning', 'Computer Vision', 'PyTorch', 'TensorFlow', 'NLP', 'Machine Learning'],
  ['React', 'TypeScript', 'Python', 'JavaScript', 'C++', 'Java'],
  ['OpenCV', 'Scikit-learn', 'Pandas', 'NumPy', 'Keras', 'CUDA'],
  ['Git', 'Docker', 'AWS', 'Linux', 'REST APIs', 'GraphQL']
];

const rightKeywords = [
  ['Healthcare AI', 'Research', 'Data Science', 'AI Development', 'Neural Networks', 'MLOps'],
  ['Medical Imaging', 'Signal Processing', 'Biomedical', 'Pattern Recognition', 'Classification'],
  ['Full Stack', 'Web Dev', 'Cloud Computing', 'DevOps', 'System Design', 'Architecture'],
  ['Team Lead', 'Agile', 'Problem Solving', 'Innovation', 'Research', 'Teaching']
];

const FloatingKeywords = () => {
  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setLeftIndex((prev) => (prev + 1) % leftKeywords.length);
      setRightIndex((prev) => (prev + 1) % rightKeywords.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Left Side Keywords */}
      <div className="absolute -left-4 md:left-8 top-1/2 -translate-y-1/2 space-y-6 hidden lg:block">
        <AnimatePresence mode="wait">
          {leftKeywords[leftIndex].map((keyword, index) => (
            <motion.div
              key={`${keyword}-${leftIndex}`}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ 
                duration: 0.8,
                delay: index * 0.1,
                ease: "easeInOut"
              }}
              className="relative group"
            >
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] opacity-0 group-hover:opacity-20 rounded-lg blur transition-opacity"></div>
              
              {/* Text */}
              <div className="relative text-sm md:text-base font-fancy bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent 
                group-hover:from-[#7C3AED] group-hover:to-[#4F46E5] transition-all duration-300 cursor-default transform group-hover:scale-110
                whitespace-nowrap"
              >
                {keyword}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Right Side Keywords */}
      <div className="absolute -right-4 md:right-8 top-1/2 -translate-y-1/2 space-y-6 text-right hidden lg:block">
        <AnimatePresence mode="wait">
          {rightKeywords[rightIndex].map((keyword, index) => (
            <motion.div
              key={`${keyword}-${rightIndex}`}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ 
                duration: 0.8,
                delay: index * 0.1,
                ease: "easeInOut"
              }}
              className="relative group"
            >
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] opacity-0 group-hover:opacity-20 rounded-lg blur transition-opacity"></div>
              
              {/* Text */}
              <div className="relative text-sm md:text-base font-fancy bg-gradient-to-r from-[#7C3AED] to-[#EC4899] bg-clip-text text-transparent 
                group-hover:from-[#EC4899] group-hover:to-[#7C3AED] transition-all duration-300 cursor-default transform group-hover:scale-110
                whitespace-nowrap"
              >
                {keyword}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
};

export default FloatingKeywords;
