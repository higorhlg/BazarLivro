import mongoose from 'mongoose'

export interface User extends mongoose.Document{
    _id:object,
    nome:string,
    dataNacimento: string,
    cpf:string,
    endereco:string,
    usuario:string,
    senha:string,
    email:string,
    telefone:string
}
const userSchema = new mongoose.Schema({
    nome:{
        type:String,
        required:true
    },
    dataNacimento:{
        type:String
    },
    cpf:{
        type:String,
        required:true
    },
    endereco:{
        type:String
    },
    usuario:{
        type:String,
        unique:true
    },
    senha:{
        type:String,
        required:true,
        select:false
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    telefone:{
        type:String,
        required:true
    }
})

export const User = mongoose.model<User>('User',userSchema)
