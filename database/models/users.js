const {Schema, model} = require('mongoose');

const userSchema = Schema({
  pseudo: String,
  email: String,
  password: String,
});

const User = model('user', userSchema);

module.exports = User;