const mongoose = require('mongoose');

const CharacterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String, // Armazenaremos a URL da imagem
    required: true,
  },
}, { timestamps: true }); // Adiciona data de criação/edição automaticamente

module.exports = mongoose.model('Character', CharacterSchema);