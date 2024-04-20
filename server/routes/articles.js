const express = require('express');
const router = express.Router();

const dbPool = require('../db/db-pool');

router.get('/', (req, res) => {
  res.json({ success: true });
})

router.get('/all', async (req, res) => {
  const [rows, fields] = await dbPool.query('SELECT * FROM `articles`');

  console.log(rows, fields);
})

module.exports = router;