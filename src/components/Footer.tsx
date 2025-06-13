
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold text-webmotors-red mb-4">
              Webmotors
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              O maior portal de carros do Brasil. Encontre o veículo dos seus sonhos.
            </p>
          </div>

          {/* Comprar */}
          <div>
            <h3 className="font-semibold mb-4">Comprar</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Carros usados</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Carros novos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Motos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Caminhões</a></li>
            </ul>
          </div>

          {/* Vender */}
          <div>
            <h3 className="font-semibold mb-4">Vender</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Anunciar grátis</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Vender carro</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Vender moto</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tabela FIPE</a></li>
            </ul>
          </div>

          {/* Institucional */}
          <div>
            <h3 className="font-semibold mb-4">Institucional</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sobre nós</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Trabalhe conosco</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Imprensa</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* App & Social */}
          <div>
            <h3 className="font-semibold mb-4">Baixe o App</h3>
            <div className="space-y-3 mb-6">
              <a href="#" className="block">
                <div className="bg-black rounded-lg p-2 flex items-center space-x-2 hover:bg-gray-800 transition-colors">
                  <div className="text-xs">
                    <div className="text-gray-400">Baixar na</div>
                    <div className="font-semibold">App Store</div>
                  </div>
                </div>
              </a>
              <a href="#" className="block">
                <div className="bg-black rounded-lg p-2 flex items-center space-x-2 hover:bg-gray-800 transition-colors">
                  <div className="text-xs">
                    <div className="text-gray-400">Disponível no</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                </div>
              </a>
            </div>

            <h4 className="font-semibold mb-3">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <span className="text-sm">f</span>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <span className="text-sm">📷</span>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <span className="text-sm">▶</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div className="mb-4 md:mb-0">
              <p>© 2024 Webmotors. Todos os direitos reservados.</p>
              <p>CNPJ: 00.000.000/0001-00</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
