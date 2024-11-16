import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';

const quotes = [
  "Building tomorrow's AI solutions today",
  "Bridging the gap between imagination and AI reality",
  "Transforming ideas into intelligent solutions",
  "Where creativity meets artificial intelligence",
  "Innovating at the intersection of AI and human potential"
];

const Contact = () => {
  const [message, setMessage] = useState('');
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  const handleWhatsAppMessage = (e: React.FormEvent) => {
    e.preventDefault();
    // Your WhatsApp number encoded in the URL
    const whatsappUrl = `https://wa.me/917006081836?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setMessage(''); // Clear the message after sending
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Connect Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center mb-16"
      >
        <h2 className="text-3xl font-bold font-orbitron bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-[#EC4899] bg-clip-text text-transparent mb-8">
          Connect with Me
        </h2>
        
        <div className="flex justify-center flex-wrap gap-8 mb-12">
          <motion.a
            href="https://github.com/mubashirnaqash"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-400 hover:text-[#4F46E5] transition-colors duration-300"
          >
            <FaGithub className="w-7 h-7" />
          </motion.a>
          
          <motion.a
            href="https://linkedin.com/in/mubashir-f-3a160b171"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-400 hover:text-[#7C3AED] transition-colors duration-300"
          >
            <FaLinkedin className="w-7 h-7" />
          </motion.a>
          
          <motion.a
            href="https://twitter.com/MubashirNaqash"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-400 hover:text-[#000000] dark:hover:text-white transition-colors duration-300"
          >
            <RiTwitterXFill className="w-7 h-7" />
          </motion.a>

          <motion.a
            href="https://facebook.com/Mubashir.naqash"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-400 hover:text-[#1877F2] transition-colors duration-300"
          >
            <FaFacebook className="w-7 h-7" />
          </motion.a>

          <motion.a
            href="https://instagram.com/callmemubashirnaqash"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-400 hover:text-[#E4405F] transition-colors duration-300"
          >
            <FaInstagram className="w-7 h-7" />
          </motion.a>
          
          <motion.a
            href="mailto:mubashirnaqash@gmail.com"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-400 hover:text-[#EC4899] transition-colors duration-300"
          >
            <FaEnvelope className="w-7 h-7" />
          </motion.a>
        </div>

        {/* Message Form */}
        <motion.form
          onSubmit={handleWhatsAppMessage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/5 backdrop-blur-sm rounded-xl p-6 shadow-xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#4F46E5]/5 via-[#7C3AED]/5 to-[#EC4899]/5 animate-pulse" />
          
          <div className="relative">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
              className="w-full h-32 px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400 resize-none"
              required
            />
            
            <button
              type="submit"
              className="mt-4 w-full py-3 bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-[#EC4899] text-white rounded-lg hover:opacity-90 transition-opacity duration-200 flex items-center justify-center gap-2 group"
            >
              <FaWhatsapp className="w-5 h-5" />
              Send Message on WhatsApp
            </button>
          </div>
        </motion.form>
      </motion.div>

      {/* Quote Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center bg-gradient-to-r from-[#4F46E5]/10 via-[#7C3AED]/10 to-[#EC4899]/10 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#4F46E5]/5 via-[#7C3AED]/5 to-[#EC4899]/5 animate-pulse" />
        
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-[#7C3AED] rounded-tl-lg" />
          <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-[#EC4899] rounded-br-lg" />
          
          <p className="text-xl md:text-2xl font-quicksand text-gray-300 italic mb-6">
            "{randomQuote}"
          </p>
          
          <div className="flex items-center justify-center">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-[#7C3AED] to-transparent" />
            <p className="mx-4 text-lg font-orbitron bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-[#EC4899] bg-clip-text text-transparent">
              Mubashir Farooq
            </p>
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-[#7C3AED] to-transparent" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
