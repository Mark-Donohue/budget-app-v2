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

// Generate a salt and hash user passwords
Schema.pre('save', function (next) {
  const user = this;
  if (this.isModified('password') || this.isNew) {
    bcrypt.genSalt(10, (error, salt) => {
      if (error) {
        return next(error);  
      }

      bcrypt.hash(user.password, salt, (error, hash) => {
        if (error) {
          return next(error);  
        }
    
        user.password = hash;
        next();
      });
    });
  } else {
    return next();
  }
});


Schema.methods.comparePassword = function (password, callback) {
  bcrypt.compare(password, this.password, (error, matches) => {
    if (error) {
      return callback(error);
    }

    callback(null, matches);
  });
};

mongoose.model('User', Schema);
