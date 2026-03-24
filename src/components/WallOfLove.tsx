import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '@/src/types';

const WALL_TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'Kofi Mensah',
    role: 'Entrepreneur, Accra',
    content: 'Le concept de sphère d\'influence a changé ma gestion du stress. Je ne m\'inquiète plus de ce qui ne dépend pas de moi. Je me concentre sur ce que je contrôle, et j\'agis.',
    avatar: 'https://picsum.photos/seed/kofi/200/200'
  },
  {
    id: '2',
    author: 'Fatou Diallo',
    role: 'Manager, Dakar',
    content: 'La méthode Clarifier-Planifier-Ajuster est devenue mon outil quotidien. En un mois, j\'ai un objectif clair pour chacun des cinq cercles de ma vie. Je n\'avais jamais eu autant de clarté.',
    avatar: 'https://picsum.photos/seed/fatou/200/200',
    rating: 5
  },
  {
    id: '3',
    author: 'Thierry Nkurunziza',
    role: 'Ingénieur, Abidjan',
    content: 'Ce livre respecte l\'intelligence du lecteur. Pas de promesses vides. Un système concret, applicable dès la première lecture, stylo en main.',
    avatar: 'https://picsum.photos/seed/thierry/200/200'
  },
  {
    id: '4',
    author: 'Aïcha Traoré',
    role: 'Enseignante, Bamako',
    content: 'Je suis passée de la confusion à une vision claire sur 10 ans en moins d\'une semaine. Le chapitre sur l\'ambition m\'a forcée à me poser les vraies questions. Enfin.',
    avatar: 'https://picsum.photos/seed/aicha/200/200'
  }
];

export function WallOfLove() {
  return (
    <div className="bg-surface min-h-screen pt-32 pb-20">
      <section className="max-w-7xl mx-auto px-8 mb-20 text-center">
        <h1 className="text-6xl md:text-8xl font-medium tracking-tight font-headline text-primary mb-6">Témoignages : Mur d'Amour</h1>
        <p className="max-w-2xl mx-auto text-lg text-on-surface-variant font-body leading-relaxed">
          Des grands esprits qui ont choisi la clarté, l'action et la constance. Voici ce qu'ils en disent.
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
            <p className="text-on-surface-variant font-body max-w-lg mx-auto">Comment ce livre a-t-il changé votre quotidien ? Votre témoignage peut inspirer d'autres grands esprits à passer à l'action.</p>
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
