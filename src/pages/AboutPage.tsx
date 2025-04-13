import { Link } from 'react-router-dom';
import { Users, Award, TrendingUp, Target, Globe, Shield } from 'lucide-react';

const AboutPage = () => {
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
            About Us
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-primary-100">
            Empowering businesses worldwide with expert consulting and strategic guidance.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl font-display font-bold text-secondary-900 mb-6">Our Story</h2>
            <div className="prose prose-lg text-secondary-600">
              <p>
                At Ultimate Pragmatic Services (UPS), we don't just offer consulting—we drive business success. Since our inception in 2018, we have been a trusted partner for businesses worldwide, delivering expert business management consulting and financial advisory services that transform visions into reality.
              </p>
              <p>
                Our team of seasoned business strategists and financial experts is dedicated to one goal: helping you achieve sustainable growth through pragmatic, results-driven solutions. We specialize in supporting small and medium enterprises (SMEs), ensuring they navigate complex regulatory landscapes, secure crucial funding, and optimize operations for long-term success.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-soft">
              <img
                src="https://as2.ftcdn.net/v2/jpg/01/60/55/69/1000_F_160556920_A3An83NX66D3nOn19v18yCLVTqh3lDLm.jpg"
                alt="Our Story"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Key Achievements */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-secondary-900">Our Impact</h2>
            <p className="mt-4 text-lg text-secondary-600 max-w-3xl mx-auto">
              We've helped hundreds of businesses achieve their goals through expert guidance and strategic support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-soft">
              <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-primary-600" />
              </div>
              <div className="text-3xl font-bold text-secondary-900 mb-2">$38M+</div>
              <div className="text-secondary-600">Funding Secured</div>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-soft">
              <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-primary-600" />
              </div>
              <div className="text-3xl font-bold text-secondary-900 mb-2">85+</div>
              <div className="text-secondary-600">Satisfied Clients</div>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-soft">
              <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Globe className="h-6 w-6 text-primary-600" />
              </div>
              <div className="text-3xl font-bold text-secondary-900 mb-2">5</div>
              <div className="text-secondary-600">Continents Served</div>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-soft">
              <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-primary-600" />
              </div>
              <div className="text-3xl font-bold text-secondary-900 mb-2">10+</div>
              <div className="text-secondary-600">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Our Approach */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-secondary-900">Our Approach</h2>
            <p className="mt-4 text-lg text-secondary-600 max-w-3xl mx-auto">
              We combine industry expertise with innovative strategies to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-soft">
              <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-display font-semibold text-secondary-900 mb-4">
                Client-Focused Strategy
              </h3>
              <p className="text-secondary-600">
                We work closely with our clients to understand their unique needs and develop tailored solutions that drive results.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-soft">
              <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-display font-semibold text-secondary-900 mb-4">
                Industry Expertise
              </h3>
              <p className="text-secondary-600">
                Our team brings deep knowledge across various industries, ensuring informed and effective solutions.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-soft">
              <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-display font-semibold text-secondary-900 mb-4">
                Results-Driven
              </h3>
              <p className="text-secondary-600">
                We focus on delivering measurable outcomes that help our clients achieve their business objectives.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary-900 rounded-2xl p-8 lg:p-12 text-center">
          <h2 className="text-2xl font-display font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and see how our expert business services can help you achieve your goals.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-primary-700 bg-white hover:bg-primary-50 transition-colors duration-200"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;