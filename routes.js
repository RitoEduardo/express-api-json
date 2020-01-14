// Routes.js - Módulo de rutas
const express = require('express');
const router = express.Router();
const dataJSON = require('./data/info.json');
const users = require('./data/users.json');

// Get mensajes
router.get('/', function (req, res) {
  // res.json('Obteniendo mensajes');
  res.json({
    response: true,
    errors: [],
    message:'API Test, Succesful',
    dataJSON
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

// Ver usuarios
router.get('/users', (req, res) => {

  res.json({
    response: true,
    errors: [],
    message: 'succesful',
    data: users
  });

});

module.exports = router;
