const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const coachRouter = require('./api/routes/coach');
const mongoose = require('mongoose')
const cors = require('cors');

mongoose.connect('mongodb+srv://aferri:' + process.env.MONGO_ATLAS_PW + '@node-recensioni.esflg.mongodb.net/?retryWrites=true&w=majority');

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.use(cors());

app.use('/coaches', coachRouter);

module.exports = app;

