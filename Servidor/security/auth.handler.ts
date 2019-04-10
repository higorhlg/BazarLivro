import restify from 'restify'
import jwt from 'jsonwebtoken'
import { User } from '../Classes/Usuario/usuario.model';
import { environment } from '../common/environment';
import { NotAuthorizedError } from 'restify-errors';

export const authenticate: restify.RequestHandler = (req, resp, next) => {
    const {email, senha} = req.body
    User.findOne({email}).select('+senha').then(user =>{
        if(user && user.matches(senha)){
            const token = jwt.sign({
                sub: user.email,
                iss: 'api-bazar'
            }, environment.security.apiSecret,{
                expiresIn: '1h'
            })
            resp.json({
                name: user.nome,
                usuario: user.usuario,
                email: user.email,
                accessToken: token
            })
            return next(false)
        } else{
            return next( new NotAuthorizedError('Invalid Credentials'))
        }
    }).catch(next)
}