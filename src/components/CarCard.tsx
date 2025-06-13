
import React, { useState } from 'react';

interface Car {
  id: number;
  image: string;
  badge?: string;
  brand: string;
  model: string;
  version: string;
  year: string;
  km: string;
  price: string;
  location: string;
}

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow group overflow-hidden">
      <div className="relative">
        <img
          src={car.image}
          alt={`${car.brand} ${car.model}`}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {car.badge && (
          <div className="absolute top-3 left-3 bg-webmotors-red text-white px-2 py-1 rounded text-xs font-semibold">
            {car.badge}
          </div>
        )}
        
        <button
          onClick={() => setIsFavorited(!isFavorited)}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
        >
          <span className={`text-lg ${isFavorited ? 'text-red-500' : 'text-gray-400'}`}>
            ♥
          </span>
        </button>
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-gray-900 mb-1">
          {car.brand} {car.model}
        </h3>
        
        <p className="text-sm text-gray-600 mb-2">
          {car.version}
        </p>
        
        <p className="text-sm text-gray-500 mb-3">
          {car.year} - {car.km}
        </p>
        
        <p className="text-xl font-bold text-webmotors-red mb-2">
          {car.price}
        </p>
        
        <p className="text-sm text-gray-500">
          {car.location}
        </p>
      </div>
    </div>
  );
};

export default CarCard;
