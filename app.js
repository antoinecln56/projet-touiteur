const express = require('express');
const app = express();
const { resolve } = require('path');
const router = require('./routing');
require('./database');
const bodyParser = require('body-parser')


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.json());
app.use('/static', express.static(resolve('public')));
app.use(router);

module.exports = app;