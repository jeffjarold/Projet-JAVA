const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const routes = require('./routes/routes');

const app = express();
const PORT = process.env.PORT || 3333;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/shop', 
    { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());
app.use(routes);

app.listen(PORT, () => console.log('Server in port 3333'));
s
