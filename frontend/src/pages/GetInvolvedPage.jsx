import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart, Mail, MapPin, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

import { donationTiers } from '../mockData';
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

const DonationSection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-16 bg-[#FBF7F1]">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="heading text-4xl font-bold text-slate-800 mb-4">
            How Your Donation Helps
          </h2>
          <p className="body-text text-lg text-slate-600">
            Every contribution creates real impact for students in need.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {donationTiers.map((tier, index) => {
            const isFeatured = tier.amount === '₹10,000';

            return (
              <motion.div
                key={tier.id}
                className={`rounded-3xl overflow-hidden transition-all bg-white/90 backdrop-blur-sm shadow-[0_20px_40px_rgba(0,0,0,0.08)] ${
                  isFeatured ? 'scale-105 border-2 border-indigo-600' : ''
                }`}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="h-56">
                  <img src={tier.image} alt={tier.title} className="w-full h-full object-cover" />
                </div>

                <div className="p-8 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[#E66A2C] font-bold">₹</span>
                    <span className="text-3xl font-bold text-slate-800">
                      {String(tier.amount).replace('₹', '')}
                    </span>
                  </div>

                  <h3 className="heading text-xl font-semibold text-slate-700">{tier.title}</h3>
                  <p className="body-text text-slate-600">{tier.description}</p>

                  <div className="bg-indigo-50/70 px-4 py-3 rounded-2xl text-sm text-indigo-700 font-medium">
                    ✓ Impact: {tier.impact}
                  </div>

                  <Button
                    className={`w-full py-5 rounded-full text-lg font-semibold ${
                      isFeatured
                        ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                        : 'bg-[#E66A2C] hover:bg-[#d85f25] text-white'
                    }`}
                  >
                    Donate
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const GetInvolvedPage = () => {
  return (
    <div className="min-h-screen bg-transparent">
      <SiteHeader />
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-[#fef3e8]/60 via-[#f2a041]/15 to-[#f15b59]/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800">
              Get <span className="text-[#f2a041]">Involved</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Join us in our mission to empower students and transform futures. Every contribution makes a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Cards */}
      <DonationSection />

      {/* Ways to Help Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-6">
              Engagement Opportunities
            </h2>
            <p className="text-lg text-slate-600 text-center mb-12 max-w-3xl mx-auto">
              Partner with Sohum Trust through 80G-eligible contributions, mentorship programs, or infrastructure endowments.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-[#fef3e8] to-amber-50 rounded-2xl p-6 shadow-lg border border-[#f2a041]/40">
                <div className="w-16 h-16 bg-[#f9c483] rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl">🎓</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">Volunteer</h3>
                <p className="text-slate-600 mb-4">
                  Share your expertise and mentor students. Help them navigate their learning journey and career paths.
                </p>
                <button className="text-[#e88f2d] font-semibold hover:text-orange-700">
                  Learn More →
                </button>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 shadow-lg border border-indigo-100/40">
                <div className="w-16 h-16 bg-indigo-200 rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl">🏛️</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">Infrastructure</h3>
                <p className="text-slate-600 mb-4">
                  Support the establishment and sustenance of institutions that empower learners.
                </p>
                <button className="text-indigo-600 font-semibold hover:text-indigo-700">
                  Learn More →
                </button>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 shadow-lg border border-emerald-100/40">
                <div className="w-16 h-16 bg-emerald-200 rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl">📢</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">Contact Us</h3>
                <p className="text-slate-600 mb-4">
                   Engage via our Karnataka headquarters: <a href="mailto:sohumtrust@zohomail.in" className="text-emerald-700 font-medium">sohumtrust@zohomail.in</a>. Transparent governance ensures every investment yields enduring societal dividends.
                </p>
                <button className="text-emerald-600 font-semibold hover:text-emerald-700">
                  Contact Now →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-b from-white to-amber-50/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] p-8 md:p-12 border border-[#f2a041]/40">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-6">
              Contact Us
            </h2>
            <p className="text-lg text-slate-600 text-center mb-8">
              Have questions or want to learn more? We'd love to hear from you!
            </p>
            
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f2a041]"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f2a041]"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                <textarea 
                  rows={5}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f2a041]"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-[#f2a041] hover:bg-[#e88f2d] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default GetInvolvedPage;
