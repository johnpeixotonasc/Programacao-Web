const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Simulação de um banco de dados em memória
const appointments = [];

// Rota para criar um novo compromisso
app.post('/api/appointments', (req, res) => {
  const { title, date, time } = req.body;

  // Verifica se todos os campos obrigatórios estão presentes
  if (!title || !date || !time) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
  }

  const newAppointment = { id: appointments.length + 1, title, date, time };
  appointments.push(newAppointment);

  return res.status(201).json(newAppointment);
});

// Rota para obter todos os compromissos
app.get('/api/appointments', (req, res) => {
  return res.json(appointments);
});

app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
