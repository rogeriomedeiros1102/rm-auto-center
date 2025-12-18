
import React from 'react';
import { Service } from '../types';

interface ServiceDetailProps {
  service: Service;
  onBack: () => void;
  onQuote: () => void;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, onBack, onQuote }) => {
  return (
    <div className="min-h-screen container mx-auto px-4 py-16 animate-in fade-in slide-in-from-top-6 duration-700 bg-[#0a0a0a]">
      <button 
        onClick={onBack}
        className="flex items-center text-[#f37021] hover:text-white mb-12 group transition-colors font-black text-xs tracking-widest uppercase"
      >
        <svg className="w-6 h-6 mr-3 group-hover:-translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
        </svg>
        <span>Voltar para Lista</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-tr from-[#003d33] to-[#f37021] rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
          <img 
            src={service.image} 
            alt={service.title} 
            className="relative rounded-3xl w-full aspect-[4/3] object-cover shadow-2xl border border-[#003d33]"
          />
        </div>

        <div className="space-y-10">
          <div>
            <span className="text-[#00838f] font-black tracking-[0.5em] text-[10px] uppercase mb-4 block">EXCELÊNCIA EM SERVIÇOS</span>
            <h2 className="text-5xl md:text-7xl font-black font-heading text-white leading-none italic uppercase tracking-tighter">
              {service.title}
            </h2>
            <div className="w-24 h-2 bg-[#f37021] mt-6 rounded-full"></div>
          </div>

          <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-medium">
            {service.longDescription}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.features.map((feature, idx) => (
              <div key={idx} className="flex items-center space-x-4 bg-[#0f0f0f] p-5 rounded-2xl border border-[#003d33]">
                <div className="w-3 h-3 bg-[#f37021] rounded-full shadow-[0_0_10px_rgba(243,112,33,0.5)]" />
                <span className="font-bold text-white text-sm uppercase tracking-wide">{feature}</span>
              </div>
            ))}
          </div>

          <button 
            onClick={onQuote}
            className="w-full bg-[#f37021] text-white px-10 py-6 rounded-2xl font-black text-xl hover:bg-white hover:text-black transition-all transform hover:scale-[1.02] shadow-[0_0_40px_rgba(243,112,33,0.3)] flex items-center justify-center gap-4"
          >
            SOLICITAR ORÇAMENTO PELO WHATSAPP
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
               <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
