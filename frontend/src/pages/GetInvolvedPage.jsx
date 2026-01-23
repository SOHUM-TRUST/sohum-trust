import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

import { donationTiers } from '../mockData';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

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
