import React, { useState } from 'react';
import { BookOpen, Briefcase, Heart, Lightbulb, Mail, MapPin, Palette, Phone } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

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
