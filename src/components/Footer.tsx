import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <FileText className="h-6 w-6 mr-2" />
              <span className="font-bold text-lg">Ultimate Pragmatic Services</span>
            </div>
            <p className="text-gray-400 text-sm">
              Professional business plan writing and financial advisory services for entrepreneurs, 
              startups, and established businesses worldwide.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white text-sm">Home</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white text-sm">Services</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white text-sm">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white text-sm">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/business-plans" className="text-gray-400 hover:text-white text-sm">Business Plans</Link></li>
              <li><Link to="/services/pitch-decks" className="text-gray-400 hover:text-white text-sm">Pitch Decks</Link></li>
              <li><Link to="/services/financial-models" className="text-gray-400 hover:text-white text-sm">Financial Models</Link></li>
              <li><Link to="/services/feasibility-studies" className="text-gray-400 hover:text-white text-sm">Feasibility Studies</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400 text-sm">
                <Phone className="h-4 w-4 mr-2" />
                <span>+447988646076 (WhatsApp)</span>
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <Phone className="h-4 w-4 mr-2" />
                <span>7797752836 (USA)</span>
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@ultimatepragmaticservices.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Ultimate Pragmatic Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;