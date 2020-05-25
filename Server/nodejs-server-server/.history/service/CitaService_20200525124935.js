'use strict';
var mysql = require('mysql');
var config = require('../config/config.js');
var connection = mysql.createConnection(config.databaseOptions);
/**
 * Elimina una cita
 * Elimina una cita
 *
 * idUser Integer Id del usuario
 * returns String
 **/
module.exports.deleteAppointment = function (req, res, next) {
    //Parameters
    console.log(req);
    res.send({
        message: 'This is the mockup controller for deleteAppointment'
    });
};


/**
 * Devuelve todo lo relacionado con las citas médicas de un usuario
 * Devuelve todo lo relacionado con las citas médicas de un usuario
 *
 * idUser Integer Id del usuario
 * returns String
 **/
module.exports.getAppointment = function (req, res, next) {
    //Parameters
    console.log(req);
    var query = "SELECT * FROM Appointment WHERE fk_user = " + req.undefined.value.idUser
    connection.query(query, function (error, results, fields) {
        if (error) throw error;
        res.send({
            data: results
        });
    });
};


/**
 * Registra una nueva cita del paciente
 * Registra una nueva cita del paciente
 *
 * appointment Appointment 
 * returns String
 **/
module.exports.postAppointment = function (req, res, next) {
    //Parameters
    console.log(req);
    var query = 'INSERT INTO Appointment SET ?'
    connection.query(query,req.undefined.value, function (error, results, fields) {
        if (error) throw error;
        res.send({
            data: results
        });
      });
};


/**
 * Modifica una cita
 * Modifica una cita
 *
 * appointment Appointment 
 * returns String
 **/
module.exports.putAppointment = function (req, res, next) {
    //Parameters
    console.log(req)
    var query = 'UPDATE Appointment SET ? WHERE place = ' + req.undefined.value.place + " AND hour = " + req.undefined.value.place
    connection.query(query, [req.undefined.value], function (error, results, fields) {
        if (error) throw error;
        res.send({
            data: results
        });
    });
};




