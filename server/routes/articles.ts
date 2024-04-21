import express from 'express';
import { dbPool } from '../db/db-pool';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ success: true });
});

router.get('/all', async () => {
  const [rows, fields] = await dbPool.query('SELECT * FROM `articles`');

  console.log(rows, fields);
});

export { router as articlesRouter };
