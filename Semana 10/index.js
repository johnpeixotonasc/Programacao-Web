const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Rota inicial
app.get('/', (req, res) => {
  res.send('Bem-vindo ao Controle de Vacinas e Consultas para Pets!');
});

// Endpoint para criar um novo registro
app.post('/api/pets', (req, res) => {
  const petData = req.body;
  // Lógica para salvar os dados do pet
  res.json({ success: true, message: 'Pet criado com sucesso', data: petData });
});

// Endpoint para recuperar informações de um pet por ID
app.get('/api/pets/:id', (req, res) => {
  const petId = req.params.id;
  // Lógica para recuperar as informações do pet pelo ID
  const petData = { id: petId, name: 'Meu Pet' }; // Exemplo de dados estáticos
  res.json({ success: true, data: petData });
});

// Endpoint para atualizar informações de um pet por ID
app.put('/api/pets/:id', (req, res) => {
  const petId = req.params.id;
  const updatedPetData = req.body;
  // Lógica para atualizar as informações do pet pelo ID
  res.json({ success: true, message: 'Pet atualizado com sucesso', data: updatedPetData });
});

// Endpoint para excluir um pet por ID
app.delete('/api/pets/:id', (req, res) => {
  const petId = req.params.id;
  // Lógica para excluir o pet pelo ID
  res.json({ success: true, message: 'Pet excluído com sucesso' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
