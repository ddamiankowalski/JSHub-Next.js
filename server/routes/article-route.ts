import express, { NextFunction, Request, Response } from 'express';

import * as articleController from '../controllers/article-controller';

const router = express.Router();

router.get('/all', async (_: Request, res: Response, next: NextFunction) => {
  try {
    const articles = await articleController.getAll();
    res.json({ success: true, articles });
  } catch (err) {
    return next(err);
  }
});

router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const article = await articleController.getById(id);
    res.json({ success: true, article });
  } catch (err) {
    return next(err);
  }
});

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { title, subtitle } = req.body;
    const article = await articleController.addArticle(title, subtitle);
    res.json({ success: true, added: article });
  } catch (err) {
    return next(err);
  }
});

export { router as articlesRouter };
