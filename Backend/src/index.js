
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// O caminho que funcionou! Mantenha assim.
const personagemRoutes = require('./Routes/PersonagemRoute'); 

const app = express();

app.use(cors());
app.use(express.json());

// --- CORREÇÃO AQUI ---
// Removemos as opções { useNewUrlParser: true, ... } pois não são mais necessárias
// e causam erro nas versões novas.
mongoose.connect('mongodb://127.0.0.1:27017/anime-crud')
  .then(() => console.log('MongoDB conectado com sucesso!'))
  .catch((err) => console.error('Erro ao conectar no MongoDB:', err));

app.use(personagemRoutes);

app.listen(5000, () => {
  console.log('Servidor rodando na porta 5000');
});