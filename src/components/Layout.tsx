import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Zap } from 'lucide-react';

export const Layout: React.FC = () => {
  const location = useLocation();
  const isPartnerDashboard = location.pathname.includes('/partner/dashboard');

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <Zap className="w-8 h-8" />
              <span className="text-2xl font-bold">DealHub</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              {isPartnerDashboard ? (
                <>
                  <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
                  <button className="bg-black text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800">
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link to="#" className="text-gray-600 hover:text-gray-900">About</Link>
                  <Link to="#" className="text-gray-600 hover:text-gray-900">Contact</Link>
                  <Link 
                    to="/partner/dashboard"
                    className="bg-black text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800"
                  >
                    Partner Login
                  </Link>
                </>
              )}
            </nav>
          </div>
        </div>
      </header>

      <Outlet />

      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-6 h-6" />
                <span className="text-xl font-bold">DealHub</span>
              </div>
              <p className="text-gray-600">
                Your destination for the best software deals
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link to="#" className="text-gray-600 hover:text-gray-900">About</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-gray-900">Careers</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-gray-900">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><Link to="#" className="text-gray-600 hover:text-gray-900">Help Center</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-gray-900">Terms of Service</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><Link to="#" className="text-gray-600 hover:text-gray-900">Twitter</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-gray-900">LinkedIn</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-gray-900">Facebook</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 text-center text-gray-600">
            <p>© 2024 DealHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};