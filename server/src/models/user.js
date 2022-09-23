const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
require('mongoose-type-email');

const UserSchema = mongoose.Schema({
  email: {
    type: mongoose.SchemaTypes.Email,
    unique: true,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  firstName: {
    type: String,
    required: false
  },

  lastName: {
    type: String,
    required: false
  },

  budgets: [{}]
});