import {ModelRouter} from '../../common/model.router'
import * as restify from 'restify'
import * as mongoose from 'mongoose'
import {Transaction} from './transacao.model'
import { authorize } from '../../security/authz.handler';


class TransactionRouter extends ModelRouter<Transaction>{
    constructor(){
        super(Transaction)
    }

    findById = (req: any, resp: any, next: any)=>{
        this.model.findById(req.params.id)
            .populate('user', ['nome', 'email'])
            .then(this.render(resp, next)).catch(next)
    }

    protected prepareAll(query: mongoose.DocumentQuery<Transaction[], Transaction>): mongoose.DocumentQuery<Transaction[], Transaction>{
        return query.populate('vendedor', ['nome', 'email'])
                    .populate('comprador', ['nome', 'email'])
                    .populate('anuncio', ['title', 'price'])
    }
    
    applyRouter(application: restify.Server){

        application.get('/transactions', /* authorizeNoProfile(), */ this.findAll) 
        application.get('/transactions/:id', /* authorizeNoProfile(), */[this.validateId, this.findById])
        application.post('/transactions', /* authorizeNoProfile(), */this.save)     
        application.patch('/transactions/:id', /* authorizeNoProfile(), */[this.validateId, this.update])
        application.del('/transactions/:id', /* authorizeNoProfile(), */[this.validateId, this.delete])
        
    }
}

export const transactionsRouter = new TransactionRouter()