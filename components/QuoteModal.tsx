
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
    
    const message = `Olá RM Auto Center! Gostaria de um orçamento:
*Nome:* ${formData.name}
*Telefone:* ${formData.phone}
*Veículo:* ${formData.vehicleModel} (${formData.vehicleYear})
*Detalhes:* ${formData.details || 'Não informado'}
*Arquivos:* ${files.length > 0 ? `${files.length} fotos anexadas` : 'Sem fotos'}

_Aguardo retorno para agendamento._`;

    const whatsappUrl = `https://wa.me/${COMPANY_PHONE}?text=${encodeURIComponent(message)}`;
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
      <div 
        className="absolute inset-0 bg-[#0a0a0a]/95 backdrop-blur-md"
        onClick={onClose}
      />
      
      <div className="relative bg-[#0f0f0f] border-2 border-[#003d33] rounded-[2rem] w-full max-w-xl max-h-[90vh] overflow-y-auto shadow-[0_0_100px_rgba(0,61,51,0.3)]">
        <div className="p-8 md:p-12">
          <div className="flex justify-between items-center mb-10 border-b border-[#003d33] pb-8">
            <h2 className="text-3xl font-black font-heading italic text-white leading-none">
              SOLICITAR <span className="text-[#f37021]">ORÇAMENTO</span>
            </h2>
            <button onClick={onClose} className="text-slate-500 hover:text-white transition-colors p-2">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[11px] font-black uppercase text-[#00838f] tracking-widest">Seu Nome</label>
                <input 
                  required
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-[#0a0a0a] border border-[#003d33] rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#f37021] transition-all"
                  placeholder="Nome Completo"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[11px] font-black uppercase text-[#00838f] tracking-widest">WhatsApp</label>
                <input 
                  required
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-[#0a0a0a] border border-[#003d33] rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#f37021] transition-all"
                  placeholder="(00) 00000-0000"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[11px] font-black uppercase text-[#00838f] tracking-widest">Modelo do Veículo</label>
                <input 
                  required
                  type="text" 
                  value={formData.vehicleModel}
                  onChange={(e) => setFormData({...formData, vehicleModel: e.target.value})}
                  className="w-full bg-[#0a0a0a] border border-[#003d33] rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#f37021] transition-all"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[11px] font-black uppercase text-[#00838f] tracking-widest">Ano</label>
                <input 
                  required
                  type="text" 
                  value={formData.vehicleYear}
                  onChange={(e) => setFormData({...formData, vehicleYear: e.target.value})}
                  className="w-full bg-[#0a0a0a] border border-[#003d33] rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#f37021] transition-all"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[11px] font-black uppercase text-[#00838f] tracking-widest">Descrição do Serviço</label>
              <textarea 
                rows={3}
                value={formData.details}
                onChange={(e) => setFormData({...formData, details: e.target.value})}
                className="w-full bg-[#0a0a0a] border border-[#003d33] rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#f37021] transition-all"
                placeholder="Ex: Polimento técnico e vitrificação."
              />
            </div>

            <div className="space-y-4">
              <label className="text-[11px] font-black uppercase text-[#00838f] tracking-widest">Anexar Fotos</label>
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-[#003d33] rounded-2xl cursor-pointer bg-[#0a0a0a] hover:bg-[#003d33]/20 transition-all">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg className="w-10 h-10 text-[#f37021] mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-xs text-slate-400">Clique para anexar imagens do veículo</p>
                </div>
                <input type="file" multiple className="hidden" onChange={handleFileChange} />
              </label>
              {files.length > 0 && <p className="text-xs text-[#f37021] font-bold uppercase tracking-widest">{files.length} Fotos selecionadas</p>}
            </div>

            <button 
              type="submit"
              className="w-full bg-[#f37021] hover:bg-white hover:text-black text-white font-black py-5 rounded-2xl text-lg transition-all transform active:scale-95 shadow-[0_0_30px_rgba(243,112,33,0.3)] flex items-center justify-center space-x-4"
            >
              <span>ENVIAR PARA O WHATSAPP</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;
