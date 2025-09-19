import React from 'react';
import { motion } from 'framer-motion';
import { Play, Star, Users, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Transforme seu salão com a
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {' '}plataforma completa
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Gestão de agenda, pagamentos automáticos, relatórios financeiros e muito mais. 
              Tudo em uma plataforma simples e intuitiva para salões e barbearias.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105">
                Experimente 30 dias grátis
              </button>
              <button className="flex items-center justify-center space-x-2 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-purple-600 hover:text-purple-600 transition-all">
                <Play className="h-5 w-5" />
                <span>Ver demonstração</span>
              </button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  <img className="w-8 h-8 rounded-full border-2 border-white" src="https://img-wrapper.vercel.app/image?url=https://placehold.co/32x32/6366f1/ffffff?text=A" alt="Cliente" />
                  <img className="w-8 h-8 rounded-full border-2 border-white" src="https://img-wrapper.vercel.app/image?url=https://placehold.co/32x32/ec4899/ffffff?text=B" alt="Cliente" />
                  <img className="w-8 h-8 rounded-full border-2 border-white" src="https://img-wrapper.vercel.app/image?url=https://placehold.co/32x32/8b5cf6/ffffff?text=C" alt="Cliente" />
                </div>
                <span>+2.500 salões</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span>4.9/5 avaliação</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 relative z-10">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-800">Dashboard Hoje</h3>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    +24% vendas
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-purple-50 rounded-lg p-4">
                    <div className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-purple-600" />
                      <span className="text-sm text-gray-600">Clientes</span>
                    </div>
                    <p className="text-2xl font-bold text-gray-900 mt-1">127</p>
                  </div>
                  <div className="bg-pink-50 rounded-lg p-4">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="h-5 w-5 text-pink-600" />
                      <span className="text-sm text-gray-600">Faturamento</span>
                    </div>
                    <p className="text-2xl font-bold text-gray-900 mt-1">R$ 4.280</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium text-gray-800">Próximos agendamentos</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <img className="w-8 h-8 rounded-full" src="https://img-wrapper.vercel.app/image?url=https://placehold.co/32x32/6366f1/ffffff?text=M" alt="Cliente" />
                        <div>
                          <p className="text-sm font-medium text-gray-900">Maria Silva</p>
                          <p className="text-xs text-gray-600">Corte + Escova</p>
                        </div>
                      </div>
                      <span className="text-sm text-purple-600 font-medium">14:30</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <img className="w-8 h-8 rounded-full" src="https://img-wrapper.vercel.app/image?url=https://placehold.co/32x32/ec4899/ffffff?text=J" alt="Cliente" />
                        <div>
                          <p className="text-sm font-medium text-gray-900">João Santos</p>
                          <p className="text-xs text-gray-600">Barba + Cabelo</p>
                        </div>
                      </div>
                      <span className="text-sm text-purple-600 font-medium">15:00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-3 shadow-lg z-20">
              <span className="text-white text-sm font-semibold">98% para você</span>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-3 shadow-lg z-20">
              <span className="text-green-600 text-sm font-semibold">💳 PIX + Cartão</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
