import React from 'react';

export function EbookCTA() {
  return (
    <section className="w-full bg-[#0d2b45] py-24 px-8 overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16 relative z-10">
        <div className="md:w-1/2">
          <h2 className="text-5xl md:text-7xl font-headline font-medium text-white leading-tight mb-8">
            Prêt à éveiller votre esprit ?
          </h2>
          <p className="text-white font-body text-lg mb-12 max-w-md">
            Rejoignez des milliers de grands esprits qui ont choisi la clarté et l'action pour transformer leur quotidien.
          </p>
          <button className="bg-[#2f0800] text-white px-10 py-5 rounded-md font-bold font-label text-[10px] tracking-widest uppercase hover:bg-opacity-90 transition-all shadow-2xl shadow-black/20">
            Télécharger le petit livre
          </button>
        </div>
        
        <div className="md:w-1/2 relative">
          {/* Main Book */}
          <div className="relative z-10 transform md:translate-x-12 rotate-6 shadow-2xl shadow-black/40 border border-white/10 rounded-sm">
            <div className="bg-stone-100 aspect-[3/4] w-64 md:w-80 overflow-hidden relative">
              <div className="p-8 flex flex-col justify-between h-full relative z-20">
                <span className="font-headline text-[#00162a] text-[10px] tracking-widest uppercase">IROTORI BAROKA</span>
                <span className="font-headline text-[#00162a] text-3xl font-medium leading-none">Un Petit Livre<br/>pour les Grands Esprits</span>
                <div className="w-12 h-0.5 bg-[#00162a] mb-4"></div>
              </div>
              <div 
                className="absolute inset-0 w-full h-full opacity-80"
                style={{ 
                  backgroundImage: "url('https://picsum.photos/seed/mind/800/1200')", 
                  backgroundSize: 'cover',
                  mixBlendMode: 'multiply'
                }}
              />
            </div>
          </div>
          {/* Secondary book behind */}
          <div className="absolute top-10 left-0 -translate-x-10 transform -rotate-12 opacity-40 shadow-xl border border-white/5 rounded-sm scale-90">
            <div className="bg-[#00162a] aspect-[3/4] w-64 md:w-80 overflow-hidden"></div>
          </div>
        </div>
      </div>
      
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#00162a] to-transparent opacity-50"></div>
    </section>
  );
}
