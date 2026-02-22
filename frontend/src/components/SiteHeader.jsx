import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

import { Button } from './ui/button';

const SiteHeader = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'What We Enable', path: '/what-we-enable' },
    { label: 'Impact', path: '/impact' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Get Involved', path: '/get-involved' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#EC167F] to-[#F5A044] border-b border-white/20 shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-27">
          <Link to="/" className="flex items-center">
            <img
              src="/logo_sohum.png"
              alt="Sohum Trust Logo"
              className="h-20 md:h-24 w-auto object-contain"
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-base font-medium transition-all ${
                  isActive(item.path)
                    ? 'text-white font-bold'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link to="/get-involved" className="hidden md:block">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              {/* Pulsing glow effect */}
              <motion.div
                className="absolute inset-0 bg-white rounded-full blur-lg opacity-50"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <Button className="relative bg-white text-[#EC167F] hover:bg-white/95 px-8 py-3 rounded-full font-bold shadow-2xl flex items-center gap-2 border-2 border-white">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity
                  }}
                >
                  <Heart size={18} className="fill-[#EC167F]" />
                </motion.div>
                Donate Now
              </Button>
            </motion.div>
          </Link>

          <button
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden pb-6 border-t border-white/30 bg-gradient-to-r from-[#EC167F] to-[#F5A044] mt-2">
            <nav className="flex flex-col space-y-3 pt-4 px-4 sm:px-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`py-2 px-3 rounded-lg font-medium text-sm sm:text-base ${
                    isActive(item.path) ? 'bg-white/20 text-white font-bold' : 'text-white/90 hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <a href="https://forms.gle/YJ6roCW6Kd5YFWur5" target="_blank" rel="noopener noreferrer" className="block pt-2" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-white text-[#EC167F] font-bold rounded-full py-2 sm:py-3 shadow-lg flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base">
                  <Heart size={16} className="fill-[#EC167F] sm:hidden" />
                  <Heart size={18} className="fill-[#EC167F] hidden sm:block" />
                  Donate Now
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default SiteHeader;
