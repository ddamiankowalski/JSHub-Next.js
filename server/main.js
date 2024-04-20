const express = require('express');
const app = express();
const port = 4200;

const errorHandler = require('./middleware/error-handler');

app.get('/', (req, res) => {
  res.send('Hello world!');
})

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
})

app.get('/test', (req, res) => {
  throw new Error('some error');
})

app.use(errorHandler);