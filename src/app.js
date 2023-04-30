/* eslint-disable import/no-extraneous-dependencies */

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

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
