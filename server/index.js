const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const coachRouter = require('./api/routes/coach');
const mongoose = require('mongoose')
const cors = require('cors');

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.use('/coaches', coachRouter);

app.use(cors());

module.exports = app;

