import React from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  FaCode, FaBrain, FaChartBar, FaBookReader, FaLaptopMedical, FaNetworkWired, 
  FaGraduationCap, FaAward, FaRobot, FaServer, FaMapMarkerAlt, FaUniversity, 
  FaUserGraduate, FaMedal, FaJava, FaSearch, FaChalkboardTeacher, FaPuzzlePiece, 
  FaBirthdayCake, FaGift
} from 'react-icons/fa';
import { 
  SiPython, SiTensorflow, SiScikitlearn, SiPytorch, SiOpencv, SiOpenai, 
  SiJavascript, SiCplusplus, SiMysql, SiReact, SiNodedotjs, SiMongodb, SiGit, 
  SiNumpy, SiPandas, SiSpring, SiHibernate, SiGradle, SiCmake, SiPostgresql, 
  SiSqlite, SiTypescript, SiExpress, SiHuggingface, SiGooglescholar
} from 'react-icons/si';
import { BsLightningChargeFill, BsGraphUp } from 'react-icons/bs';
import { BiBrain, BiNetworkChart } from 'react-icons/bi';
import { AiOutlineRobot } from 'react-icons/ai';
import { 
  GiPartyPopper, GiPartyFlags, GiBalloons, GiStarsStack, GiCupcake,
  GiArtificialIntelligence, GiHealthNormal 
} from 'react-icons/gi';
import { PiBalloonFill, PiConfettiFill, PiCakeFill } from "react-icons/pi";
import { MdOutlineHealthAndSafety } from 'react-icons/md';
import { TbBrain } from 'react-icons/tb';
import { StarredHeading } from './HeadingStar';
import { SectionStars, HeadlineStars } from './BackgroundStars';

// Import photo with correct filename
const profilePhoto = process.env.PUBLIC_URL + '/mubashir-photo.jpg';

const profileInfo = [
  {
    icon: <FaUniversity className="text-[#4B5563]" />,
    title: "Current Position",
    content: "PhD Researcher at HPC Research Lab"
  },
  {
    icon: <FaMapMarkerAlt className="text-[#EF4444]" />,
    title: "Institution",
    content: "Islamic University of Science and Technology"
  },
  {
    icon: <FaUserGraduate className="text-[#6366F1]" />,
    title: "Supervisor",
    content: "Dr. Asif Ali Banka"
  },
  {
    icon: <FaMedal className="text-[#F59E0B]" />,
    title: "Research Focus",
    content: "AI & Machine Learning in Healthcare"
  },
  {
    icon: <SiGooglescholar className="text-[#4285F4]" />,
    title: "Google Scholar",
    content: "View Profile",
    link: "https://scholar.google.com/citations?user=UK107woAAAAJ&hl=en&oi=ao"
  },
  {
    icon: <FaBirthdayCake className="text-[#EC4899]" />,
    title: "Birthday",
    content: "April 12",
    isBirthday: true
  }
];

const researchInterests = [
  { name: 'Artificial Intelligence', icon: <FaBrain className="text-[#6366F1]" />, color: 'text-[#6366F1]' },
  { name: 'Machine Learning', icon: <FaChartBar className="text-[#3B82F6]" />, color: 'text-[#3B82F6]' },
  { name: 'Deep Learning', icon: <SiTensorflow className="text-[#FF6F00]" />, color: 'text-[#FF6F00]' },
  { name: 'Natural Language Processing', icon: <FaBookReader className="text-[#10B981]" />, color: 'text-[#10B981]' },
  { name: 'Medical Imaging Analysis', icon: <FaLaptopMedical className="text-[#EF4444]" />, color: 'text-[#EF4444]' },
  { name: 'Federated Learning', icon: <FaNetworkWired className="text-[#8B5CF6]" />, color: 'text-[#8B5CF6]' },
  { name: 'Healthcare AI', icon: <FaLaptopMedical className="text-[#EC4899]" />, color: 'text-[#EC4899]' }
];

const skills = [
  { 
    icon: <FaBrain className="text-[#6366F1]" />, 
    name: "Machine Learning", 
    description: "Deep Learning, Neural Networks",
    color: 'text-[#6366F1]'
  },
  { 
    icon: <FaChartBar className="text-[#3B82F6]" />, 
    name: "Data Science", 
    description: "Data Analysis, Visualization",
    color: 'text-[#3B82F6]'
  },
  { 
    icon: <FaLaptopMedical className="text-[#10B981]" />, 
    name: "Healthcare AI", 
    description: "Medical Imaging, Diagnosis",
    color: 'text-[#10B981]'
  },
  { 
    icon: <FaNetworkWired className="text-[#8B5CF6]" />, 
    name: "Federated Learning", 
    description: "Distributed ML",
    color: 'text-[#8B5CF6]'
  }
];

