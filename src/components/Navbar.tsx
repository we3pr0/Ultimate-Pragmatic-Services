import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, FileText, BarChart, Users, Phone } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-indigo-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <FileText className="h-8 w-8 mr-2" />
              <span className="font-bold text-xl">Ultimate Pragmatic Services</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-indigo-200 px-3 py-2 text-sm font-medium">Home</Link>
            <Link to="/services" className="hover:text-indigo-200 px-3 py-2 text-sm font-medium">Services</Link>
            <Link to="/samples" className="hover:text-indigo-200 px-3 py-2 text-sm font-medium">Sample Documents</Link>
            <Link to="/about" className="hover:text-indigo-200 px-3 py-2 text-sm font-medium">About Us</Link>
            <Link to="/contact" className="hover:text-indigo-200 px-3 py-2 text-sm font-medium">Contact</Link>
            <Link to="/contact" className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md text-sm font-medium">
              Get a Quote
            </Link>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-indigo-200 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/samples" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Sample Documents
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-800"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 rounded-md text-base font-medium bg-indigo-600 hover:bg-indigo-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;