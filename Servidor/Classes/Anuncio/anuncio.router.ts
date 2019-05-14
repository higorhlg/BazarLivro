import * as restify from 'restify'
import * as mongoose from 'mongoose'
import { ModelRouter } from '../../common/model.router';
import { Announcement } from './anuncio.model';
import { authorize, authorizeNoProfile } from '../../security/authz.handler';
import { User } from '../Usuario/usuario.model';
import { NotFoundError } from 'restify-errors';

class AnnouncementRouter extends ModelRouter<Announcement>{
    constructor(){
        super(Announcement)
    }

    findById = (req: any, resp: any, next: any)=>{
        this.model.findById(req.params.id)
            .populate('user', ['nome', 'email'])
            .then(this.render(resp, next)).catch(next)
    }

    protected prepareAll(query: mongoose.DocumentQuery<Announcement[], Announcement>): mongoose.DocumentQuery<Announcement[], Announcement>{
        return query.populate('user', ['nome', 'email'])
    }

    validateId = (req:restify.Request, resp: restify.Response, next:restify.Next)=>{
        console.log('Entrou')
        User.findById({_id: req.body.user}).then(user=>{
            if(user){
                console.log('Usuário ok')
                next()
            }
            else{
                next(new NotFoundError('Usuário não encontrado'))
            }
        }).catch(next)
    }

    applyRouter(application: restify.Server){
        application.get('/announcements', authorizeNoProfile(), this.findAll)
        application.get('/announcements/:id', authorizeNoProfile(), [this.validateId, this.findById])
        application.post('/announcements', authorizeNoProfile(), [this.validateId, this.saveAnuncio])
        application.patch('/announcements/:id', authorizeNoProfile(), [this.validateId, this.update])
        application.del('/announcements/:id', authorizeNoProfile(), [this.validateId, this.delete])
    }
}

export const announcementRouter = new AnnouncementRouter()