const interests = [
  { 
    name: 'Research', 
    icon: <FaSearch className="text-[#3B82F6]" />, 
    description: 'AI & Healthcare Innovation',
    color: 'text-[#3B82F6]'
  },
  { 
    name: 'Teaching', 
    icon: <FaChalkboardTeacher className="text-[#10B981]" />, 
    description: 'Computer Science Education',
    color: 'text-[#10B981]'
  },
  { 
    name: 'Problem Solving', 
    icon: <FaPuzzlePiece className="text-[#8B5CF6]" />, 
    description: 'Algorithm Design',
    color: 'text-[#8B5CF6]'
  },
  { 
    name: 'Open Source', 
    icon: <FaCode className="text-[#EC4899]" />, 
    description: 'Contributing to Community',
    color: 'text-[#EC4899]'
  }
];

interface Technology {
  name: string;
  icon: JSX.Element;
  category: string;
  color: string;
  description: string;
}

interface Language {
  name: string;
  icon: JSX.Element;
  color: string;
  relatedIcons: {
    name: string;
    icon: JSX.Element;
  }[];
}

const technologies: Technology[] = [
  { 
    name: 'TensorFlow',
    icon: <SiTensorflow className="text-[#FF6F00]" />,
    category: 'ML/DL',
    color: 'text-orange-500',
    description: 'An open-source machine learning library'
  },
  { 
    name: 'PyTorch',
    icon: <SiPytorch className="text-[#EE4C2C]" />,
    category: 'ML/DL',
    color: 'text-red-500',
    description: 'An open-source machine learning library'
  },
  { 
    name: 'Scikit-learn',
    icon: <SiScikitlearn className="text-[#F7931E]" />,
    category: 'ML/DL',
    color: 'text-yellow-500',
    description: 'A machine learning library for Python'
  },
  { 
    name: 'React',
    icon: <SiReact className="text-[#61DAFB]" />,
    category: 'Web Dev',
    color: 'text-blue-500',
    description: 'A JavaScript library for building user interfaces'
  },
  { 
    name: 'Node.js',
    icon: <SiNodedotjs className="text-[#339933]" />,
    category: 'Web Dev',
    color: 'text-green-500',
    description: 'A JavaScript runtime environment'
  },
  { 
    name: 'MongoDB',
    icon: <SiMongodb className="text-[#47A248]" />,
    category: 'Database',
    color: 'text-green-500',
    description: 'A NoSQL database'
  },
  { 
    name: 'Git',
    icon: <SiGit className="text-[#F05032]" />,
    category: 'Tools',
    color: 'text-red-500',
    description: 'A version control system'
  }
];

