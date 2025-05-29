const router = require('express').Router();
const authController = require('../controllers/authController');

// Ruta para login (POST)
router.post('/login', authController.login);

module.exports = router;
