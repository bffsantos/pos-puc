import express from 'express';

const app = express();
const port = 8080;

// Rota principal que responde com "Olá mundo | EXPRESS"
app.get('/', (req, res) => {
  res.send('Olá mundo | EXPRESS');
});

// Rota 2 exemplo
app.get('/rota2', (req, res) => {
  res.send('ROTA 2 - Olá mundo | EXPRESS');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});