const languages: Language[] = [
  {
    name: 'Python',
    icon: <SiPython className="text-[#3776AB]" />,
    color: "text-[#3776AB]",
    relatedIcons: [
      { name: 'TensorFlow', icon: <SiTensorflow className="text-[#FF6F00]" /> },
      { name: 'PyTorch', icon: <SiPytorch className="text-[#EE4C2C]" /> },
      { name: 'Scikit-learn', icon: <SiScikitlearn className="text-[#F7931E]" /> },
      { name: 'NumPy', icon: <SiNumpy className="text-[#013243]" /> },
      { name: 'Pandas', icon: <SiPandas className="text-[#150458]" /> }
    ]
  },
  {
    name: 'JavaScript',
    icon: <SiJavascript className="text-[#F7DF1E]" />,
    color: "text-[#F7DF1E]",
    relatedIcons: [
      { name: 'React', icon: <SiReact className="text-[#61DAFB]" /> },
      { name: 'Node.js', icon: <SiNodedotjs className="text-[#339933]" /> },
      { name: 'Express', icon: <SiExpress className="text-[#000000]" /> },
      { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" /> }
    ]
  },
  {
    name: 'Java',
    icon: <FaJava className="text-[#007396]" />,
    color: "text-[#007396]",
    relatedIcons: [
      { name: 'Spring', icon: <SiSpring className="text-[#6DB33F]" /> },
      { name: 'Hibernate', icon: <SiHibernate className="text-[#59666C]" /> },
      { name: 'Gradle', icon: <SiGradle className="text-[#02303A]" /> }
    ]
  },
  {
    name: 'C++',
    icon: <SiCplusplus className="text-[#00599C]" />,
    color: "text-[#00599C]",
    relatedIcons: [
      { name: 'CMake', icon: <SiCmake className="text-[#064F8C]" /> }
    ]
  }
];

const fellowships = [
  {
    title: "Islamic University of Science and Technology",
    description: "PhD Fellowship (2022-2025)",
    icon: <FaUniversity className="text-[#3B82F6]" />,
    color: 'text-[#3B82F6]'
  },
  {
    title: "University of Camerino, Italy",
    description: "PhD Admission 2023-24",
    icon: <FaGraduationCap className="text-[#8B5CF6]" />,
    color: 'text-[#8B5CF6]'
  }
];

const certifications = [
  {
    title: 'Grade A+ in National IT Aptitude test',
    organization: 'NIIT Srinagar',
    icon: <FaAward />,
  },
  {
    title: 'E-waste Management Workshop',
    organization: 'NIELIT Srinagar',
    icon: <FaAward />,
  },
  {
    title: 'Data Analysis using Deep Learning',
    organization: 'AICTE-ISTE',
    icon: <FaAward />,
  },
  {
    title: 'Accelerated Data Science',
    organization: 'IIT Kharagpur and NVIDIA',
    icon: <FaAward />,
  },
];

const FlowerPetal = ({ color, size }: { color: string, size: number }) => {
  const randomX = Math.random() * window.innerWidth;
  const randomY = Math.random() * window.innerHeight;
  const randomRotate = Math.random() * 360;
  const randomDelay = Math.random() * 0.5;

  return (
    <motion.div
      initial={{ 
        opacity: 0,
        scale: 0,
        x: randomX,
        y: -20,
        rotate: 0
      }}
      animate={{
        opacity: [0, 1, 1, 0],
        scale: [0, 1, 1, 0.8],
        x: [randomX, randomX + (Math.random() * 100 - 50)],
        y: [0, window.innerHeight + 50],
        rotate: [0, randomRotate + 360]
      }}
      transition={{
        duration: 4 + Math.random() * 2,
        ease: "easeInOut",
        delay: randomDelay,
      }}
      style={{
        position: 'fixed',
        width: size,
        height: size,
        borderRadius: '50%',
        background: `radial-gradient(circle at 30% 30%, ${color}, transparent)`,
        pointerEvents: 'none',
        zIndex: 50
      }}
    />
  );
};

const FlowerSparkle = ({ color, size }: { color: string, size: number }) => {
  return (
    <motion.div
      style={{
        position: 'fixed',
        width: size,
        height: size,
        pointerEvents: 'none',
        zIndex: 50
      }}
    >
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            transform: `rotate(${i * 72}deg)`,
          }}
        >
          <motion.div
            style={{
              width: '40%',
              height: '100%',
              background: `radial-gradient(circle at 50% 20%, ${color}, transparent)`,
              borderRadius: '50%',
              transformOrigin: '50% 100%',
            }}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

const GlobalFlowerContainer = ({ isHovered }: { isHovered: boolean }) => {
  const [flowers, setFlowers] = useState<number[]>([]);
  
  useEffect(() => {
    if (isHovered) {
      const interval = setInterval(() => {
        setFlowers(prev => [...prev, Date.now()]);
      }, 200);

      return () => {
        clearInterval(interval);
        setFlowers([]);
      };
    }
  }, [isHovered]);

  return (
    <AnimatePresence>
      {isHovered && flowers.map(key => (
        <React.Fragment key={key}>
          <FlowerPetal 
            color="#FFB7C5" 
            size={Math.random() * 15 + 10} 
          />
          <FlowerSparkle 
            color="#FFC0CB" 
            size={Math.random() * 20 + 15} 
          />
        </React.Fragment>
      ))}
    </AnimatePresence>
  );
};

const BirthdayCard = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if today is April 12
    const today = new Date();
    const isApril12 = today.getMonth() === 3 && today.getDate() === 12;
    setIsVisible(isApril12);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl max-w-sm">
              <button
                onClick={() => setIsVisible(false)}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex-shrink-0">
                  <FaBirthdayCake className="text-3xl text-pink-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Birthday Celebration! 🎉</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Today is my birthday!</p>
                </div>
              </div>

              <div className="flex justify-center space-x-2 mb-4">
                <GiPartyPopper className="text-2xl text-yellow-500 animate-bounce" />
                <GiPartyFlags className="text-2xl text-blue-500 animate-bounce delay-100" />
                <GiBalloons className="text-2xl text-red-500 animate-bounce delay-200" />
              </div>

              <p className="text-center text-gray-600 dark:text-gray-300 mb-4">
                Thank you for visiting my portfolio on this special day! 🎂
              </p>

              <div className="flex justify-center">
                <button
                  onClick={() => setIsVisible(false)}
                  className="px-4 py-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white rounded-lg hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 transition-colors duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>

          {/* Celebration Effects */}
          <div className="fixed inset-0 pointer-events-none">
            {/* Balloons */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={`balloon-${i}`}
                className="absolute"
                initial={{ 
                  x: Math.random() * window.innerWidth,
                  y: window.innerHeight + 100,
                  scale: 0
                }}
                animate={{ 
                  y: -200,
                  scale: [0, 1, 1, 0],
                  x: `calc(${Math.random() * 100}vw + ${Math.random() * 200 - 100}px)`,
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              >
                <GiBalloons className={`text-4xl ${
                  ['text-red-500', 'text-blue-500', 'text-yellow-500', 'text-green-500', 'text-purple-500'][
                    Math.floor(Math.random() * 5)
                  ]
                }`} />
              </motion.div>
            ))}

            {/* Fireworks */}
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={`firework-${i}`}
                className="absolute"
                initial={{ 
                  x: Math.random() * window.innerWidth,
                  y: window.innerHeight,
                  scale: 0
                }}
                animate={{ 
                  y: window.innerHeight * 0.3,
                  scale: [0, 1, 1, 0],
                  opacity: [1, 1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.5
                }}
              >
                <div className="relative">
                  {[...Array(12)].map((_, j) => (
                    <motion.div
                      key={`spark-${j}`}
                      className="absolute w-1 h-1 bg-yellow-400"
                      animate={{
                        x: Math.cos(j * 30 * (Math.PI / 180)) * 50,
                        y: Math.sin(j * 30 * (Math.PI / 180)) * 50,
                        opacity: [1, 0],
                        scale: [1, 0]
                      }}
                      transition={{
                        duration: 1,
                        ease: "easeOut"
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Confetti */}
            {[...Array(100)].map((_, i) => (
              <motion.div
                key={`confetti-${i}`}
                className="absolute w-2 h-2"
                style={{
                  background: `hsl(${Math.random() * 360}, 100%, 50%)`
                }}
                initial={{ 
                  x: window.innerWidth / 2,
                  y: -20,
                  scale: 0
                }}
                animate={{ 
                  x: window.innerWidth / 2 + (Math.random() - 0.5) * 1000,
                  y: window.innerHeight + 20,
                  rotate: Math.random() * 360,
                  scale: [0, 1, 1, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: Math.random() * 4
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const BirthdayHoverEffects = ({ isHovered }: { isHovered: boolean }) => {
  return (
    <AnimatePresence>
      {isHovered && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
          {/* Floating Balloons */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`balloon-${i}`}
              className="absolute"
              initial={{ 
                x: window.innerWidth / 2,
                y: window.innerHeight + 100,
                opacity: 0,
                scale: 0
              }}
              animate={{ 
                x: window.innerWidth / 2 + (Math.random() - 0.5) * window.innerWidth,
                y: -100,
                opacity: [0, 1, 1, 0],
                scale: [0, 1, 1, 0],
                rotate: Math.random() * 360
              }}
              transition={{
                duration: 3,
                delay: i * 0.1,
                ease: "easeOut"
              }}
            >
              <GiBalloons className={`text-4xl ${
                ['text-red-500', 'text-blue-500', 'text-yellow-500', 'text-green-500', 'text-purple-500'][
                  Math.floor(Math.random() * 5)
                ]
              }`} />
            </motion.div>
          ))}

          {/* Party Poppers */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`popper-${i}`}
              className="absolute"
              initial={{ 
                x: window.innerWidth / 2,
                y: window.innerHeight / 2,
                scale: 0
              }}
              animate={{ 
                scale: [0, 1, 1, 0],
                opacity: [0, 1, 1, 0]
              }}
              transition={{
                duration: 2,
                delay: i * 0.2
              }}
            >
              <div className="relative">
                {[...Array(12)].map((_, j) => (
                  <motion.div
                    key={`confetti-${j}`}
                    className="absolute h-2 w-2 rounded-full"
                    style={{
                      background: `hsl(${Math.random() * 360}, 100%, 50%)`
                    }}
                    initial={{ scale: 0 }}
                    animate={{
                      scale: [0, 1, 0],
                      x: Math.cos(j * 30 * (Math.PI / 180)) * 100,
                      y: Math.sin(j * 30 * (Math.PI / 180)) * 100,
                      opacity: [1, 1, 0]
                    }}
                    transition={{
                      duration: 1,
                      ease: "easeOut"
                    }}
                  />
                ))}
                <GiPartyPopper className="text-3xl text-yellow-500" />
              </div>
            </motion.div>
          ))}

          {/* Firework Stars */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`star-${i}`}
              className="absolute w-2 h-2 bg-yellow-300 rounded-full"
              style={{
                boxShadow: '0 0 4px 1px rgba(255, 255, 0, 0.5)'
              }}
              initial={{ 
                x: window.innerWidth / 2,
                y: window.innerHeight / 2,
                scale: 0
              }}
              animate={{ 
                x: window.innerWidth / 2 + (Math.random() - 0.5) * window.innerWidth,
                y: window.innerHeight / 2 + (Math.random() - 0.5) * window.innerHeight,
                scale: [0, 1, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.1,
                ease: "easeOut"
              }}
            />
          ))}

          {/* Sparkles */}
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={`sparkle-${i}`}
              className="absolute w-1 h-1"
              style={{
                background: 'white',
                boxShadow: '0 0 4px 1px rgba(255, 255, 255, 0.5)'
              }}
              initial={{ 
                x: window.innerWidth / 2,
                y: window.innerHeight / 2,
                scale: 0
              }}
              animate={{ 
                x: window.innerWidth / 2 + (Math.random() - 0.5) * 400,
                y: window.innerHeight / 2 + (Math.random() - 0.5) * 400,
                scale: [0, 1, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 1,
                delay: i * 0.05,
                ease: "easeOut"
              }}
            />
          ))}
        </div>
      )}
    </AnimatePresence>
  );
};

const BirthdayInfo = ({ info }: { info: any }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => info.isBirthday && setIsHovered(true)}
      onMouseLeave={() => info.isBirthday && setIsHovered(false)}
    >
      <div className="flex items-center space-x-4 p-3 rounded-xl bg-cream-50 dark:bg-gray-700 group hover:bg-gradient-to-r hover:from-pink-500/10 hover:to-indigo-500/10 transition-colors duration-300">
        <span className="text-2xl text-gray-600 dark:text-gray-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:via-purple-500 group-hover:to-indigo-500 group-hover:bg-clip-text">
          {info.icon}
        </span>
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">{info.title}</p>
          {info.link ? (
            <a 
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              {info.content}
            </a>
          ) : (
            <p className="font-medium text-gray-900 dark:text-white">{info.content}</p>
          )}
        </div>
      </div>

      {info.isBirthday && <BirthdayHoverEffects isHovered={isHovered} />}
    </div>
  );
};

