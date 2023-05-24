const router = require('express').Router();
const { createUser, loginUser, getInscription, getLogin } = require('../controller/user.controller');


router.get('/user/inscription', getInscription);
router.get('/user/login', getLogin);
router.post('/', createUser);
router.post('/login', loginUser);

module.exports = router;