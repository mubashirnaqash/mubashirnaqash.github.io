import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaBriefcase, 
  FaGraduationCap, 
  FaMedal, 
  FaHeart,
  FaCamera,
  FaChess,
  FaMusic,
  FaCode,
  FaLaptopCode,
  FaChalkboardTeacher,
  FaAward,
  FaBook,
  FaBuilding
} from 'react-icons/fa';
import { BsCalendarEvent, BsGeoAlt } from 'react-icons/bs';
import { SiGooglescholar } from 'react-icons/si';
import { GiTeacher, GiCricketBat, GiMountainClimbing } from 'react-icons/gi';
import { IoFootball } from 'react-icons/io5';

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      title: 'IT Expert/ Project Engineer',
      company: 'Feedback Infra Pvt. Ltd.',
      period: '07/2021 - 03/2022, 02/2019 - 10/2019',
      location: 'Srinagar',
      icon: <FaLaptopCode className="text-3xl text-blue-500" />,
      description: [
        'Worked in Centrally sponsored Project RAPDRP-B',
        'IT Maintenance and Support work',
        'Quality Surveying and Monitoring of 11kV works',
        'MIS Tool Monitoring, Daily, Weekly and Monthly Progress Report',
        'Data collection and Management',
      ],
    },
    {
      type: 'work',
      title: 'Assistant Professor',
      company: 'Lovely Professional University',
      period: '01/2021 - 05/2021',
      location: 'Jalandhar, India',
      icon: <GiTeacher className="text-3xl text-green-500" />,
      description: [
        'Teaching and Administrative work',
      ],
    },
    {
      type: 'work',
      title: 'Subject Matter Expert (Freelancer)',
      company: 'Trivium Education Services',
      period: '12/2020 - 06/2021',
      location: 'Delhi, India',
      icon: <FaChalkboardTeacher className="text-3xl text-purple-500" />,
      description: [
        'Solving Questions of Computer Science Engineering Subject',
      ],
    },
  ];

  const education = [
    {
      type: 'education',
      degree: 'Master of Technology',
      institution: 'Central University of Kashmir',
      period: '10/2016 - 08/2018',
      location: 'India',
      field: 'Information Technology',
      icon: <FaGraduationCap className="text-3xl text-indigo-500" />,
    },
    {
      type: 'education',
      degree: 'Bachelor of Technology',
      institution: 'University of Kashmir',
      period: '10/2011 - 12/2015',
      location: 'India',
      field: 'Computer Science and Engineering',
      icon: <FaCode className="text-3xl text-pink-500" />,
    },
  ];

  const certifications = [
    {
      name: 'Grade A+ in National IT Aptitude test',
      issuer: 'NIIT Srinagar',
      icon: <FaAward className="text-3xl text-yellow-500" />,
    },
    {
      name: 'CCNA',
      issuer: 'USIC University of Kashmir Srinagar',
      icon: <FaMedal className="text-3xl text-red-500" />,
    },
    {
      name: 'Core Java',
      issuer: 'IAC Software Solutions Srinagar',
      icon: <FaCode className="text-3xl text-orange-500" />,
    },
  ];

  const publications = [
    {
      title: 'Summarizing Sentiment-Analyzed Reviews',
      journal: 'Journal of Advancements in Robotics',
      year: '2018',
      authors: 'Farooq, M., Khan, A. A.',
      icon: <SiGooglescholar className="text-3xl text-blue-600" />,
    },
    {
      title: 'Sentiment Analysis and Text Summarization Review',
      journal: 'Journal of Artificial Intelligence Research & Advances',
      year: '2018',
      authors: 'Farooq, M., Khan, A. A.',
      icon: <FaBook className="text-3xl text-green-600" />,
    },
    {
      title: 'e-Vaccine: An Immunization app',
      journal: 'ICIEM 2021',
      year: '2021',
      authors: 'Hasan, S., Farooq, M., Marwah, N., Andrabi, S. A. A., Kumar, H.',
      icon: <FaBook className="text-3xl text-purple-600" />,
    },
  ];

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
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* Work Experience */}
          <div>
            <div className="text-center mb-12">
              <h2 className="heading">Professional Journey</h2>
              <p className="subheading">My professional experience and achievements</p>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-8 md:pl-0"
                >
                  <div className="md:grid md:grid-cols-12 md:gap-4">
                    <div className="hidden md:block md:col-span-3 relative">
                      <div className="sticky top-0 pt-2 flex items-center space-x-2">
                        {exp.icon}
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400 flex items-center">
                          <BsCalendarEvent className="mr-1" />
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    <div className="md:col-span-9 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                      <div className="flex flex-col space-y-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {exp.title}
                          </h3>
                          <p className="text-primary-600 dark:text-primary-400">
                            {exp.company}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                            <BsGeoAlt className="mr-1" />
                            {exp.location}
                          </p>
                        </div>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                          {exp.description.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <span className="mr-2">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-2xl font-bold text-center mb-8 flex items-center justify-center text-gray-900 dark:text-white">
              <FaGraduationCap className="mr-2 text-primary-500" />
              Education
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    {edu.icon}
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {edu.degree}
                        </h3>
                        <p className="text-primary-600 dark:text-primary-400">
                          {edu.institution}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300">
                          {edu.field}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center mt-2">
                          <BsCalendarEvent className="mr-1" />
                          {edu.period}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Publications */}
          <div>
            <h2 className="text-2xl font-bold text-center mb-8 flex items-center justify-center text-gray-900 dark:text-white">
              <FaBook className="mr-2 text-primary-500" />
              Selected Publications
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {publications.map((pub, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    {pub.icon}
                    <div className="space-y-2">
                      <h3 className="font-bold text-gray-900 dark:text-white">
                        {pub.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {pub.authors}
                      </p>
                      <p className="text-sm text-primary-600 dark:text-primary-400">
                        {pub.journal} ({pub.year})
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-2xl font-bold text-center mb-8 flex items-center justify-center text-gray-900 dark:text-white">
              <FaMedal className="mr-2 text-primary-500" />
              Certifications
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    {cert.icon}
                    <div className="space-y-2">
                      <h3 className="font-bold text-gray-900 dark:text-white">
                        {cert.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Hobbies & Interests */}
          <div className="mt-16">
            <div className="flex items-center mb-8">
              <FaHeart className="text-2xl text-red-500 mr-2" />
              <h3 className="text-xl font-semibold">Hobbies & Interests</h3>
            </div>
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
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                        {hobby.name}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-center text-sm">
                        {hobby.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
