import React from 'react';
import { Star, Clock } from 'lucide-react';
import { Deal } from '../types/deal';

interface DealCardProps {
  deal: Deal;
}

export const DealCard: React.FC<DealCardProps> = ({ deal }) => {
  const discount = Math.round(((deal.originalPrice - deal.price) / deal.originalPrice) * 100);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-xl">
      <div className="relative">
        <img 
          src={deal.imageUrl} 
          alt={deal.title}
          className="w-full h-48 object-cover"
        />
        {deal.featured && (
          <div className="absolute top-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
            Featured
          </div>
        )}
        {deal.timeLeft && (
          <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {deal.timeLeft}
          </div>
        )}
      </div>
      
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            {deal.category}
          </span>
          <div className="flex items-center text-sm text-gray-600">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="ml-1">{deal.rating}</span>
            <span className="mx-1">·</span>
            <span>{deal.reviews} reviews</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2">{deal.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{deal.description}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-gray-900">${deal.price}</span>
            <span className="text-sm text-gray-500 line-through">${deal.originalPrice}</span>
            <span className="text-green-600 text-sm font-semibold">-{discount}%</span>
          </div>
          <button className="bg-black text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
            View Deal
          </button>
        </div>
      </div>
    </div>
  );
};