"use strict";
exports.__esModule = true;
var jwt = require("jsonwebtoken");
var usuario_model_1 = require("../Classes/Usuario/usuario.model");
var environment_1 = require("../common/environment");
exports.tokenParser = function (req, resp, next) {
    var token = extractToken(req);
    if (token) {
        jwt.verify(token, environment_1.environment.security.apiSecret, applyBearer(req, next));
    }
    else {
        next();
    }
};
function extractToken(req) {
    //Authorization: Bearer TOKEN
    var token = undefined;
    var authorization = req.header('authorization');
    if (authorization) {
        var parts = authorization.split(' ');
        if (parts.length === 2 && parts[0] === 'Bearer') {
            console.log('Token válido');
            token = parts[1];
        }
    }
    return token;
}
function applyBearer(req, next) {
    return function (error, decoded) {
        //console.log(decoded.sub)
        if (decoded) {
            usuario_model_1.User.findOne({ email: decoded.sub }).then(function (user) {
                if (user) {
                    req.authenticated = user;
                }
                next();
            })["catch"](next);
        }
        else {
            next();
        }
    };
}
