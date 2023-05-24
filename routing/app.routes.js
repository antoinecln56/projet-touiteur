const router = require('express').Router();
const { inscriptionCtrl, loginCtrl, homeCtrl, touiteCtrl, touitesCtrl } = require('../controller/app.controller');

router.get('/user/inscription', inscriptionCtrl)
router.get('/user/login', loginCtrl)
router.get('/home', touitesCtrl);
router.get('/touite/new', touiteCtrl);

module.exports = router;