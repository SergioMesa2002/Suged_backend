const { Schema, model } = require('mongoose');

const AdminSchema = new Schema({
    idadministrador: String,
    nombre: String,
    apellido: String,
    codigo: String,
    password: String,
    correoinstitucional: String
});

module.exports = model('Admin', AdminSchema);