const FireworkEffect = () => {
  const colors = [
    'hsl(350, 80%, 60%)', // Pink
    'hsl(270, 80%, 60%)', // Purple
    'hsl(180, 80%, 60%)', // Cyan
    'hsl(45, 80%, 60%)',  // Gold
    'hsl(120, 80%, 60%)', // Green
  ];

  return (
    <div className="relative">
      {/* Main burst */}
      {[...Array(24)].map((_, i) => (
        <motion.div
          key={`main-${i}`}
          className="absolute w-2 h-2"
          style={{
            background: colors[Math.floor(Math.random() * colors.length)],
            borderRadius: '50%',
            boxShadow: '0 0 8px 2px rgba(255, 255, 255, 0.5)'
          }}
          initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
          animate={{ 
            x: Math.cos(i * 15 * (Math.PI / 180)) * 150,
            y: Math.sin(i * 15 * (Math.PI / 180)) * 150,
            scale: [0, 1.5, 0],
            opacity: [1, 1, 0]
          }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
            repeat: Infinity
          }}
        />
      ))}

      {/* Secondary sparkles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute w-1 h-1"
          style={{
            background: 'white',
            borderRadius: '50%',
            boxShadow: '0 0 4px 2px rgba(255,255,255,0.5)'
          }}
          initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
          animate={{ 
            x: Math.cos(i * 30 * (Math.PI / 180)) * 80,
            y: Math.sin(i * 30 * (Math.PI / 180)) * 80,
            scale: [0, 1, 0],
            opacity: [1, 1, 0]
          }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: "easeOut",
            repeat: Infinity
          }}
        />
      ))}

      {/* Trailing particles */}
      {[...Array(36)].map((_, i) => (
        <motion.div
          key={`trail-${i}`}
          className="absolute w-1 h-1"
          style={{
            background: colors[Math.floor(Math.random() * colors.length)],
            borderRadius: '50%',
          }}
          initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
          animate={{ 
            x: Math.cos(i * 10 * (Math.PI / 180)) * (100 + Math.random() * 50),
            y: Math.sin(i * 10 * (Math.PI / 180)) * (100 + Math.random() * 50),
            scale: [0, 0.5, 0],
            opacity: [1, 0.5, 0]
          }}
          transition={{
            duration: 2,
            delay: Math.random() * 0.5,
            ease: "easeOut",
            repeat: Infinity
          }}
        />
      ))}
    </div>
  );
};

