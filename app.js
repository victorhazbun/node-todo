'use strict';

var express = require('express'),
app = express(),
mongoose = require('mongoose'),
config = require('./config'),
port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

mongoose.connect(config.getDbConnectionString());

app.listen(port);