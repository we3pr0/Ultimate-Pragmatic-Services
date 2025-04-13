import { useEffect, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';
import { X, Home, FileText, Phone, Info, Download, ChevronRight } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navigation = [
    { name: 'Home', to: '/', icon: Home },
    { name: 'Services', to: '/services', icon: FileText },
    { name: 'About Us', to: '/about', icon: Info },
    { name: 'Contact', to: '/contact', icon: Phone },
    { name: 'Samples', to: '/samples', icon: Download },
  ];

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-secondary-900/75 backdrop-blur-sm transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="min-h-full">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-300"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-300"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="pointer-events-auto w-full max-w-md ml-auto h-full">
                <div className="flex h-full flex-col overflow-y-auto bg-white shadow-xl">
                  <div className="flex items-center justify-between px-6 py-4 border-b border-secondary-100">
                    <Dialog.Title className="text-lg font-display font-semibold text-secondary-900">
                      Menu
                    </Dialog.Title>
                    <button
                      type="button"
                      className="rounded-lg p-2.5 text-secondary-600 hover:text-secondary-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      onClick={onClose}
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  
                  <nav className="flex-1 px-3 py-6">
                    <div className="space-y-1">
                      {navigation.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.to}
                          onClick={onClose}
                          className={({ isActive }) =>
                            `group flex items-center rounded-xl px-3 py-4 text-base font-medium transition-colors ${
                              isActive
                                ? 'bg-primary-50 text-primary-600'
                                : 'text-secondary-700 hover:bg-secondary-50'
                            }`
                          }
                        >
                          <item.icon
                            className="mr-4 h-6 w-6 flex-shrink-0"
                            aria-hidden="true"
                          />
                          {item.name}
                          <ChevronRight
                            className="ml-auto h-5 w-5 text-secondary-400"
                            aria-hidden="true"
                          />
                        </NavLink>
                      ))}
                    </div>
                  </nav>

                  <div className="border-t border-secondary-100 px-6 py-4">
                    <a
                      href="tel:+1234567890"
                      className="flex items-center justify-center gap-2 rounded-lg bg-primary-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                    >
                      <Phone className="h-5 w-5" />
                      Call Us Now
                    </a>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default MobileMenu;