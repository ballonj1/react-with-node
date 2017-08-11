const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

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
