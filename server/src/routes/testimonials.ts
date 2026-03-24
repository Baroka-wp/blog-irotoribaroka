import { Router, Request, Response } from 'express';
import { PrismaClient, TestimonialStatus } from '@prisma/client';
import { authMiddleware } from '../middleware/auth';

const router = Router();
const prisma = new PrismaClient();

// GET /api/testimonials — approuvés uniquement (public)
router.get('/', async (_req: Request, res: Response): Promise<void> => {
  const testimonials = await prisma.testimonial.findMany({
    where: { status: 'APPROVED' },
    orderBy: { createdAt: 'desc' },
  });
  res.json(testimonials);
});

// GET /api/testimonials/pending — en attente (admin)
router.get('/pending', authMiddleware, async (_req: Request, res: Response): Promise<void> => {
  const testimonials = await prisma.testimonial.findMany({
    where: { status: 'PENDING' },
    orderBy: { createdAt: 'desc' },
  });
  res.json(testimonials);
});

// POST /api/testimonials — soumettre un avis (public)
router.post('/', async (req: Request, res: Response): Promise<void> => {
  const { author, role, content, avatar, city } = req.body;

  if (!author || !content) {
    res.status(400).json({ error: 'Auteur et contenu requis.' });
    return;
  }

  const testimonial = await prisma.testimonial.create({
    data: { author, role: role || '', content, avatar, city, status: 'PENDING' },
  });
  res.status(201).json(testimonial);
});

// PATCH /api/testimonials/:id/approve — approuver (admin)
router.patch('/:id/approve', authMiddleware, async (req: Request, res: Response): Promise<void> => {
  const testimonial = await prisma.testimonial.update({
    where: { id: req.params.id },
    data: { status: 'APPROVED' },
  });
  res.json(testimonial);
});

// PATCH /api/testimonials/:id/reject — rejeter (admin)
router.patch('/:id/reject', authMiddleware, async (req: Request, res: Response): Promise<void> => {
  const testimonial = await prisma.testimonial.update({
    where: { id: req.params.id },
    data: { status: 'REJECTED' },
  });
  res.json(testimonial);
});

// DELETE /api/testimonials/:id (admin)
router.delete('/:id', authMiddleware, async (req: Request, res: Response): Promise<void> => {
  await prisma.testimonial.delete({ where: { id: req.params.id } });
  res.json({ success: true });
});

export default router;
