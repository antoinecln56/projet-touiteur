const User = require('../database/models/users');

exports.getLogin = (req, res) => {
  res.end();
}
exports.getInscription = (req, res) => {
  res.end();
}

// Créer un nouvel utilisateur
exports.createUser = (req, res) => {
  const { pseudo, email, password } = req.body;
  const newUser = new User({
    pseudo,
    email,
    password
  });
  newUser.save()
    .then(saved => res.status(200).end('OK'))
    .catch(error => { res.status(500).end('PAS OK') });
};

// Connexion avec email et mot de passe
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }
    if (user.password !== password) {
      return res.status(401).json({ message: 'Mot de passe incorrect' });
    }
    res.status(200).json({ message: 'Connexion réussie' });
  } catch (error) {
    console.error('Une erreur s\'est produite', error);
    res.status(500).json({ message: 'Une erreur s\'est produite' });
  }

};
