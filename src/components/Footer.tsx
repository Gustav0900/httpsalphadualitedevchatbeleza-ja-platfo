import React from 'react';
import { Scissors, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e descrição */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-2 rounded-lg">
                <Scissors className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">BelezaJá</span>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              A plataforma completa para salões e barbearias que querem crescer, 
              organizar e faturar mais. Simples, segura e eficiente.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-purple-400" />
                <span className="text-gray-300">contato@belezaja.com.br</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-purple-400" />
                <span className="text-gray-300">(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-purple-400" />
                <span className="text-gray-300">São Paulo, SP - Brasil</span>
              </div>
            </div>
          </div>

          {/* Links úteis */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Produto</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Funcionalidades</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Preços</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Segurança</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Integrações</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">App Mobile</a></li>
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Suporte</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Documentação</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Status do Sistema</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contato</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Treinamentos</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap items-center space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                LGPD
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Cookies
              </a>
            </div>
            
            <p className="text-gray-400 text-sm">
              © 2025 BelezaJá. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
