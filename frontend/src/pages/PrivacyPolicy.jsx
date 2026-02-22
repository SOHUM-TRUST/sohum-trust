import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Database, Users, Bell, FileText, Mail, Phone } from 'lucide-react';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import FloatingDonateButton from '../components/FloatingDonateButton';

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: Eye,
      title: "1. Information We Collect",
      content: `We collect information that you provide directly to us when you interact with our website and services. This includes:

**Personal Information:** Name, email address, phone number, mailing address, and any other information you choose to provide when making donations, signing up for newsletters, or contacting us.

**Donation Information:** Payment details, donation amounts, and transaction history. Please note that payment processing is handled by secure third-party payment processors, and we do not store complete credit card or banking information on our servers.

**Communication Data:** Records of correspondence when you contact us via email, phone, or through our website contact forms.

**Technical Information:** IP address, browser type, device information, operating system, and website usage data collected through cookies and similar technologies to improve your browsing experience.`
    },
    {
      icon: Database,
      title: "2. How We Use Your Information",
      content: `Sohum Trust uses the information we collect for the following purposes:

**Processing Donations:** To process and acknowledge your contributions, issue tax receipts, and maintain accurate donation records as required by law.

**Communication:** To respond to your inquiries, provide information about our programs and initiatives, send newsletters and updates (if you've opted in), and keep you informed about how your donations are making an impact.

**Legal Compliance:** To comply with applicable laws, regulations, and legal obligations, including tax reporting requirements and charitable organization regulations.

**Website Improvement:** To analyze website usage patterns, improve our website functionality, enhance user experience, and ensure the security of our platform.

**Internal Operations:** To maintain internal records, conduct research and analysis to improve our programs, and fulfill our mission of educational advancement.`
    },
    {
      icon: Users,
      title: "3. Information Sharing and Disclosure",
      content: `We respect your privacy and do not sell, rent, or trade your personal information to third parties. We may share your information only in the following limited circumstances:

**Service Providers:** We work with trusted third-party service providers who assist us with payment processing, email communications, website hosting, and data analytics. These providers are contractually obligated to protect your information and use it only for the purposes we specify.

**Legal Requirements:** We may disclose information when required by law, court order, or government regulation, or when we believe disclosure is necessary to protect our rights, your safety, or the safety of others.

**Organizational Changes:** In the event of a merger, acquisition, or transfer of assets, your information may be transferred to the successor organization, which will be required to honor this privacy policy.

**With Your Consent:** We may share information with your explicit consent for specific purposes not covered above.`
    },
    {
      icon: Lock,
      title: "4. Data Security",
      content: `Sohum Trust takes the security of your personal information seriously and implements appropriate technical and organizational measures to protect it:

**Secure Transmission:** We use industry-standard SSL/TLS encryption to protect data transmitted between your browser and our servers.

**Access Controls:** Access to personal information is restricted to authorized personnel who need it to perform their duties and are bound by confidentiality obligations.

**Payment Security:** All payment transactions are processed through PCI-DSS compliant payment gateways, ensuring your financial information is handled with the highest security standards.

**Regular Monitoring:** We regularly review and update our security practices to protect against unauthorized access, alteration, disclosure, or destruction of your information.

While we strive to protect your personal information, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security but maintain commercially reasonable efforts to protect your data.`
    },
    {
      icon: Bell,
      title: "5. Your Rights and Choices",
      content: `You have certain rights regarding your personal information:

**Access and Correction:** You may request access to the personal information we hold about you and request corrections if it is inaccurate or incomplete.

**Communication Preferences:** You can opt out of receiving promotional emails by clicking the unsubscribe link in our emails or contacting us directly. Please note that even if you opt out, we may still send you transaction-related communications.

**Data Deletion:** You may request deletion of your personal information, subject to our legal obligations to retain certain records for tax, legal, and compliance purposes.

**Withdraw Consent:** Where processing is based on consent, you have the right to withdraw your consent at any time, though this will not affect the lawfulness of processing before withdrawal.

To exercise any of these rights, please contact us using the information provided at the end of this policy.`
    },
    {
      icon: FileText,
      title: "6. Cookies and Tracking Technologies",
      content: `Our website uses cookies and similar tracking technologies to enhance your browsing experience:

**Essential Cookies:** These cookies are necessary for the website to function properly and cannot be disabled. They enable core functionality such as security, network management, and accessibility.

**Analytics Cookies:** We use analytics tools to understand how visitors interact with our website, helping us improve content and functionality. These cookies collect anonymous information about page visits, traffic sources, and user behavior.

**Preference Cookies:** These cookies remember your preferences and settings to provide a more personalized experience on future visits.

You can control cookie preferences through your browser settings. Please note that disabling certain cookies may affect website functionality and your user experience.`
    },
    {
      icon: Users,
      title: "7. Third-Party Links",
      content: `Our website may contain links to third-party websites, including payment processors, social media platforms, and partner organizations. This privacy policy applies only to Sohum Trust's website and services.

We are not responsible for the privacy practices or content of third-party websites. We encourage you to review the privacy policies of any third-party sites you visit before providing personal information.`
    },
    {
      icon: Users,
      title: "8. Children's Privacy",
      content: `Sohum Trust's website and services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have inadvertently collected information from a child, we will take steps to delete it promptly.

If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.`
    },
    {
      icon: Database,
      title: "9. Data Retention",
      content: `We retain your personal information for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law.

**Donation Records:** We retain donation records and related information for a minimum of seven years to comply with tax regulations and financial reporting requirements.

**Communication Records:** We maintain records of correspondence and communications for as long as necessary to provide support and maintain our relationship with you.

**Marketing Data:** If you opt out of marketing communications, we will retain minimal information to ensure we honor your preferences.

When personal information is no longer needed, we securely delete or anonymize it in accordance with our data retention policies.`
    },
    {
      icon: FileText,
      title: "10. International Data Transfers",
      content: `Sohum Trust operates primarily in India, and your information is stored and processed on servers located in India. If you are accessing our website from outside India, please be aware that your information may be transferred to, stored, and processed in India, where data protection laws may differ from those in your jurisdiction.

By using our website and providing your information, you consent to the transfer and processing of your data in India in accordance with this privacy policy.`
    },
    {
      icon: Bell,
      title: "11. Changes to This Privacy Policy",
      content: `Sohum Trust reserves the right to update or modify this privacy policy at any time to reflect changes in our practices, technology, legal requirements, or for other operational reasons.

When we make material changes to this policy, we will update the "Last Updated" date at the top of this page and may notify you through email or a prominent notice on our website. We encourage you to review this privacy policy periodically to stay informed about how we protect your information.

Your continued use of our website after any changes constitutes acceptance of the updated privacy policy.`
    },
    {
      icon: Shield,
      title: "12. Compliance and Regulatory Information",
      content: `Sohum Trust operates in compliance with applicable Indian laws and regulations, including:

**Information Technology Act, 2000:** We comply with the provisions of the IT Act and its amendments regarding electronic records and digital signatures.

**Income Tax Act, 1961:** We maintain donor records and issue receipts in accordance with tax regulations for charitable organizations.

**FCRA Regulations:** For foreign contributions, we comply with the Foreign Contribution Regulation Act requirements.

We are committed to maintaining the highest standards of data protection and privacy in all our operations.`
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
          className="absolute top-20 right-[15%] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#FF6B9D]/20 to-[#FFB347]/15 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
          }}
          transition={{
            duration: 15,
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
              <Shield className="w-10 h-10 text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#431407] mb-6"
            >
              Privacy Policy
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-slate-700 leading-relaxed"
            >
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 inline-flex items-center gap-2 text-sm text-slate-600 bg-amber-50 px-4 py-2 rounded-full border border-amber-200"
            >
              <Bell className="w-4 h-4 text-amber-600" />
              Last Updated: January 31, 2026
            </motion.div>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8"
            >
              <div className="flex items-start gap-4 mb-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                <Lock className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-blue-900 mb-2">Our Commitment to Your Privacy</h3>
                  <p className="text-sm text-blue-800 leading-relaxed">
                    At Sohum Trust, we are committed to protecting your privacy and maintaining the confidentiality 
                    of your personal information. This Privacy Policy explains how we collect, use, disclose, and 
                    safeguard your information when you visit our website or interact with our services. Please read 
                    this policy carefully to understand our practices regarding your personal data.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Policy Sections */}
            <div className="space-y-6">
              {sections.map((section, index) => {
                const IconComponent = section.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                    className="bg-white rounded-2xl shadow-lg p-8 md:p-10"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-gradient-to-br from-[#EC167F]/10 to-[#F5A044]/10 rounded-xl">
                        <IconComponent className="w-6 h-6 text-[#EC167F]" />
                      </div>
                      <h2 className="text-xl md:text-2xl font-bold text-[#431407] flex-1">
                        {section.title}
                      </h2>
                    </div>
                    <div className="text-slate-700 leading-relaxed whitespace-pre-line">
                      {section.content}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="bg-gradient-to-br from-[#EC167F] to-[#F5A044] rounded-2xl shadow-xl p-8 mt-8 text-white"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-3">Contact Us About Privacy</h3>
                <p className="text-white/95 leading-relaxed max-w-2xl mx-auto">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, 
                  please don't hesitate to contact us:
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

              <div className="mt-8 text-center text-sm text-white/90 border-t border-white/20 pt-6">
                <p>
                  <strong>Sohum Trust</strong><br />
                  Karnataka, India
                </p>
              </div>
            </motion.div>

            {/* Acknowledgment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.7 }}
              className="bg-white rounded-2xl shadow-lg p-8 mt-8 text-center"
            >
              <Shield className="w-12 h-12 mx-auto mb-4 text-[#EC167F]" />
              <h3 className="text-xl font-bold text-[#431407] mb-3">
                Your Trust Matters to Us
              </h3>
              <p className="text-slate-700 leading-relaxed max-w-2xl mx-auto">
                By using our website and services, you acknowledge that you have read and understood this Privacy Policy. 
                We are dedicated to maintaining your trust and protecting your personal information as we work together 
                to create lasting educational impact.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default PrivacyPolicy;
