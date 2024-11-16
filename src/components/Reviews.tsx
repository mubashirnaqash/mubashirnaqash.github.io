import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHeart, FaStar, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { IoSend } from 'react-icons/io5';

interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: Date;
}

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showThankYou, setShowThankYou] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    rating: 5,
    comment: ''
  });

  const reviewsPerPage = 3;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newReview: Review = {
      id: Date.now().toString(),
      name: formData.name,
      rating: formData.rating,
      comment: formData.comment,
      date: new Date()
    };

    setReviews(prev => [newReview, ...prev]);
    setFormData({ name: '', rating: 5, comment: '' });
    setShowThankYou(true);
    setTimeout(() => setShowThankYou(false), 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-[#EC4899] bg-clip-text text-transparent mb-4">
            Reviews
          </h2>
          <p className="text-gray-600 dark:text-gray-300">Share your thoughts about my work</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Review Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4F46E5]/5 via-[#7C3AED]/5 to-[#EC4899]/5" />
              
              <div className="relative">
                <label className="block text-gray-700 dark:text-gray-200 mb-2 font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white transition-colors duration-200"
                  placeholder="Your name"
                />
              </div>

              <div className="relative">
                <label className="block text-gray-700 dark:text-gray-200 mb-2 font-medium">Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, rating: star }))}
                      className="focus:outline-none"
                    >
                      <FaStar
                        className={`w-8 h-8 ${
                          star <= formData.rating
                            ? 'text-yellow-400'
                            : 'text-gray-300 dark:text-gray-600'
                        } transition-colors duration-200`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="relative">
                <label className="block text-gray-700 dark:text-gray-200 mb-2 font-medium">Comment</label>
                <textarea
                  name="comment"
                  value={formData.comment}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white transition-colors duration-200 resize-none"
                  placeholder="Share your experience..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 text-white font-medium rounded-lg bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-[#EC4899] hover:opacity-90 transition-opacity duration-200 flex items-center justify-center gap-2 group"
              >
                Submit Review
                <IoSend className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </form>

            {/* Thank you message */}
            <AnimatePresence>
              {showThankYou && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-2xl text-center z-10"
                >
                  <FaHeart className="w-12 h-12 text-pink-500 mx-auto mb-4 animate-pulse" />
                  <p className="text-xl font-medium text-gray-800 dark:text-white">
                    Thank you for your review!
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Reviews Display */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="space-y-6 h-[600px] overflow-y-auto pr-4 custom-scrollbar">
              {reviews.length === 0 ? (
                <div className="text-center text-gray-500 dark:text-gray-400 py-12">
                  <p className="text-lg">No reviews yet. Be the first to share your thoughts!</p>
                </div>
              ) : (
                reviews
                  .slice((currentPage - 1) * reviewsPerPage, currentPage * reviewsPerPage)
                  .map((review) => (
                    <motion.div
                      key={review.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg relative group hover:shadow-xl transition-shadow duration-200"
                    >
                      <div className="absolute top-4 right-4 flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <FaStar key={i} className="w-5 h-5 text-yellow-400" />
                        ))}
                      </div>
                      <FaQuoteLeft className="w-6 h-6 text-purple-500 opacity-50 mb-2" />
                      <p className="text-gray-700 dark:text-gray-300 mb-4">{review.comment}</p>
                      <div className="flex items-center justify-between">
                        <p className="font-medium text-gray-900 dark:text-white">{review.name}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {new Date(review.date).toLocaleDateString()}
                        </p>
                      </div>
                      <FaQuoteRight className="w-6 h-6 text-purple-500 opacity-50 absolute bottom-4 right-4" />
                    </motion.div>
                  ))
              )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-6 gap-2">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${
                      currentPage === i + 1
                        ? 'bg-purple-500 text-white'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-purple-200 dark:hover:bg-purple-900'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