const Star = ({ size = 'sm', className = '' }: { size?: 'sm' | 'md' | 'lg', className?: string }) => {
  const sizeClasses = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4'
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg viewBox="0 0 51 48" fill="currentColor">
        <path d="M25.5 0L31.5 16.5H49.5L35 27L40.5 44L25.5 34.5L10.5 44L16 27L1.5 16.5H19.5L25.5 0Z" />
      </svg>
    </div>
  );
};

type StarSize = 'xs' | 'sm' | 'md' | 'lg';

interface StarConfig {
  angle: number;
  distance: number;
  color: string;
  size: 'sm' | 'md' | 'lg';
}

const StarDecoration = () => {
  const stars = React.useMemo<StarConfig[]>(() => {
    return [...Array(12)].map(() => ({
      angle: Math.random() * 360,
      distance: 48 + Math.random() * 4,
      color: [
        'text-blue-200',
        'text-yellow-200',
        'text-orange-300',
        'text-red-300',
        'text-indigo-200',
        'text-white',
        'text-purple-200',
        'text-pink-200',
      ][Math.floor(Math.random() * 8)],
      size: Math.random() > 0.7 ? 'md' : 'sm'
    }));
  }, []);

  return (
    <div className="absolute inset-0">
      {stars.map((star, index) => {
        const angleInRadians = (star.angle * Math.PI) / 180;
        const x = 50 + star.distance * Math.cos(angleInRadians);
        const y = 50 + star.distance * Math.sin(angleInRadians);

        return (
          <div
            key={index}
            className={`absolute ${star.color}`}
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <Star size={star.size} />
          </div>
        );
      })}
    </div>
  );
};

