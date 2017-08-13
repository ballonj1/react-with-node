// keys.js - figure out what set of credintials to return
// when you deploy your existing server to Heroku, there is an
// existing variable called node_env
// node_env tells us if we're running in a production env
if (process.env.NODE_ENV === 'production') {
  // we are in production - return the prod set of keys
  module.exports = require('./prod');
} else {
  // we are in development - return the dev keys
  module.exports = require('./dev');
}
