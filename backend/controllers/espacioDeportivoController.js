const EspacioDeportivo = require('../models/EspacioDeportivo');

exports.obtenerEspacios = async (req, res) => {
    const espacios = await EspacioDeportivo.find();
    res.json(espacios);
};

exports.crearEspacio = async (req, res) => {
    const nuevoEspacio = new EspacioDeportivo(req.body);
    await nuevoEspacio.save();
    res.status(201).json(nuevoEspacio);
};

exports.actualizarEspacio = async (req, res) => {
    const espacio = await EspacioDeportivo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(espacio);
};

exports.eliminarEspacio = async (req, res) => {
    await EspacioDeportivo.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Espacio eliminado' });
};
