const router = require('express').Router();
const adminController = require('../controllers/adminController');

router.get('/usuarios', adminController.obtenerUsuarios);
router.post('/usuarios', adminController.crearUsuario);
router.put('/usuarios/:id', adminController.actualizarUsuario);
router.delete('/usuarios/:id', adminController.eliminarUsuario);

module.exports = router;

