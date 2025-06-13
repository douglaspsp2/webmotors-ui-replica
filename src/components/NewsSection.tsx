
import React from 'react';

const NewsSection = () => {
  const news = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1493238792000-8113da705763?w=400&h=250&fit=crop',
      category: 'LANÇAMENTO',
      title: 'Novo SUV elétrico chega ao Brasil com autonomia de 500 km'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=250&fit=crop',
      category: 'MERCADO',
      title: 'Vendas de carros usados crescem 15% no primeiro trimestre'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=250&fit=crop',
      category: 'TECNOLOGIA',
      title: 'Carros autônomos: o futuro da mobilidade urbana'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1535732820275-9ffd998cac22?w=400&h=250&fit=crop',
      category: 'DICAS',
      title: 'Como escolher o financiamento ideal para seu próximo carro'
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
          Notícias WM1
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {news.map((article) => (
            <article key={article.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-webmotors-red text-white px-2 py-1 rounded text-xs font-semibold">
                  {article.category}
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-webmotors-red transition-colors leading-tight">
                {article.title}
              </h3>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
          >
            Ver todas as notícias
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
