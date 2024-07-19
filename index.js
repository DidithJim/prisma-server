const express = require('express');
const path = require ('path');
const cors = require ('cors');
const bunyan = require('bunyan');
require('dotenv').config();


const productosRouter = require('./routes/productos-router')
const adminRouter = require('./routes/admin-router');

const app = express(); //Creación de la app
app.use(express.static((__dirname + '/public'))) //Para imágenes estáticas
console.log('Sirviendo archivos en: '+__dirname + '/public')
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))




app.use('/productos', productosRouter) //App usa para /productos: productosRouter
app.use('/admin', adminRouter)

app.use((req,res)=>{
    res.status(404).json({mensaje:'No se ha encontrado la ruta'})
})

app.use((err,req,res,next)=>{
    res.status(500).json({mensaje:err})
})



const logger = bunyan.createLogger({name: 'Servidor'}) //Creación del Logger

const port = process.env.PORT || 3000;  //Creación del puerto

app.listen(port, () =>{
    logger.info('Servidor Levantado')
})
