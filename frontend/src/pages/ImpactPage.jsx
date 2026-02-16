'use client';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  BarChart3,
  GraduationCap,
  MapPin,
  Quote,
  X,
  ArrowRight,
  Calendar,
  Users,
  Building2,
  HeartHandshake,
  ArrowUpRight,
  Monitor,
  BookOpen,
  Target,
  Leaf,
  Globe2,
  Handshake,
  Star
} from 'lucide-react';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import FloatingDonateButton from '../components/FloatingDonateButton';

/* =========================================================
   1. DATA CONFIGURATION
========================================================= */

const testimonial = {
  quote: "Education is the most powerful tool we can use to transform communities. When students are empowered with knowledge and skills, they become catalysts for change in their villages and towns.",
  name: "Educational Philosophy",
  location: "Sohum Trust Foundation"
};

const impactData = [
  {
    id: 1,
    number: '5000+',
    label: 'Students to Empower',
    icon: GraduationCap,
    // Using high-quality placeholders. Replace with your '/children5.png' etc.
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop', 
    shortDesc: 'Skills for tomorrow',
    fullInfo: 'We aim to empower over 5000 students across Tier-2 and Tier-3 cities with structured learning, mentorship, and digital skills, bridging the gap between urban and rural opportunities.',
  },
  {
    id: 2,
    number: '120+',
    label: 'Locations to Reach',
    icon: MapPin,
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1000&auto=format&fit=crop',
    shortDesc: 'Expanding footprint',
    fullInfo: 'Our initiatives will span across 120+ villages and towns. We plan to establish nodes in remote districts to ensure continuity where it is needed most.',
  },
  {
    id: 3,
    number: '500k+',
    label: 'Learning Hours Target',
    icon: BarChart3,
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000&auto=format&fit=crop',
    shortDesc: 'Structured education',
    fullInfo: 'We plan to deliver more than half a million hours of quality education through sustained programs. This represents our commitment to actual classroom and lab time, not just online views.',
  },
];

const timelineData = [
  { year: '2026', title: 'Launch Phase', desc: 'Establishing first 10 centers in rural Karnataka.' },
  { year: '2027', title: 'Expansion', desc: 'Scaling to 50+ centers & reaching 1000 students.' },
  { year: '2028', title: 'Digital Leap', desc: 'Launching hybrid learning platform.' },
  { year: '2030', title: 'Ecosystem', desc: 'Building partnerships with 15+ universities.' },
];

// --- Configuration for the background images ---
const backgroundImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop", // University architecture
    initialX: "-10%", initialY: "0%",
    animateX: ["-10%", "5%", "-10%"], // Gentle horizontal drift
    animateY: ["0%", "-10%", "0%"],   // Gentle vertical drift
    duration: 25,
    positionClasses: "top-[-10%] left-[-10%] w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw]",
    rotation: [0, 4, 0]
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop", // Students group
    initialX: "10%", initialY: "10%",
    animateX: ["10%", "-5%", "10%"],
    animateY: ["10%", "20%", "10%"],
    duration: 30,
    positionClasses: "bottom-[-15%] right-[-5%] w-[70vw] h-[70vw] md:w-[50vw] md:h-[50vw]",
    rotation: [0, -3, 0]
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop", // Collaborative workspace
    initialX: "0%", initialY: "0%",
    animateX: ["0%", "8%", "0%"],
    animateY: ["0%", "5%", "0%"],
    duration: 28,
    positionClasses: "top-[20%] right-[20%] w-[40vw] h-[40vw] md:w-[30vw] md:h-[30vw]",
    rotation: [2, 0, 2]
  }
];

