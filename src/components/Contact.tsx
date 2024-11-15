import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaFacebook, FaTwitter, FaPhone, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { StarredHeading } from './HeadingStar';

const Contact = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      icon: <FaFacebook className="text-[#1877F2] text-5xl" />,
      url: 'https://facebook.com/Mubashir.naqash'
    },
    {
      name: 'Twitter',
      icon: <FaTwitter className="text-[#1DA1F2] text-5xl" />,
      url: 'https://x.com/MubashirNaqash'
    },
    {
      name: 'Instagram',
      icon: <FaInstagram className="text-[#E4405F] text-5xl" />,
      url: 'https://instagram.com/callmemubashirnaqash'
    },
    {
      name: 'GitHub',
      icon: <FaGithub className="text-gray-800 dark:text-white text-5xl" />,
      url: 'https://github.com/MubashirFarooq'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="text-[#0A66C2] text-5xl" />,
      url: 'https://linkedin.com/in/mubashir-f-3a160b171'
    },
    {
      name: 'Email',
      icon: <FaEnvelope className="text-red-500 text-5xl" />,
      url: 'mailto:mubashirnaqash@gmail.com'
    },
    {
      name: 'Phone',
      icon: <FaPhone className="text-green-500 text-5xl" />,
      content: '+91-7006081836, +91-9797906050',
      blurred: true
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <StarredHeading 
        variant="h2" 
        className="text-4xl md:text-5xl font-bold text-center mb-16 font-poppins bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent"
      >
        Get in Touch
      </StarredHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative group"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
          <div className="relative bg-white dark:bg-gray-800 rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-6 font-poppins bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Send a Message
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2 font-inter">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent font-inter"
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2 font-inter">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent font-inter"
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2 font-inter">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent font-inter"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white rounded-lg hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 transition-colors duration-300 font-poppins"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative group h-full"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
          <div className="relative bg-white dark:bg-gray-800 rounded-lg p-6 h-full flex flex-col">
            <h3 className="text-2xl font-bold mb-8 font-poppins bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent text-center">
              Connect with Me
            </h3>
            <div className="flex-grow grid grid-cols-3 sm:grid-cols-4 gap-8 place-items-center content-center">
              {socialLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  className="relative group/item"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.blurred ? (
                    <div className="relative cursor-pointer group/blur">
                      <div className="blur-sm transition-all duration-300">
                        {link.icon}
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/blur:opacity-100 transition-opacity duration-300">
                        <span className="text-sm text-center text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 px-3 py-2 rounded font-inter whitespace-nowrap">
                          Send a message to know more
                        </span>
                      </div>
                    </div>
                  ) : (
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transform transition-transform duration-200 hover:scale-110 p-4 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                      aria-label={link.name}
                    >
                      {link.icon}
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
