const express = require('express');
const personRouter = require('./Routers/personRouter');
const covidRouter = require('./Routers/covidRouter');
const clientRouter = require('./Routers/clientRouter');
var cors = require('cors')

var app = express();
require('./configs/database');
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/persons', personRouter);
app.use('/api/covids', covidRouter);
app.use('/api/clients', clientRouter);


app.listen(8000);

