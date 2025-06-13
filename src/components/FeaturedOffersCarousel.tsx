
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import CarCard from './CarCard';

const FeaturedOffersCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cars = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=250&fit=crop',
      badge: 'SUPER PREÇO',
      brand: 'VOLKSWAGEN',
      model: 'GOL',
      version: '1.6 MSI Flex 8V 5p',
      year: '2020/2021',
      km: '35.000 km',
      price: 'R$ 65.900',
      location: 'São Paulo - SP'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=400&h=250&fit=crop',
      badge: 'OPORTUNIDADE',
      brand: 'HONDA',
      model: 'CIVIC',
      version: '2.0 EX Flex Aut.',
      year: '2019/2020',
      km: '42.000 km',
      price: 'R$ 89.900',
      location: 'Rio de Janeiro - RJ'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=250&fit=crop',
      brand: 'TOYOTA',
      model: 'COROLLA',
      version: '2.0 XEi Multi-Drive S',
      year: '2021/2022',
      km: '28.000 km',
      price: 'R$ 105.900',
      location: 'Belo Horizonte - MG'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1554744512-d6c603f27c54?w=400&h=250&fit=crop',
      badge: 'DESTAQUE',
      brand: 'CHEVROLET',
      model: 'ONIX',
      version: '1.4 LTZ Aut.',
      year: '2020/2021',
      km: '31.000 km',
      price: 'R$ 72.900',
      location: 'Curitiba - PR'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&h=250&fit=crop',
      brand: 'FORD',
      model: 'ECOSPORT',
      version: '2.0 Titanium Flex Aut.',
      year: '2019/2020',
      km: '38.000 km',
      price: 'R$ 78.900',
      location: 'Porto Alegre - RS'
    }
  ];

  const itemsPerPage = 4;
  const maxIndex = Math.max(0, cars.length - itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
            Ofertas em destaque
          </h2>
          
          <div className="flex space-x-2">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ArrowLeft className="h-5 w-5 text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ArrowRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
          >
            {cars.map((car) => (
              <div key={car.id} className="w-full sm:w-1/2 lg:w-1/4 flex-shrink-0 px-2">
                <CarCard car={car} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile dots indicator */}
        <div className="flex justify-center mt-6 lg:hidden">
          <div className="flex space-x-2">
            {Array.from({ length: Math.ceil(cars.length / 2) }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  Math.floor(currentIndex / 2) === index ? 'bg-webmotors-red' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentIndex(index * 2)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedOffersCarousel;
