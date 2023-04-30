/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const consign = require('consign');

const app = express();
consign({ cwd: 'src', verbose: false })
  .include('./config/middlewares.js')
  .into(app);

app.get('/', (req, res) => {
  res.status(200).send();
});

app.get('/users', (req, res) => {
  const user = [
    { name: 'Deyvson', email: 'deyvsonaguiar@mail.com' },
  ];
  res.status(200).json(user);
});

app.post('/users', (req, res) => {
  res.status(201).json(req.body);
});

module.exports = app;
