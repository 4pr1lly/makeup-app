const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.users.index);
router.get('/signup', ctrl.users.renderSignup);
router.post('/', ctrl.users.signup);
router.get('/login', ctrl.users.renderLogin);
router.post('/login', ctrl.users.login);


module.exports = router;