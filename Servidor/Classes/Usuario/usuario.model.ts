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
    senha: any | string,
    email:string,
    telefone:string,
    profile: string[],
    matches(senha: string): boolean,
    hasAny(...profiles: string[]): boolean
}
const userSchema = new mongoose.Schema({
    nome:{
        type:String,
        required:true,
        minlength: 3,
        maxlength: 45
    },
    dataNacimento:{
        type:String,
        //required: true
        match: /^([0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0]?[1-9]|[1][0-2])[./-]([0-9]{4})$/
    },
    cpf:{
        type:String,
        //required:true,
        unique: true,
        match: /(^\d{3}\x2E\d{3}\x2E\d{3}\x2D\d{2}$)/
    },
    endereco:{
        type:String,
        //required: true
    },
    usuario:{
        type:String,
        unique:true,
        required: true,
        minlength: 3,
        maxlength: 15
    },
    senha:{
        type:String,
        required:true,
        select:false,
        minlength: 8
    },
    email:{
        type:String,
        unique:true,
        required:true,
        match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    },
    telefone:{
        type:String,
        //required:true,
        match: /^(\d{2,3}|\(\d{2,3}\))?[ ]?\d{3,4}[-]?\d{3,4}$/
    },
    profiles:{
        type: [String],
        default: 'user'
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
