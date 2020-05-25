'use strict';


/**
 * Devuelve
 * La sesion del usuario para iniciar sesion.
 *
 * returns String
 **/
module.exports.inicioSesionUsuarios = function(req, res, next) {
    //Parameters
    console.log(req);
    res.send({
        message: 'This is the mockup controller for inicioSesionUsuarios'
    });
};


/**
 * Cierre de sesion
 * Cierra la sesion abierta por el usuario actual
 *
 * returns String
 **/
module.exports.logoutUsuario = function(req, res, next) {
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
module.exports.registroUsuarios = function(req, res, next) {
    //Parameters
    console.log(req);
    res.send({
        message: 'This is the mockup controller for registroUsuarios'
    });
};




