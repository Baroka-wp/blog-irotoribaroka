import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { authMiddleware } from '../middleware/auth';

const router = Router();
const prisma = new PrismaClient();

// POST /api/purchases — enregistrer un achat
router.post('/', async (req: Request, res: Response): Promise<void> => {
  const { email, amount, currency } = req.body;

  if (!email) {
    res.status(400).json({ error: 'Email requis.' });
    return;
  }

  const purchase = await prisma.purchase.create({
    data: {
      email,
      amount: amount || 20.0,
      currency: currency || 'USD',
      status: 'COMPLETED',
    },
  });

  // Mettre à jour la stat de téléchargements
  await prisma.stat.upsert({
    where: { key: 'total_downloads' },
    update: { value: { increment: 1 } },
    create: { key: 'total_downloads', value: 1 },
  });

  res.status(201).json(purchase);
});

// GET /api/purchases — historique (admin)
router.get('/', authMiddleware, async (req: Request, res: Response): Promise<void> => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 20;
  const skip = (page - 1) * limit;

  const [purchases, total] = await Promise.all([
    prisma.purchase.findMany({
      orderBy: { createdAt: 'desc' },
      skip,
      take: limit,
    }),
    prisma.purchase.count(),
  ]);

  const revenue = await prisma.purchase.aggregate({
    _sum: { amount: true },
    where: { status: 'COMPLETED' },
  });

  res.json({
    data: purchases,
    total,
    page,
    totalPages: Math.ceil(total / limit),
    totalRevenue: revenue._sum.amount || 0,
  });
});

export default router;
