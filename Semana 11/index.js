const express = require('express');
const PetController = require('./petController');
const VaccineController = require('./vaccineController');

const app = express();
const port = 3000;

app.use(express.json());

// Rotas para o CRUD de Pets
app.get('/api/pets', PetController.getAllPets);
app.post('/api/pets', PetController.createPet);
app.get('/api/pets/:id', PetController.getPetById);
app.put('/api/pets/:id', PetController.updatePet);
app.delete('/api/pets/:id', PetController.deletePet);

// Rotas para o CRUD de Vacinas
app.get('/api/vaccines', VaccineController.getAllVaccines);
app.post('/api/vaccines', VaccineController.createVaccine);
app.get('/api/vaccines/:id', VaccineController.getVaccineById);
app.put('/api/vaccines/:id', VaccineController.updateVaccine);
app.delete('/api/vaccines/:id', VaccineController.deleteVaccine);

app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
