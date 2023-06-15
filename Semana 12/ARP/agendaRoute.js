const express = require('express');
const router = express.Router();
const agendaController = require('../controllers/agendaController');

router.post('/events', agendaController.createEvent);

router.get('/events', agendaController.getAllEvents);

router.get('/events/:id', agendaController.getEventById);

router.put('/events/:id', agendaController.updateEventById);

router.delete('/events/:id', agendaController.deleteEventById);

module.exports = router;