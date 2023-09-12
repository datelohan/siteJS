const express = require('express');
const cors = require('cors'); // Importe o módulo cors
const app = express();
const port = 3000;

app.use(cors());
app.get('/api/exemplo', (req, res) => {
  // Aqui você pode retornar dados para o frontend
  const dados = {
    mensagem: 'Isso é um exemplo de dados do servidor.',
  };
  res.json(dados);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
