const { Schema, model } = require('mongoose');

const EspacioDeportivoSchema = new Schema({
    idespaciodeportivo: String,
    nombre: String,
    descripcion: String,
    capacidad: Number,
    disponibilidad: Boolean
});

module.exports = model('EspacioDeportivo', EspacioDeportivoSchema);
