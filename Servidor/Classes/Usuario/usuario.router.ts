import {ModelRouter} from '../../common/model.router'
import * as restify from 'restify'
import * as restifyError from 'restify-errors'
import {User} from './usuario.model'
import { authenticate } from '../../security/auth.handler';
import { authorize } from '../../security/authz.handler';


class UserRouter extends ModelRouter<User>{
    constructor(){
        super(User)
        this.on('beforeRender',document=>{
            document.senha = undefined
        })
    }
    
    applyRouter(application: restify.Server){

        application.get('/users', this.findAll) 

        application.get('/users/:id', /*authorize('user'),*/ (req, resp, next)=>{
            User.findById(req.params.id).then(this.render(resp, next)).catch(next)
        })

        application.post('/users', (req, resp, next) => {
            let user = new User(req.body)
            user.save().then(this.render(resp, next)).catch(next)
            return next()
        })

        application.post('/users/authenticate', authenticate)

        application.patch('/users/:id', (req, resp, next)=>{
            const op = {runValidators: true, new:true}
            User.findByIdAndUpdate(req.params.id, req.body, op).then(this.render(resp, next))
            .catch(next)
        })

        application.del('/users/:id', (req, resp, next)=>{
            User.remove({_id:req.params.id}).exec().then((user:any)=>{
                if(user.n){
                    resp.send(204)
                }else{
                    resp.send(404)
                }
                next()
            })
        })
    }
}

export const usersRouter = new UserRouter()