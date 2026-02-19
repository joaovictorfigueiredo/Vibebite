
import React from 'react';
import { Plan } from '../types';

interface PricingCardProps {
  plan: Plan;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
  return (
    <div 
      className={`relative flex flex-col p-8 rounded-3xl transition-all duration-300 hover:scale-[1.02] ${
        plan.isPopular 
        ? 'bg-[#1E293B] text-white shadow-2xl z-10 scale-105' 
        : 'bg-white text-slate-900 border border-slate-200 shadow-xl'
      }`}
    >
      {plan.isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
          Mais Popular
        </div>
      )}

      <div className="mb-8">
        <h3 className={`text-xl font-bold mb-2 ${plan.isPopular ? 'text-blue-400' : 'text-slate-600'}`}>
          {plan.name}
        </h3>
        <div className="flex flex-col mb-2">
          <span className={`text-base font-medium line-through mb-1 ${plan.isPopular ? 'text-blue-200/60' : 'text-slate-400'}`}>
            De R$ {plan.originalPrice}
          </span>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-semibold italic opacity-80">R$</span>
            <span className="text-6xl font-extrabold tracking-tight">{plan.price}</span>
          </div>
        </div>
      </div>

      <div className="mb-8 flex-1">
        <p className={`text-sm mb-6 ${plan.isPopular ? 'text-slate-300' : 'text-slate-600'}`}>
          {plan.description}
        </p>
        <ul className="space-y-4">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className={`flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full ${
                plan.isPopular ? 'bg-blue-500/20 text-blue-400' : 'bg-green-100 text-green-600'
              }`}>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className={`text-sm leading-tight ${plan.isPopular ? 'text-slate-200' : 'text-slate-700'}`}>
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <a 
        href={plan.checkoutUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-full py-4 px-6 rounded-2xl font-bold text-base text-center transition-all duration-200 active:scale-95 ${
          plan.isPopular 
          ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30' 
          : 'bg-slate-900 hover:bg-slate-800 text-white'
        }`}
      >
        {plan.ctaText}
      </a>

      <div className="mt-4 text-center">
        <p className={`text-[10px] uppercase tracking-widest opacity-60 ${plan.isPopular ? 'text-slate-400' : 'text-slate-500'}`}>
          Ativação Imediata & Seguro
        </p>
      </div>
    </div>
  );
};

export default PricingCard;
