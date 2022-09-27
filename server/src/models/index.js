const mongoose = require('mongoose');
const UserModel = require('@BudgetManagerModels/user');

const models = {
  User: mongoose.model('User'),
}

module.exports = models;
