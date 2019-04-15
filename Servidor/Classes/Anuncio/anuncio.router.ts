import * as restify from 'restify'
import { ModelRouter } from '../../common/model.router';
import { Announcement } from './anuncio.model';
import { authorize, authorizeNoProfile } from '../../security/authz.handler';

class AnnouncementRouter extends ModelRouter<Announcement>{
    constructor(){
        super(Announcement)
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