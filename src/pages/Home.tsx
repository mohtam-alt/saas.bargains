import React from 'react';
import { PartnerSignup } from '../components/PartnerSignup';

export const Home: React.FC = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Join Our Partner Network
        </h1>
        <p className="text-xl text-gray-600">
          List your products and reach thousands of potential customers
        </p>
      </div>

      <PartnerSignup />

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Reach More Customers</h3>
          <p className="text-gray-600">
            Get your products in front of thousands of potential customers looking for great deals.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Easy Management</h3>
          <p className="text-gray-600">
            Simple tools to manage your product listings, pricing, and promotions.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Real-Time Analytics</h3>
          <p className="text-gray-600">
            Track your performance with detailed analytics and insights.
          </p>
        </div>
      </div>
    </main>
  );
};