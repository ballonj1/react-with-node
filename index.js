const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there' })
});

// app represents the underlying express server
// app.get creates a new route handler
// '/' watches for an incoming HTTP request with a very specific method
// res.send({ hi: 'there' }) -> close the request

const PORT = process.env.PORT || 5000;
// IF THERE IS NOT AN ENV VARIABLE THE PORT VARIABLE WILL BE SET TO 5000
// Whenever heroku runs the application it has the ability to inject env variables
// env variables are set in the underlying runtime that node is running on top of
// things that are relvant in the environment when we are running our application
// We won't know what our port will be ahead of time

app.listen(PORT);
// tells node that we want to listen on the port 5000
