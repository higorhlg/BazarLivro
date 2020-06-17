import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import { environment } from '../../common/environment';
import { validateCPF } from '../../common/validators';

export interface User extends mongoose.Document{
    _id: object,
    nome: string,
    dataNascimento: string,
    cpf: string,
    endereco: string,
    usuario: string,
    senha:  any | string,
    email: string,
    telefone: string,
    profile:  string[],
    matches(senha: string): boolean,
    hasAny(...profiles: string[]): boolean
}
export interface UserModel extends mongoose.Model<User>{
    findByEmail(email: string, projection: string) : Promise<User>
}
const userSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: true,
        minlength: 3,
        maxlength: 45,
        match: /^([ \u00c0-\u01ffa-zA-Z'])+$/
    },
    dataNascimento:{
        type: String,
        required: true,
        match: /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/
    },
    cpf:{
        type: String,
        required: true,
        unique: true,
        /*validate: {
            validator: validateCPF,
            message: '{PATH}: Invalid CPF ({VALUE})'
        }*/
       match: /[0-9]{3}[0-9]{3}[0-9]{3}[0-9]{2}/
    },
    endereco:{
        type: String,
        required: true,
        match: /^(RUA|Rua|R.|AVENIDA|Avenida|AV.|TRAVESSA|Travessa|TRAV.|Trav.) ([a-zA-Z_\s]+)[, ]+(\d+)\s?([-/\da-zDA-Z\\ ]+)?$/
    },
    usuario:{
        type: String,
        unique:true,
        required: true,
        minlength: 3,
        maxlength: 15,
        match: /^(?=.*[a-zA-Z])(?=.*[a-zA-Z0-9]).{3,20}$/
    },
    senha:{
        type: String,
        required: true,
        select:false,
        minlength: 8
    },
    email:{
        type: String,
        unique: true,
        required: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    telefone:{
        type: String,
        required: true,
        match: /[0-9]{2}9[93|92|96|81][0-9]{7}/
    },
    profiles:{
        type: [String],
      //  default: 'user'
    }
})

userSchema.statics.findByEmail = function(email: string, projection: string) {
    return this.findOne({email}, projection)
}

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

const saveMiddleware = function (this: User,next: () => void) {
    const user: User = this
    if (!user.isModified('senha')) {
        next()
    } else {
        hashPassword(user, next)
    }
}

const updateMiddleware = function(this: mongoose.Query<User>, next: () => void){
    if(!this.getUpdate().senha)
        next()
    else{
        hashPassword(this.getUpdate(), next)
    }
}

userSchema.pre('save', saveMiddleware)
userSchema.pre('findOneAndUpdate', updateMiddleware)
userSchema.pre('update', updateMiddleware)


export const User = mongoose.model<User, UserModel>('User',userSchema)
