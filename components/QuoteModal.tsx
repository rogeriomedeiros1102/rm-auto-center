
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
  const [files, setFiles] = useState<File[]>([]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `*SOLICITAÇÃO DE ORÇAMENTO - RM AUTO CENTER*%0A%0A` +
      `*Cliente:* ${formData.name}%0A` +
      `*WhatsApp:* ${formData.phone}%0A` +
      `*Veículo:* ${formData.vehicleModel}%0A` +
      `*Ano:* ${formData.vehicleYear}%0A` +
      `*Serviço:* ${formData.details || 'Verificar imagens'}%0A%0A` +
      `_O cliente anexou ${files.length} fotos para avaliação._`;

    const whatsappUrl = `https://wa.me/${COMPANY_PHONE}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative bg-[#111] border border-[#333] rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
        <div className="bg-[#f37021] px-6 py-4 flex justify-between items-center">
          <h2 className="font-heading text-xl font-bold italic tracking-tighter text-white">SOLICITAR ORÇAMENTO</h2>
          <button onClick={onClose} className="text-white/80 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-5 max-h-[75vh] overflow-y-auto">
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Nome Completo</label>
            <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-[#0a0a0a] border border-[#222] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#f37021]" placeholder="Ex: João Silva" />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">WhatsApp</label>
            <input required type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full bg-[#0a0a0a] border border-[#222] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#f37021]" placeholder="(00) 00000-0000" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Modelo do Carro</label>
              <input required type="text" value={formData.vehicleModel} onChange={e => setFormData({...formData, vehicleModel: e.target.value})} className="w-full bg-[#0a0a0a] border border-[#222] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#f37021]" placeholder="Ex: Corolla" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Ano</label>
              <input required type="text" value={formData.vehicleYear} onChange={e => setFormData({...formData, vehicleYear: e.target.value})} className="w-full bg-[#0a0a0a] border border-[#222] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#f37021]" placeholder="2022" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Descrição do Serviço</label>
            <textarea rows={2} value={formData.details} onChange={e => setFormData({...formData, details: e.target.value})} className="w-full bg-[#0a0a0a] border border-[#222] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#f37021]" placeholder="Descreva brevemente o problema ou serviço desejado..." />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold text-slate-500 tracking-widest block">Anexar Fotos (Opcional)</label>
            <label className="flex items-center justify-center w-full h-24 border-2 border-dashed border-[#222] rounded-2xl cursor-pointer hover:bg-[#1a1a1a] transition-all group">
              <div className="text-center">
                <svg className="w-6 h-6 text-[#f37021] mx-auto mb-2 opacity-50 group-hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                <p className="text-[10px] text-slate-400">Clique para selecionar fotos</p>
              </div>
              <input type="file" multiple className="hidden" onChange={handleFileChange} accept="image/*" />
            </label>
            {files.length > 0 && <p className="text-[10px] text-[#f37021] font-bold italic tracking-widest">{files.length} FOTOS SELECIONADAS</p>}
          </div>

          <button type="submit" className="w-full bg-[#f37021] hover:bg-white hover:text-black text-white font-black py-4 rounded-xl text-sm tracking-[0.2em] transition-all transform active:scale-95 flex items-center justify-center gap-3">
            ENVIAR PARA WHATSAPP
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuoteModal;
