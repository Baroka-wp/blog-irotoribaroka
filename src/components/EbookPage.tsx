import React from 'react';
import { Sparkles, Layers, PenTool, MoveRight } from 'lucide-react';

export function EbookPage() {
  return (
    <div className="bg-[#fcf9f8] text-[#1b1b1c] font-body selection:bg-[#c8e4f0] selection:text-[#4d6670]">
      <main className="pt-24">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-8 py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <span className="inline-block px-4 py-1.5 bg-[#c8e4f0] text-[#4d6670] text-xs font-label uppercase tracking-widest rounded-full">Nouvelle Édition 2024</span>
            <h1 className="text-6xl lg:text-8xl font-headline italic leading-[1.1] tracking-tighter text-[#00162a]">
              L'Art de la <br/><span className="not-italic text-[#2e4964]">Pensée Moderne.</span>
            </h1>
            <p className="text-xl lg:text-2xl font-body text-[#44474c] max-w-xl leading-relaxed">
              Un guide complet pour élever votre pensée, de simple contenu à une monographie soignée. Maîtrisez l'autorité éditoriale.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <div className="flex-grow max-w-md">
                <label className="sr-only" htmlFor="email-hero">Adresse E-mail</label>
                <input 
                  className="w-full bg-transparent border-0 border-b border-[#c4c6cd] focus:ring-0 focus:border-[#00162a] px-0 py-3 text-lg font-body placeholder:text-[#74777d]" 
                  id="email-hero" 
                  placeholder="votre@email.com" 
                  type="email"
                />
              </div>
              <button className="bg-[#2f0800] text-white px-10 py-4 rounded-md font-body font-bold hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                Télécharger le Livre
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-4 bg-[#0d2b45]/5 rounded-3xl -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
            <div className="relative bg-white shadow-2xl rounded-lg overflow-hidden border border-[#c4c6cd]/10 transform lg:rotate-3 group-hover:rotate-0 transition-all duration-500">
              {/* CSS Mockup of the book cover */}
              <div className="w-full aspect-[3/4] bg-stone-100 flex flex-col justify-between p-12 relative overflow-hidden">
                <div className="relative z-10">
                  <span className="font-headline text-[#00162a] text-[12px] tracking-[0.3em] uppercase block mb-4">IROTORI BAROKA</span>
                  <h2 className="font-headline text-[#00162a] text-4xl md:text-5xl font-medium leading-tight">Un Petit Livre<br/>pour les Grands Esprits</h2>
                </div>
                <div className="relative z-10">
                  <div className="w-16 h-1 bg-[#00162a] mb-6"></div>
                  <p className="font-headline italic text-[#00162a]/60 text-lg">La Monographie de l'Excellence</p>
                </div>
                <div 
                  className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
                  style={{ 
                    backgroundImage: "url('https://picsum.photos/seed/mind/800/1200')", 
                    backgroundSize: 'cover',
                    mixBlendMode: 'multiply'
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why This Book? (Asymmetric Layout) */}
        <section className="bg-[#f6f3f2] py-32">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-12">
                <h2 className="text-4xl lg:text-5xl font-headline text-[#00162a]">Pourquoi lire ce petit livre ?</h2>
                <div className="space-y-10">
                  <div className="flex gap-6">
                    <Sparkles className="text-4xl text-[#f95e27] shrink-0" size={40} />
                    <div>
                      <h3 className="text-xl font-headline font-bold text-[#00162a] mb-2">Autorité Éditoriale</h3>
                      <p className="font-body text-[#44474c] leading-relaxed">Allez au-delà du simple blogging. Apprenez à structurer vos idées avec le sérieux d'un éditeur traditionnel.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <Layers className="text-4xl text-[#f95e27] shrink-0" size={40} />
                    <div>
                      <h3 className="text-xl font-headline font-bold text-[#00162a] mb-2">Mises en page Architecturales</h3>
                      <p className="font-body text-[#44474c] leading-relaxed">Comprendre le rythme visuel et la psychologie de l'espace vide dans les expériences de lecture numérique haut de gamme.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <PenTool className="text-4xl text-[#f95e27] shrink-0" size={40} />
                    <div>
                      <h3 className="text-xl font-headline font-bold text-[#00162a] mb-2">La Curation avant le Contenu</h3>
                      <p className="font-body text-[#44474c] leading-relaxed">Arrêtez de produire du bruit. Maîtrisez l'art du récit sélectif qui instaure une confiance durable avec votre audience.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-xl">
                <img 
                  className="w-full h-full object-cover" 
                  alt="Espace de travail minimaliste" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWizqMkKiXSQXlk0lShkMpbz961VMqoTHeO5EPrS340vD_MCrbUSiZMIrNpFjv9PjZ3fkMFOxpXAAKCmb6JEUiJ5DSqSNJ5X0QAyjbIf0z96olTH-vJqyikXsw_cNczEop3ZNXHz0psp8ObFUIU7WuH5Wsz--viXv5Jwz13HZ2lKpzdrWUxCL320k82w98_JUWjwMvfEVIoIm9dtOdZT1ZnwS7SUsp3TGAe_VgWZCMhbVeGM_i6Y-lf8F6OFewVsaKWrBYf8A0XHo"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-[#00162a]/20 mix-blend-multiply"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Signature Ebook Feature Component */}
        <section className="max-w-7xl mx-auto px-8 py-32">
          <div className="bg-[#0d2b45] rounded-3xl px-12 py-20 relative overflow-visible flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-2/3 space-y-6">
              <h2 className="text-4xl lg:text-6xl font-headline text-white font-light">La Masterclass du <br/><span className="italic font-bold">Petit Livre Moderne.</span></h2>
              <p className="text-[#7993b2] text-lg lg:text-xl font-body max-w-xl">
                Inclut 15 modèles personnalisés, une immersion de 200 pages dans la stratégie éditoriale, et l'accès à notre communauté privée de curateurs.
              </p>
              <button className="mt-4 bg-[#2f0800] text-white px-12 py-4 rounded-md font-body font-bold hover:scale-105 transition-transform">
                Télécharger pour 49€
              </button>
            </div>
            <div className="lg:w-1/3 lg:absolute lg:-right-12 lg:-bottom-12 transform lg:rotate-12 w-64 lg:w-96">
              {/* 3D Mockup replacement with CSS */}
              <div className="w-full aspect-[3/4] bg-stone-100 shadow-2xl rounded-sm flex flex-col justify-between p-10 relative overflow-hidden border-4 border-white">
                <div className="relative z-10">
                  <span className="font-headline text-[#00162a] text-[10px] tracking-[0.3em] uppercase block mb-2">IROTORI BAROKA</span>
                  <h3 className="font-headline text-[#00162a] text-2xl font-medium leading-tight">Un Petit Livre<br/>pour les Grands Esprits</h3>
                </div>
                <div className="relative z-10">
                  <div className="w-10 h-0.5 bg-[#00162a] mb-4"></div>
                </div>
                <div 
                  className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
                  style={{ 
                    backgroundImage: "url('https://picsum.photos/seed/mind/800/1200')", 
                    backgroundSize: 'cover',
                    mixBlendMode: 'multiply'
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Inside the chapters (Bento-style Grid) */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-8">
            <h2 className="text-4xl lg:text-5xl font-headline text-center mb-20 text-[#00162a]">Au cœur des chapitres</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto lg:h-[700px]">
              {/* Large Feature */}
              <div className="md:col-span-2 md:row-span-2 bg-white p-12 flex flex-col justify-end space-y-4 rounded-xl border border-[#c4c6cd]/10 shadow-sm">
                <span className="text-[#48626c] font-label text-sm uppercase tracking-widest">Partie 01</span>
                <h3 className="text-3xl font-headline text-[#00162a]">Fondations de l'Intention</h3>
                <p className="font-body text-[#44474c] leading-relaxed">Établir le cadre psychologique nécessaire pour écrire pour une audience qui valorise la profondeur plutôt que la vitesse.</p>
                <img 
                  className="mt-8 rounded-lg h-48 object-cover" 
                  alt="Sculpture géométrique minimaliste" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuaQB-Dthbb58VrX_C_vxjEd1R0bH0NVilfHfyGTgCcQzdDwqeozevj-dfajJ05dqxMivZrsuo60_rLi-jill-qFpq6xXH0nSQPUhHTfhDbvouOzl2fGS1yqy-mZlUnkEUly_rCvxdVf4ZkhN-pEyCalKpmd7Mt2A7KrGfEJax_LU30NmuUIRj5d3S7Wi3T1BTKu0QuBjDNp2YulsUXlcqk0ukj0VVZUIAdBi6OTsi0rN4D09-jpMmBe2ZFF9c84rZTSLGKMgGIZQ"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Small Features */}
              <div className="md:col-span-2 bg-[#c8e4f0] p-10 rounded-xl flex flex-col justify-center">
                <span className="text-[#4d6670] font-label text-xs uppercase tracking-widest mb-2">Partie 02</span>
                <h3 className="text-2xl font-headline text-[#021f27]">Hiérarchie Visuelle</h3>
                <p className="font-body text-[#4d6670] mt-2">Maîtriser la typographie et l'espacement pour guider le lecteur à travers des récits complexes sans effort.</p>
              </div>
              <div className="bg-[#ffdbd0] p-8 rounded-xl flex flex-col justify-between">
                <span className="text-[#390b00] font-label text-xs uppercase tracking-widest">Partie 03</span>
                <h3 className="text-xl font-headline text-[#390b00]">L'Édition du Curateur</h3>
              </div>
              <div className="bg-[#d0e4ff] p-8 rounded-xl flex flex-col justify-between">
                <span className="text-[#001d35] font-label text-xs uppercase tracking-widest">Partie 04</span>
                <h3 className="text-xl font-headline text-[#001d35]">Monétiser la Confiance</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Monographs (Blog Posts) */}
        <section className="max-w-7xl mx-auto px-8 py-32 border-t border-[#c4c6cd]/20">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl font-headline text-[#00162a]">Monographies Récentes</h2>
            <a className="text-[#48626c] font-label font-bold uppercase tracking-widest hover:text-[#00162a] transition-colors flex items-center gap-2" href="#">
              Tous les Articles <MoveRight size={20} />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {/* Article 1 */}
            <article className="group cursor-pointer">
              <div className="aspect-video overflow-hidden rounded-lg mb-6">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  alt="Détail d'une presse d'imprimerie" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhlAPhR5b99t5A6EblWemgYpq-iWfacd_iEieEsuUiBN58iMxNg25oROopgTX0V3ZoTHQ05Stm8bQ5cp2V7y4lBl1tHyzmXQJq36dqGXWWqhsHDv-CV6ZpkHWFsk-LeZjSVJqPpdfEuZaqLoY_JnHeRKoBEP6zgBVEX9UESzj4bdDK9ZHf34iLnlT0NphzDhjrVbBaNYH6bUfO4WBMht9eQT_30kseup2_yFSlWhWjsNMqLwwOy2LNY1dcyo0N3RW-nCZ4EWc1gnA"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-4">
                <time className="text-xs font-label text-[#44474c] uppercase tracking-widest">12 Octobre 2024 — 8 Min de Lecture</time>
                <h3 className="text-2xl font-headline text-[#00162a] group-hover:text-[#2f0800] transition-colors">Le Silence entre les Mots : Une Étude sur l'Espacement</h3>
                <p className="font-body text-[#44474c] line-clamp-2">Pourquoi l'espace blanc est l'élément le plus critique des publications numériques à haute conversion.</p>
              </div>
            </article>
            {/* Article 2 */}
            <article className="group cursor-pointer">
              <div className="aspect-video overflow-hidden rounded-lg mb-6">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  alt="Architecture minimaliste" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvh8bdFuhS-jt3GVIQG6aq7zQzHvpXHCGxKYr_xkMpz33MBRaE93DNVsHH2iSkDQ8DYcP7bPpxplC75H4oEbKQbPJXxAq1w8p1VQp6Kzx6L8eQ8jIzE4KMEWD4Npehh8yC4EFYt8kDt6li0CYfmjJhjqMHZSBOxVV-hjCMUGqpxe_HwO8SxOOZODnjPVzWmHRsQZN8TCBcd7V3rnbS-7ouwEoTtaHcolJWFdn39jG-aGn7-xfAXRUnK-iXgqm_mYLLdReRjfrsyFo"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-4">
                <time className="text-xs font-label text-[#44474c] uppercase tracking-widest">05 Octobre 2024 — 12 Min de Lecture</time>
                <h3 className="text-2xl font-headline text-[#00162a] group-hover:text-[#2f0800] transition-colors">Intégrité Structurelle dans le Récit Numérique</h3>
                <p className="font-body text-[#44474c] line-clamp-2">Comment architecturer vos articles de blog comme une publication de luxe pour un impact maximum.</p>
              </div>
            </article>
            {/* Article 3 */}
            <article className="group cursor-pointer">
              <div className="aspect-video overflow-hidden rounded-lg mb-6">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  alt="Lunettes élégantes sur des magazines" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5Cvb1Td59PrEMoPIdMcwrWXx3lqWbBI70eRXJxqScJd09NEiJ4lnP_Sf78U_MJU6neRCp4Xz_cvv3e3jX7Q5lh4MYUXJqx_Pxm479FvRE-4JHojOHX0hRQqFvhf0U8VXLguShWWpmuVobQ8nHwBqtOQqpSdiC2eyoc8siE_jsRMmgdum3YFIJ5Bsezv8-LL6gqMXauABz27_PR65-TM3Yrv77qEf_F4jY4MSIO2FzCWcAQMX1TnzphAuHsdzNGQDHpdyz_FXQQCw"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-4">
                <time className="text-xs font-label text-[#44474c] uppercase tracking-widest">28 Septembre 2024 — 6 Min de Lecture</time>
                <h3 className="text-2xl font-headline text-[#00162a] group-hover:text-[#2f0800] transition-colors">Le Dilemme du Curateur : Ce qu'il faut laisser de côté</h3>
                <p className="font-body text-[#44474c] line-clamp-2">La philosophie de la soustraction et pourquoi moins est toujours plus dans la curation professionnelle.</p>
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}
