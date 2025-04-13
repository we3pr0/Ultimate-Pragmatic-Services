import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, FileText } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      isScrolled ? 'bg-white shadow-soft' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <FileText className={`h-8 w-8 mr-2 ${isScrolled ? 'text-primary-600' : 'text-white'}`} />
              <span className={`font-display font-bold text-xl ${
                isScrolled ? 'text-secondary-900' : 'text-white'
              }`}>
                Ultimate Pragmatic Services
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {[
              { path: '/', label: 'Home' },
              { path: '/services', label: 'Services' },
              { path: '/samples', label: 'Sample Documents' },
              { path: '/about', label: 'About Us' },
              { path: '/contact', label: 'Contact' },
            ].map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`nav-link ${
                  isActive(path)
                    ? 'text-primary-600 font-semibold'
                    : isScrolled
                    ? 'text-secondary-600'
                    : 'text-white hover:text-primary-100'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/contact"
              className={`${
                isScrolled
                  ? 'bg-primary-600 hover:bg-primary-700 text-white'
                  : 'bg-white hover:bg-primary-50 text-primary-600'
              } px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200`}
            >
              Get a Quote
            </Link>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                isScrolled ? 'text-secondary-600' : 'text-white'
              } hover:text-primary-600 focus:outline-none`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {[
              { path: '/', label: 'Home' },
              { path: '/services', label: 'Services' },
              { path: '/samples', label: 'Sample Documents' },
              { path: '/about', label: 'About Us' },
              { path: '/contact', label: 'Contact' },
            ].map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`block px-3 py-2 rounded-lg text-base font-medium ${
                  isActive(path)
                    ? 'bg-primary-50 text-primary-600'
                    : 'text-secondary-600 hover:bg-secondary-50 hover:text-primary-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-lg text-base font-medium bg-primary-600 text-white hover:bg-primary-700"
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