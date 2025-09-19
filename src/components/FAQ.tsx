import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Como funciona a comissão de 2%?',
      answer: 'Cobramos apenas 2% sobre as transações processadas pela plataforma. Se você vender R$ 100, R$ 98 vão para sua conta e R$ 2 ficam conosco. No plano Pro, não há comissão - você paga apenas a mensalidade.'
    },
    {
      question: 'Posso cancelar a qualquer momento?',
      answer: 'Sim! Não há fidelidade ou taxa de cancelamento. Você pode cancelar sua assinatura a qualquer momento através do painel administrativo ou entrando em contato com nosso suporte.'
    },
    {
      question: 'Os clientes precisam baixar um app?',
      answer: 'Não é obrigatório. Seus clientes podem agendar diretamente pelo site, mas oferecemos um app móvel gratuito que melhora muito a experiência de agendamento e comunicação.'
    },
    {
      question: 'Como funciona a integração com WhatsApp?',
      answer: 'Conectamos com a API oficial do WhatsApp Business para enviar confirmações, lembretes e notificações automaticamente. Você mantém seu número atual e pode personalizar as mensagens.'
    },
    {
      question: 'Posso usar minha máquina de cartão atual?',
      answer: 'Nossa plataforma funciona de forma independente. Processamos os pagamentos online e você mantém sua máquina para pagamentos presenciais. Também oferecemos integração com principais adquirentes.'
    },
    {
      question: 'Vocês emitem notas fiscais?',
      answer: 'Sim! Temos integração com provedores de NFS-e para emissão automática de notas fiscais, respeitando as regras específicas de cada município. Isso facilita muito sua vida fiscal.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Perguntas
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {' '}frequentes
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tire suas dúvidas sobre a plataforma. Não encontrou sua pergunta? 
            Entre em contato conosco!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-4"
            >
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <button
                  className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="text-lg font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
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
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-gray-600 mb-6">
              Nossa equipe de suporte está pronta para ajudar você
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
              Falar com suporte
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
