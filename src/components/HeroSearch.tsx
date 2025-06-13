
import React, { useState } from 'react';
import { Search } from 'lucide-react';

const HeroSearch = () => {
  const [activeTab, setActiveTab] = useState('carros');
  const [activeSubTab, setActiveSubTab] = useState('usados');

  return (
    <section className="bg-gradient-to-br from-gray-100 to-white py-12 lg:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8">
          {/* Main tabs */}
          <div className="flex border-b border-gray-200 mb-6">
            <button
              onClick={() => setActiveTab('carros')}
              className={`px-6 py-3 font-semibold transition-colors relative ${
                activeTab === 'carros'
                  ? 'text-webmotors-red border-b-2 border-webmotors-red'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Carros
            </button>
            <button
              onClick={() => setActiveTab('motos')}
              className={`px-6 py-3 font-semibold transition-colors relative ${
                activeTab === 'motos'
                  ? 'text-webmotors-red border-b-2 border-webmotors-red'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Motos
            </button>
          </div>

          {/* Sub tabs */}
          {activeTab === 'carros' && (
            <div className="flex space-x-6 mb-6">
              <button
                onClick={() => setActiveSubTab('usados')}
                className={`text-sm font-medium transition-colors ${
                  activeSubTab === 'usados'
                    ? 'text-webmotors-red'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Usados e Seminovos
              </button>
              <button
                onClick={() => setActiveSubTab('novos')}
                className={`text-sm font-medium transition-colors ${
                  activeSubTab === 'novos'
                    ? 'text-webmotors-red'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Novos
              </button>
            </div>
          )}

          {/* Search input */}
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Qual carro você procura?"
                className="w-full pl-4 pr-12 py-4 text-lg border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-webmotors-red focus:border-webmotors-red outline-none transition-colors"
              />
              <Search className="absolute right-4 top-4 h-6 w-6 text-gray-400" />
            </div>
            <a href="#" className="inline-block mt-2 text-sm text-webmotors-red hover:underline">
              Busca detalhada
            </a>
          </div>

          {/* Action button */}
          <button className="w-full bg-webmotors-red text-white py-4 rounded-xl text-lg font-semibold hover:bg-red-600 transition-colors shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-transform">
            Ver ofertas
          </button>

          {/* Secondary actions */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 mt-6 pt-6 border-t border-gray-200">
            <a href="#" className="text-webmotors-red font-medium hover:underline">
              Quero Vender
            </a>
            <a href="#" className="text-webmotors-red font-medium hover:underline">
              Simular Financiamento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSearch;
