'use strict';
var mysql = require('mysql');
var config = require('../config/config.js');
var connection = mysql.createConnection(config.databaseOptions);

/**
 * Devuelve
 * La sesion del usuario para iniciar sesion.
 *
 * returns String
 **/
module.exports.inicioSesionUsuarios = function (req, res, next) {
    //Parameters
    console.log(req)
    const selectQuery="SELECT * FROM user WHERE username='"+req.undefined.value.username+"' AND password='"+req.undefined.value.password+"'"
    connection.query(selectQuery, function (error, results, fields) {
        if (error) throw error;
        //console.log('The solution is: ', results[0].username);
        if(results.length == 1){
        res.send({
           data : results
        });
        }else{
            return res.status(400).send({
                message: 'Usuario No Autorizado!'
             });
        }
      });
};


/**
 * Cierre de sesion
 * Cierra la sesion abierta por el usuario actual
 *
 * returns String
 **/
module.exports.logoutUsuario = function (req, res, next) {
    //Parameters
    console.log(req);
    res.send({
        message: 'This is the mockup controller for logoutUsuario'
    });
};


/**
 * Registra un nuevo usuario
 * Creacion de nuevos usuarios.
 *
 * user User 
 * returns String
 **/
module.exports.registroUsuarios = function (req, res, next) {
    //Parameters
    console.log(req);
    res.send({
        message: 'This is the mockup controller for registroUsuarios'
    });
};




