const Touite = require('../database/models/touites');
const User = require('../database/models/users');


exports.getTouite = (req, res) => {
    res.end();
}

exports.createTouite = async (req, res) => {
    const { texte, pseudo } = req.body;
    const user = await User.findOne({ pseudo });
    if (!user) {
        return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }
    const newTouite = new Touite({
        texte,
        pseudo: user.pseudo
    });
    await newTouite.save()
        .then(saved => res.status(200).end('OK'))
        .catch(error => { res.status(500).end('PAS OK') });
};

exports.getTouites = (req, res) => {
    Touite.find()
      .then(touites => {
        res.render('home', { touites });
      })
      .catch(error => {
        console.error(error);
        res.render('home', { touites: [] });
      });
  };