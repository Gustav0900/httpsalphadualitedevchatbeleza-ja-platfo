import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Menu, X } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white shadow-lg sticky top-0 z-50"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-2 rounded-lg">
              <Scissors className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-800">BelezaJá</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-purple-600 transition-colors">
              Funcionalidades
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-purple-600 transition-colors">
              Preços
            </a>
            <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">
              Contato
            </a>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all">
              Começar Grátis
            </button>
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 border-t"
          >
            <nav className="flex flex-col space-y-4 pt-4">
              <a href="#features" className="text-gray-700 hover:text-purple-600 transition-colors">
                Funcionalidades
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-purple-600 transition-colors">
                Preços
              </a>
              <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">
                Contato
              </a>
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all w-full">
                Começar Grátis
              </button>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
