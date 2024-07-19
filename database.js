//Conexion con mySQL

const mysql = require ('mysql');
const bunyan = require('bunyan')

const logger = bunyan.createLogger({name: 'Base de Datos'})

//Conexión con la base de datos de mySQL

const conexion = mysql.createConnection({

    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE

})

//Manejo de errores

try {

    conexion.connect((err)=>{
        if(err){
            throw err
        }

        logger.info('Conectado a la BD satisfactotiamente')
    })
    
} catch (error) {

    logger.error('Error en a conexión'+ error)
    
}

//Exportamos la conexión

module.exports = conexion;