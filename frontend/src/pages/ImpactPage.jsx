import React, { useState } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { BarChart3, GraduationCap, Heart, Mail, MapPin, Phone, Quote, X } from 'lucide-react';
import { Link } from 'react-router-dom';

import { testimonial } from '../mockData';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

const impactData = [
  {
    id: 1,
    number: '5000+',
    label: 'Students Empowered',
    icon: GraduationCap,
    image: '/children5.png',
    shortDesc: 'Building Skills for Tomorrow',
    fullInfo:
      'We have empowered over 5000 students across tier-2 and tier-3 cities with essential skills in coding, STEM, and digital literacy.',
  },
  {
    id: 2,
    number: '120+',
    label: 'Cities & Villages',
    icon: MapPin,
    image: '/children6.png',
    shortDesc: 'Expanding our footprint',
    fullInfo:
      'Our reach spans across 120+ distinct locations. From bustling urban centers to remote rural villages, we ensure that geography is no barrier.',
  },
  {
    id: 3,
    number: '500k+',
    label: 'Hours Delivered',
    icon: BarChart3,
    image: '/children7.png',
    shortDesc: 'Consistent Education',
    fullInfo:
      'Consistency is key. We have delivered over half a million hours of structured learning, ensuring deep understanding and long-term retention.',
  },
];

const ImpactGallery = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <section id="impact" className="py-12 bg-[#F9F4EF]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-[#E6AF2E] uppercase tracking-wide">
            Our Impact
          </h2>
          <p className="text-gray-600 mt-1 text-xs md:text-sm">
            Real numbers, real stories, real change.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 h-[250px] w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl bg-black">
          {impactData.map((item) => (
            <motion.div
              layoutId={`card-${item.id}`}
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              className="relative group cursor-pointer overflow-hidden border-b md:border-b-0 md:border-r border-white/10 last:border-0"
              whileHover={{ scale: 1.02, zIndex: 10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gray-800">
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-50 group-hover:opacity-60"
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-500" />
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-center p-2 text-center z-10">
                <motion.div layoutId={`icon-${item.id}`} className="mb-2">
                  <item.icon className="w-6 h-6 text-[#E6AF2E] opacity-90" />
                </motion.div>

                <motion.h3
                  className="text-white text-2xl md:text-3xl font-extrabold tracking-tight drop-shadow-md"
                  layoutId={`number-${item.id}`}
                >
                  {item.number}
                </motion.h3>

                <motion.p
                  className="text-gray-300 text-xs font-medium mt-1 tracking-wide"
                  layoutId={`label-${item.id}`}
                >
                  {item.label}
                </motion.p>

                <motion.span className="text-[#E6AF2E] mt-3 text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  View Details
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedId && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
              />

              <motion.div
                layoutId={`card-${selectedId}`}
                className="relative w-full max-w-2xl bg-white rounded-lg overflow-hidden shadow-2xl z-50"
              >
                {(() => {
                  const item = impactData.find((b) => b.id === selectedId);
                  if (!item) return null;

                  return (
                    <div className="flex flex-col md:flex-row h-[60vh] md:h-[320px]">
                      <div className="relative w-full md:w-1/2 h-1/2 md:h-full bg-gray-900">
                        <img src={item.image} alt={item.label} className="w-full h-full object-cover opacity-80" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                        <div className="absolute bottom-6 left-6 right-6">
                          <motion.div layoutId={`icon-${item.id}`} className="mb-2">
                            <item.icon className="w-6 h-6 text-[#E6AF2E]" />
                          </motion.div>
                          <motion.h3 layoutId={`number-${item.id}`} className="text-white text-3xl font-extrabold">
                            {item.number}
                          </motion.h3>
                          <motion.p layoutId={`label-${item.id}`} className="text-gray-300 text-sm font-medium">
                            {item.label}
                          </motion.p>
                        </div>
                      </div>

                      <div className="p-6 w-full md:w-1/2 h-1/2 md:h-full flex flex-col bg-[#FBF7F1] overflow-y-auto">
                        <div className="flex justify-end mb-1">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedId(null);
                            }}
                            className="p-1.5 bg-black/5 hover:bg-black/10 rounded-full transition-colors"
                            aria-label="Close"
                          >
                            <X className="w-4 h-4 text-gray-600" />
                          </button>
                        </div>

                        <div className="flex-1 flex flex-col justify-center">
                          <h4 className="text-[#E66A2C] font-bold text-sm mb-2 uppercase tracking-wide">
                            {item.shortDesc}
                          </h4>
                          <div className="w-8 h-1 bg-[#E6AF2E] mb-3 rounded-full" />
                          <p className="text-gray-700 leading-relaxed text-sm">{item.fullInfo}</p>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-br from-amber-50/50 via-[#fef3e8]/30 to-rose-50/20 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] p-8 md:p-12 border border-[#f2a041]/40"
            style={{
              boxShadow:
                '0 20px 40px -10px rgba(251, 140, 0, 0.15), 0 10px 20px -5px rgba(251, 140, 0, 0.1)',
            }}
            initial={{ y: 50 }}
            animate={isInView ? { y: 0 } : { y: 50 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-indigo-100 shadow-lg">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-[#f2a041] p-2 rounded-full shadow-lg">
                    <Quote className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              <div className="flex-1 text-center md:text-left space-y-4">
                <p className="body-text text-lg md:text-xl text-slate-700 leading-relaxed italic">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div>
                  <p className="font-bold text-indigo-600 text-lg">{testimonial.name}</p>
                  <p className="body-text text-slate-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const ImpactPage = () => {
  return (
    <div className="min-h-screen bg-transparent">
      <SiteHeader />
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-[#fef3e8]/60 via-[#f2a041]/15 to-[#f15b59]/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800">
              Our <span className="text-[#f2a041]">Impact</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Witness the transformative power of education and the lasting change we create together.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <ImpactGallery />

      {/* Success Stories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-12">
              Success Stories
            </h2>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-[#fef3e8] to-amber-50 rounded-2xl p-8 shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-[#f9c483] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">👨‍💻</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Rajesh Kumar - Software Developer</h3>
                    <p className="text-slate-600 leading-relaxed">
                      "Thanks to Sohum Trust, I learned web development and landed my first job at a tech company. The mentorship and guidance I received changed my life completely."
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-indigo-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">👩‍💼</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Priya Sharma - Data Analyst</h3>
                    <p className="text-slate-600 leading-relaxed">
                      "The Python and data analytics courses opened up a world of opportunities for me. I never thought I could work in tech, but Sohum Trust made it possible."
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-emerald-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">👨‍🎓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Amit Patel - Full Stack Developer</h3>
                    <p className="text-slate-600 leading-relaxed">
                      "From learning the basics of coding to building complete web applications, the journey has been incredible. Now I'm working on exciting projects and mentoring others too."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Impact by Numbers */}
      <section className="py-16 bg-gradient-to-b from-white to-amber-50/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Creating Lasting Change
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Every contribution helps us reach more students and create more success stories. Together, we're building a future where quality education is accessible to all, regardless of location or background.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default ImpactPage;
