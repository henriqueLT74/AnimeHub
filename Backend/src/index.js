const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const personagemRoutes = require('./Routes/PersonagemRoute'); // Confirme se o caminho está certo

const app = express();

app.use(cors()); // Libera acesso para o Front-end
app.use(express.json());

// --- MUDANÇA 1: Conexão segura ---
// O ideal é usar variável de ambiente, mas para facilitar, 
// você pode colar sua string do Atlas aqui OU usar process.env.MONGO_URI
// CORREÇÃO:
// 1. O '@' da senha virou '%40'
// 2. Adicionei '/anime-crud' antes do '?' para criar o banco com o nome certo

const mongoURI = process.env.MONGO_URI || 'mongodb+srv://henrique74:oliveira10%4051574@cluster0.lomoete.mongodb.net/anime-crud?appName=Cluster0';

mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB Conectado!'))
  .catch((err) => console.error('Erro Mongo:', err));

app.use(personagemRoutes);

// --- MUDANÇA 2: Porta Dinâmica ---
// O Render define a porta automaticamente na variável process.env.PORT
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});