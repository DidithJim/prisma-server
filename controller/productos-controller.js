const conexion = require('../database');

//Trabajamos mediante un comando de mysql para traernos los productos.

const productosController = {

    getProductos(req,res){

        let comando = 'SELECT * FROM productos';

        conexion.query(comando,(err,resultados,campos)=>{
            res.json(resultados).status(200)
        })

    },

    //Ahora, nos traeremos las últimas 3 obras de arte para crear la sección de Artista del Mes, todo esto mediante otro comando de mySQL.

    getLatestProductos(req,res){

        let comando = 'SELECT * FROM productos ORDER BY id DESC LIMIT 3';

        conexion.query(comando,(err,resultados,campos)=>{
            res.json(resultados).status(200)
        })



    },

    //Comando para crear nuevas obras

    createObra(req, res) {
        const { nombre, descripcion, precio } = req.body;

        const query = 'INSERT INTO productos(nombre, descripcion, precio) VALUES(?, ?, ?)';

        conexion.query(query, [nombre, descripcion, parseInt(precio)], (err, resultados,campos) => {
            if (err) {
                res.json({mensaje: 'Error en la insercción'}).status(503)
            }
            res.json({mensaje:'Ok'}).status(200);


            
        })
    },

    //Comando para borrar una obra de arte

    deleteObra(req,res){

        let id = req.query.id;

        let comando = 'DELETE FROM productos WHERE id = ? ';

        conexion.query(comando,[id],(err,resultados,campos)=>{

            if(err){
                res.json({mensaje: 'Error en la eliminación'}).status(503)
            }
            res.json({mensaje:'Ok'}).status(200)
        })
    },

    getGuiasById(req,res){

        let id = req.query.id;

        let comando = 'SELECT * FROM productos WHERE id = ?'

        conexion.query(comando,[id],(err,resultados,campos)=>{
            res.json(resultados[0]).status(200)
        })


    },

    editObra(req,res){

        let id = req.body.id;
        let nombre = req.body.nombre;
        let descripcion = req.body.descripcion;
        let precio = req.body.precio;

        let comando = 'UPDATE productos SET nombre = ?, descripcion =?, precio = ? WHERE id = ?';

        conexion.query(comando, [nombre,descripcion,precio,id], (err, resultados,campos)=>{

            if(err){
                res.json({mensaje:'No se ha podido actualizar'}).status(503)
            }
            res.json({mensaje:'Ok'}).status(200)
        })
    }



}

module.exports = productosController; 