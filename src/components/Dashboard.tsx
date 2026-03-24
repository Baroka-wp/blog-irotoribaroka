import React, { useEffect, useState, useCallback } from 'react';
import { Search, MoreVertical, Image as ImageIcon, Quote, Check, X, LogIn, TrendingUp, BookOpen, ShoppingCart } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import {
  login,
  fetchStats,
  fetchPublications,
  fetchPendingTestimonials,
  approveTestimonial,
  rejectTestimonial,
  updatePublication,
  deletePublication,
} from '@/src/lib/api';

interface Publication {
  id: string;
  title: string;
  type: string;
  readTime: string;
  datePublished: string | null;
  views: number;
  status: 'PUBLISHED' | 'DRAFT' | 'IN_PROGRESS';
  coverImage?: string | null;
}

interface Testimonial {
  id: string;
  author: string;
  role: string;
  content: string;
  avatar?: string | null;
  city?: string | null;
}

interface Stats {
  lecteurs: number;
  downloads: number;
  views: number;
  pendingTestimonials: number;
  revenue: number;
  totalPurchases: number;
}

function formatNumber(n: number): string {
  if (n >= 1000) return (n / 1000).toFixed(1) + 'k';
  return n.toString();
}

function StatusBadge({ status }: { status: Publication['status'] }) {
  const map = {
    PUBLISHED: { label: 'Publié', cls: 'bg-green-100 text-green-800' },
    DRAFT: { label: 'Brouillon', cls: 'bg-stone-100 text-stone-600' },
    IN_PROGRESS: { label: 'En cours', cls: 'bg-amber-100 text-amber-800' },
  };
  const { label, cls } = map[status];
  return (
    <span className={cn('inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold', cls)}>
      {label}
    </span>
  );
}

