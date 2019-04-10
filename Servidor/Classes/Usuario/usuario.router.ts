import {Router} from '../../common/router'
import * as restify from 'restify'
import * as restifyError from 'restify-errors'
import {User} from './usuario.model'

class UserRouter extends Router{
    applyRouter(application: restify.Server){
        application.get('/users', (req, resp, next)=>{
            User.find().then(users=>{
                if(users)
                    resp.json(users)
                    next()
                               

            }).catch(next)
        })
        application.get('/users/:id', (req, resp, next)=>{
            User.findById(req.params.id).then(user=>{
                if(user){
                    resp.json(user)
                    next()
                }
                //resp.send(404)
                next(new restifyError.NotFoundError('Usuário não encontrado'))
                
            }).catch(next)
            return next()
        })
    }
}

export const usersRouter = new UserRouter()