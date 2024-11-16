import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineDevicePhoneMobile, HiOutlineComputerDesktop, HiOutlineDeviceTablet } from 'react-icons/hi2';
import { PiLaptopThin } from 'react-icons/pi';
import { FaBrain, FaNetworkWired, FaRobot, FaMicrochip } from 'react-icons/fa';
import { SiTensorflow, SiPytorch, SiScikitlearn } from 'react-icons/si';
import { BsGraphUp, BsLightningChargeFill } from 'react-icons/bs';
import { GiArtificialIntelligence, GiBrain, GiArtificialHive } from 'react-icons/gi';

// Background animation variants
const backgroundVariants = {
  animate: {
    background: [
      'radial-gradient(circle at 20% 20%, rgba(124, 58, 237, 0.3) 0%, transparent 70%)',
      'radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.3) 0%, transparent 70%)',
      'radial-gradient(circle at 50% 50%, rgba(79, 70, 229, 0.3) 0%, transparent 70%)',
      'radial-gradient(circle at 20% 20%, rgba(124, 58, 237, 0.3) 0%, transparent 70%)',
    ],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

const iconContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const iconVariants = {
  hidden: { 
    opacity: 0,
    scale: 0,
    rotate: -180,
  },
  show: { 
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};

const floatingAnimation = {
  y: [-10, 10],
  transition: {
    duration: 2,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut",
  },
};

const techIcons = [
    { Icon: HiOutlineComputerDesktop, color: "text-blue-500", delay: 0, scale: 2.5 },
    { Icon: HiOutlineDevicePhoneMobile, color: "text-purple-500", delay: 0.1, scale: 2.5 },
    { Icon: PiLaptopThin, color: "text-pink-500", delay: 0.2, scale: 2.5 },
    { Icon: HiOutlineDeviceTablet, color: "text-indigo-500", delay: 0.3, scale: 2.5 },
    { Icon: GiArtificialHive, color: "text-blue-400", delay: 0.4, scale: 2 },
    { Icon: FaRobot, color: "text-purple-400", delay: 0.5, scale: 2 },
    { Icon: SiTensorflow, color: "text-orange-500", delay: 0.6, scale: 2 },
    { Icon: SiPytorch, color: "text-red-500", delay: 0.7, scale: 2 },
    { Icon: GiArtificialIntelligence, color: "text-green-500", delay: 0.8, scale: 2 },
    { Icon: FaNetworkWired, color: "text-yellow-500", delay: 0.9, scale: 2 },
    { Icon: BsGraphUp, color: "text-cyan-500", delay: 1, scale: 2 },
    { Icon: FaMicrochip, color: "text-pink-400", delay: 1.1, scale: 2 },
    { Icon: SiScikitlearn, color: "text-orange-400", delay: 1.2, scale: 2 },
    { Icon: GiBrain, color: "text-purple-300", delay: 1.3, scale: 2 },
    { Icon: BsLightningChargeFill, color: "text-yellow-300", delay: 1.4, scale: 2 },
];

const quotes = [
  "Transforming Ideas into Intelligent Solutions",
  "Where Innovation Meets Excellence",
  "Building Tomorrow's Technology Today",
  "Crafting Digital Excellence"
];

const WelcomeSection = () => {
  return (
    <motion.section 
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gray-900"
      variants={backgroundVariants}
      animate="animate"
    >
      {/* Animated background patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-40"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
          style={{
            background: 'radial-gradient(circle at center, rgba(124, 58, 237, 0.3) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        <motion.div
          className="absolute inset-0 opacity-40"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            background: 'repeating-linear-gradient(45deg, rgba(79, 70, 229, 0.2) 0%, rgba(236, 72, 153, 0.2) 20%)',
            filter: 'blur(30px)',
          }}
        />
      </div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 text-center space-y-12 px-4 max-w-7xl mx-auto"
      >
        {/* Icons grid - Behind text */}
        <motion.div
          initial="hidden"
          animate="show"
          className="absolute inset-0 z-10 grid grid-cols-3 md:grid-cols-5 gap-8 md:gap-12 mt-12 opacity-20"
        >
          {techIcons.map(({ Icon, color, delay, scale }, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: delay * 0.2 }}
            >
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-[#EC4899] rounded-lg opacity-75 group-hover:opacity-100 blur transition-all duration-300"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <Icon 
                className={`${color} relative z-10 transition-transform duration-300 group-hover:scale-110`} 
                style={{ 
                  fontSize: `${scale}rem`,
                  filter: 'drop-shadow(0 0 10px currentColor)'
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Text Content - In front of icons */}
        <motion.div 
          className="relative z-30 flex flex-col items-center space-y-4"
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold font-orbitron"
            style={{
              color: '#fff',
              textShadow: `
                0 0 20px #4F46E5,
                0 0 40px #4F46E5,
                0 0 80px #4F46E5,
                2px 2px 4px rgba(0,0,0,0.5)
              `,
              WebkitTextStroke: '1px #4F46E5'
            }}
          >
            Welcome to
          </motion.h1>

          <motion.div
            className="text-3xl md:text-4xl font-orbitron"
            style={{
              color: '#fff',
              textShadow: `
                0 0 20px #7C3AED,
                0 0 40px #7C3AED,
                0 0 80px #7C3AED,
                2px 2px 4px rgba(0,0,0,0.5)
              `,
              WebkitTextStroke: '1px #7C3AED'
            }}
          >
            the World of
          </motion.div>

          <motion.div
            className="text-5xl md:text-6xl font-orbitron font-bold"
            style={{
              color: '#fff',
              textShadow: `
                0 0 20px #EC4899,
                0 0 40px #EC4899,
                0 0 80px #EC4899,
                2px 2px 4px rgba(0,0,0,0.5)
              `,
              WebkitTextStroke: '1px #EC4899'
            }}
          >
            Artificial
          </motion.div>

          <motion.div
            className="text-4xl md:text-5xl font-orbitron font-bold"
            style={{
              color: '#fff',
              textShadow: `
                0 0 20px #7C3AED,
                0 0 40px #7C3AED,
                0 0 80px #7C3AED,
                2px 2px 4px rgba(0,0,0,0.5)
              `,
              WebkitTextStroke: '1px #7C3AED'
            }}
          >
            Intelligence
          </motion.div>
        </motion.div>

        {/* Name and Quote */}
        <motion.div
          className="space-y-6 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-orbitron bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
            I'm Mubashir Farooq
          </h2>
          <motion.p
            className="text-xl md:text-2xl font-quicksand text-gray-300"
            animate={{
              color: ['#9CA3AF', '#A5B4FC', '#9CA3AF'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            {quotes[0]}
          </motion.p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="fixed bottom-8 left-8 z-30 flex flex-col items-center"
        >
          <div className="text-gray-400 text-lg font-orbitron">Scroll</div>
          <div className="mt-2 w-6 h-6 border-b-2 border-r-2 border-gray-400 transform rotate-45 mx-auto" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default WelcomeSection;
