import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { Plus, Pencil, Trash2, BarChart3 } from 'lucide-react';
import { getPartnerProducts } from '../services/api';
import { ProductModal } from '../components/ProductModal';
import type { Product } from '../types/partner';

export const PartnerDashboard: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  // Temporary partner ID for demo
  const partnerId = "demo123";

  const { data: products = [], isLoading } = useQuery(
    ['partnerProducts', partnerId],
    () => getPartnerProducts(partnerId)
  );

  const handleEditProduct = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleAddProduct = () => {
    setSelectedProduct(null);
    setIsModalOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Dashboard Header */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Partner Dashboard</h1>
          <button
            onClick={handleAddProduct}
            className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800"
          >
            <Plus className="w-5 h-5" />
            Add Product
          </button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-gray-500 text-sm font-medium">Active Listings</h3>
              <BarChart3 className="w-5 h-5 text-blue-500" />
            </div>
            <p className="mt-2 text-3xl font-semibold text-gray-900">{products.length}</p>
          </div>
          {/* Add more stat cards here */}
        </div>
      </div>

      {/* Products List */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b">
          <h2 className="text-lg font-semibold text-gray-900">Your Products</h2>
        </div>

        {isLoading ? (
          <div className="p-8 text-center text-gray-500">Loading products...</div>
        ) : products.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            No products listed yet. Click "Add Product" to get started.
          </div>
        ) : (
          <div className="divide-y">
            {products.map((product) => (
              <div key={product.id} className="p-6 flex items-center justify-between hover:bg-gray-50">
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900">{product.fields.Name}</h3>
                  <p className="mt-1 text-sm text-gray-500 line-clamp-2">{product.fields.Description}</p>
                  <div className="mt-2 flex items-center gap-4 text-sm text-gray-500">
                    <span>${product.fields.Price}</span>
                    <span>{product.fields.Category}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 ml-4">
                  <button
                    onClick={() => handleEditProduct(product)}
                    className="p-2 text-gray-400 hover:text-gray-600"
                  >
                    <Pencil className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-red-600">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Product Modal */}
      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={selectedProduct}
      />
    </div>
  );
};