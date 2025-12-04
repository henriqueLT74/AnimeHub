const express = require('express');
const routes = express.Router();

const PersonagemController = require('../Controllers/PersonagemController');

routes.get('/personagens', PersonagemController.index);
routes.post('/personagens', PersonagemController.store);
routes.put('/personagens/:id', PersonagemController.update);
routes.delete('/personagens/:id', PersonagemController.delete);

module.exports = routes;