const StatusController = require('./controllers/StatusController');

module.exports = (app) => {
  app.get('/status', StatusController.status);
};