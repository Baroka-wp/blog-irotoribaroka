/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { WallOfLove } from './components/WallOfLove';
import { Navigation, Footer } from './components/Layout';
import { EbookCTA } from './components/EbookCTA';
import { EbookPage } from './components/EbookPage';
import { BlogPage } from './components/BlogPage';

type View = 'dashboard' | 'testimonials' | 'ebook' | 'blog';

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [view, setView] = useState<View>('dashboard');

  if (view === 'dashboard') {
    return (
      <div className="flex h-screen overflow-hidden bg-background">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="flex-1 relative overflow-hidden flex flex-col">
          <div className="absolute top-4 right-4 z-50 flex gap-2">
            <button 
              onClick={() => setView('testimonials')}
              className="bg-white/50 backdrop-blur px-3 py-1 rounded text-[10px] font-label uppercase tracking-widest border border-outline-variant/20 hover:bg-white transition-all"
            >
              Témoignages
            </button>
            <button 
              onClick={() => setView('blog')}
              className="bg-white/50 backdrop-blur px-3 py-1 rounded text-[10px] font-label uppercase tracking-widest border border-outline-variant/20 hover:bg-white transition-all"
            >
              Blog
            </button>
            <button 
              onClick={() => setView('ebook')}
              className="bg-white/50 backdrop-blur px-3 py-1 rounded text-[10px] font-label uppercase tracking-widest border border-outline-variant/20 hover:bg-white transition-all"
            >
              Page Livre
            </button>
          </div>
          <Dashboard />
        </main>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Navigation setView={setView} />
      <div className="fixed top-20 right-4 z-50 flex gap-2">
        <button 
          onClick={() => setView('dashboard')}
          className="bg-white/50 backdrop-blur px-3 py-1 rounded text-[10px] font-label uppercase tracking-widest border border-outline-variant/20 hover:bg-white transition-all"
        >
          Tableau de bord
        </button>
        <button 
          onClick={() => setView('blog')}
          className="bg-white/50 backdrop-blur px-3 py-1 rounded text-[10px] font-label uppercase tracking-widest border border-outline-variant/20 hover:bg-white transition-all"
        >
          Blog
        </button>
        {view === 'testimonials' ? (
          <button 
            onClick={() => setView('ebook')}
            className="bg-white/50 backdrop-blur px-3 py-1 rounded text-[10px] font-label uppercase tracking-widest border border-outline-variant/20 hover:bg-white transition-all"
          >
            Page Livre
          </button>
        ) : (
          <button 
            onClick={() => setView('testimonials')}
            className="bg-white/50 backdrop-blur px-3 py-1 rounded text-[10px] font-label uppercase tracking-widest border border-outline-variant/20 hover:bg-white transition-all"
          >
            Témoignages
          </button>
        )}
      </div>
      <main className="flex-1">
        {view === 'blog' ? (
          <BlogPage setView={setView} />
        ) : view === 'testimonials' ? (
          <>
            <WallOfLove />
            <EbookCTA />
          </>
        ) : (
          <EbookPage />
        )}
      </main>
      <Footer />
    </div>
  );
}
