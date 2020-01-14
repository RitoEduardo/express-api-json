// Routes.js - Módulo de rutas
const express = require('express');
const router = express.Router();
const dataJSON = require('./data/info.json');
const users = require('./data/users.json');
const schoolsJSON = require('./data/schools.json');

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

// Ver usuarios
router.get('/schools', (req, res) => {

  res.json({
    response: true,
    errors: [],
    message: 'succesful',
    data: schoolsJSON
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

router.get('/users/:id', (req, res) => {

  const id = req.params.id;
  const user = users.find( r => r.userid == id );

  if(!user){
    return res.json({
      response: false,
      errors: [{
        "error": 1,
        "message": "user data no found"
      }],
      message: 'El usuario no existe',
      data: null
    });
  }

  res.json({
    response: true,
    errors: [],
    message: 'succesful',
    data: user
  });

});

router.put('/users/:id', (req, res) => {

  const id = req.params.id;
  const user = users.find( r => r.userid == id );

  if(!user){
    return res.json({
      response: false,
      errors: [{
        "error": 1,
        "message": "user data no found"
      }],
      message: 'El usuario no existe',
      data: null
    });
  }

  res.json({
    response: true,
    errors: [],
    message: 'succesful',
    data: user
  });

});
/*
class User{
  constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
  }
  getName(){
    return `${ this.firstName } ${ this.lastName }`;
  }
}
*/
const User = require('./models/user.js');

// Post example
router.post('/users', function (req, res) {

  const data = {
    firstName: req.body.first_name,
    lastName: req.body.last_name,
    age: req.body.age,
    email: req.body.mail,
  };

  const _user = new User();
  //_user.initModel(data.firstName, data.lastName, data.age, data.mail );
  _user.initModel(data);
  res.json({
    response: true,
    errors: [],
    message: `succesful, nombre : ${ _user.getName() }` ,
    data
  });

});


module.exports = router;
