import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import { environment } from '../../common/environment';

export interface User extends mongoose.Document{
    _id:object,
    nome:string,
    dataNacimento: string,
    cpf:string,
    endereco:string,
    usuario:string,
    senha:string,
    email:string,
    telefone:string,
    matches(senha: string): boolean,
    hasAny(...profiles: string[]): boolean
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

userSchema.methods.matches = function (senha: string): boolean {
    return bcrypt.compareSync(senha, this.senha)
}

userSchema.methods.hasAny = function (...profiles: string[]): boolean {
    return profiles.some(profile => this.profiles.indexOf(profile) !== -1)
}

const hashPassword = (obj: User, next: () => void) => {
    bcrypt.hash(obj.senha, environment.security.saltRounds)
        .then(hash => {
            obj.senha = hash
            next()
        }).catch(next)
}

const saveMiddleware = function (next: () => void) {
    const user: User = this
    if (!user.isModified('senha')) {
        next()
    } else {
        hashPassword(user, next)
    }
}

userSchema.pre('save', saveMiddleware)


export const User = mongoose.model<User>('User',userSchema)
