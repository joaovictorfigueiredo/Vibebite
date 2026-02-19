
import React from 'react';
import { PLANS } from './constants';
import PricingCard from './components/PricingCard';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      {/* Background Orbs */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100 rounded-full blur-[120px] opacity-60"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-slate-200 rounded-full blur-[120px] opacity-60"></div>
      </div>

      {/* Simplified Navigation (Empty but maintains spacing if needed) */}
      <nav className="w-full px-6 py-8 flex items-center justify-center">
        {/* Logo and login button removed as per request */}
      </nav>

      {/* Main Content focusing only on Plans and FAQ */}
      <main className="max-w-7xl mx-auto px-6 pb-24 w-full flex-grow">
        
        {/* Header section with headline removed - Direct to plans */}
        <div className="text-center mb-12">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 mb-2">Escolha seu Plano</p>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Pricing Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-24">
          {PLANS.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>

        {/* FAQ Section */}
        <section className="max-w-3xl mx-auto text-center py-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Dúvidas Frequentes</h2>
          <div className="space-y-6 text-left">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-slate-800 mb-2">Como funcionam os créditos?</h4>
              <p className="text-slate-600 text-sm">Cada crédito permite gerar um site completo do zero. Você pode usar seus créditos quando quiser, eles não expiram.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-slate-800 mb-2">Posso usar meu próprio domínio?</h4>
              <p className="text-slate-600 text-sm">Sim! Nos planos Prata e Ouro você pode conectar seu domínio .com ou .com.br em poucos cliques.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-slate-800 mb-2">O pagamento é seguro?</h4>
              <p className="text-slate-600 text-sm">Sim, utilizamos criptografia de ponta a ponta e processadores de pagamento líderes de mercado para garantir sua total segurança.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Floating WhatsApp Support Button */}
      <a 
        href="https://wa.me/5528999328644" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 flex items-center gap-3 bg-[#25D366] text-white px-6 py-4 rounded-full shadow-2xl hover:scale-110 hover:bg-[#20ba5a] transition-all duration-300 group"
      >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
        <div className="flex flex-col items-start leading-none">
          <span className="text-[10px] uppercase font-bold opacity-80 mb-0.5">Suporte WhatsApp</span>
          <span className="text-sm font-bold">28 99932-8644</span>
        </div>
      </a>

      {/* Simplified Footer */}
      <footer className="bg-slate-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="font-bold text-white tracking-tight">Vibebit</span>
          </div>
          <p>© 2025 Vibebit. Ativação imediata e segura.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
