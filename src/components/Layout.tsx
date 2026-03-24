import React from 'react';
import { Search } from 'lucide-react';

export function Navigation({ setView }: { setView: (view: 'dashboard' | 'testimonials' | 'ebook' | 'blog') => void }) {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 py-4">
        <div className="text-2xl font-bold tracking-tighter text-primary font-headline cursor-pointer" onClick={() => setView('testimonials')}>Grands Esprits</div>
        <nav className="hidden md:flex items-center gap-8">
          {[
            { name: 'Livre', view: 'ebook' },
            { name: 'Blog', view: 'blog' },
            { name: 'Témoignages', view: 'testimonials' }
          ].map((item) => (
            <button 
              key={item.name} 
              onClick={() => setView(item.view as any)}
              className="text-on-surface-variant font-medium hover:text-primary transition-colors font-label text-[10px] uppercase tracking-widest"
            >
              {item.name}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-6">
          <button className="text-on-surface-variant hover:text-primary transition-colors">
            <Search size={20} />
          </button>
          <button 
            onClick={() => setView('ebook')}
            className="bg-tertiary-container text-on-tertiary-container px-6 py-2 rounded-md font-semibold font-label text-[10px] uppercase tracking-widest hover:opacity-90 transition-all"
          >
            Obtenir le Livre
          </button>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="w-full py-12 bg-stone-100 dark:bg-stone-950 mt-20 border-t border-stone-200/10">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-12 gap-8">
        <div className="font-headline italic text-stone-900 dark:text-stone-100 text-lg">IROTORI BAROKA</div>
        <div className="flex gap-8">
          {['Confidentialité', 'Conditions', 'Presse', 'Contact'].map((item) => (
            <a key={item} className="font-label text-[10px] uppercase tracking-widest text-stone-500 hover:text-on-tertiary-container transition-colors duration-300" href="#">{item}</a>
          ))}
        </div>
        <div className="font-label text-[10px] uppercase tracking-widest text-stone-400">
          © 2024 IROTORI BAROKA. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
