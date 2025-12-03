const Character = require('../Models/Personagem');

module.exports = {
  // GET: Buscar todos
  async index(req, res) {
    try {
      const characters = await Character.find();
      return res.json(characters);
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao buscar personagens' });
    }
  },

  // POST: Criar novo
  async store(req, res) {
    const { name, category, image } = req.body;
    try {
      const character = await Character.create({ name, category, image });
      return res.json(character);
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao cadastrar personagem' });
    }
  },

  // PUT: Editar
  async update(req, res) {
    const { id } = req.params;
    const { name, category, image } = req.body;
    try {
      const character = await Character.findByIdAndUpdate(
        id, 
        { name, category, image }, 
        { new: true } // Retorna o dado atualizado
      );
      return res.json(character);
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao atualizar personagem' });
    }
  },

  // DELETE: Deletar
  async delete(req, res) {
    const { id } = req.params;
    try {
      await Character.findByIdAndDelete(id);
      return res.json({ message: 'Personagem deletado com sucesso' });
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao deletar personagem' });
    }
  }
};