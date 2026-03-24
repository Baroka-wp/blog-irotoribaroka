import React from 'react';
import { Search, MoreVertical, Image as ImageIcon, Quote, Check, X } from 'lucide-react';
import { Publication, Testimonial, Stat } from '@/src/types';
import { cn } from '@/src/lib/utils';

const PUBLICATIONS: Publication[] = [
  {
    id: '1',
    title: 'Le système Clarifier-Planifier-Ajuster',
    type: 'Chapitre Essentiel',
    readTime: '10 min read',
    datePublished: '24 Mars 2024',
    views: '18,402',
    status: 'Publié',
    coverImage: 'https://picsum.photos/seed/clarify/400/600'
  },
  {
    id: '2',
    title: 'L\'Effet Levier des 5 Cercles',
    type: 'Guide Pratique',
    readTime: '15 min read',
    datePublished: '15 Mars 2024',
    views: '12,150',
    status: 'Publié',
    coverImage: 'https://picsum.photos/seed/leverage/400/600'
  },
  {
    id: '3',
    title: 'Excitation et Détachement',
    type: 'Philosophie d\'Action',
    readTime: '12 min read',
    datePublished: 'En cours',
    views: '0',
    status: 'En cours de rédaction',
    coverImage: ''
  }
];

const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'Jean Dupont',
    role: 'Entrepreneur',
    content: '"Le concept de sphère d\'influence a radicalement changé ma gestion du stress. Je me concentre enfin sur ce que je contrôle réellement."',
    avatar: 'https://picsum.photos/seed/jean/100/100'
  },
  {
    id: '2',
    author: 'Marie Leroy',
    role: 'Coach de vie',
    content: '"Une approche architecturale de l\'esprit. La méthode Clarifier-Planifier-Ajuster est devenue mon outil quotidien de progression."',
    avatar: 'https://picsum.photos/seed/marie/100/100'
  }
];

const STATS: Stat[] = [
  { label: 'Lecteurs Engagés', value: '45.2k', trend: '+15%' },
  { label: 'Livres Téléchargés', value: '8,420', trend: '+8.2%' },
  { label: 'Prochaine Échéance', value: '', isDeadline: true, deadlineTitle: 'Bilan Trimestriel', deadlineDays: '2 jours restants' }
];

