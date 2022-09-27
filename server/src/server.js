const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const passport = require('passport');
const passportConfig = require('./config/passport')(passport);
const jwt = require('jsonwebtoken');
const config = require('./config/index');
const database = require('./config/database')(mongoose, config);

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('combined'));
app.use(morgan('dev'));
app.use(cors());
app.use(passport.initialize());

require('./routes')(app);

app.listen('8000', () => {
  console.log("Server started on port 8000.");
});