import React from 'react';
import { motion } from 'framer-motion';
import { Ban, Heart, AlertCircle, Mail, Phone } from 'lucide-react';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import FloatingDonateButton from '../components/FloatingDonateButton';

const RefundPolicy = () => {
  const reasons = [
    {
      title: "Voluntary Nature of Donations",
      description: "All contributions to Sohum Trust are made voluntarily and with the understanding that they support our charitable mission. Once donated, funds are immediately allocated to our educational programs and institutional development initiatives."
    },
    {
      title: "Immediate Fund Utilization",
      description: "Donations received are promptly utilized for ongoing educational projects, infrastructure development, and program implementation. The nature of our work requires immediate deployment of resources to maintain continuity in our educational initiatives."
    },
    {
      title: "Tax Benefit Implications",
      description: "Donors may receive tax deductions or benefits for their contributions as per applicable tax laws. Refunding donations would compromise these tax benefits and create complications in compliance with tax regulations."
    },
    {
      title: "Administrative and Legal Compliance",
      description: "As a registered charitable trust, we maintain strict financial protocols and reporting requirements. Refunding donations would create administrative complexities and potentially affect our compliance status with regulatory authorities."
    }
  ];

  const exceptions = [
    "Duplicate transactions made in error",
    "Technical errors during the payment process",
    "Unauthorized transactions on your account",
    "Amounts exceeding the intended donation due to technical glitches"
  ];

  return (
    <div className="bg-[#fffdf9] min-h-screen">
      <SiteHeader />
      <FloatingDonateButton />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#fff1e6] via-[#fff7ed] to-[#fffdf9] py-20">
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #ea580c 1px, transparent 1px),
                             linear-gradient(to bottom, #ea580c 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }} />
        </div>

        <motion.div
          className="absolute bottom-20 right-[10%] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#EC167F]/20 to-[#F5A044]/15 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-[#EC167F] to-[#F5A044] rounded-2xl shadow-xl"
            >
              <Heart className="w-10 h-10 text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#431407] mb-6"
            >
              Refund Policy
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-slate-700 leading-relaxed"
            >
              Understanding our policy on donations and contributions
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 inline-flex items-center gap-2 text-sm text-slate-600 bg-amber-50 px-4 py-2 rounded-full border border-amber-200"
            >
              <AlertCircle className="w-4 h-4 text-amber-600" />
              Effective Date: January 31, 2026
            </motion.div>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            
            {/* No Refund Notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8 border-2 border-red-100"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-red-50 rounded-xl">
                  <Ban className="w-8 h-8 text-red-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-[#431407] mb-3">
                    No Refund Policy
                  </h2>
                  <p className="text-slate-700 leading-relaxed text-lg">
                    Sohum Trust operates under a strict <strong>no refund policy</strong> for all donations and 
                    contributions made to the trust. All donations are final and non-refundable once processed.
                  </p>
                </div>
              </div>
              
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mt-6">
                <p className="text-amber-900 leading-relaxed">
                  <strong>Important:</strong> Before making a donation, please ensure that you have carefully 
                  reviewed the amount and purpose of your contribution. Once a donation is completed, it cannot 
                  be reversed or refunded except under very specific circumstances outlined below.
                </p>
              </div>
            </motion.div>

            {/* Why No Refunds */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8"
            >
              <h2 className="text-2xl font-bold text-[#431407] mb-6">
                Why We Have a No Refund Policy
              </h2>
              <p className="text-slate-700 leading-relaxed mb-8">
                As a charitable trust committed to educational advancement, we maintain a no refund policy for 
                several important reasons:
              </p>
              
              <div className="space-y-6">
                {reasons.map((reason, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="flex gap-4 p-5 bg-slate-50 rounded-xl border border-slate-200"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#EC167F] to-[#F5A044] rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#431407] mb-2">
                        {reason.title}
                      </h3>
                      <p className="text-slate-700 leading-relaxed text-sm">
                        {reason.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Exceptions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8"
            >
              <h2 className="text-2xl font-bold text-[#431407] mb-6">
                Limited Exceptions
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                While our general policy is no refunds, we recognize that exceptional circumstances may arise. 
                We will consider refund requests only in the following situations:
              </p>
              
              <div className="space-y-3 mb-8">
                {exceptions.map((exception, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                    className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200"
                  >
                    <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-700 text-sm">{exception}</p>
                  </motion.div>
                ))}
              </div>

            </motion.div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="bg-gradient-to-br from-[#EC167F] to-[#F5A044] rounded-2xl shadow-xl p-8 text-white"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-3">Questions About Our Policy?</h3>
                <p className="text-white/95 leading-relaxed max-w-2xl mx-auto">
                  If you have any questions or concerns regarding our refund policy, or if you need to discuss 
                  an exceptional circumstance, please reach out to us:
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <Mail className="w-6 h-6 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-white/80 mb-1">Email Us</p>
                    <a href="mailto:info@sohumtrust.org" className="font-semibold hover:text-white/90 transition-colors">
                      info@sohumtrust.org
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <Phone className="w-6 h-6 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-white/80 mb-1">Call Us</p>
                    <a href="tel:+919482986952" className="font-semibold hover:text-white/90 transition-colors">
                      +91 9482986952
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Thank You Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="bg-white rounded-2xl shadow-lg p-8 mt-8 text-center"
            >
              <Heart className="w-12 h-12 mx-auto mb-4 text-[#EC167F]" />
              <h3 className="text-xl font-bold text-[#431407] mb-3">
                Thank You for Your Generosity
              </h3>
              <p className="text-slate-700 leading-relaxed max-w-2xl mx-auto">
                Your contributions directly support our mission to create lasting educational impact. Every donation, 
                once received, is invested thoughtfully in building institutions and empowering learners at every stage 
                of their educational journey.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default RefundPolicy;
