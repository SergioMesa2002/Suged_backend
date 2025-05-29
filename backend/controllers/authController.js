const Admin = require('../models/Admin');
const Usuario = require('../models/Usuario');

// Controlador para login
exports.login = async (req, res) => {
    const { email, password } = req.body;

    // Verificar si es un admin
    const admin = await Admin.findOne({ correoinstitucional: email, password: password });
    if (admin) {
        return res.json({ rol: 'admin', admin });
    }

    // Verificar si es un usuario
    const usuario = await Usuario.findOne({ correoinstitucional: email, password: password });
    if (usuario) {
        return res.json({ rol: 'usuario', usuario });
    }

    // Si no es ni admin ni usuario
    res.status(401).json({ msg: 'Credenciales incorrectas' });
};
