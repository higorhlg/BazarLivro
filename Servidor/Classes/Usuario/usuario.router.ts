import {Router} from '../../common/router'
import * as restify from 'restify'
import * as restifyError from 'restify-errors'
import {User} from './usuario.model'
import { authenticate } from '../../security/auth.handler';

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

        application.post('/users', (req, resp, next) => {
            let user = new User(req.body)
            user.save().then(user=>{
                user.senha = undefined
                resp.json(user)
            })
            return next()
        })

        application.post('/users/authenticate', authenticate)

        application.put('/users/:id', (req, resp, next)=>{
            //User.update({id:req.params.id}, req.body )
        })

    }
}

export const usersRouter = new UserRouter()