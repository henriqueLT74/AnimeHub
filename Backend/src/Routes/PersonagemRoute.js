const express = require('express');
const routes = express.Router();

// Importando o controller correto
const PersonagemController = require('../Controllers/PersonagemController');

// Rotas traduzidas
routes.get('/personagens', PersonagemController.index);
routes.post('/personagens', PersonagemController.store);
routes.put('/personagens/:id', PersonagemController.update);
routes.delete('/personagens/:id', PersonagemController.delete);

module.exports = routes;