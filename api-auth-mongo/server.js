const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors'); // Importar cors
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Conectar a la base de datos
connectDB();

// Middleware
app.use(cors()); // Habilitar CORS
app.use(express.json({ extended: false }));

// Definir rutas
app.use('/api/users', require('./routes/userRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
