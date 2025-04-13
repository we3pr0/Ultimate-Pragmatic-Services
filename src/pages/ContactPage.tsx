import { Mail, Phone, Clock, Globe, Shield, Zap } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  return (
    <div className="bg-secondary-50">
      {/* Hero Section */}
      <div className="relative bg-primary-900 py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-800 to-primary-900" />
          <div className="absolute inset-0 bg-grid-white/[0.1]" style={{ 
            backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '4rem 4rem'
          }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-display font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Get in Touch
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-primary-100">
            Have a project in mind? We'd love to help bring your vision to life.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-12">
            {/* Why Choose Us */}
            <div className="bg-white rounded-2xl shadow-soft p-8">
              <h2 className="text-2xl font-display font-bold text-secondary-900 mb-6">
                Why Work With Us
              </h2>
              <div className="grid gap-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center">
                      <Shield className="h-5 w-5 text-primary-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-secondary-900">Trusted Expertise</h3>
                    <p className="mt-1 text-secondary-600">
                      Over 85 satisfied clients across 5 continents trust our services.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center">
                      <Zap className="h-5 w-5 text-primary-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-secondary-900">Fast Response</h3>
                    <p className="mt-1 text-secondary-600">
                      Get a response within 24 hours and start your project quickly.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center">
                      <Globe className="h-5 w-5 text-primary-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-secondary-900">Global Reach</h3>
                    <p className="mt-1 text-secondary-600">
                      Working with clients worldwide, understanding diverse markets.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-white rounded-2xl shadow-soft p-8">
              <h2 className="text-2xl font-display font-bold text-secondary-900 mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-primary-600 mt-1" />
                  <div className="ml-4">
                    <p className="text-lg font-semibold text-secondary-900">Phone</p>
                    <p className="text-secondary-600">+447988646076 (WhatsApp)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-primary-600 mt-1" />
                  <div className="ml-4">
                    <p className="text-lg font-semibold text-secondary-900">Email</p>
                    <a 
                      href="mailto:info@ultimatepragmaticservices.com" 
                      className="text-secondary-600 hover:text-primary-600 transition-colors"
                    >
                      info@ultimatepragmaticservices.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-primary-600 mt-1" />
                  <div className="ml-4">
                    <p className="text-lg font-semibold text-secondary-900">Business Hours</p>
                    <p className="text-secondary-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-secondary-600">Saturday: 10:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-soft p-8">
            <h2 className="text-2xl font-display font-bold text-secondary-900 mb-6">
              Send Us a Message
            </h2>
            <ContactForm />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-display font-bold text-secondary-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-secondary-600">
              Find quick answers to common questions about our services.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-soft p-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                  What is your payment structure?
                </h3>
                <p className="text-secondary-600">
                  We require 50% of the agreed-upon project fee upfront, with the remaining balance paid upon completion when 100% satisfaction is reached.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                  How long does it take to complete a business plan?
                </h3>
                <p className="text-secondary-600">
                  Depending on the type of business plan, our standard delivery time ranges from 10-14 days. We also offer expedited services for an additional fee.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                  Do you offer post-delivery support?
                </h3>
                <p className="text-secondary-600">
                  Yes, we provide free post-sales support for 1 month, to help with any questions or minor adjustments needed.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                  Do you work with international clients?
                </h3>
                <p className="text-secondary-600">
                  Absolutely! We have worked with clients across 5 continents and have experience with international business regulations and funding requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;