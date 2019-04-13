import * as restify from 'restify'
import * as jwt from 'jsonwebtoken'
import {User} from '../Classes/Usuario/usuario.model'
import { environment } from '../common/environment';

export const tokenParser: restify.RequestHandler = (req, resp, next) => {
    const token = extractToken(req)
    if(token){
        jwt.verify(token, environment.security.apiSecret, applyBearer(req, next))
    } else {
        next()
    }
}

function extractToken(req: restify.Request){
    //Authorization: Bearer TOKEN
    let token = undefined
    const authorization = req.header('authorization')
    if(authorization){
        const parts: string[] = authorization.split(' ')
        if(parts.length === 2 && parts[0] === 'Bearer'){
            console.log('Token válido')
            token = parts[1]
        }
    }
    return token
}

function applyBearer(req: restify.Request, next: restify.Next): (error: any, decoded: any) => void {
    return (error, decoded) => {
        //console.log(decoded.sub)
        if(decoded){
            User.findOne({email: decoded.sub}).then(user =>{
                if(user){
                    req.authenticated = user
                }
                next()
            }).catch(next)
        } else {
            next()
        }
    }
}