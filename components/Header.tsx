
import React from 'react';

interface HeaderProps {
  onQuoteClick: () => void;
  onHomeClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onQuoteClick, onHomeClick }) => {
  return (
    <header className="sticky top-0 z-50 glass h-[90px]">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <div 
          onClick={onHomeClick}
          className="flex items-center cursor-pointer group"
        >
          {/* Container da Logo Otimizado para a nova imagem */}
          <div className="h-16 w-16 md:h-20 md:w-20 mr-4 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(243,112,33,0.4)]">
            <img 
              src="images/logo.png" 
              alt="RM Auto Center Logo" 
              className="h-full w-full object-contain drop-shadow-2xl"
              onError={(e) => {
                // Caso a imagem ainda não tenha sido salva na pasta, mantém o fallback elegante
                e.currentTarget.src = "https://cdn-icons-png.flaticon.com/512/3202/3202926.png";
                e.currentTarget.style.filter = "invert(1) brightness(2)";
              }}
            />
          </div>
          
          <div className="flex flex-col">
            <div className="text-xl md:text-3xl font-black font-heading italic tracking-tighter leading-none select-none transition-colors duration-300 group-hover:text-white">
              <span className="text-white">RM</span>{' '}
              <span className="text-[#f37021]">AUTO</span>{' '}
              <span className="text-white">CENTER</span>
            </div>
            <div className="text-[8px] md:text-[10px] font-bold text-[#f37021] tracking-[0.3em] uppercase opacity-70 mt-1">
              Premium Services
            </div>
          </div>
        </div>

        <button
          onClick={onQuoteClick}
          className="group bg-[#f37021] hover:bg-white hover:text-black text-white px-6 md:px-10 py-4 rounded-2xl font-black text-[10px] md:text-xs tracking-[0.2em] transition-all transform active:scale-95 shadow-[0_10px_30px_rgba(243,112,33,0.3)] border-b-4 border-orange-800 hover:border-transparent flex items-center gap-3"
        >
          SOLICITAR ORÇAMENTO
          <svg className="w-4 h-4 text-white group-hover:text-black transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
