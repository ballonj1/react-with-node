// prod.js - production keys here
// export an object out here where the values
// inside that object are being pulled from
// environment variables in the
// heroku environment
// WE WILL COMMIT THIS FILE SO THAT WE CAN GET ALL OF THE RIGHT
// INFORMATION

module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY
};
