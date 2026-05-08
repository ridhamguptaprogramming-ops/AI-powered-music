import { Router } from 'express';

export const router = Router();

// Scaffold auth routes
router.post('/login', async (req, res) => {
  res.json({ token: 'dev-token', user: { id: 'dev-user' } });
});

router.post('/consent/voice-clone', async (req, res) => {
  // TODO: persist consent; anti-abuse rules
  res.json({ ok: true });
});

