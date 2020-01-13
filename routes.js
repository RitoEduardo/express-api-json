// Routes.js - Módulo de rutas
const express = require('express');
const router = express.Router();
const data = require('./data/info.json');
const users = [
  {
    firstName: 'Luis',
    lastName: 'Gomez',
    age: 25,
    mail: 'luisGom@domain.com',
  }
];

// Get mensajes
router.get('/', function (req, res) {
  // res.json('Obteniendo mensajes');
  res.json({
    response: true,
    errors: [],
    message:'API Test, Succesful',
    data
  });
});


// Post example
router.post('/', function (req, res) {

  const data = {
    firstName: req.body.first_name,
    lastName: req.body.last_name,
    age: req.body.age,
    mail: req.body.mail,
  };

  res.json({
    response: true,
    errors: [],
    message: 'succesful',
    data
  });

});

// Almacenar la suscripción
router.get('/users', (req, res) => {

  res.json({
    response: true,
    errors: [],
    message: 'succesful',
    data: users
  });

});

module.exports = router;
