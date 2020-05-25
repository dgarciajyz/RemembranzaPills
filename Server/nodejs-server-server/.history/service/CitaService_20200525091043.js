'use strict';


/**
 * Elimina una cita
 * Elimina una cita
 *
 * idUser Integer Id del usuario
 * returns String
 **/
module.exports.deleteAppointment = function(req, res, next) {
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
module.exports.getAppointment = function(req, res, next) {
    //Parameters
    console.log(req);
    res.send({
        message: 'This is the mockup controller for getAppointment'
    });
};


/**
 * Registra una nueva cita del paciente
 * Registra una nueva cita del paciente
 *
 * appointment Appointment 
 * returns String
 **/
module.exports.postAppointment = function(req, res, next) {
    //Parameters
    console.log(req);
    res.send({
        message: 'This is the mockup controller for postAppointment'
    });
};


/**
 * Modifica una cita
 * Modifica una cita
 *
 * appointment Appointment 
 * returns String
 **/
module.exports.putAppointment = function(req, res, next) {
    //Parameters
    console.log(req);
    res.send({
        message: 'This is the mockup controller for putAppointment'
    });
};




