'use client';

import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import FloatingDonateButton from '../components/FloatingDonateButton';

/* ================= ANIMATED BACKGROUND ================= */

const EcosystemBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Configuration for the aesthetic
    const particleCount = 50; // Number of floating nodes
    const connectionDistance = 180; // How close they need to be to connect
    const moveSpeed = 0.4; // Speed of movement (keep it slow for calmness)
    const colors = ['#ea580c', '#431407']; // Your brand colors

    // Set canvas size
    const resizeCanvas = () => {
      // We set the canvas to the parent's size
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Particle Logic
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * moveSpeed;
        this.vy = (Math.random() - 0.5) * moveSpeed;
        this.size = Math.random() * 2.5 + 1; // Size of dots
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges smoothly
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    const particles = Array.from({ length: particleCount }, () => new Particle());

    // The Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle, i) => {
        particle.update();
        particle.draw();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particle.x - particles[j].x;
          const dy = particle.y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            // Create a fading brown line based on distance
            const opacity = 1 - distance / connectionDistance;
            ctx.strokeStyle = `rgba(67, 20, 7, ${opacity * 0.4})`; 
            ctx.lineWidth = 0.8;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none opacity-60"
    />
  );
};

/* ================= HELPER COMPONENTS ================= */

// Alternating Feature Section (Zig-Zag)
const FeatureRow = ({ title, desc, img, reverse }) => (
  <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-6 sm:gap-8 md:gap-12 lg:gap-20 mb-12 sm:mb-14 md:mb-16 lg:mb-20`}>
    <div className="w-full md:w-1/2 overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-500 group border-2 sm:border-4 border-white">
      <img 
        src={img} 
        alt={title} 
        className="w-full h-[180px] sm:h-[220px] md:h-[250px] lg:h-[280px] object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
      />
    </div>
    <div className="w-full md:w-1/2 text-left">
      <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-semibold text-[#431407] mb-3 sm:mb-4 relative inline-block">
        {title}
        {/* Underline accent with gradient */}
        <span className="absolute bottom-0 left-0 w-1/3 h-1 bg-gradient-to-r from-[#ea580c] to-[#ea580c]/30 rounded-full"></span>
      </h3>
      <p className="text-sm sm:text-base leading-[1.6] sm:leading-[1.7] text-slate-600">
        {desc}
      </p>
    </div>
  </div>
);

// Process Step Card
const ProcessStep = ({ number, title, desc }) => (
  <div className="relative flex flex-col items-center text-center group">
    {/* Circle Number with gradient border on hover */}
    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white border-2 border-[#ea580c] text-[#ea580c] flex items-center justify-center font-bold text-base sm:text-lg shadow-md z-10 group-hover:bg-gradient-to-br group-hover:from-[#ea580c] group-hover:to-[#d4580c] group-hover:text-white group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
      {number}
    </div>
    
    <div className="mt-4 sm:mt-5 bg-white p-4 sm:p-5 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 w-full min-h-[120px] sm:min-h-[140px] border border-stone-100 group-hover:border-[#ea580c]/20 group-hover:-translate-y-1">
      <h4 className="font-serif text-base sm:text-lg font-bold text-[#431407] mb-1.5 sm:mb-2">
        {title}
      </h4>
      <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
        {desc}
      </p>
    </div>
  </div>
);

/* ================= PAGE ================= */

const WhatWeEnable = () => {
  return (
    <div className="min-h-screen bg-[#fffdf9]">
      <SiteHeader />
      <FloatingDonateButton />

      {/* ================= HERO ================= */}
      <section className="relative min-h-[400px] sm:min-h-[480px] md:min-h-[550px] flex items-center bg-[radial-gradient(ellipse_at_top,_#fff1e6_0%,_#fff7ed_45%,_#fffdf9_100%)] overflow-hidden">
        
        {/* Animated Background */}
        <EcosystemBackground />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center py-10 sm:py-12 md:py-16">
          <p className="uppercase tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.35em] text-[10px] sm:text-xs font-semibold text-[#ea580c] mb-4 sm:mb-5 md:mb-6">
            WHAT WE ENABLE
          </p>

          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#431407] mb-4 sm:mb-5 md:mb-6">
            Enabling Sustainable Educational Ecosystems
          </h1>

          <p className="max-w-3xl mx-auto text-[15px] sm:text-[16px] md:text-[17px] leading-[1.7] sm:leading-[1.8] text-slate-600">
            Sohum Trust enables long-term educational institutions that support
            learners, educators, and communities across academic, professional,
            cultural, and research domains.
          </p>
        </div>
      </section>

      {/* ================= EDUCATIONAL DOMAINS ================= */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-[#fffdf9] to-[#fff7ed] relative overflow-hidden">
        {/* Decorative circles in background */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-[#ea580c]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#431407]/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          
          {/* Header Section */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <p className="uppercase tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.35em] text-[10px] sm:text-xs font-semibold text-[#ea580c] mb-3 sm:mb-4">
              OUR SCOPE
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#431407] mb-4 sm:mb-5 md:mb-6">
              Diverse Learning Pathways We Support
            </h2>
            {/* Decorative small divider */}
            <div className="w-24 h-1 bg-[#ea580c]/30 mx-auto rounded-full"></div>
          </div>

          {/* Immersive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 md:gap-8 animate-fadeIn">
            {[
              {
                title: 'Foundational & Scholastic Education',
                desc: 'Schools and colleges delivering strong academic foundations across sciences, arts, commerce, and humanities.',
                image: '/children1.png',
                gradient: 'from-indigo-600/90 via-[#431407]/70',
              },
              {
                title: 'Professional & Vocational Pathways',
                desc: 'Institutions for engineering, medical, para-medical, vocational training, and skill development.',
                image: '/children8.png',
                gradient: 'from-emerald-600/90 via-[#431407]/70',
              },
              {
                title: 'Innovation & Lifelong Learning',
                desc: 'Advanced academies, distance learning, hybrid education, and emerging skill ecosystems.',
                image: '/children3.png',
                gradient: 'from-[#ea580c]/90 via-[#431407]/70',
              },
              {
                title: 'Cultural, Sports & Research Institutions',
                desc: 'Learning spaces rooted in Indian knowledge systems, arts, sports, yoga, and research.',
                image: '/children5.png',
                gradient: 'from-purple-600/90 via-[#431407]/70',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group relative h-[260px] sm:h-[280px] md:h-[300px] lg:h-[320px] w-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl cursor-pointer transition-shadow duration-500"
              >
                {/* Background Image with Zoom Effect */}
                <div className="absolute inset-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />
                  {/* Enhanced Gradient Overlay with custom color per card */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${item.gradient} to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-80`}></div>
                  {/* Add subtle glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#ea580c]/0 to-[#ea580c]/0 group-hover:from-[#ea580c]/10 group-hover:to-transparent transition-all duration-500"></div>
                </div>

                {/* Text Content (Slides up on hover) */}
                <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-4 transition-transform duration-500 ease-in-out group-hover:translate-y-0">
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-white mb-2 drop-shadow-md">
                    {item.title}
                  </h3>
                  
                  {/* Description: Initially slightly faded, fully visible on hover */}
                  <p className="text-sm md:text-base text-orange-50/90 leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-[200px] transition-all duration-700 ease-out">
                    {item.desc}
                  </p>
                  
                  {/* Optional: 'Explore' link visual cue */}
                  <div className="mt-4 flex items-center gap-2 text-[#ea580c] font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= OUR VISION (Goals & Aspirations) ================= */}
      <section className="py-16 relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/serve-students.jpg" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
          {/* Light gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/80 to-white/85"></div>
        </div>
        
        {/* Decorative blur circles */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-orange-200/40 rounded-full blur-3xl z-0"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#ea580c]/20 rounded-full blur-3xl z-0"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-xs font-medium text-[#ea580c] mb-2 tracking-wide">
              OUR TARGETS
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#431407] mb-3 leading-tight">
              Our Vision for Educational Reach
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Building toward sustainable impact through ambitious yet achievable goals
            </p>
          </div>

          {/* Vision Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                number: "5,000+",
                label: "Students to Empower",
                desc: "Reaching learners in rural and semi-urban regions"
              },
              {
                number: "120+",
                label: "Partner Locations",
                desc: "Schools and centers we plan to strengthen"
              },
              {
                number: "500K+",
                label: "Learning Hours",
                desc: "Quality education we aspire to deliver annually"
              }
            ].map((goal, index) => (
              <div
                key={goal.label}
                className="text-center p-6 rounded-lg bg-slate-50 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <p className="text-4xl font-bold text-[#ea580c] mb-2">{goal.number}</p>
                <h3 className="font-serif text-lg font-bold text-[#431407] mb-2">{goal.label}</h3>
                <p className="text-sm text-slate-600">{goal.desc}</p>
              </div>
            ))}
          </div>

          {/* Vision Statements */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "For Students",
                desc: "We envision a future where every student from Tier 2 and Tier 3 regions has access to quality education, continuous mentorship, and the resources needed to pursue higher learning opportunities.",
                icon: "🎓"
              },
              {
                title: "For Educators",
                desc: "We aim to empower teachers with modern pedagogical training, ongoing professional development, and institutional support to create transformative learning experiences.",
                icon: "👨‍🏫"
              }
            ].map((vision, index) => (
              <div
                key={vision.title}
                className="group p-6 rounded-lg bg-slate-50 hover:bg-white border border-slate-100 hover:border-[#ea580c]/20 hover:shadow-lg transition-all duration-500"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#ea580c]/10 flex items-center justify-center flex-shrink-0 text-2xl">
                    {vision.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-lg font-bold text-[#431407] mb-2">{vision.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {vision.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW ENABLEMENT WORKS (Vertical Timeline) ================= */}
      <section className="py-12 bg-slate-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-transparent via-[#ea580c]/20 to-transparent"></div>
        
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="text-xs font-medium text-[#ea580c] mb-2 tracking-wide">
              OUR METHODOLOGY
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#431407] mb-2 leading-tight">
              Our Enablement Process
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              A systematic four-step approach to building educational institutions that last
            </p>
          </div>

          {/* Timeline Steps */}
          <div className="relative">
            {/* Central vertical line - visible on desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#ea580c]/30 via-[#ea580c] to-[#ea580c]/30"></div>

            <div className="space-y-8">
              {[
                {
                  number: "01",
                  title: "Research & Identify",
                  desc: "Deep community research to understand educational gaps and regional needs.",
                  details: ["Community needs assessment", "Regional educational mapping", "Stakeholder consultations"]
                },
                {
                  number: "02",
                  title: "Build & Establish",
                  desc: "Creating robust educational infrastructure that stands the test of time.",
                  details: ["Infrastructure development", "Curriculum design", "System establishment"]
                },
                {
                  number: "03",
                  title: "Enable & Support",
                  desc: "Empowering educators with training, resources, and continuous mentorship.",
                  details: ["Teacher training programs", "Resource allocation", "Continuous mentorship"]
                },
                {
                  number: "04",
                  title: "Sustain & Grow",
                  desc: "Ensuring institutions become self-sustaining across generations.",
                  details: ["Community ownership", "Financial sustainability", "Continuous improvement"]
                },
              ].map((step, index) => (
                <div key={step.number} className="relative">
                  {/* Timeline Node - Desktop */}
                  <div className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 w-10 h-10 bg-white rounded-full border-4 border-[#ea580c] items-center justify-center shadow-lg z-10">
                    <span className="text-xs font-bold text-[#ea580c]">{index + 1}</span>
                  </div>

                  {/* Content Card - Alternating sides on desktop */}
                  <div className={`md:grid md:grid-cols-2 gap-6 items-start ${index % 2 === 0 ? '' : 'md:grid-flow-dense'}`}>
                    {/* Left/Right spacing */}
                    <div className={`${index % 2 === 0 ? '' : 'md:order-2'}`}>
                      {/* Empty space for alternating layout */}
                    </div>

                    {/* Card */}
                    <div className={`group ${index % 2 === 0 ? '' : 'md:order-1'}`}>
                      <div className="relative bg-white p-5 rounded-xl shadow-lg hover:shadow-xl border-2 border-slate-100 hover:border-[#ea580c] transition-all duration-300 hover:-translate-y-1">
                        {/* Mobile number badge */}
                        <div className="md:hidden absolute -top-2 -left-2 w-10 h-10 bg-gradient-to-br from-[#ea580c] to-[#d4580c] rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                          {index + 1}
                        </div>

                        {/* Large background number */}
                        <div className="absolute top-1 right-3 text-6xl font-bold text-[#ea580c]/5 select-none">
                          {step.number}
                        </div>

                        {/* Content */}
                        <div className="relative">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-6 h-0.5 bg-gradient-to-r from-[#ea580c] to-transparent rounded-full"></div>
                            <span className="text-xs font-semibold text-[#ea580c] uppercase tracking-wider">Step {step.number}</span>
                          </div>

                          <h3 className="font-serif text-lg font-bold text-[#431407] mb-2">
                            {step.title}
                          </h3>

                          <p className="text-sm text-slate-600 leading-relaxed mb-3">
                            {step.desc}
                          </p>

                          {/* Detail list */}
                          <ul className="space-y-1.5">
                            {step.details.map((detail, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                                <svg className="w-3.5 h-3.5 text-[#ea580c] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= DIFFERENTIATORS (Professional Flowchart) ================= */}
      <section className="py-16 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-xs font-medium text-[#ea580c] mb-2 tracking-wide">
              WHAT SETS US APART
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#431407] mb-3 leading-tight">
              What Makes Us Different
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Built on principles of continuity, depth, and cultural relevance
            </p>
          </div>

          {/* Flowchart */}
          <div className="relative">
            {/* Desktop: Horizontal connecting line */}
            <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#ea580c]/40 via-50% to-transparent"></div>

            {/* Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {[
                {
                  title: 'Institution Building',
                  desc: 'Creating lasting educational systems, not temporary programs',
                  number: '01'
                },
                {
                  title: 'Long-Term Vision',
                  desc: 'Supporting learners throughout their entire educational journey',
                  number: '02'
                },
                {
                  title: 'Cultural Foundation',
                  desc: 'Rooted in Indian values, heritage, and knowledge traditions',
                  number: '03'
                },
                {
                  title: 'Generational Impact',
                  desc: 'Building institutions that strengthen and grow across decades',
                  number: '04'
                },
              ].map((item, index) => (
                <div key={item.title} className="relative">
                  {/* Arrow connector - desktop only */}
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-16 -right-3 z-20">
                      <div className="w-6 h-6 rotate-45 border-t-2 border-r-2 border-[#ea580c]"></div>
                    </div>
                  )}

                  {/* Card */}
                  <div className="relative group">
                    {/* Connection dot */}
                    <div className="hidden lg:flex absolute top-16 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full border-2 border-[#ea580c] items-center justify-center z-10 group-hover:scale-125 transition-transform duration-300">
                      <div className="w-3 h-3 bg-[#ea580c] rounded-full"></div>
                    </div>

                    {/* Main Card */}
                    <div className="mt-12 p-6 bg-white rounded-xl border-2 border-slate-200 hover:border-[#ea580c] shadow-sm hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                      {/* Large Number Background */}
                      <div className="absolute top-4 right-4 text-6xl font-bold text-[#ea580c]/5">
                        {item.number}
                      </div>

                      {/* Number Badge */}
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-[#ea580c] to-[#d4580c] text-white font-bold text-sm mb-4 shadow-md">
                        {index + 1}
                      </div>

                      {/* Content */}
                      <h3 className="font-serif text-lg font-bold text-[#431407] mb-2 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>

                      {/* Progress bar */}
                      <div className="mt-4 h-1 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-[#ea580c] to-[#d4580c] transition-all duration-1000"
                          style={{ width: `${((index + 1) / 4) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Message */}
            <div className="mt-12 text-center">
              <p className="text-sm text-slate-600 max-w-2xl mx-auto">
                These four interconnected principles guide every decision we make and every institution we build.
              </p>
            </div>
          </div>
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
            Be Part of This Educational Movement
          </h2>
          <p className="max-w-2xl mx-auto mb-10 text-lg text-white/95 font-medium leading-relaxed">
            Join us in building educational institutions that empower students beyond metropolitan areas
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

export default WhatWeEnable;
