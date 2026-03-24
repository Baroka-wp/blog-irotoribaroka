import React from 'react';
import { LayoutDashboard, Edit3, MessageSquare, BarChart3, Settings, Plus } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const navItems = [
    { id: 'overview', label: 'Vue d\'ensemble', icon: LayoutDashboard },
    { id: 'posts', label: 'Chapitres', icon: Edit3 },
    { id: 'reviews', label: 'Avis lecteurs', icon: MessageSquare },
    { id: 'analytics', label: 'Statistiques', icon: BarChart3 },
    { id: 'settings', label: 'Paramètres', icon: Settings },
  ];

  return (
    <aside className="h-screen w-64 border-r border-outline-variant/10 bg-surface-container-low flex flex-col p-6 gap-2 shrink-0">
      <div className="mb-10">
        <h1 className="font-headline text-xl text-primary tracking-tight">Admin Auteur</h1>
        <p className="font-label text-[10px] text-on-surface-variant tracking-widest uppercase">Gérer le Livre</p>
      </div>
      
      <nav className="flex-1 flex flex-col gap-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={cn(
              "flex items-center px-4 py-3 gap-3 rounded-lg transition-all duration-200 group",
              activeTab === item.id 
                ? "bg-surface-container-highest text-primary font-semibold" 
                : "text-on-surface-variant hover:bg-surface-container hover:translate-x-1"
            )}
          >
            <item.icon size={18} className={cn(activeTab === item.id ? "text-primary" : "text-on-surface-variant")} />
            <span className="text-sm font-label">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto">
        <button className="w-full bg-primary text-on-primary py-3 rounded-md font-label text-sm font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-lg shadow-primary/10">
          <Plus size={16} />
          Nouveau Chapitre
        </button>
      </div>
    </aside>
  );
}
