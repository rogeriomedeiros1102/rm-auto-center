
import React from 'react';

interface HeaderProps {
  onQuoteClick: () => void;
  onHomeClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onQuoteClick, onHomeClick }) => {
  return (
    <header className="sticky top-0 z-50 glass h-[80px]">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <div 
          onClick={onHomeClick}
          className="flex items-center cursor-pointer group"
        >
          <img 
            src="images/logo.png" 
            alt="RM Auto Center" 
            className="h-10 md:h-14 w-auto object-contain transition-all duration-300 group-hover:scale-105 mr-3"
            onError={(e) => {
              // Se a logo local não existir, apenas oculta o elemento img e mantém o texto
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="text-2xl md:text-3xl font-black font-heading italic tracking-tighter leading-none select-none">
            <span className="text-white">RM</span>{' '}
            <span className="text-[#f37021]">AUTO</span>{' '}
            <span className="text-white">CENTER</span>
          </div>
        </div>

        <button
          onClick={onQuoteClick}
          className="bg-[#f37021] hover:bg-[#ff7e2e] text-white px-5 md:px-8 py-3 rounded-xl font-black text-xs md:text-sm tracking-widest transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(243,112,33,0.3)] border-b-4 border-orange-800 flex items-center gap-3"
        >
          SOLICITAR ORÇAMENTO
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
