import express, { NextFunction, Request, Response } from 'express';
import { prisma } from '../prisma/client';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ success: true });
});

router.get('/all', async (_: Request, res: Response, next: NextFunction) => {
  try {
    await prisma.user.create({ data: { email: 'dupa@dupass.com' } });
  } catch (err) {
    return next(err);
  }

  res.json({ success: true });
});

export { router as articlesRouter };
