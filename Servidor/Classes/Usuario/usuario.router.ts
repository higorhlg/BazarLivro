import {Router} from '../../common/router'
import * as restify from 'restify'
import {User} from './usuario.model'

class UserRouter extends Router{
    applyRouter(application: restify.Server){
        application.get('/users', (req, resp, next)=>{
            User.find().then(users=>{
                resp.json(users)
                next()
            }).catch(next)
        })
    }
}

