import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Button } from './ui/button';

const SiteHeader = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'What We Enable', path: '/what-we-enable' },
    { label: 'Impact', path: '/impact' },
    { label: 'Get Involved', path: '/get-involved' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#EC167F] to-[#F5A044] border-b border-white/20 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-17 md:h-22">
          <Link to="/" className="flex items-center">
            <img
              src="/logo_sohum.png"
              alt="Sohum Trust Logo"
              className="h-14 md:h-20 lg:h-24 w-auto object-contain"
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm lg:text-base font-medium transition-all ${
                  isActive(item.path)
                    ? 'text-white font-bold'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link to="/get-involved">
            <Button className="hidden md:block bg-white text-[#EC167F] hover:bg-white/90 px-8 py-3 rounded-full font-bold shadow-lg">
              Donate Now
            </Button>
          </Link>

          <button
            className="md:hidden p-2 text-white"
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
          <div className="md:hidden pb-6 border-t border-white/30 bg-gradient-to-r from-[#EC167F] to-[#F5A044]">
            <nav className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-medium ${
                    isActive(item.path) ? 'text-white font-bold' : 'text-white/90'
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <Link to="/get-involved" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-white text-[#EC167F] font-bold rounded-full py-3">
                  Donate Now
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default SiteHeader;
