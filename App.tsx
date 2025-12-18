
import React, { useState, useRef } from 'react';
import Header from './components/Header';
import ServiceCard from './components/ServiceCard';
import ServiceDetail from './components/ServiceDetail';
import QuoteModal from './components/QuoteModal';
import { SERVICES, COMPANY_ADDRESS, COMPANY_EMAIL, COMPANY_PHONE_DISPLAY, COMPANY_INSTAGRAM, COMPANY_PHONE } from './constants';
import { Service } from './types';

const App: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="h-screen bg-[#0a0a0a] text-slate-100 flex flex-col selection:bg-[#f37021] selection:text-white overflow-hidden">
      <Header 
        onQuoteClick={() => setIsQuoteModalOpen(true)} 
        onHomeClick={() => setSelectedService(null)}
      />

      <main className={`flex-grow ${!selectedService ? 'snap-container' : 'overflow-y-auto'}`}>
        {selectedService ? (
          <ServiceDetail 
            service={selectedService} 
            onBack={() => setSelectedService(null)}
            onQuote={() => setIsQuoteModalOpen(true)}
          />
        ) : (
          <div className="animate-in fade-in duration-1000">
            {/* Seção 1: Hero (Snap Start) */}
            <section className="snap-section relative overflow-hidden border-b border-[#003d33]">
              <div className="absolute inset-0 z-0">
                <img 
                  src="images/hero-bg.jpg" 
                  className="w-full h-full object-cover opacity-30 grayscale"
                  alt="Background Car"
                  onError={(e) => {
                    // Fallback para Unsplash caso o usuário ainda não tenha a imagem local
                    e.currentTarget.src = "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000&auto=format&fit=crop";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#003d33]/20 to-[#f37021]/10" />
              </div>
              
              <div className="container mx-auto px-4 text-center relative z-10">
                <div className="inline-block bg-[#003d33] text-[#f37021] px-4 py-1.5 rounded-md font-black tracking-[0.5em] text-[10px] uppercase mb-8 border border-[#f37021]/30">
                  EXCELÊNCIA AUTOMOTIVA
                </div>
                <h2 className="text-4xl md:text-7xl lg:text-8xl font-black font-heading mb-8 leading-none italic tracking-tighter">
                  CUIDADO <span className="text-[#f37021]">PREMIUM</span><br/>
                  <span className="text-white">PARA SEU VEÍCULO</span>
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-xl font-medium leading-relaxed mb-12">
                  A excelência que seu veículo merece com as técnicas de pintura, estética e mecânica mais avançadas do mercado.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <button 
                    onClick={() => setIsQuoteModalOpen(true)}
                    className="bg-[#f37021] text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-white hover:text-black transition-all shadow-[0_0_30px_rgba(243,112,33,0.4)] flex items-center gap-3"
                  >
                    SOLICITAR ORÇAMENTO
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </section>

            {/* Seção 2: Serviços (Snap Start) */}
            <section className="snap-section bg-[#0a0a0a] py-10">
              <div className="container mx-auto px-4 mb-12 text-center md:text-left">
                <h3 className="text-white font-black text-4xl md:text-6xl font-heading uppercase italic tracking-tighter">
                  Serviços <span className="text-[#00838f]">Especializados</span>
                </h3>
                <div className="w-24 h-2 bg-[#f37021] mt-4 rounded-full mx-auto md:mx-0"></div>
              </div>

              <div className="relative group">
                <div 
                  ref={scrollRef}
                  className="flex overflow-x-auto gap-8 px-6 md:px-[10%] scrollbar-hide snap-x snap-mandatory pb-12"
                >
                  {SERVICES.map((service) => (
                    <div key={service.id} className="snap-center">
                      <ServiceCard 
                        service={service} 
                        onClick={() => setSelectedService(service)} 
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#003d33]/10 border-y border-[#003d33]/30 py-8 overflow-hidden mt-auto">
                 <div className="animate-marquee">
                    <div className="flex gap-20 items-center px-10">
                      <span className="font-heading font-black text-2xl md:text-4xl italic text-white/5 uppercase">Estética Automotiva</span>
                      <span className="text-[#f37021] text-2xl font-black">●</span>
                      <span className="font-heading font-black text-2xl md:text-4xl italic text-white/5 uppercase">Mecânica de Precisão</span>
                      <span className="text-[#f37021] text-2xl font-black">●</span>
                      <span className="font-heading font-black text-2xl md:text-4xl italic text-white/5 uppercase">Funilaria e Pintura</span>
                      <span className="text-[#f37021] text-2xl font-black">●</span>
                      <span className="font-heading font-black text-2xl md:text-4xl italic text-white/5 uppercase">Estética Automotiva</span>
                      <span className="text-[#f37021] text-2xl font-black">●</span>
                      <span className="font-heading font-black text-2xl md:text-4xl italic text-white/5 uppercase">Mecânica de Precisão</span>
                      <span className="text-[#f37021] text-2xl font-black">●</span>
                      <span className="font-heading font-black text-2xl md:text-4xl italic text-white/5 uppercase">Funilaria e Pintura</span>
                      <span className="text-[#f37021] text-2xl font-black">●</span>
                    </div>
                 </div>
              </div>
            </section>
          </div>
        )}
      </main>

      {!selectedService && (
        <footer className="bg-[#050505] border-t border-[#003d33] py-6 shrink-0">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4 text-center md:text-left">
              <div className="space-y-2">
                <div className="text-xl font-black font-heading italic tracking-tighter leading-none">
                  <span className="text-white">RM</span>{' '}
                  <span className="text-[#f37021]">AUTO</span>{' '}
                  <span className="text-white">CENTER</span>
                </div>
                <p className="text-slate-500 text-[8px] uppercase tracking-[0.2em]">Tecnologia Automotiva Avançada</p>
              </div>

              <div className="space-y-2 text-slate-400 text-[10px] md:text-xs">
                <p className="flex items-start justify-center md:justify-start gap-2">
                   <svg className="w-4 h-4 text-[#f37021] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                   {COMPANY_ADDRESS}
                </p>
                <p className="flex items-center justify-center md:justify-start gap-2">
                   <svg className="w-4 h-4 text-[#f37021] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                   {COMPANY_EMAIL}
                </p>
              </div>

              <div className="space-y-2 text-slate-400 text-[10px] md:text-xs">
                <p className="flex items-center justify-center md:justify-start gap-2">
                   <svg className="w-4 h-4 text-[#f37021] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                   {COMPANY_PHONE_DISPLAY}
                </p>
                <div className="flex justify-center md:justify-start space-x-4 pt-1">
                  <a href={`https://instagram.com/${COMPANY_INSTAGRAM}`} target="_blank" rel="noopener noreferrer" className="text-[9px] text-[#f37021] font-bold hover:text-white transition-colors tracking-widest uppercase">INSTAGRAM</a>
                  <span className="text-[#003d33]">|</span>
                  <a href={`https://wa.me/${COMPANY_PHONE}`} target="_blank" rel="noopener noreferrer" className="text-[9px] text-[#f37021] font-bold hover:text-white transition-colors tracking-widest uppercase">WHATSAPP</a>
                </div>
              </div>
            </div>
            
            <div className="pt-4 border-t border-[#003d33]/30 text-center">
               <p className="text-slate-600 text-[8px] uppercase tracking-[0.3em]">© 2024 RM AUTO CENTER - NATAL/RN</p>
            </div>
          </div>
        </footer>
      )}

      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
    </div>
  );
};

export default App;
