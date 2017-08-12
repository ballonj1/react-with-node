const mongoose = require('mongoose');
// require in the mongoose library
const { Schema } = mongoose;
// use object destructuring to simplify the code

const userSchema = new Schema({
  googleId: String,
});

mongoose.model('users', userSchema);
