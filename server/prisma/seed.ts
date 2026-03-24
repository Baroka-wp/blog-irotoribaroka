import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding...');

  // Admin user
  const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD || 'admin123', 10);
  await prisma.user.upsert({
    where: { email: process.env.ADMIN_EMAIL || 'birotori@gmail.com' },
    update: {},
    create: {
      email: process.env.ADMIN_EMAIL || 'birotori@gmail.com',
      password: hashedPassword,
      role: 'ADMIN',
    },
  });

  // Publications
  await prisma.publication.createMany({
    skipDuplicates: true,
    data: [
      {
        title: 'Le système Clarifier-Planifier-Ajuster',
        type: 'Chapitre Essentiel',
        readTime: '10 min read',
        status: 'PUBLISHED',
        views: 18402,
        datePublished: new Date('2024-03-24'),
        coverImage: 'https://picsum.photos/seed/clarify/400/600',
        content: 'Le système Clarifier-Planifier-Ajuster est le coeur du livre...',
      },
      {
        title: "L'Effet Levier des 5 Cercles",
        type: 'Guide Pratique',
        readTime: '15 min read',
        status: 'PUBLISHED',
        views: 12150,
        datePublished: new Date('2024-03-15'),
        coverImage: 'https://picsum.photos/seed/leverage/400/600',
        content: 'Les 5 cercles de la vie représentent les domaines fondamentaux...',
      },
      {
        title: 'Excitation et Détachement',
        type: "Philosophie d'Action",
        readTime: '12 min read',
        status: 'IN_PROGRESS',
        views: 0,
        coverImage: '',
        content: '',
      },
    ],
  });

  // Testimonials
  await prisma.testimonial.createMany({
    skipDuplicates: true,
    data: [
      {
        author: 'Kofi Mensah',
        role: 'Entrepreneur, Accra',
        city: 'Accra',
        content: '"Le système Clarifier-Planifier-Ajuster a transformé ma façon de piloter mon business. Je ne réagis plus, j\'anticipe."',
        avatar: 'https://picsum.photos/seed/kofi/100/100',
        status: 'APPROVED',
      },
      {
        author: 'Fatou Diallo',
        role: 'Manager RH, Dakar',
        city: 'Dakar',
        content: '"Le concept des 5 cercles m\'a aidé à identifier mon maillon faible. En 3 mois, j\'ai restructuré mes priorités."',
        avatar: 'https://picsum.photos/seed/fatou/100/100',
        status: 'APPROVED',
      },
      {
        author: 'Thierry Nkurunziza',
        role: 'Développeur, Abidjan',
        city: 'Abidjan',
        content: '"Agir avec excitation et détachement — cette idée m\'a libéré de la peur de l\'échec. Un livre que je relis chaque trimestre."',
        avatar: 'https://picsum.photos/seed/thierry/100/100',
        status: 'APPROVED',
      },
      {
        author: 'Aïcha Traoré',
        role: 'Consultante, Bamako',
        city: 'Bamako',
        content: '"La méthode du bilan quotidien stylo en main : simple, efficace. Mes objectifs sont enfin clairs et mesurables."',
        avatar: 'https://picsum.photos/seed/aicha/100/100',
        status: 'APPROVED',
      },
    ],
  });

  // Stats initiales
  const statsData = [
    { key: 'total_readers', value: 45200 },
    { key: 'total_downloads', value: 8420 },
    { key: 'total_views', value: 30552 },
  ];

  for (const stat of statsData) {
    await prisma.stat.upsert({
      where: { key: stat.key },
      update: {},
      create: stat,
    });
  }

  console.log('Seed terminé.');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
