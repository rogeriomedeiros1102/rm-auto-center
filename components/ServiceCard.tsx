
import React from 'react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  onClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick }) => {
  // Fallbacks de alta qualidade para manter o visual enquanto o usuário não faz upload
  const fallbacks: Record<string, string> = {
    mecanica: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?q=80&w=800&auto=format&fit=crop',
    funilaria: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop',
    pintura: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop',
    estetica: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=800&auto=format&fit=crop'
  };

  return (
    <div 
      onClick={onClick}
      className="flex-shrink-0 w-80 md:w-96 h-[500px] relative group cursor-pointer overflow-hidden rounded-3xl bg-[#0f0f0f] border border-[#003d33] transition-all duration-500 hover:border-[#f37021] hover:shadow-[0_0_40px_rgba(243,112,33,0.1)] shadow-2xl"
    >
      <div className="h-1/2 overflow-hidden relative">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
          onError={(e) => {
            // Se a imagem local não for encontrada, usa o fallback do Unsplash
            e.currentTarget.src = fallbacks[service.id] || fallbacks.mecanica;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] to-transparent opacity-60" />
      </div>
      
      <div className="p-8 flex flex-col h-1/2 justify-between">
        <div>
          <span className="text-[#00838f] text-[10px] font-black tracking-widest uppercase mb-2 block">SOLUÇÃO RM</span>
          <h3 className="text-2xl font-black font-heading text-white mb-3 group-hover:text-[#f37021] transition-colors italic tracking-tighter">
            {service.title.toUpperCase()}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
            {service.description}
          </p>
        </div>
        
        <div className="flex items-center text-[11px] font-black tracking-widest text-[#f37021] uppercase mt-4">
          VER DETALHES
          <div className="w-10 h-[2px] bg-[#f37021] ml-4 transform origin-left transition-all duration-500 group-hover:scale-x-150" />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