/* =========================================================
   2. MOTION IMAGE BACKGROUND HERO
========================================================= */
const MotionImageBackgroundHero = () => {
  return (
    <section className="relative w-full min-h-[400px] sm:min-h-[480px] md:min-h-[550px] flex items-center justify-center overflow-hidden bg-[#fffbf2]">
      
      {/* ========================================================
          1. BACKGROUND LAYERS & WARM GRADIENT BASE
      ======================================================== */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#fff0e0_0%,_#fffbf2_80%)]" />

      
      {/* ========================================================
          2. THE DRIFTING IMAGE LAYER
      ======================================================== */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        {backgroundImages.map((img) => (
          <motion.div
            key={img.id}
            className={`absolute rounded-[5rem] overflow-hidden opacity-20 mix-blend-multiply filter grayscale sepia-[0.3] blur-sm ${img.positionClasses}`}
            initial={{ x: img.initialX, y: img.initialY, rotate: img.rotation[0] }}
            animate={{
              x: img.animateX,
              y: img.animateY,
              rotate: img.rotation
            }}
            transition={{
              duration: img.duration,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "mirror" // Makes the motion smooth back and forth
            }}
          >
            <img 
              src={img.src} 
              alt="Background texture" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
        
        {/* Optional Noise Texture Overlay for a premium paper feel */}
        <div className="absolute inset-0 opacity-[0.15] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
      </div>


      {/* ========================================================
          3. FOREGROUND ACCENTS (Glowing Orbs)
          Adds depth on top of the images.
      ======================================================== */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute bottom-20 left-[10%] w-48 h-48 rounded-full bg-[#ea580c] blur-[80px] opacity-30"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.2, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
         <motion.div
          className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-[#ea580c] blur-[100px] opacity-20"
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.1, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>


      {/* ========================================================
          4. TYPOGRAPHY CONTENT
      ======================================================== */}
      <div className="relative z-20 text-center max-w-4xl px-4 sm:px-6">
        
        {/* Main Headline */}
        <motion.h1 
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-[#431407] tracking-tight leading-[1.1] mb-5 sm:mb-6 drop-shadow-sm"
        >
          Measuring <br/>
          <span className="relative z-10">
            what matters.
             {/* SVG Underline */}
            <svg className="absolute -bottom-3 left-0 w-full h-6 text-[#ea580c] -z-10 opacity-80" viewBox="0 0 300 20" fill="none" preserveAspectRatio="none">
              <motion.path d="M5 15C50 5 150 5 295 15" stroke="currentColor" strokeWidth="6" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }} />
            </svg>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          className="text-base sm:text-lg md:text-xl text-[#78350f] font-medium max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Beyond the numbers, we're building educational infrastructure that will last generations.
        </motion.p>
      </div>

    </section>
  );
};

/* =========================================================
   3. IMPACT GALLERY (Compact Cards + Modal)
========================================================= */
const ImpactGallery = () => {
  // FIXED: Removed TypeScript syntax "<number | null>"
  const [selectedId, setSelectedId] = useState(null);

  return (
    <section className="relative py-8 sm:py-10 md:py-12 bg-white -mt-4 sm:-mt-5 md:-mt-6 rounded-t-[2rem] sm:rounded-t-[2.5rem] z-20 shadow-[0_-10px_30px_rgba(0,0,0,0.03)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Compact Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
          {impactData.map((item) => (
            <motion.div
              key={item.id}
              layoutId={`card-container-${item.id}`}
              onClick={() => setSelectedId(item.id)}
              className="group relative h-[240px] sm:h-[260px] md:h-[280px] cursor-pointer rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-slate-100"
            >
              {/* Image Layer */}
              <motion.div layoutId={`card-image-${item.id}`} className="absolute inset-0">
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2a0d04] via-[#431407]/30 to-transparent opacity-90" />
              </motion.div>

              {/* Text Layer */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5 md:p-6 text-white">
                <div className="flex justify-between items-end">
                   <div>
                    <motion.h3 layoutId={`card-number-${item.id}`} className="font-serif text-3xl sm:text-4xl font-bold mb-1">
                      {item.number}
                    </motion.h3>
                    <motion.p layoutId={`card-label-${item.id}`} className="text-orange-50 text-xs sm:text-sm font-medium opacity-90">
                      {item.label}
                    </motion.p>
                   </div>
                   <ArrowUpRight className="text-[#ea580c] opacity-0 group-hover:opacity-100 transition-opacity mb-1 sm:mb-2" size={18} />
                </div>
                {/* Progress Bar visual */}
                <div className="h-0.5 w-0 group-hover:w-full bg-[#ea580c] transition-all duration-500 mt-3 sm:mt-4" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Expanded Modal */}
        <AnimatePresence>
          {selectedId && (
            <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
                className="absolute inset-0 bg-[#431407]/60 backdrop-blur-sm"
              />
              <motion.div
                layoutId={`card-container-${selectedId}`}
                className="relative bg-white w-full max-w-2xl overflow-hidden rounded-2xl shadow-2xl grid md:grid-cols-2"
              >
                {(() => {
                  const item = impactData.find((i) => i.id === selectedId);
                  if (!item) return null;
                  return (
                    <>
                      {/* Modal Image */}
                      <div className="relative h-48 sm:h-56 md:h-auto">
                        <motion.div layoutId={`card-image-${item.id}`} className="w-full h-full">
                           <img src={item.image} className="w-full h-full object-cover" />
                        </motion.div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-5 left-5 text-white">
                          <motion.h3 layoutId={`card-number-${item.id}`} className="font-serif text-5xl font-bold">
                            {item.number}
                          </motion.h3>
                        </div>
                      </div>

                      {/* Modal Content */}
                      <div className="p-5 sm:p-6 md:p-8 bg-[#fffbf7] flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start mb-3 sm:mb-4">
                            <motion.h4 layoutId={`card-label-${item.id}`} className="font-bold text-[#431407] text-lg sm:text-xl">
                              {item.label}
                            </motion.h4>
                            <button onClick={() => setSelectedId(null)} className="p-1 bg-white rounded-full hover:bg-slate-100 transition">
                              <X size={18} className="text-slate-500" />
                            </button>
                          </div>
                          <p className="text-sm text-slate-600 leading-relaxed mb-6">
                            {item.fullInfo}
                          </p>
                        </div>
                        
                        <div className="pt-6 border-t border-orange-100 flex items-center gap-2 text-xs font-bold text-[#ea580c] uppercase tracking-wider">
                          <item.icon size={16} /> {item.shortDesc}
                        </div>
                      </div>
                    </>
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

/* =========================================================
   4. ANIMATED METRICS SECTION
========================================================= */
const MetricsSection = () => {
  const metrics = [
    { value: 5000, label: "Students to Reach", suffix: "+", duration: 2 },
    { value: 95, label: "Target Completion Rate", suffix: "%", duration: 2.5 },
    { value: 120, label: "Planned Centers", suffix: "+", duration: 2 },
    { value: 500000, label: "Learning Hours Goal", suffix: "+", duration: 3, format: "k" }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-[#431407] to-[#2a0d04] text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#ea580c]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#ea580c]/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Our Impact Goals
          </h2>
          <p className="text-orange-100/80 max-w-2xl mx-auto">
            Ambitious targets that demonstrate our commitment to educational excellence
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="font-serif text-4xl md:text-5xl font-bold text-[#ea580c] mb-2">
                {metric.format === "k" ? `${(metric.value / 1000).toFixed(0)}k` : metric.value}
                {metric.suffix}
              </div>
              <div className="text-sm md:text-base text-orange-50/90 font-medium">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* =========================================================
   5. GEOGRAPHIC IMPACT (Where We Work)
========================================================= */

const GeographicImpact = () => {
  const regions = [
    { name: "Karnataka", desc: "Rural and semi-urban districts", dot: "bg-orange-500" },
    { name: "Andhra Pradesh", desc: "Underserved educational regions", dot: "bg-orange-600" },
    { name: "Tamil Nadu", desc: "Remote village clusters", dot: "bg-orange-700" },
    { name: "Maharashtra", desc: "Tier-2 and Tier-3 cities", dot: "bg-orange-800" },
    { name: "Other Regions", desc: "Expanding to more states", dot: "bg-orange-900" }
  ];

  return (
    <section className="py-24 bg-[#F8F4EF]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#F2E6DB] rounded-full mb-6">
            <MapPin className="w-4 h-4 text-[#ea580c]" />
            <span className="text-xs font-semibold text-[#ea580c] uppercase tracking-[0.2em]">
              Geographic Reach
            </span>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#3b1d0f] mb-6">
            Where We'll Create Impact
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto text-[16px]">
            Our planned presence across key states in India, bringing quality education 
            to underserved communities.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Map Card */}
          <div className="relative h-[420px] bg-gradient-to-br from-[#EDE3D8] to-[#F6EFE7] rounded-3xl shadow-lg flex items-center justify-center overflow-hidden">

            {/* Floating dots */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 bg-[#ea580c]/70 rounded-full"
                style={{
                  top: `${Math.random() * 80 + 10}%`,
                  left: `${Math.random() * 80 + 10}%`,
                }}
                animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}

            <div className="text-center relative z-10">
              <MapPin className="w-20 h-20 text-[#ea580c]/30 mx-auto mb-6" />
              <p className="font-serif text-3xl font-semibold text-[#3b1d0f] mb-2">
                5+ States
              </p>
              <p className="text-slate-600 text-sm">
                Multiple Locations
              </p>
            </div>
          </div>

          {/* Right Regions List */}
          <div className="space-y-6">
            {regions.map((region, idx) => (
              <motion.div
                key={region.name}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-7 bg-[#EFE7DD] rounded-2xl border border-[#E5D6C6] hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-3 h-3 ${region.dot} rounded-full mt-2`} />
                  <div>
                    <h3 className="font-semibold text-lg text-[#3b1d0f] mb-1">
                      {region.name}
                    </h3>
                    <p className="text-sm text-slate-600">
                      {region.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

/* =========================================================
   6. PROGRAM FOCUS AREAS
========================================================= */
const ProgramFocusSection = () => {
  const focuses = [
    {
      title: "Digital Literacy & Technology",
      desc: "Equipping students with essential computer skills, coding fundamentals, and digital tools to compete in the modern economy.",
      Icon: Monitor,
      color: "from-blue-50 to-blue-100",
      iconColor: "bg-gradient-to-br from-blue-500 to-cyan-600"
    },
    {
      title: "Academic Excellence Support",
      desc: "Providing structured learning support, exam preparation, and mentorship to help students achieve their academic goals.",
      Icon: BookOpen,
      color: "from-green-50 to-green-100",
      iconColor: "bg-gradient-to-br from-green-500 to-emerald-600"
    },
    {
      title: "Career Guidance & Skills",
      desc: "Offering vocational training, career counseling, and industry-aligned skill development for sustainable livelihoods.",
      Icon: Target,
      color: "from-purple-50 to-purple-100",
      iconColor: "bg-gradient-to-br from-purple-500 to-pink-600"
    },
    {
      title: "Holistic Development",
      desc: "Fostering critical thinking, communication skills, and values-based education rooted in cultural awareness.",
      Icon: Leaf,
      color: "from-orange-50 to-orange-100",
      iconColor: "bg-gradient-to-br from-orange-500 to-amber-600"
    }
  ];

  return (
    <section className="py-20 bg-[#fffbf7]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#431407] mb-4">
            Our Program Focus
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Comprehensive educational programs designed to empower students with knowledge, skills, and values
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {focuses.map((focus, idx) => (
            <motion.div
              key={focus.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className={`bg-gradient-to-br ${focus.color} p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-white`}
            >
              <div className="mb-4">
                <div className={`w-14 h-14 rounded-xl ${focus.iconColor} flex items-center justify-center shadow-lg`}>
                  <focus.Icon className="text-white" size={28} />
                </div>
              </div>
              <h3 className="font-bold text-xl text-[#431407] mb-3 leading-tight">
                {focus.title}
              </h3>
              <p className="text-slate-700 leading-relaxed">
                {focus.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* =========================================================
   7. TRANSFORMATION GOALS (Compact)
========================================================= */
const TransformationSection = () => {
  const transformations = [
    {
      before: "Limited digital access",
      after: "Smart classrooms with modern tools",
      Icon: Monitor,
      iconColor: "bg-gradient-to-br from-blue-500 to-cyan-600"
    },
    {
      before: "High dropout rates",
      after: "Sustained student engagement",
      Icon: BookOpen,
      iconColor: "bg-gradient-to-br from-green-500 to-emerald-600"
    },
    {
      before: "No career guidance",
      after: "1-on-1 mentorship programs",
      Icon: Target,
      iconColor: "bg-gradient-to-br from-purple-500 to-pink-600"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#431407] mb-4">
            Transformations We'll Enable
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Our commitment to creating meaningful change
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {transformations.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200"
            >
              <div className="mb-4 flex justify-center">
                <div className={`w-12 h-12 rounded-xl ${item.iconColor} flex items-center justify-center shadow-md`}>
                  <item.Icon className="text-white" size={24} />
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-sm text-slate-500 mb-2">{item.before}</p>
                <ArrowRight className="text-[#ea580c] w-6 h-6 mx-auto my-3" />
                <p className="text-[#431407] font-bold">{item.after}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* =========================================================
   8. TIMELINE SECTION (Clean Horizontal)
========================================================= */
const TimelineSection = () => {
  return (
    <section className="py-16 bg-[#fffbf7]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-10 justify-center md:justify-start">
          <div className="p-2 bg-orange-100 rounded-lg">
            <Calendar className="text-[#ea580c] w-5 h-5" />
          </div>
          <h2 className="font-serif text-2xl font-semibold text-[#431407]">Our Journey</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[15px] left-0 w-full h-[2px] bg-gradient-to-r from-orange-200 to-transparent -z-10" />

          {timelineData.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Dot */}
              <div className="w-8 h-8 bg-[#fffbf7] border-2 border-orange-200 rounded-full flex items-center justify-center mb-4 z-10 mx-auto md:mx-0 group-hover:border-[#ea580c] transition-colors">
                <div className="w-2.5 h-2.5 bg-[#ea580c] rounded-full" />
              </div>
              
              <div className="text-center md:text-left">
                <span className="text-2xl font-bold text-[#ea580c]/30 block mb-1 font-serif group-hover:text-[#ea580c] transition-colors">
                  {item.year}
                </span>
                <h4 className="font-bold text-[#431407] text-sm">{item.title}</h4>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* =========================================================
   9. OUR COMMITMENT
========================================================= */
const RecognitionSection = () => {
  const commitments = [
    {
      title: "Quality Over Quantity",
      desc: "Deep, sustained impact in communities",
      Icon: Star,
      iconColor: "bg-gradient-to-br from-[#FFB347] to-[#ea580c]"
    },
    {
      title: "Long-term Engagement",
      desc: "Building relationships that last",
      Icon: Handshake,
      iconColor: "bg-gradient-to-br from-[#ea580c] to-[#EC167F]"
    },
    {
      title: "Cultural Sensitivity",
      desc: "Respecting local values and traditions",
      Icon: Globe2,
      iconColor: "bg-gradient-to-br from-[#EC167F] to-[#F5A044]"
    },
    {
      title: "Measurable Outcomes",
      desc: "Transparent tracking of progress",
      Icon: BarChart3,
      iconColor: "bg-gradient-to-br from-[#F5A044] to-[#FFB347]"
    }
  ];

  return (
    <section className="py-16 bg-white border-y border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#431407] mb-4">
            Our Commitments
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            The principles that guide every decision we make and every program we implement
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {commitments.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center p-6 bg-gradient-to-b from-orange-50 to-white rounded-xl hover:shadow-lg transition-all duration-300 group border border-orange-100"
            >
              <div className="mb-3 flex justify-center">
                <div className={`w-12 h-12 rounded-xl ${item.iconColor} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                  <item.Icon className="text-white" size={24} />
                </div>
              </div>
              <h3 className="font-bold text-sm text-[#431407] mb-2 leading-tight">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* =========================================================
   10. OUR VISION (Aspirational Story)
========================================================= */
const StorySection = () => {
  return (
    <section className="py-20 bg-white border-y border-stone-100">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Content */}
        <div className="order-2 md:order-1">
          <div className="inline-block px-3 py-1 bg-orange-50 text-[#ea580c] text-[10px] font-bold tracking-widest uppercase mb-4 rounded-md">
            Our Vision
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#431407] mb-5">
            Creating a Ripple Effect
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
            We envision a future where every student from underserved communities has access to quality education that transforms not just their lives, but entire communities. When one student succeeds, they inspire and uplift dozens of others.
          </p>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
            Our programs are designed to create mentors, not just beneficiaries—students who will return to teach, guide, and empower the next generation.
          </p>
          <button className="group flex items-center gap-2 text-sm font-bold text-[#431407] hover:text-[#ea580c] transition-colors">
            <span>Learn About Our Approach</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Right: Image Card */}
        <div className="order-1 md:order-2 relative h-72 w-full md:w-4/5 ml-auto">
          <div className="absolute inset-0 bg-[#ea580c] rounded-2xl rotate-3 opacity-20 transform translate-x-2 translate-y-2"></div>
          <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-lg bg-slate-200">
            <img 
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop" 
              alt="Educational Vision" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#431407]/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-white font-bold text-lg">Empowering Tomorrow's Leaders</p>
              <p className="text-orange-100 text-sm">One student at a time</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

/* =========================================================
   11. COMPACT TESTIMONIAL & PARTNERS
========================================================= */
const TrustSection = () => {
  return (
    <section className="py-20 bg-[#fffdf9]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        {/* Testimonial */}
        <div className="mb-16">
          <Quote className="w-8 h-8 text-[#ea580c]/30 mx-auto mb-6" />
          <p className="font-serif text-xl md:text-2xl text-[#431407] leading-relaxed mb-8">
            "{testimonial.quote}"
          </p>
          <div className="flex flex-col items-center justify-center">
             <div className="font-bold text-[#431407]">{testimonial.name}</div>
             <div className="text-xs text-[#ea580c] uppercase tracking-wide font-semibold">{testimonial.location}</div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent mb-12"></div>

        {/* Partners */}
        <div>
          <p className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-8">
            Supported by visionaries
          </p>
          <div className="flex flex-wrap justify-center gap-10 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
            {[Users, Building2, HeartHandshake].map((Icon, i) => (
              <div key={i} className="flex flex-col items-center gap-2 group cursor-default">
                <Icon className="w-8 h-8 text-[#431407] group-hover:scale-110 transition-transform" />
                <span className="font-serif font-bold text-sm text-[#431407]">Partner {i + 1}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

/* =========================================================
   12. CALL TO ACTION
========================================================= */
const CTASection = () => {
  return (
    <section className="relative py-16 bg-gradient-to-br from-[#EC167F] via-[#ea580c] to-[#F5A044] text-white text-center overflow-hidden">
      {/* Animated background patterns */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
          animation: 'moveBackground 10s linear infinite'
        }}
      />
      
      {/* Floating orbs */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-24 h-24 bg-white/10 rounded-full blur-2xl"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
            animation: `float${i} ${6 + i}s ease-in-out infinite`
          }}
        />
      ))}
      
      <div className="relative z-10">
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 drop-shadow-lg">
          Help Us Reach More Students, Create Greater Impact
        </h2>
        <p className="max-w-2xl mx-auto mb-10 text-lg text-white/95 font-medium leading-relaxed">
          Your support directly enables quality education, structured learning, and life-changing opportunities for thousands of students.
        </p>

        <Link to="/get-involved" className="inline-flex items-center gap-2 bg-white text-[#EC167F] px-10 py-4 rounded-full font-bold shadow-2xl hover:shadow-3xl transition-all hover:scale-105">
          Amplify Our Impact
        </Link>
      </div>
      
      <style jsx>{`
        @keyframes moveBackground {
          0% { background-position: 0px 0px; }
          100% { background-position: 30px 30px; }
        }
        @keyframes float0 { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(30px, -40px); } }
        @keyframes float1 { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(-20px, -30px); } }
        @keyframes float2 { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(25px, -35px); } }
        @keyframes float3 { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(-30px, -45px); } }
        @keyframes float4 { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(20px, -25px); } }
        @keyframes float5 { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(-25px, -40px); } }
      `}</style>
    </section>
  );
};

/* =========================================================
   MAIN LAYOUT COMPONENT
========================================================= */

const ImpactPage = () => {
  return (
    <div className="bg-[#fffdf9] min-h-screen font-sans selection:bg-[#ea580c] selection:text-white">
      <SiteHeader />
      <FloatingDonateButton />
      
      <main>
        <MotionImageBackgroundHero />
        <ImpactGallery />
        <MetricsSection />
        <GeographicImpact />
        <ProgramFocusSection />
        <TransformationSection />
        <TimelineSection />
        <RecognitionSection />
        <StorySection />
        <TrustSection />
        <CTASection />
      </main>

      <SiteFooter />
    </div>
  );
};

export default ImpactPage;
