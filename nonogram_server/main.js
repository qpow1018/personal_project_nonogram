const apiController = require('./src/api/apiController');

function main(app) {
  
  console.log(module);
  
  apiController.route(app);
}

module.exports = main;