export function Dashboard() {
  return (
    <div className="flex-1 h-screen overflow-y-auto bg-surface-container-low">
      <header className="sticky top-0 z-10 bg-surface/80 backdrop-blur-md px-12 py-8 flex justify-between items-end">
        <div>
          <h2 className="font-headline italic text-4xl text-primary tracking-tighter">Tableau de bord</h2>
          <p className="text-on-surface-variant font-label text-sm mt-1">Gouverner ses pensées pour maîtriser sa vie.</p>
        </div>
        <div className="flex gap-4">
          <div className="relative group">
            <input 
              type="text" 
              placeholder="Rechercher dans les chapitres..." 
              className="bg-transparent border-b border-outline-variant focus:border-primary focus:ring-0 transition-all px-2 py-1 text-sm font-body w-48 lg:w-64 placeholder:text-stone-400 outline-none"
            />
            <Search className="absolute right-2 top-1.5 text-stone-400" size={18} />
          </div>
          <button className="bg-tertiary-container text-on-tertiary-container px-6 py-2 rounded-md text-sm font-bold tracking-tight shadow-lg shadow-tertiary-container/10 hover:opacity-90 transition-all">
            Nouveau Chapitre
          </button>
        </div>
      </header>

      <div className="px-12 pb-20 space-y-14">
        {/* Stats Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STATS.map((stat, i) => (
            <div 
              key={i} 
              className={cn(
                "p-8 rounded-xl shadow-sm border border-outline-variant/10",
                stat.isDeadline ? "bg-primary-container text-on-primary" : "bg-surface-container-lowest"
              )}
            >
              <p className={cn("uppercase tracking-widest text-[10px] mb-2 font-label", stat.isDeadline ? "text-primary-fixed-dim" : "text-on-surface-variant")}>
                {stat.label}
              </p>
              {stat.isDeadline ? (
                <div className="flex flex-col">
                  <span className="font-headline italic text-2xl">{stat.deadlineTitle}</span>
                  <span className="text-primary-fixed-dim text-xs mt-1">{stat.deadlineDays}</span>
                </div>
              ) : (
                <div className="flex items-baseline gap-2">
                  <span className="font-headline text-3xl text-primary">{stat.value}</span>
                  <span className="text-on-tertiary-container text-xs font-bold">{stat.trend}</span>
                </div>
              )}
            </div>
          ))}
        </section>

        {/* Recent Publications */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-headline text-2xl text-primary">Publications Récentes</h3>
            <button className="text-primary font-bold text-[10px] uppercase tracking-widest border-b border-primary/20 hover:border-primary transition-all">
              Voir Toutes les Entrées
            </button>
          </div>
          <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-outline-variant/10">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container text-on-surface-variant border-b border-outline-variant/10">
                  <th className="px-8 py-4 font-label text-[10px] uppercase tracking-widest font-semibold">Titre</th>
                  <th className="px-8 py-4 font-label text-[10px] uppercase tracking-widest font-semibold">Date de Publication</th>
                  <th className="px-8 py-4 font-label text-[10px] uppercase tracking-widest font-semibold">Vues</th>
                  <th className="px-8 py-4 font-label text-[10px] uppercase tracking-widest font-semibold">Statut</th>
                  <th className="px-8 py-4 font-label text-[10px] uppercase tracking-widest font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10">
                {PUBLICATIONS.map((pub) => (
                  <tr key={pub.id} className="group hover:bg-surface-container-low transition-colors">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-16 bg-stone-100 rounded flex-shrink-0 overflow-hidden flex items-center justify-center">
                          {pub.coverImage ? (
                            <img src={pub.coverImage} alt={pub.title} className="w-full h-full object-cover" />
                          ) : (
                            <ImageIcon className="text-stone-300" size={20} />
                          )}
                        </div>
                        <div>
                          <p className="font-headline text-lg text-primary leading-tight">{pub.title}</p>
                          <p className="text-[10px] text-on-surface-variant font-label">{pub.type} • {pub.readTime}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6 font-body text-sm text-on-surface">{pub.datePublished}</td>
                    <td className="px-8 py-6 font-body text-sm text-on-surface">{pub.views}</td>
                    <td className="px-8 py-6">
                      <span className={cn(
                        "inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold",
                        pub.status === 'Publié' ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"
                      )}>
                        {pub.status}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <button className="text-stone-400 hover:text-primary transition-colors">
                        <MoreVertical size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Pending Testimonials */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-headline text-2xl text-primary">Avis en Attente</h3>
            <div className="flex items-center gap-2">
              <span className="bg-on-tertiary-container text-white px-2 py-0.5 text-[10px] font-bold rounded-full">4 Nouveaux</span>
              <button className="text-on-surface-variant font-bold text-[10px] uppercase tracking-widest hover:text-primary transition-all ml-2">Tout Approuver</button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/10 relative overflow-hidden flex flex-col justify-between">
                <div>
                  <Quote size={48} className="text-on-tertiary-container/10 absolute -right-2 -top-2 rotate-180" />
                  <p className="font-headline italic text-lg text-primary mb-6 leading-relaxed">
                    {t.content}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary-container overflow-hidden">
                      <img src={t.avatar} alt={t.author} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-primary">{t.author}</p>
                      <p className="text-[10px] text-on-surface-variant font-label">{t.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="w-10 h-10 flex items-center justify-center rounded-full bg-red-50 text-red-600 hover:bg-red-600 hover:text-white transition-all">
                      <X size={18} />
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-full bg-green-50 text-green-600 hover:bg-green-600 hover:text-white transition-all">
                      <Check size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
