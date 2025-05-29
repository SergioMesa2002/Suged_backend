const router = require('express').Router();
const reservaController = require('../controllers/reservaController');

// Crear reserva
router.post('/', reservaController.crearReserva);

// Obtener todas las reservas
router.get('/', reservaController.obtenerReservas);

// Obtener reserva por id
router.get('/:id', reservaController.obtenerReservaPorId);

// Actualizar reserva por id
router.put('/:id', reservaController.actualizarReserva);

// Eliminar reserva por id
router.delete('/:id', reservaController.eliminarReserva);

module.exports = router;