const PhotoContainer = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isRolesHovered, setIsRolesHovered] = useState(false);
  const controls = useAnimation();

  const roles = [
    { text: "AI Researcher", color: "from-pink-500 to-purple-500", rotation: 0 },
    { text: "PhD Scholar", color: "from-purple-500 to-indigo-500", rotation: 90 },
    { text: "ML Developer", color: "from-indigo-500 to-purple-500", rotation: 180 },
    { text: "Researcher", color: "from-purple-500 to-pink-500", rotation: 270 }
  ];

  return (
    <div className="relative w-[500px] h-[500px] mx-auto my-12">
      {/* Birthday Card */}
      <BirthdayCard />

      {/* Background stars for photo section */}
      <SectionStars density="medium" />
      
      {/* Outer Circle with Stars */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 rounded-full border-4 border-purple-300/30 bg-gradient-to-r from-pink-100/10 to-purple-100/10 dark:from-pink-900/10 dark:to-purple-900/10"></div>
        
        {/* Star Decorations */}
        <StarDecoration />

        {/* Glowing background stars */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`glow-${i}`}
              className="absolute"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            >
              <motion.div
                className="w-2 h-2 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)',
                  boxShadow: '0 0 10px rgba(255,255,255,0.5)'
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Roles (static by default, rotate on hover) */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: isRolesHovered ? 360 : 0 }}
          transition={{ duration: 20, ease: "linear", repeat: isRolesHovered ? Infinity : 0 }}
          onHoverStart={() => setIsRolesHovered(true)}
          onHoverEnd={() => setIsRolesHovered(false)}
        >
          {roles.map((role, index) => (
            <motion.div
              key={index}
              className="absolute left-1/2 top-1/2"
              style={{
                transform: `rotate(${role.rotation}deg) translateY(-240px)`,
                width: '140px',
                marginLeft: '-70px',
                marginTop: '-28px',
              }}
            >
              <motion.div
                className="bg-white dark:bg-gray-800 px-4 py-2 rounded-xl shadow-lg
                         hover:shadow-2xl transition-all duration-300 cursor-pointer
                         border border-purple-200 dark:border-purple-800"
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                <div className={`bg-gradient-to-r ${role.color} bg-clip-text text-transparent font-bold text-base text-center whitespace-nowrap`}>
                  {role.text}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Center Photo */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        animate={controls}
      >
        {/* Gradient Border Ring */}
        <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full blur-sm animate-gradient-xy opacity-75"></div>
        
        {/* Photo Container */}
        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
          <motion.img
            src={profilePhoto}
            alt="Mubashir Farooq"
            className="w-full h-full object-cover"
            style={{ 
              objectPosition: '50% 30%'
            }}
            animate={controls}
          />
          
          {/* Hover Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute bottom-4 left-0 right-0">
              <h3 className="text-lg font-bold text-white text-center">Mubashir Farooq</h3>
            </div>
          </motion.div>
        </div>

        {/* Party Popper Effects */}
        {isHovered && (
          <div className="fixed inset-0 pointer-events-none z-50">
            {[...Array(20)].map((_, i) => {
              const randomColor = "text-pink-500";
              return (
                <motion.div
                  key={i}
                  className="absolute"
                  initial={{ 
                    x: window.innerWidth / 2,
                    y: window.innerHeight / 2,
                    opacity: 0,
                    scale: 0
                  }}
                  animate={{ 
                    x: window.innerWidth / 2 + (Math.random() - 0.5) * 1000,
                    y: window.innerHeight / 2 + (Math.random() - 0.5) * 1000,
                    opacity: [0, 1, 1, 0],
                    scale: [0, 1.5, 0],
                    rotate: Math.random() * 360
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.1,
                    repeat: Infinity
                  }}
                >
                  <GiPartyPopper className={`text-4xl ${randomColor}`} />
                </motion.div>
              );
            })}
          </div>
        )}
        
        {/* ML/AI Themed Sprinkles with higher z-index */}
        <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 1000 }}>
          <MLSprinkles isVisible={isHovered} />
        </div>
      </motion.div>
    </div>
  );
};

interface MLCategories {
  core: string[];
  healthcare: string[];
  nlp: string[];
  privacy: string[];
}

interface MLIcon {
  Icon: React.ElementType;
  color: string;
  label: string;
  category: keyof MLCategories;
}

