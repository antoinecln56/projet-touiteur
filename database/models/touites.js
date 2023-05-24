const {Schema, model} = require('mongoose');

const touiteSchema = Schema({
  texte: String
});

const Touite = model('touite', touiteSchema);

module.exports = Touite;