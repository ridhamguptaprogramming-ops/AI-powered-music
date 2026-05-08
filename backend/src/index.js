import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';

import { router as aiRouter } from './routes/ai.js';
import { router as authRouter } from './routes/auth.js';
import { router as uploadsRouter } from './routes/uploads.js';

dotenv.config();

const app = express();

app.use(helmet());
app.use(cors({ origin: true, credentials: true }));
app.use(morgan('dev'));

app.use(express.json({ limit: '2mb' }));
app.use(express.urlencoded({ extended: true }));

app.get('/healthz', (req, res) => res.json({ ok: true }));

app.use('/api/auth', authRouter);
app.use('/api/uploads', uploadsRouter);
app.use('/api/ai', aiRouter);

// 404
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`[backend] listening on http://localhost:${port}`);
});

