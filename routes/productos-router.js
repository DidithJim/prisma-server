const express = require('express');
const productosController = require('../controller/productos-controller')


//Creamos una instancia del router de Express.
//Definimos una ruta que responde a solicitudes GET en la raíz (/) del router.
//Definimos una ruta que responde a solicitudes GET en la raíz (/productos) del router.
//Método post para crear nueva obras


const router = express.Router();

router.get('/',productosController.getProductos);
router.get('/latest',productosController.getLatestProductos);
router.get('/id',productosController.getGuiasById);
router.post('/',productosController.createObra);
router.delete('/',productosController.deleteObra);
router.put('/', productosController.editObra);

module.exports = router;