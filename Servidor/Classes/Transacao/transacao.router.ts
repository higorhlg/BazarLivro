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

        application.get('/transactions', this.findAll) 
        application.get('/transactions/:id', this.findById)
        application.post('/transactions', this.save)     
        application.patch('/transactions/:id', this.update)
        application.del('/transactions/:id', this.delete)
        
    }
}

export const transactionsRouter = new TransactionRouter()