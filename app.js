var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var env = require('dotenv').config();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var Models = require('./models');

var cors = require('cors')
var app = express();

// start database
Models.sequelize.sync();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
