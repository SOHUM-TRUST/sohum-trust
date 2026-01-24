'use client';

import React from 'react';
import { Heart, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
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
      <section className="relative overflow-hidden min-h-[400px] sm:min-h-[480px] md:min-h-[550px] flex items-center bg-[radial-gradient(ellipse_at_top,_#fff1e6_0%,_#fff7ed_45%,_#fffdf9_100%)]">

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

  {/* Content */}
  <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center py-10 sm:py-12 md:py-16">
    <p className="uppercase tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.35em] text-[10px] sm:text-xs font-semibold text-[#ea580c] mb-4 sm:mb-5 md:mb-6">
      ABOUT SOHUM TRUST
    </p>

    <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#431407] leading-tight mb-4 sm:mb-5 md:mb-6">
      Building education that lasts generations
    </h1>

    <p className="max-w-3xl mx-auto text-[15px] sm:text-[16px] md:text-[17px] leading-[1.7] sm:leading-[1.8] text-slate-600">
      Sohum Trust is committed to creating long-term educational institutions
      that empower individuals, preserve culture, and strengthen communities.
    </p>
  </div>

  {/* Bottom fade */}
  <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-[#fffdf9]" />
</section>

      <section className="py-8 sm:py-12 md:py-16 lg:py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 sm:gap-14 md:gap-16 lg:gap-20">
    <div>
      <p className="uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-xs font-semibold text-[#ea580c] mb-3 sm:mb-4">
        Who We Are
      </p>
      <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-[#431407] mb-5 sm:mb-6 md:mb-8">
        A long-term institution builder in education
      </h2>

      <div className="space-y-4 sm:space-y-5 md:space-y-6 text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] sm:leading-[1.85] md:leading-[1.9] text-slate-700">
        <p>
          Sohum Trust is a Karnataka-registered educational trust focused on
          building institutions that endure beyond individuals, funding cycles,
          and short-term initiatives.
        </p>
        <p>
          We operate across academic, professional, vocational, cultural, and
          research domains — creating structured ecosystems instead of isolated
          programs.
        </p>
        <p>
          Our work is designed for continuity, depth, and relevance throughout a
          learner’s journey.
        </p>
      </div>
    </div>

    <div className="space-y-4 sm:space-y-5 md:space-y-6">
      {[
        ['Registered & Accountable', 'Legally registered trust with transparent governance'],
        ['Institution-First Approach', 'We build schools, academies & learning systems'],
        ['Multi-Domain Education', 'Academic, vocational, cultural & research initiatives'],
      ].map(([title, desc]) => (
        <div key={title} className="bg-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-md border-l-4 border-[#ea580c]">
          <h4 className="font-semibold text-base sm:text-lg text-[#431407] mb-1.5 sm:mb-2">{title}</h4>
          <p className="text-[14px] sm:text-[15px] text-slate-600">{desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-orange-50 via-amber-50 to-white relative overflow-hidden">
  <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-tr from-orange-300/20 to-transparent rounded-full blur-3xl" />
  
  <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
    
    {/* Title */}
    <div className="mb-8 sm:mb-10 md:mb-14 text-center">
      <p className="uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-xs font-semibold bg-gradient-to-r from-[#ea580c] to-[#EC167F] bg-clip-text text-transparent mb-3 sm:mb-4">
        Why We Exist
      </p>
      <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#431407] to-[#ea580c] bg-clip-text text-transparent">
        Addressing the gaps in education
      </h2>
    </div>

    {/* Content Grid */}
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
      
      {/* Problem */}
      <div className="group bg-gradient-to-br from-red-50 to-orange-50 p-6 sm:p-7 md:p-8 rounded-xl sm:rounded-2xl shadow-lg border-2 border-red-100 hover:border-red-300 hover:shadow-xl transition-all cursor-pointer">
        <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">⚠️</div>
        <h4 className="font-bold text-lg sm:text-xl text-[#431407] mb-2 sm:mb-3">
          The Challenge
        </h4>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          While access to education has improved, many learners still lack
          continuity, mentorship, and institutional support.
        </p>
      </div>

      {/* Gap */}
      <div className="group bg-gradient-to-br from-amber-50 to-yellow-50 p-6 sm:p-7 md:p-8 rounded-xl sm:rounded-2xl shadow-lg border-2 border-amber-100 hover:border-amber-300 hover:shadow-xl transition-all cursor-pointer">
        <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔍</div>
        <h4 className="font-bold text-lg sm:text-xl text-[#431407] mb-2 sm:mb-3">
          The Gap
        </h4>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          Short-term programs often fail to create lasting impact, leaving
          students without clear learning or career pathways.
        </p>
      </div>

      {/* Solution */}
      <div className="group bg-gradient-to-br from-[#431407] to-[#6B2710] text-white p-8 rounded-2xl shadow-xl border-2 border-[#431407] hover:scale-105 transition-all cursor-pointer">
        <div className="text-4xl mb-4">💡</div>
        <h4 className="font-bold text-xl mb-3">
          Our Purpose
        </h4>
        <p className="leading-relaxed text-white/95">
          Sohum Trust exists to bridge this gap by building enduring educational
          institutions that support learners over the long term.
        </p>
      </div>

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


<section className="py-28 bg-[#fff7ed]">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="font-heading text-4xl text-center text-[#431407] mb-16">
      Executive Trustees
    </h2>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
      {[
        ['Mr. Anup Kiran', 'President'],
        ['Mr. Jayakumar D', 'Vice President'],
        ['Mr. Kumaraswamy H V', 'Secretary'],
        ['Mr. Raghuram H S', 'Treasurer'],
      ].map(([name, role]) => (
        <div key={name} className="bg-white p-8 rounded-3xl text-center shadow-md">
          <div className="w-24 h-24 mx-auto bg-[#fef3e8] rounded-full mb-6" />
          <h4 className="font-semibold text-[#431407]">{name}</h4>
          <p className="text-sm text-slate-600">{role}</p>
        </div>
      ))}
    </div>
  </div>
</section>

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
