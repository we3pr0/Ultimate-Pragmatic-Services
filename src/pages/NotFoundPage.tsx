import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-[80vh] bg-secondary-50 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center">
        <div className="inline-flex items-center justify-center h-20 w-20 rounded-xl bg-primary-100 mb-8">
          <Search className="h-10 w-10 text-primary-600" />
        </div>
        
        <h1 className="text-5xl font-display font-bold text-secondary-900 mb-6">
          404 - Page Not Found
        </h1>
        
        <p className="text-xl text-secondary-600 mb-12 max-w-2xl mx-auto">
          Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or never existed.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="btn-primary inline-flex items-center justify-center"
          >
            <Home className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          
          <Link
            to="/contact"
            className="btn-secondary inline-flex items-center justify-center"
          >
            Need Help?
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-16">
          <h2 className="text-lg font-semibold text-secondary-900 mb-4">
            Popular Pages
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/services"
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              Services
            </Link>
            <Link
              to="/about"
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              About Us
            </Link>
            <Link
              to="/samples"
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              Sample Documents
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;