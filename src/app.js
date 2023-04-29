// eslint-disable-next-line import/no-extraneous-dependencies
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send();
});

module.exports = app;
