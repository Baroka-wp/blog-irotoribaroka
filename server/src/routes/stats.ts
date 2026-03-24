import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { authMiddleware } from '../middleware/auth';

const router = Router();
const prisma = new PrismaClient();

// GET /api/stats — statistiques du dashboard (admin)
router.get('/', authMiddleware, async (_req: Request, res: Response): Promise<void> => {
  const [stats, publishedCount, pendingTestimonials, purchaseData] = await Promise.all([
    prisma.stat.findMany(),
    prisma.publication.count({ where: { status: 'PUBLISHED' } }),
    prisma.testimonial.count({ where: { status: 'PENDING' } }),
    prisma.purchase.aggregate({
      _sum: { amount: true },
      _count: { id: true },
      where: { status: 'COMPLETED' },
    }),
  ]);

  const statsMap = Object.fromEntries(stats.map(s => [s.key, s.value]));

  res.json({
    lecteurs: statsMap['total_readers'] || 0,
    downloads: statsMap['total_downloads'] || 0,
    views: statsMap['total_views'] || 0,
    publishedArticles: publishedCount,
    pendingTestimonials,
    revenue: purchaseData._sum.amount || 0,
    totalPurchases: purchaseData._count.id || 0,
  });
});

// POST /api/stats/reader — incrémenter les lecteurs (appelé à chaque visite)
router.post('/reader', async (_req: Request, res: Response): Promise<void> => {
  await prisma.stat.upsert({
    where: { key: 'total_readers' },
    update: { value: { increment: 1 } },
    create: { key: 'total_readers', value: 1 },
  });
  res.json({ success: true });
});

export default router;
