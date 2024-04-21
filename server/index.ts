const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const articleRouter = require('./routes/articles');
const errorHandler = require('./middleware/error-handler');

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use('/articles', articleRouter);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

app.use(errorHandler);
