'use client';

import React, { useState } from 'react';
import { Heart, Mail, MapPin, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../components/ui/button';

/* ================= HEADER ================= */

const SiteHeader = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'What We Enable', path: '/what-we-enable' },
    { label: 'Impact', path: '/impact' },
    { label: 'Get Involved', path: '/get-involved' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#EC167F] to-[#F5A044] shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/">
            <img src="/logo_sohum.png" alt="Sohum Trust" className="h-14" />
          </Link>

          <nav className="hidden md:flex gap-10">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-white ${
                  isActive(item.path) ? 'font-bold' : 'opacity-90'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link to="/get-involved">
            <Button className="hidden md:block bg-white text-[#EC167F] font-semibold rounded-full px-8">
              Donate Now
            </Button>
          </Link>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
};

/* ================= FOOTER ================= */

const SiteFooter = () => (
  <footer className="bg-slate-900 text-white py-16">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
      <div>
        <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
          <Heart className="w-5 h-5 text-[#f9c483]" />
          Sohum Trust
        </h3>
        <p className="text-slate-300 text-sm leading-relaxed">
          Building long-term educational institutions that empower learners and
          preserve cultural knowledge.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-lg mb-4">Explore</h3>
        <ul className="space-y-2 text-slate-300 text-sm">
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/what-we-enable">What We Enable</Link></li>
          <li><Link to="/impact">Impact</Link></li>
          <li><Link to="/get-involved">Get Involved</Link></li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold text-lg mb-4">Contact</h3>
        <ul className="space-y-3 text-slate-300 text-sm">
          <li className="flex items-center gap-2">
            <Mail className="w-4 h-4" /> sohumtrust@zohomail.in
          </li>
          <li className="flex items-center gap-2">
            <Phone className="w-4 h-4" /> +91 XXXXX XXXXX
          </li>
          <li className="flex items-center gap-2">
            <MapPin className="w-4 h-4" /> Karnataka, India
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

/* ================= ABOUT PAGE ================= */

const AboutUs = () => {
  return (
    <div className="bg-[#fffdf9] min-h-screen">
      <SiteHeader />

      {/* ================= HERO WITH LOGO BACKGROUND ================= */}
      <section className="relative overflow-hidden py-32 bg-[radial-gradient(ellipse_at_top,_#fff1e6_0%,_#fff7ed_45%,_#fffdf9_100%)]">

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

      {/* ================= WHO WE ARE ================= */}
      <section className="py-28 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">
        <div>
          <p className="tracking-[0.3em] text-xs font-semibold text-[#ea580c] mb-4">
            WHO WE ARE
          </p>
          <h2 className="font-serif text-4xl font-semibold text-[#431407] mb-8">
            A long-term institution builder in education
          </h2>

          <div className="space-y-6 text-slate-700 leading-relaxed">
            <p>
              Sohum Trust is a Karnataka-registered educational trust focused on
              building institutions that endure beyond individuals and funding cycles.
            </p>
            <p>
              We work across academic, vocational, cultural, and research domains—
              creating structured learning ecosystems.
            </p>
            <p>
              Our goal is continuity, depth, and relevance throughout a learner’s
              educational journey.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {[
            ['Registered & Accountable', 'Karnataka-registered with transparent governance'],
            ['Institution Focused', 'Building schools and academies, not short-term programs'],
            ['Multi-Domain Education', 'Academic, vocational, cultural & research initiatives'],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="bg-white p-8 rounded-2xl shadow-md border-l-4 border-[#ea580c]"
            >
              <h4 className="font-semibold text-[#431407] mb-2">{title}</h4>
              <p className="text-slate-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default AboutUs;
