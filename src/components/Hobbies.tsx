import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaBook, FaGamepad, FaHiking, FaCamera, FaChess, FaMusic, FaPencilAlt } from 'react-icons/fa';
import { GiCricketBat, GiMountainClimbing } from 'react-icons/gi';
import { IoFootball } from 'react-icons/io5';

const Hobbies = () => {
  const hobbies = [
    {
      icon: <FaCode className="text-4xl text-blue-500" />,
      name: 'Coding',
      description: 'Building innovative solutions'
    },
    {
      icon: <GiCricketBat className="text-4xl text-green-500" />,
      name: 'Cricket',
      description: 'Playing and watching matches'
    },
    {
      icon: <IoFootball className="text-4xl text-orange-500" />,
      name: 'Football',
      description: 'Weekend matches with friends'
    },
    {
      icon: <FaHiking className="text-4xl text-purple-500" />,
      name: 'Hiking',
      description: 'Exploring nature trails'
    },
    {
      icon: <FaCamera className="text-4xl text-pink-500" />,
      name: 'Photography',
      description: 'Capturing beautiful moments'
    },
    {
      icon: <FaChess className="text-4xl text-gray-700" />,
      name: 'Chess',
      description: 'Strategic thinking'
    },
    {
      icon: <GiMountainClimbing className="text-4xl text-indigo-500" />,
      name: 'Trekking',
      description: 'Adventure in mountains'
    },
    {
      icon: <FaMusic className="text-4xl text-red-500" />,
      name: 'Music',
      description: 'Listening and enjoying'
    }
  ];

  return (
    <div className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold font-playfair bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Hobbies & Interests
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 font-playfair">
            What I love to do in my free time
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
              <div className="relative bg-white dark:bg-gray-800 p-6 rounded-lg">
                <div className="flex flex-col items-center space-y-4">
                  {hobby.icon}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white font-playfair">
                    {hobby.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center font-playfair">
                    {hobby.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
