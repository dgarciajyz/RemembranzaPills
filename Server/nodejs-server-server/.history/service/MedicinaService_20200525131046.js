'use strict';
var mysql = require('mysql');
var config = require('../config/config.js');
var connection = mysql.createConnection(config.databaseOptions);

/**
 * Elimina la información de la medicina asociada a un usuario
 *
 * idMedicine String Titulo de la medicina
 * returns String
 **/
module.exports.deleteMedicine = function(req, res, next) {
    //Parameters
    console.log(req);
    var query = 'DELETE FROM medicine WHERE title = ' + req.undefined.value.place
    connection.query(query, function (error, results, fields) {
        if (error) throw error;
        res.send({
            data: results
        });
    });
};


/**
 * Devuelve las medicinas que tiene que recetadas un paciente
 * Devuelve las medicinas que tiene que recetadas un paciente
 *
 * idUser Integer Id del usuario
 * returns String
 **/
module.exports.getMedicine = function(req, res, next) {
    //Parameters
    console.log(req);
    var query = "SELECT * FROM recepie AS R JOIN medicine AS M ON M.title = R.fk_med WHERE fk_user = " + req.undefined.value.idUser
    connection.query(query, function (error, results, fields) {
        if (error) throw error;
        res.send({
            data: results
        });
    });
};


/**
 * Registra una nueva medicina en el historial del paciente
 * Registra una nueva medicina en el historial del paciente
 *
 * medicine Medicine 
 * returns String
 **/
module.exports.postMedicine = function(req, res, next) {
    //Parameters
    var query = 'INSERT INTO medicine SET ?'
    connection.query(query, req.undefined.value, function (error, results, fields) {
        if (error) throw error;
        res.send({
            data: results
        });
    });
};


/**
 * Modifica la información de las medicinas del paciente
 * Modifica la información de las medicinas del paciente
 *
 * medicine Medicine 
 * returns String
 **/
module.exports.putMedicine = function(req, res, next) {
    //Parameters
    console.log(req);
    var query = 'UPDATE medicine SET ? WHERE title = ' + req.undefined.value.title
    connection.query(query, [req.undefined.value], function (error, results, fields) {
        if (error) throw error;
        res.send({
            data: results
        });
    });
};




