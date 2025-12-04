// Importa o 'path' para navegar nas pastas
const path = require('path');

// CONFIGURAÇÃO DO DOTENV (CORRIGIDA)
// Ele vai procurar o .env na pasta "pai" (../) da pasta atual (__dirname)
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Verifique se o caminho da rota está certo (se PersonagemRoute está em src/Routes)
// Se 'Routes' estiver dentro de 'src', use './Routes/...'
// Se estiver fora, use '../Routes/...'
const personagemRoutes = require('./Routes/PersonagemRoute'); 

const app = express();

app.use(cors());
app.use(express.json());

// TESTE DE CONEXÃO
const mongoURI = process.env.MONGO_URI;

// Se ainda der erro, ele vai mostrar no terminal o que está acontecendo
console.log("Tentando conectar ao Banco...");
console.log("URI encontrada:", mongoURI ? "Sim (Carregada)" : "NÃO (Undefined)");

if (!mongoURI) {
    console.error("ERRO CRÍTICO: O arquivo .env não foi lido corretamente.");
    // Fallback de emergência (Use só se o .env falhar muito)
    // mongoURI = 'mongodb+srv://henrique74:oliveira10%4051574@cluster0.lomoete.mongodb.net/anime-crud?appName=Cluster0';
}

mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB Conectado com Sucesso!'))
  .catch((err) => console.error('Erro ao conectar no Mongo:', err));

app.use(personagemRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});