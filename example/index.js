const express = require('express');
const compression = require('compression');
const app = express();

app.use(compression({}));

app.get('/', (req, res) => {
  res.send({ ok: true })
});

app.listen(4000);
