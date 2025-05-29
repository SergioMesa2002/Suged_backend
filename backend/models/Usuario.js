const { Schema, model } = require('mongoose');

const UsuarioSchema = new Schema({
    idestudiante: { type: String, required: true },
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    codigo: { type: String, required: true },
    password: { type: String, required: true },
    correoinstitucional: { type: String, required: true, unique: true }
});

module.exports = model('Usuario', UsuarioSchema);
