import dotenv from 'dotenv';
import express from 'express';
import { json } from 'body-parser';

import { articlesRouter } from './routes/article-route';
import { errorHandler } from './middleware/error-handler';

dotenv.config();

const app = express();
app.use(json());
app.use('/article', articlesRouter);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

app.use(errorHandler);
