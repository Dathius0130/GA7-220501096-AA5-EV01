const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
  iduser: {
    type: Number,
    required: true,
  },
  nomuser: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
