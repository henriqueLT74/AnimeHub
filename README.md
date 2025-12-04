<div align="center">
  <h1> AnimeHub - Gerenciador de Personagens</h1>

  <p>
    Projeto Full Stack desenvolvido para a disciplina de <strong>Linguagem de Programação para Internet 2 </strong>.<br>
    O sistema permite gerenciar uma galeria de personagens de animes (CRUD Completo).
  </p>

  <p>
    <a href="https://anime-hub-jet.vercel.app/" target="_blank">
      <img src="https://img.shields.io/badge/Acessar%20Site-Front--end-blue?style=for-the-badge&logo=react" alt="Frontend Link">
    </a>
    &nbsp;&nbsp;&nbsp;
    <a href="https://animehub-9ka7.onrender.com" target="_blank">
      <img src="https://img.shields.io/badge/Acessar%20API-Back--end-green?style=for-the-badge&logo=node.js" alt="Backend Link">
    </a>
  </p>
</div>

<hr>

<h2> Tecnologias Utilizadas</h2>
<ul>
  <li><strong>Front-end:</strong> React.js, Axios, CSS Modules.</li>
  <li><strong>Back-end:</strong> Node.js, Express.</li>
  <li><strong>Banco de Dados:</strong> MongoDB (Atlas).</li>
</ul>

<hr>

<h2> Como Rodar Localmente</h2>

<h3>Passo 1: Back-end (Servidor)</h3>
<pre>
<code>
# Entre na pasta
cd backend

# Instale as dependências
npm install

# Inicie o servidor
node index.js
</code>
</pre>
<blockquote>
  <em>Nota: Crie um arquivo <code>.env</code> na pasta backend com a variável <code>MONGO_URI</code>.</em>
</blockquote>

<h3>Passo 2: Front-end (Site)</h3>
<pre>
<code>
# Abra outro terminal e entre na pasta
cd frontend

# Instale as dependências
npm install

# Inicie o React
npm start
</code>
</pre>

<hr>

<h2> Documentação da API (Endpoints)</h2>

<table width="100%">
  <thead>
    <tr>
      <th>Método</th>
      <th>Rota</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>GET</strong></td>
      <td><code>/personagens</code></td>
      <td>Lista todos os personagens.</td>
    </tr>
    <tr>
      <td><strong>POST</strong></td>
      <td><code>/personagens</code></td>
      <td>Cadastra um novo personagem.</td>
    </tr>
    <tr>
      <td><strong>PUT</strong></td>
      <td><code>/personagens/:id</code></td>
      <td>Atualiza os dados de um personagem.</td>
    </tr>
    <tr>
      <td><strong>DELETE</strong></td>
      <td><code>/personagens/:id</code></td>
      <td>Remove um personagem pelo ID.</td>
    </tr>
  </tbody>
</table>

<hr>

<h2> Exemplos de JSON (Payloads)</h2>

<h3>1. Cadastrar (POST)</h3>
<pre>
<code>
{
  "name": "Naruto Uzumaki",
  "category": "Shonen",
  "image": "https://link-da-imagem.com/foto.jpg",
  "description": "Ninja da vila da folha."
}
</code>
</pre>

<h3>2. Editar (PUT)</h3>
<pre>
<code>
{
  "name": "Naruto (Hokage)",
  "category": "Shonen",
  "image": "https://link-da-imagem.com/foto-nova.jpg",
  "description": "Agora ele é o Hokage."
}
</code>
</pre>

<hr>

<div align="center">
  <h3> Autores</h3>
  <p><strong> Henrique Oliveira/Vittor Augusto Gomes </strong> - Trabalho Final </p>
</div>
