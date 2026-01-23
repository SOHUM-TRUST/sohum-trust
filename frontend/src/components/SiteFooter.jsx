import React from 'react';
import { Heart, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const SiteFooter = () => {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold flex items-center space-x-2">
              <Heart className="w-5 h-5 text-[#f9c483]" />
              <span>Sohum Trust</span>
            </h3>
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
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contact Us</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#f9c483]" />
                <span>sohumtrust@zohomail.in</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#f9c483]" />
                <span>+91 XXXX XXXXXX</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#f9c483]" />
                <span>Karnataka, India</span>
              </li>
            </ul>
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
