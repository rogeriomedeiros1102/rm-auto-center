
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

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#050505] text-slate-100 flex flex-col selection:bg-[#f37021] selection:text-white">
      <Header 
        onQuoteClick={() => setIsQuoteModalOpen(true)} 
        onHomeClick={() => setSelectedService(null)}
      />

      <main className="flex-grow">
        {selectedService ? (
          <ServiceDetail 
            service={selectedService} 
            onBack={() => setSelectedService(null)}
            onQuote={() => setIsQuoteModalOpen(true)}
          />
        ) : (
          <div className="animate-in fade-in duration-1000">
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0">
                <img 
                  src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop" 
                  className="w-full h-full object-cover opacity-20 grayscale brightness-50"
                  alt="Car detail"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
              </div>
              
              <div className="container mx-auto px-4 text-center relative z-10">
                <span className="text-[#f37021] font-black tracking-[0.4em] text-[10px] md:text-xs uppercase mb-6 block animate-bounce">
                  SOLUÇÕES AUTOMOTIVAS DE ELITE
                </span>
                <h1 className="text-5xl md:text-8xl font-black font-heading mb-8 leading-[0.9] italic tracking-tighter">
                  ESTÉTICA E <span className="text-[#f37021]">PRECISÃO</span><br/>
                  <span className="text-white">PARA SEU CARRO</span>
                </h1>
                <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base font-medium leading-relaxed mb-10 px-6">
                  Mecânica, Pintura e Estética de alto padrão em Natal/RN. 
                  Transformamos seu veículo com a atenção aos detalhes que ele merece.
                </p>
                <div className="flex justify-center">
                   <button 
                    onClick={() => setIsQuoteModalOpen(true)}
                    className="group bg-[#f37021] text-white px-10 py-5 rounded-2xl font-black text-sm tracking-widest hover:bg-white hover:text-black transition-all shadow-xl flex items-center gap-4"
                  >
                    SOLICITAR ORÇAMENTO
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </section>

            {/* Bandeja de Serviços (Horizontal Slider) */}
            <section className="py-20 bg-[#080808]">
              <div className="container mx-auto px-4 mb-16 text-center">
                <h2 className="text-3xl md:text-5xl font-black font-heading uppercase italic tracking-tighter mb-4">
                   Nossas <span className="text-[#f37021]">Especialidades</span>
                </h2>
              </div>

              <div className="service-tray-container relative">
                <div 
                  ref={scrollRef}
                  className="flex overflow-x-auto gap-8 px-6 md:px-[10%] scrollbar-hide pb-12 snap-x snap-mandatory"
                >
                  {SERVICES.map((service) => (
                    <div key={service.id} className="snap-center">
                      <ServiceCard 
                        service={service} 
                        onClick={() => handleServiceClick(service)} 
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Marquee de Serviços */}
            <div className="bg-[#0f0f0f] border-y border-[#1a1a1a] py-6 overflow-hidden">
               <div className="animate-marquee">
                  <div className="flex gap-16 items-center px-8">
                    {['VITRIFICAÇÃO', 'MARTELINHO DE OURO', 'PINTURA TÉCNICA', 'REVISÃO MECÂNICA', 'POLIMENTO', 'HIGIENIZAÇÃO'].map((item, i) => (
                      <React.Fragment key={i}>
                        <span className="font-heading font-black text-2xl italic text-white/10 uppercase whitespace-nowrap">{item}</span>
                        <span className="text-[#f37021] text-xl font-black">/</span>
                      </React.Fragment>
                    ))}
                    {['VITRIFICAÇÃO', 'MARTELINHO DE OURO', 'PINTURA TÉCNICA', 'REVISÃO MECÂNICA', 'POLIMENTO', 'HIGIENIZAÇÃO'].map((item, i) => (
                      <React.Fragment key={i + 10}>
                        <span className="font-heading font-black text-2xl italic text-white/10 uppercase whitespace-nowrap">{item}</span>
                        <span className="text-[#f37021] text-xl font-black">/</span>
                      </React.Fragment>
                    ))}
                  </div>
               </div>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-[#050505] border-t border-[#111] py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
            <div className="col-span-1 md:col-span-1">
              <div className="text-2xl font-black font-heading italic tracking-tighter text-white mb-4">
                RM <span className="text-[#f37021]">AUTO</span> CENTER
              </div>
              <p className="text-slate-500 text-xs leading-relaxed max-w-xs mx-auto md:mx-0">
                Excelência em cuidados automotivos. De pequenos reparos a restaurações completas.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase text-[#f37021] tracking-widest">Endereço</h4>
              <p className="text-slate-400 text-xs leading-relaxed">{COMPANY_ADDRESS}</p>
            </div>

            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase text-[#f37021] tracking-widest">Contatos</h4>
              <p className="text-slate-400 text-xs">{COMPANY_PHONE_DISPLAY}</p>
              <p className="text-slate-400 text-xs">{COMPANY_EMAIL}</p>
            </div>

            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase text-[#f37021] tracking-widest">Siga-nos</h4>
              <div className="flex justify-center md:justify-start gap-4">
                 <a href={`https://instagram.com/${COMPANY_INSTAGRAM}`} className="text-white hover:text-[#f37021] transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                 </a>
                 <a href={`https://wa.me/${COMPANY_PHONE}`} className="text-white hover:text-[#f37021] transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                 </a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-[#111] text-center">
             <p className="text-slate-700 text-[10px] font-bold uppercase tracking-[0.3em]">© 2024 RM AUTO CENTER - NATAL/RN | TODOS OS DIREITOS RESERVADOS</p>
          </div>
        </div>
      </footer>

      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
    </div>
  );
};

export default App;
