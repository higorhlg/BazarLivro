"use strict";
exports.__esModule = true;
var jsonwebtoken_1 = require("jsonwebtoken");
var usuario_model_1 = require("../Classes/Usuario/usuario.model");
var environment_1 = require("../common/environment");
var restify_errors_1 = require("restify-errors");
exports.authenticate = function (req, resp, next) {
    var _a = req.body, email = _a.email, senha = _a.senha, usuario = _a.usuario;
    if (usuario !== undefined) {
        usuario_model_1.User.findOne({ usuario: usuario }).select('+senha').then(function (user) {
            console.log('Login with username');
            if (user && user.matches(senha)) {
                var token = jsonwebtoken_1["default"].sign({
                    sub: user.email,
                    iss: 'api-bazar'
                }, environment_1.environment.security.apiSecret, {
                    expiresIn: '1h'
                });
                resp.json({
                    nome: user.nome,
                    usuario: user.usuario,
                    email: user.email,
                    accessToken: token
                });
                return next(false);
            }
            else {
                return next(new restify_errors_1.NotAuthorizedError('Credenciais inválidas'));
            }
        })["catch"](next);
    }
    if (email !== undefined) {
        usuario_model_1.User.findOne({ email: email }).select('+senha').then(function (user) {
            console.log('Login with email');
            if (user && user.matches(senha)) {
                var token = jsonwebtoken_1["default"].sign({
                    sub: user.email,
                    iss: 'api-bazar'
                }, environment_1.environment.security.apiSecret);
                resp.json({
                    nome: user.nome,
                    usuario: user.usuario,
                    email: user.email,
                    accessToken: token
                });
                return next(false);
            }
            else {
                return next(new restify_errors_1.NotAuthorizedError('Credenciais inválidas'));
            }
        })["catch"](next);
    }
};
