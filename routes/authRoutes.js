const passport = require('passport');

module.exports = (app) => {
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

  // Once the google responds to this request, the callback function in the strategy itself is triggered


  // The google strategy will handle sending the code that we
  // receive from google back to the google server so that we know the user that we'd like to get information about
}
