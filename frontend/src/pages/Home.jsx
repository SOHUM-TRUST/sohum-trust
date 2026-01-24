'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import FloatingDonateButton from '../components/FloatingDonateButton';

/* ================= MOTION ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1 },
};

/* ================= DATA ================= */

const slides = [
  {
    id: 1,
    subtitle: 'Committed to',
    title: 'Education for All',
    text:
      'Building inclusive, continuous, and culturally rooted educational ecosystems that empower learners across generations.',
    image: '/children1.png',
  },
  {
    id: 2,
    subtitle: 'Focused on',
    title: 'Institution Building',
    text:
      'Moving beyond short-term programs to create institutions that sustain learning, guidance, and opportunity.',
    image: '/children2.png',
  },
  {
    id: 3,
    subtitle: 'Driven by',
    title: 'Long-Term Impact',
    text:
      'Supporting learners academically, professionally, and culturally through structured educational journeys.',
    image: '/children3.png',
  },
];

const valuesInAction = [
  {
    title: 'Learning with Purpose',
    image: '/value-action-1.jpg',
    description:
      'Education that builds understanding, critical thinking, and real-world relevance instead of rote outcomes.',
  },
  {
    title: 'Respect for Heritage',
    image: '/value-action-2.jpg',
    description:
      'Learning environments grounded in Indian languages, traditions, and knowledge systems.',
  },
  {
    title: 'Mentorship & Growth',
    image: '/value-action-3.jpg',
    description:
      'Guidance-led learning that builds confidence, direction, and long-term clarity.',
  },
];

const enablement = [
  {
    title: 'Access to Education',
    desc:
      'Structured learning opportunities for students from diverse and underserved backgrounds.',
  },
  {
    title: 'Guided Learning Paths',
    desc:
      'Mentorship-driven academic and professional journeys beyond examinations.',
  },
  {
    title: 'Institutional Stability',
    desc:
      'Education systems designed to grow stronger over time, not dissolve after projects.',
  },
  {
    title: 'Cultural Continuity',
    desc:
      'Learning that preserves values, arts, and indigenous knowledge traditions.',
  },
];

const practice = [
  {
    title: 'Classroom Learning',
    image: '/work-1.jpg',
    desc: 'Strong academic foundations through structured environments.',
  },
  {
    title: 'Mentorship Sessions',
    image: '/work-2.jpg',
    desc: 'Personal guidance beyond textbooks and exams.',
  },
  {
    title: 'Community Education',
    image: '/work-3.jpg',
    desc: 'Learning initiatives embedded within communities.',
  },
  {
    title: 'Cultural Learning',
    image: '/work-4.jpg',
    desc: 'Education connected to heritage and values.',
  },
];

/* ================= PAGE ================= */

