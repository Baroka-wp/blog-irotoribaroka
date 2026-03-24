import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '@/src/types';

const WALL_TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'Helena St. James',
    role: 'Directrice Créative',
    content: 'Le cadre "Un Petit Livre pour les Grands Esprits" n\'a pas seulement changé ma routine ; il a redéfini toute ma relation avec l\'action. La profondeur des conseils est inégalée.',
    avatar: 'https://picsum.photos/seed/helena/200/200'
  },
  {
    id: '2',
    author: 'Julian Thorne',
    role: 'Journaliste Indépendant',
    content: 'La transition de l\'inquiétude vers la responsabilité a été immédiate. C\'est le nouveau standard de l\'excellence personnelle.',
    avatar: 'https://picsum.photos/seed/julian/200/200',
    rating: 5
  },
  {
    id: '3',
    author: 'Marcus Vane',
    role: 'Stratège Média',
    content: 'Rarement on trouve une ressource qui respecte autant l\'intelligence du lecteur. Un chef-d\'œuvre de clarté.',
    avatar: 'https://picsum.photos/seed/marcus/200/200'
  },
  {
    id: '4',
    author: 'Elara Vance',
    role: 'Fondatrice, The Daily Digest',
    content: 'Je suis passée de la confusion à une vision claire à 10 ans en un mois. Le ROI sur ce livre a été réalisé dès la première semaine.',
    avatar: 'https://picsum.photos/seed/elara/200/200'
  }
];

export function WallOfLove() {
  return (
    <div className="bg-surface min-h-screen pt-32 pb-20">
      <section className="max-w-7xl mx-auto px-8 mb-20 text-center">
        <h1 className="text-6xl md:text-8xl font-medium tracking-tight font-headline text-primary mb-6">Témoignages : Mur d'Amour</h1>
        <p className="max-w-2xl mx-auto text-lg text-on-surface-variant font-body leading-relaxed">
          Réflexions de notre communauté de penseurs et d'esprits ambitieux qui ont transformé leur quotidien grâce à nos principes d'excellence.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-8 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Featured */}
          <div className="md:col-span-8 bg-surface-container-lowest p-12 rounded-xl border border-outline-variant/15 flex flex-col justify-between shadow-sm">
            <div>
              <Quote size={40} className="text-primary-container/20 mb-6 fill-current" />
              <p className="text-3xl font-headline italic leading-snug text-primary mb-8">
                "{WALL_TESTIMONIALS[0].content}"
              </p>
            </div>
            <div className="flex items-center gap-4 border-t border-outline-variant/10 pt-8">
              <img src={WALL_TESTIMONIALS[0].avatar} alt="" className="w-14 h-14 rounded-full object-cover" />
              <div>
                <p className="font-bold font-body text-primary">{WALL_TESTIMONIALS[0].author}</p>
                <p className="text-sm text-on-surface-variant font-label">{WALL_TESTIMONIALS[0].role}</p>
              </div>
            </div>
          </div>

          {/* Star Rated */}
          <div className="md:col-span-4 bg-primary-container p-8 rounded-xl flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-on-tertiary-container fill-current" />
                ))}
              </div>
              <p className="text-lg font-headline text-on-primary italic leading-relaxed mb-6">
                "{WALL_TESTIMONIALS[1].content}"
              </p>
            </div>
            <div className="flex items-center gap-3">
              <img src={WALL_TESTIMONIALS[1].avatar} alt="" className="w-10 h-10 rounded-full object-cover" />
              <div>
                <p className="text-sm font-semibold font-body text-white">{WALL_TESTIMONIALS[1].author}</p>
                <p className="text-xs text-primary-fixed-dim font-label">{WALL_TESTIMONIALS[1].role}</p>
              </div>
            </div>
          </div>

          {/* Simple */}
          <div className="md:col-span-4 bg-surface-container-high p-8 rounded-xl border border-outline-variant/15 flex flex-col justify-between shadow-sm">
            <p className="text-md font-body text-on-surface leading-relaxed mb-6">
              "{WALL_TESTIMONIALS[2].content}"
            </p>
            <div className="flex items-center gap-3">
              <img src={WALL_TESTIMONIALS[2].avatar} alt="" className="w-10 h-10 rounded-full object-cover" />
              <div>
                <p className="text-sm font-semibold font-body text-primary">{WALL_TESTIMONIALS[2].author}</p>
                <p className="text-xs text-on-surface-variant font-label">{WALL_TESTIMONIALS[2].role}</p>
              </div>
            </div>
          </div>

          {/* Image + Text */}
          <div className="md:col-span-8 bg-surface-container-lowest p-10 rounded-xl border border-outline-variant/15 flex flex-col md:flex-row gap-8 items-center shadow-sm">
            <img src={WALL_TESTIMONIALS[3].avatar} alt="" className="w-32 h-32 md:w-40 md:h-40 rounded-xl object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            <div>
              <p className="text-xl font-headline italic leading-relaxed text-on-surface mb-4">
                "{WALL_TESTIMONIALS[3].content}"
              </p>
              <p className="font-bold font-body text-primary">{WALL_TESTIMONIALS[3].author}</p>
              <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-label">{WALL_TESTIMONIALS[3].role}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="max-w-4xl mx-auto px-8 mb-32">
        <div className="bg-surface-container-low p-12 md:p-20 rounded-2xl relative overflow-hidden shadow-sm">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-fixed-dim opacity-10 rounded-full blur-3xl"></div>
          <div className="relative z-10 text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-medium font-headline text-primary mb-4">Partagez Votre Parcours</h2>
            <p className="text-on-surface-variant font-body max-w-lg mx-auto">Votre expérience nous aide à évoluer et inspire d'autres esprits à trouver leur propre voie vers l'excellence.</p>
          </div>
          <form className="space-y-10 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="group">
                <label className="block font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-2 group-focus-within:text-primary transition-colors">Nom Complet</label>
                <input type="text" placeholder="ex. Eleanor Rigby" className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 focus:ring-0 focus:border-primary transition-all font-body placeholder:text-stone-300" />
              </div>
              <div className="group">
                <label className="block font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-2 group-focus-within:text-primary transition-colors">Adresse E-mail</label>
                <input type="email" placeholder="eleanor@monograph.com" className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 focus:ring-0 focus:border-primary transition-all font-body placeholder:text-stone-300" />
              </div>
            </div>
            <div className="group">
              <label className="block font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-4 group-focus-within:text-primary transition-colors">Votre Note d'Expérience</label>
              <div className="flex gap-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={24} className="text-stone-300 hover:text-on-tertiary-container transition-colors cursor-pointer" />
                ))}
              </div>
            </div>
            <div className="group">
              <label className="block font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-2 group-focus-within:text-primary transition-colors">Votre Message</label>
              <textarea placeholder="Comment ce livre a-t-il changé votre quotidien ?" rows={4} className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 focus:ring-0 focus:border-primary transition-all font-body placeholder:text-stone-300 resize-none"></textarea>
            </div>
            <div className="flex justify-center pt-6">
              <button className="bg-tertiary-container text-on-tertiary-container px-12 py-4 rounded-md font-bold font-label text-[10px] tracking-widest uppercase hover:scale-105 transition-all duration-300 shadow-xl shadow-tertiary-container/10">
                Soumettre un Avis
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
