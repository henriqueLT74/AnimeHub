// 1. IMPORTANTE: Isso tem que ser a primeira linha!
require('dotenv').config(); 

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const personagemRoutes = require('./Routes/PersonagemRoute');

const app = express();

app.use(cors());
app.use(express.json());

// 2. USANDO A VARIÁVEL SEGURA
// Se não achar a variável (ex: erro de digitação), ele avisa ou usa uma string vazia
const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
    console.error("ERRO CRÍTICO: A variável MONGO_URI não foi encontrada no .env");
}

mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB Conectado via .env!'))
  .catch((err) => console.error('Erro Mongo:', err));

app.use(personagemRoutes);

// Usando a porta do .env ou 5000
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});