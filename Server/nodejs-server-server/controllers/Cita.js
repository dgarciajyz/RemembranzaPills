




'use strict';

var Cita = require('../service/CitaService');

module.exports.deleteAppointment = function deleteAppointment (req, res, next) {

    Cita.deleteAppointment(req.swagger.params, res, next);

};

module.exports.getAppointment = function getAppointment (req, res, next) {

    Cita.getAppointment(req.swagger.params, res, next);

};

module.exports.postAppointment = function postAppointment (req, res, next) {

    Cita.postAppointment(req.swagger.params, res, next);

};

module.exports.putAppointment = function putAppointment (req, res, next) {

    Cita.putAppointment(req.swagger.params, res, next);

};
