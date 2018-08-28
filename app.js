const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

const newsAgencyRouter = require('./src/routers/newsAgencyRouter')();

app.use('/api/agencies', newsAgencyRouter);

app.get('*', (req, res) => {
  res.send('Path is not handled');
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
