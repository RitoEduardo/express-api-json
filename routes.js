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
  _user.initModel(data);
  res.json({
    response: true,
    errors: [],
    message: `succesful, nombre : ${ _user.getName() }` ,
    data
  });

});

const WorkloadJSON = require('./data/workload.json')
const LoadDBJSON = require('./data/load.json')

//Carga Horaria
router.get('/workload', (req, res) => {

  res.json({
    response: true,
    errors: [],
    message: 'succesful',
    data: WorkloadJSON
  });

});

const days = [
  {
    "id": 1,
    "name": "lunes"
  },
  {
    "id": 2,
    "name": "martes"
  },
  {
    "id": 3,
    "name": "miercoles"
  },
  {
    "id": 4,
    "name": "jueves"
  },
  {
    "id": 5,
    "name": "viernes"
  },
  {
    "id": 6,
    "name": "sabado"
  }
];

const hours = [
  {
    "id": 1,
    "name": "Matutino 1"
  },
  {
    "id": 2,
    "name": "Matutino 2"
  },
  {
    "id": 3,
    "name": "Matutino 3"
  },
  {
    "id": 4,
    "name": "Matutino 4"
  },
  {
    "id": 5,
    "name": "Matutino 5"
  },
  {
    "id": 6,
    "name": "Matutino 6"
  },
  {
    "id": 7,
    "name": "Matutino 7"
  },
  {
    "id": 8,
    "name": "Matutino 8"
  },
  {
    "id": 9,
    "name": "Matutino 9"
  }
];

router.get('/workload/:curp', (req, res) => {

  const curp = req.params.curp;
  const workloads = WorkloadJSON.filter( r => r.CURP == curp );

  if(!workloads || workloads.length == 0){
    return res.json({
      response: false,
      errors: [{
        "error": 1,
        "language": "es",
        "message": "Carga Horaria no disponible"
      }],
      message: "workload empty",
      data: null
    });
  }

  workloads.map( data => {
    //delete data.id;
    const temp = LoadDBJSON.find( r => r.id === data.id_carga );
    delete data.id_carga
    data['carga'] = temp;
    const day = days.find( r => r.id === data.id_dia );
    delete data.id_dia;
    data['dia'] = day;
    const hour = hours.find( r => r.id === data.id_hora );
    delete data.id_hora;
    data['hora'] = hour;
  });

  res.json({
    response: true,
    errors: [],
    message: 'succesful',
    data: workloads
  });

});

module.exports = router;
