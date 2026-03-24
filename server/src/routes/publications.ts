import { Router, Request, Response } from 'express';
import { PrismaClient, PublicationStatus } from '@prisma/client';
import { authMiddleware } from '../middleware/auth';

const router = Router();
const prisma = new PrismaClient();

// GET /api/publications — liste publique (publiés uniquement)
router.get('/', async (_req: Request, res: Response): Promise<void> => {
  const publications = await prisma.publication.findMany({
    where: { status: 'PUBLISHED' },
    orderBy: { datePublished: 'desc' },
  });
  res.json(publications);
});

// GET /api/publications/all — liste complète (admin)
router.get('/all', authMiddleware, async (_req: Request, res: Response): Promise<void> => {
  const publications = await prisma.publication.findMany({
    orderBy: { createdAt: 'desc' },
  });
  res.json(publications);
});

// GET /api/publications/:id
router.get('/:id', async (req: Request, res: Response): Promise<void> => {
  const pub = await prisma.publication.findUnique({ where: { id: req.params.id } });
  if (!pub) {
    res.status(404).json({ error: 'Publication introuvable.' });
    return;
  }
  // Incrémenter les vues
  await prisma.publication.update({ where: { id: req.params.id }, data: { views: { increment: 1 } } });
  await prisma.stat.upsert({
    where: { key: 'total_views' },
    update: { value: { increment: 1 } },
    create: { key: 'total_views', value: 1 },
  });
  res.json(pub);
});

// POST /api/publications — créer (admin)
router.post('/', authMiddleware, async (req: Request, res: Response): Promise<void> => {
  const { title, type, readTime, content, coverImage, status } = req.body;

  if (!title || !type) {
    res.status(400).json({ error: 'Titre et type requis.' });
    return;
  }

  const pub = await prisma.publication.create({
    data: {
      title,
      type,
      readTime: readTime || '5 min read',
      content,
      coverImage,
      status: (status as PublicationStatus) || 'DRAFT',
      datePublished: status === 'PUBLISHED' ? new Date() : null,
    },
  });
  res.status(201).json(pub);
});

// PATCH /api/publications/:id — mettre à jour (admin)
router.patch('/:id', authMiddleware, async (req: Request, res: Response): Promise<void> => {
  const { title, type, readTime, content, coverImage, status } = req.body;

  const existing = await prisma.publication.findUnique({ where: { id: req.params.id } });
  if (!existing) {
    res.status(404).json({ error: 'Publication introuvable.' });
    return;
  }

  const pub = await prisma.publication.update({
    where: { id: req.params.id },
    data: {
      ...(title && { title }),
      ...(type && { type }),
      ...(readTime && { readTime }),
      ...(content !== undefined && { content }),
      ...(coverImage !== undefined && { coverImage }),
      ...(status && {
        status: status as PublicationStatus,
        datePublished: status === 'PUBLISHED' && !existing.datePublished ? new Date() : existing.datePublished,
      }),
    },
  });
  res.json(pub);
});

// DELETE /api/publications/:id (admin)
router.delete('/:id', authMiddleware, async (req: Request, res: Response): Promise<void> => {
  await prisma.publication.delete({ where: { id: req.params.id } });
  res.json({ success: true });
});

export default router;
