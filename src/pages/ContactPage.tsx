import React from 'react';
import { Mail, Phone, Clock, MapPin } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our team of experts to discuss your business needs and how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Phone className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-lg font-medium text-gray-900">Phone</p>
                      <p className="text-gray-600">+447988646076 (WhatsApp)</p>
                      {/* <p className="text-gray-600">7797752836 (USA)</p> */}
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Mail className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-lg font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">info@ultimatepragmaticservices.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Clock className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-lg font-medium text-gray-900">Business Hours</p>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Book a Free Consultation</h2>
                <p className="text-gray-600 mb-4">
                  Schedule a discovery call to discuss your business needs and see whether we are the best fit for your requirements.
                </p>
                <p className="text-gray-600 mb-6">
                  Our expert consultants are available to answer your questions and provide insights on how we can help your business succeed.
                </p>
                <div className="flex gap-4">
                  <a 
                    href="tel:+447988646076" 
                    className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition-colors"
                  >
                    Call Now
                  </a>
                  <a 
                    href="https://wa.me/447988646076?text=Hello%2C%20I%20would%20like%20to%20schedule%20a%20consultation%20with%20Ultimate%20Pragmatic%20Services." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-green-600 text-white rounded-md font-medium hover:bg-green-700 transition-colors"
                  >
                    Message on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">What is your payment structure?</h3>
                  <p className="text-gray-600">
                    We require 50% of the agreed-upon project fee upfront, with the remaining balance paid upon completion when 100% satisfaction is reached.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">How long does it take to complete a business plan?</h3>
                  <p className="text-gray-600">
                    Depending on the type of business plan, our standard delivery time ranges from 10-14 days. We also offer expedited services for an additional fee.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Do you offer post-delivery support?</h3>
                  <p className="text-gray-600">
                    Yes, we provide free post-sales support for 1 month, to help with any questions or minor adjustments needed.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Can you help with SBA loan applications?</h3>
                  <p className="text-gray-600">
                    Yes, we specialize in creating business plans optimized for SBA loans and have helped clients secure over 2.8 million in SBA loans in the past 6 months.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Do you work with international clients?</h3>
                  <p className="text-gray-600">
                    Absolutely! We have worked with clients across 5 continents and have experience with international business regulations and funding requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;