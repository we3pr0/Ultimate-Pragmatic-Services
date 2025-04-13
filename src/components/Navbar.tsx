import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, Phone } from 'lucide-react';
import MobileMenu from './MobileMenu';
import useScrollPosition from '../hooks/useScrollPosition';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { y: scrollY, direction: scrollDirection } = useScrollPosition();

  const isScrolled = scrollY > 10;
  const shouldHideNavbar = scrollY > 100 && scrollDirection === 'down';

  const navigation = [
    { name: 'Home', to: '/' },
    { name: 'Services', to: '/services' },
    { name: 'About Us', to: '/about' },
    { name: 'Contact', to: '/contact' },
    { name: 'Samples', to: '/samples' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        } ${
          shouldHideNavbar ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-2xl font-display font-bold text-secondary-900">
                Ultimate<span className="text-[#007ACC]">Services</span>
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-[#007ACC]'
                        : 'text-secondary-600 hover:text-[#005999]'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex md:items-center">
              <a
                href="tel:+1234567890"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-[#007ACC] hover:bg-[#005999] transition-colors"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Us
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-lg text-secondary-600 hover:text-[#007ACC] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#007ACC]"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <Menu className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
};

export default Navbar;