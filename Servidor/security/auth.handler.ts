import restify from 'restify'
import jwt from 'jsonwebtoken'
import { User } from '../Classes/Usuario/usuario.model';
import { environment } from '../common/environment';
import { NotAuthorizedError } from 'restify-errors';

export const authenticate: restify.RequestHandler = (req, resp, next) =>{
    const {email, senha, usuario} = req.body
    if(usuario !== undefined){
        User.findByEmail(usuario, '+senha').then(user =>{
            console.log('Login with username')
            if(user && user.matches(senha)){
                const token = jwt.sign({
                    sub: user.email,
                    iss: 'api-bazar'
                },
                environment.security.apiSecret,
                {
                    expiresIn: '1h'
                })
                resp.json({
                    nome: user.nome,
                    usuario: user.usuario,
                    email: user.email,
                    accessToken: token
                })
                return next(false)
            } else{
                return next(new NotAuthorizedError('Credenciais inválidas'))
            }
        }).catch(next)
    }
    if(email !== undefined){
        User.findOne({email}).select('+senha').then(user =>{
            console.log('Login with email')
            if(user && user.matches(senha)){
                const token = jwt.sign({
                    sub: user.email,
                    iss: 'api-bazar'
                },
                environment.security.apiSecret)
                resp.json({
                    nome: user.nome,
                    usuario: user.usuario,
                    email: user.email,
                    accessToken: token
                })
                return next(false)
            } else{
                return next(new NotAuthorizedError('Credenciais inválidas'))
            }
        }).catch(next)
    }
}