




'use strict';

var Medicina = require('../service/MedicinaService');

module.exports.deleteMedicine = function deleteMedicine (req, res, next) {

    Medicina.deleteMedicine(req.swagger.params, res, next);

};

module.exports.getMedicine = function getMedicine (req, res, next) {

    Medicina.getMedicine(req.swagger.params, res, next);

};

module.exports.postMedicine = function postMedicine (req, res, next) {

    Medicina.postMedicine(req.swagger.params, res, next);

};

module.exports.putMedicine = function putMedicine (req, res, next) {

    Medicina.putMedicine(req.swagger.params, res, next);

};
