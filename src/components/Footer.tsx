import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHeart, FaStar, FaClock } from 'react-icons/fa';
import { GiPartyPopper, GiHeartInside, GiSparkles } from 'react-icons/gi';
import { RiHeartsFill, RiEmotionHappyFill, RiMagicFill } from 'react-icons/ri';

const quotes = [
  "Building tomorrow's AI solutions today",
  "Bridging the gap between imagination and AI reality",
  "Transforming ideas into intelligent solutions",
  "Where creativity meets artificial intelligence",
  "Innovating at the intersection of AI and human potential",
  "Creating the future with every line of code",
  "Turning complex challenges into elegant solutions",
  "Pushing the boundaries of what's possible",
  "Where passion meets technology",
  "Crafting digital experiences that inspire",
  "Engineering dreams into reality",
  "Making the impossible possible through code",
  "Where innovation never sleeps",
  "Building bridges between humans and technology",
  "Creating tomorrow's solutions today"
];

const Footer = () => {
  const [starCount, setStarCount] = useState<number>(0);
  const [visitorCount, setVisitorCount] = useState<number>(0);
  const [showThankYou, setShowThankYou] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [celebrationPosition, setCelebrationPosition] = useState({ x: 0, y: 0 });
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    // Fetch GitHub stars
    fetch('https://api.github.com/repos/mubashirnaqash/mubashirnaqash.github.io')
      .then(response => response.json())
      .then(data => setStarCount(data.stargazers_count))
      .catch(error => console.error('Error fetching stars:', error));

    // Simulate visitor count
    const randomVisitors = Math.floor(Math.random() * 1000) + 500;
    setVisitorCount(randomVisitors);

    // Rotate quotes every 3 seconds
    const quoteInterval = setInterval(() => {
      setCurrentQuoteIndex(prev => (prev + 1) % quotes.length);
    }, 3000);

    return () => clearInterval(quoteInterval);
  }, []);

  const handleStarClick = (e: React.MouseEvent) => {
    setStarCount(prev => prev + 1);
    setCelebrationPosition({ x: e.clientX, y: e.clientY });
    setShowCelebration(true);
    setTimeout(() => setShowCelebration(false), 2000);
  };

  const Celebration = () => (
    <motion.div
      className="fixed pointer-events-none"
      style={{ left: celebrationPosition.x, top: celebrationPosition.y }}
      initial={{ scale: 0 }}
      animate={{ scale: [0, 1.2, 1], rotate: [0, 45, -45, 0] }}
      exit={{ scale: 0, opacity: 0 }}
    >
      <div className="flex flex-wrap gap-2">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [-20, -100],
              x: [0, (i - 3.5) * 30],
              opacity: [1, 0],
              scale: [1, 0.5],
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: i * 0.1,
            }}
          >
            <GiPartyPopper className="text-3xl text-yellow-400" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <>
      <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center space-y-6">
            {/* Stats Row */}
            <div className="flex justify-between items-center w-full">
              {/* Visitor Count */}
              <motion.div
                onHoverStart={() => setShowThankYou(true)}
                onHoverEnd={() => setShowThankYou(false)}
                onClick={() => setShowThankYou(true)}
                className="relative group cursor-pointer"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">
                    {visitorCount.toLocaleString()} visitors
                  </span>
                </div>

                <AnimatePresence>
                  {showThankYou && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: -40 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-1/2 transform -translate-x-1/2 whitespace-nowrap"
                    >
                      <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                        <span className="text-sm">Thank you for visiting!</span>
                        <FaHeart className="text-red-500 animate-bounce" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Mom's Dedication */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center space-y-2"
              >
                <motion.div
                  className="flex items-center justify-center space-x-2 text-pink-400"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <GiHeartInside className="text-2xl" />
                  <span className="font-medium">Dedicated to My Loving Mom</span>
                  <RiHeartsFill className="text-2xl" />
                </motion.div>
                <motion.div 
                  className="flex items-center justify-center space-x-1 text-sm text-pink-300"
                  animate={{
                    y: [0, -2, 0]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity
                  }}
                >
                  <RiHeartsFill />
                  <span>My guiding light and endless inspiration</span>
                  <RiEmotionHappyFill />
                </motion.div>
              </motion.div>

              {/* GitHub Stars */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleStarClick}
                className="relative group cursor-pointer"
              >
                {/* Tap text */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                  <span className="flex items-center gap-1 text-sm font-orbitron text-gray-400">
                    <RiMagicFill className="text-purple-400" />
                    Tap here
                    <GiSparkles className="text-yellow-400" />
                  </span>
                </div>

                {/* Thank you message on hover */}
                <AnimatePresence>
                  {showThankYou && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: -40 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-1/2 transform -translate-x-1/2 whitespace-nowrap"
                    >
                      <span className="flex items-center gap-2 text-sm">
                        Thank you
                        <RiHeartsFill className="text-pink-500 animate-pulse" />
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex items-center space-x-2">
                  <FaStar className="text-xl text-yellow-400 group-hover:animate-spin" />
                  <span className="text-sm font-medium group-hover:text-yellow-400">
                    {starCount} stars
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Copyright Row */}
            <div className="text-center">
              <p className="text-gray-300 font-playfair">
                &copy; {new Date().getFullYear()} Mubashir Farooq. All rights reserved.
              </p>
              <motion.p 
                className="flex items-center justify-center mt-2 text-gray-400 font-playfair"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Developed with{' '}
                <motion.span
                  animate={{ 
                    scale: [1, 1.2, 1],
                    color: ['#FF6B6B', '#FF4D4D', '#FF6B6B']
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
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
        </div>
      </footer>

      <AnimatePresence>
        {showCelebration && <Celebration />}
      </AnimatePresence>
    </>
  );
};

export default Footer;
