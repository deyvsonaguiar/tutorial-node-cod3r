module.exports = (app) => {
  app.routes('/users')
    .get(app.routes.users.findAll)
    .post(app.routes.users.create);
};
