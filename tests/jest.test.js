test('Deve conhecer as principais assertivas do Jest', () => {
  let number = null;
  expect(number).toBeNull();
  number = 10;
  expect(number).not.toBeNull();
  // expect(number).toBeNull(10);
  expect(number).toEqual(10);
  expect(number).toBeGreaterThan(9);
  expect(number).toBeLessThan(11);
});

test('Deve saber trabalhar com objetos', () => {
  const obj = {name: 'Deyvson', email: 'deyvsonaguiar@mail.com'};
  expect(obj).toHaveProperty('name');
  expect(obj).toHaveProperty('name', 'Deyvson');
  expect(obj.name).toBe('Deyvson');

  const obj2 = {name: 'Deyvson', email: 'deyvsonaguiar@mail.com'};
  expect(obj).toEqual(obj2);
});
