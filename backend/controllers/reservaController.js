const mongoose = require('mongoose');
const Reserva = require('../models/Reserva');
const Usuario = require('../models/Usuario');
const EspacioDeportivo = require('../models/EspacioDeportivo');

// Crear nueva reserva
exports.crearReserva = async (req, res) => {
    try {
        const usuario = await Usuario.findOne({ correoinstitucional: req.body.usuario });
        if (!usuario) {
            return res.status(400).json({ mensaje: "Usuario no encontrado" });
        }

        const espacioDeportivo = await EspacioDeportivo.findOne({ idespaciodeportivo: req.body.espaciodeportivo });
        if (!espacioDeportivo) {
            return res.status(400).json({ mensaje: "Espacio deportivo no encontrado" });
        }

        const nuevaReserva = new Reserva({
            idreserva: req.body.idreserva,
            fecha: req.body.fecha,
            horainicio: req.body.horainicio,
            horafinal: req.body.horafinal,
            usuario: usuario._id,
            espaciodeportivo: espacioDeportivo._id
        });

        await nuevaReserva.save();
        res.status(201).json(nuevaReserva);

    } catch (error) {
        console.error('Error al crear reserva:', error.message);
        res.status(500).json({ mensaje: 'Error al crear reserva', error: error.message });
    }
};

// Obtener todas las reservas con referencias pobladas
exports.obtenerReservas = async (req, res) => {
    try {
        const reservas = await Reserva.find()
            .populate('usuario', 'nombre apellido correoinstitucional')
            .populate('espaciodeportivo', 'nombre descripcion capacidad');
        res.json(reservas);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener reservas', error: error.message });
    }
};

// Obtener reserva por ID con referencias pobladas
exports.obtenerReservaPorId = async (req, res) => {
    try {
        const reserva = await Reserva.findById(req.params.id)
            .populate('usuario', 'nombre apellido correoinstitucional')
            .populate('espaciodeportivo', 'nombre descripcion capacidad');
        if (!reserva) {
            return res.status(404).json({ mensaje: 'Reserva no encontrada' });
        }
        res.json(reserva);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener reserva', error: error.message });
    }
};

// Actualizar reserva por ID
exports.actualizarReserva = async (req, res) => {
    try {
        // Opcional: validar usuario y espacio antes de actualizar (similar a crearReserva)
        const reservaActualizada = await Reserva.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!reservaActualizada) {
            return res.status(404).json({ mensaje: 'Reserva no encontrada para actualizar' });
        }
        res.json(reservaActualizada);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al actualizar reserva', error: error.message });
    }
};

// Eliminar reserva por ID
exports.eliminarReserva = async (req, res) => {
    try {
        const reservaEliminada = await Reserva.findByIdAndDelete(req.params.id);
        if (!reservaEliminada) {
            return res.status(404).json({ mensaje: 'Reserva no encontrada para eliminar' });
        }
        res.json({ mensaje: 'Reserva eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar reserva', error: error.message });
    }
};
