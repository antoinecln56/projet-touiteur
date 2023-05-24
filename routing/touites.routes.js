const router = require('express').Router();
const { getTouite, createTouite, getTouites } = require('../controller/touite.controller');

router.get('/', getTouites);
router.get('/touite', getTouite);
router.post('/', createTouite);

module.exports = router;