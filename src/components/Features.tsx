import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  CreditCard, 
  BarChart3, 
  Smartphone, 
  MessageCircle, 
  Shield,
  Clock,
  Users,
  FileText
} from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Calendar,
      title: 'Agenda Inteligente',
      description: 'Gerencie múltiplos profissionais, serviços combinados e encaixes automáticos.',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: CreditCard,
      title: 'Pagamentos Automáticos',
      description: 'PIX, cartão e boleto com split automático. 98% para você, 2% para a plataforma.',
      gradient: 'from-pink-500 to-pink-600'
    },
    {
      icon: BarChart3,
      title: 'Relatórios Financeiros',
      description: 'Acompanhe vendas, comissões e performance em tempo real com dashboards detalhados.',
      gradient: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: Smartphone,
      title: 'App para Clientes',
      description: 'Seus clientes podem agendar, pagar e acompanhar serviços pelo celular.',
      gradient: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp Integrado',
      description: 'Confirmações e lembretes automáticos via WhatsApp para reduzir faltas.',
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: Shield,
      title: 'Segurança Total',
      description: 'Dados protegidos, compliance com LGPD e sistema de backup automático.',
      gradient: 'from-red-500 to-red-600'
    },
    {
      icon: Clock,
      title: 'Controle de Horários',
      description: 'Bloqueios, intervalos personalizados e gestão de múltiplos turnos.',
      gradient: 'from-orange-500 to-orange-600'
    },
    {
      icon: Users,
      title: 'CRM Completo',
      description: 'Histórico de clientes, preferências, fidelidade e campanhas de marketing.',
      gradient: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: FileText,
      title: 'Notas Fiscais',
      description: 'Integração com provedores de NFS-e para emissão automática de notas.',
      gradient: 'from-violet-500 to-violet-600'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Tudo que seu salão precisa
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {' '}em uma plataforma
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simplifique sua gestão com ferramentas profissionais que aumentam sua produtividade 
            e melhoram a experiência dos seus clientes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className={`bg-gradient-to-r ${feature.gradient} w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
