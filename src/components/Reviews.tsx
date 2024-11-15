import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaQuoteRight, FaStar } from 'react-icons/fa';

interface Review {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Dr. Asif Ali Banka",
    role: "PhD Supervisor, Islamic University of Science and Technology",
    content: "Mubashir has demonstrated exceptional research capabilities in AI and Machine Learning. His work on medical imaging analysis has been particularly impressive.",
    rating: 5,
  },
  {
    id: 2,
    name: "Dr. Shehla Rafiq",
    role: "Research Collaborator, Healthcare ML Projects",
    content: "Working together on Machine Learning in Healthcare has been a rewarding experience. Mubashir's innovative approaches and dedication to advancing healthcare through AI are commendable.",
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-24 bg-cream-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-indigo-500/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] translate-x-1/2 translate-y-1/2 bg-gradient-to-br from-blue-500/20 via-teal-500/20 to-emerald-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="text-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent pb-2">
                Reviews & Testimonials
              </h2>
              <div className="h-1 w-24 mx-auto bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full" />
            </motion.div>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              What colleagues and collaborators say about my research and work
            </p>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative flex flex-col h-full group"
              >
                {/* Animated gradient border */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy" />
                
                {/* Card Content */}
                <div className="relative flex flex-col h-full rounded-2xl bg-white dark:bg-gray-800 p-8">
                  {/* Quote icon with gradient */}
                  <div className="absolute -top-5 -left-5">
                    <div className="relative w-10 h-10">
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full blur-sm animate-pulse" />
                      <div className="relative bg-white dark:bg-gray-800 rounded-full p-2">
                        <FaQuoteLeft className="w-6 h-6 text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text" />
                      </div>
                    </div>
                  </div>

                  {/* Content with enhanced spacing */}
                  <div className="mt-6 space-y-6">
                    {/* Rating with animated stars */}
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <FaStar className="w-5 h-5 text-yellow-400" />
                        </motion.span>
                      ))}
                    </div>

                    {/* Review text with gradient hover effect */}
                    <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:via-purple-500 group-hover:to-indigo-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                      {review.content}
                    </p>

                    {/* Reviewer info with enhanced styling */}
                    <div className="pt-6 mt-6 border-t border-gray-200 dark:border-gray-700">
                      <h4 className="text-xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                        {review.name}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">
                        {review.role}
                      </p>
                    </div>
                  </div>

                  {/* Bottom quote with gradient */}
                  <div className="absolute -bottom-5 -right-5">
                    <div className="relative w-10 h-10">
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full blur-sm animate-pulse" />
                      <div className="relative bg-white dark:bg-gray-800 rounded-full p-2">
                        <FaQuoteRight className="w-6 h-6 text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
