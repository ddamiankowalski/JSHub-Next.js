import dotenv from 'dotenv';
import express from 'express';
import { json } from 'body-parser';

import { articlesRouter } from './routes/articles';
import { errorHandler } from './middleware/error-handler';

dotenv.config();

const app = express();
app.use(json());
app.use('/articles', articlesRouter);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

app.use(errorHandler);
