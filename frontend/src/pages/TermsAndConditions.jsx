import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Scale, AlertCircle } from 'lucide-react';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import FloatingDonateButton from '../components/FloatingDonateButton';

const TermsAndConditions = () => {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing and using the Sohum Trust website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please refrain from using our website and services."
    },
    {
      title: "2. About Sohum Trust",
      content: "Sohum Trust is a registered charitable trust dedicated to advancing comprehensive education by establishing and sustaining educational institutions. We operate in compliance with applicable laws and regulations governing charitable organizations in India."
    },
    {
      title: "3. Use of Website",
      content: "Our website provides information about our mission, programs, and opportunities to support our work. You agree to use this website only for lawful purposes and in a manner that does not infringe upon the rights of others or restrict their use of the website. Prohibited activities include attempting to gain unauthorized access, introducing malicious code, or engaging in any activity that disrupts the website's functionality."
    },
    {
      title: "4. Donations and Contributions",
      content: "All donations made to Sohum Trust are voluntary and non-refundable except as required by law. Donations are used to support our educational initiatives and institutional development. Donors will receive acknowledgment of their contributions as per applicable tax regulations. We reserve the right to refuse or return any donation at our discretion."
    },
    {
      title: "5. Intellectual Property",
      content: "All content on this website, including text, graphics, logos, images, and software, is the property of Sohum Trust or its content suppliers and is protected by intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content without explicit written permission from Sohum Trust."
    },
    {
      title: "6. Privacy and Data Protection",
      content: "We are committed to protecting your privacy and personal information. Any personal data collected through our website is handled in accordance with applicable data protection laws. We collect information necessary for processing donations, responding to inquiries, and keeping supporters informed about our work. We do not sell, trade, or share your personal information with third parties except as necessary to process donations or as required by law."
    },
    {
      title: "7. Third-Party Links",
      content: "Our website may contain links to third-party websites for your convenience. Sohum Trust does not endorse or assume responsibility for the content, policies, or practices of any third-party websites. Your use of such websites is at your own risk, and we encourage you to review their terms and privacy policies."
    },
    {
      title: "8. Disclaimer of Warranties",
      content: "The website and its content are provided 'as is' without warranties of any kind, either express or implied. While we strive to ensure the accuracy and timeliness of information on our website, we make no guarantees regarding its completeness, reliability, or suitability for any particular purpose. Sohum Trust reserves the right to modify, suspend, or discontinue any aspect of the website without prior notice."
    },
    {
      title: "9. Limitation of Liability",
      content: "To the fullest extent permitted by law, Sohum Trust, its trustees, officers, employees, and volunteers shall not be liable for any indirect, incidental, consequential, or punitive damages arising from your use of or inability to use the website, including but not limited to loss of data, revenue, or profits."
    },
    {
      title: "10. Governing Law and Jurisdiction",
      content: "These Terms and Conditions are governed by and construed in accordance with the laws of India. Any disputes arising from these terms or your use of the website shall be subject to the exclusive jurisdiction of the courts located in Karnataka, India."
    },
    {
      title: "11. Modifications to Terms",
      content: "Sohum Trust reserves the right to update or modify these Terms and Conditions at any time without prior notice. Changes will be effective immediately upon posting to the website. Your continued use of the website after any modifications constitutes acceptance of the revised terms. We encourage you to review this page periodically."
    },
    {
      title: "12. Contact Information",
      content: "If you have any questions, concerns, or feedback regarding these Terms and Conditions, please contact us at info@sohumtrust.org or call us at +91 9482986952. We are committed to addressing your inquiries promptly."
    }
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
          className="absolute top-20 left-[10%] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#FF6B9D]/20 to-[#FFB347]/15 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
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
              <Scale className="w-10 h-10 text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-[#431407] mb-6"
            >
              Terms and Conditions
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-slate-700 leading-relaxed"
            >
              Please read these terms carefully before using our website and services
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 inline-flex items-center gap-2 text-sm text-slate-600 bg-amber-50 px-4 py-2 rounded-full border border-amber-200"
            >
              <AlertCircle className="w-4 h-4 text-amber-600" />
              Last Updated: January 31, 2026
            </motion.div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8"
            >
              <div className="flex items-start gap-4 mb-8 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                <FileText className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-blue-900 mb-2">Important Notice</h3>
                  <p className="text-sm text-blue-800 leading-relaxed">
                    These Terms and Conditions constitute a legally binding agreement between you and Sohum Trust. 
                    By accessing or using our website, you agree to comply with these terms in their entirety.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                {sections.map((section, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                    className="pb-6 border-b border-slate-200 last:border-b-0"
                  >
                    <h2 className="text-xl font-bold text-[#431407] mb-3">
                      {section.title}
                    </h2>
                    <p className="text-slate-700 leading-relaxed">
                      {section.content}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Acknowledgment Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="bg-gradient-to-br from-[#EC167F] to-[#F5A044] rounded-2xl shadow-xl p-8 text-white text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Thank You for Your Support</h3>
              <p className="text-white/95 leading-relaxed max-w-2xl mx-auto">
                By using our website and supporting Sohum Trust, you are helping us create lasting educational 
                impact in communities. If you have any questions about these terms, please don't hesitate to contact us.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default TermsAndConditions;