const MLSprinkles = ({ isVisible }: { isVisible: boolean }) => {
  const mlCategories: MLCategories = {
    core: [
      "Neural Networks", "Deep Learning", "Federated Learning",
      "Transfer Learning", "Reinforcement Learning", "AutoML",
      "Machine Learning", "Artificial Intelligence", "Model Training"
    ],
    healthcare: [
      "Healthcare AI", "Medical Imaging", "Disease Prediction",
      "Patient Data Privacy", "Clinical NLP", "Drug Discovery",
      "Medical Diagnosis", "Health Analytics", "Biomedical AI"
    ],
    nlp: [
      "Natural Language Processing", "BERT", "GPT", "Text Mining",
      "Sentiment Analysis", "Language Models", "Text Classification",
      "Named Entity Recognition", "Machine Translation"
    ],
    privacy: [
      "Differential Privacy", "Secure ML", "AI Ethics",
      "Distributed Learning", "Edge Computing", "Blockchain in AI",
      "Privacy-Preserving ML", "Secure Aggregation"
    ]
  };

  const mlIcons: MLIcon[] = [
    { Icon: SiTensorflow, color: "text-[#FF6F00]", label: "TensorFlow", category: "core" },
    { Icon: SiPytorch, color: "text-[#EE4C2C]", label: "PyTorch", category: "core" },
    { Icon: SiScikitlearn, color: "text-[#F7931E]", label: "Scikit-learn", category: "core" },
    { Icon: SiOpenai, color: "text-[#00A67E]", label: "OpenAI", category: "nlp" },
    { Icon: SiHuggingface, color: "text-[#FFD21E]", label: "HuggingFace", category: "nlp" },
    { Icon: BiBrain, color: "text-purple-500", label: "Neural Networks", category: "core" },
    { Icon: BiNetworkChart, color: "text-blue-500", label: "Deep Learning", category: "core" },
    { Icon: GiHealthNormal, color: "text-green-500", label: "Healthcare", category: "healthcare" },
    { Icon: MdOutlineHealthAndSafety, color: "text-emerald-500", label: "Medical AI", category: "healthcare" },
    { Icon: TbBrain, color: "text-rose-500", label: "AI Research", category: "core" }
  ];

  const getRandomTermFromCategory = () => {
    const categories = (Object.keys(mlCategories) as Array<keyof MLCategories>);
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    const terms = mlCategories[randomCategory];
    return {
      term: terms[Math.floor(Math.random() * terms.length)],
      category: randomCategory
    };
  };

  const getCategoryColor = (category: keyof MLCategories) => {
    switch(category) {
      case 'core': return 'from-purple-500 to-indigo-500';
      case 'healthcare': return 'from-green-500 to-emerald-500';
      case 'nlp': return 'from-blue-500 to-cyan-500';
      case 'privacy': return 'from-rose-500 to-pink-500';
      default: return 'from-pink-500 to-purple-500';
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 pointer-events-none z-[100]">
          {/* ML Terms */}
          {[...Array(20)].map((_, i) => {
            const { term, category } = getRandomTermFromCategory();
            const gradientColor = getCategoryColor(category);
            return (
              <motion.div
                key={`term-${i}`}
                className="fixed"
                initial={{ 
                  x: window.innerWidth / 2,
                  y: window.innerHeight / 2,
                  scale: 0,
                  opacity: 0
                }}
                animate={{
                  x: window.innerWidth / 2 + (Math.random() - 0.5) * 1000,
                  y: window.innerHeight / 2 + (Math.random() - 0.5) * 800,
                  scale: [0, 1.2, 1],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.2,
                  repeat: Infinity
                }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/5 dark:from-gray-800/20 dark:to-gray-800/5 blur-sm rounded-lg"></div>
                  <div className="bg-white/90 dark:bg-gray-800/90 px-4 py-2 rounded-lg shadow-lg border border-purple-200/50">
                    <span className={`text-sm font-medium bg-gradient-to-r ${gradientColor} bg-clip-text text-transparent`}>
                      {term}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* ML Icons */}
          {[...Array(12)].map((_, i) => {
            const icon = mlIcons[Math.floor(Math.random() * mlIcons.length)];
            return (
              <motion.div
                key={`icon-${i}`}
                className="fixed"
                initial={{ 
                  x: window.innerWidth / 2,
                  y: window.innerHeight / 2,
                  scale: 0,
                  opacity: 0
                }}
                animate={{
                  x: window.innerWidth / 2 + (Math.random() - 0.5) * 1200,
                  y: window.innerHeight / 2 + (Math.random() - 0.5) * 1000,
                  scale: [0, 1.5, 1],
                  opacity: [0, 1, 0],
                  rotate: Math.random() * 360
                }}
                transition={{
                  duration: 4,
                  delay: i * 0.3,
                  repeat: Infinity
                }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-white/10 dark:bg-gray-800/10 blur-lg rounded-full"></div>
                  <div className="bg-white/90 dark:bg-gray-800/90 p-4 rounded-full shadow-lg">
                    <icon.Icon className={`text-4xl ${icon.color}`} />
                  </div>
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <span className="text-xs font-medium text-gray-600 dark:text-gray-300">
                      {icon.label}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Neural Network Connections */}
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={`connection-${i}`}
              className="fixed"
              initial={{ 
                x: window.innerWidth / 2,
                y: window.innerHeight / 2,
                scale: 0,
                opacity: 0
              }}
              animate={{
                x: window.innerWidth / 2 + (Math.random() - 0.5) * 800,
                y: window.innerHeight / 2 + (Math.random() - 0.5) * 800,
                scale: [0, 1, 0],
                opacity: [0, 0.4, 0]
              }}
              transition={{
                duration: 2.5,
                delay: i * 0.1,
                repeat: Infinity
              }}
            >
              <div className="w-px h-40 bg-gradient-to-b from-purple-500 via-pink-500 to-transparent transform origin-top"></div>
            </motion.div>
          ))}
        </div>
      )}
    </AnimatePresence>
  );
};

const TechCard = ({ tech, index }: { tech: Technology, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="p-4 rounded-xl bg-cream-50 dark:bg-gray-700 hover:bg-gradient-to-r hover:from-pink-500/10 hover:to-indigo-500/10 transition-colors duration-300 group"
    >
      <div className="flex items-center space-x-3">
        <div className={`text-2xl ${tech.color} group-hover:scale-110 transition-transform duration-300`}>
          {tech.icon}
        </div>
        <span className="font-medium text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:via-purple-500 group-hover:to-indigo-500 group-hover:bg-clip-text transition-colors duration-300">
          {tech.name}
        </span>
      </div>
      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        {tech.description}
      </p>
    </motion.div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-cream-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background stars */}
      <HeadlineStars />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <StarredHeading 
          variant="h1" 
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent"
        >
          About Me
        </StarredHeading>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Profile Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Profile Photo Card */}
            <PhotoContainer />

            {/* Profile Information Card */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 space-y-6">
                <h3 className="text-xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                  Profile Information
                </h3>
                <div className="flex flex-col space-y-4">
                  {profileInfo.map((info, index) => (
                    <BirthdayInfo key={index} info={info} />
                  ))}
                </div>
              </div>
            </div>

            {/* Languages Card */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 space-y-6">
                <h3 className="text-xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                  Programming Languages & Tools
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {languages.map((language, index) => (
                    <div key={index} className="flex flex-col items-center space-y-4 p-4 rounded-xl bg-cream-50 dark:bg-gray-700 hover:bg-gradient-to-r hover:from-pink-500/10 hover:to-indigo-500/10 transition-all duration-300">
                      <div className={`text-4xl ${language.color}`}>{language.icon}</div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">{language.name}</h4>
                      <div className="flex flex-wrap gap-4 justify-center">
                        {language.relatedIcons.map((icon, iconIndex) => (
                          <div key={iconIndex} className="group/icon relative">
                            <div className="text-2xl hover:scale-110 transition-transform duration-200">
                              {icon.icon}
                            </div>
                            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover/icon:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                              {icon.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Technologies Card */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 space-y-6">
                <h3 className="text-xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                  Technologies & Tools
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {technologies.map((tech, index) => (
                    <TechCard key={index} tech={tech} index={index} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Core Competencies */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg space-y-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                Core Competencies
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex flex-col items-center space-y-2">
                    <div className="text-3xl">{skill.icon}</div>
                    <h4 className="text-lg font-bold">{skill.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Research Interests */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent mb-6">
                Research Interests
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {researchInterests.map((interest, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 p-4 rounded-xl bg-cream-50 dark:bg-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className={`text-2xl ${interest.color}`}>{interest.icon}</div>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {interest.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Personal Interests */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent mb-6">
                Personal Interests
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col space-y-2 p-4 rounded-xl bg-cream-50 dark:bg-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-center space-x-3">
                      <span className={`text-2xl ${interest.color}`}>{interest.icon}</span>
                      <span className="font-medium text-gray-900 dark:text-white">{interest.name}</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 ml-9">{interest.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Fellowships */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent mb-6">
                Fellowships Won
              </h3>
              <div className="grid gap-4">
                {fellowships.map((fellowship, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 p-4 rounded-xl bg-cream-50 dark:bg-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <span className={`text-3xl group-hover:scale-110 transition-transform duration-300 ${fellowship.color}`}>
                      {fellowship.icon}
                    </span>
                    <div className="flex-1">
                      <h4 className="font-medium text-lg text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:via-purple-500 group-hover:to-indigo-500 group-hover:bg-clip-text transition-colors duration-300">
                        {fellowship.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {fellowship.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Section background stars */}
      <SectionStars density="low" />
    </section>
  );
};

export default About;
