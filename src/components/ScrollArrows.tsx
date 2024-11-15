import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const ScrollArrows = () => {
  const [showTopArrow, setShowTopArrow] = useState(false);
  const [showBottomArrow, setShowBottomArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      setShowTopArrow(scrollTop > clientHeight * 0.5);
      setShowBottomArrow(scrollTop < scrollHeight - clientHeight * 1.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  const arrowButtonClasses = `
    fixed right-6 w-12 h-12 flex items-center justify-center
    rounded-full bg-cream-50 dark:bg-gray-800 shadow-lg
    hover:shadow-xl transition-all duration-300
    hover:bg-gradient-to-r hover:from-accent-peach hover:to-accent-mint
    hover:text-white z-50
  `;

  return (
    <>
      <AnimatePresence>
        {showTopArrow && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            onClick={scrollToTop}
            className={`${arrowButtonClasses} top-6`}
            aria-label="Scroll to top"
          >
            <FaArrowUp className="w-5 h-5" />
            <div className="absolute inset-0 bg-gradient-to-r from-accent-peach/20 to-accent-mint/20 rounded-full blur animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showBottomArrow && (
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            onClick={scrollToBottom}
            className={`${arrowButtonClasses} bottom-6`}
            aria-label="Scroll to bottom"
          >
            <FaArrowDown className="w-5 h-5" />
            <div className="absolute inset-0 bg-gradient-to-r from-accent-mint/20 to-accent-peach/20 rounded-full blur animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default ScrollArrows;
