import React, { useState } from 'react';
import { BookOpen, Briefcase, Heart, Lightbulb, Mail, MapPin, Palette, Phone } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

import { Button } from '../components/ui/button';

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
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center">
            <img src="/logo_sohum.png" alt="Sohum Trust Logo" className="h-14 md:h-16 lg:h-20 w-auto object-contain" />
          </Link>

          <nav className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm lg:text-base font-medium transition-all ${
                  isActive(item.path) ? 'text-white font-bold' : 'text-white/90 hover:text-white'
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
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

const SiteFooter = () => {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold flex items-center space-x-2">
              <Heart className="w-5 h-5 text-[#f9c483]" />
              <span>Sohum Trust</span>
            </h3>
            <p className="text-slate-300 leading-relaxed">
              Sohum Trust champions comprehensive educational advancement,
              establishing and sustaining institutions that empower learners at
              every stage.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2 text-slate-300">
              <li><Link to="/about" className="hover:text-[#f9c483] transition-colors duration-200">About Us</Link></li>
              <li><Link to="/what-we-enable" className="hover:text-[#f9c483] transition-colors duration-200">What We Enable</Link></li>
              <li><Link to="/impact" className="hover:text-[#f9c483] transition-colors duration-200">Impact</Link></li>
              <li><Link to="/get-involved" className="hover:text-[#f9c483] transition-colors duration-200">Get Involved</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contact Us</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#f9c483]" />
                <span>sohumtrust@zohomail.in</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#f9c483]" />
                <span>+91 XXXX XXXXXX</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#f9c483]" />
                <span>Karnataka, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-10 pt-8 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} Sohum Trust. All rights reserved. Building futures through education.</p>
        </div>
      </div>
    </footer>
  );
};

const ProgramsSection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const programs = [
    {
      icon: BookOpen,
      title: 'Foundational & Scholastic Excellence',
      description:
        'Primary, higher primary, secondary, and higher secondary schools delivering holistic curricula in core academic branches. Undergraduate colleges advancing basic sciences, commerce, arts, social sciences, economics, and humanities.',
      color: 'from-indigo-500 to-indigo-600',
      iconColor: 'text-indigo-500',
      image: '/children1.png',
    },
    {
      icon: Briefcase,
      title: 'Professional & Vocational Mastery',
      description:
        'Prestigious institutions for medical, para-medical, biological sciences, and vocational disciplines. Premier engineering colleges, polytechnics, industrial training institutes, and sector-specific engineering pathways.',
      color: 'from-emerald-500 to-emerald-600',
      iconColor: 'text-emerald-500',
      image: '/children2.png',
    },
    {
      icon: Lightbulb,
      title: 'Specialized Innovation Hubs',
      description:
        'Advanced training academies in hospitality, textiles, and emerging sectors. Pioneering centers for distance education through e-learning, correspondence, postal coaching, and hybrid modalities.',
      color: 'from-[#f2a041] to-[#e88f2d]',
      iconColor: 'text-orange-500',
      image: '/children3.png',
    },
    {
      icon: Palette,
      title: 'Cultural & Research Vanguard',
      description:
        'Veda Paatashaalas, Sanskrit patashalas, yoga sanctuaries, and conservatories for music, dance, folk arts, and sports. State-of-the-art research facilities exploring education, social sciences, arts, humanities, science, and technology.',
      color: 'from-purple-500 to-purple-600',
      iconColor: 'text-purple-500',
      image: '/children5.png',
    },
  ];

  return (
    <section id="programs" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="heading text-3xl md:text-4xl font-bold text-slate-700 mb-4">
            Educational Pillars
          </h2>
          <p className="body-text text-lg text-slate-600">
            Sohum Trust meticulously curates programs across a spectrum of learning paradigms
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={index}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-[0_20px_40px_-5px_rgba(0,0,0,0.1)] transition-all duration-300 group relative overflow-hidden"
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0, y: 40, scale: 0.95 }
                }
                transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-5 rounded-bl-[100px] transition-opacity duration-500 pointer-events-none`}
                />

                <div className="w-full h-40 bg-gray-200 mb-6 rounded-xl overflow-hidden relative group-hover:shadow-md transition-all duration-300">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute bottom-2 right-2 bg-white p-2 rounded-lg shadow-sm">
                    <Icon className={`w-5 h-5 ${program.iconColor || 'text-slate-600'}`} />
                  </div>
                </div>

                <h3 className="heading text-xl font-bold text-slate-800 mb-3 group-hover:text-[#f2a041] transition-colors duration-300 min-h-[56px]">
                  {program.title}
                </h3>
                <p className="body-text text-slate-500 leading-relaxed text-sm">
                  {program.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const WhatWeEnablePage = () => {
  return (
    <div className="min-h-screen bg-transparent">
      <SiteHeader />
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-[#fef3e8]/60 via-[#f2a041]/15 to-[#f15b59]/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800">
              What We <span className="text-[#f2a041]">Enable</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Empowering students with the skills and knowledge they need to succeed in the digital world.
            </p>
          </div>
        </div>
      </section>

      {/* What We Enable */}
      <ProgramsSection />

      <SiteFooter />
    </div>
  );
};

export default WhatWeEnablePage;
