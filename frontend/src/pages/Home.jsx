'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

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

      {/* ================= HERO ================= */}
      <section className="relative bg-[#F2EAE2] py-14 min-h-[350px] flex items-center overflow-hidden">
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
          {/* CARD - Increased slightly to 450px */}
          <div className="bg-[#FAF7F4] rounded-[40px] grid md:grid-cols-2 min-h-[450px] shadow-2xl shadow-black/5 overflow-hidden">
            
            {/* TEXT - Balanced padding for the 450px height */}
            <div className="p-10 md:p-14 flex flex-col justify-center">
              <span className="tracking-[0.2em] uppercase text-[13px] font-bold text-[#D2693E] mb-4">
                {s.subtitle}
              </span>

              <h2 className="font-serif text-4xl md:text-5xl font-medium text-[#431407] mb-6 leading-[1.1]">
                {s.title}
              </h2>

              <p className="text-[17px] leading-relaxed text-slate-600 mb-8 max-w-sm">
                {s.text}
              </p>

              <p className="text-sm uppercase tracking-widest text-[#ea580c] font-semibold mb-6">
                Nurturing Minds, Illuminating Futures
              </p>

              <Link to="/get-involved">
                <button className="w-fit rounded-full px-10 py-3.5 bg-[#D2693E] hover:bg-[#bc5a32] text-white font-semibold transition-colors">
                  Support Education
                </button>
              </Link>
            </div>

            {/* IMAGE - min-h set to 250px for mobile, full height for desktop */}
            <div className="relative min-h-[250px] md:min-h-full">
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
        className="max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-20 items-center"
      >
        <div>
          <h2 className="tracking-[0.3em] text-xs font-semibold text-[#ea580c] mb-6">
            WHY WE EXIST
          </h2>
          <h3 className="font-heading text-5xl font-bold text-[#431407] mb-8">
            Addressing gaps education leaves behind
          </h3>
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
<section className="bg-[#fff7ed] py-16">
  <div className="max-w-5xl mx-auto px-6 text-center">
    <p className="text-xl leading-relaxed text-slate-700">
      Sohum Trust is an education-focused charitable trust dedicated to building
      <span className="font-semibold text-[#431407]"> long-term learning institutions </span>
      that serve students, educators, and communities across generations.
    </p>
  </div>
</section>

{/* ================= WHY THIS MATTERS ================= */}
<section className="bg-[#1f2933] py-28 text-white">
  <div className="max-w-5xl mx-auto px-6 text-center">
    <h2 className="tracking-[0.3em] text-xs font-semibold text-[#fbbf24] mb-6">
      WHY THIS MATTERS
    </h2>
    <h3 className="font-heading text-4xl md:text-5xl font-bold mb-8">
      Education without continuity fails learners
    </h3>
    <p className="text-lg text-slate-300 leading-relaxed">
      Millions of learners start their educational journey but are left without
      guidance, mentorship, or institutional support. Without stable systems,
      potential is lost.
    </p>
  </div>
</section>

{/* ================= WHO WE SERVE ================= */}
<section className="bg-[#fffdf9] py-32">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-20">
      <h2 className="tracking-[0.3em] text-xs font-semibold text-[#ea580c] mb-4">
        WHO WE SERVE
      </h2>
      <h3 className="font-heading text-5xl font-bold text-[#431407]">
        Supporting learners at every stage
      </h3>
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
      ].map((item) => (
        <div
          key={item.title}
          className="relative h-[280px] rounded-[28px] overflow-hidden shadow-2xl"
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
        </div>
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

      <section className="bg-[#fff7ed] py-20">
  <div className="max-w-6xl mx-auto px-6">
    
    {/* Heading */}
    <h2 className="text-center tracking-[0.28em] text-xs font-semibold text-[#ea580c] mb-4">
      HOW YOUR SUPPORT HELPS
    </h2>

    <p className="text-center text-[16px] text-slate-600 max-w-2xl mx-auto mb-12">
      Every contribution strengthens institutions, educators, and learning
      systems — creating impact that lasts beyond individuals.
    </p>

    {/* Impact Grid */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        {
          title: 'Learning Infrastructure',
          desc: 'Classrooms, libraries, digital tools, and learning spaces.',
        },
        {
          title: 'Mentorship Programs',
          desc: 'Guided academic and career pathways at critical stages.',
        },
        {
          title: 'Educator Development',
          desc: 'Long-term training and support for teachers and mentors.',
        },
        {
          title: 'Cultural & Community Initiatives',
          desc: 'Preserving knowledge systems and community-led learning.',
        },
      ].map((item) => (
        <div
          key={item.title}
          className="bg-white rounded-2xl p-6 shadow-md text-center"
        >
          <h3 className="font-heading text-lg font-semibold text-[#431407] mb-2">
            {item.title}
          </h3>
          <p className="text-[14.5px] leading-[1.65] text-slate-600">
            {item.desc}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>

      {/* ================= CTA ================= */}
      <section className="bg-gradient-to-r from-[#ea580c] to-[#c2410c] py-28 text-center text-white">
        <h2 className="font-heading text-5xl font-bold mb-10">
          Join us in shaping futures through education
        </h2>
        <div className="flex justify-center gap-6 flex-wrap">
          <Link
            to="/about"
            className="bg-white text-[#c2410c] px-10 py-5 rounded-full font-semibold"
          >
            Learn About Us
          </Link>
          <Link
            to="/get-involved"
            className="border-2 border-white px-10 py-5 rounded-full font-semibold"
          >
            Support the Mission
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
