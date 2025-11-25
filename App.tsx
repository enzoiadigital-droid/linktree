import React from 'react';
import { LinkCard } from './components/LinkCard';

const App: React.FC = () => {
  
  const handleCardClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center overflow-x-hidden selection:bg-zinc-700 selection:text-white font-sans">
      
      {/* Background Effect */}
      <div className="fixed inset-0 bg-black z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-100" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black pointer-events-none" />
        <div className="absolute inset-0 bg-grid-mask pointer-events-none" />
      </div>

      {/* Main Content */}
      <main className="relative z-10 w-full max-w-6xl px-4 md:px-6 py-12 md:py-20 flex flex-col items-center gap-12">
        
        {/* Header */}
        <header className="flex flex-col items-center text-center space-y-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-zinc-800 border-2 border-zinc-700 overflow-hidden shadow-2xl">
               {/* Profile Avatar */}
               <img 
                src="https://i.postimg.cc/Nj26D8K8/Generated-Image-October-23-2025-10-41AM.png" 
                alt="Enzo" 
                className="w-full h-full object-cover hover:opacity-90 transition-opacity duration-300" 
               />
            </div>
            <div className="absolute bottom-0 right-0 bg-green-500 w-5 h-5 rounded-full border-4 border-black" title="Online"></div>
          </div>
          
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              Links úteis do Enzo
            </h1>
          </div>
        </header>

        {/* Cards Container */}
        <div className="w-full flex flex-col gap-8 items-center pb-20">
          
          {/* Card 1: EZCLUB */}
          <LinkCard 
            title="Comunidade EZCLUB"
            description="Tenha acesso a um treinamento completo, do absoluto zero ao avançado em n8n e automação para vender seus primeiros projetos."
            buttonText="QUERO ENTRAR"
            imageSrc="https://i.postimg.cc/vHc2RV1F/Untitled-design-(2).png"
            onClick={() => handleCardClick('https://clickby.com.br/z/enzonoppeney')}
          />
          
        </div>

        {/* Footer */}
        <footer className="text-zinc-600 text-sm font-medium">
          © {new Date().getFullYear()} Enzo. Todos os direitos reservados.
        </footer>
      </main>
    </div>
  );
};

export default App;