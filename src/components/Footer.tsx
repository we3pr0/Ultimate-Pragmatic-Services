import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Mail, Phone, MapPin, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#004066]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <FileText className="h-8 w-8 text-[#66b3ff] mr-2" />
              <span className="font-display font-bold text-lg text-white">Ultimate Pragmatic Services</span>
            </div>
            <p className="text-[#99ccff] text-sm leading-relaxed mb-6">
              Professional business plan writing and financial advisory services helping entrepreneurs and businesses worldwide achieve their goals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#99ccff] hover:text-[#66b3ff] transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#99ccff] hover:text-[#66b3ff] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#99ccff] hover:text-[#66b3ff] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-[#99ccff] hover:text-[#66b3ff] transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[#99ccff] hover:text-[#66b3ff] transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#99ccff] hover:text-[#66b3ff] transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#99ccff] hover:text-[#66b3ff] transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/business-plan-investors" className="text-[#99ccff] hover:text-[#66b3ff] transition-colors text-sm">
                  Business Plans
                </Link>
              </li>
              <li>
                <Link to="/services/pitch-deck-investors" className="text-[#99ccff] hover:text-[#66b3ff] transition-colors text-sm">
                  Pitch Decks
                </Link>
              </li>
              <li>
                <Link to="/services/financial-models" className="text-[#99ccff] hover:text-[#66b3ff] transition-colors text-sm">
                  Financial Models
                </Link>
              </li>
              <li>
                <Link to="/services/feasibility-study-startup" className="text-[#99ccff] hover:text-[#66b3ff] transition-colors text-sm">
                  Feasibility Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-[#99ccff] text-sm">
                <Phone className="h-4 w-4 text-[#66b3ff] mr-2" />
                <span>+447988646076 (WhatsApp)</span>
              </li>
              <li className="flex items-center text-[#99ccff] text-sm">
                <Mail className="h-4 w-4 text-[#66b3ff] mr-2" />
                <a href="mailto:info@ultimatepragmaticservices.com" className="hover:text-[#66b3ff] transition-colors">
                  info@ultimatepragmaticservices.com
                </a>
              </li>
              <li className="flex items-center text-[#99ccff] text-sm">
                <MapPin className="h-4 w-4 text-[#66b3ff] mr-2 flex-shrink-0" />
                <span>Serving clients worldwide</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#005999] py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#99ccff] text-sm">
              &copy; {new Date().getFullYear()} Ultimate Pragmatic Services. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-[#99ccff] hover:text-[#66b3ff] transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-[#99ccff] hover:text-[#66b3ff] transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;