"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var bcrypt_1 = require("bcrypt");
var environment_1 = require("../../common/environment");
var userSchema = new mongoose_1["default"].Schema({
    nome: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 45
    },
    dataNascimento: {
        type: String,
        required: true,
        match: /^([0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0]?[1-9]|[1][0-2])[./-]([0-9]{4})$/
    },
    cpf: {
        type: String,
        required: true,
        unique: true,
        /*validate: {
            validator: validateCPF,
            message: '{PATH}: Invalid CPF ({VALUE})'
        }*/
        match: /(\d{3}.?\d{3}.?\d{3}-?\d{2})/
    },
    endereco: {
        type: String,
        required: true
    },
    usuario: {
        type: String,
        unique: true,
        required: true,
        minlength: 3,
        maxlength: 15
    },
    senha: {
        type: String,
        required: true,
        select: false,
        minlength: 8
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    },
    telefone: {
        type: String,
        required: true,
        match: /\(\d{2,}\)( )?\d{4,}\-\d{4}/
    },
    profiles: {
        type: [String],
        "default": 'user'
    }
});
userSchema.methods.matches = function (senha) {
    return bcrypt_1["default"].compareSync(senha, this.senha);
};
userSchema.methods.hasAny = function () {
    var _this = this;
    var profiles = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        profiles[_i] = arguments[_i];
    }
    return profiles.some(function (profile) { return _this.profiles.indexOf(profile) !== -1; });
};
var hashPassword = function (obj, next) {
    bcrypt_1["default"].hash(obj.senha, environment_1.environment.security.saltRounds)
        .then(function (hash) {
        obj.senha = hash;
        next();
    })["catch"](next);
};
var saveMiddleware = function (next) {
    var user = this;
    if (!user.isModified('senha')) {
        next();
    }
    else {
        hashPassword(user, next);
    }
};
userSchema.pre('save', saveMiddleware);
exports.User = mongoose_1["default"].model('User', userSchema);
