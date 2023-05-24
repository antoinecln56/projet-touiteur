const router = require('express').Router();
const appRoutes = require('./app.routes');
const userRoutes = require('./users.routes')
const touiteRoutes = require('./touites.routes')

router.use('/', appRoutes);
router.use('/user', userRoutes);
router.use('/touite', touiteRoutes);

router.get('*', (req, res) => res.redirect('/home'));

module.exports = router;
