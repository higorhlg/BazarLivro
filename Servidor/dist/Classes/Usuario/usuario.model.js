"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const usuarioSchema = new mongoose_1.default.Schema({
    nome: {
        type: String,
        required: true
    },
    dataNacimento: {
        type: String
    },
    cpf: {
        type: String,
        required: true
    },
    endereco: {
        type: String
    },
    usuario: {
        type: String,
        unique: true
    },
    senha: {
        type: String,
        required: true,
        select: false
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    telefone: {
        type: String,
        required: true
    }
});
exports.Usuario = mongoose_1.default.model('Usuario', usuarioSchema);
