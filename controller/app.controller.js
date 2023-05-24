const User = require('../database/models/users');
const Touite = require('../database/models/touites')

exports.inscriptionCtrl = (req, res) => {
  res.render('inscription');
}

exports.loginCtrl = (req, res) => {
  res.render('login');
}

exports.touitesCtrl = (req, res) => {
  Touite.find()
    .then(touites => {
      res.render('home', { touites: touites });
    })
    .catch(error => {
      console.error(error);
      res.render('home', { touites: [] });
    });
}

exports.touiteCtrl = (req, res) => {
  res.render('add-touite');
}

exports.userCtrl = (req, res) => {
  User.find()
    .then(users => res.render('user', { users }))
    .catch(() => res.render('user', { users: [] }))
}

