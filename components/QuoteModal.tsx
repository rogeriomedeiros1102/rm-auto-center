
import React, { useState } from 'react';
import { COMPANY_PHONE } from '../constants';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    vehicleModel: '',
    vehicleYear: '',
    details: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const textMessage = `*SOLICITAÇÃO DE ORÇAMENTO - RM AUTO CENTER*%0A%0A` +
      `*Cliente:* ${formData.name}%0A` +
      `*WhatsApp:* ${formData.phone}%0A` +
      `*Veículo:* ${formData.vehicleModel}%0A` +
      `*Ano:* ${formData.vehicleYear}%0A` +
      `*Serviço:* ${formData.details || 'Avaliação Técnica'}%0A%0A` +
      `_Aguardo para enviar fotos/vídeos na conversa._`;

    const whatsappUrl = `https://wa.me/${COMPANY_PHONE}?text=${textMessage}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Overlay com desfoque refinado */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={onClose} />
      
      <div className="relative bg-[#0d0d0d] border border-white/10 rounded-[2.5rem] w-full max-w-lg overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] animate-in fade-in zoom-in duration-300">
        {/* Header do Modal */}
        <div className="bg-[#f37021] px-8 py-6 flex justify-between items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10 opacity-50" />
          <div className="relative">
            <h2 className="font-heading text-2xl font-black italic tracking-tighter text-white uppercase leading-none">Solicitar Orçamento</h2>
            <p className="text-white/60 text-[9px] font-bold uppercase tracking-[0.2em] mt-1">Atendimento Premium RM</p>
          </div>
          <button onClick={onClose} className="relative text-white/80 hover:text-white transition-colors bg-black/20 p-2 rounded-full hover:bg-black/40">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6 max-h-[75vh] overflow-y-auto scrollbar-hide">
          {/* Campos de Dados */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-[9px] uppercase font-black text-[#f37021] tracking-[0.2em] ml-1">Seu Nome</label>
              <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[#f37021] transition-all placeholder:text-white/20" placeholder="Nome completo" />
            </div>
            <div className="space-y-2">
              <label className="text-[9px] uppercase font-black text-[#f37021] tracking-[0.2em] ml-1">Seu WhatsApp</label>
              <input required type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[#f37021] transition-all placeholder:text-white/20" placeholder="(84) 9..." />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-[9px] uppercase font-black text-[#f37021] tracking-[0.2em] ml-1">Modelo do Carro</label>
              <input required type="text" value={formData.vehicleModel} onChange={e => setFormData({...formData, vehicleModel: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[#f37021] transition-all placeholder:text-white/20" placeholder="Ex: Corolla" />
            </div>
            <div className="space-y-2">
              <label className="text-[9px] uppercase font-black text-[#f37021] tracking-[0.2em] ml-1">Ano</label>
              <input required type="text" value={formData.vehicleYear} onChange={e => setFormData({...formData, vehicleYear: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[#f37021] transition-all placeholder:text-white/20" placeholder="2022" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[9px] uppercase font-black text-[#f37021] tracking-[0.2em] ml-1">Detalhes do Pedido</label>
            <textarea rows={2} value={formData.details} onChange={e => setFormData({...formData, details: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[#f37021] transition-all placeholder:text-white/20 resize-none" placeholder="O que seu veículo precisa hoje?" />
          </div>

          {/* Mensagem Amigável (Substituindo o Anexo) */}
          <div className="bg-[#f37021]/5 border border-[#f37021]/20 rounded-[2rem] p-6 space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <div className="flex justify-center gap-6 opacity-60">
              <svg className="w-6 h-6 text-[#f37021]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              </svg>
              <svg className="w-6 h-6 text-[#f37021]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <svg className="w-6 h-6 text-[#f37021]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </div>
            <div className="text-center space-y-2">
              <h4 className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Dica para Diagnóstico Preciso</h4>
              <p className="text-[11px] text-white/50 leading-relaxed font-medium">
                Para um orçamento mais ágil e certeiro, sinta-se à vontade para compartilhar <span className="text-[#f37021] font-bold">fotos, vídeos ou áudios</span> descrevendo a sua necessidade assim que nossa conversa iniciar no WhatsApp.
              </p>
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full bg-[#f37021] hover:bg-white hover:text-black text-white font-black py-5 rounded-2xl text-sm tracking-[0.2em] transition-all transform active:scale-95 flex items-center justify-center gap-4 shadow-[0_15px_30px_rgba(243,112,33,0.3)]"
          >
            INICIAR ATENDIMENTO
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuoteModal;
