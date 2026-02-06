import React, { useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  Heart,
  Mail,
  ArrowRight,
  Building2,
  Users,
  Globe,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  Sparkles,
  IndianRupee,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import FloatingDonateButton from '../components/FloatingDonateButton';

/* ================= MOCK DATA ================= */

const donationTiers = [
  {
    id: 1,
    amount: 1,
    title: 'Any Amount',
    description: 'Every rupee counts towards quality education.',
    impact: 'Make a difference',
    recommended: false,
  },
  {
    id: 2,
    amount: 200,
    title: 'Books & Materials',
    description: 'Support basic learning materials for students.',
    impact: 'Learning essentials',
    recommended: false,
  },
  {
    id: 3,
    amount: 2000,
    title: 'Student Support',
    description: 'Fund educational resources and mentorship.',
    impact: 'Direct impact',
    recommended: true,
  },
];

const faqData = [
  {
    q: 'Is my donation tax-deductible?',
    a: 'Yes, all donations are eligible for 80G tax exemption.',
  },
  {
    q: 'Can I sponsor a specific student?',
    a: 'Yes. We provide progress updates and structured reporting.',
  },
  {
    q: 'Do you accept foreign donations?',
    a: 'Please contact us for FCRA-related details.',
  },
];

/* ================= REUSABLE SECTION HEADER ================= */

const SectionHeader = ({ badge, title, subtitle, light = false }) => (
  <div className="text-center max-w-3xl mx-auto mb-14">
    <div
      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-4 ${
        light ? 'bg-white/10 text-orange-200' : 'bg-orange-50 text-orange-600'
      }`}
    >
      {badge}
    </div>
    <h2
      className={`font-heading text-3xl md:text-5xl font-semibold mb-6 ${
        light ? 'text-white' : 'text-[#431407]'
      }`}
    >
      {title}
    </h2>
    <p
      className={`text-lg leading-relaxed ${
        light ? 'text-orange-50/80' : 'text-slate-600'
      }`}
    >
      {subtitle}
    </p>
  </div>
);

/* ================= DONATION CARD ================= */

const DonationCard = ({ tier, index, onSelect }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.08 }}
    whileHover={{ y: -4 }}
    className={`relative rounded-2xl overflow-hidden transition-all p-6 ${
      tier.recommended
        ? 'bg-gradient-to-br from-orange-50 to-white shadow-lg border-2 border-[#ea580c]'
        : 'bg-white shadow-md border border-slate-200'
    }`}
  >
    {tier.recommended && (
      <div className="absolute top-0 inset-x-0 bg-[#ea580c] text-white text-[10px] font-bold text-center py-1 uppercase tracking-wider">
        Recommended
      </div>
    )}

    <div className={tier.recommended ? 'mt-4' : ''}>
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
          <IndianRupee className="text-[#ea580c]" size={20} />
        </div>
        <div>
          <h3 className="font-bold text-lg text-[#431407]">{tier.title}</h3>
          <p className="text-xs text-slate-500">{tier.impact}</p>
        </div>
      </div>

      <div className="text-3xl font-bold text-[#ea580c] mb-3">₹{tier.amount.toLocaleString('en-IN')}</div>

      <p className="text-slate-600 text-sm leading-relaxed mb-4">
        {tier.description}
      </p>

      <button
        onClick={() => onSelect(tier.amount)}
        className={`w-full py-2.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-colors ${
          tier.recommended
            ? 'bg-[#ea580c] text-white hover:bg-[#d4580c]'
            : 'bg-orange-50 text-[#ea580c] hover:bg-orange-100'
        }`}
      >
        Select Amount <Heart size={16} />
      </button>
    </div>
  </motion.div>
);

/* ================= FAQ ITEM ================= */

const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-slate-100">
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-6 flex justify-between text-left"
      >
        <span className="font-heading text-lg font-semibold text-[#431407]">
          {q}
        </span>
        <ChevronDown
          className={`text-[#ea580c] transition-transform ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.p
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="pb-6 text-slate-600"
          >
            {a}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ================= PAGE ================= */

const GetInvolvedPage = () => {
  const [customAmount, setCustomAmount] = useState('');
  const [selectedAmount, setSelectedAmount] = useState(null);

  const handleSelectAmount = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount(amount.toString());
    // Redirect to donation page
    window.open('https://pages.razorpay.com/pl_PlNSF1e11K7kB9/view', '_blank');
  };

  const handleCustomDonate = () => {
    if (customAmount && parseFloat(customAmount) >= 1) {
      window.open('https://pages.razorpay.com/pl_PlNSF1e11K7kB9/view', '_blank');
    } else {
      alert('Please enter a valid amount (minimum ₹1)');
    }
  };

  return (
    <div className="min-h-screen bg-[#fffdf9] selection:bg-[#ea580c] selection:text-white">
      <SiteHeader />
      <FloatingDonateButton />

      {/* ================= HERO ================= */}
      <section className="relative w-full min-h-[400px] sm:min-h-[480px] md:min-h-[550px] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-rose-50">
        
        {/* ======================================================== BACKGROUND LAYERS ======================================================== */}

        {/* 1. Animated Grid Pattern */}
        <motion.div 
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
              backgroundImage: `linear-gradient(to right, #ea580c 1px, transparent 1px),
                                linear-gradient(to bottom, #ea580c 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
          }}
          animate={{
              backgroundPosition: ['0px 0px', '40px 40px'],
          }}
          transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
          }}
        />

        {/* 2. Multiple Colored Pulses */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[500px] md:h-[500px] rounded-full"
          style={{
              background: 'radial-gradient(circle, rgba(236,22,127,0.4) 0%, rgba(236,22,127,0) 70%)'
          }}
          animate={{
              scale: [1, 1.2, 1],
              opacity: [0.6, 0.9, 0.6],
              rotate: [0, 180, 360]
          }}
          transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] md:w-[450px] md:h-[450px] rounded-full"
          style={{
              background: 'radial-gradient(circle, rgba(234,88,12,0.5) 0%, rgba(234,88,12,0) 70%)'
          }}
          animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.8, 0.5],
              rotate: [360, 180, 0]
          }}
          transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] md:w-[400px] md:h-[400px] rounded-full"
          style={{
              background: 'radial-gradient(circle, rgba(245,160,68,0.6) 0%, rgba(245,160,68,0) 70%)'
          }}
          animate={{
              scale: [1, 1.3, 1],
              opacity: [0.7, 1, 0.7]
          }}
          transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
          }}
        />

        {/* 3. Enhanced Rising Sparks with Colors */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 35 }).map((_, i) => {
            const colors = ['#ea580c', '#EC167F', '#f59e0b', '#f97316'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            const spark = {
              id: i,
              left: `${Math.random() * 100}%`,
              size: Math.random() * 4 + 2,
              duration: Math.random() * 5 + 3,
              delay: Math.random() * 3,
            };
            return (
              <motion.div
                key={spark.id}
                className="absolute bottom-[-20px] rounded-full blur-[2px]"
                style={{
                    left: spark.left,
                    width: `${spark.size}px`,
                    height: `${spark.size}px`,
                    backgroundColor: randomColor,
                    boxShadow: `0 0 ${spark.size * 3}px ${spark.size}px ${randomColor}99`
                }}
                animate={{
                    y: [0, -600],
                    x: [0, Math.random() * 100 - 50],
                    opacity: [0, 1, 1, 0],
                    scale: [0.5, 1.5, 1, 0.5]
                }}
                transition={{
                    duration: spark.duration,
                    repeat: Infinity,
                    delay: spark.delay,
                    ease: "easeOut"
                }}
              />
            );
          })}
        </div>

        {/* 4. Floating Gradient Orbs */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute w-32 h-32 rounded-full opacity-30 blur-2xl"
            style={{
              background: `radial-gradient(circle, ${['#ea580c', '#EC167F', '#f59e0b'][i % 3]} 0%, transparent 70%)`,
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}

        {/* ======================================================== FOREGROUND CONTENT (3D Style) ======================================================== */}
        <div className="relative z-10 text-center max-w-4xl px-4 sm:px-6">
          
          {/* Badge with Animation */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full bg-white/90 backdrop-blur-sm border-2 border-[#ea580c] shadow-[0_4px_20px_rgba(234,88,12,0.3)] mb-4 sm:mb-5 md:mb-6"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles size={16} className="text-[#ea580c] sm:w-[18px] sm:h-[18px]" />
            </motion.div>
            <span className="text-xs sm:text-sm font-extrabold tracking-wider bg-gradient-to-r from-[#ea580c] to-[#EC167F] bg-clip-text text-transparent uppercase">
              Get Involved
            </span>
          </motion.div>

          {/* 3D Heading with Enhanced Animation */}
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black leading-[1.1] mb-4 sm:mb-5 md:mb-6 tracking-tight"
          >
            {/* Top line with gradient */}
            <motion.span 
              className="block bg-gradient-to-r from-[#431407] via-[#6B2710] to-[#431407] bg-clip-text text-transparent drop-shadow-[0_4px_8px_rgba(67,20,7,0.4)]"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ backgroundSize: '200% 100%' }}
            >
              Empower a mind.
            </motion.span>
            {/* Bottom line: Vibrant gradient with animation */}
            <motion.span 
              className="block bg-gradient-to-r from-[#ea580c] via-[#EC167F] to-[#f59e0b] bg-clip-text text-transparent drop-shadow-[0_6px_10px_rgba(234,88,12,0.5)]"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ backgroundSize: '200% 100%' }}
            >
              Transform a future.
            </motion.span>
          </motion.h1>

          {/* Subtext with Animation */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-base sm:text-lg md:text-xl text-[#431407] font-semibold max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-7 md:mb-8 drop-shadow-sm"
          >
            Support students from Tier-2 and Tier-3 communities through sustained education and mentorship.
          </motion.p>

          {/* Enhanced 3D Button with Glow */}
          <motion.a 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://pages.razorpay.com/pl_PlNSF1e11K7kB9/view"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 bg-gradient-to-r from-[#ea580c] to-[#EC167F] text-white rounded-full font-bold text-sm sm:text-base shadow-[0_10px_30px_rgba(234,88,12,0.5),_0_0_20px_rgba(236,22,127,0.3)] hover:shadow-[0_15px_40px_rgba(234,88,12,0.6),_0_0_30px_rgba(236,22,127,0.4)] transition-all duration-300"
          >
            <span>Make a Donation</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart size={20} className="text-white group-hover:fill-white transition-all" />
            </motion.div>
          </motion.a>

        </div>
      </section>

      {/* ================= BANK TRANSFER DETAILS ================= */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
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
            className="text-center mb-10 sm:mb-12 md:mb-14"
          >
            <div className="inline-block px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4 bg-blue-100 text-blue-700">
              Direct Bank Transfer
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#431407] to-[#6B2710] bg-clip-text text-transparent">
              Bank Account Details
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
              You can also donate directly through bank transfer to support our educational initiatives.
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
                <Building2 className="text-blue-600 flex-shrink-0" size={28} />
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
              </div>
            </motion.div>

            {/* Additional Details Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border-2 border-blue-100 hover:shadow-xl transition-all"
            >
              <h3 className="font-bold text-xl sm:text-2xl text-[#431407] mb-6 flex items-center gap-3">
                <Mail className="text-blue-600 flex-shrink-0" size={28} />
                Additional Information
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-slate-500 font-semibold uppercase tracking-wide mb-2">IFSC Code</p>
                  <p className="text-base sm:text-lg font-bold text-[#431407] bg-blue-50 p-3 rounded-lg font-mono">
                    IBKL0000868
                  </p>
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-semibold uppercase tracking-wide mb-2">Phone Number</p>
                  <p className="text-base sm:text-lg font-bold text-[#431407] bg-blue-50 p-3 rounded-lg">
                    <a href="tel:+919686953106" className="hover:text-blue-600 transition-colors">
                      +91 9686953106
                    </a>
                  </p>
                </div>
                <div className="pt-4 border-t border-blue-100">
                  <p className="text-sm text-slate-600 leading-relaxed">
                    <strong className="text-[#431407]">Note:</strong> All donations are eligible for 80G tax exemption under the Indian Income Tax Act. Please save your receipt for tax purposes.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Copy to Clipboard Helper */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 sm:mt-10 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl p-6 sm:p-8 border-2 border-blue-200"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <CheckCircle2 className="text-white" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg text-[#431407] mb-2">Easy Bank Transfer</h4>
                <p className="text-slate-700 leading-relaxed">
                  You can transfer any amount directly to the above bank account. Ensure you mention "Sohum Trust" in the payment reference for easy tracking and tax documentation.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= DONATION ================= COMMENTED OUT */}
      {/* 
      <section id="donation-section" className="py-8 sm:py-12 md:py-16 bg-gradient-to-b from-white via-orange-50/30 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#ea580c]/10 to-[#EC167F]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#f59e0b]/10 to-transparent rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10 px-4 sm:px-6"
          >
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-semibold tracking-widest uppercase mb-3 sm:mb-4 bg-gradient-to-r from-[#ea580c] to-[#EC167F] text-white shadow-lg"
            >
              Direct Impact
            </motion.div>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-[#431407] to-[#6B2710] bg-clip-text text-transparent">
              Choose your contribution
            </h2>
            <p className="text-sm sm:text-base text-slate-700 font-medium">
              Every donation strengthens long-term educational institutions.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-5xl mx-auto px-4 sm:px-6 mb-6 sm:mb-8">
            {donationTiers.map((tier, i) => (
              <DonationCard key={tier.id} tier={tier} index={i} onSelect={handleSelectAmount} />
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto px-4 sm:px-6"
          >
            <div className="bg-gradient-to-br from-white to-orange-50/50 rounded-xl sm:rounded-2xl shadow-xl border-2 border-[#ea580c]/20 p-5 sm:p-6 md:p-8 backdrop-blur-sm">
              <h3 className="font-bold text-lg sm:text-xl text-[#431407] mb-4 sm:mb-5 text-center flex flex-col sm:flex-row items-center justify-center gap-2">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="text-[#ea580c]" size={24} />
                </motion.div>
                Or Enter Custom Amount
              </h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <IndianRupee className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-[#ea580c]" size={20} />
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    placeholder="Enter amount"
                    className="w-full pl-10 sm:pl-14 pr-3 sm:pr-4 py-3 sm:py-4 border-2 border-[#ea580c]/30 rounded-xl focus:border-[#ea580c] focus:outline-none focus:ring-2 focus:ring-[#ea580c]/20 font-bold text-lg sm:text-xl bg-white/80 backdrop-blur-sm transition-all"
                    min="1"
                  />
                </div>
                <motion.button 
                  onClick={handleCustomDonate}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#ea580c] to-[#EC167F] text-white font-bold rounded-xl hover:shadow-xl transition-all flex items-center justify-center gap-2 shadow-lg text-sm sm:text-base"
                >
                  Donate 
                  <motion.div
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <Heart size={20} className="fill-white" />
                  </motion.div>
                </motion.button>
              </div>
              <p className="text-sm text-slate-600 mt-4 text-center font-medium">Minimum donation: ₹1 • 100% secure transaction</p>
            </div>
          </motion.div>
        </div>
      </section>
      */}

      {/* ================= CSR ================= */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#431407] via-[#2a0d04] to-[#1a0502] text-white relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-10 right-10 w-72 h-72 bg-[#ea580c]/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-10 left-10 w-64 h-64 bg-[#EC167F]/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12"
          >
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-4 bg-white/10 backdrop-blur-sm border border-white/20 text-orange-200 shadow-lg"
            >
              Corporate & CSR
            </motion.div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">
              Partner with purpose
            </h2>
            <p className="text-lg text-orange-100/90 font-medium">
              Build future-ready institutions through strategic CSR programs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { text: 'Custom CSR-aligned education programs', icon: '🎯' },
              { text: 'Employee mentorship & engagement', icon: '👥' },
              { text: 'Transparent reporting & audits', icon: '📊' },
              { text: 'Long-term institutional branding', icon: '🏆' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.03, x: 5 }}
                className="group flex items-center gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/15 hover:border-[#ea580c] transition-all cursor-pointer shadow-lg"
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl"
                >
                  {item.icon}
                </motion.div>
                <div className="flex items-center gap-3 flex-1">
                  <CheckCircle2 className="text-[#ea580c] flex-shrink-0 group-hover:scale-110 transition-transform" size={24} />
                  <span className="text-base font-medium">{item.text}</span>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-10 text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#ea580c] to-[#EC167F] text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all"
            >
              <Building2 size={20} />
              Schedule a Partnership Call
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* ================= VOLUNTEER ================= */}
      <section className="py-20 bg-gradient-to-b from-white via-purple-50/30 to-white relative overflow-hidden">
        {/* Decorative animated orbs */}
        <motion.div 
          className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12 px-6"
          >
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
            >
              Join the Movement
            </motion.div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
              More ways to help
            </h2>
            <p className="text-lg text-slate-700 font-medium">
              Your time and skills can change lives.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30, rotateY: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group bg-gradient-to-br from-blue-50 via-indigo-50 to-white p-8 rounded-3xl shadow-xl border-2 border-blue-200 hover:border-blue-400 hover:shadow-2xl transition-all cursor-pointer relative overflow-hidden"
            >
              <motion.div 
                className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-300/30 to-transparent rounded-full blur-2xl"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div className="relative z-10">
                <motion.div 
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <Users className="text-white" size={32} />
                </motion.div>
                <h3 className="font-heading text-2xl font-bold text-[#431407] mb-3">
                  Become a Mentor
                </h3>
                <p className="text-slate-700 text-base leading-relaxed">
                  Guide students academically and professionally through one-on-one mentorship programs.
                </p>
                <motion.div 
                  className="mt-4 inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight size={18} />
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, rotateY: 20 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-gradient-to-br from-emerald-50 via-teal-50 to-white p-8 rounded-3xl shadow-xl border-2 border-emerald-200 hover:border-emerald-400 hover:shadow-2xl transition-all cursor-pointer relative overflow-hidden"
            >
              <motion.div 
                className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-300/30 to-transparent rounded-full blur-2xl"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              />
              <div className="relative z-10">
                <motion.div 
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform"
                  whileHover={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <Globe className="text-white" size={32} />
                </motion.div>
                <h3 className="font-heading text-2xl font-bold text-[#431407] mb-3">
                  Outreach & Advocacy
                </h3>
                <p className="text-slate-700 text-base leading-relaxed">
                  Support awareness campaigns and advocate for quality education in rural communities.
                </p>
                <motion.div 
                  className="mt-4 inline-flex items-center gap-2 text-emerald-600 font-semibold group-hover:gap-3 transition-all"
                >
                  Get Started <ArrowRight size={18} />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-[#431407] to-[#6B2710] bg-clip-text text-transparent">
              Common Questions
            </h2>
            <p className="text-center text-slate-600 mb-10 text-lg">Everything you need to know about donations</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl shadow-2xl p-8 border-2 border-orange-100"
          >
            {faqData.map((item, i) => (
              <FAQItem key={i} {...item} />
            ))}
          </motion.div>
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
          animate={{
            backgroundPosition: ['0px 0px', '30px 30px'],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Floating orbs */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-24 h-24 bg-white/10 rounded-full blur-2xl"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, 30, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
        
        {/* Animated floating hearts */}
        {[...Array(8)].map((_, i) => {
          const randomLeft = Math.random() * 100;
          const randomTop = Math.random() * 100;
          const randomSize = Math.random() * 12 + 18;
          const randomDuration = Math.random() * 1.5 + 1.5;
          const randomDelay = Math.random() * 3;
          const randomYDistance = -(Math.random() * 50 + 40);
          const randomRotation = Math.random() * 20 - 10;
          
          return (
            <motion.div
              key={`heart-${i}`}
              className="absolute pointer-events-none"
              style={{
                left: `${randomLeft}%`,
                top: `${randomTop}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 0.7, 0.7, 0],
                scale: [0, 1, 1.15, 0],
                y: [0, randomYDistance / 2, randomYDistance],
                rotate: [0, randomRotation, -randomRotation, 0],
              }}
              transition={{
                duration: randomDuration,
                repeat: Infinity,
                delay: randomDelay,
                ease: "easeOut"
              }}
            >
              <Heart size={randomSize} className="text-white fill-white drop-shadow-lg" />
            </motion.div>
          );
        })}
        
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl md:text-6xl font-bold mb-8 drop-shadow-lg">
              Make an Impact Today
            </h2>
            <p className="max-w-2xl mx-auto mb-12 text-xl text-white/95 font-medium">
              Every contribution helps us build stronger educational foundations for tomorrow's leaders
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a 
                href="https://pages.razorpay.com/pl_PlNSF1e11K7kB9/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#EC167F] px-12 py-5 rounded-full font-bold shadow-2xl hover:shadow-3xl transition-all"
              >
                <Sparkles size={20} />
                Start Donating
                <ArrowRight size={20} />
              </a>
            </motion.div>
          
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-white/80 text-sm"
            >
              ✓ 100% Secure Payments • ✓ Tax Benefits (80G) • ✓ Instant Receipt
            </motion.p>
          </motion.div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default GetInvolvedPage;
