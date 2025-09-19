import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Grátis',
      price: 'R$ 0',
      period: '/mês',
      description: 'Perfeito para começar',
      features: [
        'Até 50 agendamentos/mês',
        'Agenda básica',
        'Cadastro de clientes',
        'Suporte por email',
        'PIX e cartão (2% por transação)',
        '1 profissional'
      ],
      cta: 'Começar grátis',
      popular: false,
      gradient: 'from-gray-500 to-gray-600'
    },
    {
      name: 'Pro',
      price: 'R$ 47',
      period: '/mês',
      description: 'Ideal para salões em crescimento',
      features: [
        'Agendamentos ilimitados',
        'Múltiplos profissionais',
        'WhatsApp integrado',
        'Relatórios avançados',
        'App para clientes',
        'Suporte prioritário',
        'Sem comissão nas transações',
        'Notas fiscais automáticas'
      ],
      cta: 'Assinar Pro',
      popular: true,
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      name: 'Enterprise',
      price: 'Sob consulta',
      period: '',
      description: 'Para redes e franquias',
      features: [
        'Tudo do plano Pro',
        'Múltiplas unidades',
        'API personalizada',
        'Integração contábil',
        'Gerente de conta dedicado',
        'Treinamento da equipe',
        'Customizações exclusivas',
        'SLA garantido'
      ],
      cta: 'Falar com vendas',
      popular: false,
      gradient: 'from-indigo-600 to-purple-600'
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Planos que se adaptam ao
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {' '}seu negócio
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comece grátis e escale conforme seu salão cresce. 
            Sem taxa de setup, sem fidelidade, cancele quando quiser.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative ${plan.popular ? 'md:-mt-4 md:scale-105' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="h-4 w-4" />
                    <span>Mais Popular</span>
                  </span>
                </div>
              )}
              
              <div className={`bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 ${plan.popular ? 'ring-2 ring-purple-500' : ''} h-full`}>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="flex items-baseline justify-center mb-6">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                  
                  <button className={`w-full bg-gradient-to-r ${plan.gradient} text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all transform hover:scale-105`}>
                    {plan.cta}
                  </button>
                </div>
                
                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        <Check className="h-5 w-5 text-green-500" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Garantia de 30 dias
            </h3>
            <p className="text-gray-600 text-lg">
              Experimente qualquer plano por 30 dias. Se não ficar satisfeito, 
              devolvemos 100% do seu dinheiro. Sem perguntas, sem complicações.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
