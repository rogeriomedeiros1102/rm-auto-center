
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
          <div className="h-12 w-12 mr-3 bg-[#111] border border-[#f37021]/30 rounded-lg flex items-center justify-center p-1 overflow-hidden transition-all duration-300 group-hover:border-[#f37021]">
            <img 
              src="images/logo.png" 
              alt="RM" 
              className="h-full w-full object-contain"
              onError={(e) => {
                e.currentTarget.src = "https://cdn-icons-png.flaticon.com/512/3202/3202926.png";
                e.currentTarget.style.filter = "invert(1) brightness(2)";
              }}
            />
          </div>
          <div className="text-xl md:text-2xl font-black font-heading italic tracking-tighter leading-none select-none">
            <span className="text-white">RM</span>{' '}
            <span className="text-[#f37021]">AUTO</span>{' '}
            <span className="text-white">CENTER</span>
          </div>
        </div>

        <button
          onClick={onQuoteClick}
          className="group bg-[#f37021] hover:bg-white hover:text-black text-white px-5 md:px-8 py-3 rounded-xl font-black text-[10px] md:text-xs tracking-widest transition-all transform active:scale-95 shadow-[0_0_20px_rgba(243,112,33,0.2)] border-b-2 border-orange-800 hover:border-white flex items-center gap-2"
        >
          SOLICITAR ORÇAMENTO
          <svg className="w-4 h-4 text-white group-hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
