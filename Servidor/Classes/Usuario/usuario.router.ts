import {ModelRouter} from '../../common/model.router'
import * as restify from 'restify'
import * as restifyError from 'restify-errors'
import {User} from './usuario.model'
import { authenticate } from '../../security/auth.handler';
import { authorize, authorizeNoProfile } from '../../security/authz.handler';

class UserRouter extends ModelRouter<User>{
    constructor(){
        super(User)
        this.on('beforeRender',document=>{
            document.senha = undefined
        })
    }
    applyRouter(application: restify.Server){

        application.get('/users', /* authorizeNoProfile(), */this.findAll) 
        application.get('/users/:id', /* authorizeNoProfile(), */ [this.validateId, this.findById])
        application.post('/users', this.save)
        application.post('/users/authenticate', authenticate)
        application.patch('/users/:id', /* authorizeNoProfile(), */ [this.validateId, this.update])
        application.del('/users/:id', /* authorizeNoProfile(), */ [this.validateId, this.delete])
    }
}
export const usersRouter = new UserRouter()