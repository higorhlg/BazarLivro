import * as restify from 'restify'
import * as mongoose from 'mongoose'
import { ModelRouter } from '../../common/model.router';
import { Announcement } from './anuncio.model';
import { authorize, authorizeNoProfile } from '../../security/authz.handler';

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

    applyRouter(application: restify.Server){
        
        application.get('/announcements', authorizeNoProfile(), this.findAll)
        application.get('/announcements/:id', authorizeNoProfile(), this.findById)
        application.post('/announcements', authorizeNoProfile(), this.save)
        application.patch('/announcements/:id', authorizeNoProfile(), this.update)
        application.del('/announcements/:id', authorizeNoProfile(), this.delete)
    }
}

export const announcementRouter = new AnnouncementRouter()