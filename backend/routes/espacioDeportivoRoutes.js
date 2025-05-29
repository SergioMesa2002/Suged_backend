const router = require('express').Router();
const espacioController = require('../controllers/espacioDeportivoController');

router.get('/', espacioController.obtenerEspacios);
router.post('/', espacioController.crearEspacio);
router.put('/:id', espacioController.actualizarEspacio);
router.delete('/:id', espacioController.eliminarEspacio);

module.exports = router;
