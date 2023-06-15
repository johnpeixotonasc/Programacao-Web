const express = require('express');
const router = express.Router();
const patientsController = require('../controllers/patientsController');

router.post('/patients', patientsController.createPatient);

router.get('/patients', patientsController.getAllPatients);

router.get('/patients/:id', patientsController.getPatientById);

router.put('/patients/:id', patientsController.updatePatientById);

router.delete('/patients/:id', patientsController.deletePatientById);

module.exports = router;