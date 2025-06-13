import React, { useState } from 'react';
import { Search } from 'lucide-react';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top bar */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end items-center h-8 text-sm">
            <div className="hidden md:flex space-x-6 text-gray-600">
              <a href="#" className="hover:text-webmotors-red transition-colors">Ajuda</a>
              <a href="#" className="hover:text-webmotors-red transition-colors">Favoritos</a>
              <a href="#" className="hover:text-webmotors-red transition-colors">Entrar</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-2xl font-bold text-webmotors-red">CARIOCARROSRJ</div>
          </div>

          {/* Search bar - hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input type="text" placeholder="Buscar carros, motos, marcas..." className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-webmotors-red focus:border-transparent outline-none" />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-webmotors-red font-medium transition-colors">Comprar</a>
            <a href="#" className="text-gray-700 hover:text-webmotors-red font-medium transition-colors">Vender</a>
            <a href="#" className="text-gray-700 hover:text-webmotors-red font-medium transition-colors">Catálogo 0km</a>
            <a href="#" className="text-gray-700 hover:text-webmotors-red font-medium transition-colors">Notícias</a>
            <a href="#" className="text-gray-700 hover:text-webmotors-red font-medium transition-colors">Financiamento</a>
            <button className="bg-webmotors-red text-white px-6 py-2 rounded-lg font-medium hover:bg-red-600 transition-colors">
              Anunciar
            </button>
          </nav>

          {/* Mobile menu button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2">
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <div className="relative">
                <input type="text" placeholder="Buscar carros, motos, marcas..." className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-webmotors-red focus:border-transparent outline-none" />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <a href="#" className="text-gray-700 font-medium">Comprar</a>
              <a href="#" className="text-gray-700 font-medium">Vender</a>
              <a href="#" className="text-gray-700 font-medium">Catálogo 0km</a>
              <a href="#" className="text-gray-700 font-medium">Notícias</a>
              <a href="#" className="text-gray-700 font-medium">Financiamento</a>
              <button className="bg-webmotors-red text-white px-6 py-2 rounded-lg font-medium w-fit">
                Anunciar
              </button>
            </div>
          </div>}
      </div>
    </header>;
};
export default Header;