import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, X } from 'lucide-react';

const FloatingDonateButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    // Show button after 2 seconds of page load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0, x: 100 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        exit={{ opacity: 0, scale: 0, x: 100 }}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-[100]"
      >
        {!isMinimized ? (
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative"
          >
            {/* Pulsing rings */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-[#EC167F] to-[#F5A044]"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.7, 0, 0.7]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-[#EC167F] to-[#F5A044]"
              animate={{
                scale: [1, 1.6, 1],
                opacity: [0.5, 0, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />

            {/* Main button */}
            <Link to="/get-involved">
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="relative bg-gradient-to-r from-[#EC167F] to-[#F5A044] text-white px-4 py-3 sm:px-6 sm:py-3.5 md:px-8 md:py-4 rounded-full font-bold shadow-2xl flex items-center gap-2 sm:gap-2.5 md:gap-3 border-2 border-white hover:shadow-3xl transition-shadow text-sm sm:text-base md:text-lg cursor-pointer"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity
                  }}
                >
                  <Heart size={20} className="fill-white sm:hidden" />
                  <Heart size={22} className="fill-white hidden sm:block md:hidden" />
                  <Heart size={24} className="fill-white hidden md:block" />
                </motion.div>
                <span>Donate Now</span>
              </motion.button>
            </Link>

            {/* Minimize button */}
            <button
              onClick={() => setIsMinimized(true)}
              className="absolute -top-2 -right-2 bg-white rounded-full p-1.5 shadow-lg hover:bg-gray-100 transition-colors"
            >
              <X size={16} className="text-gray-600" />
            </button>
          </motion.div>
        ) : (
          <motion.button
            onClick={() => setIsMinimized(false)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="relative w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-[#EC167F] to-[#F5A044] text-white rounded-full shadow-2xl flex items-center justify-center"
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-[#EC167F] to-[#F5A044]"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.7, 0, 0.7]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              animate={{
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity
              }}
            >
              <Heart size={24} className="fill-white relative z-10 sm:hidden" />
              <Heart size={28} className="fill-white relative z-10 hidden sm:block" />
            </motion.div>
          </motion.button>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default FloatingDonateButton;
