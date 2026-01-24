'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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
    subtitle: 'Committed to',
    title: 'Education for All',
    text:
      'Building inclusive, continuous, and culturally rooted educational ecosystems that empower learners across generations.',
    image: '/children1.png',
  },
  {
    subtitle: 'Focused on',
    title: 'Institution Building',
    text:
      'Moving beyond short-term programs to create institutions that sustain learning, guidance, and opportunity.',
    image: '/children2.png',
  },
  {
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
      <section className="relative bg-[#F2EAE2] py-8 sm:py-10 md:py-14 min-h-[450px] sm:min-h-[500px] md:min-h-[550px] flex items-center overflow-hidden">
  {/* VIEWPORT */}
  <div className="relative w-full">

    {/* SLIDER TRACK */}
    <motion.div
      className="
        flex items-center gap-6
        [--slide-width:85vw] [--gap:24px] [--center-offset:7.5vw]
        md:[--slide-width:70vw] md:[--center-offset:15vw]
        lg:[--slide-width:1000px] lg:[--center-offset:calc(50vw-550px)]
      "
      animate={{
        x: `calc(-${index} * (var(--slide-width) + var(--gap)) + var(--center-offset))`,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      {slides.map((s, i) => (
        <motion.div
          key={i}
          className="shrink-0 w-[var(--slide-width)]"
          animate={{
            scale: i === index ? 1 : 0.95,
            opacity: i === index ? 1 : 0.5,
          }}
          transition={{ duration: 0.4 }}
        >
          {/* CARD */}
          <div className="bg-[#FAF7F4] rounded-[20px] sm:rounded-[30px] md:rounded-[40px] grid md:grid-cols-2 min-h-[350px] sm:min-h-[380px] md:min-h-[400px] shadow-2xl shadow-black/5 overflow-hidden">
            
            {/* TEXT */}
            <div className="p-5 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-center">
              <span className="tracking-[0.15em] sm:tracking-[0.2em] uppercase text-[11px] sm:text-[12px] md:text-[13px] font-bold text-[#D2693E] mb-3 sm:mb-4">
                {s.subtitle}
              </span>

              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-medium text-[#431407] mb-4 sm:mb-5 leading-[1.1]">
                {s.title}
              </h2>

              <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed text-slate-600 mb-5 sm:mb-6 max-w-sm">
                {s.text}
              </p>

              <p className="text-xs sm:text-sm uppercase tracking-widest text-[#ea580c] font-semibold mb-5 sm:mb-6">
                Nurturing Minds, Illuminating Futures
              </p>

              <Link to="/get-involved">
                <button className="w-fit rounded-full px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-3.5 text-sm sm:text-base bg-[#D2693E] hover:bg-[#bc5a32] text-white font-semibold transition-colors">
                  Support Education
                </button>
              </Link>
            </div>

            {/* IMAGE */}
            <div className="relative min-h-[200px] sm:min-h-[220px] md:min-h-full">
              <img
                src={s.image}
                alt={s.title}
                className="absolute inset-0 w-full h-full object-cover"
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
        bg-white p-5 rounded-full shadow-xl
        hover:scale-110 transition-transform
      "
    >
      <ChevronLeft className="w-6 h-6 text-black" />
    </button>

    {/* RIGHT ARROW */}
    <button
      onClick={next}
      className="
        hidden lg:flex absolute right-10 top-1/2 -translate-y-1/2 z-40
        bg-white p-5 rounded-full shadow-xl
        hover:scale-110 transition-transform
      "
    >
      <ChevronRight className="w-6 h-6 text-black" />
    </button>

  </div>
</section>
      {/* ================= WHY WE EXIST ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 md:py-28 lg:py-32 grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-center relative"
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
            className="tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-xs font-semibold text-[#ea580c] mb-4 sm:mb-6 uppercase"
          >
            WHY WE EXIST
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#431407] to-[#6B2710] bg-clip-text text-transparent mb-5 sm:mb-6 md:mb-8"
          >
            Addressing gaps education leaves behind
          </motion.h3>
          <p className="text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] text-slate-700 mb-4 sm:mb-6 max-w-2xl">
            Many learners begin education but lack continuity, guidance, and
            institutional support. Short-term interventions often fail to
            create lasting impact.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px] text-slate-600 max-w-2xl">
            Sohum Trust exists to build long-term educational ecosystems that
            support learners across academic, professional, and cultural stages.
          </p>
        </div>
        <img
          src="/why-exist.jpg"
          className="rounded-2xl sm:rounded-3xl shadow-xl h-[250px] sm:h-[300px] md:h-[350px] lg:h-[380px] w-full object-cover"
        />
      </motion.section>

      {/* ================= CONTEXT STRIP ================= */}
<section className="bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 py-8 sm:py-12 md:py-16 relative overflow-hidden">
  <motion.div 
    className="absolute inset-0 opacity-10"
    style={{ backgroundImage: `radial-gradient(circle, #ea580c 1px, transparent 1px)`, backgroundSize: '20px 20px' }}
    animate={{ backgroundPosition: ['0px 0px', '20px 20px'] }}
    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
  />
  <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-base sm:text-lg md:text-xl leading-relaxed text-slate-700"
    >
      Sohum Trust is an education-focused charitable trust dedicated to building
      <span className="font-bold bg-gradient-to-r from-[#431407] to-[#ea580c] bg-clip-text text-transparent"> long-term learning institutions </span>
      that serve students, educators, and communities across generations.
    </motion.p>
  </div>
</section>

{/* ================= WHY THIS MATTERS ================= */}
<section className="bg-gradient-to-br from-[#1f2933] via-[#2a0d04] to-[#431407] py-12 sm:py-16 md:py-20 lg:py-28 text-white relative overflow-hidden">
  <motion.div 
    className="absolute top-10 right-10 w-80 h-80 bg-[#fbbf24]/20 rounded-full blur-3xl"
    animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
    transition={{ duration: 6, repeat: Infinity }}
  />
  <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
    <motion.h2 
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      className="tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-xs font-semibold text-[#fbbf24] mb-4 sm:mb-6 uppercase"
    >
      WHY THIS MATTERS
    </motion.h2>
    <motion.h3 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-5 sm:mb-6 md:mb-8 drop-shadow-lg"
    >
      Education without continuity fails learners
    </motion.h3>
    <motion.p 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
      className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium"
    >
      Millions of learners start their educational journey but are left without
      guidance, mentorship, or institutional support. Without stable systems,
      potential is lost.
    </motion.p>
  </div>
</section>

{/* ================= WHO WE SERVE ================= */}
<section className="bg-gradient-to-b from-white via-blue-50/30 to-white py-12 sm:py-20 md:py-28 lg:py-32 relative overflow-hidden">
  <motion.div 
    className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-300/20 to-indigo-300/20 rounded-full blur-3xl"
    animate={{ scale: [1, 1.2, 1], x: [-20, 20, -20] }}
    transition={{ duration: 8, repeat: Infinity }}
  />
  <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

    {/* Heading */}
    <div className="text-center mb-10 sm:mb-14 md:mb-20">
      <motion.h2 
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        className="tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-xs font-semibold bg-gradient-to-r from-[#ea580c] to-[#EC167F] bg-clip-text text-transparent mb-3 sm:mb-4 uppercase"
      >
        WHO WE SERVE
      </motion.h2>
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#431407] to-[#6B2710] bg-clip-text text-transparent"
      >
        Supporting learners at every stage
      </motion.h3>
    </div>

    {/* Cards Grid */}
    <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10">

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
          className="relative h-[240px] sm:h-[260px] md:h-[280px] rounded-[20px] sm:rounded-[24px] md:rounded-[28px] overflow-hidden shadow-2xl cursor-pointer"
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
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5 sm:px-8 md:px-10">
            <h4 className="text-2xl sm:text-2xl md:text-3xl font-semibold text-white mb-3 sm:mb-4">
              {item.title}
            </h4>

            <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-[1.6] sm:leading-[1.7] text-white/90 max-w-md">
              {item.desc}
            </p>
          </div>
        </motion.div>
      ))}

    </div>
  </div>
</section>
      {/* ================= WHAT WE ENABLE ================= */}
<section className="py-8 sm:py-12 md:py-16 bg-[#fff7ed]">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-14 items-start">

    {/* LEFT CONTENT */}
    <div>
      <p className="tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-xs font-semibold text-[#ea580c] mb-2 sm:mb-3">
        WHAT WE ENABLE
      </p>

      <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-[#431407] mb-4 sm:mb-5 leading-tight">
        Education that continues,<br />not ends
      </h2>

      <p className="text-[14px] sm:text-[15px] leading-[1.7] text-slate-600 max-w-md">
        Sohum Trust builds learning ecosystems that support students across
        stages — academically, professionally, and culturally.
      </p>
    </div>

    {/* RIGHT IMAGE POINTS */}
    <div className="space-y-5 sm:space-y-6">

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
          className="flex items-start gap-3 sm:gap-4"
        >
          {/* IMAGE / ICON HOLDER */}
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#fef3e8] flex items-center justify-center shrink-0">
            {/* replace img src later */}
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#ea580c]/30 rounded-md" />
          </div>

          {/* TEXT */}
          <div>
            <h3 className="font-heading text-[15px] sm:text-base font-semibold text-[#431407] mb-1">
              {item.title}
            </h3>
            <p className="text-[13px] sm:text-[14px] leading-[1.6] text-slate-600">
              {item.desc}
            </p>
          </div>
        </div>
      ))}

    </div>
  </div>
</section>

      {/* ================= VALUES IN ACTION ================= */}
      <section className="py-12 sm:py-20 md:py-28 lg:py-32 max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-center tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-xs font-semibold text-[#ea580c] mb-8 sm:mb-10 md:mb-14">
          VALUES IN ACTION
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl gap-0.5 sm:gap-0">
          {valuesInAction.map((v) => (
            <button
              key={v.title}
              onClick={() => setActiveValue(v)}
              className="relative h-[200px] sm:h-[240px] md:h-[280px] lg:h-[340px]"
            >
              <img src={v.image} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 flex items-end p-4 sm:p-5 md:p-6">
                <h3 className="text-white text-lg sm:text-xl font-semibold">
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
              Join us in shaping futures through education
            </h2>
            <p className="max-w-2xl mx-auto mb-12 text-xl text-white/95 font-medium">
              Be part of a movement that transforms lives and builds sustainable educational institutions
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
