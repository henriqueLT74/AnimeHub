const Personagem = require('../Models/Personagem');

module.exports = {
  // GET: Buscar todos
  async index(req, res) {
    const personagens = await Personagem.find();
    return res.json(personagens);
  },

  // POST: Criar novo (Com descrição)
  async store(req, res) {
    const { name, category, image, description } = req.body; 
    try {
      const novoPersonagem = await Personagem.create({ name, category, image, description });
      return res.json(novoPersonagem);
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao cadastrar' });
    }
  },

  // PUT: Editar (Com descrição)
  async update(req, res) {
    const { id } = req.params;
    const { name, category, image, description } = req.body;
    try {
      const personagemAtualizado = await Personagem.findByIdAndUpdate(
        id, 
        { name, category, image, description }, 
        { new: true }
      );
      return res.json(personagemAtualizado);
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao atualizar' });
    }
  },

  // DELETE: Deletar
  async delete(req, res) {
    const { id } = req.params;
    try {
      await Personagem.findByIdAndDelete(id);
      return res.json({ message: 'Deletado com sucesso' });
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao deletar' });
    }
  }
};