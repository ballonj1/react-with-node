const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
  }, (accessToken, refreshToken, profile, done) => {
    console.log('access token:', accessToken);
    console.log('refresh token:', refreshToken);
    console.log('profile:', profile);
  })
);

// The ACCESS TOKEN is provided from google -> Allows us reach back over to google and provide proof that
// the user allows us to gain access to their google profile

// The REFRESH TOKEN allows us to refresh the ACCESS TOKEN


app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

// passport.authenticate -> Authenticate this route and use the strategy 'google'
// scope (scope of the authentication)-> Telling google to give us access to the users profile information and their email
// passport.use -> passport I want you to know that there is a new strategy available for use

// app represents the underlying express server
// app.get creates a new route handler
// '/' watches for an incoming HTTP request with a very specific method
// res.send({ hi: 'there' }) -> close the request

app.get('/auth/google/callback', passport.authenticate('google'));
// The passport strategy recognizes the code that's in the query string and send a request to google
// for the appropriate information

// The google strategy will handle sending the code that we
// receive from google back to the google server so that we know the user that we'd like to get information about

const PORT = process.env.PORT || 5000;
// IF THERE IS NOT AN ENV VARIABLE THE PORT VARIABLE WILL BE SET TO 5000
// Whenever heroku runs the application it has the ability to inject env variables
// env variables are set in the underlying runtime that node is running on top of
// things that are relvant in the environment when we are running our application
// We won't know what our port will be ahead of time

app.listen(PORT);
// tells node that we want to listen on the port 5000
