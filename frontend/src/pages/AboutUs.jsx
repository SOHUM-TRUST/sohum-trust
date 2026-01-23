'use client';

import React from 'react';
import { Heart, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

/* ================= ABOUT PAGE ================= */

const AboutUs = () => {
  return (
    <div className="bg-[#fffdf9] min-h-screen">
      <SiteHeader />

      {/* ================= HERO WITH LOGO BACKGROUND ================= */}
      <section className="relative overflow-hidden py-20 bg-[radial-gradient(ellipse_at_top,_#fff1e6_0%,_#fff7ed_45%,_#fffdf9_100%)]">

  {/* Background Logo */}
  <div className="absolute inset-0 pointer-events-none">
    <div
  className="
    absolute left-1/2 top-1/2
    -translate-x-1/2 -translate-y-1/2

    /* Bigger presence */
    w-[560px] md:w-[740px] lg:w-[900px]
    h-[560px] md:h-[740px] lg:h-[900px]

    /* Darker + richer gradient */
    bg-gradient-to-br
    from-[#D4145A]
    via-[#EC167F]
    to-[#F39C3D]

    /* Visibility */
    opacity-[0.28]
    blur-[0.5px]

    /* Deep premium glow */
    drop-shadow-[0_0_70px_rgba(236,22,127,0.45)]
    drop-shadow-[0_0_120px_rgba(243,156,61,0.25)]

    mask-logo
    -webkit-mask-logo
  "
/>
  </div>

  {/* Content */}
  <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
    <p className="uppercase tracking-[0.35em] text-xs font-semibold text-[#ea580c] mb-6">
      ABOUT SOHUM TRUST
    </p>

    <h1 className="font-serif text-5xl md:text-6xl font-semibold text-[#431407] leading-tight mb-8">
      Building education that lasts generations
    </h1>

    <p className="max-w-3xl mx-auto text-[18px] leading-[1.8] text-slate-600">
      Sohum Trust is committed to creating long-term educational institutions
      that empower individuals, preserve culture, and strengthen communities.
    </p>
  </div>

  {/* Bottom fade */}
  <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-[#fffdf9]" />
</section>

      <section className="py-10">
  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">
    <div>
      <p className="uppercase tracking-[0.3em] text-xs font-semibold text-[#ea580c] mb-4">
        Who We Are
      </p>
      <h2 className="font-heading text-4xl font-semibold text-[#431407] mb-8">
        A long-term institution builder in education
      </h2>

      <div className="space-y-6 text-[17px] leading-[1.9] text-slate-700">
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

    <div className="space-y-6">
      {[
        ['Registered & Accountable', 'Legally registered trust with transparent governance'],
        ['Institution-First Approach', 'We build schools, academies & learning systems'],
        ['Multi-Domain Education', 'Academic, vocational, cultural & research initiatives'],
      ].map(([title, desc]) => (
        <div key={title} className="bg-white p-8 rounded-2xl shadow-md border-l-4 border-[#ea580c]">
          <h4 className="font-semibold text-lg text-[#431407] mb-2">{title}</h4>
          <p className="text-[15px] text-slate-600">{desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="py-24 bg-[#fff7ed]">
  <div className="max-w-5xl mx-auto px-6">
    
    {/* Title */}
    <div className="mb-14">
      <p className="uppercase tracking-[0.3em] text-xs font-semibold text-[#ea580c] mb-4">
        Why We Exist
      </p>
      <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#431407]">
        Addressing the gaps in education
      </h2>
    </div>

    {/* Content Grid */}
    <div className="grid md:grid-cols-3 gap-10">
      
      {/* Problem */}
      <div className="bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-lg text-[#431407] mb-3">
          The Challenge
        </h4>
        <p className="text-slate-600 leading-relaxed">
          While access to education has improved, many learners still lack
          continuity, mentorship, and institutional support.
        </p>
      </div>

      {/* Gap */}
      <div className="bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-lg text-[#431407] mb-3">
          The Gap
        </h4>
        <p className="text-slate-600 leading-relaxed">
          Short-term programs often fail to create lasting impact, leaving
          students without clear learning or career pathways.
        </p>
      </div>

      {/* Solution */}
      <div className="bg-[#431407] text-white p-8 rounded-2xl shadow-md">
        <h4 className="font-semibold text-lg mb-3">
          Our Purpose
        </h4>
        <p className="leading-relaxed text-white/90">
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

<section className="py-20 bg-gradient-to-r from-[#EC167F] to-[#F5A044] text-white text-center">
  <h2 className="font-heading text-4xl font-semibold mb-6">
    Bridging educational gaps across regions
  </h2>
  <p className="max-w-xl mx-auto mb-10 text-white/90">
    We work with students from underserved and emerging cities to provide long-term learning opportunities.
  </p>

  <Link to="/get-involved" className="inline-block bg-white text-[#EC167F] px-12 py-5 rounded-full font-semibold shadow-lg">
    Get Involved
  </Link>
</section>

      <SiteFooter />
    </div>
  );
};

export default AboutUs;
