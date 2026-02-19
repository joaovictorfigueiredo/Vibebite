
import { Plan } from './types';

export const PLANS: Plan[] = [
  {
    id: 'start',
    name: 'Plano Start',
    price: 47,
    originalPrice: 59,
    credits: 1,
    description: 'Ideal para quem está começando seu primeiro projeto.',
    features: [
      '1 Site ativado por IA',
      'Pagamento 100% Seguro',
      'Suporte por WhatsApp com pessoa real',
      'Satisfação Garantida'
    ],
    ctaText: 'Começar Agora',
    checkoutUrl: 'https://buy.stripe.com/8x23cu8bVe5mb905U34ko07',
    color: 'bg-slate-100'
  },
  {
    id: 'pro',
    name: 'Plano Pro',
    price: 67,
    originalPrice: 84,
    credits: 3,
    description: 'A escolha preferida para empreendedores em crescimento.',
    features: [
      '3 Sites ativados por IA',
      'Pagamento 100% Seguro',
      'Suporte por WhatsApp com pessoa real',
      'Satisfação Garantida'
    ],
    isPopular: true,
    ctaText: 'Garantir Desconto',
    checkoutUrl: 'https://buy.stripe.com/6oU28q63N3qI3Gy2HR4ko08',
    color: 'bg-blue-600'
  },
  {
    id: 'business',
    name: 'Plano Business',
    price: 147,
    originalPrice: 184,
    credits: 10,
    description: 'Máximo poder para quem precisa de múltiplos projetos.',
    features: [
      '10 Sites ativados por IA',
      'Pagamento 100% Seguro',
      'Suporte por WhatsApp com pessoa real',
      'Satisfação Garantida'
    ],
    ctaText: 'Quero o Plano Business',
    checkoutUrl: 'https://buy.stripe.com/fZu5kC3VF0ewdh8eqz4ko09',
    color: 'bg-slate-900'
  }
];

export const COLORS = {
  primary: '#2563EB',
  secondary: '#1E293B',
  accent: '#FACC15',
  background: '#F8FAFC'
};
