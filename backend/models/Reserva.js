const mongoose = require('mongoose');

const ReservaSchema = new mongoose.Schema({
    idreserva: { type: String, required: true },
    fecha: { type: Date, required: true },
    horainicio: { type: String, required: true },
    horafinal: { type: String, required: true },
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
    espaciodeportivo: { type: mongoose.Schema.Types.ObjectId, ref: 'EspacioDeportivo', required: true }
});

module.exports = mongoose.model('Reserva', ReservaSchema);
