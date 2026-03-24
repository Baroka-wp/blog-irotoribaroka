import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';

import authRouter from './routes/auth';
import publicationsRouter from './routes/publications';
import testimonialsRouter from './routes/testimonials';
import purchasesRouter from './routes/purchases';
import statsRouter from './routes/stats';

dotenv.config({ path: path.join(__dirname, '../../.env') });

const app = express();
const PORT = process.env.PORT || 3001;
const isProd = process.env.NODE_ENV === 'production';

// CORS uniquement en dev (en prod, Express sert le front lui-même)
if (!isProd) {
  app.use(cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
    credentials: true,
  }));
}

app.use(express.json());

// Routes API
app.use('/api/auth', authRouter);
app.use('/api/publications', publicationsRouter);
app.use('/api/testimonials', testimonialsRouter);
app.use('/api/purchases', purchasesRouter);
app.use('/api/stats', statsRouter);

// Health check
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// En production : Express sert le build React (dist/)
if (isProd) {
  const distPath = path.join(__dirname, '../../dist');
  app.use(express.static(distPath));
  // Toutes les routes non-API renvoient index.html (SPA)
  app.get('*', (_req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT} [${isProd ? 'production' : 'dev'}]`);
});

export default app;