export default function Home() {
  const [index, setIndex] = useState(0);
  const [activeValue, setActiveValue] = useState(null);

  const next = useCallback(
    () => setIndex((i) => (i + 1) % slides.length),
    []
  );
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + slides.length) % slides.length),
    []
  );

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="min-h-screen bg-[#fffdf9]">
      <SiteHeader />
      <FloatingDonateButton />

      {/* ================= HERO ================= */}
      <section className="relative bg-gradient-to-br from-[#FFF8F3] via-[#FFF5ED] to-[#FFE8DB] min-h-[400px] sm:min-h-[480px] md:min-h-[550px] flex items-center overflow-hidden">
      
      {/* Large Vibrant Gradient Orbs */}
      <motion.div
        className="absolute -top-20 -right-20 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#FF6B9D]/30 via-[#FF8FAB]/25 to-[#FFB347]/30 blur-[80px]"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -40, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute -bottom-32 -left-20 w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-[#FF6347]/25 via-[#FF8C42]/30 to-[#FFA07A]/25 blur-[80px]"
        animate={{
          scale: [1.1, 1, 1.1],
          x: [0, -40, 0],
          y: [0, 30, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute top-1/3 left-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#FF9A8B]/20 via-[#FF6A88]/25 to-[#FF99AC]/20 blur-[70px]"
        animate={{
          scale: [1, 1.15, 1],
          x: [0, 30, 0],
          y: [0, -25, 0]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Colorful Floating Geometric Shapes */}
      <motion.div
        className="absolute top-24 left-[15%] w-24 h-24 bg-gradient-to-br from-[#FF6B9D]/40 to-[#FFB347]/30 rounded-2xl rotate-45 shadow-lg"
        animate={{
          y: [0, -40, 0],
          rotate: [45, 75, 45],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-32 right-[20%] w-20 h-20 bg-gradient-to-br from-[#FF8C42]/40 to-[#FF6347]/35 rounded-full shadow-lg"
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute top-[40%] right-[15%] w-16 h-16 bg-gradient-to-br from-[#FF99AC]/45 to-[#FF6A88]/40 rounded-xl rotate-12 shadow-md"
        animate={{
          y: [0, -25, 0],
          x: [0, 20, 0],
          rotate: [12, 42, 12],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-[45%] left-[20%] w-14 h-14 border-4 border-[#FF6B9D]/50 rounded-lg rotate-45 shadow-md"
        animate={{
          y: [0, 35, 0],
          rotate: [45, 75, 45],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute top-[60%] right-[35%] w-12 h-12 border-4 border-[#FF8C42]/55 rounded-full shadow-md"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Decorative Sparkles */}
      <motion.div
        className="absolute top-[20%] left-[45%] w-3 h-3 bg-[#FFD700] rounded-full shadow-[0_0_20px_#FFD700]"
        animate={{
          opacity: [0.3, 1, 0.3],
          scale: [0.8, 1.3, 0.8],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute top-[75%] left-[60%] w-2 h-2 bg-[#FF6B9D] rounded-full shadow-[0_0_15px_#FF6B9D]"
        animate={{
          opacity: [0.4, 1, 0.4],
          scale: [0.9, 1.4, 0.9],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />

      <motion.div
        className="absolute top-[35%] left-[70%] w-2.5 h-2.5 bg-[#FF8C42] rounded-full shadow-[0_0_18px_#FF8C42]"
        animate={{
          opacity: [0.3, 1, 0.3],
          scale: [0.8, 1.5, 0.8],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* VIEWPORT */}
      <div className="relative w-full z-10">
        
        {/* 'Get Involved' Badge (Floating Top Left) */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute top-[-60px] left-[7.5vw] lg:left-[calc(50vw-550px)] z-20 hidden md:flex"
        >
             <div className="bg-white/90 backdrop-blur-md px-5 py-2 rounded-full shadow-lg border border-[#D2693E]/10 flex items-center gap-2">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles size={14} className="text-[#D2693E]" />
                </motion.div>
                <span className="text-xs font-bold tracking-widest text-[#431407] uppercase">Get Involved</span>
             </div>
        </motion.div>

        {/* SLIDER TRACK */}
        <motion.div
          className="
            flex items-center gap-6
            [--slide-width:85vw] [--gap:24px] [--center-offset:7.5vw]
            md:[--slide-width:70vw] md:[--center-offset:15vw]
            lg:[--slide-width:1000px] lg:[--center-offset:calc(50vw-500px)]
          "
          animate={{
            x: `calc(-${index} * (var(--slide-width) + var(--gap)) + var(--center-offset))`,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          {slides.map((s, i) => (
            <motion.div
              key={s.id}
              className="shrink-0 w-[var(--slide-width)]"
              animate={{
                scale: i === index ? 1 : 0.92,
                opacity: i === index ? 1 : 0.4,
              }}
              transition={{ duration: 0.4 }}
            >
              {/* CARD */}
              <div className="bg-white/95 backdrop-blur-sm rounded-[32px] md:rounded-[40px] grid md:grid-cols-2 min-h-[450px] shadow-[0_20px_60px_-15px_rgba(67,20,7,0.15)] overflow-hidden border border-white relative group hover:shadow-[0_25px_70px_-15px_rgba(67,20,7,0.2)] transition-all duration-500">
                
                {/* TEXT SIDE */}
                <div className="p-8 md:p-14 flex flex-col justify-center relative bg-gradient-to-br from-white/50 to-transparent">
                  {/* Premium accent line */}
                  <div className="absolute top-0 left-0 w-20 h-1 bg-gradient-to-r from-[#D2693E] via-[#EC167F] to-transparent rounded-r-full"></div>

                  <span className="tracking-[0.25em] uppercase text-[11px] font-bold text-[#D2693E] mb-5 opacity-90">
                    {s.subtitle}
                  </span>

                  <h2 className="font-serif text-3xl md:text-5xl font-semibold text-[#431407] mb-6 leading-[1.08] tracking-tight">
                    {s.title}
                  </h2>

                  <p className="text-[15px] md:text-[17px] leading-[1.7] text-slate-600 mb-8 max-w-md">
                    {s.text}
                  </p>

                  <div className="mt-auto">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#ea580c]/80 font-bold mb-6">
                      Nurturing Minds, Illuminating Futures
                    </p>

                    <Link to="/get-involved">
                      <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="group/btn relative overflow-hidden w-fit rounded-full px-8 py-3.5 bg-gradient-to-r from-[#D2693E] to-[#C5502A] text-white font-semibold transition-all duration-300 shadow-[0_8px_20px_-4px_rgba(210,105,62,0.4)] hover:shadow-[0_12px_30px_-4px_rgba(210,105,62,0.5)]"
                      >
                        <span className="relative z-10">Support Education</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#C5502A] to-[#B54525] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                      </motion.button>
                    </Link>
                  </div>
                </div>

                {/* IMAGE SIDE */}
                <div className="relative min-h-[300px] md:min-h-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#431407]/20 via-transparent to-transparent z-10 opacity-100 group-hover:opacity-50 transition-opacity duration-500" />
                  <img
                    src={s.image}
                    alt={s.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* LEFT ARROW */}
        <button
          onClick={prev}
          className="
            hidden lg:flex absolute left-10 top-1/2 -translate-y-1/2 z-40
            bg-white/95 backdrop-blur-md p-4 rounded-full shadow-[0_8px_25px_-5px_rgba(0,0,0,0.15)] border border-white/50
            text-[#431407] hover:scale-110 hover:shadow-[0_12px_35px_-5px_rgba(0,0,0,0.2)] transition-all duration-300
          "
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={next}
          className="
            hidden lg:flex absolute right-10 top-1/2 -translate-y-1/2 z-40
            bg-white/95 backdrop-blur-md p-4 rounded-full shadow-[0_8px_25px_-5px_rgba(0,0,0,0.15)] border border-white/50
            text-[#431407] hover:scale-110 hover:shadow-[0_12px_35px_-5px_rgba(0,0,0,0.2)] transition-all duration-300
          "
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* SLIDE INDICATORS */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className="group relative"
              aria-label={`Go to slide ${i + 1}`}
            >
              <motion.div
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === index
                    ? 'bg-gradient-to-r from-[#D2693E] to-[#EC167F] scale-125 shadow-lg shadow-[#D2693E]/30'
                    : 'bg-white/40 hover:bg-white/60 group-hover:scale-110'
                }`}
                animate={i === index ? {
                  boxShadow: [
                    '0 0 8px rgba(210, 105, 62, 0.3)',
                    '0 0 15px rgba(236, 22, 127, 0.4)',
                    '0 0 8px rgba(210, 105, 62, 0.3)'
                  ]
                } : {}}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </button>
          ))}
        </div>

      </div>
    </section>
      {/* ================= WHY WE EXIST ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-20 items-center relative"
      >
        {/* Decorative background elements */}
        <motion.div 
          className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-[#ea580c]/10 to-[#EC167F]/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <div className="relative z-10">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="tracking-[0.3em] text-xs font-semibold text-[#ea580c] mb-6 uppercase"
          >
            WHY WE EXIST
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-heading text-5xl font-bold bg-gradient-to-r from-[#431407] to-[#6B2710] bg-clip-text text-transparent mb-8"
          >
            Addressing gaps education leaves behind
          </motion.h3>
          <p className="text-[17px] leading-[1.75] text-slate-700 mb-6 max-w-2xl">
            Many learners begin education but lack continuity, guidance, and
            institutional support. Short-term interventions often fail to
            create lasting impact.
          </p>
          <p className="text-[16px] text-slate-600 max-w-2xl">
            Sohum Trust exists to build long-term educational ecosystems that
            support learners across academic, professional, and cultural stages.
          </p>
        </div>
        <img
          src="/why-exist.jpg"
          className="rounded-3xl shadow-xl h-[380px] w-full object-cover"
        />
      </motion.section>

      {/* ================= CONTEXT STRIP ================= */}
<section className="bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 py-16 relative overflow-hidden">
  <motion.div 
    className="absolute inset-0 opacity-10"
    style={{ backgroundImage: `radial-gradient(circle, #ea580c 1px, transparent 1px)`, backgroundSize: '20px 20px' }}
    animate={{ backgroundPosition: ['0px 0px', '20px 20px'] }}
    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
  />
  <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-xl leading-relaxed text-slate-700"
    >
      Sohum Trust is an education-focused charitable trust dedicated to building
      <span className="font-bold bg-gradient-to-r from-[#431407] to-[#ea580c] bg-clip-text text-transparent"> long-term learning institutions </span>
      that serve students, educators, and communities across generations.
    </motion.p>
  </div>
</section>

{/* ================= WHY THIS MATTERS ================= */}
<section className="bg-gradient-to-br from-[#1f2933] via-[#2a0d04] to-[#431407] py-28 text-white relative overflow-hidden">
  <motion.div 
    className="absolute top-10 right-10 w-80 h-80 bg-[#fbbf24]/20 rounded-full blur-3xl"
    animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
    transition={{ duration: 6, repeat: Infinity }}
  />
  <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
    <motion.h2 
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      className="tracking-[0.3em] text-xs font-semibold text-[#fbbf24] mb-6 uppercase"
    >
      WHY THIS MATTERS
    </motion.h2>
    <motion.h3 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="font-heading text-4xl md:text-5xl font-bold mb-8 drop-shadow-lg"
    >
      Education without continuity fails learners
    </motion.h3>
    <motion.p 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
      className="text-lg text-slate-300 leading-relaxed font-medium"
    >
      Millions of learners start their educational journey but are left without
      guidance, mentorship, or institutional support. Without stable systems,
      potential is lost.
    </motion.p>
  </div>
</section>

{/* ================= WHO WE SERVE ================= */}
<section className="bg-gradient-to-b from-white via-blue-50/30 to-white py-32 relative overflow-hidden">
  <motion.div 
    className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-300/20 to-indigo-300/20 rounded-full blur-3xl"
    animate={{ scale: [1, 1.2, 1], x: [-20, 20, -20] }}
    transition={{ duration: 8, repeat: Infinity }}
  />
  <div className="max-w-7xl mx-auto px-6 relative z-10">

    {/* Heading */}
    <div className="text-center mb-20">
      <motion.h2 
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        className="tracking-[0.3em] text-xs font-semibold bg-gradient-to-r from-[#ea580c] to-[#EC167F] bg-clip-text text-transparent mb-4 uppercase"
      >
        WHO WE SERVE
      </motion.h2>
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-5xl font-bold bg-gradient-to-r from-[#431407] to-[#6B2710] bg-clip-text text-transparent"
      >
        Supporting learners at every stage
      </motion.h3>
    </div>

    {/* Cards Grid */}
    <div className="grid md:grid-cols-2 gap-10">

      {[
        {
          title: 'Students',
          desc:
            'Supporting students with structured learning, guidance, and long-term academic pathways that go beyond short-term interventions.',
          image: '/serve-students.jpg',
        },
        {
          title: 'Educators & Mentors',
          desc:
            'Empowering teachers and mentors with institutional support, resources, and environments that value depth over speed.',
          image: '/serve-educators.jpg',
        },
        {
          title: 'Communities',
          desc:
            'Embedding education within communities to ensure learning remains culturally grounded, accessible, and sustainable.',
          image: '/serve-communities.jpg',
        },
        {
          title: 'Institutions',
          desc:
            'Strengthening schools and learning centres so they evolve into resilient institutions that serve generations.',
          image: '/serve-institutions.jpg',
        },
      ].map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15 }}
          whileHover={{ scale: 1.03, y: -5 }}
          className="relative h-[280px] rounded-[28px] overflow-hidden shadow-2xl cursor-pointer"
        >
          {/* Background Image */}
          <img
            src={item.image}
            alt={item.title}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-10">
            <h4 className="text-3xl font-semibold text-white mb-4">
              {item.title}
            </h4>

            <p className="text-[16px] leading-[1.7] text-white/90 max-w-md">
              {item.desc}
            </p>
          </div>
        </motion.div>
      ))}

    </div>
  </div>
</section>
      {/* ================= WHAT WE ENABLE ================= */}
<section className="py-16 bg-[#fff7ed]">
  <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-start">

    {/* LEFT CONTENT */}
    <div>
      <p className="tracking-[0.3em] text-xs font-semibold text-[#ea580c] mb-3">
        WHAT WE ENABLE
      </p>

      <h2 className="font-heading text-3xl md:text-4xl font-semibold text-[#431407] mb-5 leading-tight">
        Education that continues,<br />not ends
      </h2>

      <p className="text-[15px] leading-[1.7] text-slate-600 max-w-md">
        Sohum Trust builds learning ecosystems that support students across
        stages — academically, professionally, and culturally.
      </p>
    </div>

    {/* RIGHT IMAGE POINTS */}
    <div className="space-y-6">

      {[
        {
          title: 'Access to Education',
          desc: 'Structured learning opportunities for students from underserved backgrounds.',
        },
        {
          title: 'Guided Learning Paths',
          desc: 'Mentorship-driven academic and professional journeys beyond exams.',
        },
        {
          title: 'Institutional Stability',
          desc: 'Education systems designed to grow stronger over time.',
        },
        {
          title: 'Cultural Continuity',
          desc: 'Learning that preserves values, arts, and indigenous knowledge.',
        },
      ].map((item) => (
        <div
          key={item.title}
          className="flex items-start gap-4"
        >
          {/* IMAGE / ICON HOLDER */}
          <div className="w-12 h-12 rounded-xl bg-[#fef3e8] flex items-center justify-center shrink-0">
            {/* replace img src later */}
            <div className="w-6 h-6 bg-[#ea580c]/30 rounded-md" />
          </div>

          {/* TEXT */}
          <div>
            <h3 className="font-heading text-base font-semibold text-[#431407] mb-1">
              {item.title}
            </h3>
            <p className="text-[14px] leading-[1.6] text-slate-600">
              {item.desc}
            </p>
          </div>
        </div>
      ))}

    </div>
  </div>
</section>

      {/* ================= VALUES IN ACTION ================= */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <h2 className="text-center tracking-[0.3em] text-xs font-semibold text-[#ea580c] mb-14">
          VALUES IN ACTION
        </h2>

        <div className="grid md:grid-cols-3 rounded-3xl overflow-hidden shadow-2xl">
          {valuesInAction.map((v) => (
            <button
              key={v.title}
              onClick={() => setActiveValue(v)}
              className="relative h-[260px] md:h-[340px]"
            >
              <img src={v.image} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 flex items-end p-6">
                <h3 className="text-white text-xl font-semibold">
                  {v.title}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {activeValue && (
          <motion.div
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveValue(null)}
          >
            <motion.div
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-xl w-full overflow-hidden"
            >
              <img src={activeValue.image} className="h-[200px] w-full object-cover" />
              <div className="p-8">
                <h3 className="font-heading text-2xl font-bold text-[#431407] mb-4">
                  {activeValue.title}
                </h3>
                <p className="text-[15px] leading-[1.7] text-slate-600">
                  {activeValue.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="bg-gradient-to-b from-purple-50/50 via-pink-50/30 to-white py-24 relative overflow-hidden">
        <motion.div 
          className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          
          {/* Heading */}
          <motion.h2 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="text-center tracking-[0.28em] text-xs font-semibold bg-gradient-to-r from-[#ea580c] to-[#EC167F] text-transparent bg-clip-text mb-4 uppercase"
          >
            HOW YOUR SUPPORT HELPS
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-lg text-slate-700 font-medium max-w-2xl mx-auto mb-12"
          >
            Every contribution strengthens institutions, educators, and learning
            systems — creating impact that lasts beyond individuals.
          </motion.p>

    {/* Impact Grid */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        {
          title: 'Learning Infrastructure',
          desc: 'Classrooms, libraries, digital tools, and learning spaces.',
          icon: '🏫',
          gradient: 'from-blue-50 to-cyan-50 border-blue-200'
        },
        {
          title: 'Mentorship Programs',
          desc: 'Guided academic and career pathways at critical stages.',
          icon: '👨‍🏫',
          gradient: 'from-purple-50 to-pink-50 border-purple-200'
        },
        {
          title: 'Educator Development',
          desc: 'Long-term training and support for teachers and mentors.',
          icon: '📖',
          gradient: 'from-emerald-50 to-teal-50 border-emerald-200'
        },
        {
          title: 'Cultural & Community Initiatives',
          desc: 'Preserving knowledge systems and community-led learning.',
          icon: '🎭',
          gradient: 'from-orange-50 to-amber-50 border-orange-200'
        },
      ].map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ y: -8, scale: 1.03 }}
          className={`bg-gradient-to-br ${item.gradient} border-2 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all text-center cursor-pointer`}
        >
          <motion.div
            whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2 }}
            transition={{ duration: 0.5 }}
            className="text-4xl mb-4"
          >
            {item.icon}
          </motion.div>
          <h3 className="font-heading text-lg font-bold text-[#431407] mb-3">
            {item.title}
          </h3>
          <p className="text-sm leading-relaxed text-slate-700">
            {item.desc}
          </p>
        </motion.div>
      ))}
    </div>

  </div>
</section>

      {/* ================= CTA ================= */}
      <section className="relative py-16 bg-gradient-to-br from-[#EC167F] via-[#ea580c] to-[#F5A044] text-white text-center overflow-hidden">
        {/* Animated background patterns */}
        <motion.div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}
          animate={{ backgroundPosition: ['0px 0px', '30px 30px'] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Floating orbs */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-24 h-24 bg-white/10 rounded-full blur-2xl"
            style={{ left: `${15 + i * 15}%`, top: `${20 + (i % 3) * 25}%` }}
            animate={{ y: [0, -40, 0], x: [0, 30, 0], scale: [1, 1.3, 1] }}
            transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
          />
        ))}
        
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl md:text-6xl font-bold mb-8 drop-shadow-lg">
              Transform Lives Through Quality Education
            </h2>
            <p className="max-w-2xl mx-auto mb-12 text-xl text-white/95 font-medium">
              Discover how you can support students, empower teachers, and build educational ecosystems that last
            </p>
            <div className="flex justify-center gap-6 flex-wrap">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/about"
                  className="inline-block bg-white text-[#EC167F] px-12 py-5 rounded-full font-bold shadow-2xl hover:shadow-3xl transition-all"
                >
                  Learn About Us
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/get-involved"
                  className="inline-block border-2 border-white px-12 py-5 rounded-full font-bold hover:bg-white hover:text-[#EC167F] transition-all"
                >
                  Support the Mission
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
