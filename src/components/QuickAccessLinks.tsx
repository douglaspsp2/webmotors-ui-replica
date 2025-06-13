
import React from 'react';

const QuickAccessLinks = () => {
  const quickLinks = [
    { title: 'Carros até R$ 50 mil', icon: '💰' },
    { title: 'SUVs', icon: '🚙' },
    { title: 'Elétricos e Híbridos', icon: '⚡' },
    { title: 'Picapes', icon: '🚚' },
    { title: 'Hatches', icon: '🚗' },
    { title: 'Sedans', icon: '🚘' },
    { title: 'Carros Automáticos', icon: '⚙️' },
    { title: 'Carros 0km', icon: '✨' },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Acesso Rápido
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 lg:gap-6">
          {quickLinks.map((link, index) => (
            <a
              key={index}
              href="#"
              className="flex flex-col items-center p-4 rounded-xl hover:bg-gray-50 transition-colors group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mb-3 text-2xl group-hover:scale-110 transition-transform">
                {link.icon}
              </div>
              <span className="text-sm font-medium text-gray-700 text-center leading-tight">
                {link.title}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickAccessLinks;
