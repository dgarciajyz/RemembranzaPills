




'use strict';

var Usuario = require('../service/UsuarioService');

module.exports.inicioSesionUsuarios = function inicioSesionUsuarios (req, res, next) {

    Usuario.inicioSesionUsuarios(req.swagger.params, res, next);

};

module.exports.logoutUsuario = function logoutUsuario (req, res, next) {

    Usuario.logoutUsuario(req.swagger.params, res, next);

};

module.exports.registroUsuarios = function registroUsuarios (req, res, next) {

    Usuario.registroUsuarios(req.swagger.params, res, next);

};
