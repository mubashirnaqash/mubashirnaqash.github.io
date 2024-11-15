import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingKeywords = () => {
  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(0);

  const allLeftKeywords = [
    ['Deep Learning', 'Computer Vision', 'PyTorch', 'TensorFlow', 'NLP', 'Machine Learning'],
    ['React', 'TypeScript', 'Python', 'JavaScript', 'C++', 'Java'],
    ['OpenCV', 'Scikit-learn', 'Pandas', 'NumPy', 'Keras', 'CUDA'],
    ['Git', 'Docker', 'AWS', 'Linux', 'REST APIs', 'GraphQL']
  ];

  const allRightKeywords = [
    ['Healthcare AI', 'Research', 'Data Science', 'AI Development', 'Neural Networks', 'MLOps'],
    ['Medical Imaging', 'Signal Processing', 'Biomedical', 'Pattern Recognition', 'Classification', 'Segmentation'],
    ['Full Stack', 'Web Dev', 'Cloud Computing', 'DevOps', 'System Design', 'Architecture'],
    ['Team Lead', 'Agile', 'Problem Solving', 'Innovation', 'Research', 'Teaching']
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setLeftIndex((prev) => (prev + 1) % allLeftKeywords.length);
      setRightIndex((prev) => (prev + 1) % allRightKeywords.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const flyInLeft = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 }
  };

  const flyInRight = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 }
  };

  return (
    <>
      <div className="fixed left-8 top-1/2 -translate-y-1/2 space-y-8 hidden lg:block">
        <AnimatePresence mode="wait">
          {allLeftKeywords[leftIndex].map((keyword, index) => (
            <motion.div
              key={`${keyword}-${leftIndex}`}
              variants={flyInLeft}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ 
                duration: 0.8,
                delay: index * 0.1,
                ease: "easeInOut"
              }}
              className="relative group"
            >
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent-peach to-accent-mint opacity-0 group-hover:opacity-20 rounded-lg blur transition-opacity"></div>
              
              {/* Text */}
              <div className="relative text-lg font-playfair bg-gradient-to-r from-accent-peach to-accent-mint bg-clip-text text-transparent group-hover:from-accent-mint group-hover:to-accent-peach transition-all duration-300 cursor-default transform group-hover:scale-110">
                {keyword}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="fixed right-8 top-1/2 -translate-y-1/2 space-y-8 text-right hidden lg:block">
        <AnimatePresence mode="wait">
          {allRightKeywords[rightIndex].map((keyword, index) => (
            <motion.div
              key={`${keyword}-${rightIndex}`}
              variants={flyInRight}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ 
                duration: 0.8,
                delay: index * 0.1,
                ease: "easeInOut"
              }}
              className="relative group"
            >
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent-mint to-accent-peach opacity-0 group-hover:opacity-20 rounded-lg blur transition-opacity"></div>
              
              {/* Text */}
              <div className="relative text-lg font-playfair bg-gradient-to-r from-accent-mint to-accent-peach bg-clip-text text-transparent group-hover:from-accent-peach group-hover:to-accent-mint transition-all duration-300 cursor-default transform group-hover:scale-110">
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
