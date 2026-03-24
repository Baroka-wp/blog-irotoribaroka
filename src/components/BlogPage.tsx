import React from 'react';
import { Search, ArrowRight, MoveRight } from 'lucide-react';

export function BlogPage({ setView }: { setView: (view: 'dashboard' | 'testimonials' | 'ebook' | 'blog') => void }) {
  return (
    <div className="bg-surface-container-low font-body text-on-surface min-h-screen pt-32 pb-20">
      <main className="max-w-7xl mx-auto px-8">
        {/* Hero Branding Section */}
        <div className="mb-20">
          <span className="font-label text-sm uppercase tracking-widest text-on-surface-variant mb-4 block">Journal Sélectionné</span>
          <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-tight text-primary leading-none max-w-4xl">
            Essais sur la <span className="italic font-normal">Stratégie Moderne</span> & la Maîtrise de Soi.
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-20">
          {/* Main Content: Blog List */}
          <div className="space-y-24">
            {/* Category Filter */}
            <div className="flex gap-6 overflow-x-auto pb-4 no-scrollbar border-b border-outline-variant/15">
              <button className="text-primary font-bold whitespace-nowrap">Toutes les Perspectives</button>
              <button className="text-on-surface-variant hover:text-primary transition-colors whitespace-nowrap">Philosophie</button>
              <button className="text-on-surface-variant hover:text-primary transition-colors whitespace-nowrap">Excellence</button>
              <button className="text-on-surface-variant hover:text-primary transition-colors whitespace-nowrap">Action</button>
              <button className="text-on-surface-variant hover:text-primary transition-colors whitespace-nowrap">Maîtrise de Soi</button>
            </div>

            {/* Article 1 */}
            <article className="group cursor-pointer">
              <div className="flex flex-col md:flex-row gap-10 items-start">
                <div className="w-full md:w-1/2 overflow-hidden bg-surface-container rounded-sm">
                  <img 
                    className="w-full aspect-[4/3] object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                    alt="Espace de travail minimaliste" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoBsTQxbn8SA1fWv-0664IOorSR8y2j6xLkFAKVDUX6f6-_AAH5tJtYBybvytkQyRb0hg0gosQdL0NgV3opufAjmEnnEuS7Nq1FCbLElYd_M22806uQ7UH2-OVMqzBwXTHeaxwHDnp_1PLyNgRJHTqtHDOBJtTvDJBCeq6azz0lYKhkoyjaI_nBzDC3nR8QnLlNwv1jRUIE81Z4Cn5qRlnjOPuF9UMMoCHgVoQaniVRJxGgqMkNBCDpqnUu9RWBnByImpj__t4jkE"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="w-full md:w-1/2 space-y-4">
                  <div className="flex items-center gap-4 text-xs font-label text-on-surface-variant uppercase tracking-widest">
                    <span>Maîtrise de Soi</span>
                    <span className="w-1 h-1 bg-outline-variant rounded-full"></span>
                    <span>8 Min de Lecture</span>
                  </div>
                  <h2 className="font-headline text-4xl font-bold text-on-surface group-hover:text-on-tertiary-container transition-colors">L'Art de Dire Non : Pourquoi Moins de Contenu est le Luxe Ultime.</h2>
                  <p className="font-body text-lg text-on-surface-variant leading-relaxed opacity-80">
                    Dans une ère de défilement infini, la chose la plus précieuse qu'un esprit puisse faire est de filtrer. Nous explorons pourquoi la sélection devient la nouvelle création.
                  </p>
                  <a className="inline-flex items-center gap-2 font-label text-sm font-bold text-primary group-hover:gap-4 transition-all" href="#">
                    Lire l'Essai <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </article>

            {/* Article 2 */}
            <article className="group cursor-pointer">
              <div className="flex flex-col md:flex-row-reverse gap-10 items-start">
                <div className="w-full md:w-1/2 overflow-hidden bg-surface-container rounded-sm">
                  <img 
                    className="w-full aspect-[4/3] object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                    alt="Détail architectural" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRa7KfF8X3-XoM1Yg775J_JyIFBzJVbumL6XfvUeHnPh2D72uinDcdJwzdwn_rY8bGA60poos0ohKKbWnw8MomoVQHVMax7hTNe05DZ14aD6pR79ekNPxKJ-sklKNRIMfR7zfuT_SGmzkVUFrbUq1297OqXFwGxxsztu5zmhWoaaRmN5_hmfscAylPUk6agZhUr8PNH-M_JI1ZgMwKzKihpnaG0BjlGyG17w1ngk6aiB8j-ryBpjsub2hmeZFrJzehs-brJJUaZJA"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="w-full md:w-1/2 space-y-4">
                  <div className="flex items-center gap-4 text-xs font-label text-on-surface-variant uppercase tracking-widest">
                    <span>Philosophie</span>
                    <span className="w-1 h-1 bg-outline-variant rounded-full"></span>
                    <span>12 Min de Lecture</span>
                  </div>
                  <h2 className="font-headline text-4xl font-bold text-on-surface group-hover:text-on-tertiary-container transition-colors">Architecture de l'Esprit : Construire des Pensées Solides.</h2>
                  <p className="font-body text-lg text-on-surface-variant leading-relaxed opacity-80">
                    Dépasser la pensée superficielle nécessite une compréhension profonde de la structure et de la hiérarchie mentale. Comment créer de la profondeur sans encombrement.
                  </p>
                  <a className="inline-flex items-center gap-2 font-label text-sm font-bold text-primary group-hover:gap-4 transition-all" href="#">
                    Lire l'Essai <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </article>

            {/* Article 3 */}
            <article className="group cursor-pointer">
              <div className="flex flex-col md:flex-row gap-10 items-start">
                <div className="w-full md:w-1/2 overflow-hidden bg-surface-container rounded-sm">
                  <img 
                    className="w-full aspect-[4/3] object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                    alt="Livres et stylo plume" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjAY8afOPAHdmn5mLUyXw1W-EFCNNq-s6s7Q2eZ2r8tpQ2IjkGFKdfxPOVvNe6cyjq_2gZG9n-Pkn0wdmUglWxT1x9w9sLzd2MRdDg_8dHOQ8E50Y0ku829yHQq683l9u44Gh35kMV2wgMRlFLsYxqJD8INL92KF7rI-a4LfYyYKhnn7eunzCSnwn8rsO7IHBLfvG1eoz349We7Anx_7npzQqjTtzuVmir8TyklEdhPqbqXUeY0fBs7yzsYdbfp7iXx_tPAasNC24"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="w-full md:w-1/2 space-y-4">
                  <div className="flex items-center gap-4 text-xs font-label text-on-surface-variant uppercase tracking-widest">
                    <span>Action</span>
                    <span className="w-1 h-1 bg-outline-variant rounded-full"></span>
                    <span>15 Min de Lecture</span>
                  </div>
                  <h2 className="font-headline text-4xl font-bold text-on-surface group-hover:text-on-tertiary-container transition-colors">Le Mythe de la Fatigue : Pourquoi l'Excellence est Énergisante.</h2>
                  <p className="font-body text-lg text-on-surface-variant leading-relaxed opacity-80">
                    Les gens ne sont pas fatigués d'agir ; ils sont fatigués d'agir sans but. La feuille de route pour construire une vie qui ressemble à un cercle exclusif.
                  </p>
                  <a className="inline-flex items-center gap-2 font-label text-sm font-bold text-primary group-hover:gap-4 transition-all" href="#">
                    Lire l'Essai <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <aside className="space-y-16">
            {/* Ebook Promotion Widget */}
            <div className="bg-[#0d2b45] p-8 rounded-lg relative overflow-hidden group">
              <div className="relative z-10">
                <h3 className="font-headline text-3xl text-white font-bold mb-4">Maîtrisez l'Esprit Numérique</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  Notre guide de 140 pages sur la construction de plateformes numériques faisant autorité et commandant une attention premium.
                </p>
                <button 
                  onClick={() => setView('ebook')}
                  className="w-full bg-[#2f0800] text-white py-4 rounded-md font-bold text-sm tracking-widest uppercase hover:bg-opacity-90 transition-all"
                >
                  Obtenir Votre Copie
                </button>
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#f95e27]/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
            </div>

            {/* Popular Posts */}
            <div>
              <h4 className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-8 border-b border-outline-variant/15 pb-2">Les Plus Lus Cette Semaine</h4>
              <div className="space-y-8">
                <a className="block group" href="#">
                  <span className="font-headline text-2xl font-bold text-on-surface group-hover:text-on-tertiary-container block mb-2 transition-colors">01. La Typographie du Pouvoir</span>
                  <span className="font-label text-xs text-on-surface-variant">Excellence • 24 Mai</span>
                </a>
                <a className="block group" href="#">
                  <span className="font-headline text-2xl font-bold text-on-surface group-hover:text-on-tertiary-container block mb-2 transition-colors">02. Monétisation Minimaliste</span>
                  <span className="font-label text-xs text-on-surface-variant">Action • 18 Mai</span>
                </a>
                <a className="block group" href="#">
                  <span className="font-headline text-2xl font-bold text-on-surface group-hover:text-on-tertiary-container block mb-2 transition-colors">03. Concevoir pour le Web Lent</span>
                  <span className="font-label text-xs text-on-surface-variant">Philosophie • 12 Mai</span>
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div className="pt-8">
              <h4 className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-4">La Dépêche Hebdomadaire</h4>
              <p className="text-sm text-on-surface-variant mb-6 leading-relaxed italic font-headline">Rejoignez plus de 12 000 curateurs recevant nos pensées dominicales.</p>
              <div className="space-y-4">
                <input 
                  className="w-full bg-transparent border-b border-outline-variant py-3 focus:border-primary focus:ring-0 outline-none text-sm font-body transition-all" 
                  placeholder="Votre adresse e-mail" 
                  type="email"
                />
                <button className="text-primary font-bold text-sm border-b-2 border-primary pb-1 hover:text-on-tertiary-container hover:border-on-tertiary-container transition-all">S'abonner</button>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Signature Ebook Feature Component (Mid-page Break) */}
      <section className="w-full bg-[#00162a] py-24 my-20">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="max-w-xl text-white">
            <span className="font-label text-xs uppercase tracking-[0.3em] text-white mb-6 block">Publication Premium</span>
            <h2 className="font-headline text-5xl md:text-7xl font-bold mb-8 leading-tight">Le Manifeste des Grands Esprits.</h2>
            <p className="font-body text-lg text-white mb-10 leading-relaxed">
              Une étude complète sur la raison pour laquelle les audiences numériques modernes fuient les plateformes génériques et comment positionner votre esprit comme l'autorité ultime.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => setView('ebook')}
                className="bg-[#2f0800] text-white px-8 py-4 rounded-md font-bold transition-transform hover:scale-105"
              >
                Télécharger le Livre
              </button>
              <button className="bg-[#0d2b45] text-white px-8 py-4 rounded-md font-bold border border-white/10 hover:bg-white/5 transition-colors">
                Lire un Extrait
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="w-64 md:w-80 aspect-[3/4] bg-stone-100 shadow-2xl rounded-sm transform rotate-3 hover:rotate-0 transition-transform duration-500 overflow-hidden border-8 border-white flex flex-col justify-between p-8">
              <span className="font-headline text-[#00162a] text-[10px] tracking-widest uppercase">IROTORI BAROKA</span>
              <span className="font-headline text-[#00162a] text-3xl font-medium leading-tight">Un Petit Livre<br/>pour les Grands Esprits</span>
              <div className="w-12 h-0.5 bg-[#00162a] mb-4"></div>
              <div 
                className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
                style={{ 
                  backgroundImage: "url('https://picsum.photos/seed/mind/800/1200')", 
                  backgroundSize: 'cover',
                  mixBlendMode: 'multiply'
                }}
              />
            </div>
            {/* Accent blob */}
            <div className="absolute -top-10 -left-10 w-24 h-24 bg-[#f95e27] rounded-full flex items-center justify-center text-white font-bold transform -rotate-12 shadow-lg z-20">NOUVEAU</div>
          </div>
        </div>
      </section>
    </div>
  );
}
