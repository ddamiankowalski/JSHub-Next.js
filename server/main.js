const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 4200;

const articleRouter = require('./routes/articles');

const errorHandler = require('./middleware/error-handler');

app.use(bodyParser.json())

app.use('/articles', articleRouter);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
})

app.use(errorHandler);