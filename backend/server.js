const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const conectarDB = require('./config/db');

dotenv.config();
conectarDB();

const app = express();
app.use(express.json());

// Permitir CORS desde localhost:3000 y localhost:4000 (frontend y backend)
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:4000',  'https://suged-frontend.onrender.com']
}));

// Importa rutas API
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));
app.use('/api/usuarios', require('./routes/usuarioRoutes'));
app.use('/api/espacios', require('./routes/espacioDeportivoRoutes'));
app.use('/api/reservas', require('./routes/reservaRoutes'));

app.listen(process.env.PORT, () => {
    console.log(`Servidor backend en puerto ${process.env.PORT}`);
});
