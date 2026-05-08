import { Router } from 'express';

export const router = Router();

// Scaffold upload endpoints (replace with multer + S3/Firebase storage)
router.post('/presign', async (req, res) => {
  res.json({ uploadUrl: 'https://example.com/presigned-url', objectKey: 'dev/object-key' });
});

router.post('/detect-copyright', async (req, res) => {
  // TODO: integrate acoustic fingerprinting / moderation
  res.json({ verdict: 'unknown', reasons: [] });
});

