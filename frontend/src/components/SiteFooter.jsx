import React from 'react';
import { Heart, Mail, MapPin, Phone } from 'lucide-react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SiteFooter = () => {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="/cover.png"
                alt="Sohum Trust Logo"
                className="h-20 md:h-24 w-auto object-contain"
              />
              <h3 className="text-xl font-bold">
                Sohum Trust
              </h3>
            </Link>
            <p className="text-slate-300 leading-relaxed">
              Sohum Trust champions comprehensive educational advancement,
              establishing and sustaining institutions that empower learners at
              every stage.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2 text-slate-300">
              <li>
                <Link
                  to="/about"
                  className="hover:text-[#f9c483] transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/what-we-enable"
                  className="hover:text-[#f9c483] transition-colors duration-200"
                >
                  What We Enable
                </Link>
              </li>
              <li>
                <Link
                  to="/impact"
                  className="hover:text-[#f9c483] transition-colors duration-200"
                >
                  Impact
                </Link>
              </li>
              <li>
                <Link
                  to="/get-involved"
                  className="hover:text-[#f9c483] transition-colors duration-200"
                >
                  Get Involved
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="hover:text-[#f9c483] transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="hover:text-[#f9c483] transition-colors duration-200"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/refund-policy"
                  className="hover:text-[#f9c483] transition-colors duration-200"
                >
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contact & Bank Details</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#f9c483]" />
                <span>info@sohumtrust.org</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#f9c483]" />
                <a href="tel:+919482986952" className="hover:text-[#f9c483] transition-colors duration-200">+91 9482986952</a>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#f9c483]" />
                <span>Karnataka, India</span>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-slate-700">
              <h4 className="text-sm font-semibold text-[#f9c483] mb-2 uppercase">Direct Bank Transfer</h4>
              <div className="text-sm text-slate-400 space-y-1">
                <p><strong>Account:</strong> Sohum Trust</p>
                <p><strong>Number:</strong> 0868102000016320</p>
                <p><strong>Bank:</strong> IDBI BANK, Banashankari</p>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/sohum_trust?igsh=MTRncjVmMG81aHR0eA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-[#f9c483] transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-7 h-7" />
                </a>
                <a
                  href="https://www.facebook.com/share/17s2kskL9T/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-[#f9c483] transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <FaFacebook className="w-7 h-7" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-10 pt-8 text-center text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} Sohum Trust. All rights reserved.
            Building futures through education.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
