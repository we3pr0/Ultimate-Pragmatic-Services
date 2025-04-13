import { useState } from 'react';
import { Download, CheckCircle, Loader2, Shield, Clock, ArrowRight } from 'lucide-react';
import { sendConfirmationEmail } from '../utils/emailService';

const SurveyPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    sampleType: '',
    industry: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const result = await sendConfirmationEmail(formData);
      
      if (result.success) {
        setIsSubmitted(true);
      } else {
        setError('Unable to process your request at this time. Please try again later.');
      }
    } catch (err) {
      setError('A technical issue occurred. Please try again in a few minutes.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-[80vh] bg-secondary-50 py-16 lg:py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-soft p-8 text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-6">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <h2 className="text-2xl font-display font-bold text-secondary-900 mb-4">Request Received!</h2>
            <p className="text-lg text-secondary-600 mb-6">
              Thank you for your interest. Your request for our sample documents has been successfully received. 
              The materials will be sent to your email shortly.
            </p>
            <p className="text-secondary-600 mb-8">
              Please check your inbox (and your spam folder just in case) within the next 5 minutes.
            </p>
            <a
              href="/contact"
              className="btn-primary"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] bg-secondary-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 mb-6">
            <Download className="h-6 w-6 text-primary-600" />
          </div>
          <h1 className="text-4xl font-display font-bold text-secondary-900 mb-4">
            Sample Business Documents
          </h1>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Get access to real-world samples to guide your planning, funding, and strategy development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Form Section */}
          <div className="bg-white rounded-2xl shadow-soft p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-secondary-700">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border-secondary-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-secondary-700">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border-secondary-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-secondary-700">
                  Phone Number (optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border-secondary-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="sampleType" className="block text-sm font-medium text-secondary-700">
                  What type of sample are you interested in? <span className="text-red-500">*</span>
                </label>
                <select
                  id="sampleType"
                  name="sampleType"
                  required
                  value={formData.sampleType}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border-secondary-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                >
                  <option value="">Select a sample type</option>
                  <option value="business-plan">Business Plan</option>
                  <option value="feasibility-study">Feasibility Study</option>
                  <option value="pitch-deck">Pitch Deck</option>
                  <option value="financial-model">Financial Model</option>
                </select>
              </div>

              <div>
                <label htmlFor="industry" className="block text-sm font-medium text-secondary-700">
                  Industry of Interest (optional)
                </label>
                <input
                  type="text"
                  id="industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  placeholder="e.g., Technology, Healthcare, Retail"
                  className="mt-1 block w-full rounded-lg border-secondary-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin h-5 w-5 mr-2" />
                    Sending...
                  </>
                ) : (
                  'Request Samples'
                )}
              </button>

              {error && (
                <div className="mt-2 text-sm text-red-600 text-center">
                  {error}
                </div>
              )}
            </form>
          </div>

          {/* Benefits Section */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-soft p-8">
              <h2 className="text-xl font-display font-semibold text-secondary-900 mb-6">
                Why Request Our Samples?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center">
                      <Shield className="h-5 w-5 text-primary-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-secondary-900">Expert-Crafted Templates</h3>
                    <p className="mt-1 text-secondary-600">
                      Get access to professionally designed templates that have helped secure millions in funding.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center">
                      <Clock className="h-5 w-5 text-primary-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-secondary-900">Instant Access</h3>
                    <p className="mt-1 text-secondary-600">
                      Receive your samples directly in your inbox within minutes of your request.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center">
                      <ArrowRight className="h-5 w-5 text-primary-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-secondary-900">Next Steps Support</h3>
                    <p className="mt-1 text-secondary-600">
                      Our team is available to discuss how we can customize these templates for your specific needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary-900 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-display font-semibold text-white mb-4">
                Need a Custom Solution?
              </h3>
              <p className="text-primary-100 mb-6">
                Our team can help you develop a tailored plan that meets your specific business requirements.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-primary-700 bg-white hover:bg-primary-50 transition-colors duration-200"
              >
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveyPage;