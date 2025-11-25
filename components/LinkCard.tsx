import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface LinkCardProps {
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  onClick?: () => void;
}

export const LinkCard: React.FC<LinkCardProps> = ({ 
  title, 
  description, 
  buttonText, 
  imageSrc, 
  onClick 
}) => {
  return (
    <div 
      className="group relative flex flex-row w-full max-w-5xl bg-zinc-900/60 backdrop-blur-xl border border-zinc-800/80 rounded-3xl overflow-hidden hover:border-zinc-600/50 transition-all duration-500 shadow-2xl shadow-black/50"
    >
      {/* Content Section - Larger width on mobile (65%) */}
      <div className="w-[65%] sm:w-[60%] md:w-1/2 p-4 sm:p-8 md:p-12 flex flex-col justify-center z-10">
        <h2 className="text-sm sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-4 tracking-tight leading-tight">
          {title}
        </h2>
        
        <p className="text-zinc-400 text-[10px] sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-8 font-medium line-clamp-4 sm:line-clamp-none">
          {description}
        </p>

        <button 
          onClick={onClick}
          className="group/btn inline-flex items-center justify-center w-fit px-3 py-2 sm:px-8 sm:py-4 bg-white text-black font-bold text-[9px] sm:text-sm uppercase tracking-wider rounded-full transition-all duration-300 hover:bg-zinc-200 hover:scale-105 active:scale-95 whitespace-nowrap"
        >
          <span>{buttonText}</span>
          <ArrowUpRight className="ml-1 sm:ml-2 w-3 h-3 sm:w-5 sm:h-5 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
        </button>
      </div>

      {/* Image Section - Smaller width on mobile (35%) */}
      <div className="relative w-[35%] sm:w-[40%] md:w-1/2">
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/20 to-transparent z-10 pointer-events-none" />
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
        />
      </div>
    </div>
  );
};