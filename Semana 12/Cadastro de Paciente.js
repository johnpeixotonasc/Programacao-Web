const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Simulação de um banco de dados em memória
const patients = [];

// Rota para criar um novo paciente
app.post('/api/patients', (req, res) => {
  const { name, age, gender } = req.body;
  
  // Verifica se todos os campos obrigatórios estão presentes
  if (!name || !age || !gender) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
  }
  
  const newPatient = { id: patients.length + 1, name, age, gender };
  patients.push(newPatient);
  
  return res.status(201).json(newPatient);
});

// Rota para obter todos os pacientes
app.get('/api/patients', (req, res) => {
  return res.json(patients);
});

// Rota para obter um paciente pelo ID
app.get('/api/patients/:id', (req, res) => {
  const patientId = parseInt(req.params.id);
  const patient = patients.find(p => p.id === patientId);
  
  if (!patient) {
    return res.status(404).json({ error: 'Paciente não encontrado' });
  }
  
  return res.json(patient);
});

// Rota para atualizar um paciente pelo ID
app.put('/api/patients/:id', (req, res) => {
  const patientId = parseInt(req.params.id);
  const patient = patients.find(p => p.id === patientId);
  
  if (!patient) {
    return res.status(404).json({ error: 'Paciente não encontrado' });
  }
  
  const { name, age, gender } = req.body;
  
  // Verifica se todos os campos obrigatórios estão presentes
  if (!name || !age || !gender) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
  }
  
  patient.name = name;
  patient.age = age;
  patient.gender = gender;
  
  return res.json(patient);
});

// Rota para excluir um paciente pelo ID
app.delete('/api/patients/:id', (req, res) => {
  const patientId = parseInt(req.params.id);
  const patientIndex = patients.findIndex(p => p.id === patientId);
  
  if (patientIndex === -1) {
    return res.status(404).json({ error: 'Paciente não encontrado' });
  }
  
  patients.splice(patientIndex, 1);
  
  return res.status(204).end();
});

app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
