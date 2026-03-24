export interface Publication {
  id: string;
  title: string;
  type: string;
  readTime: string;
  datePublished: string;
  views: string;
  status: 'Published' | 'Drafting' | 'Publié' | 'En cours de rédaction';
  coverImage: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  content: string;
  avatar: string;
  rating?: number;
  isNew?: boolean;
}

export interface Stat {
  label: string;
  value: string;
  trend?: string;
  isDeadline?: boolean;
  deadlineTitle?: string;
  deadlineDays?: string;
}
