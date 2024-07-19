const express = require('express');

const adminController = require('../controller/admin-controller')

//Creamos una instancia del router de Express.
const router = express.Router();

//Definimos una ruta que responde a solicitudes GET en la raíz (/) del router.

router.get('/',adminController.checkUsuario);


module.exports = router;