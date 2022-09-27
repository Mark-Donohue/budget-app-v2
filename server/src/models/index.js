const mongoose = require('mongoose');
const UserModel = require('./user');

const models = {
  User: mongoose.model('User'),
}

module.exports = models;
