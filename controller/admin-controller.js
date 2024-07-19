const conexion = require('../database');

//Trabajamos mediante una función y un comando de mysql para traernos los usuarios de nuestra tabla admin


const adminController = {

    checkUsuario(req,res){

       let nombre = req.query.nombre;

       let contrasena = req.query.contrasena;

       let comando = 'SELECT * FROM admin WHERE nombre  =  ? AND codigo = ? '


       conexion.query(comando, [nombre,contrasena],(err,resultados)=>{

          res.json(resultados);
       })
    }

}

module.exports = adminController