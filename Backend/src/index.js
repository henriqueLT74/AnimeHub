const path = require('path');

require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const personagemRoutes = require('./Routes/PersonagemRoute'); 

const app = express();

app.use(cors());
app.use(express.json());

const mongoURI = process.env.MONGO_URI;

console.log("Tentando conectar ao Banco...");
console.log("URI encontrada:", mongoURI ? "Sim (Carregada)" : "NÃO (Undefined)");

if (!mongoURI) {
    console.error("ERRO CRÍTICO: O arquivo .env não foi lido corretamente.");
}

mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB Conectado com Sucesso!'))
  .catch((err) => console.error('Erro ao conectar no Mongo:', err));

app.use(personagemRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});