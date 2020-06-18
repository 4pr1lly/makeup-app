const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.users.index);
router.get('/signup', ctrl.users.renderSignup);
router.post('/', ctrl.users.signup);
<<<<<<< HEAD
router.get('/login', ctrl.users.renderLogin);
router.post('/login', ctrl.users.login);

=======
router.get('/profile/:index', ctrl.users.loadProfile);
router.get('/login', ctrl.users.loadLogin);
router.post('/login', ctrl.users.login);
router.put('/profile/:index', ctrl.users.editProfile);
router.delete('/:index', ctrl.users.deletePlayer);
>>>>>>> 10bdcd79a272fbd957f0eb29fc254e9938289e44

module.exports = router;