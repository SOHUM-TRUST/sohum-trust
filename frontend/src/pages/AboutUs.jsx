'use client';

import React from 'react';
import { Heart, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import FloatingDonateButton from '../components/FloatingDonateButton';

/* ================= ABOUT PAGE ================= */

const AboutUs = () => {
  return (
    <div className="bg-[#fffdf9] min-h-screen">
      <SiteHeader />
      <FloatingDonateButton />

      {/* ================= HERO WITH LOGO BACKGROUND ================= */}
      <section className="relative overflow-hidden min-h-[400px] sm:min-h-[480px] md:min-h-[550px] flex items-center bg-gradient-to-br from-[#fff1e6] via-[#fff7ed] to-[#fffdf9]">

  {/* Animated Grid Pattern */}
  <div className="absolute inset-0 pointer-events-none opacity-20">
    <div className="absolute inset-0" style={{
      backgroundImage: `linear-gradient(to right, #ea580c 1px, transparent 1px),
                       linear-gradient(to bottom, #ea580c 1px, transparent 1px)`,
      backgroundSize: '60px 60px',
    }}>
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to right, #EC167F 1px, transparent 1px),
                           linear-gradient(to bottom, #EC167F 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '60px 60px']
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  </div>

  {/* Animated Gradient Orbs */}
  <motion.div
    className="absolute top-20 left-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#FF6B9D]/25 to-[#FFB347]/20 blur-3xl"
    animate={{
      scale: [1, 1.3, 1],
      x: [0, 50, 0],
      y: [0, -30, 0]
    }}
    transition={{
      duration: 15,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
  
  <motion.div
    className="absolute bottom-10 right-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#EC167F]/20 to-[#F5A044]/25 blur-3xl"
    animate={{
      scale: [1.2, 1, 1.2],
      x: [0, -40, 0],
      y: [0, 30, 0]
    }}
    transition={{
      duration: 18,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />

  {/* Floating Geometric Shapes */}
  <motion.div
    className="absolute top-[15%] left-[15%] w-20 h-20 border-2 border-[#ea580c]/30 rounded-xl"
    animate={{
      rotate: [0, 360],
      y: [0, -20, 0]
    }}
    transition={{
      rotate: { duration: 20, repeat: Infinity, ease: "linear" },
      y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
    }}
  />

  <motion.div
    className="absolute top-[25%] right-[20%] w-16 h-16 bg-gradient-to-br from-[#EC167F]/20 to-[#FF8C42]/20 rounded-full"
    animate={{
      scale: [1, 1.3, 1],
      y: [0, 25, 0]
    }}
    transition={{
      duration: 7,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />

  <motion.div
    className="absolute bottom-[20%] left-[25%] w-12 h-12 border-2 border-[#F5A044]/40 rounded-lg"
    animate={{
      rotate: [45, 405],
      scale: [1, 1.2, 1]
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />

  <motion.div
    className="absolute bottom-[30%] right-[15%] w-14 h-14 bg-gradient-to-br from-[#FFB347]/25 to-[#ea580c]/25 rounded-2xl"
    animate={{
      rotate: [0, -360],
      x: [0, 20, 0]
    }}
    transition={{
      rotate: { duration: 15, repeat: Infinity, ease: "linear" },
      x: { duration: 6, repeat: Infinity, ease: "easeInOut" }
    }}
  />

  {/* Background Logo */}
  <div className="absolute inset-0 pointer-events-none">
    <div
      className="
        absolute left-1/2 top-1/2
        -translate-x-1/2 -translate-y-1/2

        w-[350px] sm:w-[450px] md:w-[550px] lg:w-[750px]
        h-[350px] sm:h-[450px] md:h-[550px] lg:h-[750px]

        bg-gradient-to-br
        from-[#D4145A]
        via-[#EC167F]
        to-[#F39C3D]

        opacity-[0.28]
        blur-[0.5px]

        drop-shadow-[0_0_70px_rgba(236,22,127,0.45)]
        drop-shadow-[0_0_120px_rgba(243,156,61,0.25)]

        mask-logo
        -webkit-mask-logo
      "
    />
  </div>

  {/* Sparkle Effects */}
  {[...Array(5)].map((_, i) => (
    <motion.div
      key={i}
      className="absolute w-2 h-2 bg-gradient-to-br from-white to-[#FFB347] rounded-full"
      style={{
        left: `${20 + i * 15}%`,
        top: `${30 + (i % 3) * 20}%`,
      }}
      animate={{
        scale: [0, 1, 0],
        opacity: [0, 1, 0]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        delay: i * 0.6,
        ease: "easeInOut"
      }}
    />
  ))}

  {/* Content */}
  <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center py-10 sm:py-12 md:py-16">
    <motion.p 
      className="uppercase tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.35em] text-[10px] sm:text-xs font-semibold text-[#ea580c] mb-4 sm:mb-5 md:mb-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      ABOUT SOHUM TRUST
    </motion.p>

    <motion.h1 
      className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#431407] leading-tight mb-4 sm:mb-5 md:mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      Building education that lasts generations
    </motion.h1>

    <motion.p 
      className="max-w-3xl mx-auto text-[15px] sm:text-[16px] md:text-[17px] leading-[1.7] sm:leading-[1.8] text-slate-600"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      Sohum Trust is committed to creating long-term educational institutions
      that empower individuals, preserve culture, and strengthen communities.
    </motion.p>
  </div>

  {/* Bottom fade */}
  <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-[#fffdf9]" />
</section>

      <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden bg-gradient-to-br from-white via-[#FFFAF5] to-[#FFF5EB]">
  {/* Multiple animated gradient orbs */}
  <motion.div
    className="absolute top-10 right-20 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#FF6B9D]/20 to-[#FFB347]/15 blur-3xl"
    animate={{
      scale: [1, 1.2, 1],
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
    className="absolute bottom-20 left-10 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#FF8C42]/15 to-[#EC167F]/20 blur-3xl"
    animate={{
      scale: [1.1, 1, 1.1],
      x: [0, 30, 0],
      y: [0, -25, 0]
    }}
    transition={{
      duration: 14,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />

  {/* Decorative floating elements */}
  <motion.div
    className="absolute top-32 left-20 w-20 h-20 border-2 border-[#FF6B9D]/30 rounded-xl rotate-45"
    animate={{
      y: [0, -20, 0],
      rotate: [45, 65, 45]
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />

  <motion.div
    className="absolute bottom-40 right-32 w-16 h-16 bg-gradient-to-br from-[#FFB347]/20 to-[#FF8C42]/20 rounded-full"
    animate={{
      y: [0, 25, 0],
      scale: [1, 1.15, 1]
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
  
  <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="inline-block mb-4"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <p className="uppercase tracking-[0.3em] text-[11px] font-bold bg-gradient-to-r from-[#ea580c] via-[#EC167F] to-[#F5A044] bg-clip-text text-transparent bg-[length:200%_auto]">
            Who We Are
          </p>
        </motion.div>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#431407] mb-8 leading-tight">
          A long-term institution builder in <span className="bg-gradient-to-r from-[#ea580c] to-[#EC167F] bg-clip-text text-transparent">education</span>
        </h2>

        <div className="space-y-6 text-[16px] sm:text-[17px] leading-[1.85] text-slate-700">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Sohum Trust is a Karnataka-registered educational trust focused on
            building institutions that endure beyond individuals, funding cycles,
            and short-term initiatives.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            We operate across academic, professional, vocational, cultural, and
            research domains — creating structured ecosystems instead of isolated
            programs.
          </motion.p>
          <motion.div
            className="relative pl-6 border-l-4 border-gradient-to-b from-[#ea580c] to-[#EC167F]"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#ea580c] via-[#EC167F] to-[#F5A044] rounded-r-full" />
            <p className="font-semibold text-[#431407] text-lg">
              Our work is designed for continuity, depth, and relevance throughout a
              learner's journey.
            </p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        className="space-y-6"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
      {[
        ['Registered & Accountable', 'Legally registered trust with transparent governance and clear accountability frameworks.', 'from-[#FFF0F0] to-white', 'from-[#ea580c] to-[#dc2626]'],
        ['Institution-First Approach', 'We build schools, academies, and comprehensive learning systems that create lasting impact.', 'from-[#FFF8F0] to-white', 'from-[#EC167F] to-[#ea580c]'],
        ['Multi-Domain Education', 'Academic, vocational, cultural, and research initiatives integrated into cohesive programs.', 'from-[#FFF5EB] to-white', 'from-[#F5A044] to-[#EC167F]'],
      ].map(([title, desc, bgGradient, accentGradient], index) => (
        <motion.div 
          key={title} 
          className={`group relative bg-gradient-to-br ${bgGradient} rounded-2xl p-8 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_60px_-12px_rgba(234,88,12,0.3)] transition-all duration-500 border-2 border-white overflow-hidden`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
          whileHover={{ y: -8, scale: 1.02 }}
        >
          {/* Animated gradient background on hover */}
          <div className={`absolute inset-0 bg-gradient-to-br ${accentGradient} opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500`} />
          
          {/* Side number badge */}
          <div className={`absolute -left-4 top-6 w-12 h-12 rounded-full bg-gradient-to-br ${accentGradient} shadow-lg flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-500`}>
            {index + 1}
          </div>
          
          {/* Animated corner decoration */}
          <motion.div 
            className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${accentGradient} opacity-10 rounded-bl-full`}
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Content */}
          <div className="relative z-10 ml-8">
            <h4 className="font-bold text-xl text-[#431407] mb-3 group-hover:text-[#ea580c] transition-colors">
              {title}
            </h4>
            <p className="text-[15px] leading-relaxed text-slate-700">
              {desc}
            </p>
          </div>

          {/* Bottom animated line */}
          <motion.div 
            className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${accentGradient} opacity-0 group-hover:opacity-100`}
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      ))}
    </motion.div>
    </div>
  </div>
</section>

<section className="relative py-20 sm:py-24 md:py-28 bg-gradient-to-br from-[#FFF0F5] via-[#FFF8F0] to-[#FFFBF7] overflow-hidden">
  {/* Multiple vibrant animated orbs */}
  <motion.div
    className="absolute top-10 right-10 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#FF6B9D]/25 to-[#FFB347]/20 blur-3xl"
    animate={{
      scale: [1, 1.3, 1],
      x: [0, -50, 0],
      y: [0, 40, 0]
    }}
    transition={{
      duration: 15,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
  
  <motion.div
    className="absolute bottom-0 left-0 w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-[#FF8C42]/20 to-[#EC167F]/25 blur-3xl"
    animate={{
      scale: [1.2, 1, 1.2],
      x: [0, 40, 0],
      y: [0, -30, 0]
    }}
    transition={{
      duration: 13,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />

  {/* Floating decorative shapes */}
  <motion.div
    className="absolute top-40 left-[15%] w-16 h-16 border-2 border-[#EC167F]/40 rounded-lg rotate-12"
    animate={{
      y: [0, -25, 0],
      rotate: [12, 32, 12]
    }}
    transition={{
      duration: 7,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />

  <motion.div
    className="absolute bottom-32 right-[20%] w-14 h-14 bg-gradient-to-br from-[#FFB347]/30 to-[#FF8C42]/30 rounded-full"
    animate={{
      y: [0, 20, 0],
      scale: [1, 1.2, 1]
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
  
  <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
    
    {/* Title */}
    <motion.div 
      className="mb-16 text-center"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="inline-block mb-4"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <p className="uppercase tracking-[0.3em] text-[11px] font-bold bg-gradient-to-r from-[#ea580c] via-[#EC167F] to-[#F5A044] bg-clip-text text-transparent bg-[length:200%_auto]">
          Why We Exist
        </p>
      </motion.div>
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#431407] max-w-3xl mx-auto leading-tight">
        Addressing the <span className="bg-gradient-to-r from-[#ea580c] to-[#EC167F] bg-clip-text text-transparent">gaps in education</span>
      </h2>
    </motion.div>

    {/* Content Grid */}
    <div className="grid md:grid-cols-3 gap-8">
      
      {[
        ['The Challenge', 'While access to education has improved, many learners still lack continuity, mentorship, and institutional support needed for long-term success.', 'from-[#FFF0F0] via-[#FFE8E8] to-[#FFE0E0]', 'from-[#dc2626] to-[#ea580c]'],
        ['The Gap', 'Short-term programs often fail to create lasting impact, leaving students without clear learning pathways or career progression frameworks.', 'from-[#FFF8F0] via-[#FFF0E6] to-[#FFE8DB]', 'from-[#ea580c] to-[#EC167F]'],
        ['Our Purpose', 'Sohum Trust exists to bridge this gap by building enduring educational institutions that support learners throughout their entire journey.', 'from-[#431407] via-[#6B2710] to-[#8B3513]', 'from-[#EC167F] to-[#F5A044]'],
      ].map(([title, desc, gradient, accentGradient], index) => (
        <motion.div
          key={title}
          className={`group relative ${index === 2 ? 'text-white' : ''}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.15 }}
          whileHover={{ y: -12, scale: 1.03 }}
        >
          <div className={`relative h-full bg-gradient-to-br ${gradient} rounded-3xl p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] group-hover:shadow-[0_25px_70px_-15px_rgba(234,88,12,0.4)] transition-all duration-500 border-2 ${index === 2 ? 'border-[#6B2710]' : 'border-white'} overflow-hidden`}>
            
            {/* Animated glow effect */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${accentGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            {/* Pulsing number badge */}
            <motion.div
              className={`absolute -top-3 -right-3 w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl ${index === 2 ? 'bg-gradient-to-br from-white/30 to-white/10 text-white' : `bg-gradient-to-br ${accentGradient} text-white`} shadow-xl`}
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {index + 1}
            </motion.div>
            
            {/* Animated corner decoration */}
            <motion.div
              className={`absolute top-0 left-0 w-24 h-24 ${index === 2 ? 'bg-white/10' : `bg-gradient-to-br ${accentGradient} opacity-10`} rounded-br-full`}
              animate={{
                scale: [1, 1.15, 1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <h4 className={`font-bold text-xl mb-4 ${index === 2 ? 'text-white' : 'text-[#431407]'} relative z-10`}>
              {title}
            </h4>
            <p className={`text-[15px] leading-relaxed ${index === 2 ? 'text-white/95' : 'text-slate-700'} relative z-10`}>
              {desc}
            </p>
            
            {/* Animated bottom accent line */}
            <motion.div
              className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${accentGradient}`}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            />
          </div>
        </motion.div>
      ))}

    </div>
  </div>
</section>

<section className="relative py-16 overflow-hidden">

  {/* Background image */}
  <div
    className="absolute inset-0 bg-center bg-cover opacity-[0.52]"
    style={{
      backgroundImage: "url('/education-bg.jpg')",
      filter: "blur(1.2px)",
      transform: "scale(1.05)",
    }}
  />

  {/* Soft color overlay (NOT white) */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#fff7ed]/65 via-[#fffdf9]/55 to-[#fffdf9]/70" />

  {/* Content */}
  <div className="relative z-10 max-w-6xl mx-auto px-6">
    
    <p className="text-center uppercase tracking-[0.3em] text-xs font-semibold text-[#ea580c] mb-4">
      OUR PURPOSE
    </p>

    <h2 className="text-center font-serif text-4xl md:text-5xl font-semibold text-[#431407] mb-10">
      Vision & Mission
    </h2>

    <div className="grid md:grid-cols-2 gap-12">
      
      {/* Vision */}
      <div>
        <h3 className="font-serif text-2xl font-semibold text-[#431407] mb-4">
          Our Vision
        </h3>
        <p className="text-[17px] leading-[1.8] text-slate-700">
          An India where every individual has access to transformative education
          rooted in culture, capability, and aspiration—regardless of geography
          or socio-economic background.
        </p>
      </div>

      {/* Mission */}
      <div>
        <h3 className="font-serif text-2xl font-semibold text-[#431407] mb-4">
          Our Mission
        </h3>
        <p className="text-[17px] leading-[1.8] text-slate-700">
          To build, operate, and sustain long-term educational institutions that
          empower students from Tier-2, Tier-3, and underserved communities
          through structured learning, mentorship, and continuity.
        </p>
      </div>

    </div>
  </div>
</section>




<section className="relative py-20 sm:py-24 md:py-28 bg-gradient-to-br from-[#FFF8F0] via-[#FFFBF7] to-[#FFF0EB] overflow-hidden">
  {/* Vibrant animated orbs */}
  <motion.div
    className="absolute top-20 left-10 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#FF6B9D]/22 to-[#FFB347]/18 blur-3xl"
    animate={{
      scale: [1, 1.25, 1],
      x: [0, 40, 0],
      y: [0, -20, 0]
    }}
    transition={{
      duration: 15,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
  
  <motion.div
    className="absolute bottom-20 right-10 w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-[#FF8C42]/20 to-[#EC167F]/22 blur-3xl"
    animate={{
      scale: [1.15, 1, 1.15],
      x: [0, -40, 0],
      y: [0, 25, 0]
    }}
    transition={{
      duration: 13,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />

  {/* Floating decorative shapes */}
  <motion.div
    className="absolute top-40 right-[20%] w-18 h-18 border-2 border-[#FF6B9D]/35 rounded-xl rotate-12"
    animate={{
      y: [0, -22, 0],
      rotate: [12, 32, 12]
    }}
    transition={{
      duration: 7,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />

  <motion.div
    className="absolute bottom-32 left-[25%] w-14 h-14 bg-gradient-to-br from-[#FFB347]/25 to-[#FF8C42]/25 rounded-full"
    animate={{
      y: [0, 20, 0],
      scale: [1, 1.18, 1]
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />

  <div className="max-w-7xl mx-auto px-6 relative z-10">
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="inline-block mb-4"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <p className="uppercase tracking-[0.3em] text-[11px] font-bold bg-gradient-to-r from-[#ea580c] via-[#EC167F] to-[#F5A044] bg-clip-text text-transparent bg-[length:200%_auto]">
          Leadership
        </p>
      </motion.div>
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#431407]">
        Executive <span className="bg-gradient-to-r from-[#ea580c] to-[#EC167F] bg-clip-text text-transparent">Trustees</span>
      </h2>
    </motion.div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        ['Mr. Anup Kiran', 'President', 'from-[#FFF0F0] to-white', 'from-[#dc2626] to-[#ea580c]'],
        ['Mr. Jayakumar D', 'Vice President', 'from-[#FFF5F0] to-white', 'from-[#ea580c] to-[#EC167F]'],
        ['Mr. Kumaraswamy H V', 'Secretary', 'from-[#FFF8F0] to-white', 'from-[#EC167F] to-[#F5A044]'],
        ['Mr. Raghuram H S', 'Treasurer', 'from-[#FFFBF0] to-white', 'from-[#F5A044] to-[#FFB347]'],
      ].map(([name, role, bgGradient, accentGradient], index) => (
        <motion.div 
          key={name} 
          className={`group relative bg-gradient-to-br ${bgGradient} rounded-2xl p-8 text-center shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_60px_-12px_rgba(234,88,12,0.3)] transition-all duration-500 border-2 border-white overflow-hidden`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -10, scale: 1.05 }}
        >
          {/* Animated gradient overlay */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${accentGradient} opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500`}
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
            }}
            transition={{
              duration: 5,
              repeat: Infinity
            }}
          />
          
          {/* Animated top gradient accent */}
          <motion.div
            className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${accentGradient}`}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          />
          
          {/* Pulsing decorative corner */}
          <motion.div
            className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${accentGradient} opacity-10 rounded-bl-3xl`}
            animate={{
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Avatar circle with gradient */}
          <div className="relative w-28 h-28 mx-auto mb-6">
            <motion.div
              className={`absolute inset-0 rounded-full bg-gradient-to-br ${accentGradient} opacity-20`}
              animate={{
                rotate: [0, 360]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <div className="absolute inset-1 rounded-full bg-white" />
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-[#FFF5ED] to-[#FFE8DB] group-hover:from-white group-hover:to-[#FFF5ED] transition-all duration-500" />
            {/* Pulsing number badge */}
            <motion.div
              className={`absolute -top-2 -right-2 w-9 h-9 rounded-full bg-gradient-to-br ${accentGradient} text-white text-sm font-bold flex items-center justify-center shadow-lg`}
              animate={{
                scale: [1, 1.15, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {index + 1}
            </motion.div>
          </div>
          
          <div className="relative z-10">
            <h4 className="font-bold text-[#431407] mb-2 group-hover:text-[#ea580c] transition-colors">
              {name}
            </h4>
            <p className="text-sm text-slate-600 font-semibold uppercase tracking-wider">
              {role}
            </p>
          </div>
          
          {/* Animated bottom accent line */}
          <motion.div
            className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${accentGradient} opacity-0 group-hover:opacity-100`}
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      ))}
    </div>
  </div>
</section>

{/* ================= BANK DETAILS ================= */}
  <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden">
    {/* Decorative elements */}
    <motion.div 
      className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl"
      animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
      transition={{ duration: 4, repeat: Infinity }}
    />
    
    <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#431407] to-[#6B2710] bg-clip-text text-transparent">
          Support Us Directly
        </h2>
        <p className="text-base sm:text-lg text-slate-600">
          Bank transfer details for direct donations
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
        {/* Bank Details Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border-2 border-blue-100 hover:shadow-xl transition-all"
        >
          <h3 className="font-bold text-xl sm:text-2xl text-[#431407] mb-6 flex items-center gap-3">
            <Mail className="text-blue-600 flex-shrink-0" size={28} />
            Bank Details
          </h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-slate-500 font-semibold uppercase tracking-wide mb-2">Account Name</p>
              <p className="text-base sm:text-lg font-bold text-[#431407] bg-blue-50 p-3 rounded-lg">
                Sohum Trust
              </p>
            </div>
            <div>
              <p className="text-sm text-slate-500 font-semibold uppercase tracking-wide mb-2">Account Number</p>
              <p className="text-base sm:text-lg font-bold text-[#431407] bg-blue-50 p-3 rounded-lg font-mono">
                0868102000016320
              </p>
            </div>
            <div>
              <p className="text-sm text-slate-500 font-semibold uppercase tracking-wide mb-2">IFSC Code</p>
              <p className="text-base sm:text-lg font-bold text-[#431407] bg-blue-50 p-3 rounded-lg font-mono">
                IBKL0000868
              </p>
            </div>
          </div>
        </motion.div>

        {/* Additional Info Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border-2 border-blue-100 hover:shadow-xl transition-all"
        >
          <h3 className="font-bold text-xl sm:text-2xl text-[#431407] mb-6 flex items-center gap-3">
            <MapPin className="text-blue-600 flex-shrink-0" size={28} />
            More Information
          </h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-slate-500 font-semibold uppercase tracking-wide mb-2">Bank Name</p>
              <p className="text-base sm:text-lg font-bold text-[#431407] bg-blue-50 p-3 rounded-lg">
                IDBI BANK, Banashankari Branch
              </p>
            </div>
            <div>
              <p className="text-sm text-slate-500 font-semibold uppercase tracking-wide mb-2">Account Type</p>
              <p className="text-base sm:text-lg font-bold text-[#431407] bg-blue-50 p-3 rounded-lg">
                Current Account
              </p>
            </div>
            <div>
              <p className="text-sm text-slate-500 font-semibold uppercase tracking-wide mb-2">Phone</p>
              <p className="text-base sm:text-lg font-bold text-[#431407]">
                <a href="tel:+919686953106" className="hover:text-blue-600 transition-colors">
                  +91 9686953106
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-8 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl p-6 sm:p-8 border-2 border-blue-200 text-center"
      >
        <p className="text-slate-700 font-semibold">
          All donations are eligible for 80G tax exemption under the Indian Income Tax Act
        </p>
      </motion.div>
    </div>
  </section>

  {/* ================= CTA ================= */}
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
        Bridging educational gaps across regions
      </h2>
      <p className="max-w-2xl mx-auto mb-10 text-lg text-white/95 font-medium leading-relaxed">
        We work with students from underserved and emerging cities to provide long-term learning opportunities.
      </p>

      <Link to="/get-involved" className="inline-flex items-center gap-2 bg-white text-[#EC167F] px-10 py-4 rounded-full font-bold shadow-2xl hover:shadow-3xl transition-all hover:scale-105">
        Get Involved
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

      <SiteFooter />
    </div>
  );
};

export default AboutUs;
