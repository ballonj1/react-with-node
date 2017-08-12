const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./services/passport');

mongoose.connect(keys.mongoURI);
const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
// IF THERE IS NOT AN ENV VARIABLE THE PORT VARIABLE WILL BE SET TO 5000
// Whenever heroku runs the application it has the ability to inject env variables
// env variables are set in the underlying runtime that node is running on top of
// things that are relvant in the environment when we are running our application
// We won't know what our port will be ahead of time

app.listen(PORT);
// tells node that we want to listen on the port 5000
