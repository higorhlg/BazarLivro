import mongoose from 'mongoose'

export interface Usuario extends mongoose.Document{
    //atributos
    _id:object,
    nome: string,
}

const usuarioSchema = new mongoose.Schema({
    nome:{
        type:String
    },

})

export const Usuario = mongoose.model<Usuario>('Usuario', usuarioSchema)
