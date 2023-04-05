const { api } = require('../libs/api');
const gameController = require('./gameController');

module.exports.route = (app) => {
  api.init(app);

  const param = { app, api };

  gameController.route(param);
}