// --- Écran de connexion ---
function LoginScreen({ onLogin }: { onLogin: (token: string) => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const data = await login(email, password);
      localStorage.setItem('admin_token', data.token);
      onLogin(data.token);
    } catch {
      setError('Identifiants incorrects.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex-1 h-screen flex items-center justify-center bg-surface-container-low">
      <div className="bg-white rounded-2xl shadow-xl p-12 w-full max-w-md border border-outline-variant/10">
        <h2 className="font-headline italic text-3xl text-primary mb-2">Administration</h2>
        <p className="text-on-surface-variant font-body text-sm mb-8">Connectez-vous pour accéder au tableau de bord.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full border border-outline-variant rounded-md px-4 py-3 text-sm font-body outline-none focus:border-primary transition-all"
            required
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full border border-outline-variant rounded-md px-4 py-3 text-sm font-body outline-none focus:border-primary transition-all"
            required
          />
          {error && <p className="text-red-600 text-sm font-body">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-white py-3 rounded-md font-bold font-body hover:opacity-90 transition-all flex items-center justify-center gap-2"
          >
            <LogIn size={16} />
            {loading ? 'Connexion...' : 'Se connecter'}
          </button>
        </form>
      </div>
    </div>
  );
}

// --- Dashboard principal ---
export function Dashboard() {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('admin_token'));
  const [stats, setStats] = useState<Stats | null>(null);
  const [publications, setPublications] = useState<Publication[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

  const loadData = useCallback(async (t: string) => {
    setLoading(true);
    try {
      const [s, p, tm] = await Promise.all([
        fetchStats(t),
        fetchPublications(t),
        fetchPendingTestimonials(t),
      ]);
      setStats(s);
      setPublications(p);
      setTestimonials(tm);
    } catch {
      // Token expiré
      localStorage.removeItem('admin_token');
      setToken(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (token) loadData(token);
  }, [token, loadData]);

  async function handleApprove(id: string) {
    if (!token) return;
    await approveTestimonial(token, id);
    setTestimonials(prev => prev.filter(t => t.id !== id));
    setStats(prev => prev ? { ...prev, pendingTestimonials: prev.pendingTestimonials - 1 } : prev);
  }

  async function handleReject(id: string) {
    if (!token) return;
    await rejectTestimonial(token, id);
    setTestimonials(prev => prev.filter(t => t.id !== id));
    setStats(prev => prev ? { ...prev, pendingTestimonials: prev.pendingTestimonials - 1 } : prev);
  }

  async function handleTogglePublish(pub: Publication) {
    if (!token) return;
    const newStatus = pub.status === 'PUBLISHED' ? 'DRAFT' : 'PUBLISHED';
    await updatePublication(token, pub.id, { status: newStatus });
    setPublications(prev => prev.map(p => p.id === pub.id ? { ...p, status: newStatus } : p));
  }

  async function handleDelete(id: string) {
    if (!token || !confirm('Supprimer cette publication ?')) return;
    await deletePublication(token, id);
    setPublications(prev => prev.filter(p => p.id !== id));
  }

  if (!token) return <LoginScreen onLogin={setToken} />;

  const filtered = publications.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex-1 h-screen overflow-y-auto bg-surface-container-low">
      <header className="sticky top-0 z-10 bg-surface/80 backdrop-blur-md px-12 py-8 flex justify-between items-end">
        <div>
          <h2 className="font-headline italic text-4xl text-primary tracking-tighter">Tableau de bord</h2>
          <p className="text-on-surface-variant font-label text-sm mt-1">Gouverner ses pensées pour maîtriser sa vie.</p>
        </div>
        <div className="flex gap-4 items-center">
          <div className="relative group">
            <input
              type="text"
              placeholder="Rechercher un chapitre..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="bg-transparent border-b border-outline-variant focus:border-primary focus:ring-0 transition-all px-2 py-1 text-sm font-body w-48 lg:w-64 placeholder:text-stone-400 outline-none"
            />
            <Search className="absolute right-2 top-1.5 text-stone-400" size={18} />
          </div>
          <button
            onClick={() => { localStorage.removeItem('admin_token'); setToken(null); }}
            className="text-on-surface-variant font-label text-[10px] uppercase tracking-widest hover:text-primary transition-all"
          >
            Déconnexion
          </button>
        </div>
      </header>

      {loading ? (
        <div className="flex items-center justify-center h-64 text-on-surface-variant font-body">
          Chargement...
        </div>
      ) : (
        <div className="px-12 pb-20 space-y-14">

          {/* Stats Section */}
          {stats && (
            <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="p-8 rounded-xl shadow-sm border border-outline-variant/10 bg-surface-container-lowest">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp size={14} className="text-on-surface-variant" />
                  <p className="uppercase tracking-widest text-[10px] font-label text-on-surface-variant">Lecteurs Engagés</p>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-headline text-3xl text-primary">{formatNumber(stats.lecteurs)}</span>
                </div>
              </div>
              <div className="p-8 rounded-xl shadow-sm border border-outline-variant/10 bg-surface-container-lowest">
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen size={14} className="text-on-surface-variant" />
                  <p className="uppercase tracking-widest text-[10px] font-label text-on-surface-variant">Livres Téléchargés</p>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-headline text-3xl text-primary">{formatNumber(stats.downloads)}</span>
                </div>
              </div>
              <div className="p-8 rounded-xl shadow-sm border border-outline-variant/10 bg-surface-container-lowest">
                <div className="flex items-center gap-2 mb-2">
                  <ShoppingCart size={14} className="text-on-surface-variant" />
                  <p className="uppercase tracking-widest text-[10px] font-label text-on-surface-variant">Revenus Totaux</p>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-headline text-3xl text-primary">${stats.revenue.toFixed(0)}</span>
                  <span className="text-on-surface-variant text-xs">{stats.totalPurchases} ventes</span>
                </div>
              </div>
              <div className="p-8 rounded-xl bg-primary-container text-on-primary shadow-sm border border-outline-variant/10">
                <p className="uppercase tracking-widest text-[10px] font-label text-primary-fixed-dim mb-2">Avis en Attente</p>
                <div className="flex flex-col">
                  <span className="font-headline italic text-2xl">{stats.pendingTestimonials} nouveau{stats.pendingTestimonials > 1 ? 'x' : ''}</span>
                  <span className="text-primary-fixed-dim text-xs mt-1">À modérer</span>
                </div>
              </div>
            </section>
          )}

          {/* Publications */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-headline text-2xl text-primary">Publications</h3>
              <button className="text-primary font-bold text-[10px] uppercase tracking-widest border-b border-primary/20 hover:border-primary transition-all">
                Voir tout
              </button>
            </div>
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-outline-variant/10">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container text-on-surface-variant border-b border-outline-variant/10">
                    <th className="px-8 py-4 font-label text-[10px] uppercase tracking-widest font-semibold">Titre</th>
                    <th className="px-8 py-4 font-label text-[10px] uppercase tracking-widest font-semibold">Date</th>
                    <th className="px-8 py-4 font-label text-[10px] uppercase tracking-widest font-semibold">Vues</th>
                    <th className="px-8 py-4 font-label text-[10px] uppercase tracking-widest font-semibold">Statut</th>
                    <th className="px-8 py-4 font-label text-[10px] uppercase tracking-widest font-semibold text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/10">
                  {filtered.map((pub) => (
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
                            <p className="text-[10px] text-on-surface-variant font-label">{pub.type} · {pub.readTime}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6 font-body text-sm text-on-surface">
                        {pub.datePublished ? new Date(pub.datePublished).toLocaleDateString('fr-FR') : 'En cours'}
                      </td>
                      <td className="px-8 py-6 font-body text-sm text-on-surface">
                        {pub.views.toLocaleString('fr-FR')}
                      </td>
                      <td className="px-8 py-6">
                        <StatusBadge status={pub.status} />
                      </td>
                      <td className="px-8 py-6 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleTogglePublish(pub)}
                            className="text-[10px] font-bold uppercase tracking-widest text-primary hover:underline"
                          >
                            {pub.status === 'PUBLISHED' ? 'Dépublier' : 'Publier'}
                          </button>
                          <button
                            onClick={() => handleDelete(pub.id)}
                            className="text-stone-400 hover:text-red-600 transition-colors"
                          >
                            <MoreVertical size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {filtered.length === 0 && (
                    <tr>
                      <td colSpan={5} className="px-8 py-12 text-center text-on-surface-variant font-body text-sm">
                        Aucune publication trouvée.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>

          {/* Testimonials en attente */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-headline text-2xl text-primary">Avis en Attente</h3>
              {testimonials.length > 0 && (
                <span className="bg-on-tertiary-container text-white px-2 py-0.5 text-[10px] font-bold rounded-full">
                  {testimonials.length} nouveau{testimonials.length > 1 ? 'x' : ''}
                </span>
              )}
            </div>
            {testimonials.length === 0 ? (
              <div className="bg-surface-container-lowest rounded-xl p-12 text-center text-on-surface-variant font-body text-sm border border-outline-variant/10">
                Aucun avis en attente de modération.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {testimonials.map((t) => (
                  <div key={t.id} className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/10 relative overflow-hidden flex flex-col justify-between">
                    <div>
                      <Quote size={48} className="text-on-tertiary-container/10 absolute -right-2 -top-2 rotate-180" />
                      <p className="font-headline italic text-lg text-primary mb-6 leading-relaxed">{t.content}</p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-secondary-container overflow-hidden">
                          {t.avatar && <img src={t.avatar} alt={t.author} className="w-full h-full object-cover" />}
                        </div>
                        <div>
                          <p className="font-bold text-sm text-primary">{t.author}</p>
                          <p className="text-[10px] text-on-surface-variant font-label">{t.role}{t.city ? ` · ${t.city}` : ''}</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleReject(t.id)}
                          className="w-10 h-10 flex items-center justify-center rounded-full bg-red-50 text-red-600 hover:bg-red-600 hover:text-white transition-all"
                        >
                          <X size={18} />
                        </button>
                        <button
                          onClick={() => handleApprove(t.id)}
                          className="w-10 h-10 flex items-center justify-center rounded-full bg-green-50 text-green-600 hover:bg-green-600 hover:text-white transition-all"
                        >
                          <Check size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

        </div>
      )}
    </div>
  );
}
