const request = require('supertest');

const app = require('../../src/app');

test('Deve listar todos os usuários', () => {
  return request(app).get('/users')
    .then((res) => {
      expect(res.status).toBe(200);
      expect(res.body.length).toBeGreaterThan(0);
    });
});

test('Deve criar um usuário com sucesso', () => {
  const email = `${Date.now()}@mail.com`;
  return request(app).post('/users')
    .send({ name: 'Deyvson', email, password: '123456' })
    .then((res) => {
      expect(res.status).toBe(201);
      expect(res.body.name).toBe('Deyvson');
    });
});
